'use client'

import { motion } from 'framer-motion'

export default function StatementSection() {
  return (
    <section className="relative w-full bg-dark min-h-screen flex items-center justify-center overflow-hidden border-t border-b border-brand-yellow/10">
      
      {/* 📣 Ticker Tape Background */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div className="w-full flex animate-marquee whitespace-nowrap opacity-20">
          <span className="text-6xl md:text-9xl font-black tracking-tighter text-brand-yellow mx-8 uppercase italic">
            NO ACCOUNT MANAGERS JUST RESULTS • NO OFFICE NONSENSE • 
          </span>
          <span className="text-6xl md:text-9xl font-black tracking-tighter text-brand-yellow mx-8 uppercase italic">
            NO ACCOUNT MANAGERS JUST RESULTS • NO OFFICE NONSENSE • 
          </span>
          <span className="text-6xl md:text-9xl font-black tracking-tighter text-brand-yellow mx-8 uppercase italic">
            NO ACCOUNT MANAGERS JUST RESULTS • NO OFFICE NONSENSE • 
          </span>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/20 to-dark pointer-events-none" />

      {/* ⚡ High-Impact Statement */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-sm mb-8 italic"
        >
          THE BEAR MEDIA WAY
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-white mb-10 uppercase italic tracking-tighter leading-none"
        >
          Websites and social media content
        </motion.h2>
        
        <p className="text-xl md:text-3xl text-white/60 mb-12 max-w-3xl mx-auto italic font-medium leading-relaxed">
          Helping businesses get seen, trusted, and contacted.
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap">
          <a 
            href="#contact" 
            className="px-10 py-5 bg-brand-yellow text-dark font-black rounded-full hover:scale-105 hover:shadow-2xl transition-all uppercase italic tracking-widest text-lg"
          >
            Book a call
          </a>
          <a 
            href="#work" 
            className="px-10 py-5 border-2 border-brand-yellow text-brand-yellow font-black rounded-full hover:bg-brand-yellow hover:text-dark transition-all uppercase italic tracking-widest text-lg"
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
