'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Video, TrendingUp, Users, MapPin, Star, Play, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import VideoProof from '@/components/VideoProof';
import YouTubeEmbed from '@/components/YouTubeEmbed';


export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 px-6 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic"
            >
               Proof is better than promises.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas"
            >
              Results That <br />
              <span className="text-brand-yellow text-stroke-sm">Fill Calendars.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed italic"
            >
              Real outcomes from local businesses in West Lothian, Edinburgh, and Fife.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
            >
              <Link
                href="/contact"
                className="px-10 py-5 md:px-12 md:py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(245,166,35,0.2)]"
              >
                Get Your Growth Roadmap
              </Link>
            </motion.div>

            {/* TRUST BAR UNDER HERO */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16"
            >
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex gap-1 text-brand-yellow mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">5.0 Google Rating</p>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">1M+ LOCAL VIEWS</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Generated for Clients</p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* 1.1 VIDEO PROOF SECTION */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="On-Site Coverage Mastery"
          stats={[
            { label: "Reach Generated", value: "1M+", icon: <TrendingUp size={24} /> },
            { label: "Local Clients", value: "50+", icon: <Users size={24} /> },
            { label: "Success Rate", value: "100%", icon: <CheckCircle2 size={24} /> },
            { label: "Google Rating", value: "5.0★", icon: <Star size={24} /> }
          ]}
        />

        {/* 3. FEATURED VIDEO CASE STUDY */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
           <div className="text-center mb-16">
              <span className="text-brand-yellow font-black uppercase tracking-[0.2em] text-xs mb-4 block">Featured Outcome</span>
              <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Video-First <span className="text-brand-yellow">Proof.</span>
              </h2>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-16 items-start">
              <YouTubeEmbed 
                videoId="qrQK-maE3sA" 
                title="Simply Sheds Scotland | Brand Showcase"
                description="30 years of craftsmanship captured in a high-impact cinematic film. Designed to establish immediate authority for a local family business."
                result="15+ qualified enquiries in week 1."
              />
              <div className="space-y-12">
                 <div className="p-10 rounded-[3rem] bg-neutral-900 border border-white/5">
                    <h3 className="text-2xl font-black uppercase italic font-bebas tracking-wide text-brand-yellow mb-4">The Challenge</h3>
                    <p className="text-white/50 leading-relaxed font-medium">A legendary local reputation but zero online presence. Losing jobs to inferior competitors with better social media.</p>
                 </div>
                 <div className="p-10 rounded-[3rem] bg-brand-yellow/10 border border-brand-yellow/30">
                    <h3 className="text-2xl font-black uppercase italic font-bebas tracking-wide text-white mb-4">The Outcome</h3>
                    <p className="text-white/80 leading-relaxed font-bold">"Bear Media made us look like the market leaders we actually are. The phone hasn't stopped ringing since the video went live."</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. MORE VIDEO OUTCOMES */}
        <section className="py-16 md:py-24 px-6 bg-white/[0.02] border-y border-white/5">
           <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
                 More Project <span className="text-brand-yellow text-stroke-sm">Breakdowns.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                 <YouTubeEmbed 
                    videoId="VlyX1CueJCc" 
                    title="Seafood Restaurant Refurb | St Andrews"
                    description="Highlighting the transformation and craft of a high-end restaurant refurbishment."
                    result="Generated massive opening-week hype and bookings."
                 />
                 <YouTubeEmbed 
                    videoId="_5ez-K2wvxw" 
                    title="Forth Coast Veterinary | Service Proof"
                    description="Professional showcase for a new veterinary practice in the Central Belt."
                    result="Established instant trust for a new local practice."
                 />
              </div>
           </div>
        </section>

        {/* 5. THE RESULTS GRID */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
              The <span className="text-brand-yellow">Results Grid.</span>
           </h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { type: "Joinery | W. Lothian", action: "Cinematic Capture", result: "15+ Enquiries" },
                { type: "Agent | Edinburgh", action: "Drone Tour", result: "4 Listings Won" },
                { type: "Roofing | Fife", action: "Drone Proof", result: "Instant Trust" },
                { type: "Garden | Edinburgh", action: "Project Story", result: "High-Value Lead" },
                { type: "Service | Central Belt", action: "Authority Reel", result: "25k Reach" },
                { type: "Kitchens | Stirling", action: "Walkthrough", result: "Enquiry Boost" },
                { type: "Builder | Livingston", action: "Project Proof", result: "Closed Job" },
                { type: "Architect | Glasgow", action: "Brand Story", result: "Authority Win" }
              ].map((item, i) => (
                 <div key={i} className="aspect-[9/16] bg-neutral-900 rounded-3xl border border-white/5 overflow-hidden group relative">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-neutral-950/80">
                       <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg mb-2">{item.type}</p>
                       <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">{item.action}</p>
                       <div className="h-[1px] w-8 bg-brand-yellow/30 mb-4" />
                       <p className="text-white font-black uppercase italic font-bebas tracking-widest text-xl">{item.result}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-white/[0.03] text-[8px] px-8 text-center font-black uppercase italic tracking-widest">
                       {item.action}
                    </div>
                    <div className="absolute bottom-4 left-4 group-hover:hidden transition-all">
                       <Play size={16} className="text-brand-yellow opacity-50" />
                    </div>
                 </div>
              ))}
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
