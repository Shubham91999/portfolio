"use client";

import { cn } from "../../utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.03,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);
  
  return (
    <div ref={scope} className={cn("font-bold inline-block", className)}>
      {words.map((word, idx) => {
        return (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.split("").map((char, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                key={char + index}
                className={cn(`opacity-0 inline-block`, word.className)}
              >
                {char}
              </motion.span>
            ))}
            {idx < words.length - 1 && <span>&nbsp;</span>}
          </div>
        );
      })}
    </div>
  );
}; 