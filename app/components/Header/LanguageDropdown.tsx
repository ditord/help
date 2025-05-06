import { useState, useRef } from 'react';
import { Link } from 'react-router';
import type { Language } from "~/Types";

const languages = {
  en: "ENG",
  hy: "ARM",
}

export const LanguageDropdown = ({ lang = "hy" }: { lang: Language }) => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const handlerRef = useRef<((event: MouseEvent) => void) | null>(null);

  if (!handlerRef.current) {
    handlerRef.current = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
        document.removeEventListener('mousedown', handlerRef.current as EventListener);
      }
    };
  }

  const toggleLangDropdown = (): void => {
    const isDropdownOpen = !isLangDropdownOpen; 
    setIsLangDropdownOpen(isDropdownOpen);

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handlerRef.current as EventListener);
    } else {
      document.removeEventListener('mousedown', handlerRef.current as EventListener);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => toggleLangDropdown()}
        className="text-blue-500 bg-[#eef1f3] shadow-[0_16px_20px_-12px_rgba(63,105,150,0.32)] pr-8 pl-3 py-3 w-18 text-xs leading-[14px] tracking-[1.5px] transition duration-300 font-medium uppercase cursor-pointer"
      >
        {languages[lang]}
        <span className="block border-none w-6 h-6 top-1.5 right-[6px] absolute bg-[url('/assets/images/down.svg')] bg-no-repeat bg-center bg-[length:10px_6px]" />
      </button>
      
      <div 
        className={`absolute right-0 top-[80%] shadow-lg bg-white border border-gray-100 z-10${isLangDropdownOpen ? "" : " hidden"}`}
      >
        <Link
          className="block py-2 px-9 text-sm leading-relaxed hover:bg-gray-100"
          to="/hy/"
          onClick={() => toggleLangDropdown()}
        >
          ARM
        </Link>
        <Link
          className="block py-2 px-9 text-sm leading-relaxed hover:bg-gray-100"
          to="/en/"
          onClick={() => toggleLangDropdown()}
        >
          ENG
        </Link>
      </div>
    </div>
  );
};
