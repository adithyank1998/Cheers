import React from 'react';
import { weddingEvents, WeddingConfig } from '../data/weddingData';
import { Calendar, Clock, MapPin, Sparkles, Navigation } from 'lucide-react';
import { ScrollReveal, useSectionReveal } from './ScrollReveal';

interface EventsProps {
  config: WeddingConfig;
}

export const Events: React.FC<EventsProps> = ({ config }) => {
  const { ref: sectionRef, sectionStyle } = useSectionReveal<HTMLElement>({
    distance: 30,
    duration: 850,
  });

  return (
    <section
      id="events"
      ref={sectionRef}
      style={sectionStyle}
      className="py-16 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 bg-[#F5EEF5]/50 dark:bg-[#180B12]/60 transition-colors"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#76263F] dark:text-[#E89BA7] mb-2">
              Auspicious Ceremonies
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#2B1019] dark:text-[#FAF3F6] tracking-tight">
              Schedule of Events
            </h2>
            <div className="w-16 h-[1.5px] bg-[#76263F]/60 dark:bg-[#D28793]/60 mx-auto mt-3 sm:mt-4" />
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#694250] dark:text-[#C7B1BC] max-w-xl mx-auto px-2">
              We solicit your gracious presence with family and friends to celebrate the marriage and reception of {config.partner1} &amp; {config.partner2}.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Key Ceremonies: Wedding (Muhurtham) & Reception */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {weddingEvents.map((evt, idx) => (
            <ScrollReveal key={evt.id} direction={idx === 0 ? 'left' : 'right'} delay={idx * 150 + 100}>
              <div className="rounded-2xl bg-white dark:bg-[#201018] p-5 sm:p-7 md:p-8 border border-[#E8DDE8] dark:border-[#381B28] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  {/* Event Badge & Icon */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F7EFF6] dark:bg-[#2C1320] border border-[#E9DFEB] dark:border-[#3E1A2D] flex items-center justify-center">
                      {evt.iconName === 'rings' ? (
                        <span className="text-[#76263F] dark:text-[#E89BA7] font-serif text-xl sm:text-2xl font-bold">⚭</span>
                      ) : (
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#76263F] dark:text-[#E89BA7]" />
                      )}
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono font-medium text-[#76263F] dark:text-[#EBB6BF] uppercase tracking-widest bg-[#F7EFF6] dark:bg-[#2C1320] px-2.5 sm:px-3 py-1 rounded-full border border-[#E9DFEB] dark:border-[#3E1A2D]">
                      {evt.id === 'muhurtham' ? 'Sacred Muhurtham' : 'Celebration'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#2B1019] dark:text-[#FAF3F6] mb-1.5 sm:mb-2">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7D5363] dark:text-[#BCA3AD] mb-4 sm:mb-6 leading-relaxed">
                    {evt.subtitle}
                  </p>

                  {/* Event Timing & Location Details */}
                  <div className="space-y-3.5 sm:space-y-4 pt-4 sm:pt-5 border-t border-[#F0E6EF] dark:border-[#2F1522] text-xs sm:text-sm text-[#5C3A47] dark:text-[#D5C2CB]">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <Calendar className="w-4 h-4 text-[#76263F] dark:text-[#D28793] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8C6070] dark:text-[#B294A0] block font-medium">
                          Date
                        </span>
                        <span className="font-semibold text-sm sm:text-base font-serif text-[#2B1019] dark:text-[#FAF3F6]">
                          {evt.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <Clock className="w-4 h-4 text-[#76263F] dark:text-[#E89BA7] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8C6070] dark:text-[#B294A0] block font-medium">
                          Time
                        </span>
                        <span className="font-semibold text-sm sm:text-base text-[#76263F] dark:text-[#E89BA7]">
                          {evt.time}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <MapPin className="w-4 h-4 text-[#76263F] dark:text-[#D28793] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8C6070] dark:text-[#B294A0] block font-medium">
                          Venue
                        </span>
                        <span className="font-semibold text-sm sm:text-base text-[#2B1019] dark:text-[#FAF3F6] block">
                          {evt.location}
                        </span>
                        <p className="text-[11px] sm:text-xs text-[#875F6F] dark:text-[#B299A4] mt-0.5">
                          {evt.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Button directly to Venue */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-[#F0E6EF] dark:border-[#2F1522]">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(evt.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5A3241] dark:text-[#D9C4CC] bg-[#F7EFF6] dark:bg-[#2C1320] hover:bg-[#76263F] hover:text-white dark:hover:bg-[#76263F] dark:hover:text-white border border-[#E9DFEB] dark:border-[#3E1A2D] transition-all cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>View Venue on Google Maps</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
