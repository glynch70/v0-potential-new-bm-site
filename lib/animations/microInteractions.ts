import { ANIMATION_DURATIONS, EASINGS } from './constants';

export const buttonHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.95,
  },
};

export const iconRotateVariants = {
  initial: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: 'easeInOut',
    },
  },
};

export const rippleVariants = {
  initial: {
    scale: 0,
    opacity: 1,
  },
  animate: {
    scale: 4,
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: 'easeOut',
    },
  },
};

export const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const shimmerVariants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const glowVariants = {
  initial: {
    boxShadow: '0 0 0 rgba(201, 162, 39, 0)',
  },
  hover: {
    boxShadow: [
      '0 0 0 rgba(201, 162, 39, 0)',
      '0 0 20px rgba(201, 162, 39, 0.5)',
      '0 0 40px rgba(201, 162, 39, 0.3)',
    ],
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
};

export const slideUnderlineVariants = {
  initial: {
    backgroundPosition: '100% 0',
  },
  hover: {
    backgroundPosition: '0 0',
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
};

export const pressVariants = {
  initial: { scale: 1, y: 0 },
  tap: {
    scale: 0.95,
    y: 2,
  },
};

export const checkmarkVariants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
};

export const inputFocusVariants = {
  initial: {
    borderColor: '#333',
    boxShadow: '0 0 0 rgba(201, 162, 39, 0)',
  },
  focus: {
    borderColor: '#C9A227',
    boxShadow: '0 0 10px rgba(201, 162, 39, 0.5)',
    transition: {
      duration: ANIMATION_DURATIONS.fast,
    },
  },
};

export const labelFloatVariants = {
  initial: {
    y: 0,
    scale: 1,
    color: '#999',
  },
  focus: {
    y: -20,
    scale: 0.85,
    color: '#C9A227',
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASINGS.smootherOut,
    },
  },
};

export const loadingDotsVariants = {
  animate: {
    opacity: [0.2, 1, 0.2],
    transition: {
      duration: 1.4,
      repeat: Infinity,
    },
  },
};

export const skeletonVariants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};
