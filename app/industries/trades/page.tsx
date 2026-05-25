import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoProof from '@/components/VideoProof';
import Link from 'next/link';
import { TrendingUp, Users, Star, MapPin } from 'lucide-react';
import Script from 'next/script';

export default function TradesIndustryPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does video help my trade business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional video builds instant trust by showing the quality of your craftsmanship. It helps you stand out from competitors who only use static photos and stock images."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to stop work for filming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Our 'While You Work' system is designed to be non-intrusive. We capture raw footage of your team in action without disrupting your workflow."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        {/* 1. Industry Hero */}
        {/* 1. Industry Hero */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 px-6 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <p className="text-gold font-black uppercase tracking-[0.3em] mb-4 text-[13px] md:text-sm md:text-sm animate-pulse italic">
               Stop Being the "Best Kept Secret"
            </p>
            <h1 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas">
              Get More High-Value <br />
              <span className="text-gold">Trade Enquiries.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed italic">
              We help builders and contractors showcase craftsmanship and win more premium work.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 md:px-12 md:py-6 bg-gold text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(245,166,35,0.2)]"
            >
              Book Your 15-Min Strategy Call
            </Link>

            {/* TRUST BAR UNDER HERO */}
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16">
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex gap-1 text-gold mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-white text-[13px] md:text-sm font-black uppercase tracking-widest">5.0 Google Rating</p>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">15+ WEEKLY LEADS</p>
                  <p className="text-white text-[12px] md:text-[13px] font-bold uppercase tracking-widest">Typical Trade Result</p>
               </div>
            </div>
          </div>
        </section>

        {/* 1.1 VIDEO PROOF SECTION */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="On-Site Trade Authority"
          stats={[
             { label: "New Enquiries", value: "15+", icon: <Users size={24} /> },
             { label: "Reach Generated", value: "25k+", icon: <TrendingUp size={24} /> },
             { label: "Client Rating", value: "5.0★", icon: <Star size={24} /> },
             { label: "Central Belt Focus", value: "100%", icon: <MapPin size={24} /> }
          ]}
        />

        {/* 2. The Problem */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="glass-card p-12 border-gold/10">
               <h2 className="text-3xl font-bold mb-6 italic uppercase font-bebas tracking-wide">The Invisible Craftsman</h2>
               <p className="text-white0 text-lg mb-6 leading-relaxed">
                 You do incredible work, but if your potential customers can't see it, you're losing jobs to competitors with better social media.
               </p>
               <p className="text-white0 text-lg leading-relaxed italic">
                 "We solve the 'no time for photos' problem for busy tradesmen."
               </p>
            </div>
            <div>
               <h2 className="text-3xl font-bold mb-6 text-gold italic uppercase font-bebas tracking-wide">The Solution: "While You Work" Capture</h2>
               <p className="text-white0 text-lg mb-8 leading-relaxed">
                 We don't get in your way. We visit your site, capture cinematic raw footage of your team in action, and turn it into professional social content that builds instant trust.
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white font-medium"><span>⚡</span> Real-time project updates</div>
                  <div className="flex items-center gap-3 text-white font-medium"><span>⚡</span> High-end before/after showcases</div>
                  <div className="flex items-center gap-3 text-white font-medium"><span>⚡</span> Customer testimonial capture</div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. ROI / Leads Focus */}
        <section className="py-20 px-6 bg-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 italic uppercase font-bebas tracking-wide">Built for Inbound Leads</h2>
              <div className="grid md:grid-cols-3 gap-8">
                 <div className="p-10 glass-card">
                    <h4 className="text-xl font-bold mb-4 text-gold">Showcase Authority</h4>
                    <p className="text-white0 text-sm">Professional video proves you're the expert before you even step on site.</p>
                 </div>
                 <div className="p-10 glass-card">
                    <h4 className="text-xl font-bold mb-4 text-gold">Automated Filtering</h4>
                    <p className="text-white0 text-sm">Our systems help sort your enquiries so you only talk to the best prospects.</p>
                 </div>
                 <div className="p-10 glass-card">
                    <h4 className="text-xl font-bold mb-4 text-gold">Dominant Local Presence</h4>
                    <p className="text-white0 text-sm">Be the most visible trade business in your specific Scottish service area.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. CTA */}
        <section className="py-24 px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-8 italic uppercase font-bebas tracking-tight text-white leading-none max-w-2xl mx-auto">
              Ready to win more <br />
              <span className="text-gold underline decoration-brand-gold/30 underline-offset-8">high-value work?</span>
           </h2>
           <Link href="/contact" className="inline-block bg-gold text-neutral-950 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_60px_rgba(245,166,35,0.3)]">
             Get Your 15-Min Strategy Call
           </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
