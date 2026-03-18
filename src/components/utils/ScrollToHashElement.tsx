import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHashElement = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
  return null;
};