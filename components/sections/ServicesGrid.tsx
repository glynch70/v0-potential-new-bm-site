'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, Camera, Share2, BrainCircuit, GraduationCap, Video } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Monthly Content Days',
    description: 'We come to you once a month and film everything you need for the next 30 days.',
    icon: Camera
  },
  {
    title: 'Reels & Short Video',
    description: 'High-impact vertical content designed specifically for Instagram, TikTok and Facebook.',
    icon: Share2
  },
  {
    title: 'Drone Property Visuals',
    description: 'Licensed drone pilot capturing cinematic aerial footage that makes you stand out.',
    icon: Video
  },
  {
    title: 'Websites That Convert',
    description: 'Next.js builds that look incredible and actually turn visitors into paying customers.',
    icon: Monitor
  },
  {
    title: 'Social Management',
    description: 'We don\'t just post; we manage the strategy, engagement and growth of your brand.',
    icon: BrainCircuit
  },
  {
    title: 'Digital Training',
    description: '1-to-1 training on mobile video, Canva and AI tools to help your team stay ahead.',
    icon: GraduationCap
  }
]

export default function ServicesGrid() {
  return (
    <section id="services" className="relative max-w-6xl mx-auto px-6 py-24 overflow-visible">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-yellow/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <p className="text-brand-yellow font-black uppercase tracking-[0.3em] text-xs mb-4">WHAT WE DO</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic">Services</h2>
        </div>
        <p className="text-white max-w-md text-right hidden md:block">
          Everything your business needs to dominate the digital space in Scotland. No fluff, just results.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="rounded-[2rem] p-8 bg-neutral-900/50 border border-white/5 transition-all hover:border-brand-yellow/30 hover:bg-neutral-900 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/5 blur-2xl rounded-full translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors group-hover:scale-110 duration-300">
              <service.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-brand-yellow transition-colors">{service.title}</h3>
            <p className="text-white text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
