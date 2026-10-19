import React, { useState, useEffect, useCallback } from 'react';
import { galleryPhotos, GalleryPhoto } from '../data/weddingData';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { ScrollReveal, useSectionReveal } from './ScrollReveal';

export const Gallery: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // For the infinite seamless marquee, duplicate the photo list
  const marqueeItems = [...galleryPhotos, ...galleryPhotos];

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index % galleryPhotos.length);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const goToPrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev !== null ? (prev === 0 ? galleryPhotos.length - 1 : prev - 1) : null
    );
  }, [selectedPhotoIndex]);

  const goToNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev !== null ? (prev === galleryPhotos.length - 1 ? 0 : prev + 1) : null
    );
  }, [selectedPhotoIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, goToPrev, goToNext]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhotoIndex]);

  const activePhoto: GalleryPhoto | null =
    selectedPhotoIndex !== null ? galleryPhotos[selectedPhotoIndex] : null;

  const { ref: sectionRef, sectionStyle } = useSectionReveal<HTMLElement>({
    distance: 28,
    duration: 850,
  });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      style={sectionStyle}
      className="py-16 sm:py-20 md:py-24 bg-[#FAF5EF] dark:bg-[#150A0F] transition-colors overflow-hidden"
    >
      {/* Gallery Header with ScrollReveal */}
      <ScrollReveal direction="up">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#76263F] dark:text-[#E89BA7] mb-2">
            Cherished Moments
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#2B1019] dark:text-[#FAF3F6] tracking-tight">
            Celebration Gallery
          </h2>
          <div className="w-16 h-[1.5px] bg-[#76263F]/60 dark:bg-[#D28793]/60 mx-auto mt-3 sm:mt-4" />
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#694250] dark:text-[#C7B1BC] max-w-xl mx-auto px-2">
            Hover over any photo to pause the continuous flow, or click to enlarge.
          </p>
        </div>
      </ScrollReveal>

      {/* Continuous Infinite Horizontal Marquee Carousel with ScrollReveal */}
      <ScrollReveal direction="up" delay={150}>
        <div className="relative w-full overflow-hidden py-3 sm:py-4 group">
          {/* Soft edge gradient fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-r from-[#FAF5EF] dark:from-[#150A0F] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-l from-[#FAF5EF] dark:from-[#150A0F] to-transparent" />

          <div className="animate-marquee-infinite flex gap-4 sm:gap-6 px-3 sm:px-4">
            {marqueeItems.map((photo, idx) => (
              <div
                key={`${photo.id}-${idx}`}
                onClick={() => openLightbox(idx)}
                className="group/card relative w-64 sm:w-80 md:w-96 h-72 sm:h-88 md:h-96 shrink-0 rounded-2xl overflow-hidden cursor-pointer bg-[#F5EEF4] dark:bg-[#201018] border border-[#E8DDE8] dark:border-[#381B28] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Viewer"
          className="fixed inset-0 z-50 bg-[#160A0F]/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Top Bar inside Lightbox */}
          <div className="flex items-center justify-between text-white/80 max-w-6xl mx-auto w-full pt-1 sm:pt-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#EBB6BF]">
              <Heart className="w-3.5 h-3.5 text-[#D28793] fill-current" />
              <span>
                {selectedPhotoIndex + 1} / {galleryPhotos.length}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central Image & Controls */}
          <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full px-1 sm:px-12 py-3 sm:py-4">
            {/* Prev Button */}
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-1 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-[#76263F] text-white/90 hover:text-white border border-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Active Display Image */}
            <div className="max-h-[68vh] sm:max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-[68vh] sm:max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-1 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-[#76263F] text-white/90 hover:text-white border border-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};