import Script from 'next/script';
import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Robertsons Transport | Haulage & Logistics | Bear Media',
  description: 'A premium website design and branding project for Robertsons Transport, a leading UK haulage company.',
  alternates: {
    canonical: 'https://bear-media.com/portfolio/robertsons-transport',
  },
  openGraph: {
    url: 'https://bear-media.com/portfolio/robertsons-transport',
    title: 'Robertsons Transport | Haulage & Logistics | Bear Media',
    description: 'A premium website design and branding project for Robertsons Transport, a leading UK haulage company.',
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


const breadcrumbSchema_portfolio_robertsons_transport = {
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
      "name": "Portfolio",
      "item": "https://bear-media.com/portfolio"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Robertsons Transport",
      "item": "https://bear-media.com/portfolio/robertsons-transport"
    }
  ]
};

export default function RobertsonsTransportCaseStudy() {
  return (
    <>
      <Script
        id="breadcrumb-schema-portfolio-robertsons-transport"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_portfolio_robertsons_transport) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950 pt-24 md:pt-32">
        <article className="max-w-5xl mx-auto px-6 pb-24">
          
          <header className="mb-12 border-b border-white/10 pb-8">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/85 hover:text-gold transition-colors text-sm font-bold uppercase tracking-widest mb-8">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-full mb-4">
                  Haulage and Transport Logistics
                </span>
                <h1 className="text-4xl md:text-7xl font-black italic uppercase font-bebas leading-[0.9] text-white">
                  Robertsons <span className="text-gold">Transport Ltd</span>
                </h1>
              </div>
              <a 
                href="https://rt-ltd.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-neutral-950 font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-transform shadow-xl"
              >
                Visit Website <ExternalLink size={14} />
              </a>
            </div>
          </header>

          {/* Industrial Theme Override */}
          <section className="aspect-video relative rounded-[1rem] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] mb-16 bg-neutral-900 group">
            <Image 
              src="/BEST FINAL CLIENT WORK/rt-ltd.uk-v2.jpg" 
              alt="Logistics Website Design Mockup" 
              fill 
              className="object-cover opacity-70 filter-none group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
              <p className="text-white font-black uppercase italic font-bebas tracking-widest text-3xl opacity-80">Heavy Goods & Logistics</p>
            </div>
          </section>

          <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Transport Solution</h2>
                <p className="text-white/90 italic leading-relaxed text-lg mb-4">
                  Robertsons Transport Ltd is a premier <strong>haulage company in the UK</strong> delivering highly reliable transport solutions across the nation. They needed a <Link href="/web-design" className="text-gold hover:underline">transport company website</Link> that matched the scale and professionalism of their actual fleet operations.
                </p>
                <p className="text-white/90 italic leading-relaxed text-lg">
                  We focused heavily on <strong>haulage branding</strong> and <strong>logistics website design</strong> to position the business as an authority in heavy goods logistics.
                </p>
              </section>
              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Impact</h2>
                <p className="text-white/90 italic leading-relaxed text-lg">
                  With robust SEO foundations focused on "transport logistics" and "haulage company UK", the new digital presence acts as a powerful commercial asset. The clean, modern, and premium industrial layout builds immediate trust with large-scale corporate clients seeking nationwide delivery services.
                </p>
              </section>
            </div>

            <div className="bg-neutral-900/80 rounded-[1rem] p-8 border border-white/10 h-fit shadow-inner">
              <h3 className="text-xl font-black italic uppercase font-bebas text-gold mb-6">Services Provided</h3>
              <ul className="space-y-4">
                {["Website Design", "Branding", "Digital Presence", "SEO Foundations", "Content Structure"].map((service, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-gold" />
                    <span className="text-white/90 font-bold text-sm tracking-wide uppercase">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </article>

        <section className="py-20 px-6 text-center relative overflow-hidden bg-gold text-neutral-950 mt-12">
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="mb-6 text-neutral-950 text-4xl md:text-5xl font-black italic uppercase font-bebas leading-tight">
                 Scale Your Logistics Business
              </h2>
              <p className="text-neutral-950/70 font-bold italic mb-10 max-w-lg mx-auto">
                 Need a premium logistics website design to win bigger contracts? Let's talk strategy.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all shadow-2xl"
              >
                Start Your Project <ArrowRight size={14} />
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
