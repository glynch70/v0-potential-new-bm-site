'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useDepthMap } from '@/lib/hooks/useDepthMap';

interface Hero3DCanvasProps {
  imageSrc: string;
  depthMapSrc?: string;
  intensity?: number;
  className?: string;
}

export function Hero3DCanvas({
  imageSrc,
  depthMapSrc,
  intensity = 0.5,
  className = '',
}: Hero3DCanvasProps) {
  const { containerRef, rotationX, rotationY, transform } = useDepthMap(intensity);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = imageSrc;
  }, [imageSrc]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden perspective ${className}`}
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          transform,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 30,
        }}
      >
        {/* Main image */}
        <img
          src={imageSrc}
          alt="Hero"
          className="w-full h-full object-cover"
          onLoad={() => setIsLoaded(true)}
        />

        {/* Depth map overlay - creates parallax effect */}
        {depthMapSrc && (
          <motion.div
            className="absolute inset-0 mix-blend-screen opacity-40"
            style={{
              backgroundImage: `url(${depthMapSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateZ(${20 * intensity}px)`,
            }}
          />
        )}

        {/* Subtle lighting overlay that responds to rotation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              circle at ${50 + rotationY * 100}% ${50 + rotationX * 100}%,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(0, 0, 0, 0.1) 100%
            )`,
          }}
        />
      </motion.div>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
