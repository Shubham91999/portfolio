'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const scope = useRef(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const wordsArray = words.split(" ");

  const animate = async () => {
    if (scope.current && !hasAnimated) {
      setIsAnimating(true);
      // Add your animation logic here
      setHasAnimated(true);
      setIsAnimating(false);
    }
  };

  useEffect(() => {
    if (isInView && !hasAnimated && !isAnimating) {
      animate();
    }
  }, [isInView, hasAnimated, isAnimating]);

  return (
    <motion.div ref={ref} className={className}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
