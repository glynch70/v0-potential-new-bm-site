'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggeredWordVariants } from '@/lib/animations/heroVariants';
import { useTextAnimation } from '@/lib/hooks/useTextAnimation';

interface AnimatedHeroTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedHeroText({
  text,
  className = '',
  delay = 0,
}: AnimatedHeroTextProps) {
  const { words } = useTextAnimation(text);

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {words.map((word, index) => (
        <motion.span
          key={word.key}
          variants={staggeredWordVariants}
          custom={index}
          className="inline-block mr-3"
          transition={{
            delay: delay + index * 0.1,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word.text}
        </motion.span>
      ))}
    </motion.div>
  );
}
