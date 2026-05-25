'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Camera, Plane, Target, Play, ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cinematicEase = [0.16, 1, 0.3, 1]

const videoServices = [
  {
    title: "Cinematic Drone Footage",
    description: "Fully licensed CAA drone operations capturing the scale, majesty, and grandeur of your premises, projects, or estates.",
    icon: Plane
  },
  {
    title: "Commercial Brand Shoots",
    description: "High-end commercial films structured to convey trust, craft, and value to prospective clients on websites or channels.",
    icon: Camera
  },
  {
    title: "Project Walkthroughs",
    description: "Perfect for high-end architects, construction groups, and developers to showcase the meticulous details of their projects.",
    icon: Target
  }
]

const campaigns = [
  { id: "qrQK-maE3sA", title: "Simply Sheds Scotland", desc: "A cinematic documentary narrative capturing workshop craftsmanship and customer trust." },
  { id: "VlyX1CueJCc", title: "St Andrews Refurbishment", desc: "A detailed commercial walkthrough highlighting renovation scale and meticulous finishes." }
]

export default function VideoProductionPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0e0c] text-[#E8E0D5] font-inter-tight selection:bg-[#F1B92D] selection:text-[#0f0e0c] overflow-hidden">
        
        {/* 1. HERO SECTION (DARK CINEMATIC) */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden py-32 border-b border-white/5">
          <div className="absolute inset-0 bg-[#0a0908] z-0">
            <Image 
              src="/ATMOSPHERIC SCOTLAND IMAGES/Edinburgh Sunset.jpg" 
              alt="Edinburgh Sunset Drone" 
              fill 
              priority
              className="object-cover opacity-[0.2] contrast-[1.05] pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/40 to-[#0f0e0c]" />
          </div>

          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="w-full px-6 text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
              className="text-[#F1B92D] font-bold uppercase tracking-[0.4em] text-[12px] md:text-[13px] mb-8"
            >
              Cinematic Film & Aerial Production
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
              className="font-bebas text-white tracking-wide mb-12 leading-[0.95] uppercase"
            >
              STORIES FILMED <br/>
              <span className="text-white/20">WITH INTENTION.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="max-w-3xl mx-auto text-[#E8E0D5]/60 font-light text-lg md:text-xl leading-relaxed tracking-wide"
            >
              We produce breathtaking 4K films, licensed aerial drone cinematography, and high-trust walkthrough campaigns. Built to connect with local Scottish customers on an emotional level.
            </motion.p>
          </div>
        </section>

        {/* 2. THE ETHOS (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <p className="text-[#F1B92D] font-bold uppercase tracking-[0.3em] text-[12px] md:text-[13px] mb-4">Cinematic Narrative</p>
              <h2 className="font-bebas text-[#E8E0D5] leading-[0.9] tracking-tight uppercase mb-8">
                Show the Grit. <br/><span className="text-[#F1B92D]/85">Sell the Value.</span>
              </h2>
              <div className="space-y-6 text-[#E8E0D5]/90 font-light text-base md:text-lg leading-relaxed max-w-xl">
                <p>
                  A premium video does not just look beautiful. It communicates scale, expertise, and precision within seconds.
                </p>
                <p>
                  At Bear Media, we strip away superficial agency templates. We spend the day on location, documenting the physical reality of your work, your team, and your craftsmanship, formatting it to build instant credibility.
                </p>
              </div>
            </div>

            <div className="bg-[#171513]/40 backdrop-blur-xl p-12 border border-white/5 shadow-md rounded-sm">
              <h3 className="text-2xl font-bebas tracking-wide text-[#E8E0D5] mb-8 uppercase">Production Standards</h3>
              <ul className="space-y-6">
                {[
                  "Licensed CAA drone operations (Balmoral, Howies, Saughton Park)",
                  "Pro-grade 4K ground capture with dynamic lighting setups",
                  "Sound design and authentic voiceover scripting",
                  "Strategic formats tailored for desktop websites & social reels"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-sm text-[#E8E0D5]/90 leading-relaxed font-light">
                    <CheckCircle2 className="text-[#F1B92D] shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. SHOWCASE SHOWROOM (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0f0e0c] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
            <div className="text-center mb-24">
              <p className="text-[#F1B92D] font-bold uppercase tracking-[0.3em] text-[12px] md:text-[13px] mb-4">Featured Work</p>
              <h2 className="font-bebas text-white tracking-wide leading-[0.9] uppercase">CINEMATIC SHOWCASES</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
              {campaigns.map((video, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: idx * 0.15, ease: cinematicEase }}
                  className="space-y-6"
                >
                  <div className="aspect-video rounded-sm overflow-hidden border border-white/5 bg-[#171513] shadow-xl relative group">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bebas text-white tracking-wider uppercase">{video.title}</h4>
                    <p className="text-xs text-white/85 leading-relaxed font-light">{video.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <a 
                href="https://www.youtube.com/@bearmedia70" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-[12px] md:text-[13px] rounded-sm hover:bg-red-700 transition-colors font-inter-tight"
              >
                <Play size={12} fill="currentColor" /> Subscribe on YouTube
              </a>
            </div>
          </div>
        </section>

        {/* 4. PILLARS OF PRODUCTION (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
            <div className="text-center mb-24">
              <p className="text-[#F1B92D] font-bold uppercase tracking-[0.3em] text-[12px] md:text-[13px] mb-4">Creative Capabilities</p>
              <h2 className="font-bebas text-[#E8E0D5] tracking-wide leading-[0.9] uppercase">WHAT WE CAPTURE.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {videoServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: idx * 0.15, ease: cinematicEase }}
                  className="bg-[#171513]/40 backdrop-blur-xl p-12 border border-white/5 shadow-sm rounded-sm hover:border-[#F1B92D]/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0f0e0c] flex items-center justify-center mb-8 border border-white/5">
                    <service.icon size={20} className="text-[#F1B92D]" />
                  </div>
                  <h3 className="text-xl font-bebas text-[#E8E0D5] tracking-wider uppercase mb-4">{service.title}</h3>
                  <p className="text-xs text-[#E8E0D5]/90 leading-relaxed font-light">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION (DARK CINEMATIC) */}
        <section className="py-48 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-t border-white/5 text-center flex items-center justify-center overflow-hidden">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 relative z-10 flex flex-col items-center">
            <p className="text-[#F1B92D] font-bold uppercase tracking-[0.4em] text-[12px] md:text-[13px] mb-8">Document Your Craft</p>
            <h2 className="font-bebas text-[#E8E0D5] leading-[0.9] mb-12">
              READY TO FILM <br/><span className="text-[#E8E0D5]/25">IN MAJESTIC 4K?</span>
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
