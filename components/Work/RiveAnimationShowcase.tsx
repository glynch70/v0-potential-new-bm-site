'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { useState } from 'react';

interface RiveAnimationShowcaseProps {
  title: string;
  description: string;
  animationStates?: {
    name: string;
    label: string;
  }[];
  index?: number;
}

export function RiveAnimationShowcase({
  title,
  description,
  animationStates = [],
  index = 0,
}: RiveAnimationShowcaseProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  const [activeState, setActiveState] = useState(0);

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        {/* Animation placeholder - in real implementation would use Rive library */}
        <div className="relative w-full h-64 bg-gradient-to-br from-amber-900/20 to-black rounded-xl mb-6 flex items-center justify-center border border-amber-400/20">
          <motion.div
            className="text-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-4xl font-bold text-amber-400/40 mb-2">◈</div>
            <p className="text-sm text-gray-400">Animation Canvas</p>
            <p className="text-xs text-gray-500 mt-2">Rive Animation Ready</p>
          </motion.div>
        </div>

        {/* State controls */}
        {animationStates.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {animationStates.map((state, idx) => (
              <motion.button
                key={state.name}
                onClick={() => setActiveState(idx)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeState === idx
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/50'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {state.label}
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Background animation elements */}
      <motion.div
        className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </motion.div>
  );
}
