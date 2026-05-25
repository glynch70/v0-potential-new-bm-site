'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, TrendingUp, Users } from 'lucide-react';

interface VideoProofProps {
  videoSrc: string;
  title: string;
  stats: { label: string; value: string; icon: React.ReactNode }[];
}

export default function VideoProof({ videoSrc, title, stats }: VideoProofProps) {
  return (
    <section className="py-16 md:py-24 px-6 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Container */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-video bg-neutral-900 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden relative group shadow-2xl"
          >
            <video 
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
               <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold text-neutral-950 flex items-center justify-center shadow-[0_0_50px_rgba(245,166,35,0.4)] group-hover:scale-110 transition-transform duration-500">
                  <Play size={28} className="md:size-32 fill-current ml-1" />
               </div>
            </div>
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 right-6 md:right-8">
               <p className="text-white text-[12px] md:text-[13px] md:text-[13px] md:text-sm font-black uppercase tracking-[0.4em] italic mb-1 md:mb-2">Evidence of impact</p>
               <h3 className="text-xl md:text-2xl font-black uppercase italic font-bebas tracking-wide text-white">{title}</h3>
            </div>
          </motion.div>

          {/* Content & Stats */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 uppercase italic font-bebas tracking-tight text-white leading-tight md:leading-none">
              Real Work. <br />
              <span className="text-gold">Proven Results.</span>
            </h2>
            <p className="text-base md:text-lg text-white mb-10 md:mb-12 leading-relaxed italic max-w-xl mx-auto lg:mx-0">
              We don't just show you pretty pictures. We show you systems that generate visibility and leads for real businesses in the Central Belt.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 md:p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-gold/20 transition-all duration-300 group text-left">
                   <div className="text-gold mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                      {stat.icon}
                   </div>
                   <p className="text-2xl md:text-3xl font-black text-white italic font-bebas tracking-tight mb-1">{stat.value}</p>
                   <p className="text-white text-[12px] md:text-[13px] md:text-[13px] md:text-sm font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
