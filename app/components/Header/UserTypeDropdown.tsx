import { useState, useRef, useEffect } from 'react';
import { useUserStore } from '~/store';
import { CyberChatIcon } from './CyberChatIcon';
import type { Language } from "~/Types";

type Choice = 'child' | 'parent';

const texts = {
  hy: {
    title: 'Կայքը դիտում է',
    child: 'Երեխա / Դեռահաս',
    parent: 'Ծնող / Մեծահասակ',
  },
  en: {
    title: 'Viewing the site as',
    child: 'Child / Teen',
    parent: 'Parent / Guardian',
  },
};

export const UserTypeDropdown = ({ lang = "hy" }: { lang: Language }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const handlerRef = useRef<((event: MouseEvent) => void) | null>(null);

  const userType = useUserStore((s) => s.userType);
  const setUserType = useUserStore((s) => s.setUserType);
  const t = texts[lang];

  if (!handlerRef.current) {
    handlerRef.current = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        document.removeEventListener('mousedown', handlerRef.current as EventListener);
      }
    };
  }

  useEffect(() => {
    return () => {
      if (handlerRef.current) {
        document.removeEventListener('mousedown', handlerRef.current as EventListener);
      }
    };
  }, []);

  const toggleDropdown = (): void => {
    const nextOpen = !isDropdownOpen;
    setIsDropdownOpen(nextOpen);

    if (nextOpen) {
      document.addEventListener('mousedown', handlerRef.current as EventListener);
    } else {
      document.removeEventListener('mousedown', handlerRef.current as EventListener);
    }
  };

  const handleSelect = (choice: Choice): void => {
    setUserType(choice);
    toggleDropdown();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => toggleDropdown()}
        className="relative bg-[linear-gradient(47.56deg,#5188D7_0%,#80C9EB_103.5%)] shadow-[0_16px_20px_-12px_rgba(63,105,150,0.32)] pr-8 pl-3 h-9 w-14 flex items-center cursor-pointer"
      >
        <CyberChatIcon className="h-5 w-auto text-white" />
        <span className="block border-none w-6 h-6 top-1.5 right-[6px] absolute bg-[url('/assets/images/down-white.svg')] bg-no-repeat bg-center bg-[length:10px_6px]" />
      </button>

      <div
        className={`absolute right-0 top-[80%] w-64 shadow-lg bg-white border border-gray-100 overflow-hidden z-10${isDropdownOpen ? "" : " hidden"}`}
      >
        <p className="py-2 text-center text-[#6D6D6D] text-sm font-normal">{t.title}</p>

        <button
          type="button"
          onClick={() => handleSelect('child')}
          className={`block w-full py-2.5 text-center text-sm font-bold cursor-pointer transition-colors duration-300 ${
            userType === 'child'
              ? 'bg-[linear-gradient(47.56deg,#5188D7_0%,#80C9EB_103.5%)] text-white'
              : 'text-[#5188D7] hover:bg-gray-50'
          }`}
        >
          {t.child}
        </button>

        <button
          type="button"
          onClick={() => handleSelect('parent')}
          className={`block w-full py-2.5 text-center text-sm font-bold cursor-pointer transition-colors duration-300 ${
            userType === 'parent'
              ? 'bg-[linear-gradient(47.56deg,#5188D7_0%,#80C9EB_103.5%)] text-white'
              : 'text-[#5188D7] hover:bg-gray-50'
          }`}
        >
          {t.parent}
        </button>
      </div>
    </div>
  );
};
