// Accessibility utilities for animations

/**
 * Detects if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Hook to get reduced motion preference
 */
export function useReducedMotion() {
  if (typeof window === 'undefined') return false;

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
}

/**
 * Variants for reduced motion
 */
export const reducedMotionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * Get animation config respecting reduced motion preference
 */
export function getAnimationConfig(reduceMotion = false) {
  return {
    duration: reduceMotion ? 0 : 0.5,
    delay: reduceMotion ? 0 : 0.1,
  };
}

/**
 * Safe transition config
 */
export function getSafeTransition(reduceMotion = false) {
  if (reduceMotion) {
    return { duration: 0 };
  }
  return {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
  };
}

/**
 * Create focus-visible styles for keyboard navigation
 */
export const focusVisibleStyles = {
  outline: 'none',
  boxShadow: '0 0 0 2px white, 0 0 0 4px #C9A227',
};

/**
 * Announce to screen readers
 */
export function announceToScreenReader(message: string) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Skip to main content link
 */
export function SkipToMainContent() {
  return (
    <a
      href="#main"
      className="absolute -top-40 left-4 z-50 bg-black text-white px-4 py-2 rounded focus:top-4 transition-all"
    >
      Skip to main content
    </a>
  );
}
