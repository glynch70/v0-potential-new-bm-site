import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Video, Camera, TrendingUp, Users, MapPin, Star, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import VideoProof from '@/components/VideoProof';

export const metadata: Metadata = {
  title: 'Content Creation & Videography West Lothian | Bear Media',
  description: 'Professional on-site content creation, videography and social media management for construction companies, trades businesses and local SMEs in West Lothian, Broxburn, Livingston, and Bathgate.',
  openGraph: {
    title: 'Content Creation & Videography West Lothian | Bear Media',
    description: 'Professional on-site content creation, videography and social media management for construction companies, trades businesses and local SMEs in West Lothian, Broxburn, Livingston, and Bathgate.',
    url: 'https://bear-media.com/west-lothian-content-creation',
    siteName: 'Bear Media',
    images: [
      {
        url: 'https://bear-media.com/work/mwm.jpg', // Standard open graph image
        width: 1200,
        height: 630,
        alt: 'Bear Media Content Creation in West Lothian',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function WestLothianContentCreationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans pt-24 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-black italic uppercase font-bebas leading-[0.9] text-white mb-6">
              Content Creation <span className="text-brand-yellow">West Lothian</span>
            </h1>
            <p className="text-white/70 italic text-lg max-w-2xl mx-auto leading-relaxed">
              We come to you. We film it. We turn it into enquiries for construction companies, trades businesses and local SMEs in Broxburn, Livingston, and Bathgate.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 md:px-12 md:py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(245,166,35,0.2)]"
            >
              Book Your West Lothian Strategy Call
            </Link>

            {/* TRUST BAR */}
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16">
               <div className="flex flex-col items-center md:items-start">
                  <div className="flex gap-1 text-brand-yellow mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-white text-[10px] font-black uppercase tracking-widest">5.0 Google Rating</p>
               </div>
               <div className="flex flex-col items-center md:items-start">
                  <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">25+ LOCAL BUSINESSES</p>
                  <p className="text-white text-[9px] font-bold uppercase tracking-widest">West Lothian Partner</p>
               </div>
            </div>
          </header>
        </article>

        {/* 2. VIDEO PROOF */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="West Lothian On-Site Mastery"
          stats={[
             { label: "Local Reach", value: "45k+", icon: <TrendingUp size={24} /> },
             { label: "Enquiries Generated", value: "15+", icon: <Users size={24} /> },
             { label: "Google Rating", value: "5.0★", icon: <Star size={24} /> },
             { label: "Service Areas", value: "Livingston & More", icon: <MapPin size={24} /> }
          ]}
        />

        {/* 3. PROBLEM SECTION */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
              The Invisible <span className="text-brand-yellow">West Lothian Business.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                 <p className="text-lg text-white italic leading-relaxed">
                    "You're the best kept secret in Broxburn or Livingston. You do great work, but your social media is a ghost town and your website isn't bringing in leads."
                 </p>
                 <p className="text-white text-sm">
                    Inconsistent content and poor visibility mean your potential customers are going to competitors who look more professional online, even if their work isn't as good as yours.
                 </p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-brand-yellow/10">
                 <h4 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg mb-4">The Solution</h4>
                 <p className="text-white text-sm leading-relaxed mb-6">
                    Our "While You Work" capture system ensures we get real, authentic footage of your team in action across West Lothian, turning that proof into a lead-generation machine.
                 </p>
                 <Link href="/services/social-media-content" className="text-white font-black uppercase italic font-bebas tracking-widest text-sm hover:text-brand-yellow transition-colors flex items-center gap-2">
                    Our Content System <ArrowRight size={16} />
                 </Link>
              </div>
           </div>
        </section>

        {/* 4. SERVICES EXPLANATION */}
        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Everything You Need to <span className="text-brand-yellow">Get Busy.</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                 {[
                   { title: "On-Site Videography", desc: "Cinematic reels and property tours filmed right here in West Lothian.", icon: <Video /> },
                   { title: "Lead-Gen Websites", desc: "High-performance sites that turn local visitors into qualified enquiries.", icon: <Camera /> },
                   { title: "Managed Socials", desc: "Consistent, professional presence that keeps you top-of-mind.", icon: <Users /> }
                 ].map((s, i) => (
                    <div key={i} className="p-10 glass-card border-white/5 group hover:border-brand-yellow/30 transition-all">
                       <div className="text-brand-yellow mb-6">{s.icon}</div>
                       <h3 className="text-xl font-bold text-white mb-4 uppercase italic font-bebas tracking-widest">{s.title}</h3>
                       <p className="text-white text-sm leading-relaxed">{s.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. FAQ SECTION */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
              West Lothian <span className="text-brand-yellow">FAQs.</span>
           </h2>
           <div className="space-y-6">
              {[
                { q: "Do you travel to Bathgate or Livingston for filming?", a: "Yes. We are based in West Lothian and serve all local towns including Broxburn, Livingston, Bathgate, and Whitburn with no travel fees." },
                { q: "How quickly can we start getting enquiries?", a: "Most West Lothian businesses see a significant jump in visibility within the first 30 days of consistent content and a conversion-led website." },
                { q: "Do I need to be on camera?", a: "Not if you don't want to be. We focus on 'The Work'—the craftsmanship and results that your customers actually care about." },
                { q: "Is this just for big companies?", a: "No. We specialize in helping local trades and small businesses in West Lothian scale through professional presence." }
              ].map((faq, i) => (
                 <div key={i} className="p-8 glass-card border-white/5">
                    <h4 className="text-xl font-black uppercase italic font-bebas tracking-widest text-brand-yellow mb-4 flex items-center gap-3">
                       <HelpCircle size={20} /> {faq.q}
                    </h4>
                    <p className="text-white leading-relaxed text-sm">{faq.a}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. CTA */}
        <section className="py-24 px-6 bg-brand-yellow text-neutral-950 text-center">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic font-bebas tracking-tight leading-none">
                 Ready to dominate <br /><span className="underline decoration-neutral-950/20 underline-offset-8">West Lothian?</span>
              </h2>
              <p className="text-lg font-medium mb-12 text-neutral-950/70 italic">
                 Book a discovery call and let's build your local lead-generation machine.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-neutral-950 text-white font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(0,0,0,0.5)]"
              >
                Book Your Discovery Call
                <ArrowRight size={16} />
              </Link>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
