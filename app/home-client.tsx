'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Video, MousePointer2, Settings, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
          
          {/* Featured Case Study - Full Width */}
          <div className="mb-8 relative rounded-[2rem] overflow-hidden group border border-white/10 hover:border-brand-yellow/50 transition-all">
             <Image src="/work/C&G Work In Progress-Cover.jpg" alt="C&G Developments Work" fill className="object-cover opacity-30 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
             <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 to-transparent" />
             
             <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/10 border border-brand-yellow/20 rounded-full mb-6">
                      <Star className="text-brand-yellow w-4 h-4 fill-brand-yellow" />
                      <span className="text-brand-yellow font-black uppercase tracking-widest text-[10px]">Generated in 90 days</span>
                   </div>
                   <h3 className="text-4xl md:text-6xl font-black italic uppercase font-bebas text-white mb-6 leading-tight">C&G Developments</h3>
                   <p className="text-white/80 text-lg italic mb-8 max-w-lg">
                     Consistent video content increasing visibility and building a powerful local presence, leading to a massive spike in real enquiries.
                   </p>
                   <Link href="/portfolio" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl">
                     View Content <ArrowRight size={14} />
                   </Link>
                </div>
                
                <div className="flex-1 w-full grid grid-cols-2 gap-6">
                   <div className="bg-neutral-950/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Views</p>
                      <p className="text-brand-yellow font-black text-4xl md:text-5xl">129,000+</p>
                   </div>
                   <div className="bg-neutral-950/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Engagements</p>
                      <p className="text-brand-yellow font-black text-4xl md:text-5xl">9,900+</p>
                   </div>
                   <div className="col-span-2 bg-neutral-950/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex justify-between items-center">
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Audience Growth</p>
                      <p className="text-brand-yellow font-black text-2xl">+728%</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

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

      {/* 4. FEATURED VIDEO WORK */}
      <section className="py-32 px-6 bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight text-white mb-4">
              Real Work. Real Content. <span className="text-brand-yellow">Real Results.</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto italic font-medium">
              A selection of recent video content created for real businesses and projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <YouTubeEmbed 
              videoId="mqkQzHs984k" 
              title="Apprentice Joiner"
              label="Construction"
            />
            <YouTubeEmbed 
              videoId="TVxtsn0IP6U" 
              title="Extension Build"
              label="Construction"
            />
            <YouTubeEmbed 
              videoId="39h-dtci7LU" 
              title="Planning Reel"
              label="Construction"
            />
            <YouTubeEmbed 
              videoId="ZzotfyCIwfA" 
              title="Forth Bridges"
              label="Drone"
            />
            <YouTubeEmbed 
              videoId="kGIPg1Rel6Q" 
              title="Harley Bike Follow"
              label="Drone"
            />
            <YouTubeEmbed 
              videoId="OnrHX6udiqg" 
              title="Bear Media Promo Reel"
              label="Client Work"
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
            <div className="p-10 rounded-[2rem] bg-neutral-950 border border-white/10 hover:border-brand-yellow/30 transition-all group flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Video size={28} />
              </div>
              <h4 className="text-xl font-black uppercase italic font-bebas text-white mb-4 tracking-wide">Increase Visibility</h4>
              <p className="text-white/80 text-sm italic leading-relaxed">
                High-impact video content that puts your business in front of the right local customers.
              </p>
            </div>
            
            <div className="p-10 rounded-[2rem] bg-neutral-950 border border-white/10 hover:border-brand-yellow/30 transition-all group flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MousePointer2 size={28} />
              </div>
              <h4 className="text-xl font-black uppercase italic font-bebas text-white mb-4 tracking-wide">Generate Enquiries</h4>
              <p className="text-white/80 text-sm italic leading-relaxed">
                High-performance websites built specifically to convert traffic into qualified leads.
              </p>
            </div>
            
            <div className="p-10 rounded-[2rem] bg-neutral-950 border border-white/10 hover:border-brand-yellow/30 transition-all group flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Settings size={28} />
              </div>
              <h4 className="text-xl font-black uppercase italic font-bebas text-white mb-4 tracking-wide">Save Time & Scale</h4>
              <p className="text-white/80 text-sm italic leading-relaxed">
                A completely done-for-you system that drives growth while you focus on the actual work.
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
