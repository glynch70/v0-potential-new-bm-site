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
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 px-6 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic"
            >
               Systems Built for Central Belt Growth
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas max-w-5xl mx-auto"
            >
              Outcome-Focused Services in <br />
              <span className="text-brand-yellow text-stroke-sm">West Lothian, Edinburgh & Fife</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed italic"
            >
              We don't sell "content." We sell visibility, trust, and inbound enquiries for local businesses.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <Link
                href="/contact"
                className="px-10 py-5 md:px-12 md:py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(245,166,35,0.2)]"
              >
                Book Your 15-Min Strategy Call
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. THE COST OF INACTION (NEW SECTION) */}
        <section className="py-16 md:py-24 px-6 bg-neutral-900/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight leading-none text-white">
              The Cost of <span className="text-red-500 text-stroke-sm">Doing Nothing.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-6">
                    <p className="text-xl text-white/70 italic leading-relaxed">
                       "Staying invisible isn't just a missed opportunity—it's an active loss of revenue to competitors who are willing to show up where your customers are looking."
                    </p>
                    <div className="space-y-4">
                       <div className="flex gap-4 items-center text-white/40 font-bold uppercase tracking-widest text-xs">
                          <XCircle className="text-red-500" size={16} /> Lost trust from outdated visuals
                       </div>
                       <div className="flex gap-4 items-center text-white/40 font-bold uppercase tracking-widest text-xs">
                          <XCircle className="text-red-500" size={16} /> Invisible on local Google searches
                       </div>
                       <div className="flex gap-4 items-center text-white/40 font-bold uppercase tracking-widest text-xs">
                          <XCircle className="text-red-500" size={16} /> Wasted time on low-value leads
                       </div>
                    </div>
                 </div>
                 <div className="p-12 glass-card border-red-500/20 bg-red-500/[0.02] flex flex-col justify-center">
                    <p className="text-4xl font-black italic mb-4 text-red-500 uppercase font-bebas">The Outcome?</p>
                    <p className="text-xl text-white/80 leading-relaxed font-bold italic">
                       "Your competitors sign the high-value listings and jobs while you remain the Central Belt's best-kept secret."
                    </p>
                 </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SOLUTIONS GRID */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-32">
            
            {/* 1. Social Media Content Creation */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-brand-yellow font-black uppercase tracking-[0.2em] text-xs mb-4 block">Get Seen</span>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase italic font-bebas tracking-tight">Social Media <br /><span className="text-brand-yellow">Dominance.</span></h2>
                <p className="text-xl text-white/50 mb-8 leading-relaxed font-medium italic">
                  Stop the scroll and own the local feed. We visit your site in West Lothian or Edinburgh to capture real, authentic content that turns attention into trust.
                </p>
                <div className="space-y-6">
                   <div className="flex gap-4 p-6 glass-card border-white/5">
                      <div className="text-brand-yellow"><Zap /></div>
                      <div>
                         <h4 className="font-bold text-white mb-1 uppercase italic font-bebas tracking-widest">High-Impact Reels</h4>
                         <p className="text-white/40 text-sm">Cinematic vertical video that keeps you top-of-mind for local residents.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 p-6 glass-card border-white/5">
                      <div className="text-brand-yellow"><Users /></div>
                      <div>
                         <h4 className="font-bold text-white mb-1 uppercase italic font-bebas tracking-widest">Managed Strategy</h4>
                         <p className="text-white/40 text-sm">We handle the posting and engagement so you can focus on the job.</p>
                      </div>
                   </div>
                </div>
                <div className="mt-10">
                   <Link href="/services/social-media-content" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg hover:underline">
                      See the Social System <ArrowRight size={20} />
                   </Link>
                </div>
              </div>
              <YouTubeEmbed 
                videoId="e-oJMNu7b6k" 
                title="Behind-the-Scenes Content Capture"
                description="How we capture authentic, high-impact content without getting in your way."
                result="Consistent, professional presence that drives local enquiries."
              />
            </div>

            {/* 2. Videography & Photography */}
            <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
              <div className="md:order-2">
                <span className="text-brand-yellow font-black uppercase tracking-[0.2em] text-xs mb-4 block">Build Trust</span>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase italic font-bebas tracking-tight">Cinematic <br /><span className="text-brand-yellow">Authority Proof.</span></h2>
                <p className="text-xl text-white/50 mb-8 leading-relaxed font-medium italic">
                  Look like the obvious choice. From drone property tours in Edinburgh to site progress videos in Fife, we prove your quality before the customer even calls.
                </p>
                <div className="space-y-6">
                   <div className="flex gap-4 p-6 glass-card border-white/5">
                      <div className="text-brand-yellow"><Video /></div>
                      <div>
                         <h4 className="font-bold text-white mb-1 uppercase italic font-bebas tracking-widest">Drone Tours</h4>
                         <p className="text-white/40 text-sm">Winning more listings for agents through cinematic perspective.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 p-6 glass-card border-white/5">
                      <div className="text-brand-yellow"><Camera /></div>
                      <div>
                         <h4 className="font-bold text-white mb-1 uppercase italic font-bebas tracking-widest">Project Mastery</h4>
                         <p className="text-white/40 text-sm">Professional brand stills and site photography that proves results.</p>
                      </div>
                   </div>
                </div>
                <div className="mt-10">
                   <Link href="/services/videography" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg hover:underline">
                      See the Video System <ArrowRight size={20} />
                   </Link>
                </div>
              </div>
              <YouTubeEmbed 
                videoId="jC2_w7PSiGI" 
                title="Cinematic Drone Perspective"
                description="Professional aerial capture that showcases scale, location, and craftsmanship."
                result="Instantly elevated brand perception and listing authority."
              />
            </div>

            {/* 3. Website Design */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-brand-yellow font-black uppercase tracking-[0.2em] text-xs mb-4 block">Get Enquiries</span>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase italic font-bebas tracking-tight">High-Converting <br /><span className="text-brand-yellow">Lead Engines.</span></h2>
                <p className="text-xl text-white/50 mb-8 leading-relaxed font-medium italic">
                  Your 24/7 lead-generation system. We build fast, premium, and high-converting websites that turn local interest into signed contracts.
                </p>
                <div className="space-y-6">
                   <div className="flex gap-4 p-6 glass-card border-white/5">
                      <div className="text-brand-yellow"><Layout /></div>
                      <div>
                         <h4 className="font-bold text-white mb-1 uppercase italic font-bebas tracking-widest">Conversion First</h4>
                         <p className="text-white/40 text-sm">Built specifically to turn visitors into enquiries, not just a pretty page.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 p-6 glass-card border-white/5">
                      <div className="text-brand-yellow"><TrendingUp /></div>
                      <div>
                         <h4 className="font-bold text-white mb-1 uppercase italic font-bebas tracking-widest">Local SEO Hubs</h4>
                         <p className="text-white/40 text-sm">Optimised to rank for West Lothian, Edinburgh, and Fife searches.</p>
                      </div>
                   </div>
                </div>
                <div className="mt-10">
                   <Link href="/services/website-design" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg hover:underline">
                      See the Web System <ArrowRight size={20} />
                   </Link>
                </div>
              </div>
              <YouTubeEmbed 
                videoId="_5ez-K2wvxw" 
                title="Business Showcase: Forth Coast Veterinary"
                description="Integrating high-end video into a custom lead-generation website build."
                result="A seamless conversion path from video viewer to customer."
              />
            </div>

          </div>
        </section>

        <section className="py-24 bg-neutral-900/50">
          <Process />
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.1)_0%,transparent_60%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase italic font-bebas tracking-tight text-white leading-none">
              Ready to get <br />
              <span className="text-brand-yellow underline decoration-brand-yellow/30 underline-offset-8">real results?</span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(245,166,35,0.3)] group"
            >
              Book Your 15-Min Strategy Call
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <p className="mt-8 text-white/30 text-xs font-bold uppercase tracking-widest">
              No pressure. No jargon. Just a clear roadmap for more enquiries.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
