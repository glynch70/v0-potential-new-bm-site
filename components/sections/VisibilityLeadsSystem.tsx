'use client';

import { motion } from 'framer-motion';
import { Camera, Monitor, Zap, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Camera size={40} />,
    title: "Content Creation",
    subtitle: "Get Attention",
    description: "Cinematic drone video, vertical reels, and professional photography that stops the scroll and builds instant authority."
  },
  {
    icon: <Monitor size={40} />,
    title: "Online Presence",
    subtitle: "Professional Credibility",
    description: "High-performance websites designed specifically to convert that attention into trust. Fast, mobile-first, and premium."
  },
  {
    icon: <Zap size={40} />,
    title: "Conversion",
    subtitle: "Turn Views Into Leads",
    description: "Integrated sales funnels and automated lead capture that ensures you never miss a potential customer again."
  }
];

export default function VisibilityLeadsSystem() {
  return (
    <section id="how-it-works" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-6"
          >
            The Solution
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8 font-bebas italic"
          >
            THE <span className="text-white">VISIBILITY & LEADS</span> <br />
            <span className="text-brand-yellow">SYSTEM</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            We don't just 'do social media' or 'build websites'. We implement a complete system that turns strangers into customers.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-neutral-900 rounded-[2.5rem] border border-white/5 hover:border-brand-yellow/20 transition-all duration-500 group h-full relative"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center text-neutral-950 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-brand-yellow font-black uppercase tracking-widest text-[10px] mb-2">{step.subtitle}</p>
                  <h3 className="text-2xl font-black text-white uppercase mb-6 font-bebas italic tracking-wide">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">{step.description}</p>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-10 text-brand-yellow/20">
                  <ArrowRight size={32} />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-neutral-900 to-neutral-800 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl text-center md:text-left">
             <h3 className="text-2xl md:text-3xl font-black text-white uppercase font-bebas italic mb-4">Ready to stop being ignored?</h3>
             <p className="text-white/60 text-sm md:text-base">Let's build your Visibility & Leads System and start growing your business properly.</p>
          </div>
          <a
            href="#contact"
            className="w-full md:w-auto px-12 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap text-center"
          >
            Start Your System
          </a>
        </motion.div>
      </div>
    </section>
  );
}
