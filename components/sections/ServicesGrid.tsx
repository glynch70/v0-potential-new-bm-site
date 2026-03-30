'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, Camera, Share2, BrainCircuit, GraduationCap } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    title: 'Web Design',
    icon: Monitor,
    frontText: 'Websites that work. Clean code, fast loading, built to convert visitors into customers. Own it outright – no ongoing fees.',
    backTitle: 'Web Design',
    backText: 'Websites that work. Clean code, fast loading, built to convert visitors into customers. Own it outright – no ongoing fees.',
    url: 'https://calendly.com/bearmedia/discovery-call'
  },
  {
    title: 'Social Media Content',
    icon: Camera,
    frontText: 'Reels, shorts, and TikToks that stop the scroll. Master the algorithm with high-impact vertical video content.',
    backTitle: 'Reels & Shorts',
    backText: 'High-energy editing, trending hooks, and clear calls to action. We handle the filming and the edit.',
    url: 'https://www.youtube.com/@bearmediacontent'
  },
  {
    title: 'Training',
    icon: GraduationCap,
    frontText: 'Create your own content. Training in Canva, CapCut, and AI – the tools that actually work.',
    backTitle: 'Training',
    backText: 'Create your own content. Training in Canva, CapCut, and AI – the tools that actually work.',
    url: '/training'
  },
  {
    title: 'AI Solutions',
    icon: BrainCircuit,
    frontText: 'Use AI to do more with less. Automate workflows, boost efficiency, grow faster.',
    backTitle: 'AI Solutions',
    backText: 'Use AI to do more with less. Automate workflows, boost efficiency, grow faster.',
    url: 'https://calendly.com/bearmedia/discovery-call'
  }
]

export default function ServicesGrid() {
  return (
    <section id="services" className="relative px-6 py-32 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <FlipCard key={service.title} service={service} index={index} />
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
      whileHover={{ y: -5 }}
      className="group h-[400px] [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div 
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
        className="relative w-full h-full text-center transition-all duration-500 [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] glass-card flex flex-col items-center justify-center p-10 border-brand-yellow/20 hover:border-brand-yellow/50 transition-colors overflow-hidden">
          {service.frontImage && (
            <div className="absolute inset-0 z-0">
              <Image 
                src={service.frontImage} 
                alt={service.title}
                fill 
                className="object-cover opacity-20 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 bg-dark/60 group-hover:bg-dark/40 transition-colors" />
            </div>
          )}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-brand-yellow/10 flex items-center justify-center mb-8 border border-brand-yellow/20 group-hover:bg-brand-yellow/20 transition-colors">
              <service.icon size={40} className="text-brand-yellow" />
            </div>
            <h3 className="text-2xl font-black text-brand-yellow uppercase italic mb-4">{service.title}</h3>
            <p className="text-white/70 text-base leading-relaxed font-medium italic">{service.frontText}</p>
            
            <div className="mt-8 text-white/30 text-xs font-black uppercase tracking-widest group-hover:text-brand-yellow transition-colors">
              Tap to flip.
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/10 glass-card flex flex-col items-center justify-center p-10 border-brand-yellow/30 shadow-2xl backdrop-blur-xl">
          <h3 className="text-2xl font-black text-brand-yellow uppercase italic mb-6">
            {service.backTitle || 'What we do'}
          </h3>
          <p className="text-white font-bold text-lg leading-relaxed italic">{service.backText}</p>
          
          {service.url && (
            <a 
              href={service.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 bg-brand-yellow text-dark font-black rounded-full hover:scale-105 transition-all uppercase italic tracking-widest text-[10px]"
              onClick={(e) => e.stopPropagation()}
            >
              Learn more
            </a>
          )}
          
          <div className="mt-8 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
            Tap to flip back.
          </div>
          
          {service.title === 'Training' && (
            <a 
              href="/training" 
              className="mt-6 text-brand-yellow font-black text-[10px] uppercase tracking-widest hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              More Info →
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
