'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Smartphone, ArrowRight, CheckCircle2, Zap, Target, Users, TrendingUp, Star, HelpCircle, MapPin, Share2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VideoProof from '@/components/VideoProof'

export default function SocialMediaWestLothianContent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-black uppercase tracking-[0.3em] mb-4 text-[13px] md:text-sm md:text-sm animate-pulse italic"
            >
               Stop being the best kept secret.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas"
            >
              Social Media <br />
              <span className="text-gold">West Lothian</span> <br />
              That Fills Your Calendar
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white max-w-xl mx-auto mb-10 md:mb-12 font-medium italic text-sm md:text-lg"
            >
              Likes don't pay the bills. Leads do. We handle your content and strategy to turn local attention into consistent enquiries.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-neutral-950 font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all shadow-xl"
              >
                Book a Discovery Call
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. PROOF SECTION */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="West Lothian Content Authority"
          stats={[
             { label: "Reach", value: "50k+", icon: <TrendingUp size={20} /> },
             { label: "Engagement", value: "High-Trust", icon: <Share2 size={20} /> },
             { label: "Local Proof", value: "On-Site", icon: <Star size={20} /> },
             { label: "Results", value: "Daily", icon: <Target size={20} /> }
          ]}
        />

        {/* 3. PROBLEM SECTION */}
        <section className="py-32 px-6 max-w-5xl mx-auto text-center md:text-left">
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
              The Problem With <br /><span className="text-gold">"Posting Just to Post".</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <p className="text-lg text-white italic leading-relaxed">
                    Most West Lothian businesses are shouting into a void. They post generic content that gets ignored, or they go silent for weeks because they're too busy working.
                 </p>
                 <div className="space-y-4">
                    {[
                      "Inconsistent posting that kills your reach",
                      "Generic content that doesn't build local trust",
                      "Zero lead generation strategy behind posts",
                      "Missing out on customers in Livingston & Bathgate"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/90">
                         <CheckCircle2 size={16} className="text-red-500/50" />
                         <span className="text-xs uppercase font-bold tracking-widest">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-10 rounded-[2rem] bg-neutral-900 border border-white/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
                 <h4 className="text-xl font-black uppercase italic font-bebas tracking-widest text-gold mb-4">The Solution</h4>
                 <p className="text-white text-xs italic leading-relaxed mb-6">
                    Our "While You Work" capture system ensures we get real, authentic footage of your team in action across West Lothian, turning that proof into a lead-generation machine.
                 </p>
                 <Link href="/social-media" className="text-white font-black uppercase italic font-bebas tracking-widest text-[13px] md:text-sm hover:text-gold transition-colors flex items-center gap-2 group">
                    Our Content Systems <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
           </div>
        </section>

        {/* 4. SOLUTION SECTION */}
        <section className="py-32 px-6 bg-neutral-900/50 border-y border-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Our <span className="text-gold">Social Solution.</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                 {[
                   { icon: <Zap className="text-gold" size={32} />, title: "Authority Reels", desc: "Short, high-impact videos that showcase your expertise and craftsmanship." },
                   { icon: <Target className="text-gold" size={32} />, title: "Local Targeting", desc: "We ensure your content is seen by potential customers in West Lothian and Edinburgh." },
                   { icon: <Users className="text-gold" size={32} />, title: "Community Trust", desc: "Consistent presence that makes you the go-to local expert in your industry." }
                 ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[2rem] bg-neutral-950 border border-white/5 hover:border-gold/20 transition-all group">
                       <div className="mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                       <h3 className="text-xl font-black mb-4 uppercase italic font-bebas tracking-widest text-white">{item.title}</h3>
                       <p className="text-white/80 text-xs italic leading-relaxed">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. PROCESS SECTION */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight text-white leading-none">
                 Our Simple <span className="text-gold">4-Step Process.</span>
              </h2>
           </div>
           <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Plan", desc: "15 minutes to map out exactly what will bring you the best leads." },
                { step: "02", title: "Capture", desc: "We come to you and film everything. Zero disruption to your day." },
                { step: "03", title: "Publish", desc: "We manage the posting and strategy across all major platforms." },
                { step: "04", title: "Enquiries", desc: "We deliver high-impact content that gets your phone ringing." }
              ].map((item, i) => (
                 <div key={i} className="relative p-8 rounded-[2rem] bg-neutral-900 border border-white/5 overflow-hidden group">
                    <div className="text-6xl font-black text-white italic font-bebas mb-6 group-hover:text-gold transition-colors">{item.step}</div>
                    <h3 className="text-lg font-black mb-3 uppercase italic font-bebas tracking-widest text-gold">{item.title}</h3>
                    <p className="text-white/80 text-xs italic leading-relaxed">{item.desc}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. LOCAL SECTION */}
        <section className="py-32 px-6 bg-gold overflow-hidden relative">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
           <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                 <h2 className="text-4xl md:text-6xl font-black text-neutral-950 uppercase italic font-bebas tracking-tighter leading-none mb-6">
                    West Lothian's <br /> Social Authority.
                 </h2>
                 <p className="text-neutral-950 font-medium italic leading-relaxed mb-8">
                    We're based in Broxburn and serve businesses across West Lothian, from the busy streets of Livingston and Bathgate to the historic charm of Linlithgow. We know how to speak to local customers because we are local.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    {["Livingston", "Bathgate", "Broxburn", "Linlithgow", "Edinburgh"].map((city, i) => (
                      <div key={i} className="flex items-center gap-2 bg-neutral-950/10 px-4 py-2 rounded-full border border-neutral-950/20 text-neutral-950 text-[13px] md:text-sm font-black uppercase tracking-widest">
                         <MapPin size={12} /> {city}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="text-neutral-950/60 font-black uppercase italic font-bebas text-2xl md:text-4xl tracking-widest text-right leading-none hidden md:block">
                 Social Experts. <br /> Local Reach. <br /> Real Growth.
              </div>
           </div>
        </section>

        {/* 7. CTA SECTION */}
        <section className="py-32 px-6 text-center">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Want more enquiries from <br /> your <span className="text-gold text-underline">social media content?</span>
              </h2>
              <p className="text-white/90 mb-12 italic font-medium uppercase tracking-widest text-xs">
                 Stop guessing. Start growing. 
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-neutral-950 font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(245,166,35,0.2)]"
              >
                👉 Book a Discovery Call
                <ArrowRight size={16} />
              </Link>
           </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
