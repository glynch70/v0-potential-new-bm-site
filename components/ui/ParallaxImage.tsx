'use client';

import { useParallax } from '@/lib/hooks/useParallax';
import { motion } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  direction = 'up',
  className = '',
}: ParallaxImageProps) {
  const { ref, style } = useParallax({ speed, direction });

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={style as any}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
}
