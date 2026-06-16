'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ASSETS } from '@/lib/assets'
import { ArrowRight, Play, Quote } from 'lucide-react'
import VideoLinkCard from '@/components/VideoLinkCard'

const cinematicEase = [0.16, 1, 0.3, 1]

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: cinematicEase },
  },
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="font-bebas text-[3.5rem] uppercase leading-[0.85] tracking-[0.02em] text-white md:text-[5rem] lg:text-[7rem]">
      {title}
    </h2>
  )
}

function PremiumProjectCard({ image, title, category, className = "" }: { image: string; title: string; category: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden bg-[#0A0A0A] ${className}`}>
      <div className="absolute inset-0 z-10 bg-black/10 transition-colors duration-700 group-hover:bg-transparent" />
      <Image
        src={image}
        alt={title}
        fill
        loading="lazy"
        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05] grayscale-[20%] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="font-bebas text-[2.5rem] md:text-[4rem] uppercase leading-none tracking-[0.02em] text-white transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          {title}
        </p>
        <p className="mt-4 text-sm md:text-base font-medium tracking-[0.2em] uppercase text-[#D4A830] transform translate-y-4 transition-transform duration-700 delay-100 group-hover:translate-y-0">
          {category}
        </p>
      </div>
    </div>
  )
}

export default function HomeContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <div ref={containerRef}>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-[#F0F0F0] selection:bg-[#D4A830] selection:text-[#0A0A0A]">
        
        {/* 1. CINEMATIC HERO */}
        <section className="relative h-screen w-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12">
          {/* Unobscured Background Video */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={ASSETS.hero.poster}
              className="h-full w-full object-cover scale-[1.02]"
            >
              <source src={ASSETS.hero.videoPrimary} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-[1800px] mx-auto flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: cinematicEase, delay: 0.2 }}
              className="font-bebas text-[15vw] lg:text-[12vw] uppercase leading-[0.75] tracking-[-0.02em] text-white"
            >
              BEAR MEDIA
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 md:mt-16 flex items-center gap-6"
            >
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-[#D4A830]">
                Creative Studio
              </span>
              <span className="w-12 h-px bg-white/20"></span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white">
                Scotland
              </span>
            </motion.div>
          </div>
        </section>

        {/* 2. IMMERSIVE SHOWCASE */}
        <section id="work" className="pt-24 pb-32">
          <div className="container-full">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionReveal} className="mb-16 md:mb-24 px-4">
              <SectionHeading title="Selected Work" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              {/* Massive Feature */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionReveal} className="md:col-span-12">
                <PremiumProjectCard 
                  image="/projects/:cg-developments/C&G Work In Progress-Cover.jpg" 
                  title="C&G Developments" 
                  category="Construction Showcase" 
                  className="h-[60vh] md:h-[85vh]"
                />
              </motion.div>

              {/* Video Cards Grid */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionReveal} className="md:col-span-6 flex flex-col justify-end">
                 <VideoLinkCard href="https://www.instagram.com/reel/DWY1JhpCtAZ/" image="/projects/:cg-developments/C&G Quality Builds.reel.cover.png" title="Quality Builds" category="Film" aspect="aspect-square" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionReveal} className="md:col-span-6">
                <PremiumProjectCard 
                  image="/projects/:simply-sheds/SIMPLY SHEDS.open sat & sun-Cover.jpg" 
                  title="Simply Sheds" 
                  category="Product Promotion" 
                  className="h-[50vh] md:h-[70vh]"
                />
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionReveal} className="md:col-span-8">
                <PremiumProjectCard 
                  image="/projects/:procoat/procoat before after.png" 
                  title="Procoat Coatings" 
                  category="Social Campaign" 
                  className="h-[60vh] md:h-[80vh]"
                />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionReveal} className="md:col-span-4 flex flex-col gap-8">
                <VideoLinkCard href="https://www.instagram.com/reel/DZm458Wklyo/" image="/projects/:simply-sheds/simply sheds 7x5-Cover.jpg" title="Shed Installation" category="Time-lapse" aspect="aspect-[4/5]" />
                <PremiumProjectCard 
                  image="/projects/:seamus-corry/seamus rebrand.jpg" 
                  title="Seamus Corry" 
                  category="Branding" 
                  className="h-[40vh]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. EXPERTISE (SERVICES) - MINIMAL */}
        <section className="py-32 bg-[#111111]">
          <div className="container-full">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 px-4">
              <SectionHeading title="Expertise" />
              <Link href="/contact" className="mt-8 md:mt-0 text-sm font-bold uppercase tracking-[0.2em] text-[#D4A830] hover:text-white transition-colors">
                Start a Project →
              </Link>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 px-4">
              {[
                { title: "Photography", img: "/bear-media/BTS : PROCESS IMAGES/bts.30.jpg" },
                { title: "Video & Film", img: "/bear-media/BTS : PROCESS IMAGES/event photography.jpg" },
                { title: "Aerial / Drone", img: "/bear-media/BTS : PROCESS IMAGES/Harley Biker Drone Shoot.jpg" },
                { title: "Web Design", img: "/bear-media/BTS : PROCESS IMAGES/bts_studio.jpg" }
              ].map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 1, ease: cinematicEase }} className="group cursor-default">
                  <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-black/20">
                    <Image src={service.img} alt={service.title} fill className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                  </div>
                  <h3 className="font-bebas text-4xl uppercase tracking-wide text-white">{service.title}</h3>
                  <div className="w-full h-px bg-white/10 mt-6 group-hover:bg-[#D4A830] transition-colors duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PROMINENT PERSONAL BRAND & STATS */}
        <section className="py-0 relative overflow-hidden bg-[#050505]">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            {/* Massive Image Half */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} className="relative h-[60vh] lg:h-auto w-full">
              <Image src="/bear-media/PERSONAL BRAND IMAGES/garry on shoot.jpeg" alt="Garry Lynch" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 lg:hidden" />
            </motion.div>

            {/* Stats & Content Half */}
            <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal}>
                <h2 className="font-bebas text-[4rem] md:text-[6rem] uppercase leading-[0.85] text-white">
                  Garry Lynch.
                </h2>
                <p className="mt-8 text-xl md:text-2xl font-light leading-relaxed text-white/70 max-w-xl">
                  20 years of experience. Built in the trades, refined in the studio. No account managers, just direct, premium creative work that drives real business results.
                </p>
                
                {/* Stats Grid */}
                <div className="mt-16 grid grid-cols-2 gap-y-12 gap-x-8">
                  <div>
                    <p className="font-bebas text-[4rem] md:text-[5rem] text-[#D4A830] leading-none">20+</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-bebas text-[4rem] md:text-[5rem] text-white leading-none">150+</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="font-bebas text-[4rem] md:text-[5rem] text-white leading-none">5.0</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Star Reputation</p>
                  </div>
                  <div className="flex flex-col justify-end pb-2">
                     <VideoLinkCard href="https://www.instagram.com/reel/DZnTo4jgHBP/" image="/bear-media/PERSONAL BRAND IMAGES/bts_garry.jpg" title="The Process" category="Film" aspect="aspect-video" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. MINIMAL TESTIMONIALS */}
        <section className="py-32">
          <div className="container-full px-4">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} className="flex justify-center mb-16">
               <Quote className="h-16 w-16 text-[#D4A830] opacity-30" />
             </motion.div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[
                 { name: "Kris Lewis", quote: "Garry understands how local businesses actually work. He didn't just build a website; he helped us clarify our messaging." },
                 { name: "C&G Developments", quote: "Bear Media completely changed how we look online. The videos are top class and the phone hasn't stopped ringing." },
                 { name: "Almond Vet Care", quote: "The new website is clean, easy for pet owners to navigate, and the whole process was completely painless." }
               ].map((item, i) => (
                 <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 1 }} className="text-center md:text-left">
                   <p className="text-xl md:text-2xl font-light leading-snug text-white/80">"{item.quote}"</p>
                   <p className="mt-8 font-bebas text-2xl tracking-widest text-[#D4A830]">{item.name}</p>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* 6. IMMERSIVE CTA */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <Image src="/projects/:cg-developments/C&G Work In Progress-Cover.jpg" alt="Background" fill className="object-cover grayscale opacity-30" />
             <div className="absolute inset-0 bg-[#D4A830]/90 mix-blend-multiply" />
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: cinematicEase }} className="relative z-10 text-center px-4">
            <h2 className="font-bebas text-[10vw] md:text-[8vw] uppercase leading-none text-white tracking-[-0.02em]">
              LET'S BUILD IT.
            </h2>
            <div className="mt-12">
              <Link href="/contact" className="inline-flex min-h-[80px] items-center justify-center bg-white px-12 py-6 text-xl font-bebas uppercase tracking-widest text-black transition-transform hover:scale-105 duration-500">
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
