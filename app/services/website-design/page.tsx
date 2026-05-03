import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, XCircle, ArrowRight, Layout, PenTool, Rocket, Headphones, ShieldCheck, Globe, Zap, MousePointer2, TrendingUp, Users, Star, MapPin } from 'lucide-react';
import Link from 'next/link';
import VideoProof from '@/components/VideoProof';

export const metadata: Metadata = {
  title: 'Website Design & Lead Generation West Lothian | Bear Media',
  description: 'Professional website design for local businesses in West Lothian, Edinburgh, and Fife. We build high-converting lead generation systems for trades and estate agents.',
};

export default function WebsiteDesignServicePage() {
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
               Stop wasting money on digital brochures.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas"
            >
              Websites That <br />
              <span className="text-brand-yellow text-stroke-sm">Generate Enquiries.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed italic"
            >
              We build high-performance lead generation systems for trades and local businesses.
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
                Get Your Lead-Gen Blueprint
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
                  <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">50+ LOCAL BUSINESSES</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Trusted Web Partner</p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* 1.1 VIDEO PROOF SECTION */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="Lead-Gen System Authority"
          stats={[
             { label: "Reach Generated", value: "25k+", icon: <TrendingUp size={24} /> },
             { label: "New Leads", value: "20+", icon: <Users size={24} /> },
             { label: "Client Rating", value: "5.0★", icon: <Star size={24} /> },
             { label: "Local Focus", value: "100%", icon: <MapPin size={24} /> }
          ]}
        />        {/* 2. SEE IT IN ACTION - BUSINESS IMPACT */}
        <section id="see-it-in-action" className="py-24 px-6 text-center max-w-7xl mx-auto">
           <h2 className="text-4xl md:text-7xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
              See it in <span className="text-brand-yellow">Action.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8 text-left">
                 <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5">
                    <h3 className="text-white/40 font-black uppercase italic font-bebas tracking-widest text-xl mb-4">Before: Digital Brochure</h3>
                    <ul className="space-y-3 text-white/30 text-sm">
                       <li>❌ Slow loading & confusing navigation</li>
                       <li>❌ No clear way to book or enquire</li>
                       <li>❌ Generic stock photos & jargon</li>
                       <li>❌ Hidden on Google page 5</li>
                    </ul>
                 </div>
                 <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-brand-yellow/30 shadow-[0_0_50px_rgba(245,166,35,0.05)]">
                    <h3 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-xl mb-4 text-stroke-sm">After: Enquiry Machine</h3>
                    <ul className="space-y-3 text-white/80 text-sm font-medium">
                       <li>✅ Built-in video proof & authority</li>
                       <li>✅ Frictionless "Book a Call" triggers</li>
                       <li>✅ Local SEO signals for Central Belt</li>
                       <li>✅ Extreme speed & mobile optimization</li>
                    </ul>
                 </div>
              </div>
              <div className="p-16 glass-card border-brand-yellow/30 bg-brand-yellow/[0.03] text-left h-full flex flex-col justify-center">
                 <h4 className="text-brand-yellow font-black text-9xl mb-4 font-bebas italic tracking-widest leading-none">15+</h4>
                 <p className="text-3xl font-black uppercase italic font-bebas text-white mb-4">Enquiries in Week 1</p>
                 <p className="text-white/40 text-sm leading-relaxed">This is the real-world business impact of switching from a passive website to a conversion-led system. Built for a West Lothian joinery firm.</p>
              </div>
           </div>
        </section>

        {/* 3. WHAT RESULTS CAN YOU EXPECT? */}
        <section className="py-24 px-6 bg-neutral-900/50 border-y border-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight">
                 What Results Can You <span className="text-brand-yellow">Expect?</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                 <div className="p-10 glass-card border-white/5">
                    <MousePointer2 className="text-brand-yellow mb-6" size={32} />
                    <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">More Qualified Leads</h4>
                    <p className="text-white/40 text-sm leading-relaxed">We don't just count visitors. We count enquiries. Expect a flood of people who are actually ready to hire you.</p>
                 </div>
                 <div className="p-10 glass-card border-white/5">
                    <Star className="text-brand-yellow mb-6" size={32} />
                    <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">Instant Authority</h4>
                    <p className="text-white/40 text-sm leading-relaxed">Your website will look more professional than your biggest competitor. Period. Trust is built before you even speak.</p>
                 </div>
                 <div className="p-10 glass-card border-white/5">
                    <TrendingUp className="text-brand-yellow mb-6" size={32} />
                    <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">Lead-Gen Automation</h4>
                    <p className="text-white/40 text-sm leading-relaxed">While you're on-site or in valuations, your website is capturing leads and filling your calendar on autopilot.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. SOLUTION SECTION */}
        <section className="py-24 px-6 max-w-5xl mx-auto text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase italic font-bebas tracking-tight text-white leading-none">
              Websites Built to <span className="text-brand-yellow">Convert.</span>
           </h2>
           <p className="text-xl text-white/50 mb-12 leading-relaxed font-medium italic">
              We don't do fluff. We build fast, simple, and effective websites designed for one thing: getting your phone to ring.
           </p>
           <Link href="/contact" className="inline-flex items-center gap-4 text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg md:text-2xl hover:scale-105 transition-transform group">
              Start Your Build <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
           </Link>
        </section>

        {/* 4. WHAT WE DO */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Zap size={32} />, title: "The Discovery System", desc: "Built-in local SEO that ensures your business shows up when customers in West Lothian & Edinburgh search for your services." },
                { icon: <Layout size={32} />, title: "The High-Trust Design", desc: "A premium visual experience that makes you look like the market leader before a customer even speaks to you." },
                { icon: <PenTool size={32} />, title: "The Instant Closer", desc: "Strategic messaging and clear calls-to-action that guide prospects to enquire immediately." },
                { icon: <Rocket size={32} />, title: "The Performance Edge", desc: "Extreme speed and mobile optimization so you never lose a customer to a slow-loading page." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5 hover:border-brand-yellow/30 transition-all duration-500 group">
                   <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      {item.icon}
                   </div>
                   <h3 className="text-2xl font-black mb-4 uppercase italic font-bebas tracking-wide text-white group-hover:text-brand-yellow transition-colors">{item.title}</h3>
                   <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
        </section>

        {/* 5. RESULTS SECTION */}
        <section className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl md:text-7xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Real Business <span className="text-brand-yellow">Outcomes.</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                 <div className="p-12 glass-card border-white/5">
                    <MousePointer2 size={32} className="text-brand-yellow mx-auto mb-6" />
                    <h4 className="text-3xl font-black uppercase italic font-bebas text-white mb-2">High-Quality Leads</h4>
                    <p className="text-white/40 text-sm">Stop wasting time on tyre-kickers. Get enquiries from people who are ready to buy.</p>
                 </div>
                 <div className="p-12 glass-card border-white/5">
                    <ShieldCheck size={32} className="text-brand-yellow mx-auto mb-6" />
                    <h4 className="text-3xl font-black uppercase italic font-bebas text-white mb-2">Total Confidence</h4>
                    <p className="text-white/40 text-sm">Finally have a website you are proud to show off to every potential customer.</p>
                 </div>
                 <div className="p-12 glass-card border-white/5">
                    <Globe size={32} className="text-brand-yellow mx-auto mb-6" />
                    <h4 className="text-3xl font-black uppercase italic font-bebas text-white mb-2">Market Authority</h4>
                    <p className="text-white/40 text-sm">Be the first name that comes to mind in West Lothian, Edinburgh, or Fife.</p>
                 </div>
              </div>
           </div>
        </section>

         {/* 6. SEARCH-INTENT SECTIONS */}
         <section className="py-24 px-6 bg-neutral-900/50">
            <div className="max-w-7xl mx-auto">
               <div className="grid md:grid-cols-3 gap-12">
                  {/* WHO IS THIS FOR? */}
                  <div className="p-10 rounded-[2.5rem] bg-neutral-950 border border-white/5 h-full">
                     <h3 className="text-2xl font-black mb-6 uppercase italic font-bebas tracking-wide text-brand-yellow">Who is this for?</h3>
                     <ul className="space-y-4">
                        {[
                          { title: "Ambitious Trades", desc: "Builders & contractors wanting to dominate locally." },
                          { title: "Independent Agents", desc: "Estate agents needing high-performance listing tools." },
                          { title: "Service SMEs", desc: "Local experts who have outgrown their basic site." }
                        ].map((item, i) => (
                          <li key={i} className="flex gap-3 items-start">
                             <CheckCircle2 size={18} className="text-brand-yellow shrink-0 mt-1" />
                             <div>
                                <p className="font-bold text-white text-sm leading-none mb-1">{item.title}</p>
                                <p className="text-white/40 text-xs">{item.desc}</p>
                             </div>
                          </li>
                        ))}
                     </ul>
                  </div>

                  {/* WHAT RESULTS? */}
                  <div className="p-10 rounded-[2.5rem] bg-neutral-950 border border-white/5 h-full">
                     <h3 className="text-2xl font-black mb-6 uppercase italic font-bebas tracking-wide text-brand-yellow">Expected Results?</h3>
                     <p className="text-white/60 text-sm leading-relaxed mb-6">A website that is an asset, not an expense:</p>
                     <ul className="space-y-4">
                        {[
                          "A flood of high-quality local enquiries.",
                          "Faster sales cycles through built-in trust.",
                          "A professional edge over every local competitor.",
                          "Automated lead capture that works 24/7."
                        ].map((res, i) => (
                          <li key={i} className="flex gap-3 items-center text-white/50 font-bold uppercase italic font-bebas tracking-widest text-[10px]">
                             <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full" /> {res}
                          </li>
                        ))}
                     </ul>
                  </div>

                  {/* HOW MUCH? */}
                  <div className="p-10 rounded-[2.5rem] bg-neutral-950 border border-brand-yellow/20 shadow-[0_0_40px_rgba(245,166,35,0.05)] h-full flex flex-col">
                     <h3 className="text-2xl font-black mb-6 uppercase italic font-bebas tracking-wide text-brand-yellow">What does it cost?</h3>
                     <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                        Lead-gen websites in Scotland typically range from **£1,500 to £5,000+** depending on size and content integration.
                     </p>
                     <Link href="/pricing" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase italic font-bebas tracking-widest hover:underline">
                        View Pricing & Packages <ArrowRight size={16} />
                     </Link>
                  </div>
               </div>
            </div>
         </section>

        {/* 7. WHY BUSINESSES CHOOSE BEAR MEDIA */}
        <section className="py-24 px-6 bg-brand-yellow text-neutral-950">
           <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-12 text-center uppercase italic font-bebas tracking-tight leading-none">
                 Why Businesses Choose <br /><span className="underline decoration-neutral-950/20 underline-offset-8">Bear Media.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <CheckCircle2 size={24} className="shrink-0" />
                       <div>
                          <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2">Local Central Belt Service</p>
                          <p className="font-medium text-neutral-950/70">We are based in West Lothian. We meet on-site, we understand your area, and we aren't just a voice on a screen.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <CheckCircle2 size={24} className="shrink-0" />
                       <div>
                          <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2">The Content + Web Combo</p>
                          <p className="font-medium text-neutral-950/70">We handle the photo and video content too. You get a complete lead-gen machine, not just a shell.</p>
                       </div>
                    </div>
                 </div>
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <CheckCircle2 size={24} className="shrink-0" />
                       <div>
                          <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2">Zero Agency Jargon</p>
                          <p className="font-medium text-neutral-950/70">No fluff. No "synergy." We talk business, leads, and growth. Simple and direct.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <CheckCircle2 size={24} className="shrink-0" />
                       <div>
                          <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2">100% Reliable Support</p>
                          <p className="font-medium text-neutral-950/70">When you need us, we're there. We don't launch and disappear. We support your growth long-term.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 8. LIFE AFTER LAUNCH */}
        <section className="py-24 px-6 max-w-7xl mx-auto text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
              Life After <span className="text-brand-yellow">Launch.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="p-12 glass-card border-white/5">
                 <h4 className="text-2xl font-black uppercase italic font-bebas text-white mb-6">What Happens Next?</h4>
                 <ul className="space-y-6">
                    <li className="flex gap-4 items-start">
                       <CheckCircle2 size={20} className="text-brand-yellow shrink-0" />
                       <p className="text-white/50 text-sm">Your business looks professional and high-end to every new visitor.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                       <CheckCircle2 size={20} className="text-brand-yellow shrink-0" />
                       <p className="text-white/50 text-sm">You start receiving qualified enquiries through your site automatically.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                       <CheckCircle2 size={20} className="text-brand-yellow shrink-0" />
                       <p className="text-white/50 text-sm">You save time by not having to explain your services over and over—the site does it for you.</p>
                    </li>
                 </ul>
              </div>
              <div className="aspect-video bg-neutral-950 rounded-3xl border border-white/5 flex items-center justify-center text-white/10 uppercase font-black text-xs tracking-widest italic p-12 text-center">
                 Real-time Enquiry Dashboard for a Livingston-based Contractor
              </div>
           </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
              Common <span className="text-brand-yellow">Questions.</span>
           </h2>
           <div className="space-y-6">
              {[
                { q: "How much does a website cost?", a: "Pricing depends on your needs, but we offer transparent project-based pricing tailored for local businesses. Most lead-gen systems start from foundational packages." },
                { q: "How long does it take to build?", a: "Typically 4 to 6 weeks from start to launch, depending on the complexity and content readiness." },
                { q: "Do you help with the content?", a: "Yes. This is where we are different. We can handle the messaging, photography, and videography so you don't have to." },
                { q: "Is there ongoing support?", a: "Absolutely. We don't just launch and leave. We offer maintenance and support packages to keep your site running perfectly." },
                { q: "Will this actually get me more leads?", a: "That is the goal. We build with conversion architecture and SEO integration specifically designed to get your phone ringing." }
              ].map((faq, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 group hover:border-brand-yellow/20 transition-all">
                   <div className="flex items-center gap-4 mb-3">
                      <h4 className="text-lg font-bold text-white">{faq.q}</h4>
                   </div>
                   <p className="text-white/50 text-sm leading-relaxed">
                      {faq.a}
                   </p>
                </div>
              ))}
           </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.1)_0%,transparent_60%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Ready for a website that <br />
                 <span className="text-brand-yellow underline decoration-brand-yellow/30 underline-offset-8">actually works?</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(245,166,35,0.3)] group"
              >
                Get Your 15-Minute Lead-Gen Blueprint
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <p className="mt-8 text-white/30 text-xs font-bold uppercase tracking-widest">
                 No fluff. No pressure. Just a clear path to better results.
              </p>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
