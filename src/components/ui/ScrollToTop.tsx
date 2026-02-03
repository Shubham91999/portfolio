'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isInParallax, setIsInParallax] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check if we're in the AboutParallax section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // We're in parallax section if About section hasn't come into view yet
        setIsInParallax(rect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 transition-all duration-300",
            isInParallax
              ? "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              : "bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <svg
            className={cn(
              "w-6 h-6 transition-colors duration-300",
              isInParallax
                ? "text-white"
                : "text-white dark:text-white"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
