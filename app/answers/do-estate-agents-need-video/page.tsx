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

import Script from 'next/script';

export default function RealEstateArticlePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do estate agents really need video content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. In competitive markets like Edinburgh, video is the most powerful tool for building trust with sellers and winning more listings over corporate competitors."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema-agent-video"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-gold font-black uppercase tracking-[0.3em] mb-4 text-[13px] md:text-sm md:text-sm animate-pulse italic">Real Estate Mastery. No Fluff.</p>
            <h1 className="mb-8 text-white">
               Do Estate Agents <br />
              <span className="text-gold">Need Video?</span>
            </h1>
            <p className="text-white max-w-2xl mx-auto font-medium italic leading-relaxed text-sm">
               Why cinematic video is the difference between winning a listing and being ignored by sellers in Edinburgh.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
           <div className="prose prose-invert prose-brand max-w-none">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight text-white mb-8">The Local Listing War.</h2>
              <p className="text-white text-sm leading-relaxed mb-12 italic">
                 If you are an independent estate agent in Edinburgh or West Lothian, you are at war. You're competing against massive corporate agencies with huge budgets. How do you win? By building more trust than they ever could. And trust is built through video. 
              </p>

              {/* WHY VIDEO MATTERS */}
              <div className="grid md:grid-cols-2 gap-8 my-16">
                 {[
                    { t: "Look Professional.", d: "Sellers want to know that you'll treat their home with respect. High-end cinematic tours show that you care about quality as much as they do." },
                    { t: "Win More Listings.", d: "Video isn't just for selling the house—it's for selling YOU. It's your most powerful listing presentation tool." },
                    { t: "Social Authority.", d: "Consistent property reels keep you top-of-mind. When a local thinks about selling, they think of the agent they see everywhere." },
                    { t: "Better Reach.", d: "Algorithms love video. A property reel can reach 10x more people than a static photo ever will. More eyes = more leads." }
                 ].map((item, i) => (
                    <div key={i} className="p-8 rounded-[1.5rem] bg-neutral-900 border border-white/5 group">
                       <h3 className="text-lg font-black text-gold uppercase mb-3 italic font-bebas tracking-widest leading-tight">{item.t}</h3>
                       <p className="text-white text-xs leading-relaxed italic">"{item.d}"</p>
                    </div>
                 ))}
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-tight text-white mt-16 mb-6 text-center">Real Results in Edinburgh.</h3>
              
              <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-gold/10 shadow-[0_0_50px_rgba(245,166,35,0.05)] text-center mb-16">
                 <p className="text-xl text-white font-bold italic leading-relaxed">
                    "Bear Media made us look like the only logical choice in our area. Sellers now call us because they've 'seen our videos everywhere'."
                 </p>
                 <p className="text-gold font-black uppercase italic font-bebas tracking-widest text-[13px] md:text-sm mt-6">— Local Edinburgh Agent</p>
              </div>

              <p className="text-white text-sm leading-relaxed mb-12 italic text-center">
                 If you're an agent in the Central Belt, you can't afford to stay invisible. It's time to upgrade your visual proof.
              </p>
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-6 bg-gold text-neutral-950 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="mb-8 text-neutral-950 leading-tight">
                 Win More <br /><span className="underline decoration-neutral-950/20 underline-offset-8 italic">Listings Now.</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all shadow-2xl group"
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
