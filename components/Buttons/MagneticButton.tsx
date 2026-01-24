'use client';

import { motion } from 'framer-motion';
import { useMagneticCursor } from '@/lib/hooks/useMagneticCursor';
import { ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  onClick,
  className = '',
  href,
  strength = 0.3,
}: MagneticButtonProps) {
  const { elementRef, style } = useMagneticCursor({ strength, distance: 100 });

  const baseClass = `
    relative px-6 py-3 rounded-lg font-medium transition-all duration-300
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        ref={elementRef}
        href={href}
        className={baseClass}
        style={style}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={elementRef}
      onClick={onClick}
      className={baseClass}
      style={style}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
