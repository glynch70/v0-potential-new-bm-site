'use client'

import React from 'react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

interface Logo {
  id: string
  description: string
}

// Logos from public/logos formatted as text-boxes for a cleaner look if images aren't all uniform
const logos: Logo[] = [
  { id: 'wl-chamber', description: 'West Lothian Chamber of Commerce' },
  { id: 'edinburgh-chamber', description: 'Edinburgh Chamber of Commerce' },
  { id: 'andys-mans-club', description: "Andy's Man Club" },
  { id: 'wl-chamber-2', description: 'West Lothian Chamber of Commerce' },
  { id: 'edinburgh-chamber-2', description: 'Edinburgh Chamber of Commerce' },
  { id: 'andys-mans-club-2', description: "Andy's Man Club" },
  { id: 'wl-chamber-3', description: 'West Lothian Chamber of Commerce' },
  { id: 'edinburgh-chamber-3', description: 'Edinburgh Chamber of Commerce' },
]

export const PartnerLogosSection = ({ heading = "Networks & Partners" }) => {
  return (
    <section className="py-24 md:py-32 px-6 bg-dark">
      <div className="max-w-[1240px] mx-auto text-center mb-16">
        <p className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-xs mb-8 italic">
          COMMUNITY
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-4">
          {heading}
        </h2>
      </div>

      <div className="relative mx-auto flex items-center justify-center w-full overflow-hidden">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1.5 })]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {logos.map((logo, index) => (
              <CarouselItem
                key={`${logo.id}-${index}`}
                className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="mx-4 flex shrink-0 items-center justify-center py-4">
                  <div className="flex h-24 w-64 items-center justify-center rounded-2xl glass-card border-brand-yellow/10 px-6 text-center transition-all hover:bg-brand-yellow/10 group cursor-pointer hover:border-brand-yellow/30">
                    <span className="text-sm font-black text-white group-hover:text-brand-yellow transition-colors leading-tight uppercase tracking-widest italic">
                      {logo.description}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
