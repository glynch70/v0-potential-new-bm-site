'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center overflow-visible">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellow/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="relative z-10">
        <p className="uppercase tracking-[0.4em] text-xs text-brand-yellow mb-6 font-black">
          Broxburn • Edinburgh • Fife
        </p>
        <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic">
          Helping local <br />
          <span className="text-brand-yellow">businesses</span> <br />
          get seen online.
        </h1>
        <p className="mt-8 text-xl text-white max-w-xl font-medium leading-relaxed">
          Video content, reels, social media management, drone visuals and websites that make brands look <span className="text-white">credible</span> and <span className="text-white">active</span>.
        </p>
        <div className="mt-10 flex flex-wrap gap-5">
          <a 
            href="https://calendly.com/bearmedia/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-brand-yellow text-black font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(221,163,30,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(221,163,30,0.5)]"
          >
            Book Free Call
          </a>
          <Link 
            href="#work"
            className="px-8 py-4 rounded-2xl border-2 border-white/10 font-bold hover:bg-white/5 transition-colors"
          >
            See My Work
          </Link>
        </div>
      </div>
      
      <div className="relative group">
        {/* Border Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow to-brand-yellow-dark rounded-[2.2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative rounded-[2rem] bg-neutral-900 border border-white/10 p-3 shadow-2xl overflow-hidden">
          <div className="aspect-video rounded-3xl bg-neutral-950 flex items-center justify-center relative overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/media/NEW BM DRONE HERO.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 z-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-white font-bold uppercase tracking-widest text-[10px]">
              Drone Showreel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
