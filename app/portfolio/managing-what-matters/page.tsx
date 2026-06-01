import Script from 'next/script';
import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Managing What Matters | Business Branding | Bear Media',
  description: 'Corporate branding, web design, and content for Managing What Matters — leadership training with a premium, trustworthy digital presence.',
  alternates: {
    canonical: 'https://bear-media.com/portfolio/managing-what-matters',
  },
  openGraph: {
    url: 'https://bear-media.com/portfolio/managing-what-matters',
    title: 'Managing What Matters | Business Branding | Bear Media',
    description: 'Corporate branding, web design, and content for Managing What Matters — leadership training with a premium, trustworthy digital presence.',
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


const breadcrumbSchema_portfolio_managing_what_matters = {
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
      "name": "Managing What Matters",
      "item": "https://bear-media.com/portfolio/managing-what-matters"
    }
  ]
};

export default function ManagingWhatMattersCaseStudy() {
  return (
    <>
      <Script
        id="breadcrumb-schema-portfolio-managing-what-matters"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_portfolio_managing_what_matters) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950 pt-24 md:pt-32">
        <article className="max-w-5xl mx-auto px-6 pb-24">
          
          <header className="mb-12">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/85 hover:text-gold transition-colors text-sm font-bold uppercase tracking-widest mb-8">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 text-gold font-black uppercase tracking-widest text-[13px] md:text-sm rounded-full mb-4">
                  Coaching / Leadership
                </span>
                <h1 className="text-4xl md:text-7xl font-black italic uppercase font-bebas leading-[0.9] text-white">
                  Managing <span className="text-gold">What Matters</span>
                </h1>
              </div>
              <a 
                href="https://managingwhatmatters.co.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-neutral-950 font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-transform shadow-xl"
              >
                Visit Live Website <ExternalLink size={14} />
              </a>
            </div>
          </header>

          <section className="aspect-video relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl mb-16 bg-neutral-900 group">
            <Image 
              src="/BEST FINAL CLIENT WORK/website-managing-v2.jpg" 
              alt="Managing What Matters Website Design" 
              fill 
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-60 pointer-events-none" />
          </section>

          <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Project</h2>
                <p className="text-white/90 italic leading-relaxed text-lg mb-4">
                  Managing What Matters provides premium leadership coaching and management consultancy. They needed a clean, corporate, yet highly approachable <Link href="/web-design" className="text-gold hover:underline">website design</Link> that accurately reflected their high-level expertise.
                </p>
              </section>
              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Outcome</h2>
                <p className="text-white/90 italic leading-relaxed text-lg">
                  We built a streamlined, professional digital presence that focuses on clarity and trust. The new branding and website layout effectively channel executives and business leaders toward booking consultation calls, establishing Managing What Matters as a true authority in their field.
                </p>
              </section>
            </div>

            <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
              <h3 className="text-xl font-black italic uppercase font-bebas text-gold mb-6">Services Provided</h3>
              <ul className="space-y-4">
                {["Website Design", "Branding", "Digital Presence"].map((service, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-gold" />
                    <span className="text-white/80 font-bold text-sm tracking-wide">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </article>

        <section className="py-20 px-6 text-center relative overflow-hidden bg-gold text-neutral-950 mt-12">
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="mb-6 text-neutral-950 text-4xl md:text-5xl font-black italic uppercase font-bebas leading-tight">
                 Want A Similar Result For Your Business?
              </h2>
              <p className="text-neutral-950/70 font-bold italic mb-10 max-w-lg mx-auto">
                 Let’s discuss how we can elevate your digital presence and drive more enquiries.
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
