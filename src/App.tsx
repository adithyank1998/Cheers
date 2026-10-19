/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { weddingConfig } from './data/weddingData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Events } from './components/Events';
import { LocationMap } from './components/LocationMap';
import { Gallery } from './components/Gallery';
import { SectionDivider } from './components/SectionDivider';
import { RsvpForm } from './components/RsvpForm';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';

export default function App() {
  // Theme state: light theme is the default
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const userSelected = localStorage.getItem('wedding_theme_user_selected');
    return userSelected === 'dark';
  });

  // Ensure any previous legacy dark storage is cleaned so default is strictly light theme
  useEffect(() => {
    localStorage.removeItem('wedding_theme');
  }, []);

  // Sync dark mode class on <html> and <body> elements
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('wedding_theme_user_selected', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF5EF] dark:bg-[#150A0F] text-[#2B1019] dark:text-[#F8F1F4] transition-colors duration-300 selection:bg-[#76263F]/20 selection:text-[#57182C] overflow-x-hidden">
      {/* Fixed Navigation Header */}
      <Navbar
        config={weddingConfig}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Live Countdown to Muhurtham */}
        <Hero config={weddingConfig} />

        {/* 2. Family Details & Blessings */}
        <Story config={weddingConfig} />

        {/* Decorative Floral Separator between Story & Gallery */}
        <SectionDivider />

        {/* 3. Continuous Infinite Marquee Gallery with Lightbox */}
        <Gallery />

        {/* Decorative Floral Separator between Gallery & Events */}
        <SectionDivider />

        {/* 4. Schedule of Events: Wedding (Muhurtham) & Reception */}
        <Events config={weddingConfig} />

        {/* 5. Google Maps & Location Directions for Both Venues */}
        <LocationMap config={weddingConfig} />

        {/* Decorative Floral Separator before RSVP */}
        <SectionDivider />

        {/* 6. Simplified Interactive WhatsApp RSVP Form */}
        <RsvpForm config={weddingConfig} />
      </main>

      {/* 7. Footer with Family Best Compliments */}
      <Footer config={weddingConfig} />

      {/* Ambient Instrumental Audio Melodies */}
      <AudioPlayer />
    </div>
  );
}
