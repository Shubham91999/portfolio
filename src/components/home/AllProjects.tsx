'use client';

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { projects } from "../../lib/metadata";
import { IconType } from "react-icons";
import imageLoader from "../../lib/imageLoader";
import { useTheme } from 'next-themes';

interface ProjectIcon {
  icon: IconType;
  color: string;
}

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  icons: ProjectIcon[];
  link: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AllProjects(): JSX.Element {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleProjectClick = (link: string): void => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-24 bg-white dark:bg-black" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A showcase of my recent work, featuring applications built with modern technologies.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project: Project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="w-full cursor-pointer"
              onClick={() => handleProjectClick(project.link)}
            >
              <CardContainer>
                <CardBody className="relative w-full h-[420px] bg-white dark:bg-neutral-900 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col group/card hover:border-purple-500/50 transition-colors">
                  <CardItem
                    translateZ="30"
                    className="text-lg font-semibold text-neutral-900 dark:text-white mb-1.5 h-[62px] line-clamp-2"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="30"
                    className="text-neutral-500 dark:text-neutral-400 text-xs mb-4 h-[90px] line-clamp-4 leading-relaxed"
                  >
                    {project.des}
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="w-full h-[200px] mb-4"
                  >
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                      <Image
                        loader={imageLoader}
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transform transition-all duration-500 group-hover/card:scale-105"
                      />
                    </div>
                  </CardItem>
                  <div className="flex justify-between items-center mt-8">
                    <div
                      className={`relative px-4 py-1.5 rounded-full text-xs font-medium ${isDark
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                        : 'bg-gradient-to-r from-neutral-900 to-neutral-700 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                        } before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-violet-800 before:via-purple-600 before:to-violet-400 before:opacity-100 hover:scale-105 transition-transform`}
                    >
                      <span className="relative z-10">View Project →</span>
                    </div>

                    <CardItem
                      translateZ="30"
                      className="flex items-center gap-2"
                    >
                      {project.icons.map((icon: ProjectIcon, index: number) => (
                        <div
                          key={index}
                          className="w-7 h-7 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-200 group/icon -ml-3 first:ml-0"
                        >
                          {React.createElement(icon.icon, {
                            className: "w-4 h-4",
                            style: { color: icon.color }
                          })}
                        </div>
                      ))}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/Shubham91999"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative px-5 py-2 rounded-full text-sm font-medium ${isDark
              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
              : 'bg-gradient-to-r from-violet-900 to-purple-700 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
              } opacity-90 hover:opacity-100 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] border border-purple-500/50 hover:scale-105`}
          >
            <span className="relative z-10 flex items-center">
              View More Projects
              <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
