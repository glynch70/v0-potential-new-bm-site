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
    <section id="about" className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center overflow-visible">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative group order-2 md:order-1">
        <div className="absolute -inset-1 bg-gold rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
        <div className="relative aspect-[4/5] rounded-[2.5rem] bg-neutral-900 border border-white/5 overflow-hidden shadow-2xl">
          <Image 
            src="/team/garry_lynch_hero.jpg" 
            alt="Garry Lynch"
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10">
            <p className="text-gold font-black uppercase tracking-widest text-[13px] md:text-sm mb-2">FOUNDER</p>
            <h3 className="text-4xl font-black uppercase font-bebas italic tracking-wider text-white">Garry Lynch</h3>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 order-1 md:order-2">
        <p className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-6">THE VISIONARY</p>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-bebas italic mb-8">
          Results Over <span className="text-gold">Rhetoric.</span>
        </h2>
        
        <div className="space-y-6 text-lg text-white leading-relaxed font-medium mb-10">
          <p>
            I built Bear Media to help businesses get seen online and improve the quality of their ads and promotional content.
          </p>
          <p>
            Too many good businesses are invisible. Not because they lack skill, but because their content doesn’t reflect the quality of what they do.
          </p>
          <p>
            I focus on creating content that actually works — not just looks good. Content that builds trust, gets attention, and brings in enquiries.
          </p>
          <p>
            No fluff. No overcomplicated marketing. Just clear, consistent content that helps your business grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
          {[
            '20+ years experience',
            'Real business focus',
            'No fluff, just results',
            'Content built to convert'
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(221,163,30,0.5)]" />
              <span className="text-white font-black text-xs uppercase tracking-widest">{item}</span>
            </div>
          ))}
        </div>

        <a 
          href="/contact"
          className="inline-block px-12 py-5 rounded-2xl bg-gold text-black font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(221,163,30,0.2)] hover:scale-105 transition-all"
        >
          Let's Grow Your Business
        </a>
      </div>
    </section>
  )
}
