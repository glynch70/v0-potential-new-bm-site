import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Script from 'next/script';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export const metadata: Metadata = {
  title: 'Video Production Scotland | Cinematic Videos | Bear Media',
  description: 'Premium video production, commercial filmmaking, and CAA licensed drone videography for businesses across Glasgow, Edinburgh, and Scotland.',
  alternates: {
    canonical: 'https://bear-media.com/video-production-scotland',
  },
  openGraph: {
    url: 'https://bear-media.com/video-production-scotland',
    title: 'Video Production Scotland | Cinematic Videos | Bear Media',
    description: 'Premium video production, commercial filmmaking, and CAA licensed drone videography for businesses across Glasgow, Edinburgh, and Scotland.',
    type: 'website',
    siteName: 'Bear Media',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bear Media — Web Design & Video Scotland',
      },
    ],
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What video production services do you offer in Scotland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide a complete suite of corporate filming services across Scotland, including cinematic brand documentaries, on-site construction drone progression, promotional reels, client testimonial videos, and social media short-form content."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed for commercial drone flights in Glasgow and Edinburgh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we hold full CAA (Civil Aviation Authority) authorization and comprehensive commercial liability insurance, allowing us to operate safely and legally in cities like Glasgow and Edinburgh, as well as rural areas."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a corporate video campaign cost in Scotland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every project is custom quoted based on shoot days, editing complexity, and licensing requirements. We provide transparent, outcome-oriented pricing with fixed quotes to prevent any budget creep."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle the entire post-production process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We manage everything from script writing and on-site filming to color grading, professional sound design, licensing audio tracks, and rendering multiple aspect ratios optimized for both web and social feeds."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://bear-media.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Video Production Scotland",
      "item": "https://bear-media.com/video-production-scotland"
    }
  ]
};

export default function VideoProductionScotland() {
  return (
    <>
      <Script
        id="scotland-video-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="scotland-video-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        
        {/* AEO SUMMARY BLOCK */}
        <div className="pt-24 pb-8 bg-neutral-950 border-b border-white/5">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed italic">
                 Bear Media provides high-performance corporate video production, commercial brand storytelling, and fully licensed drone videography for businesses across Glasgow, Edinburgh, Aberdeen, Dundee, and all of Scotland.
              </p>
           </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-20 pb-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.03)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black italic uppercase font-bebas leading-[0.9] tracking-tight">
              Video Production & <br className="hidden md:block"/> <span className="text-gold">Drone Cinematography Scotland</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-medium italic">
              Breathtaking commercial films designed to build authority, establish trust, and turn passive viewers into active business enquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact" className="px-10 py-5 bg-gold text-neutral-950 font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all">
                 Book a Discovery Call
               </Link>
               <Link href="/portfolio" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:bg-white/10 transition-all">
                 View Portfolio
               </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM & WHO IT'S FOR */}
        <section className="py-24 px-6 bg-neutral-900/30 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
             <div>
                <h2 className="text-3xl font-black italic uppercase font-bebas text-white mb-6">The Content Dilemma</h2>
                <ul className="space-y-4">
                  {[
                    "Low-budget mobile videos degrade your premium brand authority.",
                    "You fail to demonstrate the true physical scale of your projects.",
                    "Stock footage makes your business look generic and insincere.",
                    "Time spent filming and editing takes you away from operations.",
                    "Flying drones commercially without a license brings severe legal risks."
                  ].map((problem, i) => (
                    <li key={i} className="flex gap-3 text-white/90 italic text-lg">
                      <span className="text-gold font-black mt-1">✕</span> {problem}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="bg-neutral-950 border border-white/10 p-10 rounded-[2rem]">
                <h2 className="text-3xl font-black italic uppercase font-bebas text-gold mb-6">Built For Scottish Brands</h2>
                <p className="text-white/80 italic text-lg mb-6 leading-relaxed">
                   We help established companies communicate their value clearly:
                </p>
                <ul className="space-y-3">
                  {["Construction & Infrastructure Teams (Visual Progress)", "Commercial Property & Real Estate (Cinematic Tours)", "Tourism & Hospitality Groups (Atmospheric Promos)", "Local Service Providers & SMEs (Brand Documentaries)", "Businesses serving Glasgow, Edinburgh, and Central Belt"].map((audience, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-gold" />
                      <span className="text-white font-bold text-sm tracking-wide">{audience}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </section>

        {/* PROOF / RESULTS */}
        <section className="py-24 px-6 bg-gold/10 border-y border-gold/20">
           <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                 <h2 className="text-3xl font-black uppercase italic font-bebas tracking-tight text-gold mb-6">Cinematic Delivery</h2>
                 <p className="text-white/80 italic text-lg mb-8 max-w-2xl mx-auto">
                    We document your physical craft with high-production value.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <YouTubeEmbed videoId="ZzotfyCIwfA" title="Scottish Drone Cinematography" label="Drone Footage" />
                 </div>
                 <div className="bg-neutral-950 p-8 rounded-3xl border border-white/10">
                    <h3 className="text-xl font-black uppercase italic font-bebas text-white mb-4">High-Impact Client Stories</h3>
                    <p className="text-white/90 italic leading-relaxed mb-6">
                      By documenting real craftsmanship and scale, we help businesses build instant credibility online. Our video systems ensure your expertise is communicated to local prospects before they even reach out.
                    </p>
                    <Link href="/case-studies/simply-sheds" className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-widest text-[13px] md:text-sm hover:translate-x-1 transition-transform">
                       View Case Study <ArrowRight size={14} />
                    </Link>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <h2 className="text-3xl font-black uppercase italic font-bebas tracking-tight text-white mb-10 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
             {[
               { q: "Do you travel across all of Scotland?", a: "Yes. While we are based in the Central Belt, we regularly film on location for clients in Glasgow, Edinburgh, Fife, Aberdeen, Dundee, and across the Highlands." },
               { q: "Are you fully insured for commercial video production?", a: "Yes, we carry full public liability insurance and professional indemnity coverage, in addition to specific commercial drone insurance." },
               { q: "Can the video content be formatted for social media?", a: "Yes, we edit and deliver your assets in multiple aspect ratios: widescreen (16:9) for websites/YouTube and vertical (9:16) optimized for Instagram Reels, TikTok, and YouTube Shorts." },
               { q: "What is your typical turnaround time?", a: "Most projects are completed within 2 to 3 weeks after filming, including editorial review and client feedback cycles." }
             ].map((faq, i) => (
               <div key={i} className="bg-neutral-900 border border-white/5 p-6 rounded-2xl">
                 <h3 className="font-bold text-white mb-2 text-lg">{faq.q}</h3>
                 <p className="text-white/90 italic text-sm leading-relaxed">{faq.a}</p>
               </div>
             ))}
           </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center bg-gold text-neutral-950">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase font-bebas mb-6">Ready to work with a Scottish crew?</h2>
              <p className="font-bold italic mb-10">Let's discuss how video can elevate your commercial presence.</p>
              <Link href="/contact" className="px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all shadow-xl inline-block">
                Schedule a Discovery Call
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
