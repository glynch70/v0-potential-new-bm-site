'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function SalesHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral-950">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          src="/media/NEW BM DRONE HERO.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950" />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-yellow/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-yellow/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-6"
            >
              Visibility & Leads System
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 font-bebas italic"
            >
              You're not getting <span className="text-white">seen online.</span> <br />
              <span className="text-brand-yellow">That’s costing you business.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed font-medium"
            >
              We create content that gets attention and websites that turn that attention into real leads.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <a
                href="#contact"
                className="px-10 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-xl shadow-[0_0_30px_rgba(221,163,30,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(221,163,30,0.5)] transition-all duration-300"
              >
                Get More Leads
              </a>
              <a
                href="#how-it-works"
                className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                <Play size={16} className="fill-white" />
                See How It Works
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            {/* Visual Mockup - Placeholder for now, but styled to look premium */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 aspect-[4/3] md:aspect-video">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/10 to-transparent" />
               <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                src="/media/NEW BM DRONE HERO.mp4"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center shadow-2xl scale-110">
                    <Play size={24} className="text-neutral-950 fill-neutral-950 ml-1" />
                 </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center font-black text-neutral-950">BM</div>
                  <div>
                    <div className="text-white font-bold text-sm">Visibility & Leads System</div>
                    <div className="text-white/50 text-xs tracking-widest uppercase mt-0.5">Content + Conversion</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements for Premium Feel */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-yellow/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-yellow/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-brand-yellow/50 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 rotate-180 [writing-mode:vertical-lr]">Scroll</span>
      </motion.div>
    </section>
  );
}
