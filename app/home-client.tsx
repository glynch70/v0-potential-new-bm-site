'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const cinematicEase = [0.16, 1, 0.3, 1]; // Premium documentary ease curve

const slowFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.8, ease: cinematicEase } }
};

const slowFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2.2, ease: "easeOut" } }
};

// Premium Touch-Friendly Snap Carousel
const CinematicCarousel = ({ items }: { items: { src: string, label: string, category?: string, link?: string }[] }) => {
  return (
    <div className="w-full relative mt-12 md:mt-0">
      <div 
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pl-6 md:pl-0 pr-6 pb-12 cursor-grab active:cursor-grabbing hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {items.map((item, idx) => {
          const CardContent = (
            <div className="relative w-full h-full">
               <Image 
                 src={item.src} 
                 fill 
                 alt={item.label} 
                 sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 28vw"
                 className="object-cover opacity-100 transition-all duration-[4000ms] ease-out group-hover:scale-105" 
               />
               
               <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col gap-2">
                 {item.category && (
                   <span className="text-[#F1B92D] font-inter-tight uppercase tracking-[0.25em] text-[13px] md:text-[14px] font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                     {item.category}
                   </span>
                 )}
                 <p className="text-white font-inter-tight uppercase tracking-wider text-sm md:text-base font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                   {item.label}
                 </p>
               </div>
            </div>
          );

          return item.link ? (
            <Link 
              href={item.link} 
              key={idx} 
              className="snap-start shrink-0 w-[80vw] md:w-[40vw] lg:w-[28vw] aspect-[3/4] block border border-white/5 relative overflow-hidden bg-[#171513] group"
            >
              {CardContent}
            </Link>
          ) : (
            <div 
              key={idx} 
              className="snap-start shrink-0 w-[80vw] md:w-[40vw] lg:w-[28vw] aspect-[3/4] relative overflow-hidden bg-[#171513] group border border-white/5"
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  )
}

// Premium Touch-Friendly Snap Carousel for Landscape Digital Previews
const DigitalPlatformsCarousel = ({ items }: { items: { src: string, label: string, category?: string, link?: string }[] }) => {
  return (
    <div className="w-full relative mt-12 md:mt-0">
      <div 
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pl-6 md:pl-0 pr-6 pb-12 cursor-grab active:cursor-grabbing hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {items.map((item, idx) => {
          const CardContent = (
            <div className="relative w-full h-full">
               <Image 
                 src={item.src} 
                 fill 
                 alt={item.label} 
                 sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 38vw"
                 className="object-cover opacity-75 filter-none contrast-[1.05] group-hover:scale-105 duration-[4000ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:opacity-90 transition-all duration-[4000ms] ease-out" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-[#0f0e0c]/15 to-transparent opacity-85" />
               
               <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-1">
                 {item.category && (
                   <span className="text-[#F1B92D] font-inter-tight uppercase tracking-[0.25em] text-[12px] md:text-[13px] font-bold">
                     {item.category}
                   </span>
                 )}
                 <p className="text-[#E8E0D5] font-inter-tight uppercase tracking-wider text-xs font-bold leading-tight">
                   {item.label}
                 </p>
               </div>
            </div>
          );

          return item.link ? (
            <Link 
              href={item.link} 
              key={idx} 
              className="snap-start shrink-0 w-[85vw] md:w-[50vw] lg:w-[38vw] aspect-[16/10] block border border-white/5 relative overflow-hidden bg-[#171513] group"
            >
              {CardContent}
            </Link>
          ) : (
            <div 
              key={idx} 
              className="snap-start shrink-0 w-[85vw] md:w-[50vw] lg:w-[38vw] aspect-[16/10] relative overflow-hidden bg-[#171513] group border border-white/5"
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default function HomeContent() {
  const containerRef = useRef(null);
  const testimonialsSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: testimonialsScroll } = useScroll({
    target: testimonialsSectionRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.02]);
  const testimonialsBgY = useTransform(testimonialsScroll, [0, 1], [-120, 120]);

  return (
    <main ref={containerRef} className="bg-[#0f0e0c] min-h-screen text-[#E8E0D5] font-sans overflow-x-hidden selection:bg-[#F1B92D] selection:text-[#0f0e0c] relative">
      {/* Editorial Fine Lines Grid overlay */}
      <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
      <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

      <Navbar />

      {/* 1. CINEMATIC TITLE SEQUENCE (HERO) */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 bg-[#0a0908]">
          <motion.div style={{ y: heroY, scale: heroScale }} className="w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-105 opacity-100 filter contrast-[1.05] saturate-[0.8]"
            >
              <source src="/media/NEW BM DRONE HERO.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/35 via-transparent to-transparent z-1" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(15,14,12,0.05)_100%)] pointer-events-none z-1" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F1B92D]/5 via-transparent to-[#F1B92D]/2 mix-blend-color-dodge pointer-events-none z-2" />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="w-full relative z-10 px-6 md:px-12 lg:px-24 flex flex-col items-start justify-center mt-20 text-left"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="w-full max-w-4xl bg-black/40 backdrop-blur-2xl border border-white/[0.06] rounded-[32px] p-8 md:p-14 lg:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.45)] relative overflow-hidden space-y-8"
          >
            {/* Ambient luxury glow inside the glass card */}
            <div className="absolute top-[-30%] left-[-20%] w-[60%] h-[60%] bg-[#F1B92D]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-30%] right-[-20%] w-[50%] h-[50%] bg-black/60 blur-[80px] rounded-full pointer-events-none" />

            <motion.h1 
              variants={slowFadeUp} 
              className="text-[9vw] md:text-[5rem] lg:text-[6.5rem] font-bebas leading-[1.05] tracking-tighter text-[#E8E0D5] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] uppercase relative z-10"
            >
              REAL STORIES.<br className="hidden sm:inline" />
              REAL BUSINESSES.<br className="hidden sm:inline" />
              <span className="text-[#F1B92D]">REAL SCOTLAND.</span>
            </motion.h1>

            <motion.p 
              variants={slowFadeUp} 
              className="max-w-2xl text-base md:text-xl font-inter-tight font-light leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] tracking-wide relative z-10"
            >
              We don’t just create content. We build authority. High-performance website design, cinematic brand films, and visual growth systems for ambitious businesses in West Lothian, Edinburgh, Fife, and across Central Scotland.
            </motion.p>
            
            <motion.div variants={slowFadeUp} className="pt-4 relative z-10">
              <Link
                href="/contact"
                className="relative px-8 md:px-10 py-4 md:py-5 bg-[#F1B92D] hover:bg-[#ffc63b] text-[#0f0e0c] font-inter-tight uppercase tracking-[0.25em] text-[12px] md:text-[13px] font-bold rounded-lg transition-all duration-300 inline-block shadow-[0_4px_20px_rgba(241,185,45,0.25)] hover:shadow-[0_6px_25px_rgba(241,185,45,0.4)] hover:scale-[1.02]"
              >
                Let’s Create Something Worth Watching
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE ETHOS - CONFIDENT dark editorial section */}
      <section className="py-48 md:py-64 px-6 relative bg-[#0a0908] border-b border-white/5 z-10">
        {/* Editorial Fine Lines Grid overlay matching dark section */}
        <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
        <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
        
        <div className="w-full pl-6 md:pl-12 lg:pl-24 text-left relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
          >
            <motion.p variants={slowFadeUp} className="text-[#F1B92D] font-inter-tight uppercase tracking-[0.3em] text-[12px] md:text-[13px] font-bold mb-12">
              The Standard
            </motion.p>
            <motion.h2 variants={slowFadeUp} className="font-bebas leading-[1.05] tracking-wide text-[#E8E0D5]">
              Real work demands <br/>
              <span className="text-[#F1B92D] font-bold">authentic documentation.</span>
            </motion.h2>
            <motion.p variants={slowFadeUp} className="mt-16 font-inter-tight font-light leading-relaxed text-[#E8E0D5]/70 max-w-3xl tracking-wide">
              No generic templates. No flashy gimmicks. We capture the atmosphere, the craft, and the reality of businesses operating across Scotland.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. ASYMMETRICAL GALLERY: THE ATMOSPHERE & CRAFT */}
      <section className="py-36 md:py-48 bg-[#0f0e0c] overflow-hidden border-b border-white/5">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-end justify-between px-6 md:px-12 lg:px-24 mb-24 gap-10">
             <motion.div 
               initial={{ opacity: 0, y: 35 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.6, ease: cinematicEase }}
               className="max-w-4xl"
             >
               <p className="text-[#F1B92D] font-inter-tight uppercase tracking-[0.3em] text-[12px] md:text-[13px] font-bold mb-6 flex items-center gap-4">
                 <span className="w-8 h-[1px] bg-[#F1B92D]/30" /> Visual Direction
               </p>
               <h2 className="font-bebas text-[#E8E0D5] leading-[0.95]">
                 Cinematic <br/> <span className="text-[#F1B92D]/85">Motion.</span>
               </h2>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 35 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.6, delay: 0.15, ease: cinematicEase }}
               className="max-w-sm lg:pb-2"
             >
               <p className="text-[#E8E0D5]/85 font-inter-tight font-light leading-relaxed text-sm tracking-wide">
                 Premium drone videography and motion design. We blend the raw, behind-the-scenes process with finalized atmospheric storytelling to build absolute trust.
               </p>
             </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: cinematicEase }}
            className="w-full pl-6 md:pl-12 lg:pl-24"
          >
             <CinematicCarousel items={[
               { src: "/ATMOSPHERIC SCOTLAND IMAGES/Balmoral Hotel.jpg", label: "Balmoral Hotel Landmark Perspective", category: "Drone Videography", link: "/portfolio" },
               { src: "/ATMOSPHERIC SCOTLAND IMAGES/Howies Edinburgh.jpg", label: "Howies Edinburgh Interior Atmosphere", category: "Street Photography", link: "/portfolio" },
               { src: "/ATMOSPHERIC SCOTLAND IMAGES/prestonfield leaves.jpg", label: "Prestonfield House Botanical Detail", category: "Landscape Documentaries", link: "/portfolio" },
             ]} />
          </motion.div>
        </div>
      </section>

      {/* 4. ASYMMETRICAL STORY 2: DIGITAL PLATFORMS (HORIZONTAL CAROUSEL) */}
      <section className="py-36 md:py-48 bg-[#0a0908] overflow-hidden border-b border-white/5 relative z-10">
        {/* Editorial Fine Lines Grid overlay matching dark section */}
        <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
        <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
        
        <div className="w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between px-6 md:px-12 lg:px-24 mb-24 gap-10">
             <motion.div 
               initial={{ opacity: 0, y: 35 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.6, ease: cinematicEase }}
               className="max-w-4xl"
             >
               <p className="text-[#F1B92D] font-inter-tight uppercase tracking-[0.3em] text-[12px] md:text-[13px] font-bold mb-6 flex items-center gap-4">
                 <span className="w-8 h-[1px] bg-[#F1B92D]/30" /> Execution
               </p>
               <h2 className="font-bebas text-[#E8E0D5] leading-[0.95]">
                 Digital <br/> <span className="text-[#F1B92D]/85">Platforms.</span>
               </h2>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 35 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.6, delay: 0.15, ease: cinematicEase }}
               className="max-w-sm lg:pb-2"
             >
               <p className="text-[#E8E0D5]/85 font-inter-tight font-light leading-relaxed text-sm tracking-wide">
                 We design high-performance websites that function as digital gallery spaces. Clean, fast, and built to transform visibility into high-value relationships.
               </p>
             </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: cinematicEase }}
            className="w-full pl-6 md:pl-12 lg:pl-24"
          >
             <DigitalPlatformsCarousel items={[
               { src: "/BEST FINAL CLIENT WORK/seamus rebrand.jpg", label: "Séamus Corry Editorial Brand Identity", category: "Branding Visuals", link: "https://seamus-corry-rebrand.vercel.app/" },
               { src: "/BEST FINAL CLIENT WORK/Almond Vet Care Website.jpg", label: "Almond Vet Care Clinic Platform", category: "Web Design", link: "/portfolio/almond-vet-care" },
               { src: "/BEST FINAL CLIENT WORK/C&G Quality Builds.reel.cover.png", label: "C&G Quality Builds Drone Integration", category: "Social Content", link: "/portfolio" },
               { src: "/BEST FINAL CLIENT WORK/klewis.jpg", label: "K Lewis Joinery Client Dashboard", category: "Web Platform", link: "/portfolio/k-lewis-joinery" },
               { src: "/BEST FINAL CLIENT WORK/robertsons.jpg", label: "Robertson Transport Logistics Hub", category: "Corporate Web", link: "/portfolio/robertsons-transport" },
               { src: "/BEST FINAL CLIENT WORK/SIMPLY SHEDS.open sat & sun-Cover.jpg", label: "Simply Sheds High-Conversion E-Commerce", category: "Digital Campaigns", link: "/portfolio" },
             ]} />
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
            src="/ATMOSPHERIC SCOTLAND IMAGES/waterloo street trails.jpg" 
            alt="Atmospheric Flow" 
            fill 
            className="object-cover opacity-25 filter grayscale-[30%] contrast-[1.15]" 
          />
          <div className="absolute inset-0 bg-[#0f0e0c]/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c] via-transparent to-[#0f0e0c]" />
        </motion.div>
        
        <div className="relative w-full z-10 text-center px-6 md:px-12 lg:px-24">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.8, delay: 0.3, ease: cinematicEase }}
             className="font-bebas text-white tracking-wide leading-[0.9]"
           >
             "WE DON'T JUST CREATE CONTENT.<br/>
             <span className="text-[#F1B92D] drop-shadow-2xl">WE BUILD AUTHORITY.</span>"
           </motion.h2>
        </div>
      </section>

      {/* 6. THE OPERATOR - AUTHENTIC, RESTRAINED */}
      <section className="py-48 bg-[#0f0e0c] border-t border-white/5">
        <div className="w-full flex flex-col lg:flex-row items-center gap-24 lg:gap-32 px-6 md:px-12 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: cinematicEase }}
            className="flex-1 w-full relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden bg-[#171513] group border border-white/5">
              <Image 
                src="/PERSONAL BRAND IMAGES/garry on shoot.jpeg" 
                alt="Garry Lynch" 
                fill 
                className="object-cover opacity-80 filter grayscale-[25%] contrast-[1.1] object-top group-hover:scale-[1.01] transition-transform duration-[4000ms] ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/10 to-transparent opacity-90" />
              
              <div className="absolute bottom-10 left-10">
                <p className="text-[#F1B92D] font-inter-tight uppercase tracking-[0.4em] text-[13px] md:text-sm md:text-[12px] font-bold mb-2 opacity-80">The Operator</p>
                <h4 className="text-4xl font-bebas text-[#E8E0D5] tracking-wide">Garry Lynch</h4>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
            className="flex-1 space-y-12"
          >
            <h2 className="font-bebas text-[#E8E0D5] leading-[0.95]">
              Years of <br/> <span className="text-[#F1B92D]">Experience.</span>
            </h2>
            
            <div className="space-y-8 text-[#E8E0D5]/85 font-inter-tight font-light text-base md:text-lg lg:text-xl leading-relaxed max-w-sm tracking-wide">
              <p>
                I am not an influencer. I operate behind the lens, documenting the reality and scale of your business.
              </p>
              <p>
                True premium feel doesn't come from flashy templates. It comes from deep visual storytelling, trusted relationships, and an unwavering focus on the craft.
              </p>
            </div>
            
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-6 text-[13px] md:text-sm font-inter-tight font-bold tracking-[0.3em] uppercase text-[#E8E0D5]/80 hover:text-[#F1B92D] transition-colors group"
              >
                <span className="w-12 h-[1px] bg-[#E8E0D5]/20 group-hover:bg-[#F1B92D] transition-colors" />
                Read The Background 
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6.3 CLIENT TESTIMONIALS - HIGH-END EDITORIAL PROOF (LIGHT STYLISH BACKDROP WITH PARALLAX DEPTH) */}
      <section ref={testimonialsSectionRef} className="py-36 px-6 relative overflow-hidden z-10 border-t border-[#1A1917]/10">
        {/* Parallax Background Image */}
        <motion.div 
          style={{ y: testimonialsBgY }}
          className="absolute inset-0 z-0 scale-110 pointer-events-none"
        >
          <Image 
            src="/BEST FINAL CLIENT WORK/dundas-castle.png" 
            fill 
            alt="Cinematic Scotland Dundas Castle" 
            className="object-cover opacity-[0.22] saturate-[0.8] contrast-[1.05]" 
          />
        </motion.div>

        {/* Softer Glass effect, Warm Light Overlay, Slight Blur */}
        <div className="absolute inset-0 bg-[#F5F4F0]/85 backdrop-blur-md z-0 pointer-events-none" />

        {/* Editorial Fine Lines Grid overlay matching light section */}
        <div className="absolute inset-y-0 left-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-[10%] w-[1px] bg-[#1A1917]/5 pointer-events-none z-10" />

        <div className="w-full relative z-20">
          <div className="flex flex-col lg:flex-row items-end justify-between px-6 md:px-12 lg:px-24 mb-24 gap-10">
             <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.6, ease: cinematicEase }}
                className="max-w-4xl"
             >
                <p className="text-[#8A640F] font-inter-tight uppercase tracking-[0.3em] text-[12px] md:text-[13px] font-bold mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-[#8A640F]" /> Commercial Proof
                </p>
                <h2 className="font-bebas text-[#1A1917] tracking-wider leading-[0.95] uppercase">
                  Trusted <br/> <span className="text-[#8A640F]/85">Relationships.</span>
                </h2>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.6, delay: 0.15, ease: cinematicEase }}
                className="max-w-sm lg:pb-2"
             >
                <p className="text-[#1A1917]/80 font-inter-tight font-light leading-relaxed text-sm tracking-wide">
                  Real outcomes for ambitious Scottish businesses. We don't deal in vanity metrics—we document real growth and construct high-performance digital platforms.
                </p>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24 w-full">
             {/* Kris Lewis */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.1, ease: cinematicEase }}
                className="bg-[#EFECE8]/50 backdrop-blur-sm border border-[#1A1917]/5 p-10 flex flex-col justify-between group hover:bg-[#EFECE8]/90 hover:border-[#F1B92D]/20 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-500 shadow-sm rounded-sm"
             >
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#F1B92D] text-xs">★</span>
                    ))}
                  </div>
                  <p className="text-[#1A1917]/85 font-inter-tight font-light text-base md:text-lg leading-relaxed tracking-wide italic">
                    "Garry stripped away all the usual agency nonsense. Our new site is fast, looks exactly how we wanted, and we started getting quote requests within the first week. The drone footage of our recent extension build made all the difference."
                  </p>
                </div>
                <div className="mt-10 pt-6 border-t border-[#1A1917]/10 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-950 border border-[#F1B92D]/30 group-hover:border-[#F1B92D] transition-colors duration-500 shadow-inner">
                    <Image src="/testimonials/Kris.jpg" fill alt="Kris Lewis" className="object-cover transition-all duration-700" />
                  </div>
                  <div>
                    <h3 className="text-xs font-inter-tight font-bold uppercase tracking-wider text-[#1A1917]">Kris Lewis</h3>
                    <p className="text-[13px] md:text-sm font-inter-tight uppercase tracking-widest text-[#F1B92D] mt-0.5">K Lewis Joinery</p>
                  </div>
                </div>
             </motion.div>

             {/* Stephen Johnstone */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.2, ease: cinematicEase }}
                className="bg-[#EFECE8]/50 backdrop-blur-sm border border-[#1A1917]/5 p-10 flex flex-col justify-between group hover:bg-[#EFECE8]/90 hover:border-[#F1B92D]/20 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-500 shadow-sm rounded-sm"
             >
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#F1B92D] text-xs">★</span>
                    ))}
                  </div>
                  <p className="text-[#1A1917]/85 font-inter-tight font-light text-base md:text-lg leading-relaxed tracking-wide italic">
                    "Our practice needed a strategic, high-end online presence that reflected our veterinary standards. Bear Media custom-built a blazing fast React platform that Perthshire pet owners absolutely love. Frictionless and premium."
                  </p>
                </div>
                <div className="mt-10 pt-6 border-t border-[#1A1917]/10 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-950 border border-[#F1B92D]/30 group-hover:border-[#F1B92D] transition-colors duration-500 shadow-inner">
                    <Image src="/testimonials/stephen.png" fill alt="Stephen Johnstone" className="object-cover transition-all duration-700" />
                  </div>
                  <div>
                    <h3 className="text-xs font-inter-tight font-bold uppercase tracking-wider text-[#1A1917]">Stephen Johnstone</h3>
                    <p className="text-[13px] md:text-sm font-inter-tight uppercase tracking-widest text-[#F1B92D] mt-0.5">Almond Vet Care</p>
                  </div>
                </div>
             </motion.div>

             {/* Leanne Murphy */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.3, ease: cinematicEase }}
                className="bg-[#EFECE8]/50 backdrop-blur-sm border border-[#1A1917]/5 p-10 flex flex-col justify-between group hover:bg-[#EFECE8]/90 hover:border-[#F1B92D]/20 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-500 shadow-sm rounded-sm"
             >
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#F1B92D] text-xs">★</span>
                    ))}
                  </div>
                  <p className="text-[#1A1917]/85 font-inter-tight font-light text-base md:text-lg leading-relaxed tracking-wide italic">
                    "We needed a website that showed we handle serious logistics, not just local van runs. Bear Media delivered exactly that. Our new site ranks better locally and makes us look like the professional outfit we are."
                  </p>
                </div>
                <div className="mt-10 pt-6 border-t border-[#1A1917]/10 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-950 border border-[#F1B92D]/30 group-hover:border-[#F1B92D] transition-colors duration-500 shadow-inner">
                    <Image src="/testimonials/leanne.png" fill alt="Leanne Murphy" className="object-cover transition-all duration-700" />
                  </div>
                  <div>
                    <h3 className="text-xs font-inter-tight font-bold uppercase tracking-wider text-[#1A1917]">Leanne Murphy</h3>
                    <p className="text-[13px] md:text-sm font-inter-tight uppercase tracking-widest text-[#F1B92D] mt-0.5">Robertson Transport</p>
                  </div>
                </div>
             </motion.div>
          </div>

          <div className="text-center mt-20">
             <Link
                href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review" 
                target="_blank"
                className="relative px-10 py-5 bg-transparent border border-[#1A1917]/20 text-[#1A1917] font-inter-tight uppercase tracking-[0.25em] text-[12px] md:text-[13px] font-bold rounded-sm overflow-hidden group/btn hover:border-[#F1B92D] hover:text-[#0f0e0c] transition-colors duration-500 inline-block z-30"
             >
                <div className="absolute inset-0 bg-[#F1B92D] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 group-hover/btn:text-[#0f0e0c] transition-colors duration-500">
                  View More Google Reviews
                </span>
             </Link>
          </div>
        </div>
      </section>

      {/* 6.5 TEAM BEAR MEDIA - PLAYFUL, HUMAN, PREMIUM */}
      <section className="py-36 md:py-48 bg-[#0f0e0c] border-t border-white/5 overflow-hidden">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="text-left mb-24">
             <motion.p 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: cinematicEase }}
               className="text-[#F1B92D] font-inter-tight uppercase tracking-[0.3em] text-[12px] md:text-[13px] font-bold mb-4"
             >
               The real crew behind the scenes.
             </motion.p>
             <motion.h2 
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.4, ease: cinematicEase }}
               className="font-bebas text-[#E8E0D5] tracking-wide"
             >
               TEAM BEAR MEDIA
             </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {/* Garry */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.1, ease: cinematicEase }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden bg-[#171513] border border-white/5 mb-6">
                <Image 
                  src="/team/garry_car.jpg" 
                  alt="Garry Lynch" 
                  fill 
                  className="object-cover opacity-85 filter-none contrast-[1.05] group-hover:scale-105 duration-[4000ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:opacity-95 transition-all duration-[4000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-transparent to-transparent opacity-85" />
              </div>
              <h3 className="text-2xl font-bebas text-[#E8E0D5] tracking-wide mb-1">Garry Lynch</h3>
              <p className="text-[#F1B92D] font-inter-tight uppercase tracking-wider text-[12px] md:text-[13px] font-bold">
                Founder / Creative Director / Camera Carrier
              </p>
            </motion.div>

            {/* Lola */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.2, ease: cinematicEase }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden bg-[#171513] border border-white/5 mb-6">
                <Image 
                  src="/team/lola_project_manager.jpg" 
                  alt="Lola" 
                  fill 
                  className="object-cover opacity-85 filter-none contrast-[1.05] group-hover:scale-105 duration-[4000ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:opacity-95 transition-all duration-[4000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-transparent to-transparent opacity-85" />
              </div>
              <h3 className="text-2xl font-bebas text-[#E8E0D5] tracking-wide mb-1">Lola</h3>
              <p className="text-[#F1B92D] font-inter-tight uppercase tracking-wider text-[12px] md:text-[13px] font-bold">
                Project Manager / Snack Supervisor
              </p>
            </motion.div>

            {/* Rory */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.3, ease: cinematicEase }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden bg-[#171513] border border-white/5 mb-6">
                <Image 
                  src="/team/rory_quality_control.jpg" 
                  alt="Rory" 
                  fill 
                  className="object-cover opacity-85 filter-none contrast-[1.05] group-hover:scale-105 duration-[4000ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:opacity-95 transition-all duration-[4000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-transparent to-transparent opacity-85" />
              </div>
              <h3 className="text-2xl font-bebas text-[#E8E0D5] tracking-wide mb-1">Rory</h3>
              <p className="text-[#F1B92D] font-inter-tight uppercase tracking-wider text-[12px] md:text-[13px] font-bold">
                Quality Control / Barketing Executive
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA - SLOW FADE WITH RESTRAINED ACCENT (DARK CINEMATIC SECTION) */}
      <section className="py-64 px-6 bg-[#0a0908] relative overflow-hidden flex items-center justify-center group border-t border-white/5 z-10">
        {/* Editorial Fine Lines Grid overlay matching dark section */}
        <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
        <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

        <div className="absolute inset-0 bg-[#0f0e0c] z-0">
          <Image 
            src="/BEST FINAL CLIENT WORK/WE’RE HIRING.png" 
            alt="Narrative Final Work" 
            fill 
            className="object-cover opacity-[0.1] filter grayscale-[30%] contrast-[1.1] group-hover:scale-[1.03] transition-transform duration-[8s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/80 to-[#0a0908]" />
        </div>
        
        <div className="w-full text-center relative z-10 flex flex-col items-center px-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="text-[#F1B92D] font-inter-tight uppercase tracking-[0.4em] text-[12px] md:text-[13px] font-bold mb-12"
          >
            Start The Process
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
            className="font-bebas text-[#E8E0D5] mb-20 leading-[0.8]"
          >
            LET'S <br/> <span className="text-[#E8E0D5]/20">BEGIN.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="relative px-12 py-6 bg-transparent border border-[#E8E0D5]/15 text-[#E8E0D5] font-inter-tight uppercase tracking-[0.25em] text-[12px] md:text-[13px] font-bold rounded-sm overflow-hidden group/btn hover:border-[#F1B92D] transition-colors duration-500 inline-block"
            >
              <div className="absolute inset-0 bg-[#F1B92D] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover/btn:text-[#0f0e0c] transition-colors duration-500">Contact Bear Media</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
