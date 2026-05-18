'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Séamus Corry Rebrand",
    category: "Mental Health & Executive Coach",
    image: "/BEST FINAL CLIENT WORK/seamus rebrand.jpg",
    link: "https://seamus-corry-rebrand.vercel.app/",
    status: "LIVE SITE"
  },
  {
    title: "Almond Vet Care",
    category: "Strategic Veterinary Clinic Hub",
    image: "/BEST FINAL CLIENT WORK/Almond Vet Care Website.jpg",
    link: "/portfolio/almond-vet-care",
    status: "LIVE PORTFOLIO"
  },
  {
    title: "C&G Quality Builds",
    category: "High-End Engineering Showcase",
    image: "/BEST FINAL CLIENT WORK/C&G Quality Builds.reel.cover.png",
    link: "/portfolio",
    status: "LIVE PORTFOLIO"
  },
  {
    title: "K Lewis Joinery",
    category: "Premium Bespoke Woodwork",
    image: "/BEST FINAL CLIENT WORK/klewis.jpg",
    link: "/portfolio/k-lewis-joinery",
    status: "LIVE PORTFOLIO"
  },
  {
    title: "Robertsons Transport",
    category: "UK-Wide Heavy Logistics Hub",
    image: "/BEST FINAL CLIENT WORK/robertsons.jpg",
    link: "/portfolio/robertsons-transport",
    status: "LIVE PORTFOLIO"
  },
  {
    title: "Simply Sheds Open Saturday",
    category: "High-Conversion E-Commerce Campaign",
    image: "/BEST FINAL CLIENT WORK/SIMPLY SHEDS.open sat & sun-Cover.jpg",
    link: "/case-studies/simply-sheds",
    status: "LIVE CASE STUDY"
  }
]

export default function WebsiteShowcaseCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const offset = direction === 'left' ? -clientWidth * 0.7 : clientWidth * 0.7
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full relative z-10">
      
      {/* Scroll Controls */}
      <div className="flex justify-end gap-3 mb-6 relative z-20 pr-4">
        <button 
          onClick={() => scroll('left')}
          className="w-10 h-10 rounded-full border border-current/10 flex items-center justify-center hover:bg-[#D2A214] hover:text-[#0f0e0c] hover:border-[#D2A214] transition-colors"
          aria-label="Previous Project"
        >
          <ArrowLeft size={16} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="w-10 h-10 rounded-full border border-current/10 flex items-center justify-center hover:bg-[#D2A214] hover:text-[#0f0e0c] hover:border-[#D2A214] transition-colors"
          aria-label="Next Project"
        >
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Showcase Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scroll-smooth hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="snap-start shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/10] bg-white border border-[#1A1917]/5 shadow-sm rounded-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all"
          >
            {/* Desktop Mockup Header */}
            <div className="h-8 bg-[#EFECE8] border-b border-[#1A1917]/5 px-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              <span className="text-[9px] text-[#1A1917]/30 ml-4 font-mono select-none">bearmedia.co.uk/showroom</span>
            </div>

            {/* Visual Frame */}
            <div className="relative flex-grow overflow-hidden bg-[#EFECE8]">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover opacity-90 filter contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-[2.5s] ease-out"
                sizes="(max-width: 768px) 85vw, 45vw"
              />
              <div className="absolute inset-0 bg-[#0f0e0c]/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Content Bottom */}
            <div className="p-6 bg-white border-t border-[#1A1917]/5 flex items-center justify-between">
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-[#D2A214]/10 border border-[#D2A214]/20 text-[#D2A214] font-bold uppercase tracking-widest text-[8px] rounded-sm mb-1.5">
                  {project.status}
                </span>
                <h4 className="text-xl font-bebas text-[#1A1917] tracking-wider uppercase leading-none">
                  {project.title}
                </h4>
                <p className="text-[10px] text-[#1A1917]/45 font-light uppercase tracking-wider mt-1">
                  {project.category}
                </p>
              </div>

              <a 
                href={project.link}
                target={project.link.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#D2A214] text-[#0f0e0c] font-bold uppercase tracking-widest text-[8px] rounded-sm hover:scale-102 transition-transform shadow-sm"
              >
                View Project <ExternalLink size={10} />
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}
