'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagicButton from '../ui/MagicButton';
import { CardHoverEffect } from '../ui/card-hover-effect';
import { useTheme } from 'next-themes';
import { certifications } from '../../lib/metadata';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certifications" className="py-16 relative bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Continuous learning and professional development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {displayedCertifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <CardHoverEffect className="!bg-white dark:!bg-neutral-900 !border-zinc-200 dark:!border-zinc-800 backdrop-blur-sm shadow-md h-full border">
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-start mb-2 gap-4">
                        <h3 className="font-bold text-lg leading-tight text-violet-600 dark:text-violet-400">
                          {cert.title}
                        </h3>
                        <span className="text-xs whitespace-nowrap mt-1 text-zinc-500 dark:text-zinc-400">
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-sm mb-4 text-zinc-500 dark:text-zinc-400">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="flex justify-end mt-4">
                      <button
                        onClick={() => window.open(cert.link, '_blank')}
                        className="relative inline-flex h-8 overflow-hidden rounded-lg p-[1px] focus:outline-none"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600" />
                        <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-zinc-50 dark:bg-neutral-900 px-3 text-[10px] font-medium text-zinc-900 dark:text-white transition-colors hover:bg-zinc-100 dark:hover:bg-neutral-800 gap-1.5">
                          View Credentials
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-3 h-3 text-violet-600 dark:text-violet-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </CardHoverEffect>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / Less Button */}
        {certifications.length > 6 && (
          <motion.div
            className="flex justify-center mt-12"
            layout
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-violet-900 to-purple-700 dark:from-violet-600 dark:to-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)] dark:shadow-[0_0_15px_rgba(168,85,247,0.5)] opacity-90 hover:opacity-100 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] border border-purple-500/50 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                {showAll ? 'View Less' : 'View More Certifications'}
                <span className={`inline-block ml-1 transition-transform duration-300 ${showAll ? 'group-hover:-translate-y-1' : 'group-hover:translate-x-1'}`}>
                  {showAll ? <FaChevronUp className="w-3 h-3" /> : '→'}
                </span>
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
