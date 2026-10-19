import React from 'react';
import { WeddingConfig, loveStoryMilestones } from '../data/weddingData';
import { Heart, Sparkles, MapPin, Users, Calendar, MessageCircle } from 'lucide-react';
import { ScrollReveal, useSectionReveal } from './ScrollReveal';

const milestoneIcons = [MessageCircle, Heart, Users, Sparkles];

interface StoryProps {
  config: WeddingConfig;
}

export const Story: React.FC<StoryProps> = ({ config }) => {
  const { family } = config;
  const { ref: sectionRef, sectionStyle } = useSectionReveal<HTMLElement>({
    distance: 30,
    duration: 850,
  });

  return (
    <section
      id="story"
      ref={sectionRef}
      style={sectionStyle}
      className="py-16 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 relative overflow-hidden bg-[#FAF5EF] dark:bg-[#150A0F] transition-colors"
    >
      {/* Decorative Backdrop Accents in Sangria & Rose */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#76263F]/10 dark:bg-[#76263F]/20 blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#D28793]/10 dark:bg-[#913552]/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#76263F] dark:text-[#E89BA7] mb-2">
              With Joy &amp; Elder Blessings
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#2B1019] dark:text-[#FAF3F6] tracking-tight">
              Family &amp; Holy Union
            </h2>
            <div className="w-16 h-[1.5px] bg-[#76263F]/60 dark:bg-[#D28793]/60 mx-auto mt-3 sm:mt-4" />
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#663E4D] dark:text-[#CBB5BF] max-w-xl mx-auto font-serif italic px-2">
              &ldquo;{config.invitationNote}&rdquo;
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Family Lineage Cards (Groom & Bride) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-12">
          {/* Groom's Family Card with graceful entrance from left */}
          <ScrollReveal direction="left" delay={150}>
            <div className="p-5 sm:p-7 md:p-9 rounded-2xl bg-white/80 dark:bg-[#201018]/80 border border-[#E8DDE8] dark:border-[#381B28] shadow-xs relative flex flex-col justify-between h-full hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#76263F] dark:text-[#E89BA7]">
                    {family.groomTitle}
                  </span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F5EDF3] dark:bg-[#2E1422] flex items-center justify-center text-[#76263F] dark:text-[#E89BA7] text-xs">
                    ✦
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#2B1019] dark:text-[#FAF3F6] mb-3">
                  {family.groomName}
                </h3>

                <div className="space-y-3 pt-3 border-t border-[#F0E6EF] dark:border-[#2F1522] text-xs sm:text-sm text-[#5C3A47] dark:text-[#D5C2CB]">
                  <div className="flex items-start gap-2.5">
                    <Users className="w-4 h-4 text-[#76263F] dark:text-[#D28793] shrink-0 mt-0.5 sm:mt-1" />
                    <div>
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8C6070] dark:text-[#B294A0] block font-medium">
                        Parents
                      </span>
                      <span className="font-serif text-sm sm:text-base text-[#2B1019] dark:text-[#FAF3F6]">
                        {family.groomParents}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#76263F] dark:text-[#E89BA7] shrink-0 mt-0.5 sm:mt-1" />
                    <div>
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8C6070] dark:text-[#B294A0] block font-medium">
                        Native Residence
                      </span>
                      <span className="text-[#52333E] dark:text-[#C5B0B9]">
                        {family.groomHouse}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#F0E6EF] dark:border-[#2F1522] flex items-center gap-2 text-[11px] sm:text-xs text-[#8C6070] dark:text-[#B294A0]">
                <Sparkles className="w-3.5 h-3.5 text-[#76263F] dark:text-[#E89BA7]" />
                <span>Cherthala, Alappuzha, Keralam</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Bride's Family Card with graceful entrance from right */}
          <ScrollReveal direction="right" delay={250}>
            <div className="p-5 sm:p-7 md:p-9 rounded-2xl bg-white/80 dark:bg-[#201018]/80 border border-[#E8DDE8] dark:border-[#381B28] shadow-xs relative flex flex-col justify-between h-full hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#76263F] dark:text-[#E89BA7]">
                    {family.brideTitle}
                  </span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F5EDF3] dark:bg-[#2E1422] flex items-center justify-center text-[#76263F] dark:text-[#E89BA7] text-xs">
                    ✦
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#2B1019] dark:text-[#FAF3F6] mb-3">
                  {family.brideName}
                </h3>

                <div className="space-y-3 pt-3 border-t border-[#F0E6EF] dark:border-[#2F1522] text-xs sm:text-sm text-[#5C3A47] dark:text-[#D5C2CB]">
                  <div className="flex items-start gap-2.5">
                    <Users className="w-4 h-4 text-[#76263F] dark:text-[#D28793] shrink-0 mt-0.5 sm:mt-1" />
                    <div>
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8C6070] dark:text-[#B294A0] block font-medium">
                        Parents
                      </span>
                      <span className="font-serif text-sm sm:text-base text-[#2B1019] dark:text-[#FAF3F6]">
                        {family.brideParents}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#76263F] dark:text-[#E89BA7] shrink-0 mt-0.5 sm:mt-1" />
                    <div>
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8C6070] dark:text-[#B294A0] block font-medium">
                        Native Residence
                      </span>
                      <span className="text-[#52333E] dark:text-[#C5B0B9]">
                        {family.brideHouse}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#F0E6EF] dark:border-[#2F1522] flex items-center gap-2 text-[11px] sm:text-xs text-[#8C6070] dark:text-[#B294A0]">
                <Sparkles className="w-3.5 h-3.5 text-[#76263F] dark:text-[#E89BA7]" />
                <span>Thalachira, Pathanamthitta, Keralam</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* "Our Love Story" Chronological Timeline */}
        <div className="mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-12">
          <ScrollReveal direction="up">
            <div className="text-center mb-10 sm:mb-14 md:mb-16">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#76263F] dark:text-[#E89BA7] mb-2">
                How Our Journey Began
              </p>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#2B1019] dark:text-[#FAF3F6] tracking-tight">
                Our Love Story
              </h3>
              <div className="w-16 h-[1.5px] bg-[#76263F]/60 dark:bg-[#D28793]/60 mx-auto mt-3 sm:mt-4" />
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#663E4D] dark:text-[#CBB5BF] max-w-xl mx-auto font-serif italic px-2">
                From our very first spark of conversation to exchanging rings, every milestone brought us closer to forever.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            {/* Continuous Vertical Timeline Line */}
            <div
              className="absolute top-6 bottom-6 left-5 sm:left-6 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#76263F]/25 via-[#76263F]/60 to-[#D28793]/35 dark:from-[#E89BA7]/25 dark:via-[#E89BA7]/60 dark:to-[#76263F]/35"
              aria-hidden="true"
            />

            <div className="space-y-6 sm:space-y-10 md:space-y-12">
              {loveStoryMilestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                const MilestoneIcon = milestoneIcons[idx] || Sparkles;

                return (
                  <div
                    key={idx}
                    className="relative flex flex-col md:flex-row items-start md:items-center"
                  >
                    {/* Milestone Center Node Badge */}
                    <div
                      className="absolute left-5 sm:left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#FAF5EF] dark:bg-[#150A0F] border-2 border-[#76263F] dark:border-[#E89BA7] flex items-center justify-center z-10 shadow-xs text-[#76263F] dark:text-[#E89BA7] transition-transform duration-300 hover:scale-110"
                      aria-hidden="true"
                    >
                      <MilestoneIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>

                    {/* Milestone Card Content */}
                    <div
                      className={`w-full pl-11 sm:pl-14 md:pl-0 ${
                        isEven
                          ? 'md:w-1/2 md:pr-8 lg:md:pr-12 md:text-right md:mr-auto'
                          : 'md:w-1/2 md:pl-8 lg:md:pl-12 md:text-left md:ml-auto'
                      }`}
                    >
                      <ScrollReveal direction={isEven ? 'left' : 'right'} delay={idx * 120}>
                        <div className="p-4 sm:p-6 md:p-7 rounded-2xl bg-white/80 dark:bg-[#201018]/80 border border-[#E8DDE8] dark:border-[#381B28] shadow-xs hover:shadow-md transition-all">
                          <div
                            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#F5EDF3] dark:bg-[#2E1422] text-[#76263F] dark:text-[#E89BA7] mb-2 sm:mb-2.5"
                          >
                            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            <span>{milestone.date}</span>
                          </div>

                          <h4 className="text-lg sm:text-xl md:text-2xl font-serif text-[#2B1019] dark:text-[#FAF3F6] font-medium mb-1.5 sm:mb-2">
                            {milestone.title}
                          </h4>

                          <p className="text-xs sm:text-sm md:text-base text-[#5C3A47] dark:text-[#D5C2CB] leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

