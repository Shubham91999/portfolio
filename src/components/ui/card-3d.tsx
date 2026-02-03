'use client';

import { cn } from "../../utils/cn";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const Card3D = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  });

  const mouseYSpring = useSpring(y, {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["4deg", "-4deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-4deg", "4deg"]
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className={cn(
        "group/card relative",
        containerClassName
      )}
      style={{
        perspective: "1500px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative w-full h-full duration-200 transition-[transform,box-shadow]",
          "group-hover/card:shadow-2xl",
          className
        )}
      >
        <div 
          style={{ 
            transform: "translateZ(0)",
            transformStyle: "preserve-3d",
          }}
          className="w-full h-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};
