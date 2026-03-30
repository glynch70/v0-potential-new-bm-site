'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const clients = [
  {
    id: 1,
    name: 'Almond Vet Care',
    category: 'Veterinary Practice',
    image: '/work/almond_vet_care.jpg',
    headline: "Perthshire's Newest Independent Vet Practice",
    description: 'Professional veterinary practice serving the local community with expert care',
    link: 'https://almondvetcare.co.uk/'
  },
  {
    id: 2,
    name: 'K Lewis Joinery',
    category: 'Bespoke Joinery',
    image: '/work/klewis.jpg',
    headline: 'Bespoke Joinery Specialists',
    description: 'High-quality bespoke joinery services for homes and businesses across Scotland.',
    link: 'https://www.klewisjoineryltd.co.uk/'
  },
  {
    id: 3,
    name: 'Expert Equine Construction',
    category: 'Equestrian Construction',
    image: '/work/website-5-lewis-joinery-v2.jpg',
    headline: 'Expert Equestrian Construction',
    description: 'Specialist equestrian builds, arenas, and stable blocks built to last.',
    link: 'https://www.klewisjoineryltd.co.uk/'
  },
  {
    id: 4,
    name: 'Robertsons Transport',
    category: 'Transport & Logistics',
    image: '/work/robertsons.jpg',
    headline: 'Transport Solutions You Can Trust',
    description: 'Professional logistics and delivery across the UK from a trusted family business.',
    link: 'https://rt-ltd.uk/'
  },
  {
    id: 5,
    name: 'Managing What Matters',
    category: 'Leadership Training',
    image: '/work/mwm.jpg',
    headline: 'Lead people, not just tasks',
    description: 'Six practical modules to transform how you manage, inspire teams, and deliver results.',
    link: 'https://managingwhatmatters.co.uk'
  },
  {
    id: 6,
    name: 'Seamus Corry',
    category: 'Mental Health Training',
    image: '/work/seamus_v5_final.jpg',
    headline: 'Empowering Teams Through Wellbeing',
    description: 'Mental health first aid and wellbeing training for teams across all sectors.',
    link: 'https://seamuscorry.com/'
  },
  {
    id: 7,
    name: 'Herons\' Pole',
    category: 'Wellness & Nature',
    image: '/work/herb_soul.jpg',
    headline: 'Healing Through Nature Immersion',
    description: 'Transformative nature-based wellness experiences and herbalism workshops.',
    link: 'https://www.herbandsoul.uk/'
  }
]

export const WhoIWorkWithSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((currentIndex + 1) % clients.length)
  const prev = () => setCurrentIndex((currentIndex - 1 + clients.length) % clients.length)

  const client = clients[currentIndex]

  return (
    <section id="who-i-work-with" className="py-24 md:py-32 bg-dark text-white overflow-hidden border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-xs mb-8 italic">
            WHO I WORK WITH
          </p>
          <h2 className="text-4xl md:text-7xl font-black mb-4 uppercase italic tracking-tighter leading-none">
            Real Businesses
          </h2>
          <h3 className="text-4xl md:text-7xl font-black text-brand-yellow mb-8 uppercase italic tracking-tighter leading-none">
            Real Results
          </h3>
          <p className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto italic font-medium leading-relaxed">
            From pharmacies to joiners, restaurants to vets. Businesses across Scotland that trusted Bear Media to get them seen, trusted, and found.
          </p>
        </div>

        {/* Client Carousel - Side-by-Side Early Layout (Visual Style Matched to Screenshot) */}
        <div className="relative glass-card rounded-[2rem] overflow-hidden border-brand-yellow/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid md:grid-cols-2 gap-0"
            >
              <div className="relative h-[400px] md:h-[650px] bg-[#E5E5E5] overflow-hidden">
                <Image 
                  src={client.image} 
                  alt={client.name}
                  fill
                  className="object-contain p-8 md:p-12"
                  priority
                />
              </div>

              {/* Content Area - Dark Background (Matched to Screenshot) */}
              <div className="p-10 md:p-20 flex flex-col justify-center bg-[#121212]">
                <span className="text-brand-yellow text-xs font-black uppercase tracking-widest mb-6 border border-brand-yellow/20 px-4 py-2 rounded-full w-fit italic">
                  WEBSITE
                </span>
                <h4 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 italic tracking-tighter leading-[0.85] uppercase">
                  {client.headline || client.name}
                </h4>
                <p className="text-white/40 text-sm font-black uppercase tracking-widest mb-10">
                   {client.name} // {client.category}
                </p>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 italic font-medium">
                  {client.description}
                </p>
                <a 
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-brand-yellow text-dark font-black px-10 py-5 rounded-full hover:scale-105 hover:shadow-2xl transition-all w-fit uppercase tracking-widest text-sm shadow-xl"
                >
                  VISIT PROJECT
                  <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
            <button
              onClick={prev}
              className="pointer-events-auto bg-brand-yellow text-dark rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center font-black text-2xl transition-all hover:scale-110 active:scale-90 shadow-2xl"
              aria-label="Previous client"
            >
              ←
            </button>
            <button
              onClick={next}
              className="pointer-events-auto bg-brand-yellow text-dark rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center font-black text-2xl transition-all hover:scale-110 active:scale-90 shadow-2xl"
              aria-label="Next client"
            >
              →
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {clients.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-brand-yellow w-12' : 'bg-white/20 w-3 hover:bg-white/40'
                }`}
                aria-label={`Go to client ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
