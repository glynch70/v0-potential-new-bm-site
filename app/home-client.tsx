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
                 className="object-cover opacity-75 filter grayscale-[10%] contrast-[1.05] group-hover:scale-102 group-hover:opacity-90 transition-all duration-[2.5s] ease-out" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-[#0f0e0c]/30 to-transparent opacity-85" />
               
               <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-1">
                 {item.category && (
                   <span className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.25em] text-[9px] font-bold">
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
                 className="object-cover opacity-75 filter grayscale-[10%] contrast-[1.05] group-hover:scale-102 group-hover:opacity-90 transition-all duration-[2.5s] ease-out" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-[#0f0e0c]/15 to-transparent opacity-85" />
               
               <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-1">
                 {item.category && (
                   <span className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.25em] text-[9px] font-bold">
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.02]);

  return (
    <main ref={containerRef} className="bg-[#0f0e0c] min-h-screen text-[#E8E0D5] font-sans overflow-x-hidden selection:bg-[#D9A05B] selection:text-[#0f0e0c] relative">
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
              className="w-full h-full object-cover scale-105 opacity-35 filter contrast-[1.1] saturate-[0.7]"
            >
              <source src="/media/NEW BM DRONE HERO.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/40 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(15,14,12,0.95)_100%)] pointer-events-none" />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="max-w-7xl mx-auto relative z-10 w-full px-6 md:px-12 flex flex-col items-start justify-center mt-12 text-left"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
            }}
            className="w-full space-y-8"
          >
            <motion.h1 
              variants={slowFadeUp} 
              className="text-[10vw] md:text-[5.5rem] lg:text-[7rem] font-bebas leading-[0.9] tracking-tighter text-[#E8E0D5] drop-shadow-2xl uppercase"
            >
              REAL STORIES.<br />
              REAL BUSINESSES.<br />
              <span className="text-[#D9A05B]">REAL SCOTLAND.</span>
            </motion.h1>

            <motion.p 
              variants={slowFadeUp} 
              className="max-w-xl text-sm md:text-base font-inter-tight font-light leading-relaxed text-[#E8E0D5]/70 tracking-wide"
            >
              Cinematic content, photography, website design and social media visuals for businesses across Scotland.
            </motion.p>
            
            <motion.div variants={slowFadeUp} className="pt-4">
              <Link
                href="/contact"
                className="relative px-10 py-5 bg-transparent border border-[#E8E0D5]/15 text-[#E8E0D5] font-inter-tight uppercase tracking-[0.25em] text-[9px] font-bold rounded-sm overflow-hidden group/btn hover:border-[#D9A05B] transition-colors duration-500 inline-block"
              >
                <div className="absolute inset-0 bg-[#D9A05B] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 group-hover/btn:text-[#0f0e0c] transition-colors duration-500">
                  Let’s Create Something Worth Watching
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE ETHOS - CONFIDENT editorial BREATHING ROOM */}
      <section className="py-48 md:py-64 px-6 relative bg-[#0f0e0c] border-b border-white/5">
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
            <motion.p variants={slowFadeUp} className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.3em] text-[9px] font-bold mb-12">
              The Standard
            </motion.p>
            <motion.h2 variants={slowFadeUp} className="text-4xl md:text-5xl lg:text-7xl font-bebas leading-[1.05] tracking-wide text-[#E8E0D5]">
              Real work demands <br/>
              <span className="text-[#E8E0D5]/30">authentic documentation.</span>
            </motion.h2>
            <motion.p variants={slowFadeUp} className="mt-16 text-base md:text-lg font-inter-tight font-light leading-relaxed text-[#E8E0D5]/50 max-w-xl mx-auto tracking-wide">
              No generic templates. No flashy gimmicks. We capture the atmosphere, the craft, and the reality of businesses operating across Scotland.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. ASYMMETRICAL GALLERY: THE ATMOSPHERE & CRAFT */}
      <section className="py-36 px-6 bg-[#0f0e0c] overflow-hidden border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between max-w-7xl mx-auto mb-20 gap-10">
             <motion.div 
               initial={{ opacity: 0, y: 35 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.6, ease: cinematicEase }}
               className="max-w-2xl"
             >
               <p className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.3em] text-[9px] font-bold mb-6 flex items-center gap-4">
                 <span className="w-8 h-[1px] bg-[#D9A05B]/30" /> Visual Direction
               </p>
               <h3 className="text-5xl md:text-7xl font-bebas text-[#E8E0D5] leading-[0.95]">
                 Cinematic <br/> <span className="text-[#E8E0D5]/30">Motion.</span>
               </h3>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 35 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.6, delay: 0.15, ease: cinematicEase }}
               className="max-w-sm lg:pb-2"
             >
               <p className="text-[#E8E0D5]/50 font-inter-tight font-light leading-relaxed text-sm tracking-wide">
                 Premium drone videography and motion design. We blend the raw, behind-the-scenes process with finalized atmospheric storytelling to build absolute trust.
               </p>
             </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: cinematicEase }}
            className="w-full md:pl-[10vw]"
          >
             <CinematicCarousel items={[
               { src: "/ATMOSPHERIC SCOTLAND IMAGES/Balmoral Hotel.jpg", label: "Balmoral Hotel Landmark Perspective", category: "Drone Videography", link: "/portfolio" },
               { src: "/ATMOSPHERIC SCOTLAND IMAGES/Howies Edinburgh.jpg", label: "Howies Edinburgh Interior Atmosphere", category: "Interior Design", link: "/portfolio" },
               { src: "/ATMOSPHERIC SCOTLAND IMAGES/saughton park.jpeg", label: "Saughton Park Botanical Detail", category: "Landscape Documentaries", link: "/portfolio" },
             ]} />
          </motion.div>
        </div>
      </section>

      {/* 4. ASYMMETRICAL STORY 2: DIGITAL PLATFORMS (HORIZONTAL CAROUSEL) */}
      <section className="py-36 px-6 bg-[#0f0e0c] overflow-hidden border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between max-w-7xl mx-auto mb-20 gap-10">
             <motion.div 
               initial={{ opacity: 0, y: 35 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.6, ease: cinematicEase }}
               className="max-w-2xl"
             >
               <p className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.3em] text-[9px] font-bold mb-6 flex items-center gap-4">
                 <span className="w-8 h-[1px] bg-[#D9A05B]/30" /> Execution
               </p>
               <h3 className="text-5xl md:text-7xl font-bebas text-[#E8E0D5] leading-[0.95]">
                 Digital <br/> <span className="text-[#E8E0D5]/30">Platforms.</span>
               </h3>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 35 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.6, delay: 0.15, ease: cinematicEase }}
               className="max-w-sm lg:pb-2"
             >
               <p className="text-[#E8E0D5]/50 font-inter-tight font-light leading-relaxed text-sm tracking-wide">
                 We design high-performance websites that function as digital gallery spaces. Clean, fast, and built to transform visibility into high-value relationships.
               </p>
             </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: cinematicEase }}
            className="w-full md:pl-[10vw]"
          >
             <DigitalPlatformsCarousel items={[
               { src: "/BEST FINAL CLIENT WORK/seamus rebrand.jpg", label: "Séamus Corry Editorial Brand Identity", category: "Branding Visuals", link: "/portfolio/seamus-corry" },
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
        
        <div className="relative z-10 text-center px-6">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.8, delay: 0.3, ease: cinematicEase }}
             className="text-4xl md:text-5xl lg:text-6xl font-bebas text-white tracking-wide leading-[1.1]"
           >
             "WE DON'T JUST CREATE CONTENT.<br/>
             <span className="text-[#E8E0D5]/35 drop-shadow-2xl">WE BUILD AUTHORITY.</span>"
           </motion.h2>
        </div>
      </section>

      {/* 6. THE OPERATOR - AUTHENTIC, RESTRAINED */}
      <section className="py-48 px-6 bg-[#0f0e0c] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
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
                className="object-cover opacity-80 filter grayscale-[25%] contrast-[1.1] object-top group-hover:scale-[1.01] transition-transform duration-[2.5s] ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/10 to-transparent opacity-90" />
              
              <div className="absolute bottom-10 left-10">
                <p className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.4em] text-[8px] font-bold mb-2 opacity-80">The Operator</p>
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
            <h3 className="text-5xl md:text-7xl font-bebas text-[#E8E0D5] leading-[0.95]">
              Years of <br/> <span className="text-[#E8E0D5]/30">Experience.</span>
            </h3>
            
            <div className="space-y-8 text-[#E8E0D5]/50 font-inter-tight font-light text-base md:text-lg leading-relaxed max-w-sm tracking-wide">
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
                className="inline-flex items-center gap-6 text-[10px] font-inter-tight font-bold tracking-[0.3em] uppercase text-[#E8E0D5]/80 hover:text-[#D9A05B] transition-colors group"
              >
                <span className="w-12 h-[1px] bg-[#E8E0D5]/20 group-hover:bg-[#D9A05B] transition-colors" />
                Read The Background 
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6.3 CLIENT TESTIMONIALS - HIGH-END EDITORIAL PROOF */}
      <section className="py-36 px-6 bg-[#0f0e0c] border-t border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,160,91,0.02)_0%,transparent_80%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-10">
             <motion.div 
               initial={{ opacity: 0, y: 35 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.6, ease: cinematicEase }}
               className="max-w-2xl"
             >
               <p className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.3em] text-[9px] font-bold mb-6 flex items-center gap-4">
                 <span className="w-8 h-[1px] bg-[#D9A05B]/30" /> Client Proof
               </p>
               <h3 className="text-5xl md:text-7xl font-bebas text-[#E8E0D5] leading-[0.95]">
                 Trusted <br/> <span className="text-[#E8E0D5]/30">Relationships.</span>
               </h3>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 35 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.6, delay: 0.15, ease: cinematicEase }}
               className="max-w-sm lg:pb-2"
             >
               <p className="text-[#E8E0D5]/50 font-inter-tight font-light leading-relaxed text-sm tracking-wide">
                 Real outcomes for ambitious Scottish businesses. We don't deal in vanity metrics—we document real growth and construct high-performance digital platforms.
               </p>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {/* Gary Young */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.6, delay: 0.1, ease: cinematicEase }}
               className="bg-[#12110f] border border-white/5 p-10 flex flex-col justify-between group hover:border-[#D9A05B]/30 transition-all duration-700"
             >
               <div className="space-y-6">
                 <div className="flex gap-1">
                   {[...Array(5)].map((_, i) => (
                     <span key={i} className="text-[#D9A05B] text-xs">★</span>
                   ))}
                 </div>
                 <p className="text-[#E8E0D5]/70 font-inter-tight font-light text-sm leading-relaxed tracking-wide italic">
                   "Garry stripped away all the usual agency nonsense. Our new site is fast, looks exactly how we wanted, and we started getting quote requests within the first week."
                 </p>
               </div>
               <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-4">
                 <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-900 border border-white/10">
                   <Image src="/testimonials/gary.png" fill alt="Gary Young" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                 </div>
                 <div>
                   <h4 className="text-xs font-inter-tight font-bold uppercase tracking-wider text-[#E8E0D5]">Gary Young</h4>
                   <p className="text-[10px] font-inter-tight uppercase tracking-widest text-[#D9A05B] mt-0.5">K Lewis Joinery</p>
                 </div>
               </div>
             </motion.div>

             {/* Seamus Corry */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.6, delay: 0.2, ease: cinematicEase }}
               className="bg-[#12110f] border border-white/5 p-10 flex flex-col justify-between group hover:border-[#D9A05B]/30 transition-all duration-700"
             >
               <div className="space-y-6">
                 <div className="flex gap-1">
                   {[...Array(5)].map((_, i) => (
                     <span key={i} className="text-[#D9A05B] text-xs">★</span>
                   ))}
                 </div>
                 <p className="text-[#E8E0D5]/70 font-inter-tight font-light text-sm leading-relaxed tracking-wide italic">
                   "The ecommerce site looks stunning and the social media growth has been mental. We've seen a massive jump in online orders since Garry took over our content."
                 </p>
               </div>
               <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-4">
                 <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-900 border border-white/10">
                   <Image src="/testimonials/seamus.png" fill alt="Seamus Corry" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                 </div>
                 <div>
                   <h4 className="text-xs font-inter-tight font-bold uppercase tracking-wider text-[#E8E0D5]">Seamus Corry</h4>
                   <p className="text-[10px] font-inter-tight uppercase tracking-widest text-[#D9A05B] mt-0.5">Herb & Soul</p>
                 </div>
               </div>
             </motion.div>

             {/* Stephen Johnstone */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.6, delay: 0.3, ease: cinematicEase }}
               className="bg-[#12110f] border border-white/5 p-10 flex flex-col justify-between group hover:border-[#D9A05B]/30 transition-all duration-700"
             >
               <div className="space-y-6">
                 <div className="flex gap-1">
                   {[...Array(5)].map((_, i) => (
                     <span key={i} className="text-[#D9A05B] text-xs">★</span>
                   ))}
                 </div>
                 <p className="text-[#E8E0D5]/70 font-inter-tight font-light text-sm leading-relaxed tracking-wide italic">
                   "Our old site was impossible to update. The new website is clean, easy for pet owners to navigate, and the whole process was completely painless. Highly recommend Garry."
                 </p>
               </div>
               <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-4">
                 <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-900 border border-white/10">
                   <Image src="/testimonials/stephen.png" fill alt="Stephen Johnstone" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                 </div>
                 <div>
                   <h4 className="text-xs font-inter-tight font-bold uppercase tracking-wider text-[#E8E0D5]">Stephen Johnstone</h4>
                   <p className="text-[10px] font-inter-tight uppercase tracking-widest text-[#D9A05B] mt-0.5">Almond Vet Care</p>
                 </div>
               </div>
             </motion.div>
          </div>

          <div className="text-center mt-20">
             <Link
               href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review" 
               target="_blank"
               className="relative px-10 py-5 bg-transparent border border-[#E8E0D5]/15 text-[#E8E0D5] font-inter-tight uppercase tracking-[0.25em] text-[9px] font-bold rounded-sm overflow-hidden group/btn hover:border-[#D9A05B] transition-colors duration-500 inline-block"
             >
               <div className="absolute inset-0 bg-[#D9A05B] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
               <span className="relative z-10 group-hover/btn:text-[#0f0e0c] transition-colors duration-500">
                 View More Google Reviews
               </span>
             </Link>
          </div>
        </div>
      </section>

      {/* 6.5 TEAM BEAR MEDIA - PLAYFUL, HUMAN, PREMIUM */}
      <section className="py-36 px-6 bg-[#0f0e0c] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <motion.p 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: cinematicEase }}
               className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.3em] text-[9px] font-bold mb-4"
             >
               The real crew behind the scenes.
             </motion.p>
             <motion.h3 
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.4, ease: cinematicEase }}
               className="text-5xl md:text-7xl font-bebas text-[#E8E0D5] tracking-wide"
             >
               TEAM BEAR MEDIA
             </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
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
                  src="/team/garry.may26.JPG" 
                  alt="Garry Lynch" 
                  fill 
                  className="object-cover opacity-85 filter grayscale-[20%] contrast-[1.05] group-hover:scale-102 group-hover:opacity-95 transition-all duration-[2.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-transparent to-transparent opacity-85" />
              </div>
              <h4 className="text-2xl font-bebas text-[#E8E0D5] tracking-wide mb-1">Garry Lynch</h4>
              <p className="text-[#D9A05B] font-inter-tight uppercase tracking-wider text-[9px] font-bold">
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
                  className="object-cover opacity-85 filter grayscale-[20%] contrast-[1.05] group-hover:scale-102 group-hover:opacity-95 transition-all duration-[2.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-transparent to-transparent opacity-85" />
              </div>
              <h4 className="text-2xl font-bebas text-[#E8E0D5] tracking-wide mb-1">Lola</h4>
              <p className="text-[#D9A05B] font-inter-tight uppercase tracking-wider text-[9px] font-bold">
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
                  className="object-cover opacity-85 filter grayscale-[20%] contrast-[1.05] group-hover:scale-102 group-hover:opacity-95 transition-all duration-[2.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-transparent to-transparent opacity-85" />
              </div>
              <h4 className="text-2xl font-bebas text-[#E8E0D5] tracking-wide mb-1">Rory</h4>
              <p className="text-[#D9A05B] font-inter-tight uppercase tracking-wider text-[9px] font-bold">
                Quality Control / Barketing Executive
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA - SLOW FADE WITH RESTRAINED ACCENT */}
      <section className="py-64 px-6 bg-[#0f0e0c] relative overflow-hidden flex items-center justify-center group border-t border-white/5">
        <div className="absolute inset-0 bg-[#0a0908]">
          <Image 
            src="/BEST FINAL CLIENT WORK/WE’RE HIRING.png" 
            alt="Narrative Final Work" 
            fill 
            className="object-cover opacity-[0.05] filter grayscale contrast-[1.3] group-hover:scale-[1.03] transition-transform duration-[8s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/50 to-[#0f0e0c]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="text-[#D9A05B] font-inter-tight uppercase tracking-[0.4em] text-[9px] font-bold mb-12"
          >
            Start The Process
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
            className="text-7xl md:text-[9rem] font-bebas text-[#E8E0D5] mb-20 leading-[0.8]"
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
              className="relative px-12 py-6 bg-transparent border border-[#E8E0D5]/15 text-[#E8E0D5] font-inter-tight uppercase tracking-[0.25em] text-[9px] font-bold rounded-sm overflow-hidden group/btn hover:border-[#D9A05B] transition-colors duration-500 inline-block"
            >
              <div className="absolute inset-0 bg-[#D9A05B] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover/btn:text-[#0f0e0c] transition-colors duration-500">Contact Bear Media</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
