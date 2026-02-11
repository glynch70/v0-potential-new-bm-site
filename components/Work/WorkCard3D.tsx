'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface WorkCard3DProps {
  title: string;
  description: string;
  image: string;
  details?: string;
  tags?: string[];
  index?: number;
}

export function WorkCard3D({
  title,
  description,
  image,
  details,
  tags = [],
  index = 0,
}: WorkCard3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="h-full perspective cursor-pointer"
      style={{ perspective: '1000px' }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front side */}
        <motion.div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Image */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-200 mb-4">{description}</p>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-[#D4A830]/20 text-[#D4A830] border border-[#D4A830]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Click hint */}
            <motion.div
              className="absolute top-4 right-4 text-xs text-gray-300 uppercase tracking-wider opacity-0"
              animate={{ opacity: 1, y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Click to flip
            </motion.div>
          </div>

          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 opacity-0 pointer-events-none"
            whileHover={{ opacity: 0.3 }}
            style={{
              background: 'radial-gradient(circle at center, rgba(212, 168, 48, 0.3), transparent)',
            }}
          />
        </motion.div>

        {/* Back side */}
        <motion.div
          className="absolute inset-0 p-6 flex flex-col justify-center items-center bg-gradient-to-br from-[#A88520]/30 to-black text-white"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>

            {details && (
              <p className="text-sm text-gray-200 mb-6 leading-relaxed max-h-48 overflow-y-auto">
                {details}
              </p>
            )}

            <motion.button
              className="mt-6 px-6 py-2 bg-[#D4A830] text-black font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>

            {/* Click hint for back */}
            <p className="text-xs text-gray-400 mt-6 uppercase tracking-wider">
              Click to flip back
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
