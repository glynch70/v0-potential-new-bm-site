'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, Camera, Share2, BrainCircuit, GraduationCap, Video } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Web Design',
    icon: Monitor,
    frontText: 'Websites that actually turn people into customers.',
    backTitle: 'Web Design',
    color: '#FFD700', // Yellow
    href: '/web-design'
  },
  {
    title: 'Social Media',
    icon: Share2,
    frontText: 'Content that stops the scroll and gets you noticed. Master the algorithm with high-impact vertical video.',
    backTitle: 'Social Media',
    color: '#FF6B35', // Orange
    href: '/social-media'
  },
  {
    title: 'Video Production',
    icon: Camera,
    frontText: 'Cinematic drone footage and professional video that tells your story and sells your services.',
    backTitle: 'Video Production',
    color: '#FFFFFF', // White
    href: '/video-production'
  },
  {
    title: 'Digital Training',
    icon: GraduationCap,
    frontText: 'Learn Canva, CapCut, AI tools. Stuff that really gets results.',
    backTitle: 'Digital Training',
    color: '#C9A227', // Dark Gold
    href: '/training'
  }
]

export default function ServicesGrid() {
  return (
    <section id="services" className="relative px-6 py-32 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            service.title === 'Digital Training' ? (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link 
                  href={service.href}
                  className="group h-[350px] md:h-[400px] glass-card flex flex-col items-center justify-center p-8 md:p-12 border-white/10 hover:border-brand-yellow/30 transition-all text-center w-full"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-6 transition-transform shadow-lg"
                    style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}40` }}
                  >
                    <service.icon size={32} style={{ color: service.color }} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic mb-4 tracking-tighter">{service.title}</h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed font-bold italic">
                    "{service.frontText}"
                  </p>
                  <div className="mt-8 bg-brand-yellow text-dark px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest group-hover:scale-105 transition-transform shadow-xl">
                    View Training Page →
                  </div>
                </Link>
              </motion.div>
            ) : (
              <FlipCard key={service.title} service={service} index={index} />
            )
          ))}
        </div>
      </div>
    </section>
  )
}

function FlipCard({ service, index }: { service: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group h-[350px] md:h-[400px] [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div 
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
        className="relative w-full h-full text-center transition-all duration-500 [transform-style:preserve-3d]"
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] glass-card flex flex-col items-center justify-center p-8 md:p-12 border-white/10 group-hover:border-brand-yellow/30 transition-colors shadow-2xl">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-6 transition-transform shadow-lg"
            style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}40` }}
          >
            <service.icon size={32} style={{ color: service.color }} />
          </div>
          <p className="text-white text-lg md:text-xl leading-relaxed font-bold italic">
            "{service.frontText}"
          </p>
          <div className="mt-8 text-white/20 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-brand-yellow transition-colors">
            Tap to flip.
          </div>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl flex flex-col items-center justify-center p-8 md:p-12 border-none shadow-2xl overflow-hidden"
          style={{ backgroundColor: service.color === '#000000' ? '#111' : service.color }}
        >
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
          
          <h3 className={`text-2xl md:text-4xl font-black uppercase italic mb-8 tracking-tighter ${service.color === '#000000' ? 'text-brand-yellow' : 'text-dark'}`}>
            {service.backTitle}
          </h3>
          
          <Link 
            href={service.href} 
            className={`px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-transform hover:scale-105 active:scale-95 shadow-xl ${service.color === '#000000' ? 'bg-brand-yellow text-dark' : 'bg-dark text-white'}`}
            onClick={(e) => e.stopPropagation()}
          >
            Explore service
          </Link>
          
          <div className={`mt-8 text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ${service.color === '#000000' ? 'text-white' : 'text-dark'}`}>
            Tap to flip back.
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
