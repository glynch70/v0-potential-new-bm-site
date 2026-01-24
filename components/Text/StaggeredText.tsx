'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { useTextAnimation } from '@/lib/hooks/useTextAnimation';
import { wordVariants } from '@/lib/animations/textVariants';

interface StaggeredTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  delay?: number;
  color?: string;
}

export function StaggeredText({
  text,
  className = '',
  as: Component = 'h2',
  delay = 0,
  color,
}: StaggeredTextProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });
  const { words } = useTextAnimation(text);

  return (
    <motion.div ref={ref} className="overflow-hidden">
      <motion.div
        className={className}
        as={Component}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
      >
        {words.map((word, index) => (
          <motion.span
            key={word.key}
            variants={wordVariants}
            custom={index}
            transition={{
              delay: delay + index * 0.08,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block mr-2 last:mr-0"
            style={color ? { color } : {}}
          >
            {word.text}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
