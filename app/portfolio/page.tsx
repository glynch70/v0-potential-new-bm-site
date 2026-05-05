'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Video, TrendingUp, Users, MapPin, Star, Play, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import VideoProof from '@/components/VideoProof';
import YouTubeEmbed from '@/components/YouTubeEmbed';


export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic"
            >
               Proof Beats Promises. No Fluff.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 md:mb-8 text-4xl md:text-8xl font-black italic uppercase font-bebas leading-[0.9]"
            >
              Real Results That <br />
              <span className="text-brand-yellow">Fill Business Calendars.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white max-w-2xl mx-auto mb-10 md:mb-12 font-medium italic text-lg"
            >
              Real outcomes from local businesses in West Lothian, Edinburgh, and the Central Belt.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="text-white/50 text-[10px] font-black uppercase tracking-widest italic">Let’s look at your business and show you exactly how to generate more enquiries.</p>
              <Link
                href="/contact"
                className="px-10 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl text-center"
              >
                👉 Book a Discovery Call
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 1.1 VIDEO PROOF SECTION */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="On-Site Coverage Mastery"
          stats={[
            { label: "Consistent Enquiries", value: "Daily", icon: <TrendingUp size={20} /> },
            { label: "Local Clients", value: "50+", icon: <Users size={20} /> },
            { label: "Success Rate", value: "100%", icon: <CheckCircle2 size={20} /> },
            { label: "Google Rating", value: "5.0★", icon: <Star size={20} /> }
          ]}
        />

        {/* 3. FEATURED VIDEO CASE STUDY */}
        <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
           <div className="text-center mb-12">
              <h2 className="text-white uppercase italic font-bebas tracking-tight">
                 Video-First <span className="text-brand-yellow">Proof.</span>
              </h2>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-8 items-start">
              <YouTubeEmbed 
                videoId="qrQK-maE3sA" 
                title="Simply Sheds Scotland | Brand Showcase"
                description="30 years of craftsmanship captured in a high-impact cinematic film."
                result="15+ qualified enquiries in week 1."
              />
              <div className="space-y-4">
                 <div className="p-8 rounded-[1.5rem] bg-neutral-900 border border-white/5">
                    <h3 className="text-lg font-black uppercase italic font-bebas tracking-widest text-brand-yellow mb-2">The Challenge</h3>
                    <p className="text-white text-[11px] italic leading-relaxed">"Losing jobs to inferior competitors with better social media."</p>
                 </div>
                 <div className="p-8 rounded-[1.5rem] bg-brand-yellow/10 border border-brand-yellow/20">
                    <h3 className="text-lg font-black uppercase italic font-bebas tracking-widest text-white mb-2">The Outcome</h3>
                    <p className="text-white text-sm font-bold italic leading-relaxed">"The phone hasn't stopped ringing since the video went live."</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. MORE VIDEO OUTCOMES */}
        <section className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
           <div className="max-w-7xl mx-auto">
              <h2 className="mb-12 text-white uppercase italic font-bebas tracking-tight text-center">
                 More Project <span className="text-brand-yellow">Breakdowns.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
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
        <section className="py-32 px-6 max-w-7xl mx-auto">
           <h2 className="mb-12 text-center text-white uppercase italic font-bebas tracking-tight">
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
                 <div key={i} className="aspect-[9/16] bg-neutral-900 rounded-[1.5rem] border border-white/5 overflow-hidden group relative">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-neutral-950/90 backdrop-blur-sm">
                       <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-[10px] mb-2">{item.type}</p>
                       <div className="h-[1px] w-6 bg-brand-yellow/30 mb-3" />
                       <p className="text-white font-black uppercase italic font-bebas tracking-widest text-lg leading-tight">{item.result}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-white/[0.03] text-[5px] px-8 text-center font-black uppercase italic tracking-[0.5em]">
                       {item.action}
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Websites Section – Outcome focused thumbnails */}
        <section className="py-32 px-6 bg-neutral-900/50 border-y border-white/5">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic font-bebas tracking-tight mb-4">Websites</h2>
            <p className="text-white font-medium italic text-lg mb-16">High-performance lead generation systems.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-neutral-950 p-6 rounded-3xl border border-white/10 shadow-2xl hover:border-brand-yellow/30 transition-all group text-left">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-6">
                  <Image src="/work/almond_vet_care.jpg" alt="Web Design West Lothian - Almond Vet Care" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-xl mb-3">Lead Generation Site</h3>
                <p className="text-white text-sm italic">Built to convert traffic into enquiries</p>
              </div>
              <div className="bg-neutral-950 p-6 rounded-3xl border border-white/10 shadow-2xl hover:border-brand-yellow/30 transition-all group text-left">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-6">
                  <Image src="/work/website-3-herb-soul-v2.jpg" alt="Web Design Edinburgh - Herb Soul" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-xl mb-3">Service Business Website</h3>
                <p className="text-white text-sm italic">Clear messaging and strong call-to-actions</p>
              </div>
              <div className="bg-neutral-950 p-6 rounded-3xl border border-white/10 shadow-2xl hover:border-brand-yellow/30 transition-all group text-left">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-6">
                  <Image src="/work/rt-ltd.uk-v2.jpg" alt="Transport Logistics Website - Robertsons Transport" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-xl mb-3">Transport Logistics Site</h3>
                <p className="text-white text-sm italic">Designed for visibility and trust</p>
              </div>
            </div>
            <div className="mt-16">
              <Link href="/web-design" className="inline-flex items-center gap-3 text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg hover:translate-x-1 transition-transform">
                See All Web Projects <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="py-20 px-6 text-center relative overflow-hidden bg-brand-yellow text-neutral-950">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="mb-8 text-neutral-950 text-4xl md:text-6xl font-black italic uppercase font-bebas leading-tight">
                 Want More Enquiries From <br />
                 <span className="underline decoration-neutral-950/20 underline-offset-8">Your Website and Content?</span>
              </h2>
              <p className="text-neutral-950/70 font-bold italic mb-10 max-w-lg mx-auto">
                 We’ll show you exactly what’s working, what’s not, and how to fix it. Let’s look at your business and show you exactly how to generate more enquiries.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-2xl group"
              >
                👉 Book a Discovery Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </Link>
              <p className="mt-8 text-neutral-950/50 text-[10px] font-black uppercase tracking-widest italic">
                 No fluff. No pressure. Spots are limited due to on-site work.
              </p>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
