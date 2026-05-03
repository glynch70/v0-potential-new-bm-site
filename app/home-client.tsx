'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, XCircle, ArrowRight, Video, Camera, Layout, Play, Users, MapPin, Star, TrendingUp, MousePointer2, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HorizontalVideoScroll from '@/components/HorizontalVideoScroll';
import VideoProof from '@/components/VideoProof';
import YouTubeEmbed from '@/components/YouTubeEmbed';

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
            className="w-full h-full object-cover opacity-40 grayscale"
          >
            <source src="/media/NEW BM DRONE HERO.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-neutral-950/60" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic"
          >
            West Lothian • Edinburgh • Fife
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[7rem] font-black mb-6 md:mb-8 leading-[0.85] tracking-tighter italic uppercase font-bebas max-w-4xl"
          >
            We come to you. <br />
            We film it. <br />
            <span className="text-brand-yellow text-stroke-sm">We get you leads.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-white/70 max-w-2xl mb-10 md:mb-12 font-medium leading-relaxed italic"
          >
            Premium videography and lead-generation systems for local businesses that mean business. No fluff. Just enquiries.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <Link
              href="/contact"
              className="px-10 py-5 md:px-12 md:py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(245,166,35,0.2)]"
            >
              Book Your Growth Roadmap
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-5 md:px-12 md:py-6 bg-white/5 text-white border border-white/10 font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              See Our Work
            </Link>
          </motion.div>

          {/* Video Overlay Text */}
          <div className="absolute bottom-0 right-0 hidden lg:block opacity-20 hover:opacity-40 transition-opacity">
             <p className="text-[10px] font-black uppercase tracking-[0.5em] italic rotate-90 origin-right translate-x-full">Filmed on-site across Scotland</p>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="py-8 bg-neutral-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center md:items-start">
             <div className="flex gap-1 text-brand-yellow mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
             </div>
             <p className="text-white font-black text-[10px] uppercase tracking-widest leading-none">5.0 Google Rating</p>
          </div>
          <div className="h-8 w-px bg-white/10 hidden md:block" />
          <div className="text-center md:text-left">
             <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">50+ LOCAL BUSINESSES</p>
             <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest leading-none">Trust Bear Media</p>
          </div>
          <div className="h-8 w-px bg-white/10 hidden md:block" />
          <div className="text-center md:text-left">
             <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">1M+ LOCAL VIEWS</p>
             <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest leading-none">Generated for Clients</p>
          </div>
        </div>
      </section>

      {/* 3. VIDEO PROOF SECTION */}
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

      {/* WHAT THIS LOOKS LIKE IN REAL LIFE */}
      <section className="py-16 md:py-24 px-6 bg-neutral-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-6xl font-black mb-6 uppercase italic font-bebas tracking-tight leading-none text-white">
                 See How This Works <br />
                 <span className="text-brand-yellow text-stroke-sm">In Real Life.</span>
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto italic font-medium">
                 Real clients. Real projects. Real outcomes captured across Scotland.
              </p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-12">
              <YouTubeEmbed 
                videoId="qrQK-maE3sA" 
                title="30 Years of Custom Sheds | Simply Sheds Scotland"
                description="Showcasing three decades of craftsmanship for a local Scottish family business. Built to prove quality and win trust from the first click."
                result="15+ qualified leads in first 14 days."
              />
              <YouTubeEmbed 
                videoId="VlyX1CueJCc" 
                title="Seafood Restaurant Refurb | St Andrews"
                description="Cinematic walkthrough of a high-end restaurant refurb. Positioned to build immediate hype before the grand reopening."
                result="Full booking calendar for opening week."
              />
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
              {[
                { label: "Joinery | West Lothian", result: "15+ Enquiries in Week 1", type: "Video", context: "20 years of craftsmanship with zero online proof.", action: "On-site cinematic capture + lead-gen site.", outcome: "15+ qualified enquiries in first 7 days." },
                { label: "Estate Agent | Edinburgh", result: "4 New Listings Signed", type: "Video", context: "Struggling to stand out against national chains.", action: "Drone property tours + social teasers.", outcome: "4 high-value listings signed in month one." },
                { label: "Landscaping | Central Belt", result: "25k+ Local Reach", type: "Video", context: "Wasting hours on low-quality tyre-kicker leads.", action: "Process-driven brand film + lead filtering.", outcome: "50% increase in high-value job conversion." },
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
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. HORIZONTAL VIDEO SCROLL */}
      <HorizontalVideoScroll />

      {/* 5. THE PROBLEM SECTION */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Doing Good Work But <br />
                 <span className="text-brand-yellow text-stroke-sm">Still Invisible?</span>
              </h2>
              <p className="text-xl text-white/50 mb-10 leading-relaxed font-medium italic">
                 Most local businesses in Scotland are the best kept secret in their town. Word of mouth is great, but it’s not a growth system.
              </p>
              <div className="space-y-6">
                 {[
                   "Your social media looks amateur compared to your work.",
                   "National corporate chains are stealing your local leads.",
                   "People find you online but don't trust you yet."
                 ].map((point, i) => (
                   <div key={i} className="flex gap-4 items-center">
                      <XCircle className="text-red-500 shrink-0" size={24} />
                      <p className="text-white font-black uppercase italic font-bebas tracking-widest text-lg">{point}</p>
                   </div>
                 ))}
              </div>
           </div>
           <div className="aspect-square bg-neutral-900 rounded-[3rem] border border-white/5 flex items-center justify-center text-white/[0.02] text-xs font-black uppercase tracking-[0.5em] italic p-12 text-center">
              Systematic visibility for trades and local experts
           </div>
        </div>
      </section>

      {/* 6. THE SOLUTION / 3-STEP SYSTEM */}
      <section className="py-16 md:py-24 px-6 bg-neutral-900/50">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
              How We Turn Work <span className="text-brand-yellow">Into Enquiries.</span>
           </h2>
           <div className="grid md:grid-cols-3 gap-12 text-left">
              {[
                { step: "01", title: "We Capture", desc: "We come to your site or office and film cinematic content that proves your authority." },
                { step: "02", title: "We Content", desc: "We turn that footage into high-performance social reels and lead-gen websites." },
                { step: "03", title: "We Convert", desc: "We deploy the system to rank locally and turn viewers into qualified enquiries." }
              ].map((item, i) => (
                <div key={i} className="relative group">
                   <span className="text-8xl font-black text-white/[0.03] absolute -top-12 -left-4 italic font-bebas group-hover:text-brand-yellow/10 transition-colors">{item.step}</span>
                   <h4 className="text-2xl font-black uppercase italic font-bebas tracking-widest text-white mb-4 relative z-10">{item.title}</h4>
                   <p className="text-white/40 leading-relaxed text-sm relative z-10">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. CORE SERVICES PREVIEW */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-center">
         <h2 className="text-4xl md:text-7xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
            The Growth <span className="text-brand-yellow text-stroke-sm">Toolkit.</span>
         </h2>
         <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Social Content", desc: "Cinematic reels and vertical video that stop the scroll.", icon: <Video /> },
              { title: "Lead-Gen Sites", desc: "Fast, premium websites built to convert local traffic.", icon: <MousePointer2 /> },
              { title: "Drone & Photo", desc: "Professional aerials and stills that prove your quality.", icon: <Camera /> }
            ].map((service, i) => (
               <Link key={i} href="/services" className="p-12 rounded-[3rem] bg-neutral-900 border border-white/5 hover:border-brand-yellow/30 transition-all group">
                  <div className="text-brand-yellow mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h4 className="text-2xl font-black uppercase italic font-bebas text-white mb-4 tracking-wide">{service.title}</h4>
                  <p className="text-white/40 text-sm italic">{service.desc}</p>
               </Link>
            ))}
         </div>
      </section>

      {/* 8. WHO WE WORK WITH (UPGRADED) */}
      <section className="py-16 md:py-24 px-6 bg-neutral-900/30">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
               Who We <span className="text-brand-yellow">Partner With.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="p-12 rounded-[3rem] bg-neutral-950 border border-white/5 hover:border-brand-yellow/30 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Users size={120} />
                  </div>
                  <h4 className="text-3xl font-black uppercase italic font-bebas text-white mb-4 tracking-wider">Local Trades</h4>
                  <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-sm mb-6">Builders • Joiners • Roofers</p>
                  <p className="text-white/40 leading-relaxed text-sm font-medium">You do the work, we show the world. We visit your sites across West Lothian and Edinburgh to capture the quality your competitors are hiding.</p>
               </div>
               <div className="p-12 rounded-[3rem] bg-neutral-950 border border-white/5 hover:border-brand-yellow/30 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                     <TrendingUp size={120} />
                  </div>
                  <h4 className="text-3xl font-black uppercase italic font-bebas text-white mb-4 tracking-wider">Estate Agents</h4>
                  <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-sm mb-6">Independents • High-Growth Teams</p>
                  <p className="text-white/40 leading-relaxed text-sm font-medium">Win more listings. We provide cinematic drone tours and social reels that make national chains look like amateurs in the local market.</p>
               </div>
               <div className="p-12 rounded-[3rem] bg-neutral-950 border border-white/5 hover:border-brand-yellow/30 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                     <MapPin size={120} />
                  </div>
                  <h4 className="text-3xl font-black uppercase italic font-bebas text-white mb-4 tracking-wider">Service SMEs</h4>
                  <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-sm mb-6">Lawyers • Coaches • Retail</p>
                  <p className="text-white/40 leading-relaxed text-sm font-medium">Build authority fast. We turn your expertise into high-performance short-form content that keeps your local customers engaged and buying.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 9. WHY BEAR MEDIA (DIRECT MESSAGING) */}
      <section className="py-16 md:py-24 px-6 bg-brand-yellow text-neutral-950">
         <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black mb-12 text-center uppercase italic font-bebas tracking-tight leading-none">
               No Jargon. <br /><span className="underline decoration-neutral-950/20 underline-offset-8">Just Enquiries.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-8">
                    <div className="flex gap-6">
                       <div className="w-12 h-12 rounded-full bg-neutral-950 text-brand-yellow flex items-center justify-center shrink-0 font-black italic">01</div>
                       <div>
                          <p className="font-black text-2xl uppercase italic font-bebas leading-none mb-2 tracking-wide">We Are Local</p>
                          <p className="font-bold text-neutral-950/70 text-sm leading-relaxed">Based in West Lothian, serving the Central Belt. We don't use stock footage—we film your real business, on-site, every time.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-12 h-12 rounded-full bg-neutral-950 text-brand-yellow flex items-center justify-center shrink-0 font-black italic">02</div>
                       <div>
                          <p className="font-black text-2xl uppercase italic font-bebas leading-none mb-2 tracking-wide">Built for ROI</p>
                          <p className="font-bold text-neutral-950/70 text-sm leading-relaxed">We don't care about "likes." We care about your phone ringing. Every piece of content is engineered to generate enquiries.</p>
                       </div>
                    </div>
                 </div>
                 <div className="space-y-8">
                    <div className="flex gap-6">
                       <div className="w-12 h-12 rounded-full bg-neutral-950 text-brand-yellow flex items-center justify-center shrink-0 font-black italic">03</div>
                       <div>
                          <p className="font-black text-2xl uppercase italic font-bebas leading-none mb-2 tracking-wide">All-In-One Partner</p>
                          <p className="font-bold text-neutral-950/70 text-sm leading-relaxed">Video, Photo, and Web. One partner who knows your brand and actually delivers on their promises.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-12 h-12 rounded-full bg-neutral-950 text-brand-yellow flex items-center justify-center shrink-0 font-black italic">04</div>
                       <div>
                          <p className="font-black text-2xl uppercase italic font-bebas leading-none mb-2 tracking-wide">Straight Talking</p>
                          <p className="font-bold text-neutral-950/70 text-sm leading-relaxed">No fluff. No complex agency talk. Just clear updates, fast turnarounds, and a focus on growing your business.</p>
                       </div>
                    </div>
                 </div>
            </div>
         </div>
      </section>

      {/* FAQ SECTION (CRITICAL FOR AI SEARCH) */}
      <section className="py-16 md:py-24 px-6 bg-neutral-900/30">
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

      {/* MEET TEAM BEAR MEDIA */}
      <section className="py-16 md:py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
               <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase italic font-bebas tracking-tight text-white leading-none">
                  Real People. Real Work. <br />
                  <span className="text-brand-yellow text-stroke-sm">No Agency Nonsense.</span>
               </h2>
               <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto italic font-medium leading-relaxed">
                  You’re not dealing with a big agency. You’re working directly with someone who cares about the result. And a couple of part-time assistants.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
               {/* GARRY */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="group"
               >
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-900 mb-8 relative">
                     <Image 
                        src="/team/garry_lynch_car.jpg" 
                        alt="Garry - Founder" 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                  </div>
                  <h4 className="text-3xl font-black uppercase italic font-bebas text-white mb-2 tracking-wide">Garry</h4>
                  <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-sm mb-4">Founder / Content & Strategy</p>
                  <p className="text-white/40 text-sm leading-relaxed italic">Keeps things simple. Focused on results, not fluff.</p>
               </motion.div>

               {/* LOLA */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="group"
               >
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-900 mb-8 relative">
                     <Image 
                        src="/team/lola_project_manager.jpg" 
                        alt="Lola - Head of Morale" 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                  </div>
                  <h4 className="text-3xl font-black uppercase italic font-bebas text-white mb-2 tracking-wide">Lola</h4>
                  <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-sm mb-4">Head of Morale</p>
                  <p className="text-white/40 text-sm leading-relaxed italic">Ensures long editing sessions stay on track.</p>
               </motion.div>

               {/* RORY */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="group"
               >
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-900 mb-8 relative">
                     <Image 
                        src="/team/rory_quality_control.jpg" 
                        alt="Rory - Security & Snack Supervisor" 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                  </div>
                  <h4 className="text-3xl font-black uppercase italic font-bebas text-white mb-2 tracking-wide">Rory</h4>
                  <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-sm mb-4">Security & Snack Supervisor</p>
                  <p className="text-white/40 text-sm leading-relaxed italic">Keeps an eye on everything. Especially food.</p>
               </motion.div>
            </div>

            <div className="mt-20 pt-12 border-t border-white/5 text-center">
               <p className="text-white/40 font-black uppercase italic font-bebas tracking-[0.3em] text-lg md:text-2xl leading-relaxed">
                  No account managers. No handoffs. <br />
                  <span className="text-white text-stroke-xs">Just direct work, done properly.</span>
               </p>
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
