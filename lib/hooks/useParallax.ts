'use client';

import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: number;
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = 'up', offset = 0 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [yOffset, setYOffset] = useState(0);
  const [xOffset, setXOffset] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollY = window.scrollY;
      const elementTop = rect.top + scrollY;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress
      const scrollProgress =
        (scrollY + windowHeight - elementTop) / (windowHeight + rect.height);

      if (direction === 'up') {
        setYOffset(Math.min(0, -(scrollProgress - 0.5) * 100 * speed));
      } else if (direction === 'down') {
        setYOffset(Math.max(0, (scrollProgress - 0.5) * 100 * speed));
      } else if (direction === 'left') {
        setXOffset(Math.min(0, -(scrollProgress - 0.5) * 100 * speed));
      } else if (direction === 'right') {
        setXOffset(Math.max(0, (scrollProgress - 0.5) * 100 * speed));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return {
    ref,
    style: {
      transform: `translate(${xOffset}px, ${yOffset}px)`,
    },
  };
}
