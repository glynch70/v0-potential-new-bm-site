'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, BarChart3, HelpCircle } from 'lucide-react'
import Link from 'next/link'

const cinematicEase = [0.16, 1, 0.3, 1]

const packages = [
  {
    name: "Starter System",
    price: "£699",
    period: "/mo",
    desc: "Designed for ambitious local tradespeople wanting consistent profile visibility.",
    features: [
      "1–2 On-Site Capture Days per Month",
      "Posting schedules across 4 local channels",
      "Cinematic Reels / Short-Form Video edits",
      "High-resolution custom brand stills",
      "Hook strategy & scripting support"
    ],
    cta: "Begin Scale",
    popular: false
  },
  {
    name: "Growth Engine",
    price: "£1,200",
    period: "/mo",
    desc: "For local construction groups and established SMEs ready to dominate region feeds.",
    features: [
      "2–3 On-Site Capture Days per Month",
      "Google Business organic SEO tuning",
      "YouTube channel architecture setup",
      "Direct inbound lead conversion strategy",
      "Dedicated creative partner support"
    ],
    cta: "Command Market",
    popular: true
  },
  {
    name: "Enterprise Showroom",
    price: "£1,600",
    period: "/mo",
    desc: "A complete, high-performance visual capture & platform engine.",
    features: [
      "Full monthly video & aerial coverage",
      "Licensed CAA drone flyovers included",
      "Custom React-coded lead-gen showroom",
      "Premium copywriting & storytelling assets",
      "Direct priority scheduling & support"
    ],
    cta: "Launch Showroom",
    popular: false
  }
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0e0c] text-[#E8E0D5] font-inter-tight selection:bg-[#F1B92D] selection:text-[#0f0e0c] overflow-hidden">
        
        {/* 1. HERO SECTION (DARK CINEMATIC) */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden py-32 border-b border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F1B92D]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="w-full px-6 text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
              className="text-[#F1B92D] font-bold uppercase tracking-[0.4em] text-[12px] md:text-[13px] mb-8"
            >
              Fixed Retainers & Transparent Value
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
              className="font-bebas text-white tracking-wide mb-12 leading-[0.95] uppercase"
            >
              INVEST IN REAL <br/>
              <span className="text-white/20">GROWTH OUTCOMES.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="max-w-2xl mx-auto text-[#E8E0D5]/60 font-light text-lg md:text-xl leading-relaxed tracking-wide"
            >
              No monthly retainer handcuffs. No hidden setup bills. Just authentic, cinematic creative growth systems designed to pay for themselves.
            </motion.p>
          </div>
        </section>

        {/* 2. THE PACKAGES (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: idx * 0.15, ease: cinematicEase }}
                  className={`p-12 rounded-sm bg-[#171513]/40 backdrop-blur-xl border flex flex-col justify-between transition-all duration-500 hover:border-[#F1B92D]/20 ${pkg.popular ? 'border-[#F1B92D]/50 shadow-sm relative' : 'border-white/5'}`}
                >
                  <div>
                    {pkg.popular && (
                      <span className="absolute top-6 right-6 px-4 py-1.5 rounded-sm bg-[#F1B92D] text-[#0f0e0c] text-[13px] md:text-sm md:text-[12px] font-bold uppercase tracking-widest">
                        RECOMMENDED
                      </span>
                    )}
                    
                    <h3 className="text-3xl font-bebas tracking-wide text-[#E8E0D5] mb-2 uppercase">{pkg.name}</h3>
                    
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-5xl font-bebas text-[#F1B92D] leading-none">{pkg.price}</span>
                      <span className="text-[#E8E0D5]/85 text-[13px] md:text-sm font-bold uppercase tracking-widest">{pkg.period}</span>
                    </div>
                    
                    <p className="text-xs text-[#E8E0D5]/90 leading-relaxed mb-8 font-light italic">
                      "{pkg.desc}"
                    </p>
                    
                    <ul className="space-y-4 mb-12">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex gap-3 items-start">
                          <CheckCircle2 size={14} className="text-[#F1B92D] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#E8E0D5]/90 leading-relaxed font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full py-5 rounded-sm font-bold uppercase tracking-widest text-[12px] md:text-[13px] transition-all text-center font-inter-tight ${pkg.popular ? 'bg-[#F1B92D] text-[#0f0e0c] hover:bg-white hover:text-black' : 'bg-transparent text-[#E8E0D5] hover:border-[#F1B92D] border border-white/10'}`}
                  >
                    {pkg.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ETHOS: INVESTMENT VS COST (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0f0e0c] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <p className="text-[#F1B92D] font-bold uppercase tracking-[0.3em] text-[12px] md:text-[13px] mb-4">Investment Ethos</p>
                <h2 className="font-bebas text-white tracking-wide uppercase leading-[0.9] mb-8">
                  INVESTMENT <br/><span className="text-white/20">VS COST.</span>
                </h2>
                <p className="text-white/90 font-light text-base md:text-lg leading-relaxed max-w-lg mb-8">
                  We don't count vanity page clicks; we track cold phone calls, quote form submissions, and direct digital trust building. If the system fails to bring back its cost in signed contracts, we consider it a failure.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-[#171513]/40 border border-white/5 rounded-sm">
                    <Zap className="text-[#F1B92D] mb-4" size={20} />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Time Recovered</h4>
                    <p className="text-[13px] md:text-sm text-white/85 leading-relaxed font-light">Stop spending weekend evenings planning social content or fixing outdated page systems.</p>
                  </div>
                  <div className="p-8 bg-[#171513]/40 border border-white/5 rounded-sm">
                    <BarChart3 className="text-[#F1B92D] mb-4" size={20} />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Superior Margin</h4>
                    <p className="text-[13px] md:text-sm text-white/85 leading-relaxed font-light">Presenting dynamic luxury proof lets you demand premium prices for your craftsmanship.</p>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-[#171513]/60 border border-white/5 rounded-sm text-left">
                <h3 className="text-3xl font-bebas tracking-wide text-white mb-6 uppercase">The Scottish Advantage</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-8 font-light italic">
                  "Operating out of Broxburn, West Lothian. No bloated design suites, no remote contractor markup. You deal directly with the hands-on creator executing your system."
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-[#F1B92D]/10 flex items-center justify-center">
                    <ShieldCheck className="text-[#F1B92D]" size={18} />
                  </div>
                  <div>
                    <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-white leading-none mb-1">Fixed Price Guarantee</p>
                    <p className="text-[13px] md:text-sm md:text-[12px] text-white/80 uppercase tracking-widest">No hidden traveling bills or gear fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAQ (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
            <h2 className="mb-24 text-center font-bebas text-[#E8E0D5] tracking-wide uppercase">
              Pricing <span className="text-[#F1B92D]/85">FAQs.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { q: "Is there a minimum contract length?", a: "We operate on straightforward, simple month-to-month retainers. You can scale your system up or down with zero lock-in contracts." },
                { q: "Do you offer tailored package sizes?", a: "Absolutely. Every local trade or SME is distinct. We can balance content creation, web showroom scope, and aerial runs to fit your roadmap." },
                { q: "Are there travel or gear setup fees?", a: "None. All travel across Edinburgh, Fife, West Lothian, and the Central Belt is bundled natively into the monthly agreement." },
                { q: "What's the invoicing schedule?", a: "Automated direct credit or bank transfer billing on the first of each calendar month. Quick, clean, and plain." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-[#171513]/40 p-8 border border-white/5 shadow-sm rounded-sm text-left backdrop-blur-xl">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#F1B92D] mb-3 flex items-center gap-3 font-inter-tight">
                    <HelpCircle size={16} /> {faq.q}
                  </h4>
                  <p className="text-xs text-[#E8E0D5]/90 leading-relaxed font-light">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION (DARK CINEMATIC) */}
        <section className="py-48 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-t border-white/5 text-center flex items-center justify-center overflow-hidden">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 relative z-10 flex flex-col items-center">
            <p className="text-[#F1B92D] font-bold uppercase tracking-[0.4em] text-[12px] md:text-[13px] mb-8 font-inter-tight">Construct Your Roadmap</p>
            <h2 className="font-bebas text-[#E8E0D5] leading-[0.9] mb-12">
              READY TO LAUNCH <br/><span className="text-[#E8E0D5]/25">YOUR SHOWROOM CAMPAIGN?</span>
            </h2>
            <Link
              href="/contact"
              className="relative px-12 py-6 bg-transparent border border-[#E8E0D5]/15 text-[#E8E0D5] font-bold uppercase tracking-[0.25em] text-[12px] md:text-[13px] rounded-sm overflow-hidden group/btn hover:border-[#F1B92D] transition-colors duration-500 inline-block font-inter-tight"
            >
              <div className="absolute inset-0 bg-[#F1B92D] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover/btn:text-[#0f0e0c] transition-colors duration-500">Book Your Discovery Call</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
