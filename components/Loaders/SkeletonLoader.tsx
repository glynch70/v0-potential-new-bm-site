'use client';

import { motion } from 'framer-motion';
import { skeletonVariants } from '@/lib/animations/microInteractions';

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'avatar' | 'custom';
  lines?: number;
  className?: string;
}

export function SkeletonLoader({
  type = 'card',
  lines = 3,
  className = '',
}: SkeletonLoaderProps) {
  if (type === 'avatar') {
    return (
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"
        variants={skeletonVariants}
        animate="animate"
        backgroundSize="200% 100%"
      />
    );
  }

  if (type === 'text') {
    return (
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <motion.div
            key={i}
            className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded"
            variants={skeletonVariants}
            animate="animate"
            style={{
              width: i === lines - 1 ? '80%' : '100%',
            }}
            backgroundSize="200% 100%"
          />
        ))}
      </div>
    );
  }

  if (type === 'card') {
    return (
      <motion.div className="space-y-4">
        {/* Header */}
        <motion.div
          className="h-48 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-lg"
          variants={skeletonVariants}
          animate="animate"
          backgroundSize="200% 100%"
        />

        {/* Content */}
        <motion.div
          className="h-6 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded"
          variants={skeletonVariants}
          animate="animate"
          backgroundSize="200% 100%"
        />

        {/* Text lines */}
        {Array.from({ length: 2 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded"
            variants={skeletonVariants}
            animate="animate"
            backgroundSize="200% 100%"
          />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`h-8 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded ${className}`}
      variants={skeletonVariants}
      animate="animate"
      backgroundSize="200% 100%"
    />
  );
}
