'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Video, ArrowLeft, CheckCircle2, Camera, Plane, Zap, Target } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { StickyFooter } from '@/components/ui/sticky-footer'

const videoServices = [
  {
    title: "Cinematic Drone Footage",
    description: "Licensed drone pilots capturing stunning aerial views of your premises, projects, or events.",
    icon: Plane
  },
  {
    title: "Commercial Shoots",
    description: "High-quality video production for websites, TV, and cinema advertising.",
    icon: Camera
  },
  {
    title: "Project Walkthroughs",
    description: "Perfect for construction, real estate, and renovation projects to show progress and quality.",
    icon: Target
  }
]

export default function VideoProductionPage() {
  return (
    <main className="bg-dark min-h-screen text-white font-figtree">
      <Navbar />
      
      {/* 🦸 HERO SECTION */}
      <section className="relative py-32 md:py-48 px-6 overflow-hidden border-b border-white/5">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none" />
         
         <div className="max-w-[1240px] mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow font-black uppercase tracking-[0.4em] text-xs mb-8 italic"
            >
              TELL YOUR STORY. SELL YOUR SERVICES.
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-8 leading-none"
            >
              Video Production <span className="text-brand-yellow">Scotland</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-white/60 max-w-3xl mx-auto italic font-medium leading-relaxed"
            >
              Cinematic drone footage and professional video that tells your story and sells your services. We capture the essence of your business.
            </motion.p>
         </div>
      </section>

      {/* 📘 WHAT IS VIDEO PRODUCTION? */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8">What is <span className="text-brand-yellow">Video Production</span>?</h2>
            <div className="text-white/60 text-lg md:text-xl space-y-6 leading-relaxed italic">
              <p>
                Video is the most powerful medium for communication. It captures attention, builds trust, and allows you to show rather than tell.
              </p>
              <p>
                At Bear Media, we specialize in cinematic drone work and professional ground-based video for Scottish businesses.
              </p>
            </div>
          </div>
          <div className="glass-card p-12 border-brand-yellow/20">
            <h3 className="text-2xl font-black text-brand-yellow uppercase italic mb-6">Why it matters</h3>
            <ul className="space-y-4">
              {[
                "Video increases landing page conversion by 80%",
                "80% of users recall a video ad they saw in the past 30 days",
                "Drone footage provides a premium, high-end feel",
                "Video is 53x more likely to reach the front page of Google"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-white/80 italic font-medium">
                  <CheckCircle2 className="text-brand-yellow shrink-0" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ⚙️ WHAT WE ACTUALLY DO */}
      <section className="py-24 md:py-32 px-6 bg-white/[0.02]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">What we <span className="text-brand-yellow">actually</span> do</h2>
            <p className="text-white/40 mt-4 text-lg">Cinematic quality for every project.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 border-brand-yellow/10 hover:border-brand-yellow/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-yellow/10 flex items-center justify-center mb-8 border border-brand-yellow/20">
                  <service.icon size={30} className="text-brand-yellow" />
                </div>
                <h3 className="text-2xl font-black text-brand-yellow uppercase italic mb-4">{service.title}</h3>
                <p className="text-white/60 text-base leading-relaxed font-medium italic">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 REAL EXAMPLES */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-16 text-center">Real <span className="text-brand-yellow">Examples</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative aspect-video rounded-3xl overflow-hidden border-2 border-white/5">
                {/* 📹 Cinematic Background */}
               <div className="absolute inset-0 bg-dark/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 p-8 text-center">
                  <h4 className="text-2xl font-black text-white uppercase italic mb-2">Construction Drone Flyover</h4>
                  <p className="text-white/60 mb-6 italic">Stunning 4K aerial progress shots.</p>
                  <Link href="/#work" className="bg-brand-yellow text-dark px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs italic">View Portfolio</Link>
               </div>
               <div className="bg-white/5 w-full h-full flex items-center justify-center text-white/10 uppercase font-black text-4xl italic">Video Case Study</div>
            </div>
            <div className="group relative aspect-video rounded-3xl overflow-hidden border-2 border-white/5">
               <div className="absolute inset-0 bg-dark/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 p-8 text-center">
                  <h4 className="text-2xl font-black text-white uppercase italic mb-2">Hospitality Promo Video</h4>
                  <p className="text-white/60 mb-6 italic">Capturing the vibe and the value.</p>
                  <Link href="/#work" className="bg-brand-yellow text-dark px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs italic">View Portfolio</Link>
               </div>
               <div className="bg-white/5 w-full h-full flex items-center justify-center text-white/10 uppercase font-black text-4xl italic">Video Case Study</div>
            </div>
          </div>
        </div>
      </section>

      {/* 👥 WHO IT'S FOR */}
      <section className="py-24 md:py-32 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8">Who <span className="text-brand-yellow">it's for</span></h2>
          <div className="text-white/60 text-lg md:text-xl space-y-6 leading-relaxed italic mb-12">
            <p>
              We work with Scottish businesses who understand that a high-quality video is the best way to show their value to the world.
            </p>
            <p className="text-sm border-t border-white/5 pt-8">
              Need to get your new video seen? Check out our <Link href="/social-media" className="text-brand-yellow hover:underline">Social Media</Link> services.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Real Estate & Architects", "Leisure & Hospitality", "Construction & Engineering", "Event Organizers"].map((tag) => (
              <span key={tag} className="px-6 py-2 rounded-full border border-brand-yellow/30 text-brand-yellow font-bold uppercase tracking-widest text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CALL-TO-ACTION SECTION */}
      <section className="py-32 md:py-48 px-6 text-center border-t border-white/5">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-12 leading-none">
            Ready to <span className="text-brand-yellow">Show</span><br />your business in 4K?
          </h2>
          
          <a 
            href="https://calendly.com/bearmedia/discovery-call" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-dark text-xl md:text-3xl font-black py-8 px-16 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(221,163,30,0.4)] animate-[float_4s_ease-in-out_infinite] uppercase italic tracking-widest"
          >
            Start Your Video Project
          </a>
          
          <div className="mt-24">
            <Link 
              href="/" 
              className="inline-flex items-center gap-4 text-white/40 hover:text-brand-yellow transition-colors font-black uppercase tracking-[0.4em] text-xs"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </div>
      </section>

      <StickyFooter />
    </main>
  )
}
