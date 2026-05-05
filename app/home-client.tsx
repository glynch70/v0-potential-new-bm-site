'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, XCircle, ArrowRight, Video, Camera, Layout, Play, Users, MapPin, Star, TrendingUp, MousePointer2, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HorizontalVideoScroll from '@/components/HorizontalVideoScroll';

import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function HomeContent() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-brand-yellow selection:text-neutral-950 overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-50 grayscale-0 contrast-[1.1] brightness-[1.1]"
          >
            <source src="/media/NEW BM DRONE HERO.mp4" type="video/mp4" />
          </video>
          {/* subtle cinematic overlay */}
          <div className="absolute inset-0 bg-black/35" />
          {/* subtle gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-neutral-950/40" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-yellow font-black uppercase tracking-[0.2em] mb-6 text-[10px] md:text-sm animate-pulse italic"
          >
             Working with businesses across West Lothian, Livingston, Edinburgh & surrounding areas
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 md:mb-10 max-w-4xl text-4xl md:text-7xl lg:text-8xl font-black italic uppercase font-bebas leading-[0.95] tracking-tight"
          >
            Web Design, Video & Social Media <br className="hidden md:block" />
            <span className="text-brand-yellow">That Brings You More Enquiries.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white max-w-2xl mb-12 md:mb-14 font-medium leading-relaxed italic text-lg md:text-xl opacity-90"
          >
            We help businesses across West Lothian, Edinburgh and the Central Belt turn content and websites into consistent leads.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 sm:items-end"
          >
            <div className="flex flex-col gap-3">
              <p className="text-white/70 text-[10px] font-black uppercase tracking-widest italic ml-1">Let’s look at your business and show you exactly how to generate more enquiries.</p>
              <Link
                href="/contact"
                className="px-8 md:px-10 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl text-center md:w-max"
              >
                👉 Book a Discovery Call
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/portfolio"
                className="px-8 md:px-10 py-5 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-white/20 transition-all text-center md:w-max"
              >
                👉 See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="py-12 bg-neutral-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
             <div className="flex gap-1 text-brand-yellow mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
             </div>
             <p className="text-white font-black text-xs uppercase tracking-widest leading-none">5.0 Google Rating</p>
          </div>
          <div className="text-center md:text-left">
             <p className="text-white font-black font-bebas italic text-2xl leading-none mb-1 uppercase">Trusted by 50+ local businesses</p>
             <p className="text-white text-xs font-bold uppercase tracking-widest leading-none">Working across Scotland & the UK</p>
          </div>
          <div className="text-center md:text-left">
             <p className="text-white font-black font-bebas italic text-2xl leading-none mb-1 uppercase">Helping businesses generate</p>
             <p className="text-white text-xs font-bold uppercase tracking-widest leading-none">consistent enquiries online</p>
          </div>
        </div>
      </section>



      {/* WHAT THIS LOOKS LIKE IN REAL LIFE */}
      <section className="py-32 px-6 bg-neutral-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-12">
              <h2 className="mb-4 text-white">
                 Real People. <span className="text-brand-yellow">Real Results.</span>
              </h2>
              <p className="text-white max-w-xl mx-auto italic text-sm font-medium">
                 Real projects. Real outcomes captured across Scotland.
              </p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8 mb-12">
              <YouTubeEmbed 
                videoId="qrQK-maE3sA" 
                title="Simply Sheds Scotland"
                description="Showcasing three decades of craftsmanship for a local Scottish family business."
                result="15+ qualified leads in first 14 days."
              />
              <YouTubeEmbed 
                videoId="VlyX1CueJCc" 
                title="St Andrews Refurb"
                description="High-quality video walkthrough of a high-end restaurant refurb."
                result="Full booking calendar for opening week."
              />
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Joinery | West Lothian", result: "More enquiries from local customers", type: "Video", context: "Zero online proof.", action: "On-site video + site.", outcome: "Consistent local leads." },
                { label: "Estate Agent | Edinburgh", result: "More high-value listings won", type: "Video", context: "Struggling to stand out.", action: "Drone property tours.", outcome: "More signed listings." },
                { label: "Landscaping | Central Belt", result: "More visibility on Google and social", type: "Video", context: "Low-quality tyre-kicker leads.", action: "Process-driven brand video.", outcome: "Higher job conversion." },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[1.5rem] bg-neutral-900 border border-white/5 relative overflow-hidden group">
                   <div className="absolute inset-0 flex items-center justify-center text-white/[0.02] text-[6px] px-8 text-center font-black uppercase italic tracking-widest pointer-events-none">
                      {item.context}
                   </div>
                   <div className="relative z-10">
                      <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-xs mb-2">{item.label}</p>
                      <p className="text-white font-bold text-xs uppercase tracking-widest opacity-80 leading-none">{item.result}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. HORIZONTAL VIDEO SCROLL */}
      <HorizontalVideoScroll />

      {/* Websites Section – Outcome focused thumbnails */}
      <section className="py-32 px-6 bg-neutral-900/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic font-bebas tracking-tight mb-4">Websites</h2>
          <p className="text-white font-medium italic text-lg mb-16">Websites built to convert, not just look good.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-950 p-6 rounded-3xl border border-white/10 shadow-2xl hover:border-brand-yellow/30 transition-all group">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-6">
                <Image src="/work/almond_vet_care.jpg" alt="Web Design West Lothian - Almond Vet Care" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-xl mb-3">Website – Veterinary Clinic</h3>
              <p className="text-white text-sm font-medium italic">Designed to capture local leads and build trust</p>
            </div>
            <div className="bg-neutral-950 p-6 rounded-3xl border border-white/10 shadow-2xl hover:border-brand-yellow/30 transition-all group">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-6">
                <Image src="/work/website-5-lewis-joinery-v2.jpg" alt="Website Design Livingston - Lewis Joinery" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-xl mb-3">Website – Joinery Business</h3>
              <p className="text-white text-sm font-medium italic">Built to generate enquiries for high-value projects</p>
            </div>
            <div className="bg-neutral-950 p-6 rounded-3xl border border-white/10 shadow-2xl hover:border-brand-yellow/30 transition-all group">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-6">
                <Image src="/work/website-3-herb-soul-v2.jpg" alt="Web Design Edinburgh - Herb Soul" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-xl mb-3">Website – Food & Beverage</h3>
              <p className="text-white text-sm font-medium italic">Built to drive online orders and store visits</p>
            </div>
          </div>
          <div className="mt-16">
            <Link href="/web-design" className="inline-flex items-center gap-3 text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg hover:translate-x-1 transition-transform">
              See All Websites <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. THE PROBLEM SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="text-left">
              <h2 className="mb-6 text-white leading-tight">
                 Doing Good Work But <br />
                 <span className="text-brand-yellow">Still Invisible?</span>
              </h2>
              <p className="text-white mb-8 italic text-sm leading-relaxed max-w-lg">
                 Most local businesses in Scotland are the best kept secret in their town. Word of mouth is great, but it’s not a growth system.
              </p>
              <div className="space-y-4">
                 {[
                   "Social media looks amateur compared to your work.",
                   "National chains are stealing your local leads.",
                   "People find you but don't trust you yet."
                 ].map((point, i) => (
                    <div key={i} className="flex gap-3 items-center">
                       <XCircle className="text-red-500/30 shrink-0" size={16} />
                       <p className="text-white font-black uppercase italic font-bebas tracking-widest text-sm">{point}</p>
                    </div>
                 ))}
              </div>
              <div className="mt-10">
                 <Link href="/contact" className="inline-flex items-center gap-3 text-brand-yellow font-black uppercase italic font-bebas tracking-widest hover:translate-x-1 transition-transform">
                    Let's Fix Your Visibility <ArrowRight size={16} />
                 </Link>
              </div>
           </div>
           <div className="aspect-video relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
              <Image 
                src="/team/garry_lynch_car.jpg" 
                alt="Videography West Lothian - On-site production" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors" />
           </div>
        </div>
      </section>

      {/* 6. THE SOLUTION / 3-STEP SYSTEM */}
      <section className="py-32 px-6 bg-neutral-900/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className="mb-12 text-white">
              How We Turn Work <span className="text-brand-yellow">Into Enquiries.</span>
           </h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { step: "01", title: "We plan your content", desc: "We figure out exactly what your customers need to see." },
                { step: "02", title: "We film and create it", desc: "We visit your site and capture high-quality footage." },
                { step: "03", title: "We publish and optimise", desc: "We put it where your local audience is watching." },
                { step: "04", title: "You get enquiries", desc: "Your phone rings with people who already trust you." }
              ].map((item, i) => (
                <div key={i} className="relative p-8 rounded-[1.5rem] bg-neutral-950 border border-white/5 group">
                   <span className="text-5xl font-black text-white absolute top-4 right-4 italic font-bebas group-hover:text-brand-yellow/20 transition-colors">{item.step}</span>
                   <h4 className="text-lg font-black uppercase italic font-bebas tracking-widest text-white mb-3">{item.title}</h4>
                   <p className="text-white text-[11px] leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. CORE SERVICES PREVIEW */}
      <section className="py-32 px-6 bg-neutral-900/50 border-y border-white/5 text-center">
         <h2 className="mb-12 text-white">
            The Growth <span className="text-brand-yellow">Toolkit.</span>
         </h2>
         <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Social Media", desc: "Consistent content that keeps your business visible locally.", icon: <Video size={24} />, href: "/services/social-media-content" },
              { title: "Web Design", desc: "Websites built to convert visitors into real enquiries.", icon: <MousePointer2 size={24} />, href: "/services/website-design" },
              { title: "Video", desc: "Professional video content that builds trust and drives action.", icon: <Camera size={24} />, href: "/services/videography" }
            ].map((service, i) => (
               <Link key={i} href={service.href} className="p-10 rounded-[2rem] bg-neutral-900 border border-white/5 hover:border-brand-yellow/30 transition-all group">
                  <div className="text-brand-yellow mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h4 className="text-xl font-black uppercase italic font-bebas text-white mb-3 tracking-wide">{service.title}</h4>
                  <p className="text-white text-[11px] italic leading-relaxed">{service.desc}</p>
               </Link>
            ))}
         </div>
         <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-white/50 text-[10px] font-black uppercase tracking-widest italic">Ready to stop being invisible online?</p>
            <Link
              href="/contact"
              className="px-10 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl text-center"
            >
              👉 Book a Discovery Call
            </Link>
         </div>
      </section>

      {/* 9. WHY CHOOSE BEAR MEDIA */}
      <section className="py-32 px-6 bg-brand-yellow text-neutral-950">
         <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center text-neutral-950 leading-tight">
               Why Choose <br /><span className="underline decoration-neutral-950/20 underline-offset-8">Bear Media?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
               {[
                 { title: "No Generic Content", desc: "Everything we create is tailored to your specific business and local market. No templates, no fluff." },
                 { title: "Focused on Results", desc: "We don't care about vanity metrics. We focus on content and websites that generate real enquiries." },
                 { title: "Local Knowledge", desc: "Based in West Lothian, we know exactly what it takes to stand out in Livingston, Edinburgh and the Central Belt." },
                 { title: "Real Work, Real People", desc: "We work directly with local business owners. No account managers, just direct work done properly." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-neutral-950 text-brand-yellow flex items-center justify-center shrink-0 font-black italic text-xs">{i + 1}</div>
                    <div>
                       <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2 tracking-wide text-neutral-950">{item.title}</p>
                       <p className="font-bold text-neutral-950/70 text-xs leading-relaxed italic">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9.1 OBJECTION HANDLING */}
      <section className="py-32 px-6 bg-neutral-950 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-white mb-16">
            Common <span className="text-brand-yellow">Concerns.</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "I’ve tried social media before and it didn’t work", a: "Most businesses post without a strategy. We build conversion-led content systems designed specifically to drive discovery and enquiries, not just likes." },
              { q: "I don’t have time to create content", a: "That’s why we exist. Our 'While You Work' capture system means we handle 100% of the creation while you focus on running your business." },
              { q: "I don’t know what to post", a: "We do. We plan, film, and edit everything based on what we know works for local businesses in West Lothian and Edinburgh." }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-[1.5rem] bg-neutral-900 border border-white/5">
                <h4 className="text-lg font-black uppercase italic font-bebas tracking-widest text-brand-yellow mb-3">{faq.q}</h4>
                <p className="text-white text-xs italic leading-relaxed opacity-80">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <p className="text-white/40 text-[10px] font-black uppercase tracking-widest italic mb-6">Most businesses we work with start seeing results within weeks. Spots are limited due to on-site work.</p>
             <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl"
              >
                👉 Book a Discovery Call
              </Link>
          </div>
        </div>
      </section>

      {/* 9.2 HELPING LOCAL BUSINESSES GROW */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-8">
            Helping Local <br /><span className="text-brand-yellow">Businesses Grow.</span>
          </h2>
          <p className="text-white/80 text-lg italic leading-relaxed mb-12">
            We are proud to be based in West Lothian, helping businesses in Livingston, Bathgate, and Edinburgh dominate their local markets. Whether you're a tradesman in Broxburn or an estate agent in the Capital, we build the digital systems that keep your phone ringing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             {["West Lothian", "Livingston", "Bathgate", "Edinburgh"].map((loc, i) => (
               <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest italic">{loc}</span>
             ))}
          </div>
        </div>
      </section>

      {/* MEET TEAM BEAR MEDIA */}
      <section className="py-32 px-6 border-t border-white/5 bg-neutral-950">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="mb-4 text-white">
                  Real People. <span className="text-brand-yellow">No Agency Fluff.</span>
               </h2>
               <p className="text-white max-w-xl mx-auto italic text-xs leading-relaxed">
                  You’re working directly with the people who do the work. No account managers, no handoffs.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { name: "Garry", role: "Founder / Strategy", desc: "I help local businesses stop being invisible and start getting enquiries.", img: "/team/garry_lynch_car.jpg" },
                 { name: "Lola", role: "Head of Security", desc: "Takes her job very seriously. Barks at absolutely everything.", img: "/team/lola_project_manager.jpg" },
                 { name: "Rory", role: "Head of Morale", desc: "Keeps the team going. Mostly through naps and snacks.", img: "/team/rory_quality_control.jpg" }
               ].map((member, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 15 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group text-left"
                 >
                    <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-white/5 bg-neutral-900 mb-6 relative">
                       <Image 
                          src={member.img} 
                          alt="Garry Lynch - Bear Media Founder West Lothian" 
                          fill 
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                       />
                    </div>
                    <h4 className="text-lg font-black uppercase italic font-bebas text-white mb-1">{member.name}</h4>
                    <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-[9px] mb-3">{member.role}</p>
                    <p className="text-white text-[11px] leading-relaxed italic">{member.desc}</p>
                 </motion.div>
               ))}
            </div>

            {/* NEW SECTION – BEAR NECESSITIES */}
            <div className="py-32 px-6 bg-neutral-900/50 rounded-[3rem] border border-white/5 mt-32 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 blur-3xl rounded-full" />
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left side – Image */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/training section/canva training advert may 26.png"
                    alt="Canva Training Poster"
                    width={600}
                    height={800}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
                {/* Right side – Cards */}
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic font-bebas tracking-tight mb-2">Prefer to do it yourself? We’ll show you how.</h2>
                  <p className="text-white text-sm italic mb-6">Practical 1:1 or team training for businesses who want to manage their own content.</p>
                  <div className="bg-neutral-900/30 p-6 rounded-xl border border-white/10">
                    <h3 className="text-brand-yellow font-black uppercase tracking-widest mb-2">Canva Training</h3>
                    <p className="text-white text-sm">Learn how to design clean, professional content quickly. Stop guessing layouts and start producing confidently.</p>
                  </div>
                  <div className="bg-neutral-900/30 p-6 rounded-xl border border-white/10">
                    <h3 className="text-brand-yellow font-black uppercase tracking-widest mb-2">CapCut Training</h3>
                    <p className="text-white text-sm">Edit engaging videos that people actually watch. Master cuts, captions, and pacing.</p>
                  </div>
                  <div className="bg-neutral-900/30 p-6 rounded-xl border border-white/10">
                    <h3 className="text-brand-yellow font-black uppercase tracking-widest mb-2">AI for Business</h3>
                    <p className="text-white text-sm">Use AI to save time and streamline your workflow. Content, emails, and automation made simple.</p>
                  </div>
                  <p className="text-white text-xs uppercase tracking-widest mt-4">
                    1:1 or team training – In‑person (West Lothian, Edinburgh, Fife) or online
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 px-8 py-3 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-xl hover:scale-105 transition-all"
                  >
                    Book a free 30‑min call
                  </Link>
                </div>
              </div>
            </div>



            <div className="mt-16 pt-8 border-t border-white/5 text-center">
               <p className="text-white font-black uppercase italic font-bebas tracking-[0.2em] text-sm md:text-xl leading-relaxed">
                  No account managers. No handoffs. <br />
                  <span className="text-white">Just direct work, done properly.</span>
               </p>
            </div>
         </div>
      </section>
      
      {/* 9.5 LOCATIONS SERVED */}
      <section className="py-24 px-6 border-t border-white/5 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight">
              Locations <span className="text-brand-yellow">Served.</span>
            </h2>
            <p className="text-white/60 mt-4 italic font-medium uppercase tracking-widest text-[10px]">
              Dominate your local market with cinematic content and high-performance websites.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5">
              <h3 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-2xl mb-8 flex items-center gap-3">
                <MapPin size={24} /> West Lothian
              </h3>
              <div className="grid gap-4">
                <Link href="/web-design-west-lothian" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-yellow/30 transition-all group">
                  <span className="text-white font-bold uppercase tracking-widest text-xs">Web Design West Lothian</span>
                  <ArrowRight size={16} className="text-brand-yellow group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/social-media-west-lothian" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-yellow/30 transition-all group">
                  <span className="text-white font-bold uppercase tracking-widest text-xs">Social Media West Lothian</span>
                  <ArrowRight size={16} className="text-brand-yellow group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/videography-west-lothian" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-yellow/30 transition-all group">
                  <span className="text-white font-bold uppercase tracking-widest text-xs">Videography West Lothian</span>
                  <ArrowRight size={16} className="text-brand-yellow group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5">
              <h3 className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-2xl mb-8 flex items-center gap-3">
                <MapPin size={24} /> Edinburgh
              </h3>
              <div className="grid gap-4">
                <Link href="/web-design-edinburgh" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-yellow/30 transition-all group">
                  <span className="text-white font-bold uppercase tracking-widest text-xs">Web Design Edinburgh</span>
                  <ArrowRight size={16} className="text-brand-yellow group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/social-media-edinburgh" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-yellow/30 transition-all group">
                  <span className="text-white font-bold uppercase tracking-widest text-xs">Social Media Edinburgh</span>
                  <ArrowRight size={16} className="text-brand-yellow group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/edinburgh-content-creation" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-yellow/30 transition-all group">
                  <span className="text-white font-bold uppercase tracking-widest text-xs">Full Content Systems</span>
                  <ArrowRight size={16} className="text-brand-yellow group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 px-6 text-center relative overflow-hidden bg-brand-yellow text-neutral-950">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
         <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="mb-8 text-neutral-950 text-4xl md:text-6xl font-black italic uppercase font-bebas leading-tight">
               Want More Enquiries From <br />
               <span className="underline decoration-neutral-950/20 underline-offset-8">Your Website and Content?</span>
            </h2>
            <p className="text-neutral-950/70 font-bold italic mb-10 max-w-lg mx-auto">
               We’ll show you exactly what’s working, what’s not, and how to fix it. Let’s look at your business and show you exactly how to generate more enquiries.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-2xl group"
            >
              👉 Book a Discovery Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
            </Link>
            
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-neutral-950/40 text-[8px] font-black uppercase tracking-widest italic">
               <div className="flex items-center gap-2">
                  <Star size={10} className="fill-current" /> 5.0 Google Rating
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 size={10} /> 50+ Local Clients
               </div>
               <div className="flex items-center gap-2">
                  <TrendingUp size={10} /> Results Within Weeks
               </div>
            </div>
         </div>
        </section>
      <Footer />
    </main>
  );
}
