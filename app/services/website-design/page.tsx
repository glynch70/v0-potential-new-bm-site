'use client'

import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, XCircle, ArrowRight, Layout, PenTool, Rocket, Headphones, ShieldCheck, Globe, Zap, MousePointer2, TrendingUp, Users, Star, MapPin } from 'lucide-react';
import Link from 'next/link';
import VideoProof from '@/components/VideoProof';
import Script from 'next/script';

export default function WebsiteDesignServicePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes a good lead generation website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good lead-gen site focuses on clear messaging, visual proof (like video), and frictionless conversion paths that make it easy for local customers to enquire."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most of our website projects are launched within 4 to 6 weeks, including content capture, design, and local SEO optimization."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
               Stop wasting money on digital brochures.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 md:mb-8 text-4xl md:text-8xl font-black italic uppercase font-bebas leading-[0.9]"
            >
              Turn Your Website Into a <br />
              <span className="text-brand-yellow">Lead-Generating Machine.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white max-w-xl mx-auto mb-10 md:mb-12 font-medium italic text-lg"
            >
              We build high-performance lead generation systems for trades and local businesses in West Lothian & Edinburgh.
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
                className="px-10 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl"
              >
                👉 Book a Discovery Call
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 1.1 VIDEO PROOF SECTION */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="Lead-Gen System Authority"
          stats={[
             { label: "Reach Generated", value: "25k+", icon: <TrendingUp size={20} /> },
             { label: "New Leads", value: "20+", icon: <Users size={20} /> },
             { label: "Client Rating", value: "5.0★", icon: <Star size={20} /> },
             { label: "Local Focus", value: "100%", icon: <MapPin size={20} /> }
          ]}
        />

        {/* 2. SEE IT IN ACTION - BUSINESS IMPACT */}
        <section id="see-it-in-action" className="py-12 md:py-20 px-6 text-center max-w-7xl mx-auto">
           <h2 className="mb-12 text-white text-4xl md:text-7xl font-black italic uppercase font-bebas">
              See it in <span className="text-brand-yellow">Action.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-8 items-center mb-16 text-left">
              <div className="space-y-6">
                 <div className="p-8 rounded-[1.5rem] bg-neutral-900 border border-white/5">
                    <h3 className="text-white font-black uppercase italic font-bebas tracking-widest text-lg mb-4">Before: Digital Brochure</h3>
                    <ul className="space-y-2 text-white text-xs italic">
                       <li>❌ Slow loading & confusing navigation</li>
                       <li>❌ No clear way to book or enquire</li>
                       <li>❌ Generic stock photos & jargon</li>
                    </ul>
                 </div>
                 <div className="p-8 rounded-[1.5rem] bg-neutral-900 border border-brand-yellow/30 shadow-[0_0_50px_rgba(245,166,35,0.05)]">
                    <h3 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg mb-4">After: Enquiry Machine</h3>
                    <ul className="space-y-2 text-white text-xs font-medium italic">
                       <li>✅ Built-in video proof & authority</li>
                       <li>✅ Frictionless "Book a Call" triggers</li>
                       <li>✅ Local SEO signals for Central Belt</li>
                    </ul>
                 </div>
              </div>
              <div className="p-10 rounded-[2rem] border border-brand-yellow/20 bg-brand-yellow/[0.02] h-full flex flex-col justify-center">
                 <h4 className="text-brand-yellow font-black text-8xl mb-3 font-bebas italic tracking-widest leading-none">15+</h4>
                 <p className="text-xl font-black uppercase italic font-bebas text-white mb-3">Enquiries in Week 1</p>
                 <p className="text-white text-xs italic leading-relaxed">The real-world impact of switching from a passive website to a conversion-led system. Built for a West Lothian joinery firm.</p>
              </div>
           </div>
        </section>

        {/* 3. WHAT RESULTS CAN YOU EXPECT? */}
        <section className="py-12 md:py-20 px-6 bg-neutral-900/30 border-y border-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="mb-12 text-white text-3xl md:text-5xl font-black italic uppercase font-bebas">
                 What Results to <span className="text-brand-yellow">Expect?</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                 {[
                   { icon: <MousePointer2 className="text-brand-yellow" size={24} />, title: "Qualified Leads", desc: "We don't count visitors. We count enquiries." },
                   { icon: <Star className="text-brand-yellow" size={24} />, title: "Instant Authority", desc: "Look more professional than your biggest competitor." },
                   { icon: <TrendingUp className="text-brand-yellow" size={24} />, title: "Automation", desc: "Your website fills your calendar on autopilot." }
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
        <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto border-t border-white/5">
           <h2 className="mb-12 text-center text-white text-4xl md:text-5xl font-black italic uppercase font-bebas">
              Common <span className="text-brand-yellow">Concerns.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-4">
              {[
                { q: "What does it cost?", a: "Transparent project pricing tailored for local businesses.", link: "/pricing" },
                { q: "I already have a website", a: "Is it bringing in leads? Most 'websites' are just digital brochures. We build lead-generation systems." },
                { q: "How long to build?", a: "Typically 4 to 6 weeks from start to launch. You'll see results within weeks." },
                { q: "Do I need to write copy?", a: "No. We handle messaging, photos, and video to ensure conversions." }
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                   <h4 className="text-sm font-black uppercase italic font-bebas tracking-widest text-brand-yellow mb-2">{faq.q}</h4>
                   <p className="text-white text-xs italic leading-relaxed">
                      {faq.a} {faq.link && <Link href={faq.link} className="text-brand-yellow hover:underline ml-1">View Pricing.</Link>}
                   </p>
                </div>
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
