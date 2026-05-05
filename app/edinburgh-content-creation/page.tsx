import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Video, Camera, TrendingUp, Users, MapPin, Star, HelpCircle, Layout } from 'lucide-react';
import Link from 'next/link';
import VideoProof from '@/components/VideoProof';

export const metadata: Metadata = {
  title: 'Content Creation & Videography Edinburgh | Bear Media',
  description: 'Professional on-site content creation, cinematic videography and lead-gen systems for businesses across Edinburgh and the Lothians.',
};

export default function EdinburghPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 px-6 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-xs animate-pulse italic">
               Doing good work but not getting enough enquiries?
            </p>
            <h1 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas max-w-5xl mx-auto">
              Content Creation & <br />
              <span className="text-brand-yellow">Videography Edinburgh</span>
            </h1>
            <p className="text-lg md:text-2xl text-white max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed italic">
              We come to you. We film it. We turn it into enquiries for estate agents and businesses across the Capital.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 md:px-12 md:py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(245,166,35,0.2)]"
            >
              Book Your Edinburgh Strategy Call
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
                  <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">50+ LOCAL BUSINESSES</p>
                  <p className="text-white text-[9px] font-bold uppercase tracking-widest">Edinburgh Growth Partner</p>
               </div>
            </div>
          </div>
        </section>

        {/* 2. VIDEO PROOF */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="Edinburgh Property & Business Authority"
          stats={[
             { label: "Local Reach", value: "150k+", icon: <TrendingUp size={24} /> },
             { label: "Listings Won", value: "4+", icon: <Users size={24} /> },
             { label: "Google Rating", value: "5.0★", icon: <Star size={24} /> },
             { label: "Service Area", value: "Edinburgh Wide", icon: <MapPin size={24} /> }
          ]}
        />

        {/* 3. PROBLEM SECTION */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
              The Edinburgh <span className="text-brand-yellow">Attention Gap.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                 <p className="text-lg text-white italic leading-relaxed">
                    "Edinburgh is a high-trust market. If you don't look professional online, you don't even get considered. You're losing high-value listings and jobs to agents who have better video."
                 </p>
                 <p className="text-white text-sm">
                    Static photos and generic posts aren't enough in the Capital. Our cinematic drone work and authority content bridge the gap between your quality of work and your online perception.
                 </p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-brand-yellow/10">
                 <h4 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg mb-4">The Solution</h4>
                 <p className="text-white text-sm leading-relaxed mb-6">
                    We capture the premium nature of your Edinburgh business. From Leith to the Grange, we film on-site and turn that footage into a trust-building system that drives leads.
                 </p>
                 <Link href="/services/videography" className="text-white font-black uppercase italic font-bebas tracking-widest text-sm hover:text-brand-yellow transition-colors flex items-center gap-2">
                    Our Video System <ArrowRight size={16} />
                 </Link>
              </div>
           </div>
        </section>

        {/* 4. SERVICES EXPLANATION */}
        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Dominant Local <span className="text-brand-yellow">Visibility.</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                 {[
                   { title: "Cinematic Drone", desc: "Showcase Edinburgh property and scale from a perspective that wins attention.", icon: <MapPin /> },
                   { title: "Authority Content", desc: "Video content that positions you as the expert in your specific Edinburgh area.", icon: <Video /> },
                   { title: "Lead-Gen Hubs", desc: "Websites designed to convert high-intent Edinburgh visitors into booked calls.", icon: <Layout /> }
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
              Edinburgh <span className="text-brand-yellow">FAQs.</span>
           </h2>
           <div className="space-y-6">
              {[
                { q: "How quickly can you turn around property tours?", a: "We deliver high-impact property teasers and full tours within 48-72 hours of filming, ensuring your Edinburgh listing hits the market with momentum." },
                { q: "Do you cover the whole of Edinburgh?", a: "Yes. From the City Centre to the Lothians, we serve all EH postcodes with on-site filming and strategy." },
                { q: "Can we use the content for paid ads?", a: "Absolutely. Our content is specifically edited to perform well as targeted Meta and Google ads to drive local traffic." },
                { q: "Why focus on video for Edinburgh businesses?", a: "Video builds trust faster than any other medium. In a professional market like Edinburgh, trust is the primary currency of growth." }
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
                 Ready to dominate <br /><span className="underline decoration-neutral-950/20 underline-offset-8">Edinburgh?</span>
              </h2>
              <p className="text-lg font-medium mb-12 text-neutral-950/70 italic">
                 Book a discovery call and let's build your Edinburgh lead-generation machine.
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
