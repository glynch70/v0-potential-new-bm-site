'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, Camera, Monitor, Sparkles, Share2, ArrowLeft, Star, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { StickyFooter } from '@/components/ui/sticky-footer'

const offerings = [
  {
    title: "Canva for Design",
    description: "Learn how to build professional brand assets, marketing materials, and social media posts without being a designer.",
    icon: Monitor
  },
  {
    title: "CapCut for Video",
    description: "Master the art of vertical video. Editing, hooks, captions, and transitions that keep people watching.",
    icon: Camera
  },
  {
    title: "AI Tools & Automation",
    description: "Deploy AI to handle the boring stuff. Learn how to use ChatGPT, Midjourney, and automation to work 10x faster.",
    icon: Sparkles
  },
  {
    title: "Content Creation",
    description: "From photography to drones. Learn the technical skills needed to capture your own high-quality content.",
    icon: GraduationCap
  },
  {
    title: "Social Media Strategy",
    description: "Don't just post. Learn how to manage your accounts, schedule effectively, and grow your presence.",
    icon: Share2
  }
]

const pricing = [
  {
    title: "1-on-1 Training",
    price: "£75",
    unit: "per hour",
    details: "Customised sessions built around your specific business goals. Recorded for you to keep and replay."
  },
  {
    title: "Group Workshops",
    price: "£300",
    unit: "per session",
    details: "Half-day masterclass for up to 4 people. Deep dives into the tools your team needs to master."
  }
]

export default function TrainingPage() {
  return (
    <main className="bg-dark min-h-screen text-white font-figtree">
      <Navbar />
      
      {/* 🦸 HERO SECTION */}
      <section className="relative py-32 md:py-48 px-6 overflow-hidden border-b border-white/5">
         {/* Background Decor */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none" />
         
         <div className="max-w-[1240px] mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow font-black uppercase tracking-[0.4em] text-xs mb-8 italic"
            >
              OWN YOUR CONTENT
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-8 leading-none"
            >
              Digital Training <span className="text-brand-yellow">Scotland</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-white/60 max-w-3xl mx-auto italic font-medium leading-relaxed"
            >
              Learn Canva, CapCut, AI tools. Stuff that really gets results. Stop outsourcing everything and start building your brand from the inside.
            </motion.p>
         </div>
      </section>

      {/* 📘 WHAT IS DIGITAL TRAINING? */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8">What is <span className="text-brand-yellow">Digital Training</span>?</h2>
            <div className="text-white/60 text-lg md:text-xl space-y-6 leading-relaxed italic">
              <p>
                The best person to tell your business story is you. But you need the right tools—and the skills to use them.
              </p>
              <p>
                Our digital training services are designed to give you and your team the confidence to create high-quality content, design brand assets, and use AI to work faster.
              </p>
            </div>
          </div>
          <div className="glass-card p-12 border-brand-yellow/20">
            <h3 className="text-2xl font-black text-brand-yellow uppercase italic mb-6">Why it matters</h3>
            <ul className="space-y-4">
              {[
                "Reduce long-term outsourcing costs",
                "Move faster with in-house content creation",
                "Ensure brand consistency across all platforms",
                "Stay ahead of the curve with AI tools"
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

      {/* 🛠️ WHAT WE ACTUALLY DO */}
      <section className="py-24 md:py-32 px-6 bg-white/[0.02]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">What we <span className="text-brand-yellow">actually</span> do</h2>
            <p className="text-white/40 mt-4 text-lg">Practical skills. Zero waffle.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 flex flex-col items-start border-brand-yellow/10 hover:border-brand-yellow/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-yellow/10 flex items-center justify-center mb-8 border border-brand-yellow/20 group-hover:bg-brand-yellow/30 transition-colors">
                  <offering.icon size={30} className="text-brand-yellow" />
                </div>
                <h3 className="text-2xl font-black text-brand-yellow uppercase italic mb-4">{offering.title}</h3>
                <p className="text-white/60 text-base leading-relaxed font-medium italic">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💰 PRICING SECTION */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">Simple <span className="text-brand-yellow">Pricing</span></h2>
            <p className="text-white/40 mt-4 text-lg">No hidden costs. Just pure knowledge.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {pricing.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-brand-yellow p-12 rounded-3xl flex flex-col items-center text-center shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-dark/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black text-dark uppercase italic mb-6">{item.title}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                   <span className="text-6xl font-black text-dark italic">{item.price}</span>
                   <span className="text-dark/60 font-bold uppercase tracking-widest text-xs">{item.unit}</span>
                </div>
                <p className="text-dark/80 text-lg font-bold leading-relaxed italic">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ SOCIAL PROOF SECTION */}
      <section className="py-24 md:py-32 px-6 bg-white/[0.02] overflow-hidden">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative max-w-2xl w-full"
           >
              <div className="glass-card p-10 md:p-16 border-brand-yellow/30 text-white text-center flex flex-col items-center">
                 <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 bg-white/5 mb-8 shadow-xl">
                    <Image 
                      src="/testimonials/Callie.jpg" 
                      alt="Callie" 
                      fill 
                      className="object-cover"
                    />
                 </div>
                 
                 <div className="flex gap-1 text-brand-yellow mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" stroke="none" />
                    ))}
                 </div>
                 
                 <p className="text-xl md:text-2xl font-black italic leading-relaxed mb-8 text-white">
                   "Garry was really helpful with assisting me in designing social media and email campaign designs. Very helpful and knowledgeable. I will continue to use!"
                 </p>
                 
                 <div className="flex flex-col items-center mb-12">
                    <span className="text-lg font-black uppercase tracking-tighter text-brand-yellow">Callie</span>
                    <span className="text-white/40 font-black uppercase tracking-widest text-[10px]">M&M Compliance and Training Services</span>
                 </div>

                 <a 
                   href="https://calendly.com/bearmedia/discovery-call" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-brand-yellow text-dark px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(201,162,39,0.3)] hover:scale-105 transition-all italic"
                 >
                   BOOK A TRAINING SESSION
                 </a>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 🚀 CALL-TO-ACTION SECTION */}
      <section className="py-32 md:py-48 px-6 text-center border-t border-white/5">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-12 leading-none">
            Ready to <span className="text-brand-yellow">Master</span><br />your own tools?
          </h2>
          
          <a 
            href="https://calendly.com/bearmedia/discovery-call" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-dark text-xl md:text-3xl font-black py-8 px-16 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(221,163,30,0.4)] animate-[float_4s_ease-in-out_infinite] uppercase italic tracking-widest"
          >
            Book a Training Session
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
