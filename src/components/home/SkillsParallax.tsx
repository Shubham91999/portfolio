"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaJava, FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAngular, FaAws, FaGitAlt, FaDocker, FaJira, FaConfluence, FaSwift } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiSpringboot, SiNextdotjs, SiExpress, SiTailwindcss, SiMysql, SiMongodb, SiPostgresql, SiFirebase, SiGooglecloud, SiKubernetes, SiJenkins, SiPostman } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { useTheme } from "next-themes";

import { skillGroups } from "../../lib/metadata";

export const SkillsParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const translateYValue = isMobile ? 30 : 60;
  const translateXValue = isMobile ? 30 : 60;

  const translateX = useTransform(scrollYProgress, [0, 1], [-translateXValue, translateXValue]);
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [translateXValue, -translateXValue]);
  const rotateX = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [15, 0, 0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.6, 1, 1, 0.6]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [10, 0, 0, 10]);
  const translateY = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [translateYValue, 0, 0, translateYValue]);

  return (
    <div id="skills"
      ref={ref}
      className="pt-40 pb-20 bg-white dark:bg-black overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <div className="w-full overflow-hidden mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="w-full">
            {skillGroups.map((group, idx) => (
              <div key={group.category} className="mb-4 sm:mb-6 md:mb-10 last:mb-0">
                <motion.div
                  style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                    x: idx % 2 === 0 ? translateX : translateXReverse
                  }}
                  className="flex flex-col gap-4 mb-16 md:mb-24 items-center"
                >
                  <div className="flex justify-center w-full px-2">
                    <span className="text-violet-600 font-bold uppercase tracking-[0.3em] text-sm md:text-base border-b-2 border-violet-600/30 pb-1">
                      {group.category}
                    </span>
                  </div>
                  <div className="flex flex-row flex-wrap gap-4 sm:gap-4 md:gap-6 justify-center">
                    {group.skills.map((skill) => (
                      <SkillCard
                        key={skill.name}
                        title={skill.name}
                        icon={skill.icon}
                        color={skill.color}
                        darkColor={(skill as any).darkColor}
                        translate={0}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="text-center max-w-7xl z-20 relative mx-auto pt-12 md:pt-20 pb-4 px-4 w-full">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
        My Skills
      </h1>
      {/* <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 dark:text-neutral-200"> */}
      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 sm:mt-6 md:mt-8 lg:mt-10 max-w-2xl mx-auto">
        Here are some of the key technologies I work with
      </p>
    </div>

  );
};

const SkillCard = ({
  title,
  icon: Icon,
  color,
  darkColor,
  translate,
}: {
  title: string;
  icon: React.ElementType;
  color: string;
  darkColor?: string;
  translate: any;
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconColor = mounted && darkColor && theme === 'dark' ? darkColor : color;

  return (
    <motion.div
      style={{
        x: translate,
      }}
      className="group/skill relative h-[3.8rem] w-[3.8rem] sm:h-[4.75rem] sm:w-[4.75rem] md:h-[7.6rem] md:w-[7.6rem] lg:h-[9.5rem] lg:w-[9.5rem] rounded-xl sm:rounded-2xl bg-white/5 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/[0.08] hover:border-neutral-300 dark:hover:border-white/[0.15] transition-colors duration-500 flex-shrink-0"
    >
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-neutral-50 dark:from-neutral-900/50 to-neutral-100/50 dark:to-neutral-800/50" />

      <div className="relative h-full w-full p-1.5 sm:p-2 md:p-3 lg:p-4 flex flex-col items-center justify-center">
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
          className="relative"
        >
          <Icon
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 transition-transform duration-300"
            style={{ color: iconColor }}
          />
          <div
            className="absolute inset-0 blur-lg opacity-25 transition-opacity duration-300 group-hover/skill:opacity-40"
            style={{ backgroundColor: color }}
          />
        </motion.div>

        <div className="mt-1 sm:mt-2 md:mt-3 lg:mt-4">
          <h2 className="text-[8px] sm:text-xs md:text-sm font-medium text-neutral-700 dark:text-neutral-300 text-center transition-colors duration-300 group-hover/skill:text-neutral-900 dark:group-hover/skill:text-white">
            {title}
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsParallax;
