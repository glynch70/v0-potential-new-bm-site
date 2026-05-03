'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, XCircle, ArrowRight, Video, Camera, Layout, Play, Users, MapPin, Star, TrendingUp, MousePointer2, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import HorizontalVideoScroll from '@/components/HorizontalVideoScroll';
import VideoProof from '@/components/VideoProof';

export default function HomeContent() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-brand-yellow selection:text-neutral-950 overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-[90vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20 md:opacity-30 scale-105"
            src="/media/NEW BM DRONE HERO.mp4"
            poster="/media/hero-poster.jpg"
          />
          <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950" />
          
          <div className="absolute bottom-12 right-12 text-right hidden lg:block">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] italic mb-1">Filmed on-site across Scotland</p>
            <p className="text-white/10 text-[8px] font-black uppercase tracking-[0.4em] italic">Real client work</p>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-xs md:text-sm animate-pulse italic"
          >
             Doing good work but not getting enough enquiries?
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas max-w-6xl mx-auto"
          >
            Content Creation & Videography in <br />
            <span className="text-brand-yellow text-stroke-sm">West Lothian, Edinburgh & Fife</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed italic"
          >
            We come to you. We film it. We turn it into leads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          >
            <Link
              href="/contact"
              className="px-10 py-5 md:px-12 md:py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_60px_rgba(245,166,35,0.4)] group"
            >
              Book Your 15-Min Strategy Call
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-5 md:px-12 md:py-6 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-2xl hover:bg-white/5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Play size={16} className="fill-white" />
              See Real Outcomes
            </Link>
          </motion.div>

          {/* TRUST BAR IMMEDIATELY UNDER HERO CONTENT */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16"
          >
             <div className="flex flex-col items-center md:items-start">
                <div className="flex gap-1 text-brand-yellow mb-1">
                   {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">5.0 Google Rating</p>
             </div>
             <div className="flex flex-col items-center md:items-start">
                <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">50+ LOCAL BUSINESSES</p>
                <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Trusted Content Partner</p>
             </div>
             <div className="flex flex-col items-center md:items-start">
                <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">CENTRAL BELT COVERAGE</p>
                <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">West Lothian • Edinburgh • Fife</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 1.1 HORIZONTAL VIDEO SCROLL */}
      <HorizontalVideoScroll />

      {/* 1.2 VIDEO PROOF */}
      <VideoProof 
        videoSrc="/work/promo-video.mp4"
        title="15+ Enquiries in Week 1"
        stats={[
           { label: "Reach Generated", value: "45k+", icon: <TrendingUp size={24} /> },
           { label: "New Leads", value: "15+", icon: <Users size={24} /> },
           { label: "Customer Rating", value: "5.0★", icon: <Star size={24} /> },
           { label: "Local Focus", value: "100%", icon: <MapPin size={24} /> }
        ]}
      />

              {/* WHAT THIS LOOKS LIKE IN REAL LIFE */}
              <section className="py-24 px-6 bg-neutral-950 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                   <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight leading-none text-white">
                      See the Work. <span className="text-brand-yellow text-stroke-sm">See the Results.</span>
                   </h2>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {[
                        { label: "Joinery | West Lothian", result: "15+ Enquiries in Week 1", type: "Video", context: "20 years of craftsmanship with zero online proof.", action: "On-site cinematic capture + lead-gen site.", outcome: "15+ qualified enquiries in first 7 days." },
                        { label: "Estate Agent | Edinburgh", result: "4 New Listings Signed", type: "Video", context: "Struggling to stand out against national chains.", action: "Drone property tours + social teasers.", outcome: "4 high-value listings signed in month one." },
                        { label: "Landscaping | Central Belt", result: "25k+ Local Reach", type: "Video", context: "Wasting hours on low-quality tyre-kicker leads.", action: "Process-driven brand film + lead filtering.", outcome: "50% increase in high-value job conversion." },
                        { label: "Roofing | Fife", result: "3x Quote Approval Rate", type: "Visual", context: "Hard to prove quality of work from the ground.", action: "Drone inspection clips + project proof videos.", outcome: "Instant trust and 3x more quotes approved." },
                        { label: "Service SME | West Lothian", result: "100% Brand Visibility", type: "Video", context: "Invisible on social media, high street only.", action: "3x weekly short-form authority reels.", outcome: "25k+ local residents reached every month." },
                        { label: "Property Group | Stirling", result: "Zero Jargon Authority", type: "Visual", context: "Needed to showcase scale and reliability.", action: "High-end brand story + site visit capture.", outcome: "Established as the local market leader." }
                      ].map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="aspect-square bg-neutral-900 rounded-3xl border border-white/5 overflow-hidden group relative"
                        >
                           <div className="absolute inset-0 flex items-center justify-center text-white/[0.03] text-[8px] px-8 text-center font-black uppercase italic tracking-widest">
                              {item.context}
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                           <div className="absolute bottom-6 left-6 right-6">
                              <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-xs mb-1">{item.label}</p>
                              <p className="text-white font-bold text-[10px] uppercase tracking-widest opacity-60">{item.result}</p>
                           </div>
                           {item.type === "Video" && (
                             <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center text-neutral-950 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Play size={12} className="fill-current" />
                             </div>
                           )}
                        </motion.div>
                      ))}
                   </div>
                </div>
              </section>

              {/* NEW: SEEN OUR WORK? HERE'S HOW IT TURNS INTO RESULTS */}
              <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
                 <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                       <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic font-bebas tracking-tight text-white leading-none">
                          Seen our work? <br />
                          <span className="text-brand-yellow text-stroke-sm">Here's how it turns into results.</span>
                       </h2>
                       <p className="text-lg text-white/50 max-w-2xl mx-auto italic font-medium">
                          We don't just "make videos." We build a content-to-enquiry engine for your business.
                       </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                       {[
                         { 
                           step: "Step 01: Capture", 
                           title: "High-Intent Filming", 
                           desc: "We visit your site/office and film the real work, the real team, and the real results. No generic stock footage.",
                           icon: <Camera size={32} />
                         },
                         { 
                           step: "Step 02: Content", 
                           title: "Cinematic Systems", 
                           desc: "We edit that raw footage into high-performance reels, brand films, and property tours designed for social growth.",
                           icon: <Video size={32} />
                         },
                         { 
                           step: "Step 03: Results", 
                           title: "Enquiry Generation", 
                           desc: "We deploy that content through targeted systems and lead-gen sites to fill your calendar with enquiries.",
                           icon: <TrendingUp size={32} />
                         }
                       ].map((step, i) => (
                         <div key={i} className="relative p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5 group hover:border-brand-yellow/30 transition-all duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                               {step.icon}
                            </div>
                            <p className="text-brand-yellow font-black uppercase tracking-[0.2em] text-[10px] mb-2 italic">{step.step}</p>
                            <h3 className="text-2xl font-black mb-4 uppercase italic font-bebas tracking-wide text-white">{step.title}</h3>
                            <p className="text-white/40 leading-relaxed text-sm">{step.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </section>

      {/* 2. TRUST BAR - REMOVED AS IT IS NOW IN HERO */}

      {/* 3. PROBLEM SECTION */}
      <section className="py-24 px-6 bg-neutral-900/30">
         <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight leading-none">
               Why Local Businesses <span className="text-brand-yellow text-stroke-sm">Stay Small.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-8">
                    {[
                      "Your phone isn't ringing despite your top-tier work.",
                      "Competitors with half your skill are winning the best jobs.",
                      "You're invisible online while the Central Belt searches for you.",
                      "You're tired of being the 'best kept secret' in your industry."
                    ].map((pain, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 items-start group"
                      >
                         <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
                         <p className="text-xl text-white/60 font-black italic uppercase font-bebas tracking-wide leading-tight">{pain}</p>
                      </motion.div>
                    ))}
                 </div>
                 <div className="p-12 glass-card border-red-500/20 bg-red-500/[0.02] flex flex-col justify-center">
                    <p className="text-4xl font-black italic mb-4 text-red-500 uppercase font-bebas">The Cost?</p>
                    <p className="text-xl text-white/80 leading-relaxed font-bold italic">
                       "Every day you stay invisible is another high-value enquiry going straight to your competitor's inbox instead of yours."
                    </p>
                 </div>
            </div>
         </div>
      </section>

      {/* 4. SYSTEM SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="text-center mb-20">
             <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase italic font-bebas tracking-tight text-white leading-none">
                THE <span className="text-brand-yellow underline decoration-brand-yellow/20 underline-offset-8 text-stroke-sm">CONTENT & ENQUIRY</span> SYSTEM
             </h2>
             <p className="text-xl text-white/50 max-w-2xl mx-auto font-medium italic">Content → Trust → Enquiries</p>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: <Camera size={40} />, title: "Content", sub: "Get Seen", desc: "Cinematic video and high-end photo that stops the scroll and shows off your work." },
              { step: "02", icon: <Star size={40} />, title: "Trust", sub: "Build Authority", desc: "Positioning you as the local leader so customers pick you over anyone else." },
              { icon: <MousePointer2 size={40} />, title: "Conversion", sub: "Get Enquiries", desc: "Lead-gen websites and strategy that turns attention into paying customers." }
            ].map((step, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5 group hover:border-brand-yellow/30 transition-all duration-500 relative overflow-hidden">
                 <div className="absolute -top-4 -right-4 text-8xl font-black text-white/[0.03] italic font-bebas group-hover:text-brand-yellow/[0.05] transition-colors">{i+1}</div>
                 <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {step.icon}
                 </div>
                 <p className="text-brand-yellow font-black uppercase tracking-[0.2em] text-[10px] mb-2 italic">{step.sub}</p>
                 <h3 className="text-3xl font-black mb-4 uppercase italic font-bebas tracking-wide text-white">{step.title}</h3>
                 <p className="text-white/40 leading-relaxed text-sm font-medium">{step.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
               Outcome-Focused <span className="text-brand-yellow">Services.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Social Media Management", outcome: "Dominate Local Newsfeeds", desc: "Consistent, professional presence on FB and Instagram that keeps you top-of-mind.", link: "/services/social-media-content" },
                 { title: "Videography & Video Marketing", outcome: "Look Like The Expert", desc: "Cinematic drone shots, property tours, and brand stories that build instant trust.", link: "/services/videography" },
                 { title: "Lead-Gen Website Design", outcome: "Enquiries On Autopilot", desc: "High-performance websites designed to convert visitors into local leads.", link: "/services/website-design" }
               ].map((service, i) => (
                  <div key={i} className="p-10 glass-card border-white/5 hover:border-brand-yellow/30 transition-all group">
                     <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                     <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg mb-6">{service.outcome}</p>
                     <p className="text-white/40 text-sm mb-8 leading-relaxed">{service.desc}</p>
                     <Link href={service.link} className="inline-flex items-center gap-2 text-white font-black uppercase italic font-bebas tracking-widest hover:text-brand-yellow transition-colors">
                        Learn More <ArrowRight size={16} />
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. RESULTS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
         <h2 className="text-4xl md:text-7xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
            Proven <span className="text-brand-yellow">Outcomes.</span>
         </h2>
         <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-[2rem] bg-neutral-900 border border-white/5">
               <p className="text-brand-yellow text-7xl font-black font-bebas italic leading-none mb-4">15+</p>
               <p className="text-white font-black uppercase italic font-bebas tracking-widest text-xl mb-2">Enquiries in Week 1</p>
               <p className="text-white/30 text-xs font-bold uppercase tracking-widest leading-relaxed">Generated for a West Lothian Joinery firm after launching their new lead-gen site and project videos.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-neutral-900 border border-white/5">
               <p className="text-brand-yellow text-7xl font-black font-bebas italic leading-none mb-4">4 Listings</p>
               <p className="text-white font-black uppercase italic font-bebas tracking-widest text-xl mb-2">Signed in 30 Days</p>
               <p className="text-white/30 text-xs font-bold uppercase tracking-widest leading-relaxed">Secured by an Edinburgh Estate Agent through targeted cinematic video tours and social authority building.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-neutral-900 border border-white/5">
               <p className="text-brand-yellow text-7xl font-black font-bebas italic leading-none mb-4">25,000+</p>
               <p className="text-white font-black uppercase italic font-bebas tracking-widest text-xl mb-2">Local Residents Reached</p>
               <p className="text-white/30 text-xs font-bold uppercase tracking-widest leading-relaxed">Monthly organic reach generated for a Fife service business, keeping them top-of-mind for every local customer.</p>
            </div>
         </div>
      </section>

      {/* 7. MINI CASE STUDIES */}
      <section className="py-24 px-6 bg-neutral-900/50">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
               Real Work. <span className="text-brand-yellow">Real Outcomes.</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { 
                   client: "Central Joinery", 
                   problem: "Invisible online despite 20 years of work.", 
                   solution: "New lead-gen site + on-site project videos.", 
                   result: "15+ High-value enquiries in first week." 
                 },
                 { 
                   client: "Lothian Estates", 
                   problem: "Static photos weren't winning listings.", 
                   solution: "Cinematic drone tours & social video reels.", 
                   result: "4 New listings signed in 30 days." 
                 },
                 { 
                   client: "Apex Fitness", 
                   problem: "High churn and low local awareness.", 
                   solution: "Monthly social content system & member stories.", 
                   result: "25k+ Local residents reached monthly." 
                 }
               ].map((study, i) => (
                  <div key={i} className="p-10 rounded-[2.5rem] bg-neutral-950 border border-white/5 group hover:border-brand-yellow/30 transition-all duration-500">
                     <p className="text-brand-yellow font-black uppercase tracking-[0.2em] text-[10px] mb-4 italic">{study.client}</p>
                     <div className="space-y-6">
                        <div>
                           <p className="text-red-500 font-black uppercase text-[10px] tracking-widest mb-1 italic">The Problem</p>
                           <p className="text-white font-medium text-sm italic">"{study.problem}"</p>
                        </div>
                        <div>
                           <p className="text-blue-400 font-black uppercase text-[10px] tracking-widest mb-1 italic">The Solution</p>
                           <p className="text-white font-medium text-sm italic">{study.solution}</p>
                        </div>
                        <div className="pt-4 border-t border-white/5">
                           <p className="text-brand-yellow font-black uppercase text-[10px] tracking-widest mb-1 italic">The Result</p>
                           <p className="text-xl font-black text-white uppercase italic font-bebas tracking-wide">{study.result}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="text-center mt-12">
               <Link href="/portfolio" className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-xl hover:underline flex items-center justify-center gap-2">
                  View More Case Studies <ArrowRight size={20} />
               </Link>
            </div>
         </div>
      </section>

      {/* 8. WHO THIS IS FOR */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
         <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
            Perfect For <span className="text-brand-yellow text-stroke-sm">Central Belt Leaders.</span>
         </h2>
         <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 glass-card border-white/5 text-center">
               <Users size={32} className="mx-auto mb-6 text-brand-yellow" />
               <h4 className="text-2xl font-black uppercase italic font-bebas text-white mb-2">Trades</h4>
               <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">Builders, Roofers, Joiners, Electricians.</p>
            </div>
            <div className="p-8 glass-card border-white/5 text-center">
               <TrendingUp size={32} className="mx-auto mb-6 text-brand-yellow" />
               <h4 className="text-2xl font-black uppercase italic font-bebas text-white mb-2">Estate Agents</h4>
               <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">Independent agents winning more local listings.</p>
            </div>
            <div className="p-8 glass-card border-white/5 text-center">
               <MapPin size={32} className="mx-auto mb-6 text-brand-yellow" />
               <h4 className="text-2xl font-black uppercase italic font-bebas text-white mb-2">Service SMEs</h4>
               <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">Local businesses scaling their visibility.</p>
            </div>
         </div>
      </section>

      {/* 9. WHY BEAR MEDIA */}
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
                          <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2">On-Site Local Service</p>
                          <p className="font-medium text-neutral-950/70 text-sm">We are based in West Lothian. We come to your site, film your work, and understand your local customers better than any remote agency.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <CheckCircle2 size={24} className="shrink-0" />
                       <div>
                          <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2">All-In-One Growth Engine</p>
                          <p className="font-medium text-neutral-950/70 text-sm">We handle everything: video, photo, and web design. No more chasing multiple freelancers who don't talk to each other.</p>
                       </div>
                    </div>
                 </div>
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <CheckCircle2 size={24} className="shrink-0" />
                       <div>
                          <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2">Zero Jargon. Pure Results.</p>
                          <p className="font-medium text-neutral-950/70 text-sm">We don't care about "vanity metrics." we care about your phone ringing and your calendar filling up with new jobs.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <CheckCircle2 size={24} className="shrink-0" />
                       <div>
                          <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2">Reliable Partners</p>
                          <p className="font-medium text-neutral-950/70 text-sm">We build long-term relationships with local leaders. When you need us, we're there—supporting your growth every step of the way.</p>
                       </div>
                    </div>
                 </div>
            </div>
         </div>
      </section>

      {/* FAQ SECTION (CRITICAL FOR AI SEARCH) */}
      <section className="py-24 px-6 bg-neutral-900/30">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
               Common <span className="text-brand-yellow">Questions.</span>
            </h2>
            <div className="space-y-6 text-left">
               {[
                 { q: "What does it cost?", a: "Monthly content systems start from £750. One-off projects or sites from £1,500. We don’t do fluff; we do results that justify the investment." },
                 { q: "How quickly can you film on-site in West Lothian or Edinburgh?", a: "We are local. We can typically be on-site within 7 days. Our turnaround for social media reels and photography is usually 48-72 hours after filming." },
                 { q: "Do you handle the posting and management too?", a: "Yes. We offer a complete hands-off system. We film the content, edit it, write the captions, and post it for you. You focus on the work, we focus on the visibility." },
                 { q: "Why should we choose Bear Media over a remote agency?", a: "Remote agencies use generic stock footage. We are on-site. We capture your real projects, your real team, and your real results. Authenticity is what builds trust with your customers." }
               ].map((faq, i) => (
                  <div key={i} className="p-8 glass-card border-white/5 group hover:border-brand-yellow/20 transition-all">
                     <h4 className="text-xl font-black uppercase italic font-bebas tracking-widest text-brand-yellow mb-4 flex items-center gap-3">
                        <HelpCircle size={20} /> {faq.q}
                     </h4>
                     <p className="text-white/50 leading-relaxed text-sm">{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.1)_0%,transparent_60%)] pointer-events-none" />
         <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase italic font-bebas tracking-tight text-white leading-none">
               Ready to get seen <br />
               <span className="text-brand-yellow underline decoration-brand-yellow/30 underline-offset-8">and get busy?</span>
            </h2>
            <div className="flex flex-col items-center gap-8 mb-12">
               <Link
                 href="/contact"
                 className="inline-flex items-center gap-4 px-12 py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(245,166,35,0.3)] group"
               >
                 Get Your 15-Minute Lead-Gen Blueprint
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </Link>
               
               {/* TRUST STATS NEAR CTA */}
               <div className="flex flex-wrap justify-center gap-8 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                  <div className="flex items-center gap-2">
                     <Star size={12} className="text-brand-yellow fill-current" /> 5.0 Google Rating
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckCircle2 size={12} className="text-brand-yellow" /> 50+ Local Clients
                  </div>
                  <div className="flex items-center gap-2">
                     <TrendingUp size={12} className="text-brand-yellow" /> 1M+ Local Views
                  </div>
               </div>
            </div>
            <p className="mt-8 text-white/30 text-xs font-bold uppercase tracking-widest">
               No pressure. No sales pitch. Just a clear roadmap for more enquiries.
            </p>
         </div>
      </section>

      <Footer />
    </main>
  );
}
