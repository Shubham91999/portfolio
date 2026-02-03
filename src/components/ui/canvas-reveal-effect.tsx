'use client';

import React, { useEffect, useRef } from 'react';

interface CanvasRevealEffectProps {
  children: React.ReactNode;
}

export const CanvasRevealEffect: React.FC<CanvasRevealEffectProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Mouse move handling logic can be added here if needed
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
};

export default CanvasRevealEffect;
