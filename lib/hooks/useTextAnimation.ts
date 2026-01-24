'use client';

import React from 'react';

export interface SplitTextResult {
  words: { text: string; key: string }[];
  letters: { text: string; key: string }[];
}

export function useTextAnimation(text: string): SplitTextResult {
  const words = text.split(' ').map((word, index) => ({
    text: word,
    key: `word-${index}`,
  }));

  const letters = text.split('').map((letter, index) => ({
    text: letter === ' ' ? '\u00A0' : letter, // Non-breaking space for spaces
    key: `letter-${index}`,
  }));

  return { words, letters };
}

export function useCountUp(
  targetValue: number,
  duration: number = 2000,
  start: boolean = true
) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setCount(Math.floor(progress * targetValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [targetValue, duration, start]);

  return count;
}
