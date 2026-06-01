import Script from 'next/script';
import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export const metadata: Metadata = {
  title: 'Simply Sheds Case Study | Bear Media',
  description: 'How we helped Simply Sheds increase their visibility and generate more enquiries through targeted social media and video content.',
  alternates: {
    canonical: 'https://bear-media.com/case-studies/simply-sheds',
  },
  openGraph: {
    url: 'https://bear-media.com/case-studies/simply-sheds',
    title: 'Simply Sheds Case Study | Bear Media',
    description: 'How we helped Simply Sheds increase their visibility and generate more enquiries through targeted social media and video content.',
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


const breadcrumbSchema_case_studies_simply_sheds = {
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
      "name": "Simply Sheds Case Study",
      "item": "https://bear-media.com/case-studies/simply-sheds"
    }
  ]
};

export default function SimplyShedsCaseStudy() {
  return (
    <>
      <Script
        id="breadcrumb-schema-case-studies-simply-sheds"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_case_studies_simply_sheds) }}
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
                  Construction / Joinery
                </span>
                <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-full mb-4">
                  Scotland
                </span>
                <h1 className="text-4xl md:text-7xl font-black italic uppercase font-bebas leading-[0.9] text-white">
                  Simply <span className="text-gold">Sheds</span>
                </h1>
              </div>
              <div className="flex flex-col gap-2 bg-neutral-900 border border-white/10 p-4 rounded-xl">
                 <p className="text-white/85 text-[13px] md:text-sm font-black uppercase tracking-widest">Key Result</p>
                 <p className="text-gold text-3xl font-black font-bebas">Local Domination</p>
              </div>
            </div>
          </header>

          <section className="aspect-video relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl mb-16 bg-neutral-900">
             {/* Using existing placeholder until real asset is added */}
            <Image 
              src="/BEST FINAL CLIENT WORK/website-5-lewis-joinery-v2.jpg" 
              alt="Simply Sheds Work" 
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
                  Simply Sheds builds high-quality, custom timber structures. While their craftsmanship was excellent, their online presence didn't reflect the premium nature of their builds. They needed a way to visually demonstrate their construction process and finished products to generate higher-quality local enquiries.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Process</h2>
                <p className="text-white/90 italic leading-relaxed text-lg mb-4">
                  We focused heavily on the visual proof of their work, emphasizing the quality of materials and the skill of the team.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/80 italic text-lg mb-4">
                  <li>We captured dynamic on-site video showing the transformation from raw timber to finished structure.</li>
                  <li>We highlighted the bespoke nature of their work through close-up, high-definition videography.</li>
                  <li>We distributed this content systematically across social media channels to target local homeowners looking for premium garden buildings.</li>
                </ul>
              </section>
              
              <section className="bg-gold/10 border border-gold/20 rounded-3xl p-8">
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-gold mb-6">The Results</h2>
                <p className="text-white/80 italic leading-relaxed text-lg font-medium">
                  By treating their social media as a living portfolio, Simply Sheds successfully repositioned themselves from standard shed builders to premium timber structure specialists. The consistent, high-quality video content has led directly to an increase in qualified enquiries from their local target market.
                </p>
              </section>

            </div>

            <div className="space-y-8">
               <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
                 <h3 className="text-xl font-black italic uppercase font-bebas text-gold mb-6">Services Delivered</h3>
                 <ul className="space-y-4">
                   {["Video Production", "Social Media Content", "On-Site Videography"].map((service, i) => (
                     <li key={i} className="flex items-center gap-3">
                       <CheckCircle2 size={16} className="text-gold" />
                       <span className="text-white/80 font-bold text-sm tracking-wide">{service}</span>
                     </li>
                   ))}
                 </ul>
                 <div className="mt-8 pt-8 border-t border-white/5">
                    <Link href="/social-media-for-construction" className="text-white hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                       View Construction Content <ArrowRight size={14} />
                    </Link>
                 </div>
               </div>
               
               <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
                 <h3 className="text-xl font-black italic uppercase font-bebas text-white mb-6">Ready for similar results?</h3>
                 <p className="text-white/90 text-sm italic mb-6">We help joinery and construction firms showcase their work.</p>
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
