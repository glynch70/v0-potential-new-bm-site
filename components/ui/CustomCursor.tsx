'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/animations/accessibility';

interface CursorPosition {
  x: number;
  y: number;
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const [reduceMotion] = useState(() => prefersReducedMotion());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Animate cursor position with smooth easing
    const animateCursor = () => {
      setPosition((prev) => ({
        x: prev.x + (mouseXRef.current - prev.x) * 0.15,
        y: prev.y + (mouseYRef.current - prev.y) * 0.15,
      }));
      requestAnimationFrame(animateCursor);
    };

    const animationId = requestAnimationFrame(animateCursor);

    // Track interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      ref={cursorRef}
      className="fixed w-8 h-8 pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
        x: '-50%',
        y: '-50%',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 border-2 border-[#D4A830] rounded-full"
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Inner dot */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#D4A830] rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-[#D4A830] rounded-full blur-md opacity-30"
        animate={{
          scale: isHovering ? 2 : 0.5,
          opacity: isHovering ? 0.5 : 0.2,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
