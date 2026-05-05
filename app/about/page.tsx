import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic">
               No Agency Nonsense. Just Results.
            </p>
            <h1 className="mb-6 md:mb-8">
              Why <span className="text-brand-yellow">Bear Media?</span>
            </h1>
            <p className="text-white max-w-xl mx-auto mb-10 md:mb-12 font-medium italic">
              Founded in West Lothian to help local businesses look as good as they work. We don't sell "content"—we sell growth systems.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 px-6 border-y border-white/5 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-left">
            <div className="aspect-square bg-neutral-900 rounded-[2rem] border border-white/5 flex items-center justify-center text-white text-xs font-black uppercase tracking-widest p-12 text-center italic">
              "We visit your site, capture the work, and turn it into enquiries."
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase italic font-bebas tracking-tight">Rooted in the <br /><span className="text-brand-yellow">Central Belt.</span></h2>
              <p className="text-white mb-6 text-sm leading-relaxed italic">
                We started Bear Media with a simple mission: to give local Scottish businesses access to the same high-end content and conversion systems used by big national brands—without the corporate fluff and overhead.
              </p>
              <p className="text-white mb-8 text-sm leading-relaxed italic font-bold">
                Based in Broxburn, we're your local partner. We don't hide behind a screen—we visit your site in Edinburgh, Fife, or West Lothian, capture your story, and build your systems properly.
              </p>
              <div className="flex gap-6">
                 <div>
                    <p className="text-2xl font-black text-white font-bebas italic leading-none mb-1 text-brand-yellow">50+</p>
                    <p className="text-[8px] font-bold text-white uppercase tracking-widest">Local Clients</p>
                 </div>
                 <div>
                    <p className="text-2xl font-black text-white font-bebas italic leading-none mb-1 text-brand-yellow">Daily</p>
                    <p className="text-[8px] font-bold text-white uppercase tracking-widest">Local Enquiries</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE MANIFESTO */}
        <section className="py-12 md:py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="mb-12 text-white">
              The <span className="text-brand-yellow">No-Nonsense</span> Manifesto.
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Straight Talking", desc: "No marketing jargon. No vanity metrics. We speak plain English and focus entirely on your business growth." },
                { title: "Local Partners", desc: "We aren't a faceless remote agency. We're on the ground, visiting your business to capture the real story." },
                { title: "Results Only", desc: "If it doesn't bring in a lead or build your authority, we don't do it. Everything we build has a purpose." }
              ].map((item, i) => (
                <div key={i} className="glass-card p-8 border-white/5 hover:border-brand-yellow/20 transition-all">
                  <h3 className="text-lg font-black mb-3 uppercase italic font-bebas tracking-widest text-brand-yellow">{item.title}</h3>
                  <p className="text-white text-xs leading-relaxed italic">"{item.desc}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FINAL CTA */}
        <section className="py-20 px-6 text-center relative overflow-hidden bg-brand-yellow text-neutral-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="mb-8 text-neutral-950">
              Ready to Get Started?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-105 transition-all shadow-2xl group"
            >
              Book Your 15-Min Discovery Call
            </Link>
            <p className="mt-8 text-neutral-950/50 text-[9px] font-black uppercase tracking-widest italic">
              No pressure. No jargon. Just results.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
