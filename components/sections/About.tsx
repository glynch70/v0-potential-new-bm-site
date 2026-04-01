'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
  {
    name: "Garry Lynch",
    role: "Founder",
    photo: "/team/garry_lynch_hero.jpg",
    bio: "I handle the big picture—strategy, drone work, creative direction.",
    strength: "Vision, drone cinematography, client relationships"
  },
  {
    name: "Rory",
    role: "Quality Control",
    photo: "/team/rory_quality_control.jpg",
    bio: "I make sure everything's actually good. Quality control is my thing.",
    strength: "Attention to detail, quality assurance, problem-solving"
  },
  {
    name: "Lola",
    role: "Project Manager",
    photo: "/team/lola_project_manager.jpg",
    bio: "I keep us on track and make sure projects ship on time.",
    strength: "Project management, organisation, deadline mastery"
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden px-6 bg-dark">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center mb-32">
          {/* Left Side: Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full md:w-1/2 aspect-square md:aspect-[4/5] max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-brand-yellow rounded-3xl transform rotate-3 scale-105 opacity-20 animate-pulse" />
            <Image 
              src="/team/garry_lynch_hero.jpg" 
              alt="Garry Lynch"
              fill 
              className="object-cover rounded-3xl shadow-2xl z-10 border-4 border-white/5"
            />
          </motion.div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-xs mb-8 text-center md:text-left"
            >
              ABOUT THE FOUNDER
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl text-center md:text-left mb-10 font-black text-white italic leading-tight"
            >
              Hi. I'm <span className="text-brand-yellow">Garry.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl space-y-6 leading-[1.7] italic"
            >
              <p>
                We're a small team in West Lothian who actually give a damn about quality. Real people, real work, real results.
              </p>
              <p>
                I handle the big picture—strategy, drone work, and creative direction—but most importantly, I make sure we deliver exactly what Scottish businesses need to grow.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
              {[
                { val: "15+", label: "Years experience" },
                { val: "30+", label: "Happy clients" },
                { val: "5★", label: "Google rating" }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  className="flex flex-col gap-1 items-center md:items-start text-center md:text-left"
                >
                  <span className="text-4xl md:text-5xl font-black text-brand-yellow font-display uppercase tracking-widest">{stat.val}</span>
                  <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-black leading-tight">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex justify-center md:justify-start"
            >
              <a 
                href="https://calendly.com/bearmedia/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-yellow text-dark px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-2xl italic"
              >
                Book a discovery call with Garry →
              </a>
            </motion.div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-32 pt-32 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-xs mb-4">MEET THE SQUAD</p>
            <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter">Team <span className="text-brand-yellow">Bear Media</span></h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-square mb-8 overflow-hidden rounded-3xl border-2 border-white/5 group-hover:border-brand-yellow/30 transition-all">
                  <Image 
                    src={member.photo} 
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">{member.name}</h3>
                    <p className="text-brand-yellow font-bold uppercase tracking-wider text-xs">{member.role}</p>
                  </div>
                  
                  <p className="text-white/60 text-base italic leading-relaxed">
                    "{member.bio}"
                  </p>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">Strength</p>
                    <p className="text-xs font-bold text-white uppercase italic tracking-widest">{member.strength}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
