import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`w-full flex items-center justify-center py-2 sm:py-3 px-4 overflow-hidden select-none pointer-events-none relative z-10 ${className}`}
    >
      <ScrollReveal
        direction="fade"
        duration={800}
        className="w-full max-w-4xl flex items-center justify-center"
      >
        <div className="w-full flex items-center justify-center gap-2 sm:gap-3.5 md:gap-5">
          {/* Left fading hairline horizontal line */}
          <div className="h-[1px] flex-1 max-w-[80px] sm:max-w-[160px] md:max-w-[240px] bg-gradient-to-r from-transparent via-[#76263F]/20 dark:via-[#E89BA7]/20 to-[#76263F]/40 dark:to-[#E89BA7]/40" />

          {/* Left subtle gold accent diamond */}
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C49A45]/60 dark:bg-[#E0B86C]/70 rounded-[0.5px] shrink-0" />

          {/* Central Floral Botanical SVG Separator */}
          <svg
            className="w-24 sm:w-32 md:w-40 h-6 sm:h-7 text-[#76263F] dark:text-[#E89BA7] shrink-0 transition-colors"
            viewBox="0 0 160 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center Lotus Flower Motif */}
            {/* Central upper petal */}
            <path
              d="M80 6 C82.5 9 83.5 11.5 80 14 C76.5 11.5 77.5 9 80 6 Z"
              fill="currentColor"
              opacity="0.9"
            />
            {/* Central lower petal */}
            <path
              d="M80 22 C82.5 19 83.5 16.5 80 14 C76.5 16.5 77.5 19 80 22 Z"
              fill="currentColor"
              opacity="0.85"
            />
            {/* Left blossom petal */}
            <path
              d="M72 14 C74.5 11.5 77 12.5 80 14 C77 15.5 74.5 16.5 72 14 Z"
              fill="currentColor"
              opacity="0.8"
            />
            {/* Right blossom petal */}
            <path
              d="M88 14 C85.5 11.5 83 12.5 80 14 C83 15.5 85.5 16.5 88 14 Z"
              fill="currentColor"
              opacity="0.8"
            />
            {/* Diagonal petal accents */}
            <path
              d="M74 9.5 C76 11 78 12.5 80 14 C77.5 13 75.5 11.5 74 9.5 Z"
              fill="currentColor"
              opacity="0.65"
            />
            <path
              d="M86 9.5 C84 11 82 12.5 80 14 C82.5 13 84.5 11.5 86 9.5 Z"
              fill="currentColor"
              opacity="0.65"
            />
            <path
              d="M74 18.5 C76 17 78 15.5 80 14 C77.5 15 75.5 16.5 74 18.5 Z"
              fill="currentColor"
              opacity="0.65"
            />
            <path
              d="M86 18.5 C84 17 82 15.5 80 14 C82.5 15 84.5 16.5 86 18.5 Z"
              fill="currentColor"
              opacity="0.65"
            />
            {/* Center Core Seed / Bud */}
            <circle cx="80" cy="14" r="1.8" fill="currentColor" />

            {/* Left Botanical Vines & Leaves */}
            {/* Left curved stem */}
            <path
              d="M72 14 C58 14 54 8 38 10 C30 11 22 14 10 14"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />
            {/* Left upper leaf */}
            <path
              d="M56 11.5 C54 7.5 48 7 46 9.5 C49.5 10.5 53 11 56 11.5 Z"
              fill="currentColor"
              opacity="0.7"
            />
            {/* Left lower leaf */}
            <path
              d="M40 11.5 C38 15.5 32 16 31 13.5 C34.5 12.5 37.5 12 40 11.5 Z"
              fill="currentColor"
              opacity="0.7"
            />
            {/* Left terminal swirl */}
            <path
              d="M16 14 C13 12 10 15 13 17 C15.5 18 17.5 15.5 16 14"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeLinecap="round"
              fill="none"
              opacity="0.65"
            />
            {/* Left end droplet */}
            <circle cx="6" cy="14" r="1.2" fill="currentColor" opacity="0.6" />

            {/* Right Botanical Vines & Leaves */}
            {/* Right curved stem */}
            <path
              d="M88 14 C102 14 106 8 122 10 C130 11 138 14 150 14"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />
            {/* Right upper leaf */}
            <path
              d="M104 11.5 C106 7.5 112 7 114 9.5 C110.5 10.5 107 11 104 11.5 Z"
              fill="currentColor"
              opacity="0.7"
            />
            {/* Right lower leaf */}
            <path
              d="M120 11.5 C122 15.5 128 16 129 13.5 C125.5 12.5 122.5 12 120 11.5 Z"
              fill="currentColor"
              opacity="0.7"
            />
            {/* Right terminal swirl */}
            <path
              d="M144 14 C147 12 150 15 147 17 C144.5 18 142.5 15.5 144 14"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeLinecap="round"
              fill="none"
              opacity="0.65"
            />
            {/* Right end droplet */}
            <circle cx="154" cy="14" r="1.2" fill="currentColor" opacity="0.6" />

            {/* Subtle top & bottom auspicious gold micro-accents */}
            <circle cx="80" cy="2" r="1" fill="#C49A45" className="fill-[#C49A45] dark:fill-[#E0B86C]" />
            <circle cx="80" cy="26" r="1" fill="#C49A45" className="fill-[#C49A45] dark:fill-[#E0B86C]" />
          </svg>

          {/* Right subtle gold accent diamond */}
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C49A45]/60 dark:bg-[#E0B86C]/70 rounded-[0.5px] shrink-0" />

          {/* Right fading hairline horizontal line */}
          <div className="h-[1px] flex-1 max-w-[80px] sm:max-w-[160px] md:max-w-[260px] bg-gradient-to-l from-transparent via-[#76263F]/20 dark:via-[#E89BA7]/20 to-[#76263F]/40 dark:to-[#E89BA7]/40" />
        </div>
      </ScrollReveal>
    </div>
  );
};
