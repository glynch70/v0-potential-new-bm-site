import { ANIMATION_DURATIONS, EASINGS } from './constants';

export const pageEnterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
    },
  },
};

export const pageExitVariants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
    },
  },
};

export const loaderVariants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: EASINGS.smootherOut,
    },
  },
  exit: {
    scaleX: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
};

export const curtainVariants = {
  initial: { scaleY: 0, originY: 0 },
  animate: {
    scaleY: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
  exit: {
    scaleY: 0,
    originY: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
};

export const staggeredEnterVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: ANIMATION_DURATIONS.fast,
    },
  },
};

export const childEnterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
};

export const horizontalSlideVariants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
    },
  },
};

export const verticalSlideVariants = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
    },
  },
};

export const zoomInVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASINGS.smootherOut,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
    },
  },
};
