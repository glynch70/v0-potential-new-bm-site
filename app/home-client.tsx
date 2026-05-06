'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Video, MousePointer2, Settings, Star } from 'lucide-react';
import Link from 'next/link';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function HomeContent() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-brand-yellow selection:text-neutral-950 overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-50 grayscale-0 contrast-[1.1] brightness-[1.1]"
          >
            <source src="/media/NEW BM DRONE HERO.mp4" type="video/mp4" />
          </video>
          {/* subtle cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center text-center gap-8 md:gap-10">
          <div className="flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 max-w-5xl text-4xl md:text-5xl lg:text-7xl font-black italic uppercase font-bebas leading-[1.1] tracking-tight"
            >
              We help businesses generate <br className="hidden md:block" />
              <span className="text-brand-yellow">more enquiries</span> through content and websites
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white max-w-2xl mb-8 font-medium leading-relaxed italic text-base md:text-lg opacity-90"
            >
              We work with construction, local businesses and growing brands across Scotland to turn visibility into real enquiries.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-10"
            >
              <Star className="text-brand-yellow w-4 h-4 fill-brand-yellow" />
              <p className="text-white/90 font-bold italic text-xs tracking-wide">
                129,000+ views generated in 90 days for a local construction business
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 sm:items-center justify-center w-full"
          >
            <Link
              href="/contact"
              className="px-8 md:px-10 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl text-center md:w-max"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/portfolio"
              className="px-8 md:px-10 py-5 bg-white/5 backdrop-blur-sm text-white border border-white/10 font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-white/10 hover:text-white transition-all text-center md:w-max"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="py-12 bg-neutral-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-white/40 text-center font-black text-[10px] uppercase tracking-widest mb-8">Trusted by local businesses across Scotland</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Using text logos for now until we have image assets */}
             <span className="font-bebas text-2xl italic tracking-wider">C&G Developments</span>
             <span className="font-bebas text-2xl italic tracking-wider">Seamus Corry</span>
             <span className="font-bebas text-2xl italic tracking-wider">Simply Sheds</span>
             <span className="font-bebas text-2xl italic tracking-wider">Lewis Joinery</span>
             <span className="font-bebas text-2xl italic tracking-wider">Almond Vet Care</span>
          </div>
        </div>
      </section>

      {/* 3. RESULTS SECTION (KEY SECTION) */}
      <section className="py-32 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight text-white mb-4">
              Real Results From <span className="text-brand-yellow">Real Clients</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-neutral-950 border border-white/10 rounded-[2rem] p-10 hover:border-brand-yellow/30 transition-all group flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-full pointer-events-none group-hover:bg-brand-yellow/10 transition-colors" />
              <h3 className="text-2xl font-black italic uppercase font-bebas text-white mb-6">C&G Developments</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Views</span>
                  <span className="text-brand-yellow font-black">129,000+</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Engagements</span>
                  <span className="text-brand-yellow font-black">9,900+</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Growth</span>
                  <span className="text-brand-yellow font-black">+728%</span>
                </div>
              </div>
              <p className="text-white/80 text-sm italic mb-8 flex-grow">
                Consistent video content increasing visibility and enquiries.
              </p>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase tracking-widest text-[10px] hover:translate-x-1 transition-transform mt-auto">
                View Content <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-950 border border-white/10 rounded-[2rem] p-10 hover:border-brand-yellow/30 transition-all group flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-full pointer-events-none group-hover:bg-brand-yellow/10 transition-colors" />
              <h3 className="text-2xl font-black italic uppercase font-bebas text-white mb-6">Seamus Corry</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Videos Created</span>
                  <span className="text-brand-yellow font-black">117+</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Views</span>
                  <span className="text-brand-yellow font-black">11,000+</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Shares</span>
                  <span className="text-brand-yellow font-black">350+</span>
                </div>
              </div>
              <p className="text-white/80 text-sm italic mb-8 flex-grow">
                Building long-term authority through consistent content.
              </p>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase tracking-widest text-[10px] hover:translate-x-1 transition-transform mt-auto">
                View Channel <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-950 border border-white/10 rounded-[2rem] p-10 hover:border-brand-yellow/30 transition-all group flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-full pointer-events-none group-hover:bg-brand-yellow/10 transition-colors" />
              <h3 className="text-2xl font-black italic uppercase font-bebas text-white mb-6 leading-tight">Multi-Industry Experience</h3>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 mb-8">
                <p className="text-white/90 font-bold italic text-sm text-center">
                  "Content across construction, coaching and local businesses."
                </p>
              </div>
              <p className="text-white/80 text-sm italic mb-8 flex-grow">
                Proven systems that work across different industries.
              </p>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase tracking-widest text-[10px] hover:translate-x-1 transition-transform mt-auto">
                See How We Do It <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED WORK (VIDEO FIRST) */}
      <section className="py-32 px-6 bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight text-white mb-4">
              See The Work. <span className="text-brand-yellow">See The Results.</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto italic font-medium">
              We specialise in high-converting content for construction and real local businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <YouTubeEmbed 
              videoId="qrQK-maE3sA" 
              title="Simply Sheds Scotland"
              description="Consistent content for a local Scottish family business."
              result="15+ qualified leads in first 14 days."
            />
            <YouTubeEmbed 
              videoId="VlyX1CueJCc" 
              title="St Andrews Refurb"
              description="High-quality video walkthrough of a restaurant refurb."
              result="Full booking calendar for opening week."
            />
            <YouTubeEmbed 
              videoId="qMms2m8oWd4" 
              title="Construction Site Update"
              description="On-site video documenting progress and building trust."
              result="Increased engagement and brand authority."
            />
            <YouTubeEmbed 
              videoId="OawT8r13H-8" 
              title="Local Business Promo"
              description="Fast-paced promotional content for social media."
              result="Higher local visibility and reach."
            />
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="py-32 px-6 bg-neutral-900/30 border-y border-white/5 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight text-white mb-16">
             How We <span className="text-brand-yellow">Help</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2rem] bg-neutral-950 border border-white/10 hover:border-brand-yellow/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Video size={28} />
              </div>
              <h4 className="text-xl font-black uppercase italic font-bebas text-white mb-4 tracking-wide">Content Creation</h4>
              <p className="text-white/80 text-sm italic leading-relaxed">
                Video and social content designed to increase visibility and build local authority.
              </p>
            </div>
            
            <div className="p-10 rounded-[2rem] bg-neutral-950 border border-white/10 hover:border-brand-yellow/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MousePointer2 size={28} />
              </div>
              <h4 className="text-xl font-black uppercase italic font-bebas text-white mb-4 tracking-wide">Website Design</h4>
              <p className="text-white/80 text-sm italic leading-relaxed">
                Websites built to convert visitors into enquiries, tailored for trades and local businesses.
              </p>
            </div>
            
            <div className="p-10 rounded-[2rem] bg-neutral-950 border border-white/10 hover:border-brand-yellow/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Settings size={28} />
              </div>
              <h4 className="text-xl font-black uppercase italic font-bebas text-white mb-4 tracking-wide">Strategy & Support</h4>
              <p className="text-white/80 text-sm italic leading-relaxed">
                We plan, create and manage content so you don’t have to. A completely done-for-you system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight text-white mb-4">
                Why Businesses Work <br className="hidden md:block" />
                <span className="text-brand-yellow">With Bear Media</span>
             </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
             {[
               { title: "We understand your business", desc: "We take the time to learn exactly what you do and who your best customers are before we pick up a camera." },
               { title: "Content that reflects real work", desc: "No generic templates or forced trends. We capture what you actually do on-site." },
               { title: "Focus on results, not aesthetics", desc: "A pretty video is useless if it doesn't bring in business. Everything we make is designed to convert." },
               { title: "Long-term partnerships", desc: "We don't just drop off a video and leave. We build ongoing systems that keep your pipeline full." }
             ].map((item, i) => (
               <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow text-neutral-950 flex items-center justify-center shrink-0 font-black italic text-lg shadow-lg">
                    {i + 1}
                  </div>
                  <div className="pt-2">
                     <h3 className="font-black text-xl uppercase italic font-bebas leading-tight mb-2 tracking-wide text-white">{item.title}</h3>
                     <p className="text-white/70 text-sm leading-relaxed italic">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden bg-brand-yellow text-neutral-950">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
         <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <h2 className="mb-10 text-neutral-950 text-4xl md:text-6xl font-black italic uppercase font-bebas leading-[1.1] tracking-tight">
               Let's grow your <br />
               <span className="underline decoration-neutral-950/20 underline-offset-8">visibility and enquiries</span>
            </h2>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-neutral-950 text-white font-black uppercase tracking-widest text-[13px] rounded-xl hover:scale-105 transition-all shadow-2xl group w-full sm:w-auto"
            >
              Book a Discovery Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
