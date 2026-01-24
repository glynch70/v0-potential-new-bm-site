'use client';

import { useEffect, useRef, useState } from 'react';

interface MagneticOptions {
  strength?: number;
  distance?: number;
  smoothing?: number;
}

export function useMagneticCursor(options: MagneticOptions = {}) {
  const { strength = 0.3, distance = 100, smoothing = 0.15 } = options;
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const distX = mouseX - elementCenterX;
      const distY = mouseY - elementCenterY;
      const dist = Math.sqrt(distX ** 2 + distY ** 2);

      if (dist < distance) {
        const angle = Math.atan2(distY, distX);
        const force = (distance - dist) / distance;

        velocityRef.current.x =
          Math.cos(angle) * force * strength * distance;
        velocityRef.current.y =
          Math.sin(angle) * force * strength * distance;
      } else {
        velocityRef.current.x *= 0.9;
        velocityRef.current.y *= 0.9;
      }
    };

    const updatePosition = () => {
      setOffset((prevOffset) => ({
        x: prevOffset.x + (velocityRef.current.x - prevOffset.x) * smoothing,
        y: prevOffset.y + (velocityRef.current.y - prevOffset.y) * smoothing,
      }));

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [strength, distance, smoothing]);

  return {
    elementRef,
    style: {
      transform: `translate(${offset.x}px, ${offset.y}px)`,
    },
  };
}
