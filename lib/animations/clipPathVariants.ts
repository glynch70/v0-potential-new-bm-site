import { ANIMATION_DURATIONS, EASINGS } from './constants';

export const clipPathCircleVariants = {
  initial: {
    clipPath: 'circle(0% at 50% 50%)',
  },
  animate: {
    clipPath: 'circle(100% at 50% 50%)',
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
};

export const clipPathEllipseVariants = {
  initial: {
    clipPath: 'ellipse(0% 0% at 50% 50%)',
  },
  hover: {
    clipPath: 'ellipse(100% 100% at 50% 50%)',
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASINGS.smootherOut,
    },
  },
};

export const clipPathInsetVariants = {
  initial: {
    clipPath: 'inset(50% 50% 50% 50%)',
  },
  animate: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
};

export const clipPathPolygonVariants = {
  initial: {
    clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)',
  },
  animate: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASINGS.smootherOut,
    },
  },
};

// Custom wave clip path
export const clipPathWaveVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const waveSegmentVariants = (index: number) => ({
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
});

// Staggered clip path reveal
export const staggeredClipPathVariants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

export const clipPathItemVariants = {
  initial: {
    clipPath: 'inset(50% 50% 50% 50%)',
  },
  animate: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
};

// Animated mask path for SVG-like effects
export const maskPathVariants = {
  initial: {
    maskPosition: '100% 0',
    WebkitMaskPosition: '100% 0',
  },
  animate: {
    maskPosition: '0 0',
    WebkitMaskPosition: '0 0',
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASINGS.smootherOut,
    },
  },
};
