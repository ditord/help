import { Link, useLocation } from 'react-router';
import { headerNavigation } from "~/config";
import type { Language } from '~/Types';

const normalizePath = (path: string) => path.replace(/\/+$/, '');

type HeaderNavigationType = {
  className?: string
  lang?: Language
};

export const HeaderNavigation = ({ className = "", lang = "hy" }: HeaderNavigationType) => {
  const location = useLocation();

  const onLinkClick = (e: any, href: string) => {
    if (href.includes("#")) {
      e.preventDefault();
      const elementId = href.split("#")[1];
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        const elementTop = targetElement.offsetTop;
        const scrollPosition = elementTop - 40;
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }

  return (
    <div className={className}>
      <ul className="lg:flex xl:space-x-7.5 lg:space-x-2.5 max-lg:space-y-2 max-lg:p-5 max-lg:mt-2">
        {
          headerNavigation[lang].map(navItem => {
            let isActive = false
            if (Array.isArray(navItem.href)) {
              isActive = navItem.href.some(href => normalizePath(href) === normalizePath(location.pathname));
            } else {
              isActive = normalizePath(navItem.href) === normalizePath(location.pathname);
            }

            return (
              <li key={navItem.text} className="max-lg:border-b max-lg:border-black/10 max-lg:px-2.5 max-lg:py-1">
                <Link
                  to={navItem.href}
                  onClick={(e) => onLinkClick(e, navItem.href)}
                  className={`hover:text-[#5a8fdc] text-md uppercase font-medium lg:text-sm ${isActive ? "text-[#5a8fdc]" : "text-gray-800"}`}
                >
                  {navItem.text}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
