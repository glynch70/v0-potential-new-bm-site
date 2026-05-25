'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';

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
          src="/bm-drone-hero.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950" />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

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
              className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-6"
            >
              Visibility & Leads System
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] xl:text-[4.2rem] font-bold leading-[1.1] tracking-tight mb-8 font-inter-tight max-w-2xl text-white"
              style={{ letterSpacing: '-0.04em' }}
            >
              Doing great work but <br />
              <span className="text-gold underline decoration-brand-gold/30 underline-offset-8">nobody knows you exist?</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-white mb-10 max-w-lg leading-relaxed font-medium"
            >
              We bring the cameras and the strategy to your door. You focus on your trade; we focus on your growth. Serving Edinburgh, Fife, and West Lothian.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <a
                href="/contact"
                className="px-10 py-5 bg-gold text-neutral-950 font-black uppercase tracking-widest text-sm rounded-xl hover:scale-105 transition-all duration-300"
              >
                Book a Discovery Call
              </a>
              <a
                href="#work"
                className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                <Play size={16} className="fill-white" />
                See Our Work
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            {/* Visual Mockup */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 aspect-[4/3] md:aspect-video">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent z-10 pointer-events-none" />
               <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                src="/bm-drone-hero.mp4"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 z-20">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm leading-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
                      Bear Media
                    </span>
                    <span className="text-white text-[12px] md:text-[13px] font-medium uppercase tracking-[0.1em]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
                      Websites & Social Media
                    </span>
                  </div>
                  <div className="ml-auto">
                    <div className="text-white text-[13px] md:text-sm uppercase tracking-widest">Visibility System</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements for Premium Feel */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/10 blur-3xl rounded-full" />
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
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold/50 to-transparent" />
        <span className="text-[13px] md:text-sm uppercase tracking-[0.5em] text-white rotate-180 [writing-mode:vertical-lr]">Scroll</span>
      </motion.div>
    </section>
  );
}
