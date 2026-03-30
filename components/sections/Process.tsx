'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    id: '01',
    title: 'Discovery',
    frontText: 'Quick call to understand your business, goals, and audience',
    backText: 'We dig deep into what makes your business unique and who your customers really are'
  },
  {
    id: '02',
    title: 'Strategy',
    frontText: 'A clear plan for your project, content, or both',
    backText: 'No filler, just a prioritised roadmap of what will actually move the needle for you'
  },
  {
    id: '03',
    title: 'Creation',
    frontText: 'We build it and you see everything before it goes live',
    backText: 'Transparent development and content creation with constant feedback loops'
  },
  {
    id: '04',
    title: 'Results',
    frontText: 'Your site is live or your content is rolling',
    backText: 'We monitor the performance and stay in touch to ensure long-term growth and success'
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
          className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-xs mb-8 italic"
        >
          THE PROCESS
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl text-center mb-24 leading-tight font-extrabold text-white uppercase italic tracking-tighter"
        >
          From first call to live results
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
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
          <div className="w-16 h-16 rounded-full bg-brand-yellow text-dark flex items-center justify-center text-2xl font-black mb-8 shadow-xl shadow-brand-yellow/20">
            {step.id}
          </div>
          <h3 className="text-xl font-bold text-white mb-4 uppercase italic">{step.title}</h3>
          <p className="text-white/60 text-base leading-relaxed italic">{step.frontText}</p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/10 glass-card flex flex-col items-center justify-center p-10 border-brand-yellow/30 shadow-2xl backdrop-blur-xl">
          <h3 className="text-2xl font-black text-brand-yellow uppercase italic mb-6">Deep Dive</h3>
          <p className="text-white font-bold text-lg leading-relaxed italic">{step.backText}</p>
          
          <div className="mt-8 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
            Tap to flip back.
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
