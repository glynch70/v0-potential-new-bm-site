'use client';

import { motion } from 'framer-motion';
import { useState, ReactNode } from 'react';
import { rippleVariants, buttonHoverVariants } from '@/lib/animations/microInteractions';

interface RippleButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function RippleButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  const getBaseClass = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-600 hover:bg-gray-700 text-white';
      case 'outline':
        return 'border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10';
      default:
        return 'bg-amber-400 hover:bg-amber-500 text-black';
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);

    onClick?.();
  };

  return (
    <motion.button
      className={`relative px-6 py-3 rounded-lg font-medium overflow-hidden ${getBaseClass()} ${className}`}
      variants={buttonHoverVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={handleClick}
    >
      {children}

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/50"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
            marginLeft: -5,
            marginTop: -5,
          }}
          variants={rippleVariants}
          initial="initial"
          animate="animate"
        />
      ))}
    </motion.button>
  );
}
