'use client'

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Process from '@/components/sections/Process';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, XCircle, CheckCircle2, Video, Camera, Layout, Zap, TrendingUp, Users } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* 1. HERO / HEADER SECTION */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic"
            >
               Growth Systems for the Central Belt
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 md:mb-8"
            >
              Fill Your Calendar with <br />
              <span className="text-brand-yellow">The Growth Toolkit.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white max-w-xl mx-auto mb-10 md:mb-12 font-medium italic"
            >
              We don't sell "content." We sell visibility, trust, and inbound enquiries for local businesses that want to grow.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="px-10 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-105 transition-all shadow-xl"
              >
                Book Your 15-Min Strategy Call
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. THE COST OF INACTION */}
        <section className="py-12 md:py-20 px-6 bg-neutral-900/30 border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center text-white">
               The Cost of <span className="text-red-500/70">Doing Nothing.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-left">
                 <div className="space-y-6">
                    <p className="text-base text-white italic leading-relaxed">
                       "Staying invisible isn't just a missed opportunity—it's an active loss of revenue to competitors who show up where your customers are looking."
                    </p>
                    <div className="space-y-3">
                       {[
                         "Lost trust from amateur visuals",
                         "Invisible on local Google searches",
                         "Wasted time on tyre-kickers"
                       ].map((item, i) => (
                         <div key={i} className="flex gap-3 items-center text-white font-black uppercase tracking-widest text-[9px]">
                           <XCircle className="text-red-500/40" size={14} /> {item}
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="p-8 rounded-[2rem] border border-red-500/10 bg-red-500/[0.01] flex flex-col justify-center">
                    <p className="text-xl font-black italic mb-3 text-red-500/60 uppercase font-bebas tracking-widest">The Outcome?</p>
                    <p className="text-sm text-white leading-relaxed font-bold italic">
                       "Your competitors sign the high-value jobs while you remain the Central Belt's best-kept secret."
                    </p>
                 </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SOLUTIONS GRID */}
        <section className="py-12 md:py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-24 text-left">
            
            {/* 1. Social Media Content Creation */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-brand-yellow font-black uppercase tracking-[0.2em] text-[10px] mb-4 block italic">Get Seen</span>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase italic font-bebas tracking-tight">Social Media <br /><span className="text-brand-yellow">Dominance.</span></h2>
                <p className="text-white mb-8 leading-relaxed italic text-sm">
                  Stop the scroll and own the local feed. We visit your site in West Lothian or Edinburgh to capture real content that turns attention into trust.
                </p>
                <div className="space-y-4">
                   {[
                     { icon: <Zap size={20} />, title: "High-Impact Reels", desc: "Cinematic vertical video for local residents." },
                     { icon: <Users size={20} />, title: "Managed Strategy", desc: "We handle the posting and engagement." }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-6 glass-card border-white/5">
                         <div className="text-brand-yellow">{item.icon}</div>
                         <div>
                            <h4 className="font-black text-white mb-1 uppercase italic font-bebas tracking-widest text-xs">{item.title}</h4>
                            <p className="text-white text-[11px] italic">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
                <div className="mt-8">
                   <Link href="/services/social-media-content" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase italic font-bebas tracking-widest hover:translate-x-1 transition-transform">
                      See the Social System <ArrowRight size={16} />
                   </Link>
                </div>
              </div>
              <YouTubeEmbed 
                videoId="e-oJMNu7b6k" 
                title="Behind-the-Scenes"
                description="How we capture authentic, high-impact content without getting in your way."
                result="Consistent, professional presence."
              />
            </div>

            {/* 2. Videography & Photography */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <span className="text-brand-yellow font-black uppercase tracking-[0.2em] text-[10px] mb-4 block italic">Build Trust</span>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase italic font-bebas tracking-tight">Cinematic <br /><span className="text-brand-yellow">Authority Proof.</span></h2>
                <p className="text-white mb-8 leading-relaxed italic text-sm">
                  Look like the obvious choice. From drone tours in Edinburgh to site progress in Fife, we prove your quality before they even call.
                </p>
                <div className="space-y-4">
                   {[
                     { icon: <Video size={20} />, title: "Drone Tours", desc: "Win more listings through cinematic perspective." },
                     { icon: <Camera size={20} />, title: "Project Mastery", desc: "Professional brand stills and site photography." }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-6 glass-card border-white/5">
                         <div className="text-brand-yellow">{item.icon}</div>
                         <div>
                            <h4 className="font-black text-white mb-1 uppercase italic font-bebas tracking-widest text-xs">{item.title}</h4>
                            <p className="text-white text-[11px] italic">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
                <div className="mt-8">
                   <Link href="/services/videography" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase italic font-bebas tracking-widest hover:translate-x-1 transition-transform">
                      See the Video System <ArrowRight size={16} />
                   </Link>
                </div>
              </div>
              <YouTubeEmbed 
                videoId="jC2_w7PSiGI" 
                title="Drone Perspective"
                description="Professional aerial capture that showcases scale and craftsmanship."
                result="Instantly elevated brand perception."
              />
            </div>

            {/* 3. Website Design */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-brand-yellow font-black uppercase tracking-[0.2em] text-[10px] mb-4 block italic">Get Enquiries</span>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase italic font-bebas tracking-tight">High-Converting <br /><span className="text-brand-yellow">Lead Engines.</span></h2>
                <p className="text-white mb-8 leading-relaxed italic text-sm">
                  Your 24/7 lead-generation system. We build fast, premium websites that turn local interest into signed contracts.
                </p>
                <div className="space-y-4">
                   {[
                     { icon: <Layout size={20} />, title: "Conversion First", desc: "Built specifically to turn visitors into enquiries." },
                     { icon: <TrendingUp size={20} />, title: "Local SEO Hubs", desc: "Optimised for West Lothian, Edinburgh, and Fife." }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-6 glass-card border-white/5">
                         <div className="text-brand-yellow">{item.icon}</div>
                         <div>
                            <h4 className="font-black text-white mb-1 uppercase italic font-bebas tracking-widest text-xs">{item.title}</h4>
                            <p className="text-white text-[11px] italic">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
                <div className="mt-8">
                   <Link href="/services/website-design" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase italic font-bebas tracking-widest hover:translate-x-1 transition-transform">
                      See the Web System <ArrowRight size={16} />
                   </Link>
                </div>
              </div>
              <YouTubeEmbed 
                videoId="_5ez-K2wvxw" 
                title="Business Showcase"
                description="Integrating high-end video into a custom lead-generation website build."
                result="A seamless conversion path."
              />
            </div>

          </div>
        </section>

        <section className="py-12 md:py-20 bg-neutral-900/30">
          <Process />
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 text-center relative overflow-hidden bg-brand-yellow text-neutral-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="mb-8 text-neutral-950">
              Ready to Get Real Results?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-105 transition-all shadow-2xl group"
            >
              Book Your 15-Min Strategy Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
            </Link>
            <p className="mt-8 text-neutral-950/50 text-[9px] font-black uppercase tracking-widest italic">
              No pressure. No jargon. Just results.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
