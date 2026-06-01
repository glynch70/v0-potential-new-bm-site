'use client'

import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, XCircle, ArrowRight, Camera, Video, BarChart3, Users, TrendingUp, Star, MapPin } from 'lucide-react';
import Link from 'next/link';
import VideoProof from '@/components/VideoProof';
import Script from 'next/script';

export default function SocialMediaServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-black uppercase tracking-[0.3em] mb-4 text-[13px] md:text-sm md:text-sm animate-pulse italic"
            >
               Likes don't pay the bills. Leads do.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas"
            >
              Stop Being Invisible – Get More <br />
              <span className="text-gold">Enquiries From Your Content.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white max-w-xl mx-auto mb-10 md:mb-12 font-medium italic text-lg"
            >
              Stop the scroll and start the conversation. Professional on-site content systems built for Central Belt growth.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="text-white/85 text-[13px] md:text-sm font-black uppercase tracking-widest italic">Let’s look at your business and show you exactly how to generate more enquiries.</p>
              <Link
                href="/contact"
                className="px-10 py-5 bg-gold text-neutral-950 font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all shadow-xl"
              >
                👉 Book a Discovery Call
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 1.1 VIDEO PROOF SECTION */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="Social Content Authority"
          stats={[
             { label: "Local Reach", value: "45k+", icon: <TrendingUp size={20} /> },
             { label: "Lead Growth", value: "400%", icon: <Users size={20} /> },
             { label: "Client Rating", value: "5.0★", icon: <Star size={20} /> },
             { label: "Local Focus", value: "100%", icon: <MapPin size={20} /> }
          ]}
        />

        {/* 2. SEE IT IN ACTION */}
        <section id="see-it-in-action" className="py-12 md:py-20 px-6 text-center max-w-7xl mx-auto">
           <h2 className="text-4xl md:text-7xl font-black mb-12 uppercase italic font-bebas tracking-tight text-white leading-none">
              See it in <span className="text-gold">Action.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-10 rounded-[2rem] border border-gold/20 bg-gold/[0.02] text-left">
                 <h4 className="text-gold font-black text-8xl mb-3 font-bebas italic tracking-widest leading-none">400%</h4>
                 <p className="text-xl font-black uppercase italic font-bebas text-white mb-3">Increase in Enquiries</p>
                 <p className="text-white text-xs italic leading-relaxed">This was achieved for a West Lothian tradesman in just 90 days. We focus on authority, not vanity.</p>
              </div>
              <div className="grid gap-4">
                 <div className="p-8 rounded-[1.5rem] border border-white/5 bg-white/[0.01]">
                    <h4 className="text-gold font-black text-4xl mb-1 font-bebas italic">50K+</h4>
                    <p className="text-white font-bold uppercase tracking-widest text-[12px] md:text-[13px]">Local Views (Edinburgh Agent)</p>
                 </div>
                 <div className="p-8 rounded-[1.5rem] border border-white/5 bg-white/[0.01]">
                    <h4 className="text-gold font-black text-4xl mb-1 font-bebas italic">12 hrs</h4>
                    <p className="text-white font-bold uppercase tracking-widest text-[12px] md:text-[13px]">Saved Weekly (Fife SME)</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. WHAT RESULTS CAN YOU EXPECT? */}
        <section className="py-12 md:py-20 px-6 bg-neutral-900/30 border-y border-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase italic font-bebas tracking-tight text-white">
                 What Results to <span className="text-gold">Expect?</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                 {[
                   { icon: <TrendingUp className="text-gold" size={24} />, title: "Visibility", desc: "No more ghost towns. Stay top-of-mind every single day." },
                   { icon: <Star className="text-gold" size={24} />, title: "Instant Trust", desc: "Show them the real work. The trust gap vanishes instantly." },
                   { icon: <Users className="text-gold" size={24} />, title: "Enquiries", desc: "We focus on content that fills your calendar with jobs." }
                 ].map((item, i) => (
                    <div key={i} className="p-8 glass-card border-white/5">
                       <div className="mb-6">{item.icon}</div>
                       <h4 className="text-white font-black uppercase italic font-bebas tracking-widest text-lg mb-3">{item.title}</h4>
                       <p className="text-white text-xs italic leading-relaxed">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 8. FAQ & OBJECTION HANDLING */}
        <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase italic font-bebas tracking-tight text-white">
              Common <span className="text-gold">Concerns.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-4">
              {[
                { q: "I've tried social before and it didn't work", a: "Most businesses post without a strategy. We build content systems that drive enquiries." },
                { q: "I don't have time to create content", a: "Our 'While You Work' capture system means we handle 100% of the creation." },
                { q: "I don't know what to post", a: "We do. We plan and edit everything based on what we know works for local audiences." },
                { q: "Do I need to be on camera?", a: "No. We can focus purely on your work, projects, and behind-the-scenes quality." }
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                   <h4 className="text-sm font-black uppercase italic font-bebas tracking-widest text-gold mb-2">{faq.q}</h4>
                   <p className="text-white text-xs italic leading-relaxed">
                      {faq.a} {faq.link && <Link href={faq.link} className="text-gold hover:underline ml-1">View Pricing.</Link>}
                   </p>
                </div>
              ))}
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="py-20 px-6 text-center relative overflow-hidden bg-gold text-neutral-950">
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
                className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all shadow-2xl group"
              >
                👉 Book a Discovery Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </Link>
              <p className="mt-8 text-neutral-950/50 text-[13px] md:text-sm font-black uppercase tracking-widest italic">
                 No fluff. No pressure. Spots are limited due to on-site work.
              </p>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
