import { PARTICLE_CONFIG } from './constants';

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationId: number | null = null;
  private isRunning = false;

  constructor(container: HTMLElement) {
    this.setupCanvas(container);
  }

  private setupCanvas(container: HTMLElement) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = container.offsetWidth;
    this.canvas.height = container.offsetHeight;
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '10';

    this.ctx = this.canvas.getContext('2d');
    container.appendChild(this.canvas);
  }

  public emit(x: number, y: number, count: number = 5, color: string = '#C9A227') {
    for (let i = 0; i < count; i++) {
      const angle = (Math.random() * Math.PI * 2);
      const velocity = 2 + Math.random() * 3;

      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 0,
        maxLife: 1000 + Math.random() * 500,
        size: 2 + Math.random() * 3,
        opacity: 1,
      });
    }

    if (!this.isRunning) {
      this.isRunning = true;
      this.animate();
    }
  }

  private animate = () => {
    if (!this.ctx || !this.canvas) return;

    const now = Date.now();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles = this.particles.filter((particle) => {
      particle.life += 16; // ~60fps
      const progress = particle.life / particle.maxLife;

      if (progress >= 1) return false;

      // Update position with gravity
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.1; // gravity

      // Fade out
      particle.opacity = 1 - progress;

      // Draw particle
      this.ctx.save();
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.fillStyle = '#C9A227';
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      return true;
    });

    if (this.particles.length > 0) {
      this.animationId = requestAnimationFrame(this.animate);
    } else {
      this.isRunning = false;
    }
  };

  public destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

export function createParticleEffect(
  element: HTMLElement,
  onMouseMove?: (x: number, y: number) => void
) {
  const system = new ParticleSystem(element);

  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (Math.random() > 0.7) {
      system.emit(x, y, 2);
    }

    onMouseMove?.(x, y);
  });

  return system;
}
