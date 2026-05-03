import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Video, Camera, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Do Estate Agents Need Video Content? | Bear Media Scotland',
  description: 'How independent estate agents in Edinburgh and West Lothian use cinematic video to win more listings and dominate their local market. Read the full guide.',
};

export default function RealEstateArticlePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden border-b border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-6 text-sm">Real Estate Mastery</p>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas">
               Do Estate Agents <br />
              <span className="text-brand-yellow underline decoration-brand-yellow/20 underline-offset-8">Need Video?</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-medium italic leading-relaxed">
               Why cinematic video is the difference between winning a listing and being ignored by sellers in Edinburgh.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <div className="prose prose-invert prose-brand max-w-none">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight text-white mb-8">The Local Listing War.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                 If you are an independent estate agent in **Edinburgh** or **West Lothian**, you are at war. You're competing against massive corporate agencies with huge budgets. How do you win? By building more trust than they ever could. And trust is built through video. 
              </p>

              {/* WHY VIDEO MATTERS */}
              <div className="grid md:grid-cols-2 gap-12 my-16">
                 <div className="space-y-6">
                    <h3 className="text-2xl font-black text-brand-yellow uppercase italic font-bebas tracking-wide">01. You Look More Professional.</h3>
                    <p className="text-white/40 text-sm leading-relaxed">Sellers want to know that you'll treat their home with respect. High-end cinematic tours show that you care about quality as much as they do.</p>
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-2xl font-black text-brand-yellow uppercase italic font-bebas tracking-wide">02. You Win More Listings.</h3>
                    <p className="text-white/40 text-sm leading-relaxed">Video isn't just for selling the house—it's for selling YOU to the next landlord or homeowner. It's your most powerful listing presentation tool.</p>
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-2xl font-black text-brand-yellow uppercase italic font-bebas tracking-wide">03. Social Authority.</h3>
                    <p className="text-white/40 text-sm leading-relaxed">Consistent property reels and agent brand videos keep you top-of-mind. When a local resident thinks about selling, they think of the agent they see everywhere on their feed.</p>
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-2xl font-black text-brand-yellow uppercase italic font-bebas tracking-wide">04. Better Reach.</h3>
                    <p className="text-white/40 text-sm leading-relaxed">Algorithms love video. A property reel can reach 10x more people than a static photo ever will. More eyes = more leads.</p>
                 </div>
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-tight text-white mt-16 mb-6">Real Results in Edinburgh.</h3>
              <p className="text-white/50 leading-relaxed mb-12 italic">
                 One Edinburgh-based agent saw a 4-listing increase in their first 30 days simply by switching from mobile photos to our cinematic video system.
              </p>
              
              <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-brand-yellow/20 shadow-[0_0_40px_rgba(245,166,35,0.05)] text-center">
                 <p className="text-4xl font-black italic mb-4 text-brand-yellow uppercase font-bebas">The Outcome?</p>
                 <p className="text-xl text-white font-bold italic leading-relaxed">
                    "Bear Media made us look like the only logical choice in our area. Sellers now call us because they've 'seen our videos everywhere'."
                 </p>
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-tight text-white mt-16 mb-6">Stop Being Ignored.</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                 If you're an agent in the Central Belt, you can't afford to stay invisible. It's time to upgrade your visual proof.
              </p>
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 bg-brand-yellow text-neutral-950 text-center">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase italic font-bebas tracking-tight leading-none">
                 Win More <br /><span className="underline decoration-neutral-950/20 underline-offset-8">Listings Now.</span>
              </h2>
              <p className="text-lg font-medium mb-12 text-neutral-950/70">
                 Book a discovery call and we'll show you exactly how to dominate your local Edinburgh or West Lothian market.
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
