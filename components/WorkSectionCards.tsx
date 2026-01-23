'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

export default function WorkSectionCards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Social Media Content',
      description: 'Scroll-stopping video and graphics for social feeds.',
      category: 'Video',
      image: '/services-social-media.jpg',
      color: '#FFB84D',
      hasVideo: true
    },
    {
      id: 2,
      title: 'Business Websites',
      description: 'Clean, fast websites built to convert.',
      category: 'Web',
      image: '/work/websites-desktop.jpg',
      color: '#4ECDC4',
      hasVideo: false
    },
    {
      id: 3,
      title: 'Brand Assets',
      description: 'Logos, graphics and visual identity systems.',
      category: 'Design',
      image: '/services-extras.jpg',
      color: '#5FD068',
      hasVideo: false
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <>
      <style jsx global>{`
        .work-section {
          background: #0a0a0a;
          padding: 80px 20px;
          min-height: 100vh;
          position: relative;
        }

        .work-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .work-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .work-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 16px;
          color: white;
        }

        .work-header p {
          font-size: 1.2rem;
          color: #999;
        }

        /* Cards Grid */
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 60px;
        }

        /* Individual Card */
        .work-card {
          position: relative;
          background: #1a1a1a;
          border-radius: 24px;
          overflow: visible;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          opacity: 0;
          transform: translateY(40px);
        }

        .work-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .work-card:nth-child(1) {
          transition-delay: 0.1s;
        }

        .work-card:nth-child(2) {
          transition-delay: 0.2s;
        }

        .work-card:nth-child(3) {
          transition-delay: 0.3s;
        }

        .work-card:hover {
          transform: translateY(-12px);
        }

        /* Backlight Glow */
        .work-card::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 110%;
          height: 110%;
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
          filter: blur(40px);
        }

        .work-card[data-color="orange"]::before {
          background: radial-gradient(circle, rgba(255, 184, 77, 0.6) 0%, rgba(255, 140, 66, 0.4) 40%, transparent 70%);
        }

        .work-card[data-color="teal"]::before {
          background: radial-gradient(circle, rgba(78, 205, 196, 0.6) 0%, rgba(78, 205, 196, 0.4) 40%, transparent 70%);
        }

        .work-card[data-color="green"]::before {
          background: radial-gradient(circle, rgba(95, 208, 104, 0.6) 0%, rgba(95, 208, 104, 0.4) 40%, transparent 70%);
        }

        .work-card.visible::before {
          animation: cardGlow 1.5s ease-out forwards;
        }

        @keyframes cardGlow {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .work-card:hover::before {
          opacity: 0.7 !important;
          animation: glowPulse 2s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        /* Border Glow */
        .work-card::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 24px;
          padding: 2px;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .work-card[data-color="orange"]::after {
          background: linear-gradient(135deg, #FFB84D, #FF8C42);
        }

        .work-card[data-color="teal"]::after {
          background: linear-gradient(135deg, #4ECDC4, #3DBDB4);
        }

        .work-card[data-color="green"]::after {
          background: linear-gradient(135deg, #5FD068, #4FC058);
        }

        .work-card:hover::after {
          opacity: 1;
          animation: borderPulse 2s ease-in-out infinite;
        }

        @keyframes borderPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Image Container */
        .card-image-container {
          position: relative;
          width: 100%;
          height: 320px;
          border-radius: 20px 20px 0 0;
          overflow: hidden;
          background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .work-card:hover .card-image {
          transform: scale(1.08);
        }

        /* Image Overlay */
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.3) 60%,
            rgba(0, 0, 0, 0.7) 100%
          );
          transition: background 0.3s ease;
        }

        .work-card:hover .image-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.5) 60%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }

        /* Play Button */
        .play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .play-overlay[data-color="orange"] {
          background: rgba(255, 184, 77, 0.9);
        }

        .play-overlay[data-color="teal"] {
          background: rgba(78, 205, 196, 0.9);
        }

        .play-overlay[data-color="green"] {
          background: rgba(95, 208, 104, 0.9);
        }

        .work-card:hover .play-overlay {
          transform: translate(-50%, -50%) scale(1.15);
        }

        .play-overlay svg {
          color: #1a1a1a;
          margin-left: 3px;
        }

        /* Category Badge */
        .category-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          backdrop-filter: blur(10px);
          z-index: 3;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s ease 0.2s;
        }

        .work-card.visible .category-badge {
          opacity: 1;
          transform: translateY(0);
        }

        .category-badge[data-color="orange"] {
          background: rgba(255, 184, 77, 0.2);
          border: 2px solid rgba(255, 184, 77, 0.4);
          color: #FFB84D;
        }

        .category-badge[data-color="teal"] {
          background: rgba(78, 205, 196, 0.2);
          border: 2px solid rgba(78, 205, 196, 0.4);
          color: #4ECDC4;
        }

        .category-badge[data-color="green"] {
          background: rgba(95, 208, 104, 0.2);
          border: 2px solid rgba(95, 208, 104, 0.4);
          color: #5FD068;
        }

        /* External Link */
        .external-link {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s ease;
          z-index: 3;
        }

        .work-card:hover .external-link {
          opacity: 1;
          transform: scale(1);
        }

        .external-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .external-link svg {
          color: white;
        }

        /* Card Content */
        .card-content {
          padding: 30px;
          position: relative;
          z-index: 2;
        }

        .card-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .card-description {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        /* Navigation Buttons */
        .nav-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .nav-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .nav-btn svg {
          color: rgba(255, 255, 255, 0.7);
        }

        .nav-btn:hover svg {
          color: white;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .work-card:nth-child(3) {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .work-section {
            padding: 60px 16px;
          }

          .work-header {
            margin-bottom: 60px;
          }

          .work-header h1 {
            font-size: 2.5rem;
          }

          .work-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .work-card:nth-child(3) {
            grid-column: span 1;
          }

          .card-image-container {
            height: 240px;
          }

          .card-content {
            padding: 20px;
          }

          .card-title {
            font-size: 1.3rem;
          }

          .card-description {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <section id="work" className="work-section">
        <div className="work-container">
          <div className="work-header">
            <h1>Work</h1>
            <p>Portfolio examples across social, web, and design</p>
          </div>

          {/* Cards Grid */}
          <div className="work-grid">
            {projects.map((project, index) => {
              const colorName = project.color === '#FFB84D' ? 'orange' : project.color === '#4ECDC4' ? 'teal' : 'green'
              
              return (
                <div
                  key={project.id}
                  ref={(el) => { cardsRef.current[index] = el }}
                  className="work-card"
                  data-color={colorName}
                >
                  {/* Image Container */}
                  <div className="card-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-image"
                    />
                    <div className="image-overlay" />

                    {/* Category Badge */}
                    <div className="category-badge" data-color={colorName}>
                      {project.category}
                    </div>

                    {/* Play Button for Videos */}
                    {project.hasVideo && (
                      <div className="play-overlay" data-color={colorName}>
                        <Play size={28} fill="currentColor" />
                      </div>
                    )}

                    {/* External Link */}
                    <div className="external-link">
                      <ExternalLink size={18} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card-content">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation (optional - can remove if you don't want carousel) */}
          <div className="nav-buttons">
            <button className="nav-btn" onClick={prevSlide} aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <button className="nav-btn" onClick={nextSlide} aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
