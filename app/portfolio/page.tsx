import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Video, TrendingUp, Users, MapPin, Star, Play, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import VideoProof from '@/components/VideoProof';

export const metadata: Metadata = {
  title: 'Real Results & Case Studies | Bear Media West Lothian',
  description: 'See the real-world results we deliver for local businesses in West Lothian, Edinburgh, and Fife. Case studies on social media growth, lead generation, and videography.',
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 px-6 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic"
            >
               Proof is better than promises.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas"
            >
              Results That <br />
              <span className="text-brand-yellow text-stroke-sm">Fill Calendars.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed italic"
            >
              Real outcomes from local businesses in West Lothian, Edinburgh, and Fife.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
            >
              <Link
                href="/contact"
                className="px-10 py-5 md:px-12 md:py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(245,166,35,0.2)]"
              >
                Get Your Growth Roadmap
              </Link>
            </motion.div>

            {/* TRUST BAR UNDER HERO */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16"
            >
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex gap-1 text-brand-yellow mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">5.0 Google Rating</p>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">1M+ LOCAL VIEWS</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Generated for Clients</p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* 1.1 VIDEO PROOF SECTION */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="On-Site Coverage Mastery"
          stats={[
             { label: "Reach Generated", value: "1M+", icon: <TrendingUp size={24} /> },
             { label: "Local Clients", value: "50+", icon: <Users size={24} /> },
             { label: "Success Rate", value: "100%", icon: <CheckCircle2 size={24} /> },
             { label: "Google Rating", value: "5.0★", icon: <Star size={24} /> }
          ]}
        />

        {/* 2. TRUST BAR - REMOVED AS IT IS IN HERO */}

        {/* 3. FEATURED CASE STUDY */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
           <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
              Featured <span className="text-brand-yellow">Case Study.</span>
           </h2>
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-video bg-neutral-900 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-center justify-center text-white/10 uppercase font-black italic tracking-widest">
                    Cinematic Drone Tour for Edinburgh Luxury Apartment
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-8 left-8">
                    <div className="flex items-center gap-2 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-2">
                       <Play size={14} /> Video Case Study
                    </div>
                 </div>
              </div>
              <div className="space-y-8">
                 <div>
                    <span className="text-brand-yellow font-black uppercase tracking-[0.2em] text-xs mb-4 block">Independent Estate Agent | Edinburgh</span>
                    <h3 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-wide text-white leading-tight">
                       Winning 4 New Listings in 30 Days.
                    </h3>
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <h4 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg">Context</h4>
                       <p className="text-white/50 text-sm leading-relaxed">Struggling to stand out against national corporate agents. Low trust and few organic enquiries from local sellers.</p>
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg">Outcome</h4>
                       <p className="text-white/50 text-sm leading-relaxed">4 high-value listings signed in month one. Local dominance established through cinematic video and targeted social proof.</p>
                    </div>
                 </div>
                 <div className="p-10 glass-card border-brand-yellow/30 bg-brand-yellow/[0.03]">
                    <div className="flex items-center gap-4 mb-4">
                       <TrendingUp className="text-brand-yellow" />
                       <p className="text-2xl font-black italic uppercase font-bebas text-white">150,000+ Targeted Local Views</p>
                    </div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest italic">"Bear Media made us look like the only logical choice in our area."</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. MINI CASE STUDIES */}
        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
           <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Mini <span className="text-brand-yellow">Case Studies.</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { 
                     client: "High-End Joinery | West Lothian", 
                     problem: "High quality work but zero online proof. Relying on word of mouth.", 
                     solution: "On-site cinematic capture + Conversion-led landing page.", 
                     result: "15+ Enquiries in Week 1. 400% ROI in 90 days." 
                   },
                   { 
                     client: "Landscape Design | Edinburgh", 
                     problem: "Wasting hours on low-quality 'tyre-kicker' phone calls.", 
                     solution: "Premium visual proof system + Qualified lead filtering.", 
                     result: "50% increase in high-value job conversion rate." 
                   },
                   { 
                     client: "Service SME | Central Belt", 
                     problem: "Invisible online. High street presence but no digital reach.", 
                     solution: "Aggressive short-form video strategy (3 posts per week).", 
                     result: "25,000+ Local residents reached every single month." 
                   }
                 ].map((study, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5 hover:border-brand-yellow/30 transition-all duration-500 group">
                       <span className="text-brand-yellow/50 font-black uppercase tracking-widest text-[10px] mb-6 block">{study.client}</span>
                       <div className="space-y-6">
                          <div>
                             <h4 className="text-white font-bold uppercase italic font-bebas tracking-widest text-lg mb-2">Context</h4>
                             <p className="text-white/30 text-xs leading-relaxed">{study.problem}</p>
                          </div>
                          <div>
                             <h4 className="text-white font-bold uppercase italic font-bebas tracking-widest text-lg mb-2">Action</h4>
                             <p className="text-white/30 text-xs leading-relaxed">{study.solution}</p>
                          </div>
                          <div className="pt-4 border-t border-white/5">
                             <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-xl">{study.result}</p>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. THE RESULTS GRID */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
              The <span className="text-brand-yellow">Results Grid.</span>
           </h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { type: "Joinery | W. Lothian", action: "Cinematic Capture", result: "15+ Enquiries" },
                { type: "Agent | Edinburgh", action: "Drone Tour", result: "4 Listings Won" },
                { type: "Roofing | Fife", action: "Drone Proof", result: "Instant Trust" },
                { type: "Garden | Edinburgh", action: "Project Story", result: "High-Value Lead" },
                { type: "Service | Central Belt", action: "Authority Reel", result: "25k Reach" },
                { type: "Kitchens | Stirling", action: "Walkthrough", result: "Enquiry Boost" },
                { type: "Builder | Livingston", action: "Project Proof", result: "Closed Job" },
                { type: "Architect | Glasgow", action: "Brand Story", result: "Authority Win" }
              ].map((item, i) => (
                 <div key={i} className="aspect-[9/16] bg-neutral-900 rounded-3xl border border-white/5 overflow-hidden group relative">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-neutral-950/80">
                       <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg mb-2">{item.type}</p>
                       <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">{item.action}</p>
                       <div className="h-[1px] w-8 bg-brand-yellow/30 mb-4" />
                       <p className="text-white font-black uppercase italic font-bebas tracking-widest text-xl">{item.result}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-white/[0.03] text-[8px] px-8 text-center font-black uppercase italic tracking-widest">
                       {item.action}
                    </div>
                    <div className="absolute bottom-4 left-4 group-hover:hidden transition-all">
                       <Play size={16} className="text-brand-yellow opacity-50" />
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 6. SOUND FAMILIAR? */}
        <section className="py-24 px-6 max-w-4xl mx-auto text-center border-t border-white/5">
           <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase italic font-bebas tracking-tight text-white leading-none">
              Sound <span className="text-brand-yellow">Familiar?</span>
           </h2>
           <div className="grid gap-4">
              {[
                "Doing great work but nobody is seeing it.",
                "Spending hours on 'tyre-kicker' leads that go nowhere.",
                "Feeling like the 'best kept secret' in your area.",
                "Knowing you're better than competitors who look more professional online."
              ].map((pain, i) => (
                <div key={i} className="p-6 glass-card border-white/5 text-white/40 text-sm font-bold uppercase tracking-widest italic">
                   "{pain}"
                </div>
              ))}
           </div>
        </section>

        {/* 6. WHAT THIS MEANS FOR YOU */}
        <section className="py-24 px-6 bg-brand-yellow text-neutral-950">
           <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-12 text-center uppercase italic font-bebas tracking-tight leading-none">
                 What This Means <br /><span className="underline decoration-neutral-950/20 underline-offset-8">For Your Business.</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-12 text-center">
                 <div>
                    <MousePointer2 size={32} className="mx-auto mb-6" />
                    <h4 className="text-2xl font-black uppercase italic font-bebas mb-4">You Look Like the Leader</h4>
                    <p className="font-medium text-neutral-950/70 text-sm">When your work is presented cinematically, you instantly become the most trusted choice.</p>
                 </div>
                 <div>
                    <TrendingUp size={32} className="mx-auto mb-6" />
                    <h4 className="text-2xl font-black uppercase italic font-bebas mb-4">Enquiries on Autopilot</h4>
                    <p className="font-medium text-neutral-950/70 text-sm">A system that works while you're on-site, bringing you qualified leads without you lifting a finger.</p>
                 </div>
                 <div>
                    <Star size={32} className="mx-auto mb-6" />
                    <h4 className="text-2xl font-black uppercase italic font-bebas mb-4">Dominate Locally</h4>
                    <p className="font-medium text-neutral-950/70 text-sm">Stop competing on price. Compete on authority and dominate West Lothian, Edinburgh, or Fife.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.1)_0%,transparent_60%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Ready to get <br />
                 <span className="text-brand-yellow underline decoration-brand-yellow/30 underline-offset-8">real results?</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(245,166,35,0.3)] group"
              >
                Book Your Discovery Call
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <p className="mt-8 text-white/30 text-xs font-bold uppercase tracking-widest">
                 No-pressure, no sales pitch. Just a clear roadmap for your business.
              </p>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
