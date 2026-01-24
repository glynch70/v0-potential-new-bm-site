'use client';

import { motion } from 'framer-motion';
import { slideUnderlineVariants } from '@/lib/animations/microInteractions';
import { ReactNode } from 'react';

interface AnimatedUnderlineProps {
  children: ReactNode;
  className?: string;
  color?: string;
  thickness?: number;
}

export function AnimatedUnderline({
  children,
  className = '',
  color = '#C9A227',
  thickness = 2,
}: AnimatedUnderlineProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      variants={slideUnderlineVariants}
      initial="initial"
      whileHover="hover"
    >
      {children}

      {/* Animated underline */}
      <motion.span
        className="absolute left-0 right-0 bottom-0 h-0.5 origin-left"
        style={{
          backgroundColor: color,
          height: thickness,
        }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </motion.span>
  );
}
