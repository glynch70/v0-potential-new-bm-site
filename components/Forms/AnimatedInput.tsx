'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { inputFocusVariants, labelFloatVariants } from '@/lib/animations/microInteractions';

interface AnimatedInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function AnimatedInput({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  className = '',
  icon,
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    onChange?.(e);
  };

  return (
    <div className={`relative w-full ${className}`}>
      {icon && (
        <motion.div
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
          animate={{ scale: isFocused ? 1.2 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>
      )}

      <motion.label
        variants={labelFloatVariants}
        initial="initial"
        animate={isFocused || hasValue ? 'focus' : 'initial'}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white pointer-events-none origin-left"
        style={{
          paddingLeft: icon ? '2rem' : '0',
        }}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </motion.label>

      <motion.input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        variants={inputFocusVariants}
        animate={isFocused ? 'focus' : 'initial'}
        className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg font-medium text-gray-900 placeholder-gray-400 outline-none transition-colors duration-200"
        style={{
          paddingLeft: icon ? '2.5rem' : '1rem',
        }}
      />

      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-amber-400"
        animate={{
          width: isFocused ? '100%' : '0%',
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
