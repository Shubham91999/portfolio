'use client';

import { cn } from "../../utils/cn";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const GridExpandable = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const GridExpandableItem = ({
  className,
  title,
  subtitle,
  description,
  date,
  issuer,
  link,
}: {
  className?: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  issuer: string;
  link: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={cn(
        "row-span-1 cursor-pointer",
        isExpanded && "md:col-span-2",
        className
      )}
    >
      <motion.div
        layout
        className={cn(
          "h-full rounded-xl",
          "bg-white dark:bg-neutral-900",
          "border border-neutral-200 dark:border-neutral-800",
          "shadow-sm hover:shadow-md dark:shadow-none",
          "transition-all duration-300 ease-in-out",
          "overflow-hidden",
          "relative"
        )}
      >
        <motion.div layout className="p-4">
          <motion.div layout className="flex justify-between items-start mb-3">
            <div>
              <motion.h3 layout className="font-bold text-lg text-neutral-900 dark:text-neutral-100">
                {title}
              </motion.h3>
              <motion.p layout className="text-sm text-neutral-600 dark:text-neutral-400">
                {subtitle}
              </motion.p>
            </div>
            <motion.span layout className="text-sm text-neutral-500 dark:text-neutral-500">
              {date}
            </motion.span>
          </motion.div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <p className="text-neutral-600 dark:text-neutral-400">
                  {description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">
                    {issuer}
                  </span>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
