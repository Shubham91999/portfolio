'use client';

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";
import { CardHoverEffect } from "../ui/card-hover-effect";
import { experiences } from "../../lib/metadata";
import { FaEarthAmericas, FaPenFancy, FaReact } from "react-icons/fa6";

interface Experience {
  title: string;
  company: string;
  location: string;
  type: string;
  date: string;
  // description: string;
  skills: string[];
}

const TechBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium
      bg-purple-50 dark:bg-purple-900/10 
      text-purple-600 dark:text-purple-300
      border border-purple-100 dark:border-purple-800
      hover:bg-purple-100 dark:hover:bg-purple-900/20
      hover:border-purple-300 dark:hover:border-purple-700
      transition-all duration-200 ease-in-out
      cursor-default
      shadow-sm shadow-purple-100/50 dark:shadow-none">
      {children}
    </div>
  );
};

const icons = [FaEarthAmericas, FaPenFancy, FaReact];

export default function Experience() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 30,
    restDelta: 0.001,
    mass: 0.1
  });

  return (
    <section id="experience" className="py-12 sm:py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
            Experience
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My professional journey in Software Development
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden sm:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-purple-500/20" />
          
          {/* Beam Effect - Hidden on mobile */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="hidden sm:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-500 to-transparent [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-transparent opacity-50" />
          </motion.div>

          <div className="relative">
            {experiences.map((experience: Experience, idx: number) => (
              <div key={idx} className="relative mb-12 sm:mb-24 last:mb-0">
                {/* Date - Repositioned for mobile */}
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
                  {experience.date}
                </motion.div>

                {/* Icon - Hidden on mobile */}
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
                          rotate: { duration: 1, ease: "easeOut" }
                        }
                      }}
                      viewport={{ once: true }}
                      className="relative w-7 h-7 flex items-center justify-center"
                    >
                      {React.createElement(icons[idx % icons.length], {
                        className: "w-6 h-6 text-purple-500"
                      })}
                    </motion.div>
                  </div>
                </div>

                {/* Content Card - Full width on mobile */}
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    x: idx % 2 === 0 ? 100 : -100,
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: idx * 0.2,
                    type: "spring",
                    bounce: 0.4
                  }}
                  className={cn(
                    "w-full sm:w-[calc(50%-3rem)]",
                    "sm:mt-12",
                    idx % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                  )}
                >
                  <CardHoverEffect>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4">
                        <span className="font-medium">{experience.company}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{experience.location}</span>
                      </div>

                      {/* <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 mb-3 sm:mb-4 leading-relaxed">
                        {experience.description}
                      </p> */}

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {experience.skills.map((skill: string) => (
                          <TechBadge key={skill}>
                            {skill}
                          </TechBadge>
                        ))}
                      </div>
                    </div>
                  </CardHoverEffect>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
