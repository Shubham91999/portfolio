'use client';

import { cn } from "../../utils/cn";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { Card3D } from "./card-3d";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[28rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  skills,
  githubLink,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  skills?: string[];
  githubLink?: string;
}) => {
  return (
    <Card3D
      containerClassName={cn(
        "row-span-1",
        className
      )}
      className="h-full"
    >
      <div
        className={cn(
          "h-full rounded-xl group/bento",
          "bg-white dark:bg-neutral-900",
          "border border-neutral-200 dark:border-neutral-800",
          "shadow-lg hover:shadow-xl dark:shadow-none",
          "relative transform-3d backface-hidden",
          "transition duration-300 ease-in-out",
          "flex flex-col"
        )}
      >
        {/* Image Container */}
        <div className="relative w-full h-48 rounded-t-xl overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 z-10">
            {header}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 group-hover/bento:via-black/40 group-hover/bento:to-black/90 transition-colors duration-500" />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-grow p-4">
          {/* Title and Description */}
          <div>
            <h3 className="font-bold text-xl text-neutral-900 dark:text-neutral-100 mb-2 line-clamp-1">
              {title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2 mb-4">
              {description}
            </p>
          </div>

          {/* Skills */}
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium rounded-full 
                    bg-neutral-100 dark:bg-neutral-800 
                    text-neutral-600 dark:text-neutral-300
                    border border-neutral-200 dark:border-neutral-700
                    hover:border-neutral-300 dark:hover:border-neutral-600
                    transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Spacer to push GitHub button to bottom */}
          <div className="flex-grow" />

          {/* GitHub Button */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 
                bg-neutral-900 dark:bg-neutral-800 
                hover:bg-neutral-800 dark:hover:bg-neutral-700 
                text-white rounded-lg py-2 px-4 
                transition-all duration-200
                group/button
                mt-4"
            >
              <span className="group-hover/button:rotate-[360deg] transition-transform duration-500">
                <BsGithub className="w-5 h-5" />
              </span>
              <span className="text-sm font-medium group-hover/button:translate-x-1 transition-transform duration-200">
                View on GitHub
              </span>
            </a>
          )}
        </div>
      </div>
    </Card3D>
  );
};
