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
                  to={Array.isArray(navItem.href) ? navItem.href[0] : navItem.href}
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
