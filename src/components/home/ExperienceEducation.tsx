'use client';

import React from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";
import { CardHoverEffect } from "../ui/card-hover-effect";
import { education } from "../../lib/metadata";
import { FaGraduationCap, FaXmark } from "react-icons/fa6";

interface Education {
  title: string;
  institution: string;
  location: string;
  date: string;
  cgpa: string;
  coursework: string[];
}

const educationIcons = [FaGraduationCap];

export default function EducationSection() {
  const [selectedId, setSelectedId] = React.useState<number | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 30,
    restDelta: 0.001,
    mass: 0.1,
  });

  // Handle escape key to close modal
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="education" className="py-12 sm:py-24 bg-white dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
            Education
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
            Click on a card to see more details about my coursework and academic performance.
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          <div className="hidden sm:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-purple-500/20" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="hidden sm:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-500 to-transparent [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-transparent opacity-50" />
          </motion.div>

          <div className="relative">
            {education.map((edu: Education, idx: number) => (
              <div key={idx} className="relative mb-12 sm:mb-24 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "text-sm text-purple-500 font-medium mb-2",
                    "sm:absolute sm:top-0",
                    "sm:mb-0",
                    idx % 2 === 0
                      ? "sm:right-[51%] sm:pr-4"
                      : "sm:left-[51%] sm:pl-4"
                  )}
                >
                  {edu.date}
                </motion.div>

                <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 -translate-y-[0.5px] top-0">
                  <div className="relative">
                    <div className="absolute inset-0 -m-[1px] bg-white dark:bg-black" />
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      whileInView={{
                        scale: 1,
                        rotate: 360,
                        transition: {
                          scale: { duration: 0.5 },
                          rotate: { duration: 1, ease: "easeOut" },
                        },
                      }}
                      viewport={{ once: true }}
                      className="relative w-7 h-7 flex items-center justify-center"
                    >
                      {React.createElement(educationIcons[idx % educationIcons.length], {
                        className: "w-6 h-6 text-purple-500",
                      })}
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.2,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  className={cn(
                    "w-full sm:w-[calc(50%-3rem)]",
                    "sm:mt-12",
                    "cursor-pointer group",
                    idx % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                  )}
                  onClick={() => setSelectedId(idx)}
                >
                  <CardHoverEffect>
                    <div className="p-4 sm:p-6 transition-colors group-hover:bg-purple-500/5">
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-purple-500 transition-colors">
                        {edu.title}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                        <span className="font-medium">{edu.institution}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{edu.location}</span>
                      </div>
                      <div className="text-xs text-purple-500/60 font-medium italic">
                        Click for details
                      </div>
                    </div>
                  </CardHoverEffect>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden border border-purple-500/20"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-purple-500 transition-colors z-10"
              >
                <FaXmark className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-10">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-bold mb-3 uppercase tracking-wider">
                    {education[selectedId].date}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                    {education[selectedId].title}
                  </h3>
                  <div className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
                    {education[selectedId].institution}
                  </div>
                  <div className="text-neutral-500 mb-6">
                    {education[selectedId].location}
                  </div>

                  <div className="flex items-center gap-4 py-4 border-y border-purple-500/10 mb-8">
                    <div>
                      <div className="text-xs text-neutral-500 uppercase tracking-widest mb-1 italic">CGPA</div>
                      <div className="text-2xl font-bold text-purple-500 italic">{education[selectedId].cgpa}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-4">Core Coursework</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {education[selectedId].coursework.map((course, i) => (
                        <div key={i} className="flex items-center gap-2 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover/item:bg-purple-500 transition-colors" />
                          <span className="text-sm text-neutral-600 dark:text-neutral-400">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
