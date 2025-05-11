import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ClipPathPanel } from "~/elements";
import { helpItems } from "~/config";
import type { Language } from "~/Types";

const texts = {
  hy: {
    title: "Ի՞նչ անել, եթե…",
    button: "Դիտել բոլորը",
  },
  en: {
    title: "What to do if...",
    button: "View all",
  },
}

// Define types for our data and props
type HelpItem = {
  id: number;
  icon: React.ReactNode;
  title: {
    [key in Language]: string;
  }
  // Add any other properties from helpItems
};

// Props types for each component
type MobileHelpItemProps = {
  item: HelpItem;
  index: number;
  lang?: Language;
};

type DesktopHelpItemProps = {
  item: HelpItem;
  currentIndex: number;
  itemIndex: number;
  lang?: Language;
};

type MobileHelpSectionProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  goToPage: (index: number) => void;
  lang?: Language;
};

type DesktopHelpSectionProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  visibleItems: HelpItem[];
  currentIndex: number;
  showLeftArrow: boolean;
  showRightArrow: boolean;
  totalPages: number;
  currentPage: number;
  scrollLeft: () => void;
  scrollRight: () => void;
  goToPage: (index: number) => void;
  lang?: Language;
};

// ------------------- MOBILE HELP ITEM COMPONENT -------------------
const MobileHelpItem: React.FC<MobileHelpItemProps> = ({ item, index, lang = "hy" }) => {
  const itemScrollStyles: React.CSSProperties = {
    scrollSnapAlign: 'center'
  };
  
  return (
    <Link 
      key={index} 
      className="w-72 flex-shrink-0"
      style={itemScrollStyles}
      to={`/${lang}/help/?active=${item.id}`}
    >
      <span className="shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-sm bg-white px-6 pt-6 pb-3 flex flex-col group cursor-pointer h-full">
        <ClipPathPanel width="w-20" height="h-20">{item.icon}</ClipPathPanel>
        <p className="font-medium text-lg mt-4">
          {item.title[lang]}
        </p>
        <span className="flex justify-end mt-auto">
          <img src="/assets/images/arrow-right.svg" alt="to help" className="w-10 transition-opacity group-hover:scale-[1.2] transform duration-300" />
        </span>
      </span>
    </Link>
  );
};

// ------------------- DESKTOP HELP ITEM COMPONENT -------------------
const DesktopHelpItem: React.FC<DesktopHelpItemProps> = ({ item, currentIndex, itemIndex, lang = "hy" }) => {
  return (
    <Link 
      key={`${currentIndex}-${itemIndex}`}
      className="w-70 flex-shrink-0"
      to={`/${lang}/help/?active=${item.id}`}
    >
      <span className="shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-sm bg-white px-6 pt-6 pb-3 flex flex-col group cursor-pointer h-full">
        <ClipPathPanel width="w-20" height="h-20">{item.icon}</ClipPathPanel>
        <p className="font-medium text-lg mt-4 min-h-21">
          {item.title[lang]}
        </p>
        <span className="flex justify-end mt-auto">
          <img src="/assets/images/arrow-right.svg" alt="to help" className="w-10 transition-opacity group-hover:scale-[1.2] transform duration-300" />
        </span>
      </span>
    </Link>
  );
};

// ------------------- MOBILE VIEW COMPONENT -------------------
const MobileHelpSection: React.FC<MobileHelpSectionProps> = ({ 
  scrollContainerRef, 
  currentPage, 
  setCurrentPage, 
  goToPage,
  lang
}) => {
  const mobileScrollStyles: React.CSSProperties = {
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch'
  };

  // Register mobile scroll handling with no delay
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const itemWidth = 288 + 16; // w-72 (288px) + margin-right (16px)
    
    const updateActiveDot = (): void => {
      const scrollPosition = container.scrollLeft;
      const viewportWidth = container.clientWidth;
      const centerPosition = scrollPosition + (viewportWidth / 2);
      const activeItemIndex = Math.floor(centerPosition / itemWidth);
      const boundedIndex = Math.max(0, Math.min(activeItemIndex, helpItems.length - 1));
      
      if (boundedIndex !== currentPage) {
        setCurrentPage(boundedIndex);
      }
    };
    
    // Using requestAnimationFrame for smoother updates
    let frameId: number;
    const handleScroll = (): void => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveDot);
    };
    
    // Initial calculation
    updateActiveDot();
    
    // Add event listener
    container.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, setCurrentPage]);
  
  return (
    <div className="relative overflow-hidden">
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto no-scrollbar"
        style={mobileScrollStyles}
      >
        <div className="flex gap-x-4 px-10 pb-6 min-w-max">
          {helpItems.map((item, index) => (
            <MobileHelpItem key={index} item={item} index={index} lang={lang} />
          ))}
        </div>
      </div>
      
      {/* Pagination Dots */}
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: helpItems.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? "bg-[linear-gradient(47.56deg,_#639BDF_0%,_#80C9EB_103.5%)] w-6" 
                  : "bg-[#eef1f3]"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ------------------- DESKTOP VIEW COMPONENT -------------------
const DesktopHelpSection: React.FC<DesktopHelpSectionProps> = ({ 
  scrollContainerRef, 
  visibleItems, 
  currentIndex, 
  showLeftArrow, 
  showRightArrow, 
  totalPages, 
  currentPage,
  scrollLeft, 
  scrollRight, 
  goToPage,
  lang
}) => {
  return (
    <div className="container mx-auto px-10 relative">
      <div className="flex items-center relative">
        {/* Left Arrow */}
        <button 
          onClick={scrollLeft}
          className={`cursor-pointer absolute -left-10 z-10 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center hover:bg-gray-50 transition-all focus:outline-none ${showLeftArrow ? "" : "invisible"}`}
          aria-label="Scroll left"
        >
          <img 
            src="/assets/images/arrow-right.svg" 
            alt="scroll left" 
            className="w-6 h-6 transform rotate-180" 
          />
        </button>

        {/* Content Container */}
        <div 
          ref={scrollContainerRef}
          className="flex-1"
        >
          <div className="flex justify-around space-x-4 pb-6">
            {visibleItems.map((item, index) => (
              <DesktopHelpItem
                lang={lang}
                key={`${currentIndex}-${index}`} 
                item={item} 
                currentIndex={currentIndex} 
                itemIndex={index} 
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={scrollRight}
          className={`cursor-pointer absolute -right-10 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center hover:bg-gray-50 transition-all focus:outline-none ${showRightArrow ? "" : "invisible"}`}
          aria-label="Scroll right"
        >
          <img 
            src="/assets/images/arrow-right.svg" 
            alt="scroll right" 
            className="w-6 h-6" 
          />
        </button>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentPage === index 
                ? "bg-[linear-gradient(47.56deg,_#639BDF_0%,_#80C9EB_103.5%)] w-6" 
                : "bg-[#eef1f3]"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// ------------------- MAIN COMPONENT -------------------
export const HelpSection: React.FC<{ lang?: Language }> = ({ lang = "hy" }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);
  const [visibleItems, setVisibleItems] = useState<HelpItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  // Detect mobile/desktop with requestAnimationFrame for smoother transitions
  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    let frameId: number;
    const handleResize = (): void => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(checkMobile);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate visible items for desktop view
  useLayoutEffect(() => {
    if (isMobile || !scrollContainerRef.current) return;
    
    const containerWidth = scrollContainerRef.current.clientWidth;
    const itemWidth = 304;
    const itemsToShow = Math.floor(containerWidth / itemWidth);
    
    const items = helpItems.slice(currentIndex, currentIndex + Math.max(1, itemsToShow));
    setVisibleItems(items);
    
    setShowLeftArrow(currentIndex > 0);
    setShowRightArrow(currentIndex + itemsToShow < helpItems.length);

    const totalPositions = helpItems.length - Math.min(itemsToShow, helpItems.length) + 1;
    setTotalPages(Math.max(1, totalPositions));

    setCurrentPage(currentIndex);
  }, [currentIndex, isMobile]);

  // Navigation functions
  const scrollLeft = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = (): void => {
    if (currentIndex + visibleItems.length < helpItems.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Optimized goToPage function with no delay for mobile
  const goToPage = (positionIndex: number): void => {
    if (isMobile && scrollContainerRef.current) {
      // Mobile navigation - instant scroll to position
      const itemWidth = 280 + 16;
      const container = scrollContainerRef.current;
      const viewportWidth = container.clientWidth;
      const targetPosition = (positionIndex * itemWidth) + (itemWidth/2) - (viewportWidth/2);
      
      // Use scrollLeft for immediate response rather than scrollTo with smooth behavior
      container.scrollLeft = Math.max(0, targetPosition);
      
      // Update page immediately
      setCurrentPage(positionIndex);
    } else {
      // Desktop navigation - update index
      if (positionIndex >= 0 && positionIndex < totalPages) {
        setCurrentIndex(positionIndex);
      }
    }
  };

  return (
    <section id="blogs" className="py-20 bg-[#fafafa]">
      {/* Title */}
      <div className="container mx-auto px-4 relative">
        <p className="text-3xl md:text-4xl font-bold leading-tight mb-12">{texts[lang].title}</p>
      </div>

      {/* Render either mobile or desktop view */}
      {isMobile ? (
        <MobileHelpSection
          lang={lang}
          scrollContainerRef={scrollContainerRef}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          goToPage={goToPage}
        />
      ) : (
        <DesktopHelpSection
          lang={lang}
          scrollContainerRef={scrollContainerRef}
          visibleItems={visibleItems}
          currentIndex={currentIndex}
          showLeftArrow={showLeftArrow}
          showRightArrow={showRightArrow}
          totalPages={totalPages}
          currentPage={currentPage}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
          goToPage={goToPage}
        />
      )}

      {/* View All Link - Common for both views */}
      <div className="container mx-auto px-4 relative">
        <div className="text-center mt-6">
          <Link to={`/${lang}/help/`} className="btn btn-blue btn-small">
            {texts[lang].button}
          </Link>
        </div>
      </div>
    </section>
  );
};