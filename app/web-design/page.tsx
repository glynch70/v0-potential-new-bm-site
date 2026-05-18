'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Monitor, ArrowRight, CheckCircle2, Zap, Search, LayoutGrid } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cinematicEase = [0.16, 1, 0.3, 1]

const pillars = [
  {
    title: "High-Speed Performance",
    description: "In 2026, speed is authority. We build websites that load in milliseconds, minimizing bounce rates and keeping visitors engaged.",
    icon: Zap
  },
  {
    title: "Mobile-First Architecture",
    description: "Over 80% of local trades and service traffic is mobile. Your site will work flawlessly and look stunning on every screen size.",
    icon: Monitor
  },
  {
    title: "Search Engine Optimization",
    description: "A gorgeous website is useless if no one can find it. On-page SEO is structured natively from day one, not as an afterthought.",
    icon: Search
  }
]

const projects = [
  {
    title: "Seamus Corry Rebrand",
    category: "Branding & Web Design",
    desc: "A premium digital home for high-end mental health & workplace wellbeing coaching.",
    img: "/BEST FINAL CLIENT WORK/seamus rebrand.jpg",
    link: "/portfolio/seamus-corry"
  },
  {
    title: "Almond Vet Care",
    category: "Strategic Web Design",
    desc: "A frictionless, high-trust booking platform for Perthshire's newest independent vet clinic.",
    img: "/BEST FINAL CLIENT WORK/website-4-almond-vet-v2.jpg",
    link: "/portfolio/almond-vet-care"
  },
  {
    title: "C&G Quality Builds",
    category: "High-End Showcase",
    desc: "Capturing massive construction projects and converting them into high-value contract leads.",
    img: "/BEST FINAL CLIENT WORK/C&G Quality Builds.reel.cover.png",
    link: "/portfolio/managing-what-matters"
  },
  {
    title: "K Lewis Joinery",
    category: "Trades Showcase",
    desc: "Polished, clean showcase designed to present high-end woodwork and gather direct local leads.",
    img: "/BEST FINAL CLIENT WORK/website-5-lewis-joinery-v2.jpg",
    link: "/portfolio/k-lewis-joinery"
  },
  {
    title: "Robertsons Transport",
    category: "Industrial Branding",
    desc: "Sleek, robust platform built for heavy transport logistics across the UK.",
    img: "/BEST FINAL CLIENT WORK/rt-ltd.uk-v2.jpg",
    link: "/portfolio/robertsons-transport"
  },
  {
    title: "Simply Sheds",
    category: "Local Campaign System",
    desc: "High-conversion product showcases and weekend open-day landing campaigns.",
    img: "/BEST FINAL CLIENT WORK/SIMPLY SHEDS.open sat & sun-Cover.jpg",
    link: "/case-studies/simply-sheds"
  }
]

export default function WebDesignPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0e0c] text-[#E8E0D5] font-inter-tight selection:bg-[#D2A214] selection:text-[#0f0e0c] overflow-hidden">
        
        {/* 1. HERO SECTION (DARK CINEMATIC) */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden py-32 border-b border-white/5">
          <div className="absolute inset-0 bg-[#0a0908] z-0">
            <Image 
              src="/ATMOSPHERIC SCOTLAND IMAGES/Balmoral Hotel.jpg" 
              alt="Balmoral Hotel Edinburgh" 
              fill 
              priority
              className="object-cover opacity-[0.15] filter grayscale contrast-[1.1] pointer-events-none"
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
              High-Performance Digital Platforms
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
              className="text-6xl md:text-8xl lg:text-[7.5rem] font-bebas text-white tracking-wide mb-12 leading-[0.95] uppercase"
            >
              WEBSITE DESIGN <br/>
              <span className="text-white/20">THAT CONVERTS.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="max-w-3xl mx-auto text-[#E8E0D5]/60 font-light text-lg md:text-xl leading-relaxed tracking-wide"
            >
              We design and custom-code stunning digital galleries built for local businesses, trades, and ambitious companies across Scotland. No templates, no jargon, no monthly handcuffs.
            </motion.p>
          </div>
        </section>

        {/* 2. THE STRATEGY (BRIGHT EDITORIAL - OFF-WHITE) */}
        <section className="py-40 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-b border-[#1A1917]/10">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4">The Strategy</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-[#1A1917] leading-[0.95] tracking-tight uppercase mb-8">
                Your Digital <br/><span className="text-[#1A1917]/35">Front Door.</span>
              </h2>
              <div className="space-y-6 text-[#1A1917]/70 font-light text-base md:text-lg leading-relaxed max-w-xl">
                <p>
                  Most local business websites fail for three reasons: they use stock templates that look generic, they load incredibly slow, and they make it difficult for customers to get in touch.
                </p>
                <p>
                  We treat websites as interactive showrooms. By integrating high-end video proof, clean layouts, and friction-free inquiry triggers, we turn random visitors into loyal clients.
                </p>
              </div>
            </div>

            <div className="bg-white p-12 border border-[#1A1917]/5 shadow-md rounded-sm">
              <h3 className="text-2xl font-bebas tracking-wide text-[#1A1917] mb-8 uppercase">Key Conversion Standards</h3>
              <ul className="space-y-6">
                {[
                  "Friction-free booking & call booking flows",
                  "Native optimization for 100% mobile accessibility",
                  "High-end custom-coded visual systems (no slow drag-and-drop builders)",
                  "Fully verified Google Schema markup & organic SEO structure"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-sm text-[#1A1917]/70 leading-relaxed font-light">
                    <CheckCircle2 className="text-[#D2A214] shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. SHOWCASE GALLERY (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0f0e0c] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4">Our Work</p>
              <h2 className="text-5xl md:text-7xl font-bebas text-white tracking-wide leading-none uppercase">PORTFOLIO SHOWCASE</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: idx * 0.1, ease: cinematicEase }}
                  className="group relative flex flex-col justify-between bg-[#171513] border border-white/5 rounded-sm overflow-hidden"
                >
                  <Link href={project.link} className="block relative aspect-[4/3] overflow-hidden">
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      fill 
                      className="object-cover filter contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-[2.5s] ease-out"
                    />
                    <div className="absolute inset-0 bg-[#0f0e0c]/40 group-hover:bg-[#0f0e0c]/10 transition-colors duration-500" />
                  </Link>

                  <div className="p-8 space-y-4">
                    <p className="text-[#D2A214] font-bold uppercase tracking-[0.2em] text-[8px]">{project.category}</p>
                    <h3 className="text-2xl font-bebas text-white tracking-wider uppercase">{project.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed font-light">{project.desc}</p>
                    
                    <div className="pt-4">
                      <Link 
                        href={project.link} 
                        className="inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/80 hover:text-[#D2A214] transition-colors"
                      >
                        Explore Case Study <ArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PILLARS & FEATURES (BRIGHT EDITORIAL - OFF-WHITE) */}
        <section className="py-40 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-b border-[#1A1917]/10">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4">Technical Pillars</p>
              <h2 className="text-5xl md:text-7xl font-bebas text-[#1A1917] tracking-wide leading-none uppercase">WHAT WE ACTUALLY BUILD.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: idx * 0.15, ease: cinematicEase }}
                  className="bg-white p-12 border border-[#1A1917]/5 shadow-sm rounded-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F5F4F0] flex items-center justify-center mb-8 border border-[#1A1917]/5">
                    <pillar.icon size={20} className="text-[#D2A214]" />
                  </div>
                  <h3 className="text-xl font-bebas text-[#1A1917] tracking-wider uppercase mb-4">{pillar.title}</h3>
                  <p className="text-xs text-[#1A1917]/60 leading-relaxed font-light">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION (BRIGHT EDITORIAL) */}
        <section className="py-48 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-t border-[#1A1917]/10 text-center flex items-center justify-center overflow-hidden">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <p className="text-[#D2A214] font-bold uppercase tracking-[0.4em] text-[9px] mb-8">Launch Your Showroom</p>
            <h2 className="text-6xl md:text-8xl font-bebas text-[#1A1917] leading-none mb-12">
              READY TO BUILD <br/><span className="text-[#1A1917]/25">SOMETHING THAT WORKS?</span>
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
