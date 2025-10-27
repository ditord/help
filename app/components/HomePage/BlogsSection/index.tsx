import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router";
import type { Language } from "~/Types";

const texts = {
  hy: {
    title: "Բլոգ",
    button: "Դիտել ավելին",
  },
  en: {
    title: "Blog",
    button: "See more",
  },
};

type BlogItem = {
  id: string;
  title: string;
  image: string;
  link: string;
};

type MobileBlogItemProps = {
  item: BlogItem;
  index: number;
  lang?: Language;
};

type DesktopBlogItemProps = {
  item: BlogItem;
  currentIndex: number;
  itemIndex: number;
  lang?: Language;
};

type MobileBlogSectionProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  goToPage: (index: number) => void;
  lang?: Language;
  blogs: BlogItem[]
};

type DesktopBlogSectionProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  visibleItems: BlogItem[];
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

const MobileBlogItem: React.FC<MobileBlogItemProps> = ({ item, index, lang = "hy" }) => {
  const itemScrollStyles: React.CSSProperties = {
    scrollSnapAlign: 'center'
  };

  return (
    <Link 
      key={index} 
      className="w-72 flex-shrink-0"
      style={itemScrollStyles}
      target="_blank"
      rel="noopener noreferrer"
      to={item.link}
    >
      <div className="shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-sm bg-white p-3 cursor-pointer h-full flex flex-col">
        <img src={item.image} alt="blog-img" className="object-cover aspect-5/4 rounded" />
        <div className="pt-6 flex-1">
          <p className="font-medium">{item.title}</p>
        </div>
      </div>
    </Link>
  );
};

const DesktopBlogItem: React.FC<DesktopBlogItemProps> = ({ item, currentIndex, itemIndex, lang = "hy" }) => {
  return (
    <Link 
      key={`${currentIndex}-${itemIndex}`}
      className="w-70 flex-shrink-0"
      target="_blank"
      rel="noopener noreferrer"
      to={item.link}
    >
      <div className="shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-sm bg-white p-3 cursor-pointer h-full flex flex-col">
        <img src={item.image} alt="blog-img" className="object-cover aspect-5/4 rounded" />
        <div className="pt-6 flex-1">
          <p className="font-medium">{item.title}</p>
        </div>
      </div>
    </Link>
  );
};

const MobileBlogSection: React.FC<MobileBlogSectionProps> = ({ 
  scrollContainerRef, 
  currentPage, 
  setCurrentPage, 
  goToPage,
  lang,
  blogs,
}) => {
  const mobileScrollStyles: React.CSSProperties = {
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch'
  };

  useEffect(() => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const itemWidth = 288 + 16;
    
    const updateActiveDot = (): void => {
      const scrollPosition = container.scrollLeft;
      const viewportWidth = container.clientWidth;
      const centerPosition = scrollPosition + (viewportWidth / 2);
      const activeItemIndex = Math.floor(centerPosition / itemWidth);
      const boundedIndex = Math.max(0, Math.min(activeItemIndex, blogs.length - 1));
      
      if (boundedIndex !== currentPage) {
        setCurrentPage(boundedIndex);
      }
    };
    
    let frameId: number;
    const handleScroll = (): void => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveDot);
    };
    
    updateActiveDot();
    
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
          {blogs.map((item, index) => (
            <MobileBlogItem key={index} item={item} index={index} lang={lang} />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: blogs.length }).map((_, index) => (
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

const DesktopBlogSection: React.FC<DesktopBlogSectionProps> = ({ 
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
  lang,
}) => {
  return (
    <div className="container mx-auto px-10 relative">
      <div className="flex items-center relative">
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

        <div 
          ref={scrollContainerRef}
          className="flex-1"
        >
          <div className="flex justify-around space-x-4 pb-6">
            {visibleItems.map((item, index) => (
              <DesktopBlogItem
                lang={lang}
                key={`${currentIndex}-${index}`} 
                item={item} 
                currentIndex={currentIndex} 
                itemIndex={index} 
              />
            ))}
          </div>
        </div>

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
      
      <div className="flex justify-center space-x-2">
        {totalPages > 1 &&Array.from({ length: totalPages }).map((_, index) => (
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

export const BlogsSection: React.FC<{ lang?: Language, blogs: BlogItem[] }> = ({ lang = "hy", blogs }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);
  const [visibleItems, setVisibleItems] = useState<BlogItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const checkMobile = (): void => {
      setWindowWidth(window.innerWidth);
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

  useLayoutEffect(() => {
    if (isMobile || !scrollContainerRef.current) return;
    
    const containerWidth = scrollContainerRef.current.clientWidth;
    const itemWidth = 288 + 16;
    const itemsToShow = Math.floor(containerWidth / itemWidth);
    
    const items = blogs.slice(currentIndex, currentIndex + Math.max(1, itemsToShow));
    setVisibleItems(items);
    
    setShowLeftArrow(currentIndex > 0);
    setShowRightArrow(currentIndex + itemsToShow < blogs.length);

    const totalPositions = blogs.length - Math.min(itemsToShow, blogs.length) + 1;
    setTotalPages(Math.max(1, totalPositions));

    setCurrentPage(currentIndex);
  }, [currentIndex, isMobile, windowWidth]);

  const scrollLeft = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = (): void => {
    if (currentIndex + visibleItems.length < blogs.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPage = (positionIndex: number): void => {
    if (isMobile && scrollContainerRef.current) {
      const itemWidth = 280 + 16;
      const container = scrollContainerRef.current;
      const viewportWidth = container.clientWidth;
      const targetPosition = (positionIndex * itemWidth) + (itemWidth/2) - (viewportWidth/2);
      
      container.scrollLeft = Math.max(0, targetPosition);
      
      setCurrentPage(positionIndex);
    } else {
      if (positionIndex >= 0 && positionIndex < totalPages) {
        setCurrentIndex(positionIndex);
      }
    }
  };

  return (
    <section id="blogs" className="py-20 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <p className="text-3xl md:text-4xl font-bold leading-tight mb-12">{texts[lang].title}</p>
      </div>

      {isMobile ? (
        <MobileBlogSection
          lang={lang}
          scrollContainerRef={scrollContainerRef}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          goToPage={goToPage}
          blogs={blogs}
        />
      ) : (
        <DesktopBlogSection
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

      <div className="container mx-auto px-4 relative">
        <div className="text-center mt-6">
          <Link to="https://cyberhub.am/hy/blog/category/cyberchat/" target="_blank" rel="noopener noreferrer" className="btn btn-small">
            {texts[lang].button}
          </Link>
        </div>
      </div>
    </section>
  );
};