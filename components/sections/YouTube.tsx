'use client'

import { motion } from 'framer-motion'

export default function YouTube() {
  return (
    <section id="youtube" className="py-24 md:py-32 px-6 bg-dark">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-xs mb-8"
        >
          WATCH BEAR MEDIA
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl leading-tight mb-10 font-black text-white italic"
        >
          See the <span className="text-brand-yellow">work</span><br />
          No <span className="text-brand-yellow">polish</span><br />
          No <span className="text-brand-yellow">pretending</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-16 italic font-medium"
        >
          Real projects, real clients, real Scotland —<br />
          follow the Bear Media YouTube channel.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-32"
        >
          <a 
            href="https://www.youtube.com/@bearmedia70" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-dark text-lg font-bold py-6 px-12 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-[float_5s_ease-in-out_infinite] uppercase italic tracking-[0.2em]"
          >
            Browse the Channel
          </a>
        </motion.div>

      </div>
    </section>
  )
}
