'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* 📹 Cinematic Drone Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 scale-105"
      >
        <source src="/media/NEW BM DRONE HERO.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlays for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/20 to-dark/40 z-[1]" />

      {/* Main Hero Content (Refined Sizing for Screen Fit) */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="mb-8 space-y-0"
        >
          {/* Main Heading — Three Lines (Exact Snippet Sizing) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white italic leading-tight tracking-tighter drop-shadow-2xl">
            GET SEEN
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-yellow italic leading-tight tracking-tighter drop-shadow-2xl">
            GET CUSTOMERS
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white italic leading-tight tracking-tighter drop-shadow-2xl">
            GET ON WITH IT
          </h3>
        </motion.div>

        {/* Sub-heading */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed italic font-medium drop-shadow-lg mb-8 md:mb-10 px-2"
        >
          Websites that work. Content that converts. Video that sells. Everything Scottish businesses need to compete online.
        </motion.p>

        {/* CTA Buttons (Exact Snippet Sizing) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-3 md:gap-4 justify-center flex-wrap px-2 mb-12"
        >
          <a
            href="https://calendly.com/bearmedia/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-3 md:py-4 bg-brand-yellow text-dark font-black rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-200 uppercase italic tracking-widest shadow-xl text-sm md:text-base"
          >
            Book a discovery call
          </a>
          <Link
            href="#work"
            className="px-6 md:px-8 py-3 md:py-4 border-2 border-brand-yellow text-brand-yellow font-black rounded-full backdrop-blur-sm hover:bg-brand-yellow hover:text-dark transition-all duration-200 uppercase italic tracking-widest shadow-xl text-sm md:text-base"
          >
            See my work
          </Link>
        </motion.div>

        {/* Scroll indicator (Moved beneath buttons) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3 mt-4"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 drop-shadow-lg">Scroll to explore.</span>
          <svg
            className="w-6 h-6 text-brand-yellow filter drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
