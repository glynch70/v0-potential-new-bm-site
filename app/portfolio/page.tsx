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
              We work with construction companies, trades businesses and SMEs that want to grow, not just post content. We focus on generating real enquiries, not vanity metrics.
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

        {/* LOGO MARQUEE */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}} />
        <div className="py-8 border-y border-white/5 bg-neutral-900/30 overflow-hidden relative flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10" />
          <div className="flex whitespace-nowrap animate-marquee items-center gap-16 px-8 text-white/20 font-black uppercase italic font-bebas tracking-widest text-xl md:text-2xl w-[200%]">
             <span>Almond Vet Care</span><span className="text-brand-yellow/40">•</span>
             <span>Robertsons Transport</span><span className="text-brand-yellow/40">•</span>
             <span>K Lewis Joinery</span><span className="text-brand-yellow/40">•</span>
             <span>Managing What Matters</span><span className="text-brand-yellow/40">•</span>
             <span>Herb & Soul</span><span className="text-brand-yellow/40">•</span>
             <span>The Free Spirit</span><span className="text-brand-yellow/40">•</span>
             <span>Seamus Corry</span><span className="text-brand-yellow/40">•</span>
             <span>Voice2Lead</span><span className="text-brand-yellow/40">•</span>
             {/* Duplicate for infinite effect */}
             <span>Almond Vet Care</span><span className="text-brand-yellow/40">•</span>
             <span>Robertsons Transport</span><span className="text-brand-yellow/40">•</span>
             <span>K Lewis Joinery</span><span className="text-brand-yellow/40">•</span>
             <span>Managing What Matters</span><span className="text-brand-yellow/40">•</span>
             <span>Herb & Soul</span><span className="text-brand-yellow/40">•</span>
             <span>The Free Spirit</span><span className="text-brand-yellow/40">•</span>
             <span>Seamus Corry</span><span className="text-brand-yellow/40">•</span>
             <span>Voice2Lead</span><span className="text-brand-yellow/40">•</span>
          </div>
        </div>

        {/* MAIN PORTFOLIO GRID */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
           <div className="text-center mb-20">
              <h2 className="mb-6 text-white text-4xl md:text-6xl uppercase italic font-bebas tracking-tight">
                 Trusted By Businesses <br/><span className="text-brand-yellow">Across Scotland</span>
              </h2>
              <p className="text-white/60 font-medium italic text-lg max-w-2xl mx-auto">
                 Real client projects across web design, content creation, branding, social media and digital marketing.
              </p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Almond Vet Care",
                  category: "Healthcare / Veterinary",
                  image: "/work/almond_vet_care.jpg",
                  slug: "/portfolio/almond-vet-care",
                  services: ["Website Design", "SEO", "Content Creation", "Branding"],
                  comingSoon: false
                },
                {
                  name: "Robertsons Transport",
                  category: "Haulage and Transport Logistics",
                  image: "/work/rt-ltd.uk-v2.jpg",
                  slug: "/portfolio/robertsons-transport",
                  services: ["Website Design", "Branding", "Digital Presence", "SEO"],
                  comingSoon: false
                },
                {
                  name: "K Lewis Joinery",
                  category: "Joinery / Trades",
                  image: "/work/website-5-lewis-joinery-v2.jpg",
                  slug: "/portfolio/k-lewis-joinery",
                  services: ["Website Design", "SEO", "Content Creation"],
                  comingSoon: false
                },
                {
                  name: "Managing What Matters",
                  category: "Coaching / Leadership",
                  image: "/work/website-managing-v2.jpg",
                  slug: "/portfolio/managing-what-matters",
                  services: ["Website Design", "Branding", "Digital Presence"],
                  comingSoon: false
                },
                {
                  name: "Herb & Soul",
                  category: "Wellness / Lifestyle",
                  image: "/work/website-3-herb-soul-v2.jpg",
                  slug: "/portfolio/herb-and-soul",
                  services: ["Website Design", "Brand Identity", "Creative Direction"],
                  comingSoon: true
                },
                {
                  name: "The Free Spirit",
                  category: "Lifestyle / Creative Brand",
                  image: "/work/content-creation.png",
                  slug: "/portfolio/the-free-spirit",
                  services: ["Website Design", "Creative Branding", "Content Creation"],
                  comingSoon: false
                },
                {
                  name: "Seamus Corry",
                  category: "Personal Brand / Coaching",
                  image: "/work/seamus_v5_final.jpg",
                  slug: "/portfolio/seamus-corry",
                  services: ["Website Redesign", "Personal Branding", "Content Strategy"],
                  comingSoon: true
                },
                {
                  name: "Voice2Lead",
                  category: "Leadership / Coaching",
                  image: "/work/mwm.jpg",
                  slug: "/portfolio/voice2lead",
                  services: ["Website Design", "Professional Branding", "Digital Presence"],
                  comingSoon: false
                }
              ].map((item, i) => (
                 <Link key={i} href={item.comingSoon ? "#" : item.slug} className={`group relative block aspect-[4/5] bg-neutral-900 rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(245,166,35,0.1)] hover:border-brand-yellow/30 ${item.comingSoon ? "cursor-default" : "cursor-pointer"}`}>
                    <Image src={item.image} alt={item.name} fill className={`object-cover transition-transform duration-700 ${item.comingSoon ? "opacity-40 grayscale" : "opacity-60 group-hover:opacity-80 group-hover:scale-105"}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                       <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow font-black uppercase tracking-widest text-[10px] rounded-full mb-4">
                             {item.category}
                          </span>
                          <h3 className="text-3xl font-black uppercase italic font-bebas text-white mb-2 leading-tight">
                             {item.name}
                          </h3>
                       </div>
                       
                       <div className="space-y-2 mb-6">
                          {item.services.map((service, idx) => (
                             <div key={idx} className="flex items-center gap-2">
                                <CheckCircle2 size={12} className="text-brand-yellow flex-shrink-0" />
                                <span className="text-white/80 text-xs italic font-medium">{service}</span>
                             </div>
                          ))}
                       </div>
                       
                       {item.comingSoon ? (
                          <div className="mt-auto pt-4 border-t border-white/10">
                             <span className="inline-flex items-center justify-center w-full py-3 bg-white/5 text-white/50 font-black uppercase tracking-widest text-[10px] rounded-xl">
                                Coming Soon
                             </span>
                          </div>
                       ) : (
                          <div className="mt-auto pt-4 border-t border-white/10">
                             <span className="inline-flex items-center justify-between w-full py-3 text-brand-yellow font-black uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform">
                                View Case Study <ArrowRight size={14} />
                             </span>
                          </div>
                       )}
                    </div>
                 </Link>
              ))}
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
