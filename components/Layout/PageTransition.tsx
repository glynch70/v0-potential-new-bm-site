'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { pageEnterVariants } from '@/lib/animations/pageTransitionVariants';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({
  children,
  className = '',
}: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page-transition"
        variants={pageEnterVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
