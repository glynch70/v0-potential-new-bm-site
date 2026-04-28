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
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative group order-2 md:order-1">
        <div className="absolute -inset-1 bg-brand-yellow rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
        <div className="relative aspect-[4/5] rounded-[2.5rem] bg-neutral-900 border border-white/5 overflow-hidden shadow-2xl">
          <Image 
            src="/team/garry_lynch_hero.jpg" 
            alt="Garry Lynch"
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10">
            <p className="text-brand-yellow font-black uppercase tracking-widest text-[10px] mb-2">FOUNDER</p>
            <h3 className="text-4xl font-black uppercase font-bebas italic tracking-wider text-white">Garry Lynch</h3>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 order-1 md:order-2">
        <p className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-6">THE VISIONARY</p>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-bebas italic mb-8">
          Results Over <span className="text-brand-yellow">Rhetoric.</span>
        </h2>
        
        <div className="space-y-6 text-lg text-white/70 leading-relaxed font-medium mb-10">
          <p>
            With <span className="text-white font-bold italic">over 20 years of experience</span> in content creation and digital strategy, I've seen every trend come and go.
          </p>
          <p>
            I built <span className="text-white font-bold italic text-brand-yellow">Bear Media</span> because I saw too many local businesses being ignored online. They had great services, but their digital presence didn't match their expertise.
          </p>
          <p>
            My goal is simple: to help real businesses grow, not just look good online. I don't care about vanity metrics. I care about how many enquiries are hitting your inbox.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
          {[
            '20+ Years Experience',
            'No Fluff, Just Results',
            'Direct Access to Founder',
            'Conversion-First Focus'
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_10px_rgba(221,163,30,0.5)]" />
              <span className="text-white/80 font-black text-xs uppercase tracking-widest">{item}</span>
            </div>
          ))}
        </div>

        <a 
          href="#contact"
          className="inline-block px-12 py-5 rounded-2xl bg-brand-yellow text-black font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(221,163,30,0.2)] hover:scale-105 transition-all"
        >
          Let's Grow Your Business
        </a>
      </div>
    </section>
  )
}
