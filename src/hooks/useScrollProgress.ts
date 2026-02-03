'use client';

import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the total scrollable height (total document height minus viewport height)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Get current scroll position
      const scrollPosition = window.scrollY;
      
      // Calculate progress percentage
      const newProgress = (scrollPosition / totalHeight) * 100;
      
      // Update progress state
      setProgress(Math.min(100, Math.max(0, newProgress)));
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial calculation
    handleScroll();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
