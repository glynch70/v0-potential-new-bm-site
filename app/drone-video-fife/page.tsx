import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Script from 'next/script';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export const metadata: Metadata = {
  title: 'Drone Video & Aerial Photography Fife | Bear Media',
  description: 'CAA licensed commercial drone video and aerial photography services for businesses across Dunfermline, Kirkcaldy, and Fife.',
  alternates: {
    canonical: 'https://bear-media.com/drone-video-fife',
  },
  openGraph: {
    url: 'https://bear-media.com/drone-video-fife',
    title: 'Drone Video & Aerial Photography Fife | Bear Media',
    description: 'CAA licensed commercial drone video and aerial photography services for businesses across Dunfermline, Kirkcaldy, and Fife.',
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
      "name": "Are you licensed to operate commercial drones in Fife?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We hold full CAA (Civil Aviation Authority) authorization and comprehensive commercial insurance policies, enabling us to conduct drone operations safely and legally throughout the Fife region."
      }
    },
    {
      "@type": "Question",
      "name": "Which towns in Fife do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover the entirety of Fife, including Dunfermline, Kirkcaldy, Glenrothes, St Andrews, Cupar, and the coastal villages of the East Neuk. We travel directly to your premises or project site."
      }
    },
    {
      "@type": "Question",
      "name": "What can commercial drone video do for my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aerial footage provides a powerful perspective that ground cameras cannot capture. It is ideal for highlighting the scale of construction progress, showcasing large commercial estates, profiling golf courses, or capturing scenic event venues in St Andrews."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if the weather is bad on the scheduled shoot day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Safety is our priority. If high winds or heavy rain prevent safe flight operations, we will monitor the forecast and reschedule the drone shoot for the next available clear day at no additional cost."
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
      "name": "Drone Video Fife",
      "item": "https://bear-media.com/drone-video-fife"
    }
  ]
};

export default function DroneVideoFife() {
  return (
    <>
      <Script
        id="fife-drone-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="fife-drone-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        
        {/* AEO SUMMARY BLOCK */}
        <div className="pt-24 pb-8 bg-neutral-950 border-b border-white/5">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed italic">
                 Bear Media provides premium CAA licensed drone video, high-resolution aerial photography, and commercial videography for construction sites, estates, and events across Fife.
              </p>
           </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-20 pb-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.03)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black italic uppercase font-bebas leading-[0.9] tracking-tight">
              Drone Video & <br className="hidden md:block"/> <span className="text-gold">Aerial Photography Fife</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-medium italic">
              Cinematic, CAA licensed aerial drone footage to showcase scale, project milestones, and commercial land assets in the Kingdom of Fife.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact" className="px-10 py-5 bg-gold text-neutral-950 font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all">
                 Book a Discovery Call
               </Link>
               <Link href="/case-studies/muirhouse-housing" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:bg-white/10 transition-all">
                 View Drone Case Study
               </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM & WHO IT'S FOR */}
        <section className="py-24 px-6 bg-neutral-900/30 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
             <div>
                <h2 className="text-3xl font-black italic uppercase font-bebas text-white mb-6">The Aerial Advantage</h2>
                <ul className="space-y-4">
                  {[
                    "Ground cameras fail to capture the true perimeter and scale of sites.",
                    "Unlicensed drone flights expose your company to massive CAA fines.",
                    "Amateur drone footage looks jittery and damages your professional brand.",
                    "Shaky framing fails to highlight critical architectural details.",
                    "Hiring raw drone pilots who don't understand marketing gets you zero conversion."
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
                   Professional drone solutions tailored for Fife business environments:
                </p>
                <ul className="space-y-3">
                  {["Construction Progression (Aerial updates in Dunfermline)", "Property Developers & Land Agents (Fife Estates)", "Golf Courses & Resort Venues (St Andrews tours)", "Events & Commercial Promos (Kirkcaldy & Glenrothes)", "Firms needing CAA compliant, fully insured flight teams"].map((audience, i) => (
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
                 <h2 className="text-3xl font-black uppercase italic font-bebas tracking-tight text-gold mb-6">Fife Drone Showcases</h2>
                 <p className="text-white/80 italic text-lg mb-8 max-w-2xl mx-auto">
                    Breathtaking 4K perspective documenting Fife landmarks and commercial projects.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <YouTubeEmbed videoId="ZzotfyCIwfA" title="Fife Coastal Drone Videography" label="Aerial Footage" />
                 </div>
                 <div className="bg-neutral-950 p-8 rounded-3xl border border-white/10">
                    <h3 className="text-xl font-black uppercase italic font-bebas text-white mb-4">Construction Progression Tracking</h3>
                    <p className="text-white/90 italic leading-relaxed mb-6">
                       We capture regular aerial site records in Fife, enabling developers to monitor build milestones, showcase construction volume to stakeholders, and document high-value assets securely.
                    </p>
                    <Link href="/case-studies/muirhouse-housing" className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-widest text-[13px] md:text-sm hover:translate-x-1 transition-transform">
                       View Housing Study <ArrowRight size={14} />
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
               { q: "Are you licensed to fly drones in Fife?", a: "Yes. We hold full Civil Aviation Authority (CAA) commercial authorization and fly under comprehensive public liability insurance." },
               { q: "Do you cover St Andrews and the coastal areas?", a: "Absolutely. We cover Dunfermline, Kirkcaldy, Glenrothes, St Andrews, Cupar, and the entire East Neuk of Fife." },
               { q: "Can we use drone footage for social media marketing?", a: "Yes, we structure and deliver edited content files in widescreen for website integration and vertical 9:16 aspect ratios for Instagram and TikTok feeds." },
               { q: "What happens if there is rain or high wind?", a: "Drone operations are weather-dependent. If high winds or rain compromise flight safety, we will reschedule the drone capture session to a clear day at no additional charge." }
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
              <h2 className="text-4xl md:text-6xl font-black italic uppercase font-bebas mb-6">Need drone content in Fife?</h2>
              <p className="font-bold italic mb-10">Let's map out your project aerial parameters.</p>
              <Link href="/contact" className="px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all shadow-xl inline-block">
                 Request a Drone Proposal
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
