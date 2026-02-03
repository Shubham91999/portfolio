'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        // @ts-ignore
        (navigator.msMaxTouchPoints > 0));
    };

    setIsVisible(!isTouchDevice());

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    if (!isTouchDevice()) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Spotlight effect in dark mode */}
      {isDark && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-40 hidden sm:block"
          animate={{
            x: position.x - 100,
            y: position.y - 100,
            scale: isPointer ? 1.2 : isPressed ? 0.8 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 15,
            mass: 0.1,
          }}
        >
          <div 
            className="w-[200px] h-[200px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)',
              filter: 'blur(4px)',
            }}
          />
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'radial-gradient(circle, rgba(147,51,234,0.05) 0%, rgba(147,51,234,0.02) 40%, transparent 70%)',
              filter: 'blur(8px)',
            }}
          />
        </motion.div>
      )}

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 pointer-events-none z-50 mix-blend-difference hidden sm:block"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isPointer ? 1.4 : isPressed ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className={`
          w-full h-full rounded-full 
          bg-white
          transition-opacity duration-200
          opacity-100
          ${isDark ? 'shadow-[0_0_10px_rgba(255,255,255,0.7)]' : ''}
        `} />

        {/* Glow effects in dark mode */}
        {isDark && (
          <>
            {/* Outer glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20 blur-lg"
              style={{ transform: 'scale(2)' }}
              animate={{
                opacity: isPointer ? [0.4, 0.6, 0.4] : [0.2, 0.3, 0.2],
                scale: isPointer ? [2, 2.2, 2] : [2, 2.1, 2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Inner glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/30 blur-md"
              style={{ transform: 'scale(1.5)' }}
              animate={{
                opacity: isPointer ? [0.5, 0.7, 0.5] : [0.3, 0.4, 0.3],
                scale: isPointer ? [1.5, 1.7, 1.5] : [1.5, 1.6, 1.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
            />
          </>
        )}
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 mix-blend-difference hidden sm:block"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isPointer ? 1.6 : isPressed ? 1.2 : 1,
          rotate: isPointer ? 45 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 25,
          mass: 0.1,
        }}
      >
        <div className={`
          w-full h-full 
          rounded-full 
          border border-white
          transition-all duration-200
          ${isPointer ? 'opacity-90' : 'opacity-70'}
          ${isPointer ? 'rounded-lg' : 'rounded-full'}
          ${isDark ? 'shadow-[0_0_15px_rgba(255,255,255,0.5)]' : ''}
        `} />

        {/* Ring glow in dark mode */}
        {isDark && (
          <motion.div
            className="absolute inset-0 rounded-full border border-white/30 blur-sm"
            animate={{
              scale: isPointer ? [1, 1.1, 1] : [1, 1.05, 1],
              opacity: isPointer ? [0.3, 0.5, 0.3] : [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>

      {/* Click effect in dark mode */}
      {isDark && isPressed && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50"
          style={{
            x: position.x - 20,
            y: position.y - 20,
          }}
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-10 h-10 rounded-full bg-white/30 blur-lg" />
        </motion.div>
      )}
    </>
  );
}
