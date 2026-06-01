import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Script from 'next/script';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export const metadata: Metadata = {
  title: 'Video Production & Drone Content Fife | Bear Media',
  description: 'Premium video production and licensed drone videography for businesses across Fife, Dunfermline, and Kirkcaldy.',
  alternates: {
    canonical: 'https://bear-media.com/video-production-fife',
  },
  openGraph: {
    url: 'https://bear-media.com/video-production-fife',
    title: 'Video Production & Drone Content Fife | Bear Media',
    description: 'Premium video production and licensed drone videography for businesses across Fife, Dunfermline, and Kirkcaldy.',
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
      "name": "Are you licensed to fly drones commercially in Fife?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We hold full CAA (Civil Aviation Authority) authorization and comprehensive commercial insurance to conduct drone flights across Fife and the rest of Scotland."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas of Fife do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover the entire region of Fife, including Dunfermline, Kirkcaldy, Glenrothes, St Andrews, and the East Neuk. We come directly to your business location or project site."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a business promo video take to produce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most video production projects take between 2 to 3 weeks from filming to final delivery, depending on the scope of editing, color grading, and review rounds."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide video content optimized for social media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We edit and format our videos for multiple platforms, ensuring you get widescreen versions for websites and vertical formats optimized for TikTok, Instagram Reels, and YouTube Shorts."
      }
    }
  ]
};


const breadcrumbSchema_video_production_fife = {
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
      "name": "Video Production & Drone Content Fife",
      "item": "https://bear-media.com/video-production-fife"
    }
  ]
};

export default function VideoProductionFife() {
  return (
    <>
      <Script
        id="breadcrumb-schema-video-production-fife"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_video_production_fife) }}
      />
      <Script
        id="fife-video-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        
        {/* AEO SUMMARY BLOCK */}
        <div className="pt-24 pb-8 bg-neutral-950 border-b border-white/5">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed italic">
                 Bear Media provides professional video production and fully licensed drone videography for local businesses, construction companies, and events across Fife and the surrounding area.
              </p>
           </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-20 pb-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.03)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black italic uppercase font-bebas leading-[0.9] tracking-tight">
              Video Production & <br className="hidden md:block"/> <span className="text-gold">Drone Content in Fife</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-medium italic">
              Cinematic, high-impact video that tells your story and captures attention. From on-site construction to corporate promos and high-energy events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact" className="px-10 py-5 bg-gold text-neutral-950 font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all">
                 Book a Discovery Call
               </Link>
               <Link href="/case-studies/dirty-martinis" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:bg-white/10 transition-all">
                 View Our Work
               </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM & WHO IT'S FOR */}
        <section className="py-24 px-6 bg-neutral-900/30 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
             <div>
                <h2 className="text-3xl font-black italic uppercase font-bebas text-white mb-6">The Problem With DIY Video</h2>
                <ul className="space-y-4">
                  {[
                    "Shaky phone footage damages your premium brand image.",
                    "You can't capture the true scale of large projects from the ground.",
                    "Poor audio quality immediately drives viewers away.",
                    "Editing takes hours of your time and still looks amateur.",
                    "You have no legal license or insurance to fly drones commercially."
                  ].map((problem, i) => (
                    <li key={i} className="flex gap-3 text-white/90 italic text-lg">
                      <span className="text-gold font-black mt-1">✕</span> {problem}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="bg-neutral-950 border border-white/10 p-10 rounded-[2rem]">
                <h2 className="text-3xl font-black italic uppercase font-bebas text-gold mb-6">Who This Is For</h2>
                <p className="text-white/80 italic text-lg mb-6 leading-relaxed">
                   We provide professional filming services for businesses that require high-quality visuals:
                </p>
                <ul className="space-y-3">
                  {["Construction & Architecture Firms (Drone Progression)", "Event Organisers & Venues (Promo Reels)", "Local Businesses & Corporates (Brand Videos)", "Real Estate & Commercial Property", "Businesses across Dunfermline, Kirkcaldy & St Andrews"].map((audience, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-gold" />
                      <span className="text-white font-bold text-sm tracking-wide">{audience}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </section>

        {/* SERVICES INCLUDED */}
        <section className="py-24 px-6">
           <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-black uppercase italic font-bebas tracking-tight text-white mb-4">Our Video Services</h2>
                 <p className="text-white/90 italic">Fully licensed, fully insured, and highly cinematic.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { title: "Licensed Drone Ops", desc: "CAA approved and insured commercial drone operations for stunning aerial perspectives across Fife." },
                   { title: "Event Videography", desc: "Fast-paced, high-energy coverage of corporate events, launches, and venue promos." },
                   { title: "Corporate Promos", desc: "Professional brand videos that communicate your value and build trust instantly." },
                   { title: "On-Site Construction", desc: "Regular site visits to document progress and showcase completed projects." },
                   { title: "Interviews & Audio", desc: "Crystal clear audio recording and professional lighting for talking-head videos." },
                   { title: "Post-Production", desc: "High-end editing, color grading, sound design, and formatting for all social platforms." }
                 ].map((service, i) => (
                    <div key={i} className="bg-neutral-900/50 border border-white/5 p-8 rounded-3xl hover:border-gold/30 transition-colors">
                       <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                       <p className="text-white/90 text-sm italic leading-relaxed">{service.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* PROOF / RESULTS */}
        <section className="py-24 px-6 bg-gold/10 border-y border-gold/20">
           <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                 <h2 className="text-3xl font-black uppercase italic font-bebas tracking-tight text-gold mb-6">Cinematic Proof</h2>
                 <p className="text-white/80 italic text-lg mb-8 max-w-2xl mx-auto">
                    We capture the atmosphere of live events and the sheer scale of commercial projects. 
                 </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <YouTubeEmbed videoId="ZzotfyCIwfA" title="Forth Bridges Drone" label="Drone Videography" />
                 </div>
                 <div className="bg-neutral-950 p-8 rounded-3xl border border-white/10">
                    <h3 className="text-xl font-black uppercase italic font-bebas text-white mb-4">Event Coverage: Dirty Martinis</h3>
                    <p className="text-white/90 italic leading-relaxed mb-6">
                      We provided high-energy event videography for Dirty Martinis, capturing the atmosphere perfectly for their social media promos and driving massive engagement for future ticket sales.
                    </p>
                    <Link href="/case-studies/dirty-martinis" className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-widest text-[13px] md:text-sm hover:translate-x-1 transition-transform">
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
               { q: "Are you licensed to fly drones commercially?", a: "Yes. We hold full CAA (Civil Aviation Authority) authorization and comprehensive commercial insurance for all drone operations." },
               { q: "Do you cover Dunfermline and Kirkcaldy?", a: "Yes. We serve all areas of Fife including Dunfermline, Kirkcaldy, Glenrothes, St Andrews, and surrounding regions." },
               { q: "How long does a promo video take to produce?", a: "Most projects take 2-3 weeks from filming to final delivery, though we can accommodate faster turnarounds for urgent event reels." },
               { q: "Can we get the raw footage?", a: "Our standard packages include fully edited deliverables, but raw footage handovers can be arranged if required for your in-house team." }
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
              <h2 className="text-4xl md:text-6xl font-black italic uppercase font-bebas mb-6">Need professional video coverage?</h2>
              <p className="font-bold italic mb-10">Let's discuss your upcoming project or event in Fife.</p>
              <Link href="/contact" className="px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all shadow-xl inline-block">
                Book a Discovery Call
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
