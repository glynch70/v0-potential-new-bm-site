'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden px-6 bg-dark">
      <div className="flex flex-col md:flex-row max-w-[1240px] mx-auto gap-20 items-center">
        {/* Left Side: Photo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full md:w-1/2 aspect-square md:aspect-[4/5] max-w-md mx-auto"
        >
          <div className="absolute inset-0 bg-brand-yellow rounded-3xl transform rotate-3 scale-105 opacity-20 animate-pulse" />
          <Image 
            src="/garry-lynch-portrait.png" 
            alt="Garry Lynch"
            fill 
            className="object-cover rounded-3xl shadow-2xl z-10 border-4 border-white/5"
          />
        </motion.div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-xs mb-8 text-center md:text-left"
          >
            ABOUT THE FOUNDER
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl text-center md:text-left mb-10 font-black text-white italic leading-tight"
          >
            Hi. I'm <span className="text-brand-yellow">Garry.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl space-y-6 leading-[1.7] italic"
          >
            <p>
              I started Bear Media because good businesses deserve to be found online.
            </p>
            <p>
              I go directly to my clients. To their building sites, restaurants, and shops. I film them, photograph them, build their websites, and manage their social media.
            </p>
            <p className="font-bold text-brand-yellow uppercase tracking-widest text-xs pt-4 font-black not-italic">
              That's it. That's the job.
            </p>
            <p className="text-xs pt-2 opacity-50 not-italic uppercase tracking-widest font-black">
              15 years in communications. Zero waffle.<br />
              Based in Broxburn — serving Scotland.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
            {[
              { val: "15+", label: "Years experience" },
              { val: "30+", label: "Happy clients" },
              { val: "5★", label: "Google rating" }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                className="flex flex-col gap-1 items-center md:items-start text-center md:text-left"
              >
                <span className="text-4xl md:text-5xl font-black text-brand-yellow font-display uppercase tracking-widest">{stat.val}</span>
                <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-black leading-tight">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex justify-center md:justify-start"
          >
            <a 
              href="https://calendly.com/bearmedia/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow text-dark px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-2xl italic"
            >
              Book a discovery call with Garry →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
