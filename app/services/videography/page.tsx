'use client'

import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Video, Camera, Play, Users, MapPin, BarChart3, HelpCircle, TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';
import VideoProof from '@/components/VideoProof';
import Script from 'next/script';

export default function VideographyServicePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is professional video important for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional video builds trust and authority faster than any other medium. It allows potential customers to see the quality of your work and the face behind the business, which is critical for conversion."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical filming session take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most on-site filming sessions for local businesses in the Central Belt take between 2 to 4 hours. We aim for minimal disruption to your daily operations."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema-video"
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
               Stop being the best kept secret.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 md:mb-8 text-4xl md:text-8xl font-black italic uppercase font-bebas leading-[0.9]"
            >
              Professional Video That <br />
              <span className="text-brand-yellow">Builds Trust and Drives Action.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white max-w-xl mx-auto mb-10 md:mb-12 font-medium italic text-lg"
            >
              We visit your site, film your work, and turn it into a lead generation engine. Professional cinematic authority for local businesses.
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
          title="On-Site Authority Proof"
          stats={[
             { label: "Reach Generated", value: "50k+", icon: <TrendingUp size={20} /> },
             { label: "New Enquiries", value: "15+", icon: <Users size={20} /> },
             { label: "Client Rating", value: "5.0★", icon: <Star size={20} /> },
             { label: "Local Impact", value: "100%", icon: <MapPin size={20} /> }
          ]}
        />

        {/* 2. SEE IT IN ACTION */}
        <section id="see-it-in-action" className="py-12 md:py-20 px-6 text-center max-w-7xl mx-auto">
           <h2 className="mb-12 text-white text-4xl md:text-7xl font-black italic uppercase font-bebas">
              See it in <span className="text-brand-yellow">Action.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-8 items-center text-left">
              <div className="p-10 rounded-[2rem] border border-brand-yellow/20 bg-brand-yellow/[0.02]">
                 <h4 className="text-brand-yellow font-black text-8xl mb-3 font-bebas italic tracking-widest leading-none">50K+</h4>
                 <p className="text-xl font-black uppercase italic font-bebas text-white mb-3">Targeted Local Views</p>
                 <p className="text-white text-xs italic leading-relaxed">Our cinematic tours don't just sit there—they get seen by the people who actually buy from you.</p>
              </div>
              <div className="grid gap-4">
                 <div className="p-8 rounded-[1.5rem] border border-white/5 bg-white/[0.01]">
                    <h4 className="text-brand-yellow font-black text-4xl mb-1 font-bebas italic tracking-widest">3X</h4>
                    <p className="text-white font-bold uppercase tracking-widest text-[9px]">Trust Growth (W. Lothian Trades)</p>
                 </div>
                 <div className="p-8 rounded-[1.5rem] border border-white/5 bg-white/[0.01]">
                    <h4 className="text-brand-yellow font-black text-4xl mb-1 font-bebas italic tracking-widest">Sell Faster</h4>
                    <p className="text-white font-bold uppercase tracking-widest text-[9px]">Edinburgh Property Agents</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. WHAT RESULTS CAN YOU EXPECT? */}
        <section className="py-12 md:py-20 px-6 bg-neutral-900/30 border-y border-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="mb-12 text-white text-4xl md:text-5xl font-black italic uppercase font-bebas">
                 What Results to <span className="text-brand-yellow">Expect?</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                 {[
                   { icon: <TrendingUp className="text-brand-yellow" size={24} />, title: "Authority", desc: "Instantly look like the local leader. Justify premium pricing." },
                   { icon: <Star className="text-brand-yellow" size={24} />, title: "More Listings", desc: "Win more valuation calls and faster property sales." },
                   { icon: <Users className="text-brand-yellow" size={24} />, title: "Enquiries", desc: "We turn views into high-value discovery calls." }
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

        {/* 4. BUSINESS SERVICES */}
        <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
           <h2 className="mb-12 text-center text-white text-4xl md:text-6xl font-black italic uppercase font-bebas">
              Strategic <span className="text-brand-yellow">Video.</span>
           </h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Video size={32} />, title: "Social Discovery", desc: "Short Reels designed to put you in front of local customers." },
                { icon: <Camera size={32} />, title: "Property Tours", desc: "Cinematic films that win more listings in Edinburgh." },
                { icon: <Play size={32} />, title: "Brand Stories", desc: "Tell your story, build trust, and justify your prices." },
                { icon: <CheckCircle2 size={32} />, title: "Project Proof", desc: "On-site videos for trades that show the real quality." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-neutral-900 border border-white/5 group">
                   <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                   </div>
                   <h3 className="text-xl font-black mb-3 uppercase italic font-bebas tracking-wide text-white group-hover:text-brand-yellow transition-colors">{item.title}</h3>
                   <p className="text-white leading-relaxed text-xs italic">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto text-center border-t border-white/5">
           <h2 className="mb-12 text-white text-4xl md:text-5xl font-black italic uppercase font-bebas">
              How It <span className="text-brand-yellow">Works.</span>
           </h2>
           <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { step: "01", title: "Site Visit", desc: "We visit your project in the Central Belt to capture the work." },
                { step: "02", title: "Capture", desc: "Drone shots to detailed close-ups. We handle everything." },
                { step: "03", title: "Delivery", desc: "Branded, ready-to-use content that starts winning you clients." }
              ].map((item, i) => (
                <div key={i} className="p-8 glass-card border-white/5 relative overflow-hidden group">
                   <div className="absolute -top-4 -right-4 text-7xl font-black text-white italic font-bebas group-hover:text-brand-yellow/20 transition-colors">{item.step}</div>
                   <h3 className="text-xl font-black mb-3 uppercase italic font-bebas tracking-wide text-brand-yellow">{item.title}</h3>
                   <p className="text-white text-xs italic leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 8. FAQ & OBJECTION HANDLING */}
        <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto border-t border-white/5">
           <h2 className="mb-12 text-center text-white text-4xl md:text-5xl font-black italic uppercase font-bebas">
              Common <span className="text-brand-yellow">Concerns.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-4">
              {[
                { q: "Need to be on camera?", a: "No. We can focus purely on your work, your team's process, or finished projects." },
                { q: "How long to film?", a: "Most local shoots take between 2 to 4 hours. Minimal disruption to your day." },
                { q: "What's the cost?", a: "Transparent fixed-fee pricing. One-off projects from £750.", link: "/pricing" },
                { q: "Actually get leads?", a: "Video is the fastest way to build trust. Trust is the fastest way to get enquiries." }
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
