'use client'

import React from 'react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const clients = [
  { name: 'Almond Vet Care', url: 'https://almondvetcare.co.uk/' },
  { name: 'K Lewis Joinery', url: 'https://www.klewisjoineryltd.co.uk/' },
  { name: 'Expert Equine Construction', url: 'https://www.klewisjoineryltd.co.uk/' },
  { name: 'Robertsons Transport', url: 'https://rt-ltd.uk/' },
  { name: 'Managing What Matters', url: 'https://managingwhatmatters.co.uk/' },
  { name: 'Seamus Corry', url: 'https://seamuscorry.com/' },
  { name: 'Herb & Soul', url: 'https://www.herbandsoul.uk/' },
  { name: 'Glens Pharmacy', url: 'https://www.glenspharmacy.com/' },
  { name: 'Voice2Lead', url: 'https://voice2lead.co.uk/' },
  { name: 'Muirhouse H.A', url: 'https://muirhouseha.org.uk/' },
  { name: 'Simply Sheds', url: 'https://simplyshedsscotland.com/' },
  { name: 'C&G Developments', url: 'https://candgdevelopment.co.uk/' }
]

export const TrustedBySection = () => {
  return (
    <section className="py-12 bg-dark overflow-hidden border-b border-white/5">
      <div className="max-w-[1240px] mx-auto px-6 mb-10 text-center">
        <p className="text-[#E8A820] font-black uppercase tracking-[0.4em] text-[10px] mb-4 italic">
          Real projects, Real Scottish businesses
        </p>
        <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tighter uppercase">
          Trusted by businesses across Central Scotland
        </h2>
      </div>

      <div className="relative w-full">
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {/* Duplicating the list to ensure smooth continuous scroll */}
            {[...clients, ...clients].map((client, index) => (
              <CarouselItem 
                key={`${client.name}-${index}`} 
                className="pl-4 basis-auto select-none"
              >
                <a 
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center whitespace-nowrap min-w-[200px] hover:bg-white/10 transition-all hover:border-brand-yellow/30 group"
                >
                  <span className="text-white/60 font-black text-xs uppercase tracking-widest italic group-hover:text-brand-yellow transition-colors">
                    {client.name}
                  </span>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Edge Fades for Cinematic Look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
