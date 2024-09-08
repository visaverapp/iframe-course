import { useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T>(null);

  const handleClick = (event: MouseEvent) => {
    if (ref.current && !event.composedPath().includes(ref.current)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
};
