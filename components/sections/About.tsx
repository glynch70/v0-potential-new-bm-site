'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
  {
    name: "Garry Lynch",
    role: "Founder",
    photo: "/team/garry_lynch_car.jpg",
    bio: "I handle the big picture—strategy, drone work, creative direction. Also the guy who breaks things first.",
    strength: "Vision, drone cinematography, client relationships, making impossible deadlines work somehow."
  },
  {
    name: "Rory",
    role: "Quality Control",
    photo: "/team/rory_quality_control.jpg",
    bio: "I make sure everything's actually good. Quality control is my thing. Also, I'll do anything for a sausage.",
    strength: "Attention to detail, quality assurance, problem-solving, bribery via breakfast."
  },
  {
    name: "Lola",
    role: "Project Manager",
    photo: "/team/lola_project_manager.jpg",
    bio: "I keep us on track and make sure projects ship on time. Also look pretty doing it.",
    strength: "Project management, organisation, deadline mastery, photogenic enough to steal every frame."
  }
]

export default function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center overflow-visible">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative group">
        <div className="absolute -inset-1 bg-brand-yellow rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
        <div className="relative aspect-square rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden shadow-2xl">
          <Image 
            src="/team/garry_lynch_hero.jpg" 
            alt="Garry Lynch"
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-brand-yellow font-black uppercase tracking-widest text-[10px] mb-1">FOUNDER</p>
            <h3 className="text-2xl font-black uppercase italic">Garry Lynch</h3>
          </div>
        </div>
      </div>
      
      <div className="relative z-10">
        <p className="text-brand-yellow font-black uppercase tracking-[0.3em] text-xs mb-4">THE STORY</p>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic mb-8">About <span className="text-brand-yellow">Garry</span></h2>
        
        <p className="text-white/70 leading-relaxed text-xl mb-8 font-medium">
          I’m the freelance content creator behind <span className="text-white font-bold">Bear Media</span>. I help Scottish businesses who know they need to do more online but lack time, ideas or consistency.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            'Fast turnaround',
            'Real human service',
            'High-end visuals',
            'Local and reliable'
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-yellow/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              </div>
              <span className="text-white/80 font-bold text-sm uppercase tracking-wider">{item}</span>
            </div>
          ))}
        </div>

        <a 
          href="https://calendly.com/bearmedia/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 rounded-2xl bg-brand-yellow text-black font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(221,163,30,0.2)] hover:scale-105 transition-all"
        >
          Work with me
        </a>
      </div>
    </section>
  )
}
