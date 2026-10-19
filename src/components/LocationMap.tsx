import React, { useState } from 'react';
import { WeddingConfig } from '../data/weddingData';
import { MapPin, Navigation, Calendar, Clock } from 'lucide-react';
import { ScrollReveal, useSectionReveal } from './ScrollReveal';

interface LocationMapProps {
  config: WeddingConfig;
}

export const LocationMap: React.FC<LocationMapProps> = ({ config }) => {
  const [selectedVenue, setSelectedVenue] = useState<'wedding' | 'reception'>('wedding');

  const venues = {
    wedding: {
      name: config.venueName,
      title: 'Wedding Ceremony Venue (Muhurtham)',
      date: 'Sunday, December 6, 2026',
      time: '12:15 PM – 12:27 PM',
      address: config.venueAddress,
      city: config.venueCityState,
      mapQuery: 'Lijo Auditorium, Kumbazha, Pathanamthitta, Kerala 689653',
      embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent('Lijo Auditorium, Kumbazha, Pathanamthitta, Kerala 689653')}&t=&z=15&ie=UTF8&iwloc=&output=embed`,
      directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Lijo Auditorium, Kumbazha, Pathanamthitta, Kerala 689653')}`,
    },
    reception: {
      name: config.receptionVenueName,
      title: 'Wedding Reception Venue',
      date: 'Monday, December 7, 2026',
      time: '6:00 PM – 9:00 PM',
      address: config.receptionVenueAddress,
      city: config.receptionVenueCityState,
      mapQuery: 'Kumarakam Gateway KTDC, Thanneermukkom, Cherthala, Kerala 688527',
      embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent('Kumarakam Gateway KTDC, Thanneermukkom, Cherthala, Kerala 688527')}&t=&z=15&ie=UTF8&iwloc=&output=embed`,
      directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Kumarakam Gateway KTDC, Thanneermukkom, Cherthala, Kerala 688527')}`,
    },
  };

  const active = venues[selectedVenue];
  const { ref: sectionRef, sectionStyle } = useSectionReveal<HTMLElement>({
    distance: 30,
    duration: 850,
  });

  return (
    <section
      id="location"
      ref={sectionRef}
      style={sectionStyle}
      className="py-16 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 relative overflow-hidden bg-[#FAF5EF] dark:bg-[#150A0F] transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#76263F] dark:text-[#E89BA7] mb-2">
              Venues &amp; Directions
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#2B1019] dark:text-[#FAF3F6] tracking-tight">
              How to Reach the Venues
            </h2>
            <div className="w-16 h-[1.5px] bg-[#76263F]/60 dark:bg-[#D28793]/60 mx-auto mt-3 sm:mt-4" />
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#694250] dark:text-[#C7B1BC] max-w-xl mx-auto px-2">
              View venue details, location maps, and instant Google Maps directions for both the Wedding ceremony in Pathanamthitta and Reception in Cherthala.
            </p>
          </div>

          {/* Venue Switcher Tabs in Thistle & Sangria */}
          <div className="flex justify-center mb-8 sm:mb-10 px-2">
            <div className="inline-flex max-w-full p-1 sm:p-1.5 rounded-full bg-[#EFE5EE] dark:bg-[#25111B] border border-[#DDD0DD] dark:border-[#3D1E2D]">
              <button
                type="button"
                onClick={() => setSelectedVenue('wedding')}
                className={`px-3.5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  selectedVenue === 'wedding'
                    ? 'bg-[#76263F] text-white shadow-xs font-semibold'
                    : 'text-[#694250] dark:text-[#C7B1BC] hover:text-[#76263F]'
                }`}
              >
                <span className="hidden sm:inline">1. Wedding: Pathanamthitta</span>
                <span className="sm:hidden">1. Wedding</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedVenue('reception')}
                className={`px-3.5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  selectedVenue === 'reception'
                    ? 'bg-[#76263F] text-white shadow-xs font-semibold'
                    : 'text-[#694250] dark:text-[#C7B1BC] hover:text-[#76263F]'
                }`}
              >
                <span className="hidden sm:inline">2. Reception: Cherthala</span>
                <span className="sm:hidden">2. Reception</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Responsive Layout: Venue Information on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8">
          {/* Venue Info Card with ScrollReveal */}
          <div className="lg:col-span-5 h-full">
            <ScrollReveal direction="left" delay={150} className="h-full">
              <div className="flex flex-col justify-between p-5 sm:p-7 md:p-8 rounded-2xl bg-[#F7EFF5]/80 dark:bg-[#201018]/80 border border-[#E8DDE8] dark:border-[#381B28] h-full shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#76263F] dark:text-[#E89BA7] mb-2.5 sm:mb-3">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{active.title}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#2B1019] dark:text-[#FAF3F6] mb-1.5 sm:mb-2">
                    {active.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C3A47] dark:text-[#D5C2CB] leading-relaxed mb-5 sm:mb-6 font-serif">
                    {active.address}
                  </p>

                  {/* Ceremony Timings */}
                  <div className="space-y-3.5 sm:space-y-4 pt-4 sm:pt-6 border-t border-[#E8DDE8] dark:border-[#331825] text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <Calendar className="w-4 h-4 text-[#76263F] dark:text-[#D28793] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8C6070] dark:text-[#B294A0] block font-medium">
                          Date
                        </span>
                        <span className="font-semibold text-sm sm:text-base text-[#2B1019] dark:text-[#FAF3F6]">
                          {active.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <Clock className="w-4 h-4 text-[#76263F] dark:text-[#E89BA7] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8C6070] dark:text-[#B294A0] block font-medium">
                          Timing
                        </span>
                        <span className="font-semibold text-sm sm:text-base text-[#76263F] dark:text-[#E89BA7]">
                          {active.time}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <MapPin className="w-4 h-4 text-[#76263F] dark:text-[#D28793] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8C6070] dark:text-[#B294A0] block font-medium">
                          Location Landmark
                        </span>
                        <span className="text-[11px] sm:text-xs text-[#694250] dark:text-[#C7B1BC]">
                          {selectedVenue === 'wedding'
                            ? 'Near Kumbazha Junction, Pathanamthitta District, Central Travancore.'
                            : 'Thanneermukkom Bund Road, Cherthala, Alappuzha District (Vembanad lakeside).'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Google Maps Navigation Trigger in Sangria */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#E8DDE8] dark:border-[#331825]">
                  <a
                    href={active.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#76263F] hover:bg-[#5C182B] dark:bg-[#852C48] dark:hover:bg-[#9E3958] rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Get Directions in Google Maps</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Embedded Interactive Map Card with ScrollReveal */}
          <div className="lg:col-span-7 h-full">
            <ScrollReveal direction="right" delay={250} className="h-full">
              <div className="rounded-2xl overflow-hidden border border-[#E8DDE8] dark:border-[#381B28] shadow-xs min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] h-full bg-slate-100 dark:bg-[#14080D] relative">
                <iframe
                  key={selectedVenue}
                  title={`Map showing ${active.name} in ${active.city}`}
                  src={active.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ minHeight: '300px', border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[10%] contrast-[105%]"
                />
                {/* Overlay Chip on Map */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 dark:bg-[#201018]/90 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg border border-[#DDD0DD] dark:border-[#3E1E2D] shadow-sm flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-[#2B1019] dark:text-[#FAF3F6]">
                  <span className="w-2 h-2 rounded-full bg-[#76263F]" />
                  <span>{active.name}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
