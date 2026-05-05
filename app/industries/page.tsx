import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        {/* 1. Header */}
        <section className="py-24 px-6 max-w-7xl mx-auto text-center">
          <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-sm">Targeted Authority Systems</p>
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase italic font-bebas tracking-tight text-white leading-none">
            Who We <span className="text-brand-yellow">Help.</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto font-medium leading-relaxed italic">
            Cinematic content and conversion systems built for your specific industry. We help local Central Belt businesses dominate their market.
          </p>
        </section>

        {/* Industry Deep-Dives */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-32">
            
            {/* 2. For Trades (The Pipeline) */}
            <div id="trades" className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-brand-yellow uppercase italic font-bebas">The Tradesman's Pipeline</h2>
                <p className="text-xl text-white mb-8 leading-relaxed font-medium italic">
                  Doing great work is only half the battle. We help builders, plumbers, and electricians showcase their craftsmanship and turn their portfolio into a 24/7 lead-generation engine.
                </p>
                <div className="space-y-4">
                   <div className="flex items-start gap-4 p-6 glass-card border-white/5">
                      <div className="text-brand-yellow font-black italic font-bebas text-3xl">01</div>
                      <div>
                        <h4 className="font-bold text-white mb-1">On-Site Visuals</h4>
                        <p className="text-white0 text-sm">We visit your site to capture the real story of your work.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 p-6 glass-card border-white/5">
                      <div className="text-brand-yellow font-bold text-2xl">02</div>
                      <div>
                        <h4 className="font-bold text-white mb-1">High-Performance Web</h4>
                        <p className="text-white0 text-sm">A fast, local-SEO optimised site that wins enquiries.</p>
                      </div>
                   </div>
                </div>
              </div>
              <div className="aspect-square bg-neutral-900 rounded-2xl flex items-center justify-center text-white0 border border-white/10">Trades Visual</div>
            </div>

            {/* 3. For Estate Agents (The Listing Edge) */}
            <div id="agents" className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
              <div className="md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-yellow">The Agent's Edge</h2>
                <p className="text-xl text-white0 mb-8 leading-relaxed">
                  Win more listings and impress sellers. Our cinematic drone tours and fast-turnaround video teasers give you the competitive edge in a crowded market.
                </p>
                <div className="space-y-4">
                   <div className="flex items-start gap-4 p-6 glass-card">
                      <div className="text-brand-yellow font-bold text-2xl">01</div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Drone Property Tours</h4>
                        <p className="text-white0 text-sm">Perspective that sells properties faster.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 p-6 glass-card">
                      <div className="text-brand-yellow font-bold text-2xl">02</div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Listing Teasers</h4>
                        <p className="text-white0 text-sm">High-impact video for social media to build hype.</p>
                      </div>
                   </div>
                </div>
              </div>
              <div className="aspect-square bg-neutral-900 rounded-2xl flex items-center justify-center text-white0 border border-white/10 md:order-1">Agent Visual</div>
            </div>

            {/* 4. For Coaches & SMEs (The Authority) */}
            <div id="coaches" className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-yellow">The Scalable Coach</h2>
                <p className="text-xl text-white0 mb-8 leading-relaxed">
                  Build authority without the burnout. We handle your content creation and implement AI systems to manage your leads, giving you back 10+ hours a week.
                </p>
                <div className="space-y-4">
                   <div className="flex items-start gap-4 p-6 glass-card">
                      <div className="text-brand-yellow font-bold text-2xl">01</div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Personal Branding</h4>
                        <p className="text-white0 text-sm">Consistent high-quality content that positions you as the expert.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 p-6 glass-card">
                      <div className="text-brand-yellow font-bold text-2xl">02</div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Time-Recovery AI</h4>
                        <p className="text-white0 text-sm">Automated enquiry handling and lead management.</p>
                      </div>
                   </div>
                </div>
              </div>
              <div className="aspect-square bg-neutral-900 rounded-2xl flex items-center justify-center text-white0 border border-white/10">SME Visual</div>
            </div>

          </div>
        </section>

        {/* 5. Local Proof Snippets */}
        <section className="py-24 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto text-center">
             <h2 className="text-3xl font-bold mb-12">Local Results Across the Central Belt</h2>
             <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 glass-card text-left">
                   <p className="text-white mb-4 italic text-sm">"Working with Bear Media transformed how we get leads in Livingston."</p>
                   <p className="font-bold text-brand-yellow">West Lothian Joinery</p>
                </div>
                <div className="p-8 glass-card text-left">
                   <p className="text-white mb-4 italic text-sm">"The drone tours helped us win three new listings this month alone."</p>
                   <p className="font-bold text-brand-yellow">Edinburgh Estate Agency</p>
                </div>
                <div className="p-8 glass-card text-left">
                   <p className="text-white mb-4 italic text-sm">"Finally, a local team that understands the Scottish market."</p>
                   <p className="font-bold text-brand-yellow">Fife Business Coach</p>
                </div>
             </div>
          </div>
        </section>

        <section className="py-32 px-6 text-center relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.1)_0%,transparent_60%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
             <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase italic font-bebas tracking-tight text-white leading-none">
                Ready to own your <br />
                <span className="text-brand-yellow underline decoration-brand-yellow/30 underline-offset-8">local market?</span>
             </h2>
             <Link
               href="/contact"
               className="bg-brand-yellow text-neutral-950 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform inline-flex items-center gap-4 shadow-[0_0_60px_rgba(245,166,35,0.3)]"
             >
               Book Your 15-Minute Industry Audit
               <ArrowRight />
             </Link>
             <p className="mt-8 text-white text-xs font-bold uppercase tracking-widest">
                No pressure. No sales pitch. Just a clear roadmap for more enquiries.
             </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
