import { ANIMATION_DURATIONS, ANIMATION_DELAYS, EASINGS } from './constants';

export const heroContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: ANIMATION_DELAYS.small,
    },
  },
};

export const heroTitleVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASINGS.smootherOut,
    },
  },
};

export const heroSubtitleVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
      delay: ANIMATION_DELAYS.medium,
    },
  },
};

export const heroButtonVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
      delay: ANIMATION_DELAYS.large,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: 'easeOut',
    },
  },
};

export const scrollIndicatorVariants = {
  animate: {
    y: [0, 10, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const parallaxContainer = {
  initial: { y: 0 },
  animate: {
    transition: {
      duration: 0,
    },
  },
};

export const staggeredWordVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Scroll-triggered animation variants
export const fadeInUpVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
};

export const fadeInVariants = {
  initial: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
    },
  },
};

export const scaleInVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
};
