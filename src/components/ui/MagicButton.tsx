import React from "react";
import { useTheme } from 'next-themes';

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      className={`relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`}
      onClick={handleClick}
    >
      <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${
        isDark 
          ? 'bg-[conic-gradient(from_90deg_at_50%_50%,#9333EA_0%,#4F46E5_50%,#9333EA_100%)]'
          : 'bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'
      }`} />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-4 text-sm font-medium gap-2 transition-colors duration-300 ${
          isDark 
            ? 'bg-neutral-900 text-white hover:bg-transparent hover:text-white'
            : 'bg-slate-950 text-white opacity-90  hover:text-white hover:opacity-100'
        } backdrop-blur-3xl`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
