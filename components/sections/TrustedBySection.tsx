'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const TrustedBySection = () => {
  const industries = [
    'Local Trades', 'Property', 'Construction', 'Small Businesses', 'Scottish SMEs',
    'Local Trades', 'Property', 'Construction', 'Small Businesses', 'Scottish SMEs'
  ]

  return (
    <section className="py-12 bg-neutral-950 border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{
            x: [0, -1035],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 items-center pr-16"
        >
          {industries.map((text, index) => (
            <span 
              key={index} 
              className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/30 whitespace-nowrap italic"
            >
              {text} •
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
