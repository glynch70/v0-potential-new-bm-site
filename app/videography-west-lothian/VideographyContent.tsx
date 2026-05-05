'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Video, ArrowRight, CheckCircle2, Zap, Target, Users, TrendingUp, Star, HelpCircle, MapPin, Camera } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VideoProof from '@/components/VideoProof'

export default function VideographyWestLothianContent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic"
            >
               Cinematic authority for local businesses.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas"
            >
              Videography <br />
              <span className="text-brand-yellow">West Lothian</span> <br />
              That Gets Enquiries
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white max-w-xl mx-auto mb-10 md:mb-12 font-medium italic text-sm md:text-lg"
            >
              Stop using boring photos. We visit your site, film your work, and turn it into a cinematic lead-generation engine.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-105 transition-all shadow-xl"
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
          title="West Lothian Visual Authority"
          stats={[
             { label: "Views", value: "50k+", icon: <TrendingUp size={20} /> },
             { label: "Trust Built", value: "Instant", icon: <Star size={20} /> },
             { label: "Project Proof", value: "On-Site", icon: <CheckCircle2 size={20} /> },
             { label: "Conversions", value: "High-Value", icon: <Target size={20} /> }
          ]}
        />

        {/* 3. PROBLEM SECTION */}
        <section className="py-32 px-6 max-w-5xl mx-auto text-center md:text-left">
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
              The Problem With <br /><span className="text-brand-yellow">Static Content.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <p className="text-lg text-white italic leading-relaxed">
                    Photos alone aren't enough to build high-level trust in today's market. Potential customers in Livingston and Bathgate want to see the real quality of your work before they enquire.
                 </p>
                 <div className="space-y-4">
                    {[
                      "Static photos that get scrolled past",
                      "Lack of movement and energy in your brand",
                      "No proof of the real craftsmanship you provide",
                      "Losing high-value jobs to agents with better video"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/60">
                         <CheckCircle2 size={16} className="text-red-500/50" />
                         <span className="text-xs uppercase font-bold tracking-widest">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-10 rounded-[2rem] bg-neutral-900 border border-white/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 blur-3xl rounded-full" />
                 <h4 className="text-xl font-black uppercase italic font-bebas tracking-widest text-brand-yellow mb-4">The Solution</h4>
                 <p className="text-white text-xs italic leading-relaxed mb-6">
                    Our cinematic videography captures the scale and detail of your projects across West Lothian. We turn real work into authority-building content that justifies your premium pricing.
                 </p>
                 <Link href="/video-production" className="text-white font-black uppercase italic font-bebas tracking-widest text-[10px] hover:text-brand-yellow transition-colors flex items-center gap-2 group">
                    Our Video Production <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
           </div>
        </section>

        {/* 4. SOLUTION SECTION */}
        <section className="py-32 px-6 bg-neutral-900/50 border-y border-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Our <span className="text-brand-yellow">Visual Solution.</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                 {[
                   { icon: <Camera className="text-brand-yellow" size={32} />, title: "Cinematic Tours", desc: "Showcase the true scale and quality of your local projects in stunning detail." },
                   { icon: <Video className="text-brand-yellow" size={32} />, title: "Drone Visuals", desc: "Breathtaking aerial coverage that sets your business apart from the competition." },
                   { icon: <Target className="text-brand-yellow" size={32} />, title: "Result Reels", desc: "Short, high-impact videos designed specifically to drive discovery and enquiries." }
                 ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[2rem] bg-neutral-950 border border-white/5 hover:border-brand-yellow/20 transition-all group">
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
                 Our Simple <span className="text-brand-yellow">4-Step Process.</span>
              </h2>
           </div>
           <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Visit", desc: "We visit your project in the West Lothian area to capture the work." },
                { step: "02", title: "Capture", desc: "Drone shots to detailed close-ups. We handle every detail." },
                { step: "03", title: "Publish", desc: "We deliver branded, ready-to-use content for your socials." },
                { step: "04", title: "Enquiries", desc: "Your cinematic proof starts winning you high-value jobs." }
              ].map((item, i) => (
                 <div key={i} className="relative p-8 rounded-[2rem] bg-neutral-900 border border-white/5 overflow-hidden group">
                    <div className="text-6xl font-black text-white italic font-bebas mb-6 group-hover:text-brand-yellow transition-colors">{item.step}</div>
                    <h3 className="text-lg font-black mb-3 uppercase italic font-bebas tracking-widest text-brand-yellow">{item.title}</h3>
                    <p className="text-white/80 text-xs italic leading-relaxed">{item.desc}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. LOCAL SECTION */}
        <section className="py-32 px-6 bg-brand-yellow overflow-hidden relative">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
           <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                 <h2 className="text-4xl md:text-6xl font-black text-neutral-950 uppercase italic font-bebas tracking-tighter leading-none mb-6">
                    West Lothian's <br /> Visual Roadmap.
                 </h2>
                 <p className="text-neutral-950 font-medium italic leading-relaxed mb-8">
                    We're based in Broxburn and regularly visit sites across Livingston, Bathgate, and Linlithgow to capture high-quality footage. We know the Central Belt and the businesses that make it thrive.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    {["Livingston", "Bathgate", "Broxburn", "Linlithgow", "Edinburgh"].map((city, i) => (
                      <div key={i} className="flex items-center gap-2 bg-neutral-950/10 px-4 py-2 rounded-full border border-neutral-950/20 text-neutral-950 text-[10px] font-black uppercase tracking-widest">
                         <MapPin size={12} /> {city}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="text-neutral-950/60 font-black uppercase italic font-bebas text-2xl md:text-4xl tracking-widest text-right leading-none hidden md:block">
                 Camera Ready. <br /> Local Pride. <br /> Real Impact.
              </div>
           </div>
        </section>

        {/* 7. CTA SECTION */}
        <section className="py-32 px-6 text-center">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Want more enquiries from <br /> your <span className="text-brand-yellow text-underline">video content?</span>
              </h2>
              <p className="text-white/60 mb-12 italic font-medium uppercase tracking-widest text-xs">
                 Stop Being Invisible. Start Winning.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(245,166,35,0.2)]"
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
