import { useEffect, useState } from 'react';
import { HeaderTop } from './HeaderTop';
import { HeaderNavigation } from './HeaderNavigation';
import { LanguageDropdown } from './LanguageDropdown';
import { Link } from 'react-router';
import type { Language } from "~/Types";

type HeaderType = {
  lang?: Language,
};

export const Header = ({ lang = "hy" }: HeaderType) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    const currentMenuIsOpen = !isMenuOpen;
    setIsMenuOpen(currentMenuIsOpen);

    if (currentMenuIsOpen) {
      document.body.classList.add('max-lg:overflow-hidden');
    } else {
      document.body.classList.remove('max-lg:overflow-hidden');
    }
  };

  useEffect(() => {
    document.body.classList.remove('max-lg:overflow-hidden');
    if (window.scrollY > 62) setScrolled(true);

    const handleScroll = () => {
      if (window.scrollY > 62) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <HeaderTop lang={lang} />
      <nav className={`bg-white h-20 z-50 px-4 py-2 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:right-0 ${scrolled ? " fixed top-0 left-0 right-0 shadow-md" : ""}`}>
        <div className="mx-auto lg:px-4 h-full">
          <div className="flex justify-between items-center h-full gap-2">
            <Link to="/" className="lg:pb-1">
              <img src="/assets/images/logo@1x.png" alt="CyberHub Logo" className="w-32.5" />
            </Link>

            <HeaderNavigation
              className={`items-center justify-center flex-1 lg:flex bg-white max-lg:absolute left-0 right-0 top-[80px] z-[99] max-lg:shadow-[0_10px_10px_rgba(0,0,0,0.078)] transition-[height] duration-[350ms] ease-in-out max-lg:h-0 overflow-hidden ${isMenuOpen ? "max-lg:h-[calc(100vh-60px)]" : ""}`}
              lang={lang}
            />

            <div className="flex items-center lg:pt-1 gap-2.5">
              <LanguageDropdown lang={lang} />

              <button
                onClick={toggleMenu}
                className="px-3 py-1 lg:hidden focus:outline-none box-content"
                aria-label="Toggle menu"
              >
                <span className={`w-7.5 h-7.5 bg-no-repeat block bg-center ${isMenuOpen ? "bg-[url('/assets/images/close.svg')]" : "bg-[url('/assets/images/toggler.svg')]"}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className={`max-lg:h-20 ${scrolled ? "h-20" : ""}`} />
    </header>
  );
};
