'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Eye, ShieldCheck, Zap, Compass, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const cinematicEase = [0.16, 1, 0.3, 1]

const droneProjects = [
  {
    title: "Balmoral Hotel",
    desc: "A stunning aerial profile of Edinburgh's iconic landmark clocktower, capturing the majestic skyline in golden hour atmospheric mist.",
    img: "/ATMOSPHERIC SCOTLAND IMAGES/Balmoral Hotel.jpg",
    aspect: "aspect-[16/9]"
  },
  {
    title: "Howies Edinburgh",
    desc: "Bespoke interior and exterior transitions blending aerial entry pacing with editorial restaurant ambiance.",
    img: "/ATMOSPHERIC SCOTLAND IMAGES/Howies Edinburgh.jpg",
    aspect: "aspect-[16/9]"
  },
  {
    title: "Saughton Park",
    desc: "Panoramic botanical survey and sweeping garden landscaping cinematic documentaries captured with licensed Central Belt flight permissions.",
    img: "/ATMOSPHERIC SCOTLAND IMAGES/saughton park.jpeg",
    aspect: "aspect-[16/9]"
  }
]

export default function DronePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0e0c] text-[#E8E0D5] font-inter-tight selection:bg-[#D2A214] selection:text-[#0f0e0c] overflow-hidden">
        
        {/* 1. HERO SECTION (DARK CINEMATIC) */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden py-32 border-b border-white/5">
          <div className="absolute inset-0 bg-[#0a0908] z-0">
            <Image 
              src="/ATMOSPHERIC SCOTLAND IMAGES/Balmoral Hotel.jpg" 
              alt="Balmoral Drone" 
              fill 
              priority
              className="object-cover opacity-[0.25] filter grayscale contrast-[1.1] scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/40 to-[#0f0e0c]" />
          </div>

          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
              className="text-[#D2A214] font-bold uppercase tracking-[0.4em] text-[9px] mb-8"
            >
              CAA Licensed Aerial Filmmaking
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
              className="text-6xl md:text-8xl lg:text-[7.5rem] font-bebas text-white tracking-wide mb-12 leading-[0.95] uppercase"
            >
              EXPANSIVE SCOTLAND <br/>
              <span className="text-white/20">FROM ABOVE.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="max-w-3xl mx-auto text-[#E8E0D5]/60 font-light text-lg md:text-xl leading-relaxed tracking-wide animate-pulse"
            >
              Operating safe, fully insured commercial UAS/drone operations to give your business high-end scale, visual authority, and breathtaking Central Belt vistas.
            </motion.p>
          </div>
        </section>

        {/* 2. THE PROJECTS (BRIGHT EDITORIAL - OFF-WHITE) */}
        <section className="py-40 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-b border-[#1A1917]/10">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-5xl mx-auto relative z-10 space-y-32">
            
            <div className="text-center max-w-xl mx-auto mb-20">
              <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4">Atmospheric Stories</p>
              <h2 className="text-5xl md:text-7xl font-bebas text-[#1A1917] tracking-wide mb-6 uppercase">AERIAL CAPTURE DIRECTORY</h2>
            </div>

            {droneProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: idx * 0.1, ease: cinematicEase }}
                className="group flex flex-col gap-12"
              >
                {/* Image Container with precise cinematic ratio */}
                <div className={`relative ${project.aspect} w-full bg-[#EFECE8] border border-[#1A1917]/5 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-500`}>
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-95 filter contrast-[1.05] group-hover:scale-[1.01] transition-transform duration-[2.5s] ease-out"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-[#0f0e0c]/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-1">
                    <span className="inline-block px-2.5 py-0.5 bg-[#D2A214]/10 border border-[#D2A214]/20 text-[#D2A214] font-bold uppercase tracking-widest text-[8px] rounded-sm mb-3">
                      Lothians & Edinburgh
                    </span>
                    <h3 className="text-4xl font-bebas text-[#1A1917] tracking-wider uppercase leading-none">{project.title}</h3>
                  </div>
                  <div className="md:col-span-2 text-[#1A1917]/70 font-light text-sm md:text-base leading-relaxed">
                    {project.desc}
                  </div>
                </div>

                <div className="h-[1px] bg-[#1A1917]/10 w-full pt-4" />
              </motion.div>
            ))}

          </div>
        </section>

        {/* 3. FLIGHT PROTOCOL & TRUST (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0f0e0c] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4">Central Belt Operations</p>
                <h2 className="text-5xl md:text-7xl font-bebas text-white tracking-wide uppercase leading-none mb-8">
                  FLIGHT STANDARDS & <br/><span className="text-white/20">SAFETY GUARANTEE.</span>
                </h2>
                <p className="text-white/60 font-light text-base md:text-lg leading-relaxed max-w-lg mb-8">
                  Commercial drone operations in Scotland require strict adherence to aviation protocols. We handle all airspace clearances, notifications, and hazard surveys natively.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-[#171513]/40 border border-white/5 rounded-sm">
                    <ShieldCheck className="text-[#D2A214] mb-4" size={20} />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">CAA Certified</h4>
                    <p className="text-[10px] text-white/50 leading-relaxed font-light">Full commercial permissions and CAA operating parameters across UK airspace.</p>
                  </div>
                  <div className="p-8 bg-[#171513]/40 border border-white/5 rounded-sm">
                    <Compass className="text-[#D2A214] mb-4" size={20} />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Central Cleared</h4>
                    <p className="text-[10px] text-white/50 leading-relaxed font-light">Direct pre-coordinated flights inside restricted zones around major landmarks.</p>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-[#171513]/60 border border-white/5 rounded-sm text-left">
                <h3 className="text-3xl font-bebas tracking-wide text-white mb-6 uppercase">Safety Protocols</h3>
                <div className="space-y-6">
                  {[
                    { label: "Central Belt Coverage", val: "Lothians, Fife & Edinburgh" },
                    { label: "UAS Weight Classifications", val: "Sub-250g & Heavy Cinematic Platforms" },
                    { label: "Insured Liability Coverage", val: "£5M Commercial Flight Indemnity" }
                  ].map((proto, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                      <span className="text-xs text-white/60 font-light">{proto.label}</span>
                      <span className="text-[10px] font-bold text-[#D2A214] uppercase tracking-wider">{proto.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CALL TO ACTION (BRIGHT EDITORIAL - OFF-WHITE) */}
        <section className="py-48 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-t border-[#1A1917]/10 text-center flex items-center justify-center overflow-hidden">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <p className="text-[#D2A214] font-bold uppercase tracking-[0.4em] text-[9px] mb-8 font-inter-tight">Schedule Flight Survey</p>
            <h2 className="text-6xl md:text-8xl font-bebas text-[#1A1917] leading-none mb-12">
              READY TO ELEVATE <br/><span className="text-[#1A1917]/25">YOUR BUSINESS VISUALS?</span>
            </h2>
            <Link
              href="/contact"
              className="relative px-12 py-6 bg-transparent border border-[#1A1917]/20 text-[#1A1917] font-bold uppercase tracking-[0.25em] text-[9px] rounded-sm overflow-hidden group/btn hover:border-[#D2A214] transition-colors duration-500 inline-block font-inter-tight"
            >
              <div className="absolute inset-0 bg-[#D2A214] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover/btn:text-[#0f0e0c] transition-colors duration-500">Book A Flight Run</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
