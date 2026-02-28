'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#D4A830] to-[#E4BF4A] z-50"
      style={{ width: `${scrollProgress}%` }}
      animate={{
        boxShadow: scrollProgress > 0 ? '0 0 20px rgba(212, 168, 48, 0.8)' : 'none',
      }}
    />
  );
}
