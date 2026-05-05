import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, TrendingUp, Wallet, ShieldCheck, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much Does Social Media Content Cost in Scotland? | Bear Media',
  description: 'A transparent guide to social media content pricing in Scotland. Learn about costs for video, photography, and management in West Lothian, Edinburgh, and beyond.',
};

import Script from 'next/script';

export default function PricingArticlePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does social media content cost in Scotland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional social media content in Scotland typically ranges from £500 to £3,000+ per month, depending on the frequency of filming and the level of strategic management required."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic">Transparency First. No Fluff.</p>
            <h1 className="mb-8 text-white">
               How Much Does <br />
              <span className="text-brand-yellow">Content Cost?</span>
            </h1>
            <p className="text-white max-w-2xl mx-auto font-medium italic text-sm">
               An honest look at pricing for content creation and social media management in Scotland.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
           <div className="prose prose-invert prose-brand max-w-none">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight text-white mb-8">The Short Answer.</h2>
              <p className="text-white text-sm leading-relaxed mb-12 italic">
                 In Scotland, professional social media content can range from **£500 to £3,000+ per month**. The gap depends on one thing: **Outcome.** Are you paying for "posts," or a system that generates enquiries? 
              </p>

              {/* PRICING RANGES */}
              <div className="grid md:grid-cols-3 gap-6 my-16">
                 {[
                    { t: "The Basic", p: "£500 - £800", d: ["1-2 Posts Per Week", "Basic Photography", "Simple Captions"] },
                    { t: "The Growth", p: "£1,200 - £1,800", d: ["3-4 Reels Per Week", "On-Site Filming Days", "High-End Editing"] },
                    { t: "The Dominant", p: "£2,500+", d: ["Daily High-End Content", "Full Strategy & Ads", "Total Account Handling"] }
                 ].map((pkg, i) => (
                    <div key={i} className="p-8 rounded-[1.5rem] bg-neutral-900 border border-white/5 flex flex-col">
                       <h4 className="text-brand-yellow font-black uppercase italic font-bebas text-lg mb-2">{pkg.t}</h4>
                       <p className="text-xl font-black text-white mb-4 italic font-bebas tracking-widest">{pkg.p}</p>
                       <ul className="text-[10px] text-white space-y-2 italic font-bold uppercase tracking-widest">
                          {pkg.d.map((item, j) => <li key={j}>• {item}</li>)}
                       </ul>
                    </div>
                 ))}
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-tight text-white mt-16 mb-6 text-center">What affects the cost?</h3>
              <div className="space-y-4 mb-16">
                 {[
                    { t: "Video Frequency", d: "High-quality video takes time to edit. More reels = more time, but also more reach." },
                    { t: "On-Site vs. Remote", d: "Agencies that come to your site cost more because of travel, but the content is 10x more authentic." },
                    { t: "Strategy & Directing", d: "Are you just paying for someone to hold a camera, or someone to tell you what to say?" }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-6 glass-card border-white/5">
                       <CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={16} />
                       <div>
                          <p className="font-black text-white mb-1 uppercase italic font-bebas tracking-widest text-xs">{item.t}</p>
                          <p className="text-white text-[11px] italic">"{item.d}"</p>
                       </div>
                    </div>
                 ))}
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-tight text-white mt-16 mb-6 text-center">Is it worth it?</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                 <div className="p-8 glass-card border-white/5 bg-neutral-900/50">
                    <h4 className="text-white font-black uppercase italic font-bebas text-lg mb-4">The DIY Route</h4>
                    <p className="text-white text-[10px] uppercase font-bold italic tracking-widest leading-relaxed">
                       "It's free, but inconsistent. It makes you look like a hobbyist, not a leader."
                    </p>
                 </div>
                 <div className="p-8 glass-card border-brand-yellow/10 bg-brand-yellow/[0.01]">
                    <h4 className="text-brand-yellow font-black uppercase italic font-bebas text-lg mb-4">The Bear Media Route</h4>
                    <p className="text-white text-[10px] uppercase font-black italic tracking-widest leading-relaxed">
                       "Cinematic quality that builds instant trust. Strategy that focuses purely on getting your phone to ring."
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-6 bg-brand-yellow text-neutral-950 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="mb-8 text-neutral-950 leading-tight">
                 Get Your Own <br /><span className="underline decoration-neutral-950/20 underline-offset-8 italic">Pricing Roadmap.</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-105 transition-all shadow-2xl group"
              >
                Book Your Discovery Call
              </Link>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
