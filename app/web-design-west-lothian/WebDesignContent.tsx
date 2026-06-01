'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Layout, ArrowRight, CheckCircle2, Zap, Target, MousePointer2, TrendingUp, Users, Star, MapPin } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VideoProof from '@/components/VideoProof'

export default function WebDesignWestLothianContent() {
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
               More than just a pretty layout.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas"
            >
              Web Design <br />
              <span className="text-gold">West Lothian</span> <br />
              That Generates Enquiries
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white max-w-xl mx-auto mb-10 md:mb-12 font-medium italic text-sm md:text-lg"
            >
              Stop losing customers to competitors with better websites. We build high-performance lead-generation systems for local businesses.
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
          title="West Lothian Digital Authority"
          stats={[
             { label: "Lead Growth", value: "300%+", icon: <TrendingUp size={20} /> },
             { label: "Local Clients", value: "50+", icon: <Users size={20} /> },
             { label: "Google Rating", value: "5.0★", icon: <Star size={20} /> },
             { label: "Focus", value: "Conversions", icon: <Target size={20} /> }
          ]}
        />

        {/* 3. PROBLEM SECTION */}
        <section className="py-32 px-6 max-w-5xl mx-auto text-center md:text-left">
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
              The Problem With <br /><span className="text-gold">Standard Web Design.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <p className="text-lg text-white italic leading-relaxed">
                    Most web design in West Lothian focuses on how things look, not how they perform. You get a site that looks okay, but your phone isn't ringing.
                 </p>
                 <div className="space-y-4">
                    {[
                      "Poor visibility in local Livingston & Bathgate searches",
                      "Websites that are slow and confuse potential customers",
                      "Zero strategy to turn visitors into enquiries",
                      "Generic templates that don't build trust"
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
                 <h4 className="text-xl font-black uppercase italic font-bebas tracking-widest text-gold mb-4">The Bear Media Difference</h4>
                 <p className="text-white text-xs italic leading-relaxed mb-6">
                    We don't just build websites; we build conversion architecture. Every pixel is designed to move a local prospect closer to booking your service.
                 </p>
                 <Link href="/web-design" className="text-white font-black uppercase italic font-bebas tracking-widest text-[13px] md:text-sm hover:text-gold transition-colors flex items-center gap-2 group">
                    View Our Portfolio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
           </div>
        </section>

        {/* 4. SOLUTION SECTION */}
        <section className="py-32 px-6 bg-neutral-900/50 border-y border-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Our <span className="text-gold">Solution.</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                 {[
                   { icon: <Zap className="text-gold" size={32} />, title: "Extreme Speed", desc: "Built for performance. We ensure your site loads instantly on mobile so you never lose a customer." },
                   { icon: <Target className="text-gold" size={32} />, title: "Local SEO", desc: "Optimised for West Lothian search terms to put you in front of Livingston and Bathgate buyers." },
                   { icon: <MousePointer2 className="text-gold" size={32} />, title: "Conversion First", desc: "Strategically placed CTAs and messaging designed to make your phone ring." }
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
                { step: "01", title: "Plan", desc: "Strategic mapping of your local West Lothian market." },
                { step: "02", title: "Create", desc: "High-performance design and copy built for trust." },
                { step: "03", title: "Publish", desc: "Fast, secure launch with full technical SEO." },
                { step: "04", title: "Enquiries", desc: "Your new site starts working to fill your calendar." }
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
                    West Lothian's <br /> Growth Partner.
                 </h2>
                 <p className="text-neutral-950 font-medium italic leading-relaxed mb-8">
                    We aren't a remote agency. We're based right here in West Lothian, serving businesses in Livingston, Broxburn, Bathgate, Linlithgow, and across the Central Belt. We know the local market and what it takes to stand out in Edinburgh and beyond.
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
                 Local Expertise. <br /> Global Quality. <br /> Real Results.
              </div>
           </div>
        </section>

        {/* 6.5 FAQ SECTION */}
        <section className="py-32 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
               West Lothian Web Design <span className="text-gold">FAQs.</span>
            </h2>
            <div className="space-y-6">
               {[
                 { q: "Do you design websites for local businesses in Livingston and Bathgate?", a: "Yes. We work with trades, construction firms, and SMEs throughout West Lothian, including Livingston, Bathgate, Broxburn, and Linlithgow." },
                 { q: "How much does a custom website build cost?", a: "We provide transparent, fixed-price packages based on your goals and scope. No hidden fees or surprise costs." },
                 { q: "How long does a website project take from start to finish?", a: "Typically, projects take between 4 to 6 weeks, which includes content collation, design mockups, development, and local SEO configuration." },
                 { q: "Will my website be mobile-friendly and fast?", a: "Absolutely. All our websites are custom coded to load instantly and scale perfectly across mobile, tablet, and desktop screens." }
               ].map((faq, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-neutral-900 border border-white/5">
                     <h4 className="text-xl font-black uppercase italic font-bebas tracking-widest text-gold mb-4">
                        {faq.q}
                     </h4>
                     <p className="text-white leading-relaxed text-sm italic">{faq.a}</p>
                  </div>
               ))}
            </div>
         </section>

        {/* 7. CTA SECTION */}
        <section className="py-32 px-6 text-center">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Want more enquiries from <br /> your <span className="text-gold text-underline">website and content?</span>
              </h2>
              <p className="text-white/90 mb-12 italic font-medium uppercase tracking-widest text-xs">
                 No fluff. No jargon. Just a clear roadmap to growth.
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
