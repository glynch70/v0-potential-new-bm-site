import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, XCircle, CheckCircle2, TrendingUp, Users, MousePointer2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Your Business Is Not Getting Enquiries | Bear Media',
  description: 'Learn why your website or social media isn\'t generating leads in Scotland — and the practical fixes Bear Media uses for local businesses.',
  alternates: {
    canonical: 'https://bear-media.com/insights/why-business-not-getting-enquiries',
  },
  openGraph: {
    url: 'https://bear-media.com/insights/why-business-not-getting-enquiries',
    title: 'Why Your Business Is Not Getting Enquiries | Bear Media',
    description: 'Learn why your website or social media isn\'t generating leads in Scotland — and the practical fixes Bear Media uses for local businesses.',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Your Business Is Not Getting Enquiries | Bear Media',
    images: ['/og-image.jpg'],
  },
};

import Script from 'next/script';


const breadcrumbSchema_insights_why_business_not_getting_enquiries = {
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
      "name": "Insights",
      "item": "https://bear-media.com/insights"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Why Your Business Is Not Getting Enquiries",
      "item": "https://bear-media.com/insights/why-business-not-getting-enquiries"
    }
  ]
};

export default function EnquiriesArticle() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why isn't my business getting enquiries online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most local businesses fail to get enquiries due to a trust gap, lack of clear conversion paths, or passive visibility. We fix this with high-impact content and lead-gen systems."
        }
      },
      {
        "@type": "Question",
        "name": "How can on-site video improve my lead generation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On-site video provides authentic proof of your work, which builds trust much faster than stock photos or text descriptions, leading to higher conversion rates."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-insights-why-business-not-getting-enquiries"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_insights_why_business_not_getting_enquiries) }}
      />
      <Script
        id="faq-schema-insight"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        
        {/* HERO */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <Link href="/insights" className="text-gold font-black uppercase tracking-widest text-[13px] md:text-sm mb-8 inline-block hover:underline italic">← Back to Insights</Link>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas">
              Why Your Business <br />
              <span className="text-gold">Isn’t Getting Enquiries</span> <br />
              Online
            </h1>
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed italic max-w-2xl">
              Doing good work isn't enough anymore. If your phone is silent, one of these three things is usually to blame.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <article className="py-24 px-6 max-w-4xl mx-auto border-t border-white/5">
           <div className="prose prose-invert prose-brand max-w-none">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-wide text-white mb-8">The "Best Kept Secret" Trap</h2>
              <p className="text-white text-lg leading-relaxed mb-12">
                 We see it every week in West Lothian and Edinburgh. Master craftsmen, expert agents, and dedicated service owners who are the best at what they do, but are virtually invisible online. If your potential customers don't know you exist, or don't trust you within 3 seconds of finding you, they move on.
              </p>

              <div className="space-y-12 mb-16">
                 <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5">
                    <h3 className="text-red-500 font-black uppercase italic font-bebas tracking-widest text-xl mb-4 flex items-center gap-3">
                       <XCircle /> 01. The Trust Gap
                    </h3>
                    <p className="text-white leading-relaxed mb-4">
                       Your website uses stock photos. Your social media hasn't been updated in 3 months. When a customer finds you, they don't see proof—they see a business that might not even be operating. 
                    </p>
                    <p className="text-gold font-black uppercase italic font-bebas tracking-widest text-sm">The Fix: On-site video proof and consistent posting.</p>
                 </div>

                 <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5">
                    <h3 className="text-red-500 font-black uppercase italic font-bebas tracking-widest text-xl mb-4 flex items-center gap-3">
                       <XCircle /> 02. No Clear Path to Conversion
                    </h3>
                    <p className="text-white leading-relaxed mb-4">
                       If a user has to search for your phone number or fill out a 20-field form just to talk to you, they won't do it. Most websites are digital brochures, not lead-generation machines.
                    </p>
                    <p className="text-gold font-black uppercase italic font-bebas tracking-widest text-sm">The Fix: Frictionless "Book a Call" triggers and lead-gen architecture.</p>
                 </div>

                 <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5">
                    <h3 className="text-red-500 font-black uppercase italic font-bebas tracking-widest text-xl mb-4 flex items-center gap-3">
                       <XCircle /> 03. Passive Visibility
                    </h3>
                    <p className="text-white leading-relaxed mb-4">
                       Waiting for people to find you on Google page 4 isn't a strategy. You need to be where they are: scrolling on their phones. 
                    </p>
                    <p className="text-gold font-black uppercase italic font-bebas tracking-widest text-sm">The Fix: Targeted local social content and SEO-optimized landing pages.</p>
                 </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-wide text-white mb-8">Content → Trust → Enquiries</h2>
              <p className="text-white text-lg leading-relaxed mb-8">
                 The formula is simple but hard to execute. You need high-quality content that stops the scroll, builds instant authority by showing the real work, and then points them to a website built to close the deal.
              </p>

              <div className="p-12 rounded-[2.5rem] bg-gold text-neutral-950 mb-16">
                 <h3 className="text-2xl font-black uppercase italic font-bebas tracking-tight mb-4">Let's Fix Your System</h3>
                 <p className="font-medium mb-8">
                    We specialize in taking businesses from invisible to top-of-mind across the Central Belt. We don't do fluff—we do enquiries.
                 </p>
                 <Link href="/contact" className="inline-flex items-center gap-4 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                    Get Your 15-Min Lead-Gen Blueprint <ArrowRight size={16} />
                 </Link>
              </div>
           </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
