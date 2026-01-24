import { ANIMATION_DURATIONS, EASINGS } from './constants';

export const letterVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  }),
  hover: {
    y: -5,
    color: '#C9A227',
    transition: {
      duration: 0.2,
    },
  },
};

export const wordVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  }),
  hover: {
    scale: 1.1,
    color: '#C9A227',
    transition: {
      duration: ANIMATION_DURATIONS.fast,
    },
  },
};

export const lineVariants = {
  initial: { scaleX: 0, originX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASINGS.smootherOut,
    },
  },
};

export const underlineVariants = {
  initial: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASINGS.smootherOut,
    },
  },
};

export const textRevealVariants = {
  initial: { clipPath: 'inset(0 100% 0 0)' },
  animate: {
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASINGS.smootherOut,
    },
  },
};

export const maskTextVariants = {
  initial: {
    opacity: 0,
    maskPosition: '100% 0',
  },
  animate: {
    opacity: 1,
    maskPosition: '0 0',
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASINGS.smootherOut,
    },
  },
};

export const rotatingTextVariants = {
  animate: {
    rotateZ: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};
