// Performance utilities for animations

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function getReducedMotionVariant<T>(
  normalVariant: T,
  reducedVariant: T
): T {
  return prefersReducedMotion() ? reducedVariant : normalVariant;
}

export function throttleScroll(callback: () => void, delay: number = 16) {
  let lastCall = 0;

  return () => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      callback();
      lastCall = now;
    }
  };
}

export function debounce<T extends (...args: never[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function requestIdleCallback(callback: () => void) {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(callback);
  } else {
    setTimeout(callback, 0);
  }
}

export function measurePerformance(name: string) {
  if (typeof window === 'undefined') return;

  if ('performance' in window) {
    window.performance.mark(`${name}-start`);

    return () => {
      window.performance.mark(`${name}-end`);
      window.performance.measure(
        name,
        `${name}-start`,
        `${name}-end`
      );

      const measure = window.performance.getEntriesByName(name)[0] as PerformanceMeasure;
      console.log(`${name}: ${measure.duration.toFixed(2)}ms`);
    };
  }
}

export function enableGPUAcceleration(element: HTMLElement) {
  element.style.willChange = 'transform, opacity';
  element.style.transform = 'translateZ(0)';
  element.style.backfaceVisibility = 'hidden';
}

export function disableGPUAcceleration(element: HTMLElement) {
  element.style.willChange = 'auto';
  element.style.transform = '';
  element.style.backfaceVisibility = 'visible';
}

// Lazy load heavy libraries
export async function lazyLoadThree() {
  const { default: THREE } = await import('three');
  return THREE;
}

export async function lazyLoadRive() {
  const { Rive } = await import('rive-react');
  return Rive;
}

// Monitor FPS
export class FPSMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 0;

  update() {
    this.frameCount++;
    const currentTime = performance.now();
    const elapsed = currentTime - this.lastTime;

    if (elapsed >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / elapsed);
      this.frameCount = 0;
      this.lastTime = currentTime;
    }

    return this.fps;
  }

  getFPS() {
    return this.fps;
  }
}
