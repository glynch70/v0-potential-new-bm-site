import Script from 'next/script';
import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dirty Martinis Case Study | Bear Media',
  description: 'How Bear Media created scroll-stopping social reels and brand content for Dirty Martinis in Edinburgh — driving visibility and footfall.',
  alternates: {
    canonical: 'https://bear-media.com/case-studies/dirty-martinis',
  },
  openGraph: {
    url: 'https://bear-media.com/case-studies/dirty-martinis',
    title: 'Dirty Martinis Case Study | Bear Media',
    description: 'How Bear Media created scroll-stopping social reels and brand content for Dirty Martinis in Edinburgh — driving visibility and footfall.',
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


const breadcrumbSchema_case_studies_dirty_martinis = {
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
      "name": "Proof",
      "item": "https://bear-media.com/case-studies"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Dirty Martinis Case Study",
      "item": "https://bear-media.com/case-studies/dirty-martinis"
    }
  ]
};

export default function DirtyMartinisCaseStudy() {
  return (
    <>
      <Script
        id="breadcrumb-schema-case-studies-dirty-martinis"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_case_studies_dirty_martinis) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950 pt-24 md:pt-32">
        <article className="max-w-5xl mx-auto px-6 pb-24">
          
          <header className="mb-12">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-white/85 hover:text-gold transition-colors text-sm font-bold uppercase tracking-widest mb-8">
              <ArrowLeft size={16} /> Back to Proof Pages
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 text-gold font-black uppercase tracking-widest text-[13px] md:text-sm rounded-full mb-4 mr-3">
                  Events / Entertainment
                </span>
                <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-full mb-4">
                  Edinburgh
                </span>
                <h1 className="text-4xl md:text-7xl font-black italic uppercase font-bebas leading-[0.9] text-white">
                  Dirty <span className="text-gold">Martinis</span>
                </h1>
              </div>
              <div className="flex flex-col gap-2 bg-neutral-900 border border-white/10 p-4 rounded-xl">
                 <p className="text-white/85 text-[13px] md:text-sm font-black uppercase tracking-widest">Key Result</p>
                 <p className="text-gold text-3xl font-black font-bebas">Event Coverage</p>
              </div>
            </div>
          </header>

          <section className="aspect-video relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl mb-16 bg-neutral-900">
             {/* Using existing placeholder until real asset is added */}
            <Image 
              src="/BEST FINAL CLIENT WORK/mwm.jpg" 
              alt="Dirty Martinis Event" 
              fill 
              className="object-cover opacity-80 hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-60 pointer-events-none" />
          </section>

          <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
            <div className="md:col-span-2 space-y-12">
              
              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Problem</h2>
                <p className="text-white/90 italic leading-relaxed text-lg">
                  Dirty Martinis host high-energy, premium events, but static photos and low-quality phone footage weren't capturing the true atmosphere. They needed cinematic, engaging promotional video content to drive ticket sales for future events and establish themselves as a premier entertainment choice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Process</h2>
                <p className="text-white/90 italic leading-relaxed text-lg mb-4">
                  We deployed a multi-camera setup to ensure we captured both the macro atmosphere and the micro details that make their events special.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/80 italic text-lg mb-4">
                  <li>We focused on fast-paced, rhythmic editing tied to the event's music to convey the energy.</li>
                  <li>We captured high-quality low-light footage to ensure the premium feel wasn't lost in the venue's ambiance.</li>
                  <li>We delivered short-form reels specifically optimized for Instagram and TikTok promotion.</li>
                </ul>
              </section>
              
              <section className="bg-gold/10 border border-gold/20 rounded-3xl p-8">
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-gold mb-6">The Results</h2>
                <p className="text-white/80 italic leading-relaxed text-lg font-medium">
                  The promotional reels provided Dirty Martinis with a powerful marketing asset. The cinematic quality perfectly aligned with their premium brand, resulting in highly engaging social media content that directly supported ticket sales and venue bookings.
                </p>
              </section>

            </div>

            <div className="space-y-8">
               <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
                 <h3 className="text-xl font-black italic uppercase font-bebas text-gold mb-6">Services Delivered</h3>
                 <ul className="space-y-4">
                   {["Event Videography", "Promo Video", "Social Media Reels"].map((service, i) => (
                     <li key={i} className="flex items-center gap-3">
                       <CheckCircle2 size={16} className="text-gold" />
                       <span className="text-white/80 font-bold text-sm tracking-wide">{service}</span>
                     </li>
                   ))}
                 </ul>
                 <div className="mt-8 pt-8 border-t border-white/5">
                    <Link href="/video-production-edinburgh" className="text-white hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                       View Video Services <ArrowRight size={14} />
                    </Link>
                 </div>
               </div>
               
               <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
                 <h3 className="text-xl font-black italic uppercase font-bebas text-white mb-6">Ready for similar results?</h3>
                 <p className="text-white/90 text-sm italic mb-6">We provide cinematic event coverage across Scotland.</p>
                 <Link href="/contact" className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-neutral-950 font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-transform">
                    Book a Discovery Call
                 </Link>
               </div>
            </div>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
