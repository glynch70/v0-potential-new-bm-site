'use client'

import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, XCircle, ArrowRight, Camera, Video, BarChart3, Users, TrendingUp, Star, MapPin } from 'lucide-react';
import Link from 'next/link';
import VideoProof from '@/components/VideoProof';


export default function SocialMediaServicePage() {
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
               Likes don't pay the bills. Leads do.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas"
            >
              Social Content That <br />
              <span className="text-brand-yellow text-stroke-sm">Generates Leads.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed italic"
            >
              Professional on-site content that turns local views into booked discovery calls.
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
                Book Your 15-Min Content Audit
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
                  <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">400% GROWTH</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Typical Lead Increase</p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* 1.1 VIDEO PROOF SECTION */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="Social Content Authority"
          stats={[
             { label: "Local Reach", value: "45k+", icon: <TrendingUp size={24} /> },
             { label: "Lead Growth", value: "400%", icon: <Users size={24} /> },
             { label: "Client Rating", value: "5.0★", icon: <Star size={24} /> },
             { label: "Local Focus", value: "100%", icon: <MapPin size={24} /> }
          ]}
        />

        {/* 2. SEE IT IN ACTION */}
        <section id="see-it-in-action" className="py-24 px-6 text-center max-w-7xl mx-auto">
           <h2 className="text-4xl md:text-7xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
              See it in <span className="text-brand-yellow">Action.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-16 glass-card border-brand-yellow/30 bg-brand-yellow/[0.03] text-left">
                 <h4 className="text-brand-yellow font-black text-9xl mb-4 font-bebas italic tracking-widest leading-none">400%</h4>
                 <p className="text-3xl font-black uppercase italic font-bebas text-white mb-4">Increase in Qualified Enquiries</p>
                 <p className="text-white/40 text-sm leading-relaxed max-w-md">This is what happens when you stop chasing likes and start building a local authority system. This was achieved for a West Lothian tradesman in just 90 days.</p>
              </div>
              <div className="grid gap-8">
                 <div className="p-12 glass-card border-white/5 bg-white/[0.01]">
                    <h4 className="text-brand-yellow font-black text-5xl mb-2 font-bebas italic tracking-widest">50K+</h4>
                    <p className="text-white font-bold uppercase tracking-widest text-xs">Targeted Local Views (Edinburgh Agent)</p>
                 </div>
                 <div className="p-12 glass-card border-white/5 bg-white/[0.01]">
                    <h4 className="text-brand-yellow font-black text-5xl mb-2 font-bebas italic tracking-widest">12 hrs</h4>
                    <p className="text-white font-bold uppercase tracking-widest text-xs">Saved Every Single Week (Fife SME)</p>
                 </div>
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
                    <TrendingUp className="text-brand-yellow mb-6" size={32} />
                    <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">Consistent Visibility</h4>
                    <p className="text-white/40 text-sm leading-relaxed">No more ghost towns. Your business stays top-of-mind for customers in West Lothian, Edinburgh, and Fife every single day.</p>
                 </div>
                 <div className="p-10 glass-card border-white/5">
                    <Star className="text-brand-yellow mb-6" size={32} />
                    <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">Instant Trust</h4>
                    <p className="text-white/40 text-sm leading-relaxed">When people see you on-site doing the work, the trust gap vanishes. They know you're the real deal before they even call.</p>
                 </div>
                 <div className="p-10 glass-card border-white/5">
                    <Users className="text-brand-yellow mb-6" size={32} />
                    <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">Qualified Enquiries</h4>
                    <p className="text-white/40 text-sm leading-relaxed">We don't chase vanity metrics. We focus on the content that makes the phone ring and fills your calendar with new jobs.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. THE 3-STEP PROCESS */}
        <section id="how-it-works" className="py-24 px-6 bg-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight">
                 Our <span className="text-brand-yellow">Simple 3-Step Process</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-12">
                 {[
                   { step: "01", title: "The Strategy", desc: "We sit down for 15 minutes to map out exactly what content will bring you the best leads. No guesswork." },
                   { step: "02", title: "The Shoot", desc: "We come to your site in West Lothian, Edinburgh, or Fife and film everything for you. Minimal disruption." },
                   { step: "03", title: "The Results", desc: "We edit and deliver high-impact content that builds trust and gets your phone ringing. Simple." }
                 ].map((item, i) => (
                    <div key={i} className="p-10 glass-card border-white/5 relative overflow-hidden group">
                       <div className="absolute -top-4 -right-4 text-8xl font-black text-white/[0.03] italic font-bebas group-hover:text-brand-yellow/[0.05] transition-colors">{item.step}</div>
                       <h3 className="text-2xl font-black mb-4 uppercase italic font-bebas tracking-wide text-brand-yellow">{item.title}</h3>
                       <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. PATTERN BREAK SECTION */}
        <section className="py-20 bg-brand-yellow overflow-hidden relative group">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
           <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <h2 className="text-4xl md:text-6xl font-black text-neutral-950 uppercase italic font-bebas tracking-tighter leading-none">
                 Stop Guessing. <br /> Start Growing.
              </h2>
              <div className="text-neutral-950/80 font-bold uppercase italic font-bebas text-2xl tracking-widest text-right">
                 No Fluff. No Filler. <br /> Just Results.
              </div>
           </div>
        </section>

        {/* 5. WHY THIS WORKS */}
        <section className="py-24 px-6 max-w-5xl mx-auto text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase italic font-bebas tracking-tight text-white leading-none">
              Why Our <span className="text-brand-yellow">System Works.</span>
           </h2>
           <p className="text-xl text-white/50 mb-12 leading-relaxed font-medium">
              Most providers focus on "making things look nice." We focus on the psychology of local buyers. 
           </p>
           <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
              <div className="p-10 glass-card border-white/5">
                 <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">1. Frictionless Capture</h4>
                 <p className="text-white/40 text-sm leading-relaxed">We don't interrupt your day. We film you and your team doing what you do best, then handle 100% of the production.</p>
              </div>
              <div className="p-10 glass-card border-white/5">
                 <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">2. Trust-First Editing</h4>
                 <p className="text-white/40 text-sm leading-relaxed">We edit specifically to build authority. Your customers don't want polished actors—they want to see the real work.</p>
              </div>
           </div>

           {/* MID-PAGE CTA */}
           <Link href="/contact" className="inline-flex items-center gap-4 text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg md:text-2xl hover:scale-105 transition-transform group">
              Fix Your Visibility <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
           </Link>
        </section>

        {/* 5. OUTCOME-DRIVEN BREAKDOWN */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Video size={32} />, 
                title: "Dominate Discovery", 
                desc: "Reels and TikToks that put your business in front of local customers on autopilot." 
              },
              { 
                icon: <Camera size={32} />, 
                title: "Authority Visuals", 
                desc: "High-end photo and video of your real work that builds instant trust." 
              },
              { 
                icon: <BarChart3 size={32} />, 
                title: "The Roadmap", 
                desc: "A clear content plan designed to generate enquiries, not just likes." 
              },
              { 
                icon: <CheckCircle2 size={32} />, 
                title: "Time Recovery", 
                desc: "We film, edit, and deliver everything. You stay focused on running your business." 
              }
            ].map((service, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5 hover:border-brand-yellow/30 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase italic font-bebas tracking-wide text-white group-hover:text-brand-yellow transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

         {/* 6. SEARCH-INTENT SECTIONS */}
         <section className="py-24 px-6 bg-neutral-900">
            <div className="max-w-7xl mx-auto">
               <div className="grid md:grid-cols-3 gap-12">
                  {/* WHO IS THIS FOR? */}
                  <div className="p-10 rounded-[2.5rem] bg-neutral-950 border border-white/5 h-full">
                     <h3 className="text-2xl font-black mb-6 uppercase italic font-bebas tracking-wide text-brand-yellow">Who is this for?</h3>
                     <ul className="space-y-4">
                        {[
                          { title: "Trades", desc: "Builders, roofers, and joiners needing to prove quality." },
                          { title: "Estate Agents", desc: "Winning listings with authority-building reels." },
                          { title: "Service SMEs", desc: "Local businesses wanting to stay top-of-mind." }
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
                     <p className="text-white/60 text-sm leading-relaxed mb-6">We don't focus on vanity metrics. You can expect:</p>
                     <ul className="space-y-4">
                        {[
                          "Consistent local visibility in your area.",
                          "Improved trust before customers pick up the phone.",
                          "Higher quality leads from people who know your work.",
                          "Hours of your time back every single week."
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
                        Social content systems in Scotland typically range from **£500 to £2,000+ per month** depending on frequency and video complexity.
                     </p>
                     <Link href="/answers/how-much-does-social-media-content-cost-scotland" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase italic font-bebas tracking-widest hover:underline">
                        Read Our Full Pricing Guide <ArrowRight size={16} />
                     </Link>
                  </div>
               </div>
            </div>
         </section>

        {/* 7. DIFFERENTIATION */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
           <div className="grid md:grid-cols-2 gap-8 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-white/[0.02] uppercase italic font-bebas pointer-events-none hidden md:block">VS</div>
              
              <div className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/5">
                 <h3 className="text-2xl font-black mb-6 uppercase italic font-bebas tracking-wide text-white/40">Most Providers</h3>
                 <ul className="space-y-4 text-white/30 text-sm">
                    <li>❌ Chasing viral trends</li>
                    <li>❌ Posting random content</li>
                    <li>❌ Focusing on vanity metrics</li>
                    <li>❌ No business context</li>
                 </ul>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-brand-yellow/30 shadow-[0_0_50px_rgba(245,166,35,0.05)]">
                 <h3 className="text-2xl font-black mb-6 uppercase italic font-bebas tracking-wide text-brand-yellow">Bear Media</h3>
                 <ul className="space-y-4 text-white/80 text-sm font-medium">
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-yellow" /> We film everything for you on-site</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-yellow" /> No fluff or complicated agency jargon</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-yellow" /> Built specifically for business results</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-yellow" /> Local Central Belt focus (Lothians & Fife)</li>
                 </ul>
              </div>
           </div>
        </section>


        {/* 9. FAQ SECTION */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white">
              Common <span className="text-brand-yellow">Questions</span>
           </h2>
           <div className="space-y-6">
              {[
                { q: "How much does social media content cost?", a: "Pricing depends on your goals and shoot frequency. Most local businesses see the best results with our monthly retainers. View our full pricing breakdown here.", link: "/pricing" },
                { q: "Do I have to film anything myself?", a: "No. We come to your site in West Lothian, Edinburgh, or Fife and handle the entire production. You focus on your work; we capture the content." },
                { q: "What results can I expect?", a: "You can expect improved brand authority, better quality enquiries, and a professional digital presence that works 24/7 to build trust with local customers." },
                { q: "How often do you come out to film?", a: "This depends on your package. We typically visit once or twice a month to capture a bulk of content that keeps your social channels active and professional." },
                { q: "Will this work for my specific trade?", a: "Yes. We have built systems specifically for builders, plumbers, estate agents, and local service businesses. See our case studies for proof.", link: "/portfolio" },
                { q: "What about other services?", a: "We also provide Lead-Gen Websites and Videography. If you need a full digital overhaul, we can map that out for you.", link: "/services" }
              ].map((faq, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5">
                   <h4 className="text-lg font-bold mb-3 text-white">{faq.q}</h4>
                   <p className="text-white/50 text-sm leading-relaxed">
                      {faq.a} {faq.link && <Link href={faq.link} className="text-brand-yellow hover:underline ml-1">Learn more.</Link>}
                   </p>
                </div>
              ))}
           </div>
        </section>

        {/* 10. PRICING CTA */}
        <section className="py-24 px-6 border-t border-white/5">
           <div className="max-w-4xl mx-auto glass-card p-12 text-center border-brand-yellow/20">
              <h2 className="text-3xl font-black mb-6 uppercase italic font-bebas tracking-wide">Investment</h2>
              <p className="text-lg text-white/60 mb-10 leading-relaxed">
                 We offer transparent packages starting from foundational visibility to full-market dominance. 
                 View our pricing or request a custom quote for your specific project.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Link href="/pricing" className="text-brand-yellow font-black uppercase tracking-widest text-sm hover:underline decoration-2 underline-offset-8">View Pricing</Link>
                 <span className="text-white/10 hidden sm:block">|</span>
                 <Link href="/contact" className="text-white font-black uppercase tracking-widest text-sm hover:text-brand-yellow transition-colors">Request a Custom Quote</Link>
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.1)_0%,transparent_60%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Ready to get content that <br />
                 <span className="text-brand-yellow underline decoration-brand-yellow/30 underline-offset-8">actually works?</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(245,166,35,0.3)] group"
              >
                Get Your Free 15-Minute Visibility Audit
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <p className="mt-8 text-white/30 text-xs font-bold uppercase tracking-widest">
                 No pressure, no sales pitch. Just 3 quick wins for your business.
              </p>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
