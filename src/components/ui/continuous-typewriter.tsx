"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const ContinuousTypewriter = ({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100; // Speed for typing
    const deletingSpeed = 50; // Speed for deleting
    const pauseDuration = 2000; // Pause duration when word is complete

    const type = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Typing text
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Word is complete, wait before deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
          return;
        }
      }
    };

    const timer = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className={cn("inline-block", className)}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block ml-1 w-[2px] h-[1em] bg-current align-middle"
      />
    </div>
  );
};
