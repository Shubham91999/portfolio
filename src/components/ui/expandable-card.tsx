'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableCardProps {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  issuer: string;
  link?: string;
}

export const ExpandableCard = ({
  title,
  subtitle,
  description,
  date,
  issuer,
  link,
}: ExpandableCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="relative w-full border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 overflow-hidden"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="text-left w-full p-6 flex flex-col gap-2"
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
              {title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {subtitle}
            </p>
          </div>
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="origin-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-600 dark:text-neutral-400"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 space-y-4">
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {description}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    Issuer:
                  </span>{" "}
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {issuer}
                  </span>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    Date:
                  </span>{" "}
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {date}
                  </span>
                </div>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
