import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoProof from '@/components/VideoProof';
import { TrendingUp, Users, Star, MapPin, CheckCircle2 } from 'lucide-react';

export default function EstateAgentsIndustryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        {/* 1. Industry Hero */}
        {/* 1. Industry Hero */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 px-6 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic">
               The Agent's Competitive Edge
            </p>
            <h1 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas">
              Win More Local <br />
              <span className="text-brand-yellow text-stroke-sm">Property Listings.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed italic">
              Impress sellers and outperform national chains with cinematic drone tours and fast-turnaround video.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 md:px-12 md:py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(245,166,35,0.2)]"
            >
              Book Your 15-Min Strategy Call
            </Link>

            {/* TRUST BAR UNDER HERO */}
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16">
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex gap-1 text-brand-yellow mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">5.0 Google Rating</p>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">4+ NEW LISTINGS</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Average Monthly Growth</p>
               </div>
            </div>
          </div>
        </section>

        {/* 1.1 VIDEO PROOF SECTION */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="Cinematic Listing Authority"
          stats={[
             { label: "New Listings Won", value: "4+", icon: <TrendingUp size={24} /> },
             { label: "Targeted Views", value: "150k+", icon: <Users size={24} /> },
             { label: "Client Rating", value: "5.0★", icon: <Star size={24} /> },
             { label: "Central Belt Coverage", value: "100%", icon: <MapPin size={24} /> }
          ]}
        />

        {/* 2. The Agent's Edge */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-video bg-neutral-900 rounded-2xl border border-white/5 flex items-center justify-center text-neutral-700">
               <div className="text-center p-8 italic">Cinematic Walkthrough of a Georgian Townhouse in Edinburgh New Town</div>
            </div>
            <div>
               <h2 className="text-3xl font-bold mb-6 text-brand-yellow italic uppercase font-bebas tracking-wide">Win the Listing</h2>
               <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                 In a competitive property market, sellers choose the agent who provides the best exposure. Our cinematic walkthroughs and aerial drone tours position you as the premium choice.
               </p>
               <div className="space-y-6">
                  <div className="flex gap-4 p-6 glass-card border-white/5">
                     <div className="text-brand-yellow font-bold text-xl">🚁</div>
                     <div>
                        <h4 className="font-bold text-white mb-1">Drone Property Tours</h4>
                        <p className="text-neutral-500 text-sm">Aerial perspective that highlights location and scale.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 p-6 glass-card border-white/5">
                     <div className="text-brand-yellow font-bold text-xl">🎥</div>
                     <div>
                        <h4 className="font-bold text-white mb-1">Fast Listing Teasers</h4>
                        <p className="text-neutral-400 text-sm">High-impact social video delivered within 24-48 hours to build immediate hype.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. Branding for Agents */}
        <section className="py-20 px-6 bg-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 italic uppercase font-bebas tracking-wide">Agent Personal Branding</h2>
              <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
                People buy from people. We help individual agents build authority through consistent, professional content that showcases their local expertise.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                 <div className="p-10 glass-card">
                    <h4 className="text-xl font-bold mb-4 text-brand-yellow">Market Updates</h4>
                    <p className="text-neutral-500 text-sm">Position yourself as the local market expert with high-quality vertical video updates.</p>
                 </div>
                 <div className="p-10 glass-card">
                    <h4 className="text-xl font-bold mb-4 text-brand-yellow">Behind the Scenes</h4>
                    <p className="text-neutral-500 text-sm">Build trust by showing the hard work that goes into every sale.</p>
                 </div>
                 <div className="p-10 glass-card">
                    <h4 className="text-xl font-bold mb-4 text-brand-yellow">Agent Spotlights</h4>
                    <p className="text-neutral-500 text-sm">Humanize your agency and build lasting relationships with sellers.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. CTA */}
        <section className="py-24 px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-8 italic uppercase font-bebas tracking-tight text-white leading-none max-w-3xl mx-auto">
              Ready to dominate your <br />
              <span className="text-brand-yellow underline decoration-brand-yellow/30 underline-offset-8">local property market?</span>
           </h2>
           <Link href="/contact" className="inline-block bg-brand-yellow text-neutral-950 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_60px_rgba(245,166,35,0.3)]">
             Book a Strategy Call
           </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
