"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, x, y } = beamRef.current!.getBoundingClientRect();
      const mouseX = clientX - x;
      const mouseY = clientY - y;
      const xPercent = mouseX / width;
      const yPercent = mouseY / height;
      
      const gradientX = xPercent * 100;
      const gradientY = yPercent * 100;
      
      beamRef.current!.style.setProperty("--gradient-x", `${gradientX}%`);
      beamRef.current!.style.setProperty("--gradient-y", `${gradientY}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={beamRef}
      className="absolute inset-0 z-0 opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
      style={{
        background: `
          radial-gradient(
            circle at var(--gradient-x, 50%) var(--gradient-y, 50%),
            rgba(79, 195, 220, 0.15) 0%,
            rgba(59, 130, 246, 0.15) 25%,
            transparent 50%
          )
        `,
      }}
    />
  );
}; 