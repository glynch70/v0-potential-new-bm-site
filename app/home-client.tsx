'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown, Play } from 'lucide-react'
import VideoLinkCard from '@/components/VideoLinkCard'

const cinematicEase = [0.16, 1, 0.3, 1]

const sectionReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: cinematicEase },
  },
}

function SectionSeparator() {
  return (
    <div className="w-full flex justify-center py-16 md:py-32">
      <div className="w-px h-32 bg-white/10"></div>
    </div>
  )
}

function ImmersiveProjectCard({ image, title, category }: { image: string; title: string; category: string }) {
  return (
    <div className="group relative w-full h-[60vh] md:h-[85vh] overflow-hidden bg-[#050505]">
      <Image
        src={image}
        alt={title}
        fill
        loading="lazy"
        className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03] grayscale-[30%] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-1000" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
      
      <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionReveal}>
          <p className="font-bebas text-[3rem] md:text-[6rem] uppercase leading-[0.85] tracking-[0.02em] text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
            {title}
          </p>
          <div className="mt-4 md:mt-6 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            <span className="h-px w-8 md:w-12 bg-[#D4A830]"></span>
            <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#D4A830]">
              {category}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function HomeContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <div ref={containerRef}>
      <Navbar />
      <main className="min-h-screen bg-[#050505] text-[#F0F0F0] selection:bg-[#D4A830] selection:text-[#0A0A0A] overflow-x-hidden">
        
        {/* 1. VISUALLY POWERFUL HERO (Creator + Drone + BTS Collage) */}
        <section className="relative h-[100vh] md:h-[120vh] w-full flex flex-col items-center justify-center overflow-hidden">
          {/* Collage Background */}
          <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-3 h-full">
            <div className="relative h-full hidden md:block">
               <Image src="/bear-media/PERSONAL BRAND IMAGES/garry on shoot.jpeg" alt="Creator" fill className="object-cover grayscale brightness-75" />
            </div>
            <div className="relative h-full w-full col-span-1 md:col-span-1 border-x border-white/5">
              <video autoPlay muted loop playsInline className="h-full w-full object-cover grayscale-[50%] brightness-75">
                <source src="/media/bear-media-drone-hero.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="relative h-full hidden md:block">
               <Image src="/bear-media/BTS : PROCESS IMAGES/bts.30.jpg" alt="Behind the scenes" fill className="object-cover grayscale brightness-75" />
            </div>
            <div className="absolute inset-0 bg-[#050505]/60" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
          </div>

          <div className="relative z-10 text-center flex flex-col items-center px-4 mt-20">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: cinematicEase }} className="font-bebas text-[18vw] md:text-[14vw] uppercase leading-[0.75] tracking-[-0.02em] text-white">
              BEAR MEDIA
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="mt-8 text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-[#D4A830]">
              Cinematography • Photography • Web
            </motion.p>
          </div>
        </section>

        {/* 2. GARRY LYNCH (Moved Up & Highly Authentic) */}
        <section className="relative py-20 bg-[#050505]">
          <div className="container-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionReveal}>
                <h2 className="font-bebas text-[4rem] md:text-[6rem] uppercase leading-[0.9] text-white mb-10">
                  Built In The Trades.<br />Refined In The Studio.
                </h2>
                <div className="space-y-6 text-lg md:text-2xl font-light leading-relaxed text-white/70 max-w-xl">
                  <p>
                    I'm Garry Lynch. Before picking up a camera, I spent years working in the trades. I know what real businesses look like and what actually drives enquiries.
                  </p>
                  <p className="text-white">
                    I don't sell generic marketing fluff. I create high-end photo, video, and web content that proves exactly how good you are at what you do.
                  </p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: cinematicEase }} className="relative aspect-[4/5] w-full max-w-lg mx-auto">
                <Image src="/bear-media/PERSONAL BRAND IMAGES/bts_garry.jpg" alt="Garry Lynch BTS" fill className="object-cover grayscale-[20%]" />
                <div className="absolute -bottom-10 -left-6 md:-left-12 w-48 md:w-64 border border-white/10 shadow-2xl">
                   <Image src="/bear-media/PERSONAL BRAND IMAGES/owner garry lynch.jpeg" alt="Garry Lynch portrait" width={400} height={400} className="object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. DEDICATED STATISTICS */}
        <section className="py-24 border-y border-white/5 bg-[#0A0A0A]">
          <div className="container-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} transition={{ delay: 0 }}>
                <p className="font-bebas text-[5rem] md:text-[7rem] text-[#D4A830] leading-none">20+</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-white/50">Years Experience</p>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} transition={{ delay: 0.1 }}>
                <p className="font-bebas text-[5rem] md:text-[7rem] text-white leading-none">150+</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-white/50">Projects Delivered</p>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} transition={{ delay: 0.2 }}>
                <p className="font-bebas text-[5rem] md:text-[7rem] text-white leading-none">5.0</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-white/50">Star Reputation</p>
              </motion.div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* 4. IMMERSIVE FEATURED PROJECTS (Expanded) */}
        <section className="bg-[#050505]">
          <div className="container-full px-0 md:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionReveal} className="px-6 md:px-0 mb-16 text-center md:text-left">
              <h2 className="font-bebas text-[5rem] md:text-[8rem] uppercase leading-[0.85] text-white">
                The Work.
              </h2>
            </motion.div>

            <div className="flex flex-col gap-8 md:gap-16">
              <ImmersiveProjectCard 
                image="/projects/:cg-developments/C&G Work In Progress-Cover.jpg" 
                title="C&G Developments" 
                category="Construction Documentary & Film" 
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <ImmersiveProjectCard 
                  image="/projects/:simply-sheds/SIMPLY SHEDS.open sat & sun-Cover.jpg" 
                  title="Simply Sheds" 
                  category="Product Promotion" 
                />
                <ImmersiveProjectCard 
                  image="/projects/:procoat/procoat before after.png" 
                  title="Procoat Coatings" 
                  category="Social Campaign" 
                />
              </div>

              {/* Interspersed Reel */}
              <div className="w-full flex justify-center py-12 px-4">
                <div className="w-full max-w-xl">
                  <VideoLinkCard href="https://www.instagram.com/reel/DWY1JhpCtAZ/" image="/projects/:cg-developments/C&G Quality Builds.reel.cover.png" title="C&G Site Showcase" category="Instagram Reel" aspect="aspect-[4/5]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <ImmersiveProjectCard 
                  image="/websites/Almond Vet Care Website.jpg" 
                  title="Almond Vet Care" 
                  category="Web Design & Branding" 
                />
                <ImmersiveProjectCard 
                  image="/projects/:colin-canines/colin advert.jpg" 
                  title="Colin's Canines" 
                  category="Photography & Content" 
                />
              </div>

              <ImmersiveProjectCard 
                image="/projects/:seamus-corry/seamus rebrand.jpg" 
                title="Seamus Corry" 
                category="Personal Branding" 
              />
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* 5. VISUAL SERVICE BLOCKS */}
        <section className="py-24 bg-[#0A0A0A]">
          <div className="container-full">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} className="text-center mb-32">
              <h2 className="font-bebas text-[4rem] md:text-[6rem] uppercase leading-none text-white">Capabilities</h2>
            </motion.div>

            <div className="flex flex-col gap-32">
              {/* Photography Block */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="relative aspect-[16/10] lg:aspect-[4/5] w-full order-2 lg:order-1">
                  <Image src="/bear-media/BTS : PROCESS IMAGES/bts.30.jpg" alt="Photography" fill className="object-cover" />
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} className="order-1 lg:order-2">
                  <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#D4A830] mb-6">01</p>
                  <h3 className="font-bebas text-[4rem] md:text-[6rem] text-white leading-[0.85]">Photography</h3>
                  <p className="mt-8 text-xl font-light leading-relaxed text-white/60 max-w-md">
                    High-end commercial, property, and personal brand photography that communicates quality instantly. No stock imagery, just real proof of work.
                  </p>
                </motion.div>
              </div>

              {/* Filmmaking Block */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} className="order-1 lg:order-1 lg:text-right flex flex-col lg:items-end">
                  <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#D4A830] mb-6">02</p>
                  <h3 className="font-bebas text-[4rem] md:text-[6rem] text-white leading-[0.85]">Filmmaking</h3>
                  <p className="mt-8 text-xl font-light leading-relaxed text-white/60 max-w-md">
                    Cinematic promo videos, drone aerials, and documentary-style testimonials that tell your story and build absolute trust with your audience.
                  </p>
                  <div className="mt-12 w-full max-w-sm">
                    <VideoLinkCard href="https://www.instagram.com/reel/DZm458Wklyo/" image="/projects/:simply-sheds/simply sheds 7x5-Cover.jpg" title="Shed Installation" category="Time-lapse Video" aspect="aspect-video" />
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="relative aspect-[16/10] lg:aspect-[4/5] w-full order-2 lg:order-2">
                  <Image src="/bear-media/BTS : PROCESS IMAGES/Harley Biker Drone Shoot.jpg" alt="Drone Filmmaking" fill className="object-cover" />
                </motion.div>
              </div>
              
              {/* Digital Block */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="relative aspect-[16/10] lg:aspect-[4/5] w-full order-2 lg:order-1">
                  <Image src="/bear-media/BTS : PROCESS IMAGES/bts_studio.jpg" alt="Web Design" fill className="object-cover" />
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} className="order-1 lg:order-2">
                  <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#D4A830] mb-6">03</p>
                  <h3 className="font-bebas text-[4rem] md:text-[6rem] text-white leading-[0.85]">Digital & Web</h3>
                  <p className="mt-8 text-xl font-light leading-relaxed text-white/60 max-w-md">
                    Brutalist, conversion-focused websites and social media content strategies that turn attention into direct enquiries.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* 6. DEDICATED VISUAL TESTIMONIALS */}
        <section className="py-24 bg-[#050505] overflow-hidden">
          <div className="container-full">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} className="text-center mb-24">
              <h2 className="font-bebas text-[4rem] md:text-[6rem] uppercase leading-none text-white">The Reputation</h2>
            </motion.div>
            
            {/* Visual Testimonial Gallery */}
            <div className="flex flex-nowrap overflow-x-auto gap-8 pb-12 snap-x hide-scrollbar">
              {[
                "/bear-media/testimonials/Kris.png",
                "/bear-media/testimonials/seamus.png",
                "/bear-media/testimonials/gary young.png",
                "/bear-media/testimonials/stephen johnstone.png",
                "/bear-media/testimonials/Leanne murphy.png",
                "/bear-media/testimonials/steven summone.png"
              ].map((src, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }} className="relative flex-none w-[85vw] md:w-[400px] aspect-square snap-center rounded-sm overflow-hidden border border-white/10">
                  <Image src={src} alt={`Client testimonial ${i+1}`} fill className="object-contain bg-[#111111] p-4" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. IMMERSIVE CTA */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <Image src="/bear-media/BTS : PROCESS IMAGES/event photography.jpg" alt="Background" fill className="object-cover grayscale" />
             <div className="absolute inset-0 bg-[#0A0A0A]/90 mix-blend-multiply" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
          </div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: cinematicEase }} className="relative z-10 text-center px-4">
            <h2 className="font-bebas text-[12vw] md:text-[10vw] uppercase leading-none text-white tracking-[-0.02em]">
              LET'S CREATE.
            </h2>
            <div className="mt-16">
              <Link href="/contact" className="inline-flex min-h-[80px] items-center justify-center border border-[#D4A830] bg-[#D4A830]/10 backdrop-blur-md px-12 py-6 text-xl font-bebas uppercase tracking-widest text-[#D4A830] transition-all hover:bg-[#D4A830] hover:text-black hover:scale-105 duration-500">
                Book A Discovery Call
              </Link>
            </div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
