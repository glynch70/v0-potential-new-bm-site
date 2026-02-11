'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { maskTextVariants } from '@/lib/animations/textVariants';

interface MaskedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
}

export function MaskedText({
  text,
  className = '',
  as: Component = 'h2',
  delay = 0,
}: MaskedTextProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.div
        className={className}
        as={Component}
        variants={maskTextVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        transition={{
          delay,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}
