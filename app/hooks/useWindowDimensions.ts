import { useLayoutEffect, useRef } from 'react';
import { useWindowStore } from '~/store';

export const useWindowDimensions = (debounceDelay = 200) => {
  const { updateWindowDimensions } = useWindowStore();
  const timeoutRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    updateWindowDimensions();

    const handleResize = () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = window.setTimeout(() => {
        requestAnimationFrame(() => {
          updateWindowDimensions();
        });
      }, debounceDelay);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [updateWindowDimensions, debounceDelay]);

  return useWindowStore;
};