'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const cinematicEase = [0.16, 1, 0.3, 1]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0e0c] text-[#E8E0D5] font-inter-tight selection:bg-[#F1B92D] selection:text-[#0f0e0c] overflow-hidden">
        
        {/* 1. HERO SECTION (DARK CINEMATIC) */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden py-32 border-b border-white/5">
          <div className="absolute inset-0 bg-[#0a0908] z-0">
            <Image 
              src="/PERSONAL BRAND IMAGES/garry at kelpies.jpeg" 
              alt="Garry Lynch at Kelpies" 
              fill 
              priority
              className="object-cover opacity-[0.22] contrast-[1.05] scale-105 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/40 to-[#0f0e0c]" />
          </div>

          {/* Grid lines */}
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="w-full px-6 text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              className="text-[#F1B92D] font-bold uppercase tracking-[0.4em] text-[12px] md:text-[13px] mb-8"
            >
              The Story Behind The Lens
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
              className="text-6xl md:text-8xl lg:text-[7rem] font-bebas text-white tracking-wide mb-12 leading-[0.95]"
            >
              REAL STORIES.<br/>
              <span className="text-white/20">DOCUMENTED PROPERLY.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="max-w-2xl mx-auto text-[#E8E0D5]/60 font-light text-lg md:text-xl leading-relaxed tracking-wide"
            >
              We don't deal in fancy marketing templates. We document the grit, scale, and authenticity of ambitious local businesses across Scotland's Central Belt.
            </motion.p>
          </div>
        </section>

        {/* 2. THE OPERATOR (DARK CINEMATIC SECTION) */}
        <section className="py-40 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-24 lg:gap-32 relative z-10">
            
            {/* Image Block */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: cinematicEase }}
              className="flex-1 w-full"
            >
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden bg-[#171513] border border-white/5 rounded-sm group">
                <Image 
                  src="/PERSONAL BRAND IMAGES/owner garry lynch.jpeg" 
                  alt="Garry Lynch - Founder of Bear Media" 
                  fill 
                  className="object-cover filter grayscale-[10%] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-[4s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/50 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-[#F1B92D] font-bold uppercase tracking-[0.3em] text-[13px] md:text-sm md:text-[12px] mb-1">Founder & Lead Creator</p>
                  <h4 className="text-3xl font-bebas tracking-wide text-[#E8E0D5]">Garry Lynch</h4>
                </div>
              </div>
            </motion.div>

            {/* Narrative Block */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
              className="flex-1 space-y-12"
            >
              <p className="text-[#F1B92D] font-bold uppercase tracking-[0.3em] text-[12px] md:text-[13px] mb-2">The Mission</p>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-[#E8E0D5] leading-[0.95] tracking-tight uppercase">
                Grounded in <br/><span className="text-[#F1B92D]/85">Scotland's Grit.</span>
              </h2>

              <div className="space-y-8 text-[#E8E0D5]/80 font-light text-base md:text-lg leading-relaxed max-w-xl">
                <p>
                  I'm not an agency executive hiding behind slides and buzzwords. I'm a camera operator, website strategist, and editor who is on the ground, visiting your site, capturing the scale of your craftsmanship, and presenting it to your customers.
                </p>
                <p>
                  Based in Broxburn, West Lothian, we work directly with local trades, construction firms, and ambitious service businesses across Edinburgh, Glasgow, and Fife. We capture the true story behind your work and channel it into websites and campaigns that bring high-value enquiries.
                </p>
              </div>

              <div className="flex gap-12 pt-6 border-t border-white/5">
                <div>
                  <p className="text-4xl font-bebas text-[#F1B92D] leading-none mb-2">50+</p>
                  <p className="text-[12px] md:text-[13px] font-bold text-[#E8E0D5]/90 uppercase tracking-widest">SMEs Grown</p>
                </div>
                <div>
                  <p className="text-4xl font-bebas text-[#F1B92D] leading-none mb-2">100%</p>
                  <p className="text-[12px] md:text-[13px] font-bold text-[#E8E0D5]/90 uppercase tracking-widest">Real Outcomes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. BTS PROCESS GALLERY (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0f0e0c] relative z-10">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
            <div className="text-center mb-24">
              <p className="text-[#F1B92D] font-bold uppercase tracking-[0.3em] text-[12px] md:text-[13px] mb-4">Behind The Scenes</p>
              <h2 className="font-bebas text-white tracking-wide leading-[0.9]">THE GRIT. THE GEAR. THE CRAFT.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  src: "/BTS : PROCESS IMAGES/Harley Biker Drone Shoot.jpg",
                  title: "Drone Videography",
                  desc: "Precision flying over Scottish landscapes to capture massive scale."
                },
                {
                  src: "/BTS : PROCESS IMAGES/bts corporate photo shoot.jpg",
                  title: "BTS Storytelling",
                  desc: "Documenting the real people behind high-performing brands."
                },
                {
                  src: "/BTS : PROCESS IMAGES/bts_drone.jpg",
                  title: "Action Workflow",
                  desc: "Capturing details and operations, directly on location."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: idx * 0.2, ease: cinematicEase }}
                  className="group relative aspect-[3/4] overflow-hidden bg-[#171513] border border-white/5 rounded-sm"
                >
                  <Image 
                    src={item.src} 
                    alt={item.title} 
                    fill
                    className="object-cover opacity-75 filter-none group-hover:scale-[1.03] transition-all duration-[2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-transparent to-transparent opacity-95" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-xl font-bebas text-white tracking-wider mb-2">{item.title}</h4>
                    <p className="text-xs text-white/85 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. TEAM BEAR MEDIA - PLAYFUL BUT LUXURY (DARK CINEMATIC SECTION) */}
        <section className="py-40 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-t border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
            <div className="text-center mb-24 max-w-xl mx-auto">
              <p className="text-[#F1B92D] font-bold uppercase tracking-[0.3em] text-[12px] md:text-[13px] mb-4">Team Bear Media</p>
              <h2 className="font-bebas text-[#E8E0D5] tracking-wide mb-6">MEET THE OPERATIONS TEAM.</h2>
              <p className="text-sm text-[#E8E0D5]/80 font-light leading-relaxed">
                Behind every high-performance project are the loyal companions who supervise treated snacks, oversee nap schedules, and keep the team grounded.
              </p>
            </div>

            {/* Central Dog & Garry Image */}
            <div className="mb-24 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: cinematicEase }}
                className="relative w-full max-w-3xl aspect-[16/9] overflow-hidden rounded-sm border border-white/5 bg-[#171513]"
              >
                <Image 
                  src="/PERSONAL BRAND IMAGES/gaz n rory in the park.jpeg" 
                  alt="Garry and Rory in the park" 
                  fill 
                  className="object-cover filter contrast-[1.03] group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[#F1B92D] font-bold uppercase tracking-[0.3em] text-[13px] md:text-sm md:text-[12px]">On Patrol</p>
                  <h4 className="text-xl font-bebas">Garry & Rory — Mid-Day Team Strategy Meeting</h4>
                </div>
              </motion.div>
            </div>

            {/* Dogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              
              {/* Dog 1: Lola */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8 }}
                className="bg-[#171513]/40 backdrop-blur-xl p-8 border border-white/5 shadow-md flex items-center gap-6 rounded-sm hover:border-[#F1B92D]/20 transition-all"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-[#0f0e0c] border border-white/10">
                  <Image 
                    src="/team/lola_project_manager.jpg" 
                    alt="Lola - Project Manager" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bebas text-[#E8E0D5] tracking-wider mb-1">Lola</h4>
                  <p className="text-[#F1B92D] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.25em] mb-3">Director of Treat Optimization & Client Welcoming</p>
                  <p className="text-xs text-[#E8E0D5]/80 leading-relaxed font-light">
                    "Lola keeps moral at a record high and ensures no snack box goes uninspected."
                  </p>
                </div>
              </motion.div>

              {/* Dog 2: Rory */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8 }}
                className="bg-[#171513]/40 backdrop-blur-xl p-8 border border-white/5 shadow-md flex items-center gap-6 rounded-sm hover:border-[#F1B92D]/20 transition-all"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-[#0f0e0c] border border-white/10">
                  <Image 
                    src="/team/rory_quality_control.jpg" 
                    alt="Rory - Quality Control" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bebas text-[#E8E0D5] tracking-wider mb-1">Rory</h4>
                  <p className="text-[#F1B92D] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.25em] mb-3">Head of Barketing & Office Comfort Assurance</p>
                  <p className="text-xs text-[#E8E0D5]/80 leading-relaxed font-light">
                    "Rory excels in deep testing comfortable spots and providing structural feedback on office layouts."
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 5. THE MANIFESTO (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0f0e0c] relative z-10">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 relative z-10 text-center">
            <p className="text-[#F1B92D] font-bold uppercase tracking-[0.3em] text-[12px] md:text-[13px] mb-4">Our DNA</p>
            <h2 className="mb-20 text-white font-bebas tracking-wide">THE NO-NONSENSE CODE.</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "01 / Straight-Talking Partners", 
                  desc: "We speak absolute plain English. No corporate agencies jargon, no slides showing vanity views. We track conversions and real telephone calls." 
                },
                { 
                  title: "02 / Hands-On Craftsmanship", 
                  desc: "We don't use remote contractors or templates. Every website layout is custom coded, and every piece of footage is captured by us, on-site." 
                },
                { 
                  title: "03 / Absolute Outcome Focus", 
                  desc: "If an element doesn't serve a specific purpose to build your brand trust or drive an enquiry, we ruthlessly strip it away." 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: idx * 0.15, ease: cinematicEase }}
                  className="bg-[#171513]/40 backdrop-blur-xl border border-white/5 p-12 hover:border-[#F1B92D]/20 transition-all rounded-sm text-left group"
                >
                  <h3 className="text-xl font-bebas mb-6 uppercase tracking-wider text-[#F1B92D]">{item.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION (DARK CINEMATIC SECTION) */}
        <section className="py-48 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-t border-white/5 text-center flex items-center justify-center overflow-hidden">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 relative z-10 flex flex-col items-center">
            <p className="text-[#F1B92D] font-bold uppercase tracking-[0.4em] text-[12px] md:text-[13px] mb-8">Start Your Growth Journey</p>
            <h2 className="font-bebas text-[#E8E0D5] leading-[0.9] mb-12">
              BUILD SOMETHING <br/><span className="text-[#E8E0D5]/25">WORTH WATCHING.</span>
            </h2>
            <Link
              href="/contact"
              className="relative px-12 py-6 bg-transparent border border-[#E8E0D5]/15 text-[#E8E0D5] font-bold uppercase tracking-[0.25em] text-[12px] md:text-[13px] rounded-sm overflow-hidden group/btn hover:border-[#F1B92D] transition-colors duration-500 inline-block font-inter-tight"
            >
              <div className="absolute inset-0 bg-[#F1B92D] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover/btn:text-[#0f0e0c] transition-colors duration-500">Book Your Discovery Call</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
