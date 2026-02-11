'use client';

import { useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = 'up' } = options;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const range = 50 * speed;
  const sign = direction === 'up' || direction === 'left' ? -1 : 1;

  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' || direction === 'down' ? [sign * range, -sign * range] : [0, 0]
  );

  const xOffset = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' || direction === 'right' ? [sign * range, -sign * range] : [0, 0]
  );

  return {
    ref,
    style: {
      x: xOffset,
      y: yOffset,
    },
  };
}
