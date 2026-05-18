'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, Clock, BookOpen, Film } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const cinematicEase = [0.16, 1, 0.3, 1]

const articles = [
  {
    title: "How Much Does Social Media Content Cost in Scotland?",
    desc: "A transparent guide to production retainers, drone licensing fees, shoot day rates, and the true commercial returns of professional storytelling for local trades and SMEs.",
    link: "/insights/social-media-content-cost-scotland",
    tag: "Finance & ROI",
    readTime: "5 min",
    image: "/BEST FINAL CLIENT WORK/Almond Vet Care Website.jpg"
  },
  {
    title: "Why Your Business Isn’t Getting Enquiries Online",
    desc: "We dissect the three critical errors trades operations make with their websites: stock photography reliance, loading speeds, and complex friction-filled contact routes.",
    link: "/insights/why-business-not-getting-enquiries",
    tag: "Conversion",
    readTime: "4 min",
    image: "/BEST FINAL CLIENT WORK/klewis.jpg"
  },
  {
    title: "Do Estate Agents Need Video Content?",
    desc: "How boutique independent agency firms across West Lothian and Edinburgh are utilizing premium walk-through narratives and twilight drone sweeps to out-compete corporate aggregators.",
    link: "/insights/do-estate-agents-need-video-content",
    tag: "Real Estate",
    readTime: "6 min",
    image: "/ATMOSPHERIC SCOTLAND IMAGES/Balmoral Hotel.jpg"
  }
]

export default function InsightsPage() {
  const featured = articles[0]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0e0c] text-[#E8E0D5] font-inter-tight selection:bg-[#D2A214] selection:text-[#0f0e0c] overflow-hidden">
        
        {/* 1. HERO SECTION (DARK CINEMATIC) */}
        <section className="relative min-h-[75vh] flex items-center justify-center px-6 overflow-hidden py-32 border-b border-white/5">
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
              The Bear Media Journal
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
              className="text-6xl md:text-8xl lg:text-[7.5rem] font-bebas text-white tracking-wide mb-12 leading-[0.95] uppercase"
            >
              EDITORIAL <br/>
              <span className="text-white/20">GROWTH JOURNAL.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="max-w-2xl mx-auto text-[#E8E0D5]/60 font-light text-lg md:text-xl leading-relaxed tracking-wide"
            >
              Straightforward digital guidance for trade businesses, regional construction groups, and premium service firms in Scotland. No jargon, just results.
            </motion.p>
          </div>
        </section>

        {/* 2. FEATURED ARTICLE (BRIGHT EDITORIAL - OFF-WHITE) */}
        <section className="py-40 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-b border-[#1A1917]/10">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-6xl mx-auto relative z-10">
            <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-12 text-center lg:text-left">Featured Journal</p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: cinematicEase }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="relative aspect-[16/10] bg-[#EFECE8] border border-[#1A1917]/5 rounded-sm overflow-hidden shadow-sm group">
                <Image 
                  src={featured.image} 
                  alt={featured.title} 
                  fill 
                  className="object-cover opacity-90 filter contrast-[1.05] group-hover:scale-[1.01] transition-transform duration-[2.5s] ease-out"
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
                <div className="absolute inset-0 bg-[#0f0e0c]/5" />
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <span className="inline-block px-2.5 py-0.5 bg-[#D2A214]/10 border border-[#D2A214]/20 text-[#D2A214] font-bold uppercase tracking-widest text-[8px] rounded-sm">
                    {featured.tag}
                  </span>
                  <span className="text-[10px] text-[#1A1917]/40 uppercase tracking-widest font-bold flex items-center gap-1.5">
                    <Clock size={11} /> {featured.readTime}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bebas text-[#1A1917] tracking-wider leading-[0.95] uppercase">
                  {featured.title}
                </h3>

                <p className="text-sm text-[#1A1917]/70 font-light leading-relaxed max-w-lg">
                  {featured.desc}
                </p>

                <div className="pt-4">
                  <Link 
                    href={featured.link}
                    className="inline-flex items-center gap-4 px-8 py-4 bg-[#D2A214] text-[#0f0e0c] font-bold uppercase tracking-widest text-[8px] rounded-sm hover:scale-102 transition-transform shadow-sm font-inter-tight"
                  >
                    Read Detailed Journal <ArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. RECENT INSIGHTS GRID (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0f0e0c] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="max-w-6xl mx-auto relative z-10">
            <h3 className="text-center font-bebas text-white text-5xl md:text-7xl mb-24 tracking-wider uppercase">LATEST CONTRIBUTIONS</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.slice(1).map((art, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: idx * 0.1, ease: cinematicEase }}
                  className="bg-[#171513]/40 border border-white/5 p-10 rounded-sm flex flex-col justify-between group hover:border-[#D2A214]/20 transition-all duration-500"
                >
                  <div className="space-y-6">
                    <div className="relative aspect-[16/10] bg-[#171513] rounded-sm overflow-hidden border border-white/5 mb-6">
                      <Image 
                        src={art.image} 
                        alt={art.title} 
                        fill 
                        className="object-cover opacity-80 filter contrast-[1.05] group-hover:scale-[1.01] transition-transform duration-[2.5s] ease-out"
                        sizes="(max-width: 768px) 90vw, 30vw"
                      />
                      <div className="absolute inset-0 bg-[#0f0e0c]/10" />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[#D2A214] font-bold uppercase tracking-[0.2em] text-[8px]">
                        {art.tag}
                      </span>
                      <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold flex items-center gap-1.5">
                        <Clock size={10} /> {art.readTime}
                      </span>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-bebas text-white tracking-wider uppercase leading-none">
                      {art.title}
                    </h4>

                    <p className="text-xs text-white/55 leading-relaxed font-light">
                      {art.desc}
                    </p>
                  </div>

                  <div className="pt-8 mt-8 border-t border-white/5">
                    <Link 
                      href={art.link}
                      className="inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#D2A214] group-hover:text-white transition-colors"
                    >
                      Explore Discussion <ArrowRight size={10} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CALL TO ACTION (BRIGHT EDITORIAL - OFF-WHITE) */}
        <section className="py-48 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-t border-[#1A1917]/10 text-center flex items-center justify-center overflow-hidden">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <p className="text-[#D2A214] font-bold uppercase tracking-[0.4em] text-[9px] mb-8 font-inter-tight">Construct Your Blueprint</p>
            <h2 className="text-6xl md:text-8xl font-bebas text-[#1A1917] leading-none mb-12">
              READY TO ACCELERATE <br/><span className="text-[#1A1917]/25">YOUR DIGITAL POSITIONING?</span>
            </h2>
            <Link
              href="/contact"
              className="relative px-12 py-6 bg-transparent border border-[#1A1917]/20 text-[#1A1917] font-bold uppercase tracking-[0.25em] text-[9px] rounded-sm overflow-hidden group/btn hover:border-[#D2A214] transition-colors duration-500 inline-block font-inter-tight"
            >
              <div className="absolute inset-0 bg-[#D2A214] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover/btn:text-[#0f0e0c] transition-colors duration-500">Book A Growth Discovery Call</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
