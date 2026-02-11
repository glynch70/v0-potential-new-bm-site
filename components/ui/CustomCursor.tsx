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
  const [isTouch, setIsTouch] = useState(true);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const [reduceMotion] = useState(() => prefersReducedMotion());

  useEffect(() => {
    // Hide on touch/mobile — check for coarse pointer
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;
    };

    // Event delegation — one listener instead of N per element
    const handlePointerOver = (e: Event) => {
      const target = (e.target as HTMLElement).closest('button, a, [role="button"]');
      if (target) setIsHovering(true);
    };
    const handlePointerOut = (e: Event) => {
      const target = (e.target as HTMLElement).closest('button, a, [role="button"]');
      if (target) setIsHovering(false);
    };

    let rafId: number;

    const animateCursor = () => {
      setPosition((prev) => ({
        x: prev.x + (mouseXRef.current - prev.x) * 0.15,
        y: prev.y + (mouseYRef.current - prev.y) * 0.15,
      }));
      rafId = requestAnimationFrame(animateCursor);
    };

    rafId = requestAnimationFrame(animateCursor);

    document.addEventListener('mouseover', handlePointerOver);
    document.addEventListener('mouseout', handlePointerOut);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handlePointerOver);
      document.removeEventListener('mouseout', handlePointerOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (reduceMotion || isTouch) {
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
