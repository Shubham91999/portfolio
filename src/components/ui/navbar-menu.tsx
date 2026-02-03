'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "../../utils/cn";
import { Dancing_Script } from 'next/font/google';
import ThemeToggle from "./ThemeToggle";
import { siteMetadata } from "../../lib/metadata";
const dancingScript = Dancing_Script({ subsets: ['latin'] });

export const NavbarMenu = () => {
  const { firstName } = siteMetadata;
  const [isOpen, setIsOpen] = useState(false);
  const [isBeforeAbout, setIsBeforeAbout] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setIsBeforeAbout(rect.top > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Node;
      if (isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(target) &&
        !buttonRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const MenuItem = ({ item, mobile = false }: { item: { name: string; link: string }, mobile?: boolean }) => (
    <Link
      key={item.link}
      href={item.link}
      onClick={() => mobile && setIsOpen(false)}
      className={cn(
        "relative flex items-center transition-colors duration-200",
        mobile
          ? isBeforeAbout
            ? "text-lg py-3 text-white/90 hover:text-white"
            : "text-lg py-3 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white"
          : isBeforeAbout
            ? "text-sm px-3 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/10"
            : "text-sm px-3 py-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10",
        "font-medium"
      )}
    >
      {item.name}
    </Link>
  );

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between py-4"
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              dancingScript.className,
              "text-3xl",
              isBeforeAbout
                ? "text-white hover:text-violet-200"
                : "text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300",
              "transition-colors duration-300",
              "z-50"
            )}
          >
            {firstName}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-end">
            <div className={cn(
              "flex flex-row items-center justify-center space-x-2 rounded-full p-2 px-4 backdrop-blur-md shadow-lg transition-colors duration-300",
              isBeforeAbout
                ? "bg-[#2B1B4D]/30 border border-white/[0.1]"
                : "bg-white/30 dark:bg-black/30 border border-white/[0.3] dark:border-white/[0.1]"
            )}>
              {menuItems.map((item) => (
                <MenuItem key={item.name} item={item} />
              ))}
              <div className={cn(
                "pl-2 border-l",
                isBeforeAbout
                  ? "border-white/10"
                  : "border-neutral-300 dark:border-neutral-700"
              )}>
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isBeforeAbout
                ? "hover:bg-white/10"
                : "hover:bg-white/20 dark:hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={cn(
                "w-full h-0.5 transition-transform duration-300",
                isBeforeAbout ? "bg-white" : "bg-neutral-900 dark:bg-white",
                isOpen ? 'rotate-45 translate-y-2' : ''
              )} />
              <span className={cn(
                "w-full h-0.5 transition-opacity duration-300",
                isBeforeAbout ? "bg-white" : "bg-neutral-900 dark:bg-white",
                isOpen ? 'opacity-0' : ''
              )} />
              <span className={cn(
                "w-full h-0.5 transition-transform duration-300",
                isBeforeAbout ? "bg-white" : "bg-neutral-900 dark:bg-white",
                isOpen ? '-rotate-45 -translate-y-2' : ''
              )} />
            </div>
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "md:hidden backdrop-blur-lg shadow-lg transition-colors duration-300",
                isBeforeAbout
                  ? "bg-[#2B1B4D]/80 border-t border-white/[0.1]"
                  : "bg-white/80 dark:bg-black/80 border-t border-neutral-200/50 dark:border-neutral-800/50"
              )}
            >
              <div className="flex flex-col py-4 px-4 space-y-2">
                {menuItems.map((item) => (
                  <MenuItem key={item.name} item={item} mobile />
                ))}
                <div className={cn(
                  "pt-2 mt-2 border-t flex items-center",
                  isBeforeAbout
                    ? "border-white/10"
                    : "border-neutral-200 dark:border-neutral-700"
                )}>
                  <span className={cn(
                    "text-sm mr-3",
                    isBeforeAbout
                      ? "text-white/70"
                      : "text-neutral-600 dark:text-neutral-400"
                  )}>
                    Toggle theme
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default NavbarMenu;
