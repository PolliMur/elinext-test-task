import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(handler: (event: Event) => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('pointerdown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('pointerdown', listener);
    };
  }, []);

  return ref;
};
