'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle2, ArrowRight, Star, ExternalLink, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const cinematicEase = [0.16, 1, 0.3, 1]

const items = [
  {
    name: "Séamus Corry",
    category: "Personal Brand & Luxury Coaching",
    image: "/BEST FINAL CLIENT WORK/seamus rebrand.jpg",
    slug: "https://seamus-corry-rebrand.vercel.app/",
    services: ["Bespoke Web Design", "Personal Branding", "High-Speed React Code"],
    live: true,
    isExternal: true
  },
  {
    name: "Almond Vet Care",
    category: "Strategic Veterinary Platform",
    image: "/BEST FINAL CLIENT WORK/Almond Vet Care Website.jpg",
    slug: "/portfolio/almond-vet-care",
    services: ["Web Design & Architecture", "Local SEO Engineering", "Content Strategy"],
    live: true,
    isExternal: false
  },
  {
    name: "C&G Quality Builds",
    category: "High-End Construction Showcase",
    image: "/BEST FINAL CLIENT WORK/C&G Quality Builds.reel.cover.png",
    slug: "/portfolio",
    services: ["Drone Videography", "Social Media Content", "Showroom Strategy"],
    live: true,
    isExternal: false
  },
  {
    name: "K Lewis Joinery",
    category: "Premium Bespoke Woodwork",
    image: "/BEST FINAL CLIENT WORK/klewis.jpg",
    slug: "/portfolio/k-lewis-joinery",
    services: ["Web Design Showcase", "Lead Generation Flow", "SEO Optimization"],
    live: true,
    isExternal: false
  },
  {
    name: "Robertsons Transport",
    category: "UK-Wide Heavy Logistics Hub",
    image: "/BEST FINAL CLIENT WORK/robertsons.jpg",
    slug: "/portfolio/robertsons-transport",
    services: ["Corporate Web Platform", "Brand Guidelines", "Logistics SEO"],
    live: true,
    isExternal: false
  },
  {
    name: "Simply Sheds",
    category: "Local Campaign System",
    image: "/BEST FINAL CLIENT WORK/SIMPLY SHEDS.open sat & sun-Cover.jpg",
    slug: "/case-studies/simply-sheds",
    services: ["High-Conversion Landing System", "Paid Traffic Integration", "Copywriting"],
    live: true,
    isExternal: false
  }
]

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0e0c] text-[#E8E0D5] font-inter-tight selection:bg-[#F1B92D] selection:text-[#0f0e0c] overflow-hidden">
        
        {/* 1. HERO SECTION (DARK CINEMATIC) */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden py-32 border-b border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F1B92D]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="w-full px-6 text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
              className="text-[#F1B92D] font-bold uppercase tracking-[0.4em] text-[12px] md:text-[13px] mb-8"
            >
              Proof Beats Promises. Zero Fluff.
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
              className="font-bebas text-white tracking-wide mb-12 leading-[0.95] uppercase"
            >
              DIGITAL GALLERY & <br/>
              <span className="text-white/20">REAL CLIENT CASE STUDIES.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="max-w-3xl mx-auto text-[#E8E0D5]/60 font-light text-lg md:text-xl leading-relaxed tracking-wide"
            >
              We partner with local construction groups, trades operations, and ambitious Scottish SMEs to design fast showrooms, capture raw high-end footage, and secure high-value client bookings.
            </motion.p>
          </div>
        </section>

        {/* 2. LOGO MARQUEE */}
        <section className="py-12 border-y border-white/5 bg-[#171513]/40 overflow-hidden relative flex items-center z-10">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0f0e0c] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0f0e0c] to-transparent z-10" />
          <div className="flex whitespace-nowrap animate-marquee items-center gap-16 px-8 text-white/10 font-bold uppercase font-bebas tracking-[0.2em] text-xl md:text-2xl w-[200%] select-none">
             <span>Almond Vet Care</span><span className="text-[#F1B92D]/20">•</span>
             <span>Robertsons Transport</span><span className="text-[#F1B92D]/20">•</span>
             <span>K Lewis Joinery</span><span className="text-[#F1B92D]/20">•</span>
             <span>Managing What Matters</span><span className="text-[#F1B92D]/20">•</span>
             <span>Herb & Soul</span><span className="text-[#F1B92D]/20">•</span>
             <span>The Free Spirit</span><span className="text-[#F1B92D]/20">•</span>
             <span>Séamus Corry</span><span className="text-[#F1B92D]/20">•</span>
             <span>Simply Sheds</span><span className="text-[#F1B92D]/20">•</span>
             {/* Duplicate */}
             <span>Almond Vet Care</span><span className="text-[#F1B92D]/20">•</span>
             <span>Robertsons Transport</span><span className="text-[#F1B92D]/20">•</span>
             <span>K Lewis Joinery</span><span className="text-[#F1B92D]/20">•</span>
             <span>Managing What Matters</span><span className="text-[#F1B92D]/20">•</span>
             <span>Herb & Soul</span><span className="text-[#F1B92D]/20">•</span>
             <span>The Free Spirit</span><span className="text-[#F1B92D]/20">•</span>
             <span>Séamus Corry</span><span className="text-[#F1B92D]/20">•</span>
             <span>Simply Sheds</span><span className="text-[#F1B92D]/20">•</span>
          </div>
        </section>

        {/* 3. SHOWCASE GRID (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: idx * 0.1, ease: cinematicEase }}
                  className="bg-[#171513]/40 backdrop-blur-xl border border-white/5 p-8 rounded-sm shadow-sm flex flex-col justify-between group hover:border-[#F1B92D]/20 transition-all duration-500"
                >
                  <div>
                    {/* Visual Aspect Container */}
                    <div className="relative aspect-[16/11] bg-[#0f0e0c] border border-white/5 rounded-sm overflow-hidden mb-8">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover opacity-80 filter contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-[2.5s] ease-out"
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 28vw"
                      />
                      <div className="absolute inset-0 bg-[#0f0e0c]/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    <span className="inline-block px-2.5 py-0.5 bg-[#F1B92D]/10 border border-[#F1B92D]/20 text-[#F1B92D] font-bold uppercase tracking-widest text-[13px] md:text-sm md:text-[12px] rounded-sm mb-3">
                      {item.category}
                    </span>

                    <h3 className="text-3xl font-bebas text-[#E8E0D5] tracking-wider uppercase mb-4 leading-none">{item.name}</h3>
                    
                    <ul className="space-y-3 mb-10 border-t border-white/5 pt-6">
                      {item.services.map((srv, k) => (
                        <li key={k} className="flex gap-3 items-start">
                          <CheckCircle2 size={13} className="text-[#F1B92D] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#E8E0D5]/90 leading-relaxed font-light">{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={item.slug}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-sm bg-transparent text-[#E8E0D5] font-bold uppercase tracking-widest text-[13px] md:text-sm md:text-[12px] transition-all text-center border border-white/10 flex items-center justify-center gap-2 hover:border-[#F1B92D]"
                  >
                    Explore Case Study {item.isExternal ? <ExternalLink size={10} /> : <ArrowRight size={10} />}
                  </a>

                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. THE SCOT ADVANTAGE: VALUE PROOF (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0f0e0c] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <p className="text-[#F1B92D] font-bold uppercase tracking-[0.3em] text-[12px] md:text-[13px] mb-4">Authority & Impact</p>
                <h2 className="text-5xl md:text-7xl font-bebas text-white tracking-wide uppercase leading-none mb-8">
                  REAL OUTCOMES. <br/><span className="text-white/20">NO FLUFF.</span>
                </h2>
                <p className="text-white/90 font-light text-base md:text-lg leading-relaxed max-w-lg mb-8">
                  We don't count vanity page clicks; we track cold phone calls, quote form submissions, and direct digital trust building. If the system fails to bring back its cost in signed contracts, we consider it a failure.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-[#171513]/40 border border-white/5 rounded-sm">
                    <Star className="text-[#F1B92D] mb-4" size={20} />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">5.0★ Google Rank</h4>
                    <p className="text-[13px] md:text-sm text-white/85 leading-relaxed font-light">100% verified local Scottish business testimonials confirming raw visual results.</p>
                  </div>
                  <div className="p-8 bg-[#171513]/40 border border-white/5 rounded-sm">
                    <ShieldCheck className="text-[#F1B92D] mb-4" size={20} />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">CAA Licensed Drone</h4>
                    <p className="text-[13px] md:text-sm text-white/85 leading-relaxed font-light">Full commercial aerial permissions for safe high-end filming across the Central Belt.</p>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-[#171513]/60 border border-white/5 rounded-sm text-left">
                <h3 className="text-3xl font-bebas tracking-wide text-white mb-6 uppercase">Verified Case Results</h3>
                <div className="space-y-6">
                  {[
                    { label: "K Lewis Joinery", stat: "1st Week Bookings", desc: "Redesigned digital platform triggered booked woodwork quote requests within 5 days of launch." },
                    { label: "Almond Vet Care", stat: "Strategic Booking Setup", desc: "Designed Perthshire clinic web architecture to streamline onboarding for independent pet owners." },
                    { label: "Simply Sheds", stat: "Active Weekend Campaign", desc: "Designed product showcase landing funnels to support local weekend popups and clear retail catalog margins." }
                  ].map((res, i) => (
                    <div key={i} className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">{res.label}</h4>
                        <span className="text-[13px] md:text-sm font-bold text-[#F1B92D] uppercase tracking-wider">{res.stat}</span>
                      </div>
                      <p className="text-[13px] md:text-sm text-white/45 leading-relaxed font-light">{res.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION (DARK CINEMATIC) */}
        <section className="py-48 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-t border-white/5 text-center flex items-center justify-center overflow-hidden">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 relative z-10 flex flex-col items-center">
            <p className="text-[#F1B92D] font-bold uppercase tracking-[0.4em] text-[12px] md:text-[13px] mb-8">Begin The Road</p>
            <h2 className="font-bebas text-[#E8E0D5] leading-[0.9] mb-12">
              READY TO COMMENCE <br/><span className="text-[#E8E0D5]/25">YOUR SYSTEM SCALE?</span>
            </h2>
            <Link
              href="/contact"
              className="relative px-12 py-6 bg-transparent border border-[#E8E0D5]/15 text-[#E8E0D5] font-bold uppercase tracking-[0.25em] text-[12px] md:text-[13px] rounded-sm overflow-hidden group/btn hover:border-[#F1B92D] transition-colors duration-500 inline-block font-inter-tight"
            >
              <div className="absolute inset-0 bg-[#F1B92D] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover/btn:text-[#0f0e0c] transition-colors duration-500">Book Your Discovery Call</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
