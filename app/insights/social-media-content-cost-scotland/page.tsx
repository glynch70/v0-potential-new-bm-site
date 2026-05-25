import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much Does Social Media Content Cost in Scotland? | Bear Media',
  description: 'A transparent guide to social media content pricing in Scotland, West Lothian, and Edinburgh. DIY vs Professional costs explained.',
};

export default function CostArticle() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        
        {/* HERO */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <Link href="/insights" className="text-gold font-black uppercase tracking-widest text-[13px] md:text-sm mb-8 inline-block hover:underline italic">← Back to Insights</Link>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas">
              How Much Does <br />
              <span className="text-gold">Social Media Content Cost</span> <br />
              in Scotland?
            </h1>
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed italic max-w-2xl">
              Transparent pricing, ROI expectations, and why the "cheapest" option usually costs you the most in the long run.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <article className="py-24 px-6 max-w-4xl mx-auto border-t border-white/5">
           <div className="prose prose-invert prose-brand max-w-none">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-wide text-white mb-8">The Short Answer</h2>
              <p className="text-white text-lg leading-relaxed mb-12">
                 In Scotland, professional content creation systems typically range from <span className="text-gold font-bold">£500 to £2,500+ per month</span> depending on frequency, quality, and management. While DIY costs "zero," it often costs businesses thousands in missed enquiries and poor perception.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                 <div className="p-10 rounded-[2rem] bg-neutral-900 border border-white/5">
                    <h3 className="text-white font-black uppercase italic font-bebas tracking-widest text-lg mb-4">DIY / Internal</h3>
                    <p className="text-white text-sm mb-6">"Free" but takes hours of your time. Usually low quality, inconsistent, and builds zero authority.</p>
                    <p className="text-gold font-black uppercase italic font-bebas text-xl">£0 + Your Sanity</p>
                 </div>
                 <div className="p-10 rounded-[2rem] bg-gold/10 border border-gold/30">
                    <h3 className="text-white font-black uppercase italic font-bebas tracking-widest text-lg mb-4">Professional System</h3>
                    <p className="text-white text-sm mb-6">On-site filming, cinematic editing, managed posting, and a clear lead-gen strategy.</p>
                    <p className="text-gold font-black uppercase italic font-bebas text-xl">£500 - £2,500 /mo</p>
                 </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-wide text-white mb-8">What Affects the Price?</h2>
              <ul className="space-y-6 mb-16">
                 <li className="flex gap-4">
                    <Zap className="text-gold shrink-0" />
                    <div>
                       <strong className="text-white uppercase italic font-bebas tracking-widest block text-lg">1. Filming Frequency</strong>
                       <p className="text-white text-sm">On-site visits are the most valuable part of the service. Capturing real work in West Lothian or Edinburgh takes time and skill.</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <TrendingUp className="text-gold shrink-0" />
                    <div>
                       <strong className="text-white uppercase italic font-bebas tracking-widest block text-lg">2. Editing Intensity</strong>
                       <p className="text-white text-sm">Cinematic reels with captions, sound design, and color grading take hours of professional work to do right.</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <Users className="text-gold shrink-0" />
                    <div>
                       <strong className="text-white uppercase italic font-bebas tracking-widest block text-lg">3. Management & Strategy</strong>
                       <p className="text-white text-sm">Posting is easy. Knowing *what* to post to get enquiries is the hard part. You pay for the brain, not just the hands.</p>
                    </div>
                 </li>
              </ul>

              <div className="p-12 rounded-[2.5rem] bg-neutral-900 border border-gold/10 mb-16">
                 <h2 className="text-2xl font-black uppercase italic font-bebas tracking-wide text-white mb-6">The "Best Kept Secret" Tax</h2>
                 <p className="text-white text-lg leading-relaxed italic mb-8">
                    "If you spend £1,000 on content but it wins you a £10,000 job, it didn't cost you anything. It made you £9,000. If you spend £0 and win zero jobs, that's where the real cost is."
                 </p>
                 <Link href="/pricing" className="text-gold font-black uppercase italic font-bebas tracking-widest text-lg hover:underline flex items-center gap-2">
                    View Our Transparent Packages <ArrowRight size={20} />
                 </Link>
              </div>

              <h2 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-wide text-white mb-8">Why Scotland-Based Businesses Should Go Local</h2>
              <p className="text-white text-lg leading-relaxed mb-8">
                 Remote agencies will sell you generic posts using stock footage. Your customers aren't stupid. They want to see the real work on the ground in the Central Belt. Choosing a local partner means on-site filming, real team faces, and content that actually builds local trust.
              </p>
           </div>
        </article>

        {/* CTA */}
        <section className="py-24 px-6 bg-gold text-neutral-950 text-center">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic font-bebas tracking-tight leading-none text-neutral-950">
                 Stop being invisible. <br /> <span className="underline decoration-neutral-950/20 underline-offset-8">Start getting leads.</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-neutral-950 text-white font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(0,0,0,0.5)]"
              >
                Book Your Discovery Call
                <ArrowRight size={16} />
              </Link>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
