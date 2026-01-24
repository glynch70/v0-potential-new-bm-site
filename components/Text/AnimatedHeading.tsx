'use client';

import { motion } from 'framer-motion';
import { letterVariants } from '@/lib/animations/textVariants';
import { useTextAnimation } from '@/lib/hooks/useTextAnimation';

interface AnimatedHeadingProps {
  text: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  delay?: number;
  stagger?: number;
}

export function AnimatedHeading({
  text,
  level = 'h2',
  className = '',
  delay = 0,
  stagger = 0.05,
}: AnimatedHeadingProps) {
  const { letters } = useTextAnimation(text);
  const Tag = motion[level as keyof typeof motion] as any;

  return (
    <Tag className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={letter.key}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          custom={index}
          transition={{
            delay: delay + index * stagger,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {letter.text}
        </motion.span>
      ))}
    </Tag>
  );
}
