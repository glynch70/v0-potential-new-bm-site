'use client'

import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, BarChart3, HelpCircle } from 'lucide-react';
import Link from 'next/link';


const packages = [
  {
    name: "The Starter",
    price: "£500",
    period: "/mo",
    desc: "Perfect for local businesses wanting consistent visibility.",
    features: [
      "1 On-Site Shoot per Month",
      "4 Cinematic Reels / TikToks",
      "8 Professional Photos",
      "Strategy & Scripting",
      "48-Hour Turnaround"
    ],
    cta: "Start Growing",
    popular: false
  },
  {
    name: "The Scale",
    price: "£1,200",
    period: "/mo",
    desc: "For businesses ready to dominate their local market.",
    features: [
      "2 On-Site Shoots per Month",
      "12 Cinematic Reels / TikToks",
      "20 Professional Photos",
      "1 Brand / Authority Film",
      "Full Lead-Gen Strategy",
      "Dedicated Content Partner"
    ],
    cta: "Get Dominant",
    popular: true
  },
  {
    name: "The Web System",
    price: "£1,500",
    period: "From",
    desc: "A high-performance lead generation website.",
    features: [
      "Full Conversion Architecture",
      "On-Site Content Capture Inc.",
      "Local SEO Integration",
      "Lead-Gen Copywriting",
      "Mobile Performance Optimization",
      "3-Month Growth Roadmap"
    ],
    cta: "Build My System",
    popular: false
  }
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic"
            >
               No Fluff. No Hidden Fees.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-9xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas"
            >
               Investment <br /><span className="text-brand-yellow text-stroke-sm">In Growth.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed italic"
            >
               Lead-generation systems designed to win you more high-value work.
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
                Book Your 15-Min Strategy Call
              </Link>
            </motion.div>

            {/* TRUST INDICATORS */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16"
            >
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">FIXED FEE</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">No Hidden Overheads</p>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">LOCAL SERVICE</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Central Belt Coverage</p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* PRICING GRID */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
           <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, i) => (
                 <div key={i} className={`p-10 rounded-[2.5rem] bg-neutral-900 border flex flex-col transition-all duration-500 hover:scale-[1.02] ${pkg.popular ? 'border-brand-yellow/50 shadow-[0_0_60px_rgba(245,166,35,0.1)]' : 'border-white/5'}`}>
                    {pkg.popular && <span className="px-4 py-1.5 rounded-full bg-brand-yellow text-neutral-950 text-[10px] font-black uppercase tracking-widest self-start mb-6">Most Popular</span>}
                    <h3 className="text-2xl font-black mb-2 uppercase italic font-bebas tracking-wide text-white">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                       <span className="text-4xl font-black text-brand-yellow font-bebas italic leading-none">{pkg.price}</span>
                       <span className="text-white/30 text-xs font-bold uppercase tracking-widest">{pkg.period}</span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow italic">"{pkg.desc}"</p>
                    <ul className="space-y-4 mb-12">
                       {pkg.features.map((feature, j) => (
                          <li key={j} className="flex gap-3 items-start">
                             <CheckCircle2 size={16} className="text-brand-yellow shrink-0 mt-0.5" />
                             <span className="text-white/70 text-sm font-medium">{feature}</span>
                          </li>
                       ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all text-center ${pkg.popular ? 'bg-brand-yellow text-neutral-950 hover:shadow-[0_0_40px_rgba(245,166,35,0.3)]' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
                    >
                       {pkg.cta}
                    </Link>
                 </div>
              ))}
           </div>
        </section>

        {/* INVESTMENT VS COST */}
        <section className="py-16 md:py-24 px-6 bg-white/[0.02] border-y border-white/5">
           <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic font-bebas tracking-tight text-white leading-none">
                    Investment <br /><span className="text-brand-yellow">Vs Cost.</span>
                 </h2>
                 <p className="text-lg text-white/50 mb-8 leading-relaxed">
                    Most business owners treat marketing as an expense. At Bear Media, we treat it as an employee. If your content doesn't win you back its own cost in new business, we've failed. 
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 glass-card border-white/5">
                       <Zap className="text-brand-yellow mb-4" />
                       <h4 className="text-white font-black uppercase italic font-bebas tracking-widest text-sm">Time Saved</h4>
                    </div>
                    <div className="p-6 glass-card border-white/5">
                       <BarChart3 className="text-brand-yellow mb-4" />
                       <h4 className="text-white font-black uppercase italic font-bebas tracking-widest text-sm">Higher ROI</h4>
                    </div>
                 </div>
              </div>
              <div className="p-12 rounded-[2.5rem] bg-neutral-900 border border-white/5">
                 <h3 className="text-xl font-black mb-6 uppercase italic font-bebas tracking-widest text-white">The Scottish Edge</h3>
                 <p className="text-white/40 text-sm leading-relaxed mb-6 italic">
                    "We are based in Broxburn, West Lothian. We don't have fancy London offices or account managers. You pay for the creation and the results, not the overheads."
                 </p>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center">
                       <ShieldCheck className="text-brand-yellow" size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Fixed-Fee Guarantee</span>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
              Pricing <span className="text-brand-yellow">FAQs.</span>
           </h2>
           <div className="space-y-6">
              {[
                { q: "Is there a minimum contract?", a: "We offer both one-off projects and month-to-month systems. For long-term growth and best value, our 3-month lead-gen system is the standard recommendation." },
                { q: "Do you offer custom packages?", a: "Yes. Every business is different. We can mix and match services to build a system that fits your specific budget and goals." },
                { q: "Are there any hidden travel costs?", a: "No. Travel across the Central Belt (West Lothian, Edinburgh, Fife) is included in our transparent fixed fees." },
                { q: "How do we pay?", a: "We use simple, automated invoicing. Monthly retainers are billed on the 1st of every month to keep everything clean and simple." }
              ].map((faq, i) => (
                 <div key={i} className="p-8 glass-card border-white/5">
                    <h4 className="text-xl font-black uppercase italic font-bebas tracking-widest text-brand-yellow mb-4 flex items-center gap-3">
                       <HelpCircle size={20} /> {faq.q}
                    </h4>
                    <p className="text-white/50 leading-relaxed text-sm">{faq.a}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 md:py-24 px-6 bg-brand-yellow text-neutral-950 text-center">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase italic font-bebas tracking-tight leading-none">
                 Ready to <br /><span className="underline decoration-neutral-950/20 underline-offset-8">Invest in Growth?</span>
              </h2>
              <p className="text-lg font-medium mb-12 text-neutral-950/70">
                 Book a discovery call and we'll show you exactly which package will deliver the best results for your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-neutral-950 text-white font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(0,0,0,0.5)]"
              >
                Book Your 15-Minute Strategy Call
                <ArrowRight size={16} />
              </Link>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
