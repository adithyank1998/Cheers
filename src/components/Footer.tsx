import React, { useState } from 'react';
import { WeddingConfig } from '../data/weddingData';
import { Heart, Copy, Check, ArrowUp } from 'lucide-react';
import { ScrollReveal, useSectionReveal } from './ScrollReveal';

interface FooterProps {
  config: WeddingConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const [copied, setCopied] = useState(false);
  const { ref: footerRef, sectionStyle } = useSectionReveal<HTMLElement>({
    distance: 24,
    duration: 800,
  });

  const handleCopyHashtag = () => {
    navigator.clipboard.writeText(config.weddingHashtag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      style={sectionStyle}
      className="bg-[#F5EDF3] dark:bg-[#10060B] border-t border-[#E8DDE8] dark:border-[#2D1420] pt-12 sm:pt-16 pb-8 sm:pb-12 px-3.5 sm:px-6 lg:px-8 text-[#5A3543] dark:text-[#CBB5BF] transition-colors relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Heart Icon Accent in Rose with ScrollReveal */}
        <ScrollReveal direction="fade" delay={50}>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FDF9FD] dark:bg-[#200F17] border border-[#E9DFEB] dark:border-[#381B28] flex items-center justify-center text-[#76263F] dark:text-[#E89BA7] mb-4 sm:mb-6 shadow-xs">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#D28793]" />
          </div>
        </ScrollReveal>

        {/* Couple Names with ScrollReveal */}
        <ScrollReveal direction="up" delay={120} distance={20}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2B1019] dark:text-[#FAF3F6] mb-2 px-2">
            {config.partner1FullName} &amp; {config.partner2FullName}
          </h3>
        </ScrollReveal>

        {/* Best Compliments Line with ScrollReveal */}
        <ScrollReveal direction="up" delay={200} distance={16}>
          <p className="text-xs sm:text-sm font-medium text-[#76263F] dark:text-[#E89BA7] mb-3 sm:mb-4 px-2">
            With Best Compliments: {config.family.bestCompliments}
          </p>

          <p className="text-xs sm:text-base text-[#694250] dark:text-[#BFA8B3] max-w-lg mb-6 sm:mb-8 leading-relaxed font-serif italic mx-auto px-2">
            &ldquo;Thank you for being part of our auspicious day, showering your sacred blessings and love upon us.&rdquo;
          </p>
        </ScrollReveal>

        {/* Wedding Hashtag Badge with Copy Button with ScrollReveal */}
        <ScrollReveal direction="zoom" delay={280}>
          <div className="flex flex-col items-center gap-2 mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8C6070] dark:text-[#A78E99]">
              Share Memories with Our Wedding Tag
            </span>
            <button
              type="button"
              onClick={handleCopyHashtag}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white dark:bg-[#201018] border border-[#DDD0DD] dark:border-[#3E1E2D] text-xs sm:text-sm font-serif font-medium text-[#76263F] dark:text-[#E89BA7] hover:bg-[#FAF5EF] dark:hover:bg-[#28131F] transition-all cursor-pointer shadow-xs hover:shadow-md"
              title="Click to copy wedding hashtag"
            >
              <span>{config.weddingHashtag}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-60" />
              )}
            </button>
          </div>
        </ScrollReveal>

        {/* Scroll to Top Trigger */}
        <ScrollReveal direction="fade" delay={340}>
          <button
            type="button"
            onClick={handleScrollTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#7D5363] dark:text-[#B299A4] hover:text-[#76263F] dark:hover:text-[#EBB6BF] mb-6 sm:mb-8 transition-colors cursor-pointer group"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Back to Top</span>
          </button>
        </ScrollReveal>

        {/* Hairline Divider & Copyright with ScrollReveal */}
        <ScrollReveal direction="fade" delay={400} className="w-full">
          <div className="w-full pt-6 sm:pt-8 border-t border-[#E8DDE8]/80 dark:border-[#2B131F] flex flex-col sm:flex-row items-center justify-between gap-3 text-[#8C6070] dark:text-[#9E8490] text-center sm:text-left">
            <p className="text-[13px] leading-[18.5714px]">
              &copy; 2026 Gokul &amp; Mydhili.
            </p>
            <p className="font-sans not-italic text-[13px] leading-[18.5714px] text-[#76263F] dark:text-[#E89BA7] text-center sm:text-right">
              Freshly Brewed From Taste Of Beer Media
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
