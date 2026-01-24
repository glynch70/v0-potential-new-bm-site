'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, ExternalLink } from 'lucide-react'

export default function WorkSectionCards() {
  const [activeCard, setActiveCard] = useState(0)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Wait for DOM to be ready
    const initAnimations = () => {
      // Intersection Observer for slide-up animations
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const card = entry.target as HTMLElement
          if (entry.isIntersecting) {
            card.classList.add('visible')
          }
        })
      }, observerOptions)

      // Observe all cards
      cardsRef.current.forEach(card => {
        if (card) observer.observe(card)
      })

      // Scroll-based card activation for tabs
      const handleScroll = () => {
        if (!sectionRef.current) return

        const viewportCenter = window.scrollY + window.innerHeight / 2
        const sectionTop = sectionRef.current.offsetTop
        const sectionBottom = sectionTop + sectionRef.current.offsetHeight

        // Check if we're in the work section
        if (viewportCenter < sectionTop || viewportCenter > sectionBottom) {
          return
        }

        // Find which card is closest to viewport center
        let closestIndex = 0
        let closestDistance = Infinity

        cardsRef.current.forEach((card, index) => {
          if (!card) return
          const cardTop = card.offsetTop + sectionTop
          const cardCenter = cardTop + card.offsetHeight / 2
          const distance = Math.abs(viewportCenter - cardCenter)

          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        })

        setActiveCard(closestIndex)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll() // Initial call

      return () => {
        window.removeEventListener('scroll', handleScroll)
        observer.disconnect()
      }
    }

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(initAnimations, 100)
    
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Social Media Content',
      description: 'Scroll-stopping video and graphics for social feeds.',
      category: 'Video',
      image: '/services-social-media.jpg',
      color: '#FFB84D',
      bgColor: 'rgba(255, 184, 77, 0.1)',
      hasVideo: true
    },
    {
      id: 2,
      title: 'Business Websites',
      description: 'Clean, fast websites built to convert.',
      category: 'Web',
      image: '/work/websites-desktop.jpg',
      color: '#4ECDC4',
      bgColor: 'rgba(78, 205, 196, 0.1)',
      hasVideo: false
    },
    {
      id: 3,
      title: 'Brand Assets',
      description: 'Logos, graphics and visual identity systems.',
      category: 'Design',
      image: '/services-extras.jpg',
      color: '#5FD068',
      bgColor: 'rgba(95, 208, 104, 0.1)',
      hasVideo: false
    }
  ]

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
          position: relative;
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

        /* Layout Container */
        .work-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 40px;
          align-items: start;
        }

        /* Sticky Title Tabs Container */
        .work-tabs {
          position: sticky;
          top: 100px;
          z-index: 10;
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Title Tab */
        .work-tab {
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.4;
          transform: translateX(-10px);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .work-tab.active {
          opacity: 1;
          transform: translateX(0);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
        }

        /* Cards Stack Container */
        .work-stack {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Individual Card */
        .work-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          transform: translateY(60px);
          will-change: transform, opacity;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        .work-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Card Background Colors */
        .work-card[data-color="orange"] {
          background: rgba(255, 184, 77, 0.08);
          border: 1px solid rgba(255, 184, 77, 0.2);
        }

        .work-card[data-color="teal"] {
          background: rgba(78, 205, 196, 0.08);
          border: 1px solid rgba(78, 205, 196, 0.2);
        }

        .work-card[data-color="green"] {
          background: rgba(95, 208, 104, 0.08);
          border: 1px solid rgba(95, 208, 104, 0.2);
        }

        /* Card Content Layout */
        .work-card-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          padding: 28px 32px;
          align-items: center;
        }

        /* Card Text Section */
        .card-text-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .card-category {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.7;
          margin-bottom: 8px;
        }

        .card-title-main {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .card-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .card-metrics {
          display: flex;
          gap: 24px;
          margin-bottom: 20px;
        }

        .metric-value {
          font-size: 1.3rem;
        }

        .metric-item {
          display: flex;
          flex-direction: column;
        }

        .metric-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 4px;
        }

        .metric-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }

        .card-client {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          margin-top: auto;
        }

        .client-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .client-info {
          flex: 1;
        }

        .client-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: white;
        }

        .client-role {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        /* Card Image Section */
        .card-image-section {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-image-container {
          position: relative;
          width: 100%;
          max-width: 350px;
          aspect-ratio: 4/3;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .card-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .work-card:hover .card-image {
          transform: scale(1.05);
        }

        /* Play Button */
        .play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 2;
          backdrop-filter: blur(10px);
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
          transform: translate(-50%, -50%) scale(1.1);
        }

        .play-overlay svg {
          color: #1a1a1a;
          margin-left: 4px;
        }

        /* Responsive - Mobile Stacking */
        @media (max-width: 1024px) {
          .work-layout {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .work-tabs {
            display: none;
          }

          .work-stack {
            gap: 16px;
          }

          .work-card {
            max-width: 100%;
          }

          .work-card-content {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 24px;
          }

          .card-title-main {
            font-size: 1.75rem;
          }

          .card-image-container {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .work-section {
            padding: 60px 16px;
          }

          .work-header {
            margin-bottom: 40px;
          }

          .work-header h1 {
            font-size: 2.5rem;
          }

          .work-stack {
            gap: 16px;
            max-width: 100%;
          }

          .work-card {
            border-radius: 16px;
          }

          .work-card-content {
            padding: 20px;
            gap: 16px;
          }

          .card-category {
            font-size: 0.75rem;
          }

          .card-title-main {
            font-size: 1.5rem;
            margin-bottom: 12px;
          }

          .card-description {
            font-size: 0.95rem;
            margin-bottom: 16px;
          }

          .card-metrics {
            gap: 20px;
            margin-bottom: 16px;
          }

          .metric-value {
            font-size: 1.2rem;
          }

          .card-image-container {
            max-width: 100%;
          }

          .play-overlay {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>

      <section id="work" className="work-section" ref={sectionRef}>
        <div className="work-container">
          <div className="work-header">
            <h1>Work</h1>
            <p>Portfolio examples across social, web, and design</p>
          </div>

          <div className="work-layout">
            {/* Sticky Title Tabs */}
            <div className="work-tabs">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`work-tab ${activeCard === index ? 'active' : ''}`}
                  style={{ color: project.color }}
                  onClick={() => {
                    const card = cardsRef.current[index]
                    if (card) {
                      card.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  }}
                >
                  {project.title}
                </div>
              ))}
            </div>

            {/* Cards Stack */}
            <div className="work-stack">
              {projects.map((project, index) => {
                const colorName = project.color === '#FFB84D' ? 'orange' : project.color === '#4ECDC4' ? 'teal' : 'green'
                
                return (
                  <div
                    key={project.id}
                    ref={(el) => { cardsRef.current[index] = el }}
                    className="work-card"
                    data-color={colorName}
                  >
                    <div className="work-card-content">
                      {/* Text Section */}
                      <div className="card-text-section">
                        <div className="card-category" style={{ color: project.color }}>
                          {project.category}
                        </div>
                        <h3 className="card-title-main">{project.title}</h3>
                        <p className="card-description">{project.description}</p>
                        
                        <div className="card-metrics">
                          <div className="metric-item">
                            <span className="metric-label">Project Type</span>
                            <span className="metric-value">{project.category}</span>
                          </div>
                          <div className="metric-item">
                            <span className="metric-label">Status</span>
                            <span className="metric-value">Complete</span>
                          </div>
                        </div>

                        <div className="card-client">
                          <div className="client-avatar" style={{ background: project.color }} />
                          <div className="client-info">
                            <div className="client-name">Client Name</div>
                            <div className="client-role">{project.category} Project</div>
                          </div>
                          <ExternalLink size={18} style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                        </div>
                      </div>

                      {/* Image Section */}
                      <div className="card-image-section">
                        <div className="card-image-container">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="card-image"
                          />
                          {project.hasVideo && (
                            <div className="play-overlay" data-color={colorName}>
                              <Play size={32} fill="currentColor" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
