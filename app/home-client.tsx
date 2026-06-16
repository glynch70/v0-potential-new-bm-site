'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ASSETS } from '@/lib/assets'
import { ArrowDown, Quote } from 'lucide-react'
import VideoLinkCard from '@/components/VideoLinkCard'

const cinematicEase = [0.16, 1, 0.3, 1]

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: cinematicEase },
  },
}

function SectionSeparator() {
  return (
    <div className="w-full flex justify-center py-24 md:py-32">
      <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#D4A830]/50 to-transparent"></div>
    </div>
  )
}

function MassiveProjectCard({ image, title, category, align = "left" }: { image: string; title: string; category: string; align?: "left" | "right" }) {
  return (
    <div className="group relative w-full h-[70vh] md:h-[90vh] overflow-hidden mb-16 md:mb-32">
      <Image
        src={image}
        alt={title}
        fill
        loading="lazy"
        className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03] grayscale-[30%] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
      
      <div className={`absolute bottom-0 ${align === 'left' ? 'left-0' : 'right-0 text-right'} p-8 md:p-16 w-full md:w-2/3`}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal}>
          <p className="font-bebas text-[3.5rem] md:text-[6rem] uppercase leading-[0.85] tracking-[0.02em] text-white">
            {title}
          </p>
          <div className={`mt-6 flex items-center gap-4 ${align === 'right' ? 'justify-end' : ''}`}>
            <span className="h-px w-12 bg-[#D4A830]"></span>
            <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-[#D4A830]">
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
      <main className="min-h-screen bg-[#050505] text-[#F0F0F0] selection:bg-[#D4A830] selection:text-[#0A0A0A]">
        
        {/* 1. ULTRA CINEMATIC HERO */}
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop playsInline poster={ASSETS.hero.poster} className="h-full w-full object-cover">
              <source src={ASSETS.hero.videoPrimary} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#050505]/40" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] to-transparent" />
          </div>

          <div className="relative z-10 text-center flex flex-col items-center px-4">
            <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="mb-8 text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-[#D4A830]">
              Film • Photography • Social
            </motion.p>
            <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: cinematicEase }} className="font-bebas text-[18vw] md:text-[14vw] uppercase leading-[0.75] tracking-[-0.02em] text-white">
              BEAR MEDIA
            </motion.h1>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-12 z-10 flex flex-col items-center gap-4 text-white/50">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </section>

        {/* 2. GARRY LYNCH (MOVED UP + AUTHENTIC) */}
        <section className="relative py-24 md:py-40 bg-[#050505]">
          <div className="container-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} className="lg:col-span-5 order-2 lg:order-1">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#D4A830] mb-8">
                  The Creator
                </p>
                <h2 className="font-bebas text-[3.5rem] md:text-[5rem] uppercase leading-[0.9] text-white mb-10">
                  Hi, I'm Garry.
                </h2>
                <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-white/70">
                  <p>
                    I spent years working in the trades before picking up a camera. I know what real businesses look like, how they operate, and what actually makes the phone ring.
                  </p>
                  <p>
                    Bear Media isn't a bloated marketing agency. It's a creative studio. When you work with me, you deal directly with me. No account managers. No fluff. 
                  </p>
                  <p className="text-white">
                    Just high-end photography, drone work, and video that shows people exactly how good you are at what you do.
                  </p>
                </div>
                
                <div className="mt-16 flex gap-12 border-t border-white/10 pt-10">
                  <div>
                    <p className="font-bebas text-5xl text-[#D4A830]">20+</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/50 mt-2">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-bebas text-5xl text-white">150+</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/50 mt-2">Projects</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: cinematicEase }} className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/5] md:aspect-square w-full">
                  <Image src="/bear-media/PERSONAL BRAND IMAGES/garry on shoot.jpeg" alt="Garry Lynch" fill className="object-cover grayscale-[20%]" />
                  <div className="absolute -bottom-8 -left-8 w-64 md:w-80 shadow-2xl">
                     <VideoLinkCard href="https://www.instagram.com/reel/DZnTo4jgHBP/" image="/bear-media/PERSONAL BRAND IMAGES/bts_garry.jpg" title="Watch The Process" category="Behind The Scenes" aspect="aspect-video" />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* 3. IMMERSIVE FEATURED WORK */}
        <section className="bg-[#050505]">
          <div className="container-full px-0 md:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} className="px-6 md:px-0 mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#D4A830] mb-4">Portfolio</p>
              <h2 className="font-bebas text-[4rem] md:text-[7rem] uppercase leading-[0.85] text-white">
                The Work.
              </h2>
            </motion.div>

            <MassiveProjectCard 
              image="/projects/:cg-developments/C&G Work In Progress-Cover.jpg" 
              title="C&G Developments" 
              category="Construction Documentary" 
              align="left"
            />

            <MassiveProjectCard 
              image="/projects/:simply-sheds/SIMPLY SHEDS.open sat & sun-Cover.jpg" 
              title="Simply Sheds" 
              category="Product Promotion" 
              align="right"
            />

            <MassiveProjectCard 
              image="/projects/:procoat/procoat before after.png" 
              title="Procoat Coatings" 
              category="Social Campaign" 
              align="left"
            />
          </div>
        </section>

        <SectionSeparator />

        {/* 4. EXPERTISE / STUDIO APPROACH (Minimalist) */}
        <section className="py-24 bg-[#0A0A0A]">
          <div className="container-full">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} className="text-center mb-24">
              <h2 className="font-bebas text-[4rem] md:text-[6rem] uppercase leading-none text-white">Capabilities</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {[
                { title: "Photography", img: "/bear-media/BTS : PROCESS IMAGES/bts.30.jpg", desc: "Commercial, brand, and property photography that demands attention." },
                { title: "Filmmaking", img: "/bear-media/BTS : PROCESS IMAGES/event photography.jpg", desc: "High-end promo videos, testimonials, and drone cinematography." },
                { title: "Digital", img: "/bear-media/BTS : PROCESS IMAGES/bts_studio.jpg", desc: "Social media management and brutalist web design." }
              ].map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 1 }} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#050505] mb-8">
                    <Image src={service.img} alt={service.title} fill className="object-cover grayscale transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0" />
                  </div>
                  <h3 className="font-bebas text-4xl text-white tracking-wide">{service.title}</h3>
                  <p className="mt-4 text-white/50 text-sm md:text-base leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* 5. RAW TESTIMONIALS */}
        <section className="py-24">
          <div className="container-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal}>
                <h2 className="font-bebas text-[4rem] md:text-[6rem] uppercase leading-[0.85] text-white max-w-lg">
                  Don't just take my word for it.
                </h2>
              </motion.div>
              
              <div className="space-y-16">
                {[
                  { name: "Kris Lewis", business: "K Lewis Joinery", quote: "Garry understands how local businesses actually work. He didn't just build a website; he helped us clarify our messaging." },
                  { name: "C&G Developments", business: "Construction", quote: "Bear Media completely changed how we look online. The videos are top class and the phone hasn't stopped ringing." }
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 1 }} className="border-l-2 border-[#D4A830] pl-8">
                    <Quote className="h-8 w-8 text-[#D4A830]/50 mb-6" />
                    <p className="text-2xl md:text-3xl font-light leading-snug text-white/90">"{item.quote}"</p>
                    <div className="mt-8">
                      <p className="font-bebas text-xl tracking-widest text-[#D4A830]">{item.name}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">{item.business}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. IMMERSIVE CTA */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <Image src="/projects/:cg-developments/C&G Built The Right Way-Cover.jpg" alt="Background" fill className="object-cover grayscale" />
             <div className="absolute inset-0 bg-[#0A0A0A]/80 mix-blend-multiply" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          </div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: cinematicEase }} className="relative z-10 text-center px-4">
            <p className="text-sm font-bold uppercase tracking-[0.5em] text-[#D4A830] mb-8">Ready?</p>
            <h2 className="font-bebas text-[12vw] md:text-[10vw] uppercase leading-none text-white tracking-[-0.02em]">
              LET'S TALK.
            </h2>
            <div className="mt-16">
              <Link href="/contact" className="inline-flex min-h-[80px] items-center justify-center border border-white/20 bg-white/5 backdrop-blur-md px-12 py-6 text-xl font-bebas uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black hover:scale-105 duration-500">
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
