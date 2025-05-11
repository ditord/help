import { create } from 'zustand';

type WindowState = {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  updateWindowDimensions: () => void;
};

export const useWindowStore = create<WindowState>((set) => ({
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  height: typeof window !== 'undefined' ? window.innerHeight : 0,
  isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  isTablet: typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false,
  isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1024 : false,
  updateWindowDimensions: () => {
    if (typeof window === 'undefined') return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    set({
      width,
      height,
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024
    });
  }
}));
