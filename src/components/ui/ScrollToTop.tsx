import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return show ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 p-3 bg-dev-primary text-white rounded-full shadow-lg hover:bg-dev-light hover:text-dev-darkest transition-all z-40 animate-bounce"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  ) : null;
};