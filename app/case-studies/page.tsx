'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const cinematicEase = [0.16, 1, 0.3, 1]

const caseStudies = [
  {
    name: "C&G Developments",
    category: "Construction & Engineering",
    image: "/BEST FINAL CLIENT WORK/C&G Work In Progress-Cover.jpg",
    slug: "/case-studies/cg-developments",
    services: ["Cinematic Drone", "Reels Strategy", "High-Converting Page"]
  },
  {
    name: "Seamus Corry",
    category: "Coaching & Personal Brand",
    image: "/BEST FINAL CLIENT WORK/seamus rebrand.jpg",
    slug: "/case-studies/seamus-corry",
    services: ["Premium Website Redesign", "Brand System", "Hook Pacing"]
  },
  {
    name: "Simply Sheds",
    category: "Retail / Joinery",
    image: "/BEST FINAL CLIENT WORK/SIMPLY SHEDS.open sat & sun-Cover.jpg",
    slug: "/case-studies/simply-sheds",
    services: ["Short-Form Video Campaigns", "Operational Shoots"]
  },
  {
    name: "Almond Vet Care",
    category: "Veterinary Medicine",
    image: "/BEST FINAL CLIENT WORK/website-4-almond-vet-v2.jpg",
    slug: "/case-studies/almond-vet-care",
    services: ["Custom React Website", "Local SEO Hub", "Frictionless Booking"]
  },
  {
    name: "Robertsons Transport",
    category: "Heavy Logistics",
    image: "/BEST FINAL CLIENT WORK/rt-ltd.uk-v2.jpg",
    slug: "/portfolio/robertsons-transport",
    services: ["Corporate Redesign", "Authority Positioning"]
  },
  {
    name: "K Lewis Joinery",
    category: "Luxury Woodwork",
    image: "/BEST FINAL CLIENT WORK/website-5-lewis-joinery-v2.jpg",
    slug: "/portfolio/k-lewis-joinery",
    services: ["High-Resolution Showroom", "Inbound Call Capture"]
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0e0c] text-[#E8E0D5] font-inter-tight selection:bg-[#D2A214] selection:text-[#0f0e0c] overflow-hidden">
        
        {/* 1. HERO SECTION (DARK CINEMATIC) */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden py-32 border-b border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#D2A214]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
              className="text-[#D2A214] font-bold uppercase tracking-[0.4em] text-[9px] mb-8"
            >
              Measurable Local Outcomes
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
              className="text-6xl md:text-8xl lg:text-[7.5rem] font-bebas text-white tracking-wide mb-12 leading-[0.95] uppercase"
            >
              PROOF OVER PROMISES.<br/>
              <span className="text-white/20">NO AGENCY FLUFF.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="max-w-2xl mx-auto text-[#E8E0D5]/60 font-light text-lg md:text-xl leading-relaxed tracking-wide"
            >
              We measure performance in phone calls, signed contracts, and local visibility. Explore case studies of Scottish SMEs who transformed their digital positioning.
            </motion.p>
          </div>
        </section>

        {styleBlock}

        {/* LOGO MARQUEE */}
        <div className="py-12 border-b border-white/5 bg-[#171513]/20 overflow-hidden relative flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f0e0c] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f0e0c] to-transparent z-10" />
          <div className="flex whitespace-nowrap animate-marquee items-center gap-20 text-white/10 font-bebas tracking-[0.15em] text-xl md:text-2xl w-[200%] uppercase">
             <span>C&G Developments</span><span className="text-[#D2A214]/30">•</span>
             <span>Simply Sheds</span><span className="text-[#D2A214]/30">•</span>
             <span>Seamus Corry</span><span className="text-[#D2A214]/30">•</span>
             <span>Almond Vet Care</span><span className="text-[#D2A214]/30">•</span>
             <span>K Lewis Joinery</span><span className="text-[#D2A214]/30">•</span>
             <span>Robertsons Transport</span><span className="text-[#D2A214]/30">•</span>
             
             <span>C&G Developments</span><span className="text-[#D2A214]/30">•</span>
             <span>Simply Sheds</span><span className="text-[#D2A214]/30">•</span>
             <span>Seamus Corry</span><span className="text-[#D2A214]/30">•</span>
             <span>Almond Vet Care</span><span className="text-[#D2A214]/30">•</span>
             <span>K Lewis Joinery</span><span className="text-[#D2A214]/30">•</span>
             <span>Robertsons Transport</span><span className="text-[#D2A214]/30">•</span>
          </div>
        </div>

        {/* MAIN PORTFOLIO GRID (BRIGHT EDITORIAL - OFF-WHITE) */}
        <section className="py-40 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-b border-[#1A1917]/10">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24 max-w-xl mx-auto">
               <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4 font-inter-tight">The Showcase</p>
               <h2 className="text-5xl md:text-7xl font-bebas text-[#1A1917] tracking-wide mb-6 uppercase">REAL CASE STUDIES</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: idx * 0.1, ease: cinematicEase }}
                  className="bg-white border border-[#1A1917]/5 shadow-sm rounded-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all"
                >
                  <Link href={item.slug} className="block relative aspect-[4/3] overflow-hidden bg-[#EFECE8]">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover filter contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-[2.5s] ease-out"
                    />
                    <div className="absolute inset-0 bg-[#0f0e0c]/10 group-hover:bg-transparent transition-colors duration-500" />
                  </Link>

                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[#D2A214] font-bold uppercase tracking-[0.2em] text-[8px] mb-3 block">
                        {item.category}
                      </span>
                      <h3 className="text-3xl font-bebas text-[#1A1917] mb-4 tracking-wider uppercase leading-none">
                        {item.name}
                      </h3>
                      
                      <div className="space-y-2 mb-8">
                        {item.services.map((service, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 size={12} className="text-[#D2A214] flex-shrink-0" />
                            <span className="text-[#1A1917]/60 text-xs font-light">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#1A1917]/5">
                      <Link 
                        href={item.slug} 
                        className="inline-flex items-center justify-between w-full text-[9px] font-bold uppercase tracking-[0.25em] text-[#1A1917] hover:text-[#D2A214] transition-colors"
                      >
                        Explore Case Study <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CALL TO ACTION (BRIGHT EDITORIAL) */}
        <section className="py-48 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-t border-[#1A1917]/10 text-center flex items-center justify-center overflow-hidden">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <p className="text-[#D2A214] font-bold uppercase tracking-[0.4em] text-[9px] mb-8 font-inter-tight">Scale Your Inbound Leads</p>
            <h2 className="text-6xl md:text-8xl font-bebas text-[#1A1917] leading-none mb-12">
              READY TO BUILD <br/><span className="text-[#1A1917]/25">YOUR OWN RESULTS HUB?</span>
            </h2>
            <Link
              href="/contact"
              className="relative px-12 py-6 bg-transparent border border-[#1A1917]/20 text-[#1A1917] font-bold uppercase tracking-[0.25em] text-[9px] rounded-sm overflow-hidden group/btn hover:border-[#D2A214] transition-colors duration-500 inline-block font-inter-tight"
            >
              <div className="absolute inset-0 bg-[#D2A214] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover/btn:text-[#0f0e0c] transition-colors duration-500">Book Your Discovery Call</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

const styleBlock = (
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
  `}} />
)
