'use client'

import { useEffect, useRef } from 'react'
import { Video, Monitor, Plus } from 'lucide-react'

export default function InteractiveServiceCards() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Scroll-triggered animations - higher threshold and track which cards are animated
    const animatedCards = new Set<HTMLElement>()
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Only trigger animation once per card
        if (entry.isIntersecting && !animatedCards.has(entry.target as HTMLElement)) {
          entry.target.classList.add('visible')
          animatedCards.add(entry.target as HTMLElement)
        }
      })
    }, observerOptions)

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    // 3D Tilt effect - disabled on mobile, subtle on desktop
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    
    const handleTilt = (e: MouseEvent, card: HTMLElement) => {
      // Tilt disabled on touch devices for stability
      if (isTouchDevice) return
      
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      // Reduced tilt sensitivity from 5 to 2.5 degrees max
      const rotateX = ((y - centerY) / centerY) * -2.5
      const rotateY = ((x - centerX) / centerX) * 2.5
      
      card.style.transform = `translateY(-4px) perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const resetTilt = (card: HTMLElement) => {
      card.style.transform = ''
    }

    // Add particles
    const createParticles = (card: HTMLElement) => {
      const particlesDiv = document.createElement('div')
      particlesDiv.className = 'particles'
      
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particlesDiv.appendChild(particle)
      }
      
      card.insertBefore(particlesDiv, card.firstChild)
    }

    // Initialize
    cardsRef.current.forEach(card => {
      if (!card) return
      
      createParticles(card)
      
      // Only attach hover tilt on desktop with fine pointer
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        card.addEventListener('mousemove', (e) => handleTilt(e as MouseEvent, card))
        card.addEventListener('mouseleave', () => resetTilt(card))
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const services = [
    {
      number: '01',
      icon: Video,
      title: 'Social Media Content',
      description: 'Consistent, on-brand content that builds trust and visibility.',
      features: ['Reels & Shorts', 'Promo clips', 'Monthly packages', 'Management'],
      colorClass: 'card-1'
    },
    {
      number: '02',
      icon: Monitor,
      title: 'Websites',
      description: 'Fast, clean websites built to convert visitors.',
      features: ['Landing pages', 'Business sites', 'Hosting'],
      colorClass: 'card-2'
    },
    {
      number: '03',
      icon: Plus,
      title: 'Extras & Add-ons',
      description: 'Everything else to support your brand.',
      features: ['Drone', 'Photography', 'SEO', 'Google Business'],
      colorClass: 'card-3'
    }
  ]

  return (
    <>
      <style jsx global>{`
        .services-section {
          background: #050505;
          padding: 60px 20px;
          min-height: 100vh;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .services-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 8px;
          color: white;
        }

        .services-header .subtitle {
          font-size: 1.4rem;
          color: #C9A227;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .services-header p {
          font-size: 1.2rem;
          color: #999;
        }

        .services-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .services-stack {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }
        }

        .service-card {
          width: 100%;
          background: #1a1a1a;
          border-radius: 24px;
          padding: 40px 28px;
          position: relative;
          overflow: visible;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-style: preserve-3d;
          perspective: 1200px;
          opacity: 0;
          transform: translateY(40px);
          box-sizing: border-box;
        }

        @media (min-width: 1024px) {
          .service-card {
            padding: 50px 40px;
            transform: translateY(60px);
          }
        }

        .service-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .service-card:nth-child(1) {
          transition-delay: 0s;
        }

        .service-card:nth-child(2) {
          transition-delay: 0.08s;
        }

        .service-card:nth-child(3) {
          transition-delay: 0.16s;
        }

        /* Backlight */
        .service-card::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: -1;
          filter: blur(45px);
        }

        .service-card.card-1::before {
          background: radial-gradient(circle, rgba(255, 184, 77, 0.9) 0%, rgba(255, 140, 66, 0.7) 30%, rgba(255, 120, 50, 0.4) 60%, transparent 80%);
        }

        .service-card.card-2::before {
          background: radial-gradient(circle, rgba(78, 205, 196, 0.9) 0%, rgba(78, 205, 196, 0.7) 30%, rgba(60, 185, 176, 0.4) 60%, transparent 80%);
        }

        .service-card.card-3::before {
          background: radial-gradient(circle, rgba(95, 208, 104, 0.9) 0%, rgba(95, 208, 104, 0.7) 30%, rgba(75, 188, 84, 0.4) 60%, transparent 80%);
        }

        .service-card.visible::before {
          animation: scrollGlow 2.5s ease-out forwards;
        }

        @keyframes scrollGlow {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
            filter: blur(60px);
          }
          50% {
            opacity: 0.8;
            filter: blur(45px);
          }
          100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1);
            filter: blur(45px);
          }
        }

        .service-card:hover::before,
        .service-card:active::before {
          opacity: 1 !important;
          filter: blur(50px);
          animation: backlightPulse 2s ease-in-out infinite;
        }

        @keyframes backlightPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.85;
          }
        }

        /* Border lighting */
        .service-card::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 24px;
          padding: 3px;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 2;
        }

        .service-card.card-1::after {
          background: linear-gradient(135deg, #FFB84D 0%, #FF8C42 50%, #FFB84D 100%);
        }

        .service-card.card-2::after {
          background: linear-gradient(135deg, #4ECDC4 0%, #3DBDB4 50%, #4ECDC4 100%);
        }

        .service-card.card-3::after {
          background: linear-gradient(135deg, #5FD068 0%, #4FC058 50%, #5FD068 100%);
        }

        .service-card:hover::after,
        .service-card:active::after {
          opacity: 1;
          animation: borderGlow 2s ease-in-out infinite;
        }

        .service-card.visible::after {
          animation: scrollBorderFlash 1.2s ease-out forwards;
        }

        @keyframes borderGlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes scrollBorderFlash {
          0% { opacity: 0; }
          40% { opacity: 1; }
          100% { opacity: 0; }
        }

        /* Particles */
        .particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          border-radius: 24px;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          opacity: 0;
          animation: sparkle 4s ease-in-out infinite;
        }

        .card-1 .particle {
          background: radial-gradient(circle, #FFB84D, transparent);
          box-shadow: 0 0 8px #FFB84D;
        }

        .card-2 .particle {
          background: radial-gradient(circle, #4ECDC4, transparent);
          box-shadow: 0 0 8px #4ECDC4;
        }

        .card-3 .particle {
          background: radial-gradient(circle, #5FD068, transparent);
          box-shadow: 0 0 8px #5FD068;
        }

        @keyframes sparkle {
          0% {
            opacity: 0;
            transform: translateY(100%) scale(0);
          }
          50% {
            opacity: 1;
            transform: translateY(50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(0%) scale(0);
          }
        }

        .particle:nth-child(1) { left: 15%; animation-delay: 0s; }
        .particle:nth-child(2) { left: 30%; animation-delay: 0.5s; }
        .particle:nth-child(3) { left: 50%; animation-delay: 1s; }
        .particle:nth-child(4) { left: 70%; animation-delay: 1.5s; }
        .particle:nth-child(5) { left: 85%; animation-delay: 2s; }
        .particle:nth-child(6) { left: 25%; animation-delay: 0.8s; }
        .particle:nth-child(7) { left: 60%; animation-delay: 1.8s; }
        .particle:nth-child(8) { left: 40%; animation-delay: 1.2s; }

        .service-card:hover .particle,
        .service-card:active .particle {
          animation-duration: 2s;
        }

        /* Content */
        .card-content {
          position: relative;
          z-index: 3;
        }

        .number-badge {
          position: absolute;
          top: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: #1a1a1a;
          font-weight: 800;
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s ease;
          transform: scale(0) rotate(-180deg);
          opacity: 0;
        }

        .service-card.visible .number-badge {
          animation: numberBadgeIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
        }

        @keyframes numberBadgeIn {
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .card-1 .number-badge {
          background: #FFB84D;
        }

        .card-2 .number-badge {
          background: #4ECDC4;
        }

        .card-3 .number-badge {
          background: #5FD068;
        }

        .service-card:hover .number-badge,
        .service-card:active .number-badge {
          transform: scale(1.15) rotate(360deg) !important;
        }

        .icon-circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 32px;
          border: 3px solid;
          transform: rotate(-180deg) scale(0.5);
          opacity: 0;
        }

        .service-card.visible .icon-circle {
          animation: iconRotateIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
        }

        @keyframes iconRotateIn {
          to {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        .card-1 .icon-circle {
          background: rgba(255, 184, 77, 0.15);
          border-color: #FFB84D;
          color: #FFB84D;
        }

        .card-2 .icon-circle {
          background: rgba(78, 205, 196, 0.15);
          border-color: #4ECDC4;
          color: #4ECDC4;
        }

        .card-3 .icon-circle {
          background: rgba(95, 208, 104, 0.15);
          border-color: #5FD068;
          color: #5FD068;
        }

        .service-card.visible:hover .icon-circle,
        .service-card.visible:active .icon-circle {
          transform: rotate(360deg) scale(1.1) !important;
        }

        .card-title {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .card-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .features-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-pills li {
          padding: 10px 20px;
          border-radius: 100px;
          font-size: 0.9rem;
          font-weight: 600;
          border: 2px solid;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
        }

        .service-card.visible .features-pills li:nth-child(1) {
          animation: pillFadeIn 0.5s ease 0.6s forwards;
        }

        .service-card.visible .features-pills li:nth-child(2) {
          animation: pillFadeIn 0.5s ease 0.7s forwards;
        }

        .service-card.visible .features-pills li:nth-child(3) {
          animation: pillFadeIn 0.5s ease 0.8s forwards;
        }

        .service-card.visible .features-pills li:nth-child(4) {
          animation: pillFadeIn 0.5s ease 0.9s forwards;
        }

        @keyframes pillFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-1 .features-pills li {
          background: rgba(255, 184, 77, 0.1);
          border-color: rgba(255, 184, 77, 0.3);
          color: #FFB84D;
        }

        .card-2 .features-pills li {
          background: rgba(78, 205, 196, 0.1);
          border-color: rgba(78, 205, 196, 0.3);
          color: #4ECDC4;
        }

        .card-3 .features-pills li {
          background: rgba(95, 208, 104, 0.1);
          border-color: rgba(95, 208, 104, 0.3);
          color: #5FD068;
        }

        .service-card:hover .features-pills li,
        .service-card:active .features-pills li {
          transform: translateY(-2px);
        }

        .card-1:hover .features-pills li,
        .card-1:active .features-pills li {
          background: rgba(255, 184, 77, 0.2);
          border-color: rgba(255, 184, 77, 0.5);
        }

        .card-2:hover .features-pills li,
        .card-2:active .features-pills li {
          background: rgba(78, 205, 196, 0.2);
          border-color: rgba(78, 205, 196, 0.5);
        }

        .card-3:hover .features-pills li,
        .card-3:active .features-pills li {
          background: rgba(95, 208, 104, 0.2);
          border-color: rgba(95, 208, 104, 0.5);
        }

        @media (max-width: 1023px) {
          .services-section {
            padding: 40px 16px;
          }

          .services-header {
            margin-bottom: 40px;
          }

          .services-header h1 {
            font-size: 2rem;
          }

          .services-stack {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .service-card {
            width: 100%;
            padding: 32px 24px;
            border-radius: 20px;
          }

          .card-title {
            font-size: 1.5rem;
          }

          .card-description {
            font-size: 0.95rem;
            margin-bottom: 24px;
          }

          .number-badge {
            top: 16px;
            right: 16px;
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }

          .icon-circle {
            width: 64px;
            height: 64px;
            font-size: 1.75rem;
            margin-bottom: 24px;
          }

          .features-pills {
            gap: 8px;
          }

          .features-pills li {
            padding: 8px 14px;
            font-size: 0.8rem;
          }
        }

        @media (hover: none) and (pointer: coarse) {
          .service-card:active::before {
            opacity: 1;
          }

          .service-card:active::after {
            opacity: 1;
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .service-card {
            transition: transform 0.3s ease;
          }
        }
      `}</style>

      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h1>Services</h1>
            <p className="subtitle">Websites & Social Media Content</p>
            <p>Clear, practical services that get results.</p>
          </div>

          <div className="services-stack">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  ref={(el) => { cardsRef.current[index] = el }}
                  className={`service-card ${service.colorClass}`}
                >
                  <div className="number-badge">{service.number}</div>
                  <div className="card-content">
                    <div className="icon-circle">
                      <IconComponent size={40} strokeWidth={2} />
                    </div>
                    <h2 className="card-title">{service.title}</h2>
                    <p className="card-description">{service.description}</p>
                    <ul className="features-pills">
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
