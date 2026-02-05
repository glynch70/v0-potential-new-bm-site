'use client';

import NextImage from 'next/image';
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
    if (typeof window === 'undefined') return;

    const preload = new window.Image();
    const timeout = setTimeout(() => setIsLoaded(true), 2000);

    preload.onload = () => {
      clearTimeout(timeout);
      setIsLoaded(true);
    };
    preload.src = imageSrc;

    return () => clearTimeout(timeout);
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
        className="relative h-full w-full"
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
        <NextImage
          src={imageSrc}
          alt="Hero"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          onLoadingComplete={() => setIsLoaded(true)}
        />

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

        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(
              circle at ${50 + rotationY * 100}% ${50 + rotationX * 100}%,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(0, 0, 0, 0.1) 100%
            )`,
          }}
        />
      </motion.div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-400 border-t-transparent" />
        </div>
      )}
    </div>
  );
}
