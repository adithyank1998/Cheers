import React, { useEffect, useRef, useState } from 'react';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade' | 'none';
  duration?: number; // in milliseconds
  distance?: number; // in pixels
  blur?: boolean; // subtle cinematic blur entrance
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export interface SectionRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  blur?: boolean;
  once?: boolean;
}

/**
 * Custom hook to observe an element's visibility via IntersectionObserver.
 * Fully typed for any HTMLElement (div, section, footer, article, etc.)
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
  } = {}
) {
  const { threshold = 0.08, rootMargin = '0px 0px -40px 0px', once = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    // If SSR, reduced motion, or unsupported browser, show immediately
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const currentEl = elementRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return { elementRef, isVisible };
}

/**
 * Dedicated Section-level Intersection Observer hook.
 * Attaches directly to any <section> or <footer> element to orchestrate
 * a graceful, fluid fade-in and subtle upward glide as the user scrolls into view.
 */
export function useSectionReveal<T extends HTMLElement = HTMLElement>(
  options: SectionRevealOptions = {}
) {
  const {
    threshold = 0.06,
    rootMargin = '0px 0px -50px 0px',
    delay = 0,
    duration = 850,
    distance = 32,
    blur = true,
    once = true,
  } = options;

  const { elementRef, isVisible } = useIntersectionObserver<T>({
    threshold,
    rootMargin,
    once,
  });

  const sectionStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0)' : `translate3d(0, ${distance}px, 0)`,
    filter: blur ? (isVisible ? 'blur(0px)' : 'blur(4px)') : undefined,
    transitionProperty: 'opacity, transform, filter',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform, filter',
  };

  return { ref: elementRef, isVisible, sectionStyle };
}

/**
 * SectionReveal Component
 * Reusable wrapper component for full-section scroll entrances
 */
export const SectionReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  options?: SectionRevealOptions;
}> = ({ children, className = '', id, options }) => {
  const { ref, sectionStyle } = useSectionReveal<HTMLElement>(options);

  return (
    <section id={id} ref={ref} style={sectionStyle} className={className}>
      {children}
    </section>
  );
};

/**
 * ScrollReveal Component
 * Creates an elegant, graceful entrance for text, images, and section cards
 * as the user scrolls into view.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 750,
  distance = 28,
  blur = true,
  threshold = 0.08,
  rootMargin = '0px 0px -40px 0px',
  once = true,
}) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin,
    once,
  });

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0) scale(1)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0) scale(1)`;
      case 'left':
        return `translate3d(-${distance}px, 0, 0) scale(1)`;
      case 'right':
        return `translate3d(${distance}px, 0, 0) scale(1)`;
      case 'zoom':
        return 'translate3d(0, 0, 0) scale(0.94)';
      case 'fade':
      case 'none':
      default:
        return 'translate3d(0, 0, 0) scale(1)';
    }
  };

  const getFilter = () => {
    if (!blur) return undefined;
    return isVisible ? 'blur(0px)' : 'blur(4px)';
  };

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        filter: getFilter(),
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
      className={className}
    >
      {children}
    </div>
  );
};
