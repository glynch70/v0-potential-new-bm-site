'use client'

import { motion } from 'framer-motion'

export default function YouTube() {
  return (
    <section id="youtube" className="py-24 md:py-48 px-6 bg-[#000]">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-xs mb-8 italic"
        >
          DOCUMENTED RESULTS
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl leading-[0.9] mb-12 font-black text-white uppercase italic tracking-tighter"
        >
          Real growth.<br />
          <span className="text-[#D4AF37]">Caught on camera.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-xl md:text-2xl max-w-3xl leading-relaxed mb-20 italic font-medium"
        >
          We don&apos;t just tell you we get results — we show you the hard work, the strategy, and the wins. Follow the journey of Scottish businesses leveling up.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="https://www.youtube.com/@bearmedia70" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] text-black text-xs font-black py-6 px-14 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] uppercase italic tracking-[0.2em]"
          >
            See the Results
          </a>
        </motion.div>

      </div>
    </section>
  )
}

