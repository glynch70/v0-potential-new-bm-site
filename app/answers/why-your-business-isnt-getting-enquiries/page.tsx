import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, XCircle, MousePointer2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Your Business Isn’t Getting Enquiries Online | Bear Media',
  description: 'Learn the top 3 reasons why your local business website isn\'t generating enquiries and how to fix them for better growth in Scotland.',
};

import Script from 'next/script';

export default function EnquiriesArticlePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why isn't my local business getting enquiries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common reasons include a lack of trust (visual proof), confusing messaging, and the lack of a clear conversion funnel on your website."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema-enquiries"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic">Hard Truths. Real Solutions.</p>
            <h1 className="mb-8 text-white">
               Why You Aren't <br />
              <span className="text-brand-yellow">Getting Enquiries.</span>
            </h1>
            <p className="text-white max-w-2xl mx-auto font-medium italic leading-relaxed text-sm">
               Most business websites in Scotland are just expensive digital brochures. Here is how to turn yours into a lead-gen machine.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
           <div className="prose prose-invert prose-brand max-w-none">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight text-white mb-8">The Invisible Wall.</h2>
              <p className="text-white text-sm leading-relaxed mb-12 italic">
                 You have a great business. You do great work. You've spent thousands on a website. But the phone isn't ringing. Why? In our experience working with businesses in West Lothian and Edinburgh, it usually comes down to three things.
              </p>

              {/* THE 3 REASONS */}
              <div className="space-y-6 my-16">
                 {[
                    { 
                       n: "01", 
                       t: "You're confusing your customers.", 
                       d: "When someone lands on your site, they need to know in 3 seconds: What do you do? How does it help me? How do I buy? If they have to hunt for a contact button, they've already left." 
                    },
                    { 
                       n: "02", 
                       t: "You have zero visual proof.", 
                       d: "In 2026, 'Trust me' isn't a strategy. Customers want to see the project you finished last week. Without video and high-end photo, you are just another faceless name." 
                    },
                    { 
                       n: "03", 
                       t: "Your site is a brochure, not a funnel.", 
                       d: "A website without a clear lead-gen system is an expense. You need targeted messaging, fast speeds, and a frictionless way for local people to enquire." 
                    }
                 ].map((item, i) => (
                    <div key={i} className="p-8 rounded-[1.5rem] bg-neutral-900 border border-white/5 relative overflow-hidden group">
                       <div className="absolute top-4 right-4 text-6xl font-black text-white/[0.03] italic font-bebas">{item.n}</div>
                       <h3 className="text-lg font-black text-brand-yellow uppercase mb-3 italic font-bebas tracking-widest">{item.t}</h3>
                       <p className="text-white text-xs leading-relaxed italic">"{item.d}"</p>
                    </div>
                 ))}
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-tight text-white mt-16 mb-6 text-center">How to Fix It.</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                 <div className="p-8 glass-card border-white/5 bg-neutral-900/50">
                    <h4 className="text-white font-black uppercase italic font-bebas text-lg mb-4">The Amateur Way</h4>
                    <ul className="space-y-4">
                       <li className="flex gap-3 text-white text-[10px] uppercase font-bold italic tracking-widest"><XCircle size={14} className="text-red-500/30 shrink-0" /> Generic stock photos</li>
                       <li className="flex gap-3 text-white text-[10px] uppercase font-bold italic tracking-widest"><XCircle size={14} className="text-red-500/30 shrink-0" /> "Welcome" messaging</li>
                       <li className="flex gap-3 text-white text-[10px] uppercase font-bold italic tracking-widest"><XCircle size={14} className="text-red-500/30 shrink-0" /> Hidden contact forms</li>
                    </ul>
                 </div>
                 <div className="p-8 glass-card border-brand-yellow/10 bg-brand-yellow/[0.01]">
                    <h4 className="text-brand-yellow font-black uppercase italic font-bebas text-lg mb-4">The Bear Media Way</h4>
                    <ul className="space-y-4">
                       <li className="flex gap-3 text-white text-[10px] uppercase font-black italic tracking-widest"><CheckCircle2 size={14} className="text-brand-yellow shrink-0" /> Cinematic on-site proof</li>
                       <li className="flex gap-3 text-white text-[10px] uppercase font-black italic tracking-widest"><CheckCircle2 size={14} className="text-brand-yellow shrink-0" /> Outcome-focused copy</li>
                       <li className="flex gap-3 text-white text-[10px] uppercase font-black italic tracking-widest"><CheckCircle2 size={14} className="text-brand-yellow shrink-0" /> Lead-gen architecture</li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-6 bg-brand-yellow text-neutral-950 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="mb-8 text-neutral-950 leading-tight">
                Ready to get <br /><span className="underline decoration-neutral-950/20 underline-offset-8 italic">seen and get busy?</span>
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
