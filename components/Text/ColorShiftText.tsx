'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface ColorShiftTextProps {
  text: string;
  className?: string;
  colors?: string[];
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export function ColorShiftText({
  text,
  className = '',
  colors = ['#ffffff', '#C9A227', '#ffffff'],
  as: Component = 'h2',
}: ColorShiftTextProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <motion.div ref={ref}>
      <motion.div
        as={Component}
        className={className}
        initial={{ color: colors[0] }}
        animate={isInView ? { color: colors } : { color: colors[0] }}
        transition={{
          duration: 3,
          repeat: 2,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}
