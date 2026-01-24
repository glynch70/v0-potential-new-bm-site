'use client';

import { motion } from 'framer-motion';

interface CustomLoaderProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'gradient';
}

export function CustomLoader({
  text = 'Loading',
  size = 'md',
  variant = 'spinner',
}: CustomLoaderProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  if (variant === 'dots') {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-amber-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
        {text && (
          <p className="text-sm font-medium text-gray-600">{text}</p>
        )}
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <div className={`${sizeClasses[size]} relative`}>
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-1 bg-white rounded-full" />
        </div>
        {text && (
          <p className="text-sm font-medium text-gray-600">{text}</p>
        )}
      </div>
    );
  }

  // Default spinner
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Rotating rings */}
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className={`${sizeClasses[size]} border-3 border-transparent border-t-amber-400 border-r-amber-400 rounded-full absolute inset-0`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />

        {/* Middle ring */}
        <motion.div
          className={`${sizeClasses[size]} border-3 border-transparent border-b-amber-200 rounded-full`}
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-amber-400 rounded-full" />
        </motion.div>
      </div>

      {/* Loading text with dots */}
      {text && (
        <div className="text-center">
          <motion.p
            className="text-sm font-medium text-gray-600"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ...
            </motion.span>
          </motion.p>
        </div>
      )}
    </div>
  );
}
