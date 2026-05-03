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

export default function EnquiriesArticlePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden border-b border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-6 text-sm">Hard Truths</p>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas">
               Why You Aren't <br />
              <span className="text-brand-yellow underline decoration-brand-yellow/20 underline-offset-8">Getting Enquiries.</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-medium italic leading-relaxed">
               Most business websites in Scotland are just expensive digital brochures. Here is how to turn yours into a lead-gen machine.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <div className="prose prose-invert prose-brand max-w-none">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight text-white mb-8">The Invisible Wall.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                 You have a great business. You do great work. You've spent thousands on a website. But the phone isn't ringing. Why? In our experience working with businesses in **West Lothian** and **Edinburgh**, it usually comes down to three things.
              </p>

              {/* THE 3 REASONS */}
              <div className="space-y-12 my-16">
                 {[
                    { 
                       n: "01", 
                       t: "You're confusing your customers.", 
                       d: "When someone lands on your site, they need to know in 3 seconds: What do you do? How does it help me? How do I buy? If they have to hunt for a contact button, they've already left for your competitor." 
                    },
                    { 
                       n: "02", 
                       t: "You have zero visual proof.", 
                       d: "In 2026, 'Trust me' isn't a marketing strategy. Customers want to see the project you finished in Livingston last week. They want to see your team in action. Without video and high-end photo, you are just another faceless name." 
                    },
                    { 
                       n: "03", 
                       t: "Your site is a digital brochure, not a funnel.", 
                       d: "A website without a clear lead-gen system is just an expense. You need targeted messaging, fast loading speeds, and a frictionless way for local people to enquire." 
                    }
                 ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5 relative overflow-hidden group">
                       <div className="absolute -top-4 -right-4 text-8xl font-black text-white/[0.03] italic font-bebas">{item.n}</div>
                       <h3 className="text-2xl font-black text-brand-yellow uppercase mb-4 italic font-bebas tracking-wide">{item.t}</h3>
                       <p className="text-white/40 text-sm leading-relaxed">{item.d}</p>
                    </div>
                 ))}
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-tight text-white mt-16 mb-6 text-center">How to Fix It.</h3>
              <p className="text-white/50 leading-relaxed mb-12 text-center italic">
                 Stop treating your website like an afterthought. Treat it like your best employee.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                 <div className="p-8 glass-card border-white/5">
                    <h4 className="text-white font-black uppercase italic font-bebas text-lg mb-4">The Amateur Way</h4>
                    <ul className="space-y-4">
                       <li className="flex gap-3 text-white/30 text-xs italic"><XCircle size={14} className="text-red-500 shrink-0" /> Generic stock photos</li>
                       <li className="flex gap-3 text-white/30 text-xs italic"><XCircle size={14} className="text-red-500 shrink-0" /> "Welcome to our website" text</li>
                       <li className="flex gap-3 text-white/30 text-xs italic"><XCircle size={14} className="text-red-500 shrink-0" /> Hidden contact forms</li>
                    </ul>
                 </div>
                 <div className="p-8 glass-card border-brand-yellow/10 bg-brand-yellow/[0.01]">
                    <h4 className="text-brand-yellow font-black uppercase italic font-bebas text-lg mb-4">The Bear Media Way</h4>
                    <ul className="space-y-4">
                       <li className="flex gap-3 text-white/60 text-xs font-bold italic"><CheckCircle2 size={14} className="text-brand-yellow shrink-0" /> Cinematic on-site proof</li>
                       <li className="flex gap-3 text-white/60 text-xs font-bold italic"><CheckCircle2 size={14} className="text-brand-yellow shrink-0" /> Outcome-focused messaging</li>
                       <li className="flex gap-3 text-white/60 text-xs font-bold italic"><CheckCircle2 size={14} className="text-brand-yellow shrink-0" /> Frictionless lead-gen system</li>
                    </ul>
                 </div>
              </div>

              <p className="text-white/60 text-lg leading-relaxed mb-12">
                 If you're ready to stop being the best-kept secret in the Central Belt, it's time to build a system that actually works for you. 
              </p>
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 bg-brand-yellow text-neutral-950 text-center">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase italic font-bebas tracking-tight leading-none">
                 Ready to <br /><span className="underline decoration-neutral-950/20 underline-offset-8">get busy?</span>
              </h2>
              <p className="text-lg font-medium mb-12 text-neutral-950/70">
                 Book a 15-minute roadmap call and we'll show you exactly how to fix your enquiry problem.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-neutral-950 text-white font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300"
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
