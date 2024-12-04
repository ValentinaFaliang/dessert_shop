import { useEffect, RefObject } from 'react';

const useOutsideClick = (ref: RefObject<HTMLDivElement>, callback: () => void) => {

  useEffect(() => {
    const handler = (e: any) => {
      console.log('outsideClick', ref.current, e.target);
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
};

export default useOutsideClick;
