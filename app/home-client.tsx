'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const slowFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

const slowFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, ease: "easeOut" } }
};

export default function HomeContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <main ref={containerRef} className="bg-[#0f0e0c] min-h-screen text-[#E8E0D5] font-sans overflow-x-hidden selection:bg-[#D9A05B] selection:text-[#0f0e0c]">
      <Navbar />

      {/* 1. CINEMATIC TITLE SEQUENCE (HERO) */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden">
        {/* Slow Motion Background */}
        <div className="absolute inset-0 z-0 bg-[#0a0908]">
          <motion.video
            style={{ y: heroY }}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105 opacity-50 filter contrast-125 saturate-50"
          >
            <source src="/media/NEW BM DRONE HERO.mp4" type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,14,12,0.8)_100%)] pointer-events-none" />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="max-w-7xl mx-auto relative z-10 w-full px-6 flex flex-col items-center text-center mt-20"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.4 } }
            }}
          >
            <motion.h1 
              variants={slowFadeUp} 
              className="text-[12vw] md:text-[10rem] lg:text-[14rem] font-bebas leading-[0.75] tracking-tighter text-[#E8E0D5] mix-blend-screen"
            >
              SCOTLAND
            </motion.h1>
            <motion.div variants={slowFadeUp} className="mt-8 flex items-center justify-center gap-6 text-[#D9A05B] font-inter-tight uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">
              <span>Stories</span>
              <span className="w-1 h-1 rounded-full bg-[#D9A05B]/50" />
              <span>Businesses</span>
              <span className="w-1 h-1 rounded-full bg-[#D9A05B]/50" />
              <span>People</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE ETHOS - BREATHING ROOM & MINIMAL TEXT */}
      <section className="py-48 md:py-64 px-6 relative bg-[#0f0e0c]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
          >
            <motion.p variants={slowFadeUp} className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.3em] text-xs font-bold mb-12">
              The Premise
            </motion.p>
            <motion.h2 variants={slowFadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bebas leading-[1.1] tracking-wide text-[#E8E0D5]">
              Real work demands <br/>
              <span className="text-white/40">authentic documentation.</span>
            </motion.h2>
            <motion.p variants={slowFadeUp} className="mt-16 text-lg md:text-2xl font-inter-tight font-light leading-relaxed text-[#E8E0D5]/60 max-w-2xl mx-auto">
              No generic templates. No flashy gimmicks. We capture the atmosphere, the craft, and the reality of businesses operating across Scotland.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. ASYMMETRICAL STORY 1: THE ATMOSPHERE */}
      <section className="py-32 px-6 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-3/5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#171513]">
              <Image 
                src="/ATMOSPHERIC SCOTLAND IMAGES/Balmoral Hotel.jpg" 
                alt="Atmospheric Scotland" 
                fill 
                className="object-cover opacity-80 filter grayscale-[20%] contrast-[1.1] hover:scale-105 transition-transform duration-[2s] ease-out" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-2/5 flex flex-col justify-center"
          >
            <p className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Atmosphere</p>
            <h3 className="text-5xl md:text-7xl font-bebas text-[#E8E0D5] leading-[0.9] mb-10">
              Cinematic <br/> <span className="text-white/40">Motion.</span>
            </h3>
            <p className="text-[#E8E0D5]/60 font-inter-tight font-light leading-relaxed text-lg max-w-sm">
              Premium drone videography and motion design. We build trust by showing the scale, environment, and physical reality of your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. ASYMMETRICAL STORY 2: THE CRAFT (Alternating Density) */}
      <section className="py-32 md:py-48 px-6 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-32">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/3 flex flex-col justify-center md:items-end md:text-right"
          >
            <p className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Execution</p>
            <h3 className="text-5xl md:text-7xl font-bebas text-[#E8E0D5] leading-[0.9] mb-10">
              Digital <br/> <span className="text-white/40">Platforms.</span>
            </h3>
            <p className="text-[#E8E0D5]/60 font-inter-tight font-light leading-relaxed text-lg max-w-sm">
              We design websites that feel like editorial experiences. Removing the clutter so your work commands ultimate credibility and converts visibility into relationships.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-2/3"
          >
            <div className="relative aspect-[16/9] md:aspect-[3/2] w-full overflow-hidden bg-[#171513]">
              <Image 
                src="/BEST FINAL CLIENT WORK/simply sheds review by bm.png" 
                alt="Web Design Example" 
                fill 
                className="object-cover opacity-70 filter contrast-[1.1] hover:scale-105 transition-transform duration-[2s] ease-out" 
              />
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* 5. FULL BLEED IMMERSION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slowFade}
          className="absolute inset-0 z-0 bg-[#0a0908]"
        >
          <Image 
            src="/ATMOSPHERIC SCOTLAND IMAGES/Edinburgh Sunset.jpg" 
            alt="Atmospheric" 
            fill 
            className="object-cover opacity-40 filter contrast-125" 
          />
          <div className="absolute inset-0 bg-[#0f0e0c]/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c] via-transparent to-[#0f0e0c]" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
             className="text-4xl md:text-6xl font-bebas text-white tracking-widest leading-[1.2]"
           >
             "WE DON'T JUST CREATE CONTENT.<br/>
             <span className="text-[#D9A05B]">WE BUILD AUTHORITY.</span>"
           </motion.h2>
        </div>
      </section>

      {/* 6. THE OPERATOR - MINIMAL, INTENTIONAL */}
      <section className="py-48 px-6 bg-[#0f0e0c]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2 }}
            className="flex-1 w-full relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-lg mx-auto overflow-hidden bg-[#171513]">
              <Image 
                src="/PERSONAL BRAND IMAGES/garry on shoot.jpeg" 
                alt="Garry Lynch" 
                fill 
                className="object-cover opacity-80 filter grayscale-[40%] contrast-[1.1] object-top" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] to-transparent opacity-80" />
              
              <div className="absolute bottom-10 left-10">
                <p className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.3em] text-[10px] font-bold mb-2">The Operator</p>
                <h4 className="text-4xl font-bebas text-white">Garry Lynch</h4>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="flex-1 space-y-12"
          >
            <h3 className="text-5xl md:text-6xl font-bebas text-[#E8E0D5] leading-[1]">
              Years of <br/> <span className="text-white/40">Experience.</span>
            </h3>
            
            <div className="space-y-8 text-[#E8E0D5]/60 font-inter-tight font-light text-xl leading-relaxed max-w-md">
              <p>
                I am not an influencer. I operate behind the lens, documenting the reality of your business.
              </p>
              <p>
                True premium feel doesn't come from flashy templates. It comes from deep visual storytelling, trusted relationships, and an unwavering focus on the craft.
              </p>
            </div>
            
            <div className="pt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-4 text-xs font-inter-tight font-bold tracking-[0.2em] uppercase text-white hover:text-[#D9A05B] transition-colors group"
              >
                <span className="w-8 h-[1px] bg-white group-hover:bg-[#D9A05B] transition-colors" />
                Read The Background 
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. FOOTER / FINAL CTA - SLOW FADE */}
      <section className="py-64 px-6 bg-[#0f0e0c] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[#0a0908]">
          <Image 
            src="/BTS : PROCESS IMAGES/Harley Biker Drone Shoot.jpg" 
            alt="BTS" 
            fill 
            className="object-cover opacity-10 filter grayscale contrast-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/50 to-[#0f0e0c]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.4em] text-[10px] font-bold mb-12"
          >
            Start The Process
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-bebas text-[#E8E0D5] mb-20 leading-[0.85]"
          >
            LET'S <br/> <span className="text-white/30">BEGIN.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="px-12 py-6 bg-[#D9A05B] text-[#0f0e0c] font-inter-tight uppercase tracking-[0.2em] text-xs font-bold rounded-sm hover:bg-white transition-colors duration-700"
            >
              Contact Bear Media
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
