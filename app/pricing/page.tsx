'use client'

import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, BarChart3, HelpCircle } from 'lucide-react';
import Link from 'next/link';


const packages = [
  {
    name: "Starter",
    price: "£699",
    period: "/mo",
    desc: "Perfect for local businesses wanting consistent visibility.",
    features: [
      "1–2 On-Site Shoots per Month",
      "Posting across 4 channels",
      "Cinematic Reels / TikToks",
      "Professional Photos",
      "Strategy & Scripting"
    ],
    cta: "Start Growing",
    popular: false
  },
  {
    name: "Growth",
    price: "£1,200",
    period: "/mo",
    desc: "For construction companies and local SMEs ready to dominate their local market.",
    features: [
      "2–3 On-Site Shoots per Month",
      "Google Business Optimisation",
      "YouTube Channel Setup",
      "Full Lead-Gen Strategy",
      "Dedicated Content Partner"
    ],
    cta: "Get Dominant",
    popular: true
  },
  {
    name: "Pro",
    price: "£1,600",
    period: "/mo",
    desc: "A complete high-performance content system.",
    features: [
      "Full Content System",
      "Drone, Video & Full Coverage",
      "Everything in Growth",
      "Custom Lead-Gen Architecture",
      "Priority Support"
    ],
    cta: "Go Pro",
    popular: false
  }
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
              {/* HERO SECTION */}
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic"
            >
               Transparent Investment. No Hidden Fees.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 md:mb-8"
            >
               Invest In <span className="text-brand-yellow">Growth.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white max-w-xl mx-auto mb-10 md:mb-12 font-medium italic"
            >
               Stop paying for "activity" and start investing in outcomes. Cinematic content systems built to fill your calendar.
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

        {/* PRICING GRID */}
        <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto">
           <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                 <div key={i} className={`p-8 rounded-[2rem] bg-neutral-900 border flex flex-col transition-all duration-500 hover:translate-y-[-4px] ${pkg.popular ? 'border-brand-yellow shadow-[0_0_40px_rgba(245,166,35,0.1)] z-10' : 'border-white/5 opacity-80 hover:opacity-100'}`}>
                    {pkg.popular && <span className="px-3 py-1 rounded-full bg-brand-yellow text-neutral-950 text-[8px] font-black uppercase tracking-widest self-start mb-4">Most Popular</span>}
                    <h3 className="text-xl font-black mb-1 uppercase italic font-bebas tracking-wide text-white">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                       <span className="text-3xl font-black text-brand-yellow font-bebas italic leading-none">{pkg.price}</span>
                       <span className="text-white text-[10px] font-bold uppercase tracking-widest">{pkg.period}</span>
                    </div>
                    <p className="text-white text-xs leading-relaxed mb-6 flex-grow italic">{pkg.desc}</p>
                    <ul className="space-y-3 mb-8">
                       {pkg.features.map((feature, j) => (
                          <li key={j} className="flex gap-2 items-start">
                             <CheckCircle2 size={14} className="text-brand-yellow shrink-0 mt-0.5" />
                             <span className="text-white text-[11px] font-medium leading-tight">{feature}</span>
                          </li>
                       ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all text-center ${pkg.popular ? 'bg-brand-yellow text-neutral-950 hover:shadow-xl' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
                    >
                       {pkg.cta}
                    </Link>
                 </div>
              ))}
           </div>
        </section>

        {/* INVESTMENT VS COST */}
        <section className="py-12 md:py-20 px-6 bg-white/[0.01] border-y border-white/5">
           <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                 <h2 className="mb-6 text-white">
                    Investment <br /><span className="text-brand-yellow">Vs Cost.</span>
                 </h2>
                 <p className="text-white mb-8 italic text-xs leading-relaxed">
                    Most business owners treat marketing as an expense. We treat it as an employee. If your content doesn't win you back its own cost in new business, we've failed. 
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-neutral-900 border border-white/5">
                       <Zap className="text-brand-yellow mb-3" size={20} />
                       <h4 className="text-white font-black uppercase italic font-bebas tracking-widest text-[10px]">Time Saved</h4>
                    </div>
                    <div className="p-6 rounded-2xl bg-neutral-900 border border-white/5">
                       <BarChart3 className="text-brand-yellow mb-3" size={20} />
                       <h4 className="text-white font-black uppercase italic font-bebas tracking-widest text-[10px]">Higher ROI</h4>
                    </div>
                 </div>
              </div>
              <div className="p-10 rounded-[2rem] bg-neutral-900 border border-white/5 text-left">
                 <h3 className="text-lg font-black mb-4 uppercase italic font-bebas tracking-widest text-white">The Scottish Edge</h3>
                 <p className="text-white text-xs leading-relaxed mb-6 italic">
                    "Based in West Lothian, serving the Central Belt. No fancy London offices. You pay for creation and results, not our overheads."
                 </p>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex items-center justify-center">
                       <ShieldCheck className="text-brand-yellow" size={16} />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-white">Fixed-Fee Guarantee</span>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
           <h2 className="mb-12 text-center text-white">
              Pricing <span className="text-brand-yellow">FAQs.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-4">
              {[
                { q: "Is there a minimum contract?", a: "We offer both one-off projects and month-to-month systems." },
                { q: "Custom packages?", a: "Yes. Every business is different. We mix and match to fit your goals." },
                { q: "Hidden costs?", a: "No. Travel across the Central Belt is included in our fees." },
                { q: "How do we pay?", a: "Automated invoicing. Monthly retainers are simple and direct." }
              ].map((faq, i) => (
                 <div key={i} className="p-6 glass-card border-white/5 text-left">
                    <h4 className="text-[11px] font-black uppercase italic font-bebas tracking-widest text-brand-yellow mb-2 flex items-center gap-2">
                       <HelpCircle size={14} /> {faq.q}
                    </h4>
                    <p className="text-white leading-relaxed text-[11px] italic">{faq.a}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-6 bg-brand-yellow text-neutral-950 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="mb-8 text-neutral-950">
                 Ready to Invest in Growth?
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-105 transition-all shadow-2xl"
              >
                Book Your Discovery Call
                <ArrowRight size={14} />
              </Link>
              <p className="mt-8 text-neutral-950/50 text-[10px] font-black uppercase tracking-widest italic">
                 No pressure. No jargon. Just results.
              </p>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
