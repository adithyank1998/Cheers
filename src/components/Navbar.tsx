import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Heart } from 'lucide-react';
import { WeddingConfig } from '../data/weddingData';

interface NavbarProps {
  config: WeddingConfig;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  darkMode,
  onToggleDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const scrollPx = window.scrollY;
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        const scrolled = (scrollPx / winHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scrolled)));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Family & Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Venues', href: '#location' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Slim, elegant scroll progress bar in Sangria (#76263F) */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-black/5 dark:bg-white/5 pointer-events-none"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page reading progress"
      >
        <div
          className="h-full bg-gradient-to-r from-[#76263F] via-[#8D2B4A] to-[#76263F] dark:from-[#A83756] dark:via-[#BD4569] dark:to-[#A83756] transition-[width] duration-100 ease-out shadow-[0_1px_5px_rgba(118,38,63,0.45)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF5EF]/95 dark:bg-[#150A0F]/95 backdrop-blur-md shadow-xs border-b border-[#E8DDE8]/70 dark:border-[#381B28]/70 py-2.5 sm:py-3.5'
            : 'bg-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#hero"
              className="text-xl sm:text-2xl md:text-3xl font-serif tracking-tight text-[#2B1019] dark:text-[#FAF3F6] hover:text-[#76263F] dark:hover:text-[#EBB6BF] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 sm:gap-1.5"
            >
              <span>{config.partner1}</span>
              <span className="font-serif italic text-base sm:text-xl text-[#76263F] dark:text-[#D28793]">&amp;</span>
              <span>{config.partner2}</span>
            </a>

            {/* Zone 2: Clean single-line text navigation links */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs lg:text-sm font-medium tracking-wide text-[#613D4B] dark:text-[#CBB5BF]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-[#76263F] dark:hover:text-[#EBB6BF] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#76263F] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary action CTA & utilities */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Theme Switcher Button */}
              <button
                type="button"
                onClick={onToggleDarkMode}
                title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                className="p-1.5 sm:p-2 rounded-full text-[#633C4A] dark:text-[#D1BAC4] hover:text-[#76263F] dark:hover:text-[#F3B8C1] bg-[#F4EEF4]/90 dark:bg-[#23111A] hover:bg-[#EBE1EB] dark:hover:bg-[#2F1723] border border-[#DDD0DD] dark:border-[#3D1E2D] shadow-xs transition-all duration-200 cursor-pointer flex items-center justify-center"
                aria-label={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              >
                {darkMode ? (
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C48A4E]" />
                ) : (
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#76263F]" />
                )}
              </button>

              {/* Primary RSVP CTA in Sangria */}
              <a
                href="#rsvp"
                onClick={(e) => handleLinkClick(e, '#rsvp')}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-white bg-[#76263F] hover:bg-[#5C182B] dark:bg-[#852C48] dark:hover:bg-[#9E3958] rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0"
              >
                <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-[#EBB6BF]" />
                <span>RSVP</span>
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 text-[#613D4B] dark:text-[#D1BAC4] hover:text-[#76263F] focus:outline-none cursor-pointer rounded-lg"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-current" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-black/40 backdrop-blur-xs animate-in fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#FAF5EF] dark:bg-[#1A0C13] border-b border-[#E8DDE8] dark:border-[#381B28] pt-20 pb-6 px-5 sm:px-6 shadow-xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-3.5 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="py-2.5 text-base sm:text-lg font-serif tracking-wide text-[#2B1019] dark:text-[#FAF3F6] hover:text-[#76263F] border-b border-[#F0E6F0]/60 dark:border-[#2C1420]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3 items-center">
                <a
                  href="#rsvp"
                  onClick={(e) => handleLinkClick(e, '#rsvp')}
                  className="w-full max-w-xs py-3 text-center text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#76263F] rounded-full shadow-md"
                >
                  Respond to RSVP
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
