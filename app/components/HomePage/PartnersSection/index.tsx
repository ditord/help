import { useState, useEffect, useRef, type TouchEvent } from 'react';
import type { Language } from '~/Types';

const texts = {
  hy: {
    title: "Մեր գործընկերները",
  },
  en: {
    title: "Our partners",
  },
}

interface Partner {
  name: string;
  logo: string;
  url: string;
}

const partners: Partner[] = [
  {
    name: "UK International Development",
    logo: "/assets/images/partners/ukid.png",
    url: "https://www.gov.uk/government/organisations/foreign-commonwealth-office"
  },
  {
    name: "Republic of Armenia",
    logo: "/assets/images/partners/ra.png",
    url: "https://www.gov.am"
  },
  {
    name: "UNICEF",
    logo: "/assets/images/partners/unicef.png",
    url: "https://www.unicef.org/armenia/en"
  },
  {
    name: "Media Diversity Institute",
    logo: "/assets/images/partners/mdi.png",
    url: "https://mdi.am"
  },
  {
    name: "CyberHUB",
    logo: "/assets/images/partners/cyberhub.png",
    url: "https://cyberhub.am/"
  },
];

export const PartnersSection: React.FC<{ lang?: Language }> = ({ lang = "hy" }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % partners.length);
      }, 4000);
    } else if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isMobile]);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
    
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % partners.length);
      }, 2000);
    }
  };

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>): void => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = (): void => {
    const difference = touchStartX.current - touchEndX.current;
    
    if (Math.abs(difference) > 20) {
      if (difference > 0) {
        const nextSlide = (currentSlide + 1) % partners.length;
        goToSlide(nextSlide);
      } else {
        const prevSlide = (currentSlide - 1 + partners.length) % partners.length;
        goToSlide(prevSlide);
      }
    }
  };

  return (
    <section id="partners" className="container mx-auto px-4 py-21">
      <h2 className="text-3xl md:text-4xl font-black mb-15 text-center">{texts[lang].title}</h2>
      
      {!isMobile && (
        <div className="hidden md:flex max-lg:flex-wrap items-center justify-center xl:gap-x-20">
          <div className="flex items-center justify-center xl:gap-x-20 max-md:flex-col">
            {partners.slice(0, 3).map((partner, index) => (
              <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className='group'>
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="scale-[0.6] transition duration-300 ease-in-out group-hover:scale-[0.8]" 
                />
              </a>
            ))}
          </div>
          <div className="flex items-center justify-center xl:gap-x-20 max-md:flex-col">
            {partners.slice(3).map((partner, index) => (
              <a key={index + 3} href={partner.url} target="_blank" rel="noopener noreferrer" className='group'>
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="scale-[0.6] transition duration-300 ease-in-out group-hover:scale-[0.8]" 
                />
              </a>
            ))}
          </div>
        </div>
      )}
      
      {isMobile && (
        <div className="md:hidden">
          <div 
            className="relative overflow-hidden h-40 w-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div key={index} className="min-w-full flex justify-center items-center">
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="max-h-32" 
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-4 gap-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[linear-gradient(47.56deg,_#639BDF_0%,_#80C9EB_103.5%)] w-6' : 'bg-[#eef1f3]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
