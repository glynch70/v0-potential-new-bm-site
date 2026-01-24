# Bear Media Animation Enhancement Guide

## Overview

This document outlines the advanced animation system integrated into the Bear Media website, inspired by landonorris.com. The system includes smooth scrolling, 3D effects, text animations, and performance optimizations.

## Key Features

### 1. **Lenis Smooth Scroll**
- Buttery-smooth scrolling experience
- Located in: `components/LenisScrollProvider.tsx`
- Automatically integrated in layout

```tsx
import { LenisScrollProvider } from "@/components/LenisScrollProvider"

<LenisScrollProvider>
  {children}
</LenisScrollProvider>
```

### 2. **Depth Map 3D Effects**
- Create parallax movement with cursor
- Component: `components/Hero/Hero3DCanvas.tsx`

```tsx
import { Hero3DCanvas } from "@/components/Hero/Hero3DCanvas"

<Hero3DCanvas 
  imageSrc="/path/to/image.jpg"
  intensity={0.5}
/>
```

### 3. **Magnetic Button Effects**
- Buttons follow cursor movement
- Component: `components/Buttons/MagneticButton.tsx`

```tsx
import { MagneticButton } from "@/components/Buttons/MagneticButton"

<MagneticButton strength={0.3}>
  Click Me
</MagneticButton>
```

### 4. **Text Animations**

#### Staggered Text (word-by-word)
```tsx
import { StaggeredText } from "@/components/Text/StaggeredText"

<StaggeredText 
  text="Amazing animations for your site"
  className="text-4xl font-bold"
/>
```

#### Animated Heading (letter-by-letter)
```tsx
import { AnimatedHeading } from "@/components/Text/AnimatedHeading"

<AnimatedHeading 
  text="Welcome"
  level="h1"
  className="text-6xl"
/>
```

#### Masked Text Reveal
```tsx
import { MaskedText } from "@/components/Text/MaskedText"

<MaskedText text="Smooth reveal on scroll" />
```

#### Color Shift Text
```tsx
import { ColorShiftText } from "@/components/Text/ColorShiftText"

<ColorShiftText 
  text="Dynamic colors"
  colors={['#ffffff', '#C9A227', '#ffffff']}
/>
```

### 5. **Advanced Card Components**

#### Service Card 3D
```tsx
import { ServiceCard3D } from "@/components/Services/ServiceCard3D"

<ServiceCard3D
  number="01"
  icon={Video}
  title="Service"
  description="Description"
  features={['Feature 1', 'Feature 2']}
/>
```

#### Work Card 3D (Flip Animation)
```tsx
import { WorkCard3D } from "@/components/Work/WorkCard3D"

<WorkCard3D
  title="Project"
  description="Description"
  image="/image.jpg"
  details="Detailed information"
  tags={['tag1', 'tag2']}
/>
```

### 6. **UI Components**

#### Custom Cursor
```tsx
import { CustomCursor } from "@/components/UI/CustomCursor"

<CustomCursor /> {/* Add once in layout */}
```

#### Scroll Progress Indicator
```tsx
import { ScrollProgress } from "@/components/UI/ScrollProgress"

<ScrollProgress /> {/* Add in layout */}
```

#### Parallax Image
```tsx
import { ParallaxImage } from "@/components/UI/ParallaxImage"

<ParallaxImage 
  src="/image.jpg"
  alt="Description"
  speed={0.5}
  direction="up"
/>
```

#### Animated Underline
```tsx
import { AnimatedUnderline } from "@/components/UI/AnimatedUnderline"

<AnimatedUnderline color="#C9A227">
  Hover me
</AnimatedUnderline>
```

### 7. **Form Components**

#### Animated Input
```tsx
import { AnimatedInput } from "@/components/Forms/AnimatedInput"

<AnimatedInput
  label="Email"
  type="email"
  placeholder="your@email.com"
/>
```

### 8. **Buttons**

#### Ripple Button
```tsx
import { RippleButton } from "@/components/Buttons/RippleButton"

<RippleButton variant="primary">
  Click Me
</RippleButton>
```

### 9. **Loaders**

#### Custom Loader (Multiple Variants)
```tsx
import { CustomLoader } from "@/components/Loaders/CustomLoader"

<CustomLoader text="Loading" size="md" variant="spinner" />
<CustomLoader variant="dots" />
<CustomLoader variant="gradient" />
```

#### Skeleton Loader
```tsx
import { SkeletonLoader } from "@/components/Loaders/SkeletonLoader"

<SkeletonLoader type="card" />
<SkeletonLoader type="text" lines={3} />
<SkeletonLoader type="avatar" />
```

## Custom Hooks

### useScrollAnimation
Triggers animation when element enters viewport

```tsx
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation"

const { ref, isInView } = useScrollAnimation({ threshold: 0.2 })
return <div ref={ref}>{isInView && <animated>Content</animated>}</div>
```

### useParallax
Creates parallax scroll effect

```tsx
import { useParallax } from "@/lib/hooks/useParallax"

const { ref, style } = useParallax({ speed: 0.5, direction: 'up' })
return <div ref={ref} style={style}>Content</div>
```

### useDepthMap
3D depth tracking with mouse movement

```tsx
import { useDepthMap } from "@/lib/hooks/useDepthMap"

const { containerRef, rotationX, rotationY, transform } = useDepthMap()
return <div ref={containerRef} style={{ transform }}>3D Content</div>
```

### useMagneticCursor
Makes element follow cursor with magnetic effect

```tsx
import { useMagneticCursor } from "@/lib/hooks/useMagneticCursor"

const { elementRef, style } = useMagneticCursor({ strength: 0.3 })
return <div ref={elementRef} style={style}>Magnetic Element</div>
```

### useTextAnimation
Split text into words and letters for animation

```tsx
import { useTextAnimation } from "@/lib/hooks/useTextAnimation"

const { words, letters } = useTextAnimation("Your text here")
```

## Animation Variants

Located in `lib/animations/`, these can be used with Framer Motion:

- `heroVariants.ts` - Hero section animations
- `textVariants.ts` - Text-specific animations
- `clipPathVariants.ts` - Clip path mask animations
- `pageTransitionVariants.ts` - Page transition effects
- `microInteractions.ts` - Button, input, and UI animations

## Performance Optimization

### Bundle Size
- All Three.js/Rive features are code-split
- Lazy loading for heavy libraries
- Tree-shaking of unused Three.js modules

### 60fps Animations
- GPU-accelerated with `will-change`
- Transform-only animations
- Passive event listeners
- Throttled scroll handlers

### Accessibility

**Respect Reduced Motion:**
```tsx
import { prefersReducedMotion } from "@/lib/animations/accessibility"

if (prefersReducedMotion()) {
  // Show static version
}
```

**Screen Reader Support:**
```tsx
import { announceToScreenReader } from "@/lib/animations/accessibility"

announceToScreenReader("Action completed successfully")
```

## Configuration

### Animation Constants
Edit `lib/animations/constants.ts` to customize:

- `ANIMATION_DURATIONS` - Timing values
- `EASINGS` - Easing functions
- `SCROLL_CONFIG` - Lenis settings
- `THREE_D_CONFIG` - 3D parameters
- `PARTICLE_CONFIG` - Particle system settings

### Color Scheme
All components use `#C9A227` (amber-400) as the primary brand color, customizable via props

## Best Practices

### 1. **Use Intersection Observer for Scroll Effects**
Only animate elements in viewport to improve performance

### 2. **Respect User Preferences**
Always check `prefers-reduced-motion` for accessibility

### 3. **Optimize Images**
Compress images before using in parallax/depth effects

### 4. **Test on Mobile**
Disable 3D effects on touch devices using:
```tsx
const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches
```

### 5. **Monitor FPS**
Use browser DevTools Performance tab to ensure 60fps

## Troubleshooting

### Animations feel jerky
- Check for JavaScript errors in console
- Reduce particle count in `PARTICLE_CONFIG`
- Disable custom cursor on lower-end devices

### Scroll feels slow
- Adjust Lenis `lerp` value (lower = smoother, higher = faster)
- Reduce parallax `speed` values

### Text animations not triggering
- Increase `threshold` in `useScrollAnimation`
- Check element visibility with `isInView` prop

## Resources

- [Lenis Smooth Scroll](https://github.com/darkroom-engineering/lenis)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- [Rive Animations](https://rive.app/)

## Support

For questions or issues with animations, check:
1. Browser console for errors
2. Component props documentation
3. `/lib/animations/` for variant details
