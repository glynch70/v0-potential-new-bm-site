'use client';

import { useEffect, useRef, useState } from 'react';
import { THREE_D_CONFIG } from '@/lib/animations/constants';

interface MousePosition {
  x: number;
  y: number;
}

export function useDepthMap(intensity: number = 1) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setMousePosition({ x, y });

      // Calculate rotation based on mouse position relative to container center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotX = ((y - centerY) / centerY) * THREE_D_CONFIG.maxRotationX * intensity;
      const rotY = ((x - centerX) / centerX) * THREE_D_CONFIG.maxRotationY * intensity;

      setRotationX(rotX);
      setRotationY(rotY);
    };

    const handleMouseLeave = () => {
      setRotationX(0);
      setRotationY(0);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  return {
    containerRef,
    mousePosition,
    rotationX,
    rotationY,
    transform: `
      perspective(1000px)
      rotateX(${rotationX}rad)
      rotateY(${rotationY}rad)
    `,
  };
}
