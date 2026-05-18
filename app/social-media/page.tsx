'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Smartphone, Zap, Users, Play, ArrowRight, TrendingUp, Sparkles, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cinematicEase = [0.16, 1, 0.3, 1]

const pillars = [
  {
    title: "The 3-Second Hook",
    description: "In vertical feeds, you have milliseconds to capture attention. We build high-impact narrative hooks that stop scrolling immediately.",
    icon: Sparkles
  },
  {
    title: "Earthy Authenticity",
    description: "Audiences ignore polished corporate advertisements. We produce BTS content and real stories that people naturally relate to and trust.",
    icon: Smartphone
  },
  {
    title: "Organic Algorithms",
    description: "We optimize tags, descriptions, hooks, and audios to ensure maximum organic search reach across TikTok, Instagram, and YouTube.",
    icon: TrendingUp
  }
]

const videoShowcase = [
  { id: "Ll1AUE9Gxrg", title: "Veterinary Client Showcase", views: "14.8k Views" },
  { id: "CQNytl9SPb4", title: "Joinery Craftsmanship Promo", views: "9.2k Views" },
  { id: "9EMz1OjGuZo", title: "SME Commercial Campaign", views: "21.5k Views" }
]

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0e0c] text-[#E8E0D5] font-inter-tight selection:bg-[#D2A214] selection:text-[#0f0e0c] overflow-hidden">
        
        {/* 1. HERO SECTION (DARK CINEMATIC) */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden py-32 border-b border-white/5">
          <div className="absolute inset-0 bg-[#0a0908] z-0">
            <Image 
              src="/BTS : PROCESS IMAGES/Harley Biker Drone Shoot.jpg" 
              alt="Social Media Shooting Scotland" 
              fill 
              priority
              className="object-cover opacity-[0.18] filter grayscale contrast-[1.1] pointer-events-none"
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
              Organic Reach & High-Impact Content
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
              className="text-6xl md:text-8xl lg:text-[7.5rem] font-bebas text-white tracking-wide mb-12 leading-[0.95] uppercase"
            >
              STOP THE SCROLL. <br/>
              <span className="text-white/20">BUILD AUTHORITY.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="max-w-3xl mx-auto text-[#E8E0D5]/60 font-light text-lg md:text-xl leading-relaxed tracking-wide"
            >
              High-energy vertical video, Reels, TikToks, and smart platform strategy captured directly at your workplace. Built to get you seen by local paying customers.
            </motion.p>
          </div>
        </section>

        {/* 2. DYNAMIC REELS PREVIEW (BRIGHT EDITORIAL - OFF-WHITE) */}
        <section className="py-40 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-b border-[#1A1917]/10">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24 max-w-xl mx-auto">
              <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4">Vertical Showroom</p>
              <h2 className="text-5xl md:text-7xl font-bebas text-[#1A1917] tracking-wide mb-6">REAL VERTICAL VIDEO.</h2>
              <p className="text-sm text-[#1A1917]/60 font-light leading-relaxed">
                Audiences interact on smartphones. Here's a raw showcase of short-form campaigns we engineered to stop feeds and capture local leads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {videoShowcase.map((video, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: idx * 0.15, ease: cinematicEase }}
                  className="aspect-[9/16] rounded-sm overflow-hidden border border-[#1A1917]/15 bg-[#EFECE8] shadow-md hover:shadow-xl transition-all"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a 
                href="https://www.youtube.com/@bearmedia70" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-[9px] rounded-sm hover:bg-red-700 transition-colors font-inter-tight"
              >
                <Play size={12} fill="currentColor" /> Subscribe on YouTube
              </a>
            </div>
          </div>
        </section>

        {/* 3. ANALYTICS & RESULTS (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0f0e0c] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4">Results Architecture</p>
                <h2 className="text-5xl md:text-7xl font-bebas text-white tracking-wide uppercase leading-none mb-8">
                  WE MEASURE <br/><span className="text-white/20">REAL OUTCOMES.</span>
                </h2>
                <p className="text-[#E8E0D5]/60 font-light text-base md:text-lg leading-relaxed max-w-lg mb-8">
                  Vanity likes don't pay the rent. We construct social content funnels designed to raise profile visits, establish local community authority, and direct traffic straight into booking forms.
                </p>

                <div className="space-y-6">
                  {[
                    "Daily reach targeting local postal codes",
                    "Authentic founder storytelling that drives dm queries",
                    "Clear retargeting integration with your site analytics"
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center text-xs text-white/70 font-light">
                      <Zap size={14} className="text-[#D2A214]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glowing Analytics Showcase Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Daily Views", value: "48.2k", pct: "+340% Reach", icon: TrendingUp },
                  { label: "Community", value: "12.4k", pct: "+12% Growth", icon: Users },
                  { label: "DM Inquiries", value: "184", pct: "Direct Leads", icon: MessageCircle },
                  { label: "Engagement", value: "8.4%", pct: "SME Average 1.2%", icon: Sparkles }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: idx * 0.1, ease: cinematicEase }}
                    className="bg-[#171513]/40 backdrop-blur-xl border border-white/5 p-8 rounded-sm hover:border-[#D2A214]/20 transition-all text-left"
                  >
                    <stat.icon size={18} className="text-[#D2A214] mb-4" />
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">{stat.label}</p>
                    <h4 className="text-3xl font-bebas text-white tracking-wider leading-none mb-2">{stat.value}</h4>
                    <p className="text-[8px] font-bold text-[#D2A214] uppercase tracking-wider">{stat.pct}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. PILLARS OF STOPPING FEED (BRIGHT EDITORIAL - OFF-WHITE) */}
        <section className="py-40 px-6 bg-[#F5F4F0] text-[#1A1917] relative z-10 border-b border-[#1A1917]/10">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <p className="text-[#D2A214] font-bold uppercase tracking-[0.3em] text-[9px] mb-4">Feed Optimization</p>
              <h2 className="text-5xl md:text-7xl font-bebas text-[#1A1917] tracking-wide leading-none uppercase">HOW WE DO IT.</h2>
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
            <p className="text-[#D2A214] font-bold uppercase tracking-[0.4em] text-[9px] mb-8">Elevate Your Presence</p>
            <h2 className="text-6xl md:text-8xl font-bebas text-[#1A1917] leading-none mb-12">
              READY TO STOP <br/><span className="text-[#1A1917]/25">BEING INVISIBLE?</span>
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
