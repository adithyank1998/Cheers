import React, { useState, useEffect } from 'react';
import { Calendar, Heart, ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { WeddingConfig } from '../data/weddingData';
import { ScrollReveal, useSectionReveal } from './ScrollReveal';

interface HeroProps {
  config: WeddingConfig;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const { ref: sectionRef, sectionStyle } = useSectionReveal<HTMLElement>({
    distance: 24,
    duration: 800,
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetTime = new Date(config.targetTimestamp).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [config.targetTimestamp]);

  const handleScrollTo = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Google Calendar URL generator for Wedding Muhurtham
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`${config.partner1FullName} & ${config.partner2FullName}'s Wedding (Muhurtham)`);
    const details = encodeURIComponent(
      `Wedding Ceremony of ${config.partner1FullName} & ${config.partner2FullName}.\nMuhurtham: 12:15 PM - 12:27 PM\nVenue: ${config.venueName}, ${config.venueAddress}\nHashtag: ${config.weddingHashtag}`
    );
    const location = encodeURIComponent(`${config.venueName}, ${config.venueAddress}`);
    const startDate = new Date(config.targetTimestamp);
    const startIso = startDate.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);
    const endIso = endDate.toISOString().replace(/-|:|\.\d\d\d/g, '');

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={sectionStyle}
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-3.5 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Layer with Oat & Thistle gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F9F4EE] via-[#F4EEF4] to-[#FAF5EF] dark:from-[#170B10] dark:via-[#1D0E16] dark:to-[#14080D] transition-colors" />

      {/* Atmospheric Ambient Orbs styled in Sangria, Rose, and Clay */}
      <div className="absolute -top-32 -left-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#76263F]/15 dark:bg-[#76263F]/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-80 sm:w-[32rem] h-80 sm:h-[32rem] rounded-full bg-[#C48A4E]/15 dark:bg-[#C48A4E]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-80 sm:w-[40rem] h-64 sm:h-[24rem] rounded-full bg-[#D28793]/15 dark:bg-[#913552]/20 blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center w-full px-2 sm:px-4">
        {/* Subtle Editorial Top Kicker */}
        <ScrollReveal direction="fade" delay={50} distance={10}>
          <div className="mb-3 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
            <span className="w-5 sm:w-8 h-[1px] bg-[#76263F]/40 dark:bg-[#D28793]/60" />
            <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.22em] font-medium text-[#76263F] dark:text-[#EBB6BF]">
              The Auspicious Wedding Union
            </p>
            <span className="w-5 sm:w-8 h-[1px] bg-[#76263F]/40 dark:bg-[#D28793]/60" />
          </div>
        </ScrollReveal>

        {/* Romantic Couple Names Headline */}
        <ScrollReveal direction="up" delay={150} distance={30}>
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-[#2B1019] dark:text-[#FBF4F7] transition-colors leading-[1.1] mb-3 sm:mb-5">
            <span className="inline-block">{config.partner1}</span>
            <span className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#76263F] dark:text-[#E89BA7] mx-2 sm:mx-4 inline-block align-middle transform -translate-y-0.5 sm:-translate-y-1">
              &amp;
            </span>
            <span className="inline-block">{config.partner2}</span>
          </h1>
        </ScrollReveal>

        {/* Date and Location Subtitle with Typographic Separator */}
        <ScrollReveal direction="up" delay={250} distance={20}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-base md:text-lg text-[#5E3845] dark:text-[#D9C4CC] font-serif tracking-wide mb-6 sm:mb-8">
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#76263F] dark:text-[#D28793]" />
              <span>{config.weddingDate}</span>
            </span>
            <span aria-hidden="true" className="text-[#C48A4E] font-sans">·</span>
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#76263F] dark:text-[#D28793]" />
              <span>{config.venueName}, {config.venueCityState}</span>
            </span>
          </div>
        </ScrollReveal>

        {/* Live Countdown Timer Section */}
        <ScrollReveal direction="zoom" delay={350} className="w-full max-w-2xl">
          <div className="w-full bg-white/80 dark:bg-[#201018]/80 backdrop-blur-md rounded-2xl p-3.5 sm:p-6 md:p-7 border border-[#E9DFEA] dark:border-[#381B28] shadow-sm mb-8 sm:mb-10 transition-colors">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold text-[#76263F] dark:text-[#D28793] mb-3 sm:mb-4 flex items-center justify-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#76263F] dark:text-[#E89BA7]" />
              <span>Countdown to the Sacred Muhurtham</span>
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#76263F] dark:text-[#E89BA7]" />
            </p>

            {timeLeft.isPassed ? (
              <div className="py-2 text-lg sm:text-2xl font-serif text-[#76263F] dark:text-[#E58897] italic">
                Today is the auspicious day! Welcome to the wedding celebrations!
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-1.5 sm:gap-3 md:gap-4 text-center">
                {/* Days */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-3.5 md:p-4 rounded-xl bg-[#FAF5EF]/90 dark:bg-[#160A0F]/90 border border-[#EBE1EB]/70 dark:border-[#2E1420]">
                  <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-mono tabular-nums font-medium text-[#2B1019] dark:text-[#FAF3F6]">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-xs uppercase tracking-wider text-[#734A56] dark:text-[#BFA8B1] mt-0.5 sm:mt-1 font-medium">
                    Days
                  </span>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-3.5 md:p-4 rounded-xl bg-[#FAF5EF]/90 dark:bg-[#160A0F]/90 border border-[#EBE1EB]/70 dark:border-[#2E1420]">
                  <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-mono tabular-nums font-medium text-[#2B1019] dark:text-[#FAF3F6]">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-xs uppercase tracking-wider text-[#734A56] dark:text-[#BFA8B1] mt-0.5 sm:mt-1 font-medium">
                    Hours
                  </span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-3.5 md:p-4 rounded-xl bg-[#FAF5EF]/90 dark:bg-[#160A0F]/90 border border-[#EBE1EB]/70 dark:border-[#2E1420]">
                  <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-mono tabular-nums font-medium text-[#2B1019] dark:text-[#FAF3F6]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-xs uppercase tracking-wider text-[#734A56] dark:text-[#BFA8B1] mt-0.5 sm:mt-1 font-medium">
                    Mins
                  </span>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-3.5 md:p-4 rounded-xl bg-[#FAF5EF]/90 dark:bg-[#160A0F]/90 border border-[#EBE1EB]/70 dark:border-[#2E1420]">
                  <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-mono tabular-nums font-medium text-[#76263F] dark:text-[#E89BA7]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-xs uppercase tracking-wider text-[#734A56] dark:text-[#BFA8B1] mt-0.5 sm:mt-1 font-medium">
                    Secs
                  </span>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Action Buttons: RSVP & Add to Calendar in Sangria & Rose */}
        <ScrollReveal direction="up" delay={450} distance={18} className="w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => handleScrollTo('#rsvp')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#76263F] hover:bg-[#5C182B] dark:bg-[#852C48] dark:hover:bg-[#9E3958] rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#EBB6BF]" />
              <span>RSVP Now</span>
            </button>

            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-medium tracking-wide text-[#4D2433] dark:text-[#F0E4E8] bg-white/80 dark:bg-[#201018] hover:bg-[#FAF4EE] dark:hover:bg-[#2B1621] border border-[#DDD0DD] dark:border-[#3E1E2C] rounded-full transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#76263F] dark:text-[#D28793]" />
              <span>Add to Calendar</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Scroll Indicator */}
        <ScrollReveal direction="fade" delay={550}>
          <button
            type="button"
            onClick={() => handleScrollTo('#story')}
            className="mt-8 sm:mt-12 md:mt-14 inline-flex flex-col items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs uppercase tracking-widest text-[#7D5363] dark:text-[#BCA3AD] hover:text-[#76263F] dark:hover:text-[#EBB6BF] transition-colors cursor-pointer group"
            aria-label="Scroll to family & blessings"
          >
            <span>Family &amp; Blessings</span>
            <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};
