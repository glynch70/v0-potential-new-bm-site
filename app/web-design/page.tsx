'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Monitor, ArrowLeft, CheckCircle2, Layout, Zap, Search, MousePointer2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { StickyFooter } from '@/components/ui/sticky-footer'

const features = [
  {
    title: "High-Speed Performance",
    description: "Nobody waits for slow sites. We build for speed to keep your bounce rate low and your conversions high.",
    icon: Zap
  },
  {
    title: "Mobile-First Design",
    description: "Most of your customers are on their phones. Your site will look stunning and work perfectly on every screen.",
    icon: Monitor
  },
  {
    title: "SEO Foundation",
    description: "We don't just build sites; we build sites that Google loves. On-page SEO is baked into every project.",
    icon: Search
  }
]

export default function WebDesignPage() {
  return (
    <main className="bg-dark min-h-screen text-white font-figtree">
      <Navbar />
      
      {/* 🦸 HERO SECTION */}
      <section className="relative py-32 md:py-48 px-6 overflow-hidden border-b border-white/5">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none" />
         
         <div className="max-w-[1240px] mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow font-black uppercase tracking-[0.4em] text-xs mb-8 italic"
            >
              CONVERT VISITORS INTO CUSTOMERS
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-8 leading-none"
            >
              Website Design <span className="text-brand-yellow">Scotland</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-white/60 max-w-3xl mx-auto italic font-medium leading-relaxed"
            >
              Websites that actually turn people into customers. We build fast, clean, and practical sites for Scottish businesses that mean business.
            </motion.p>
         </div>
      </section>

      {/* 📘 WHAT IS WEB DESIGN? */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8">What is <span className="text-brand-yellow">Web Design</span>?</h2>
            <div className="text-white/60 text-lg md:text-xl space-y-6 leading-relaxed italic">
              <p>
                In 2026, your website isn't just a digital business card. It's your most important salesperson.
              </p>
              <p>
                Web design is the process of creating a digital experience that reflects your brand, communicates your value, and most importantly, drives action.
              </p>
            </div>
          </div>
          <div className="glass-card p-12 border-brand-yellow/20">
            <h3 className="text-2xl font-black text-brand-yellow uppercase italic mb-6">Why it matters</h3>
            <ul className="space-y-4">
              {[
                "First impressions happen in 0.05 seconds",
                "88% of users won't return after a bad experience",
                "Mobile users are 5x more likely to abandon a site if it's not optimized",
                "Clean design builds instant trust and credibility"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-white/80 italic font-medium">
                  <CheckCircle2 className="text-brand-yellow shrink-0" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ⚙️ WHAT WE ACTUALLY DO */}
      <section className="py-24 md:py-32 px-6 bg-white/[0.02]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">What we <span className="text-brand-yellow">actually</span> do</h2>
            <p className="text-white/40 mt-4 text-lg">No jargon. Just results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 border-brand-yellow/10 hover:border-brand-yellow/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-yellow/10 flex items-center justify-center mb-8 border border-brand-yellow/20">
                  <feature.icon size={30} className="text-brand-yellow" />
                </div>
                <h3 className="text-2xl font-black text-brand-yellow uppercase italic mb-4">{feature.title}</h3>
                <p className="text-white/60 text-base leading-relaxed font-medium italic">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 REAL EXAMPLES */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-16 text-center">Real <span className="text-brand-yellow">Examples</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative aspect-video rounded-3xl overflow-hidden border-2 border-white/5">
               <div className="absolute inset-0 bg-dark/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 p-8 text-center">
                  <h4 className="text-2xl font-black text-white uppercase italic mb-2">Modern Trades Site</h4>
                  <p className="text-white/60 mb-6 italic">Built for conversion and local SEO.</p>
                  <Link href="/#work" className="bg-brand-yellow text-dark px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs italic">View Portfolio</Link>
               </div>
               <div className="bg-white/5 w-full h-full flex items-center justify-center text-white/10 uppercase font-black text-4xl italic">Example Case Study</div>
            </div>
            <div className="group relative aspect-video rounded-3xl overflow-hidden border-2 border-white/5">
               <div className="absolute inset-0 bg-dark/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 p-8 text-center">
                  <h4 className="text-2xl font-black text-white uppercase italic mb-2">E-commerce Refresh</h4>
                  <p className="text-white/60 mb-6 italic">Clean, fast, and mobile-ready.</p>
                  <Link href="/#work" className="bg-brand-yellow text-dark px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs italic">View Portfolio</Link>
               </div>
               <div className="bg-white/5 w-full h-full flex items-center justify-center text-white/10 uppercase font-black text-4xl italic">Example Case Study</div>
            </div>
          </div>
        </div>
      </section>

      {/* 👥 WHO IT'S FOR */}
      <section className="py-24 md:py-32 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8">Who <span className="text-brand-yellow">it's for</span></h2>
          <div className="text-white/60 text-lg md:text-xl space-y-6 leading-relaxed italic mb-12">
            <p>
              We work with Scottish SMEs who are tired of over-complicated agencies and monthly fees. If you want a site that you actually own, that actually works, and that actually brings in customers — we're for you.
            </p>
            <p className="text-sm border-t border-white/5 pt-8">
              Want to add cinematic drone footage to your site? Check out our <Link href="/video-production" className="text-brand-yellow hover:underline">Video Production</Link> services.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Trades & Construction", "Local Services", "Small E-commerce", "Professional Services"].map((tag) => (
              <span key={tag} className="px-6 py-2 rounded-full border border-brand-yellow/30 text-brand-yellow font-bold uppercase tracking-widest text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CALL-TO-ACTION SECTION */}
      <section className="py-32 md:py-48 px-6 text-center border-t border-white/5">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-12 leading-none">
            Ready to <span className="text-brand-yellow">Build</span><br />something that works?
          </h2>
          
          <a 
            href="https://calendly.com/bearmedia/discovery-call" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-dark text-xl md:text-3xl font-black py-8 px-16 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(221,163,30,0.4)] animate-[float_4s_ease-in-out_infinite] uppercase italic tracking-widest"
          >
            Start Your Project
          </a>
          
          <div className="mt-24">
            <Link 
              href="/" 
              className="inline-flex items-center gap-4 text-white/40 hover:text-brand-yellow transition-colors font-black uppercase tracking-[0.4em] text-xs"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </div>
      </section>

      <StickyFooter />
    </main>
  )
}
