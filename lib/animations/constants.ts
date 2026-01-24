// Animation timing constants
export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
} as const;

export const ANIMATION_DELAYS = {
  none: 0,
  tiny: 0.05,
  small: 0.1,
  medium: 0.2,
  large: 0.3,
  xl: 0.5,
} as const;

// Easing functions (matching Lando's smooth feel)
export const EASINGS = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  smootherIn: [0.22, 1, 0.36, 1],
  smootherOut: [0.16, 1, 0.3, 1],
  easeOutElastic: [0.34, 1.56, 0.64, 1],
} as const;

// Scroll configuration
export const SCROLL_CONFIG = {
  lerp: 0.1, // Smoothness of scroll
  wheelMultiplier: 1,
  touchMultiplier: 2,
} as const;

// 3D Animation defaults
export const THREE_D_CONFIG = {
  depthScale: 50,
  maxRotationX: 0.1,
  maxRotationY: 0.1,
  dampingFactor: 0.05,
} as const;

// Particle system defaults
export const PARTICLE_CONFIG = {
  count: 100,
  lifetime: 2000,
  velocityRange: { min: -0.5, max: 0.5 },
  sizeRange: { min: 2, max: 8 },
} as const;

// Performance thresholds
export const PERF_CONFIG = {
  enableParticles: true,
  enableBlur: true,
  enableShaders: true,
  targetFPS: 60,
  reduceMotionEnabled: false,
} as const;
