'use client'

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Camera, ArrowLeft, CheckCircle2, Share2, Zap, Smartphone, Users, Play } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { StickyFooter } from '@/components/ui/sticky-footer'

const contentTypes = [
  {
    title: "Vertical Video (Reels/TikTok)",
    description: "High-impact short-form video designed to stop the scroll and hook viewers in the first 3 seconds.",
    icon: Smartphone
  },
  {
    title: "Content Strategy",
    description: "We don't just post. We build a plan that aligns with your business goals and speaks to your audience.",
    icon: Zap
  },
  {
    title: "Community Building",
    description: "Engagement is the key to growth. We help you build a loyal following that actually converts.",
    icon: Users
  }
]

export default function SocialMediaPage() {
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
              STOP THE SCROLL. GET NOTICED.
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-8 leading-none"
            >
              Social Media <span className="text-brand-yellow">Content Creation</span> Scotland
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-white max-w-3xl mx-auto italic font-medium leading-relaxed"
            >
              Content that stops the scroll and gets you noticed. Master the algorithm with high-impact vertical video and smart strategy.
            </motion.p>
         </div>
      </section>

      {/* 📘 WHAT IS SOCIAL MEDIA CONTENT? */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8">What is <span className="text-brand-yellow">Social Content</span>?</h2>
            <div className="text-white text-lg md:text-xl space-y-6 leading-relaxed italic">
              <p>
                Social media isn't just about "being online." It's about being present, being relevant, and being authentic.
              </p>
              <p>
                Our social media content services focus on vertical video (Reels, Shorts, TikTok) because that's where the attention is in 2026.
              </p>
            </div>
          </div>
          <div className="glass-card p-12 border-brand-yellow/20">
            <h3 className="text-2xl font-black text-brand-yellow uppercase italic mb-6">Why it matters</h3>
            <ul className="space-y-4">
              {[
                "Attention spans are shorter than ever",
                "Vertical video is the #1 tool for reach",
                "Consistent posting builds massive trust",
                "Your competitors are already doing it"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-white italic font-medium">
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
            <p className="text-white mt-4 text-lg">Real content for real results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 border-brand-yellow/10 hover:border-brand-yellow/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-yellow/10 flex items-center justify-center mb-8 border border-brand-yellow/20">
                  <type.icon size={30} className="text-brand-yellow" />
                </div>
                <h3 className="text-2xl font-black text-brand-yellow uppercase italic mb-4">{type.title}</h3>
                <p className="text-white text-base leading-relaxed font-medium italic">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 REAL EXAMPLES */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-16">Real <span className="text-brand-yellow">Work</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { id: "Ll1AUE9Gxrg", title: "Veterinary Service" },
              { id: "CQNytl9SPb4", title: "Trade Promo" },
              { id: "9EMz1OjGuZo", title: "Event Coverage" }
            ].map((video, i) => (
              <div key={i} className="aspect-[9/16] rounded-3xl overflow-hidden border-2 border-white/5 bg-neutral-900 shadow-2xl">
                 <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
              </div>
            ))}
          </div>
          <a 
            href="https://www.youtube.com/@bearmedia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-red-700 transition-colors"
          >
            <Play size={16} fill="currentColor" /> Subscribe on YouTube
          </a>
        </div>
      </section>

      {/* 👥 WHO IT'S FOR */}
      <section className="py-24 md:py-32 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8">Who <span className="text-brand-yellow">it's for</span></h2>
          <div className="text-white text-lg md:text-xl space-y-6 leading-relaxed italic mb-12">
            <p>
              We work with local Scottish businesses who want to stop being "that business that never posts" and start being the one that everyone recognizes in their feed.
            </p>
            <p className="text-sm border-t border-white/5 pt-8">
              Want to learn how to do this yourself? Check out our <Link href="/training" className="text-brand-yellow hover:underline">Digital Training</Link> services.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Restaurants & Bars", "Tradespeople", "Personal Trainers", "Retail Brands"].map((tag) => (
              <span key={tag} className="px-6 py-2 rounded-full border border-brand-yellow/30 text-brand-yellow font-bold uppercase tracking-widest text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CALL-TO-ACTION SECTION */}
      <section className="py-32 md:py-48 px-6 text-center border-t border-white/5">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-12 leading-none">
            Ready to <span className="text-brand-yellow">Stop</span><br />the scroll?
          </h2>
          
          <a 
            href="https://calendly.com/bearmedia/discovery-call" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-dark text-xl md:text-3xl font-black py-8 px-16 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(221,163,30,0.4)] animate-[float_4s_ease-in-out_infinite] uppercase italic tracking-widest"
          >
            Start Your Content Plan
          </a>
          
          <div className="mt-24">
            <Link 
              href="/" 
              className="inline-flex items-center gap-4 text-white hover:text-brand-yellow transition-colors font-black uppercase tracking-[0.4em] text-xs"
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
