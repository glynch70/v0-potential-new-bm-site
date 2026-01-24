'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMagneticCursor } from '@/lib/hooks/useMagneticCursor';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface ServiceCard3DProps {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  colorClass?: string;
  accentColor?: string;
}

export function ServiceCard3D({
  number,
  icon: Icon,
  title,
  description,
  features,
  colorClass = '',
  accentColor = '#C9A227',
}: ServiceCard3DProps) {
  const { elementRef: cardRef, style: magneticStyle } = useMagneticCursor({
    strength: 0.2,
    distance: 150,
  });
  const { ref: scrollRef, isInView } = useScrollAnimation({ threshold: 0.2 });
  const [mouseY, setMouseY] = useState(0);
  const cardInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardInnerRef.current) return;
      const rect = cardInnerRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      setMouseY((y / rect.height - 0.5) * 10);
    };

    const card = cardInnerRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <motion.div
      ref={scrollRef}
      className="h-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        ref={cardRef}
        className={`relative h-full rounded-2xl overflow-hidden ${colorClass} group`}
        style={magneticStyle as any}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Background gradient that responds to mouse */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% ${50 + mouseY}%, rgba(255,255,255,0.15), transparent)`,
          }}
        />

        <div
          ref={cardInnerRef}
          className="relative h-full p-8 flex flex-col justify-between"
        >
          {/* Card number with animated background */}
          <motion.div
            className="absolute top-0 right-0 text-8xl font-bold opacity-10 select-none pointer-events-none"
            animate={{
              y: mouseY * 2,
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {number}
          </motion.div>

          {/* Header section */}
          <div>
            {/* Icon container with animation */}
            <motion.div
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden"
              style={{
                background: `rgba(201, 162, 39, 0.15)`,
                border: `2px solid ${accentColor}`,
              }}
              whileHover={{
                boxShadow: `0 0 30px ${accentColor}40`,
              }}
            >
              <Icon className="w-8 h-8" style={{ color: accentColor }} />

              {/* Icon glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${accentColor}, transparent)`,
                  opacity: 0,
                }}
                whileHover={{ opacity: 0.2 }}
              />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
          </div>

          {/* Features list with stagger animation */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-3 text-sm text-gray-200"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: accentColor }}
                  whileHover={{ scale: 1.5 }}
                />
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* Animated border on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              border: `2px solid ${accentColor}`,
              opacity: 0,
            }}
            whileHover={{
              opacity: 1,
              boxShadow: `inset 0 0 20px ${accentColor}30`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
