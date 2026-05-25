'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const TrustedBySection = () => {
  const industries = [
    'Trusted by firms across the Central Belt', 'Edinburgh Property Specialists', 'West Lothian Trades', 'Fife Small Businesses', 'Scottish SMEs',
    'Trusted by firms across the Central Belt', 'Edinburgh Property Specialists', 'West Lothian Trades', 'Fife Small Businesses', 'Scottish SMEs'
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
              className="text-[13px] md:text-sm md:text-xs font-black uppercase tracking-[0.5em] text-white whitespace-nowrap italic"
            >
              {text} •
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
