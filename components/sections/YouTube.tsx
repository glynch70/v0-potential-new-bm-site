'use client'

import { motion } from 'framer-motion'

export default function YouTube() {
  return (
    <section id="youtube" className="py-24 md:py-32 px-6 bg-dark">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-xs mb-8"
        >
          WATCH BEAR MEDIA
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl leading-tight mb-10 font-black text-white italic"
        >
          See the <span className="text-brand-yellow">work</span><br />
          No <span className="text-brand-yellow">polish</span><br />
          No <span className="text-brand-yellow">pretending</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-16 italic font-medium"
        >
          Real projects, real clients, real Scotland —<br />
          follow the Bear Media YouTube channel.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-32"
        >
          <a 
            href="https://www.youtube.com/@bearmediacontent" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-dark text-lg font-bold py-6 px-12 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-[float_5s_ease-in-out_infinite] uppercase italic tracking-[0.2em]"
          >
            Browse the Channel
          </a>
        </motion.div>

        {/* 🎥 Video Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            {
              title: "Drone Cinematography",
              desc: "High-impact 4K aerial footage for construction, property, and events. Licensed and insured operations across Scotland.",
              url: "https://www.youtube.com/@bearmediacontent"
            },
            {
              title: "Client Testimonials",
              desc: "Let your customers do the talking. Professional interview-style videos that build social proof and close deals.",
              url: "https://www.youtube.com/@bearmediacontent"
            },
            {
              title: "Product & Promo Films",
              desc: "Dynamic, fast-paced edits that showcase your products in action. Perfect for website banners and social ads.",
              url: "https://www.youtube.com/@bearmediacontent"
            }
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
              className="glass-card p-10 flex flex-col items-center text-center group border-brand-yellow/10 hover:border-brand-yellow/30 transition-all cursor-pointer relative overflow-hidden"
              onClick={() => window.open(card.url, '_blank')}
            >
              <div className="w-16 h-16 rounded-full bg-brand-yellow/10 flex items-center justify-center mb-8 border border-brand-yellow/20 group-hover:bg-brand-yellow/30 transition-colors">
                 <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-brand-yellow border-b-[8px] border-b-transparent ml-1" />
              </div>
              <h3 className="text-xl font-black text-brand-yellow uppercase italic mb-4">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed italic font-medium">{card.desc}</p>
              <div className="mt-8 text-brand-yellow font-black uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                Play on YouTube →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
