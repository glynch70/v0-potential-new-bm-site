'use client';

import { motion } from 'framer-motion';
import { scrollIndicatorVariants } from '@/lib/animations/heroVariants';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 cursor-pointer"
      variants={scrollIndicatorVariants}
      animate="animate"
    >
      <span className="text-sm text-white/60 uppercase tracking-widest">Scroll</span>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown className="w-5 h-5 text-white/60" />
      </motion.div>
    </motion.div>
  );
}
