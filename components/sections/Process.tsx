'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    id: '01',
    title: 'Strategy & Audit',
    frontText: 'A free 15-minute call to find the gaps in your online presence and lead flow.',
    backText: 'We map out the exact content and systems you need to turn attention into enquiries.'
  },
  {
    id: '02',
    title: 'The Build Phase',
    frontText: 'We visit your business to capture high-end content and build your lead systems.',
    backText: 'We handle everything: cinematography, drone tours, and high-converting web design.'
  },
  {
    id: '03',
    title: 'Live Growth',
    frontText: 'Your system goes live. You stop chasing work and start choosing it.',
    backText: 'Continuous optimisation to ensure you remain the #1 choice in your local area.'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-8 italic"
        >
          THE PROCESS
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl text-center mb-24 leading-tight font-black text-white uppercase font-bebas italic tracking-tight"
        >
          From first call to live results
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {steps.map((step, index) => (
            <ProcessFlipCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessFlipCard({ step, index }: { step: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group h-[350px] [perspective:1000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div 
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
        className="relative w-full h-full text-center transition-all duration-500 [transform-style:preserve-3d]"
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-gold text-dark flex items-center justify-center text-2xl font-black mb-8 shadow-xl shadow-brand-gold/20">
            {step.id}
          </div>
          <h3 className="text-2xl font-black text-white mb-4 uppercase font-bebas italic tracking-wide">{step.title}</h3>
          <p className="text-white text-base leading-relaxed italic">{step.frontText}</p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/10 glass-card flex flex-col items-center justify-center p-10 border-gold/30 shadow-2xl backdrop-blur-xl">
          <h3 className="text-2xl font-black text-gold uppercase font-bebas italic mb-6">Deep Dive</h3>
          <p className="text-white font-bold text-lg leading-relaxed italic">{step.backText}</p>
          
          <div className="mt-8 text-white text-[13px] md:text-sm font-black uppercase tracking-[0.2em]">
            Tap to flip back.
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
