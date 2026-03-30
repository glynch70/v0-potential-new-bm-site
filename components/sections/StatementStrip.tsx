'use client'

import { motion } from 'framer-motion'

export default function StatementStrip() {
  const text = "NO ACCOUNT MANAGERS JUST RESULTS • NO OFFICE NONSENSE • "
  
  return (
    <section className="bg-brand-yellow py-8 md:py-10 overflow-hidden my-12 relative shadow-2xl">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex"
        >
          {Array(10).fill(text).map((t, i) => (
            <span 
              key={i} 
              className="text-3xl md:text-5xl md:text-6xl text-dark uppercase font-black px-6 tracking-tighter"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
