'use client'

import React from 'react'

export const TrustedBySection = () => {
  return (
    <section className="border-y border-white/5 bg-neutral-900/30">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
          {['Local Trades', 'Property Firms', 'Scottish SMEs', 'Growing Brands'].map((text) => (
            <div key={text} className="text-center">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white group-hover:text-brand-yellow transition-colors whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
