export interface MagneticConfig {
  strength?: number;
  distance?: number;
  smoothing?: number;
  onAttract?: (offsetX: number, offsetY: number) => void;
}

export function createMagneticEffect(element: HTMLElement, config: MagneticConfig = {}) {
  const {
    strength = 0.3,
    distance = 100,
    smoothing = 0.15,
    onAttract,
  } = config;

  let offsetX = 0;
  let offsetY = 0;
  let targetX = 0;
  let targetY = 0;
  let animationId: number;

  const handleMouseMove = (event: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const distX = mouseX - elementCenterX;
    const distY = mouseY - elementCenterY;
    const dist = Math.sqrt(distX ** 2 + distY ** 2);

    if (dist < distance) {
      const angle = Math.atan2(distY, distX);
      const force = (distance - dist) / distance;

      targetX = Math.cos(angle) * force * strength * distance;
      targetY = Math.sin(angle) * force * strength * distance;
    } else {
      targetX = 0;
      targetY = 0;
    }
  };

  const updatePosition = () => {
    offsetX += (targetX - offsetX) * smoothing;
    offsetY += (targetY - offsetY) * smoothing;

    element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    if (onAttract) {
      onAttract(offsetX, offsetY);
    }

    animationId = requestAnimationFrame(updatePosition);
  };

  document.addEventListener('mousemove', handleMouseMove);
  animationId = requestAnimationFrame(updatePosition);

  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    cancelAnimationFrame(animationId);
  };
}
