'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Process from '@/components/sections/Process'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Video, Camera, LayoutGrid, Zap, Play, XCircle } from 'lucide-react'
import WebsiteShowcaseCarousel from '@/components/WebsiteShowcaseCarousel'

const cinematicEase = [0.16, 1, 0.3, 1]

export default function ServicesPage() {
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
              The Local Growth Toolkit
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
              className="text-6xl md:text-8xl lg:text-[7.5rem] font-bebas text-white tracking-wide mb-12 leading-[0.95] uppercase"
            >
              FILL YOUR CALENDAR <br/>
              <span className="text-white/20">WITH HIGH-VALUE ENQUIRIES.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="max-w-2xl mx-auto text-[#E8E0D5]/60 font-light text-lg md:text-xl leading-relaxed tracking-wide"
            >
              We don't deal in empty metrics or vanity likes. We construct high-converting web showrooms, cinematic content campaigns, and licensed aerial systems to drive paying clients.
            </motion.p>
          </div>
        </section>

        {/* 2. THE COST OF INACTION (BRIGHT EDITORIAL - OFF-WHITE) */}
        <section className="py-40 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-b border-[#1A1917]/10">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4">The Reality</p>
                <h2 className="text-5xl md:text-7xl font-bebas text-[#1A1917] tracking-wide uppercase leading-none mb-8">
                  THE COST OF <br/><span className="text-[#1A1917]/35">STAYING INVISIBLE.</span>
                </h2>
                <p className="text-[#1A1917]/70 font-light text-base md:text-lg leading-relaxed max-w-lg mb-8">
                  Failing to present your physical scale, craftsmanship, and local authority isn't just passive. It means actively losing high-value tenders and clients to competitors who show up properly.
                </p>
              </div>

              <div className="bg-white p-12 border border-[#1A1917]/5 shadow-md rounded-sm">
                <h3 className="text-xl font-bebas tracking-wide text-red-600 mb-8 uppercase">Primary Conversion Drains</h3>
                <ul className="space-y-6">
                  {[
                    "Unprofessional mobile layouts that drive prospects away",
                    "A complete lack of high-resolution visual proof of past builds",
                    "Relying on generic agency graphics rather than real footage",
                    "Invisible presence on local Scottish organic searches"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-xs text-[#1A1917]/70 leading-relaxed font-light">
                      <XCircle className="text-red-500 shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICES GRID (DARK CINEMATIC / LIGHT Rhythm) */}
        <section className="py-40 px-6 bg-[#0f0e0c] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto relative z-10 space-y-48">
            
            {/* 1. Social Media Dominance (Dark Cinematic) */}
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div>
                <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4">Command Feeds</p>
                <h3 className="text-4xl md:text-6xl font-bebas text-white uppercase tracking-wider mb-6">SOCIAL MEDIA DOMINANCE</h3>
                <p className="text-white/60 font-light text-sm md:text-base leading-relaxed mb-8">
                  We capture authentic, high-impact vertical video (Reels, TikTok, Shorts) at your location, ensuring you become the most recognized local provider in your region.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Strategic hook models designed to stop scrolling feeds",
                    "Full management: scripting, filming, and platform scheduling"
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-center text-xs text-white/80 font-light">
                      <Zap size={14} className="text-[#D2A214]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/social-media" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D2A214] hover:text-white transition-colors">
                  Explore Social System <ArrowRight size={12} />
                </Link>
              </div>

              <div className="aspect-video rounded-sm overflow-hidden border border-white/5 bg-[#171513] relative group shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/e-oJMNu7b6k"
                  title="Social Showcase"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* 2. Videography & Photography (Bright Editorial - Off-white inside) */}
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div className="md:order-2">
                <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4">Win Big Tenders</p>
                <h3 className="text-4xl md:text-6xl font-bebas text-white uppercase tracking-wider mb-6">CINEMATIC LANDSCAPE PROOF</h3>
                <p className="text-white/60 font-light text-sm md:text-base leading-relaxed mb-8">
                  Highlight precision, scale, and craftsmanship using professional ground equipment and licensed drone fleets.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "High-resolution aerial tours (Edinburgh, Fife, Central Belt)",
                    "Meticulous behind-the-scenes photography for branding"
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-center text-xs text-white/80 font-light">
                      <Zap size={14} className="text-[#D2A214]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/video-production" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D2A214] hover:text-white transition-colors">
                  Explore Video System <ArrowRight size={12} />
                </Link>
              </div>

              <div className="aspect-video rounded-sm overflow-hidden border border-white/5 bg-[#171513] relative group shadow-xl md:order-1">
                <iframe
                  src="https://www.youtube.com/embed/jC2_w7PSiGI"
                  title="Drone Showcase"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* 3. Website Design (Dark Cinematic) */}
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div>
                <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4">Capture Revenue</p>
                <h3 className="text-4xl md:text-6xl font-bebas text-white uppercase tracking-wider mb-6">CONVERTING SHOWROOMS</h3>
                <p className="text-white/60 font-light text-sm md:text-base leading-relaxed mb-8">
                  We custom code stunning digital showrooms built for speed, clean luxury typography, and friction-free lead pathways.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Custom React architecture built natively for local SEO performance",
                    "Direct booking integration and seamless contact funnels"
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-center text-xs text-white/80 font-light">
                      <Zap size={14} className="text-[#D2A214]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/web-design" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D2A214] hover:text-white transition-colors">
                  Explore Website System <ArrowRight size={12} />
                </Link>
              </div>

              <div className="text-white/50 text-xs font-light leading-relaxed max-w-sm">
                Explore our fully responsive showroom installations built natively for high loading speed, structural authority, and direct enquiry conversion.
              </div>
            </div>

            {/* Website Showcase Carousel */}
            <div className="w-full pt-12">
              <WebsiteShowcaseCarousel />
            </div>

          </div>
        </section>

        {/* 4. CALL TO ACTION (BRIGHT EDITORIAL) */}
        <section className="py-48 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-t border-[#1A1917]/10 text-center flex items-center justify-center overflow-hidden">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <p className="text-[#D2A214] font-bold uppercase tracking-[0.4em] text-[9px] mb-8">Build Your Growth Engine</p>
            <h2 className="text-6xl md:text-8xl font-bebas text-[#1A1917] leading-none mb-12">
              READY TO COMMENCE <br/><span className="text-[#1A1917]/25">YOUR SYSTEM SCALE?</span>
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
