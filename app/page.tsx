"use client"
import FloatingSectionNav from "@/components/FloatingSectionNav"
import type React from "react"
import ExpandableFooter from "@/components/ExpandableFooter"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Sun, Moon, Menu, X, Video, Monitor, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

/* --------------------------------
   SERVICE CARD (DESKTOP STACK)
-------------------------------- */

function ServiceCardAnimated({ service, index, scrollYProgress }: any) {
  const icons = [Video, Monitor, Plus]
  const Icon = icons[index]

  const startY = 800

  const y = useTransform(
    scrollYProgress,
    service.isStatic ? [0, 1] : [service.scrollRange[0], service.scrollRange[1]],
    service.isStatic ? [service.stopY, service.stopY] : [startY, service.stopY],
  )

  const scale = useTransform(
    scrollYProgress,
    service.isStatic ? [0, 1] : [service.scrollRange[0], service.scrollRange[1]],
    service.isStatic ? [1, 1] : [1, 1],
  )

  return (
    <motion.div
      className="absolute left-1/2 w-full max-w-4xl"
      style={{
        x: "-50%",
        y,
        scale,
        zIndex: 10 + index,
      }}
      transition={{ type: "ease-out", duration: 1.2 }}
    >
      <div
        className="rounded-[28px] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] min-h-[560px]"
        style={{ backgroundColor: service.bg }}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Icon className={`w-5 h-5 ${service.textColor}`} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-bold ${service.textColor}`}>{service.title}</h3>
            </div>

            <p className={`${service.subtextColor} mb-6 leading-relaxed`}>{service.subtext}</p>

            <ul className="space-y-2">
              {service.bullets.map((b: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <span className={`w-2 h-2 mt-2 rounded-full ${service.bulletDot}`} />
                  <span className={`${service.bulletColor} leading-relaxed`}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center p-5">
            <div className="relative w-[260px] aspect-[3/4] rounded-2xl overflow-hidden">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* --------------------------------
   MOBILE SERVICES — simple flow
-------------------------------- */

function MobileServicesSection() {
  const services = [
    {
      id: 1,
      title: "Social Media Content",
      subtext: "Consistent, on-brand content that builds trust and visibility.",
      bullets: ["Reels & Shorts", "Promo clips", "Monthly packages", "Management"],
      image: "/services-social-media.jpg",
      bg: "#C9A227",
      textColor: "text-black",
      subtextColor: "text-black/70",
      bulletColor: "text-black/80",
      bulletDot: "bg-black",
    },
    {
      id: 2,
      title: "Websites",
      subtext: "Fast, clean websites built to convert visitors.",
      bullets: ["Landing pages", "Business sites", "Hosting"],
      image: "/services-websites.jpg",
      bg: "#1C1C1C",
      textColor: "text-white",
      subtextColor: "text-white/70",
      bulletColor: "text-white/80",
      bulletDot: "bg-[#C9A227]",
    },
    {
      id: 3,
      title: "Extras & Add-ons",
      subtext: "Everything else to support your brand.",
      bullets: ["Drone", "Photography", "SEO", "Google Business"],
      image: "/services-extras.jpg",
      bg: "#2D4A3E",
      textColor: "text-white",
      subtextColor: "text-white/70",
      bulletColor: "text-white/80",
      bulletDot: "bg-[#C9A227]",
    },
  ]

  const icons = [Video, Monitor, Plus]

  return (
    <section id="services" className="relative bg-muted md:hidden py-20 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Services</h2>
        <p className="text-muted-foreground mt-2 text-base leading-[1.7]">
          Clear, practical services that get results.
        </p>
      </div>

      <div className="flex flex-col gap-5 max-w-md mx-auto">
        {services.map((s, i) => {
          const Icon = icons[i]
          return (
            <div key={s.id}>
              <div
                className="rounded-[28px] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                style={{ backgroundColor: s.bg }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${s.textColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${s.textColor}`}>{s.title}</h3>
                </div>

                <p className={`${s.subtextColor} mb-3 text-base leading-[1.7]`}>{s.subtext}</p>

                <ul className="space-y-1.5 mb-4">
                  {s.bullets.map((b: string, idx: number) => (
                    <li key={idx} className="flex gap-2">
                      <span className={`w-1.5 h-1.5 mt-1.5 rounded-full flex-shrink-0 ${s.bulletDot}`} />
                      <span className={`text-base ${s.bulletColor} leading-[1.7]`}>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center p-5">
                  <div className="relative w-full max-w-[200px] aspect-[3/4] rounded-xl overflow-hidden bg-white/5">
                    <Image src={s.image || "/placeholder.svg"} alt={s.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* --------------------------------
   PINNED SERVICES WRAPPER
-------------------------------- */

function PinnedServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const services = [
    {
      id: 1,
      title: "Social Media Content",
      subtext: "Consistent, on-brand content that builds trust and visibility.",
      bullets: ["Reels & Shorts", "Promo clips", "Monthly packages", "Management"],
      bg: "#C9A227",
      textColor: "text-black",
      subtextColor: "text-black/70",
      bulletColor: "text-black/80",
      bulletDot: "bg-black",
      image: "/services-social-media.jpg",
      stopY: 0,
      scrollRange: [0, 0],
      isStatic: true,
    },
    {
      id: 2,
      title: "Websites",
      subtext: "Fast, clean websites built to convert visitors.",
      bullets: ["Landing pages", "Business sites", "Hosting"],
      bg: "#1C1C1C",
      textColor: "text-white",
      subtextColor: "text-white/70",
      bulletColor: "text-white/80",
      bulletDot: "bg-[#C9A227]",
      image: "/services-websites.jpg",
      stopY: 90,
      scrollRange: [0.25, 0.65],
    },
    {
      id: 3,
      title: "Extras & Add-ons",
      subtext: "Everything else to support your brand.",
      bullets: ["Drone", "Photography", "SEO", "Google Business"],
      bg: "#2D4A3E",
      textColor: "text-white",
      subtextColor: "text-white/70",
      bulletColor: "text-white/80",
      bulletDot: "bg-[#C9A227]",
      image: "/services-extras.jpg",
      stopY: 180,
      scrollRange: [0.55, 0.95],
    },
  ]

  return (
    <section
      ref={containerRef}
      id="services-desktop"
      className="relative bg-muted hidden md:block"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pt-10 pb-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold">Services</h2>
          <p className="text-muted-foreground mt-3 leading-[1.7]">Clear, practical services that get results.</p>
        </div>

        <div className="relative h-[calc(100vh-160px)]">
          <div className="relative max-w-4xl mx-auto h-full">
            {services.map((s, i) => (
              <ServiceCardAnimated key={s.id} service={s} index={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* --------------------------------
   MAIN PAGE
-------------------------------- */

export default function BearMediaWebsite() {
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [currentSection, setCurrentSection] = useState("Services")
  const [websiteIndex, setWebsiteIndex] = useState(0)
  const [socialModalOpen, setSocialModalOpen] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => setIsScrolled(window.scrollY > 50))

    const handleScroll = () => {
      const sections = ["services", "work", "reviews", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const bottom = top + element.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            setCurrentSection(section.charAt(0).toUpperCase() + section.slice(1))
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: id === "home" ? 0 : elementPosition - offset,
        behavior: "smooth",
      })
    }
    setMenuOpen(false)
  }

  return (
    <div className={dark ? "dark" : ""}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold">
              <span className={isScrolled ? "text-foreground" : "text-white"}>Bear</span>
              <span className="text-[#C9A227]">Media</span>
            </div>
            <div
              className={`text-[10px] md:text-xs leading-tight ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}
            >
              <span className="block md:inline">Websites &</span>
              <span className="block md:inline md:before:content-['_']">Social Media Content</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white hover:text-white/80"}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white hover:text-white/80"}`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white hover:text-white/80"}`}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white hover:text-white/80"}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white hover:text-white/80"}`}
            >
              Contact
            </button>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isScrolled ? "hover:bg-muted" : "hover:bg-white/10"} ${isScrolled ? "" : "text-white"}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isScrolled ? "hover:bg-muted" : "hover:bg-white/10"} ${isScrolled ? "" : "text-white"}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-full transition-colors ${isScrolled ? "hover:bg-muted" : "hover:bg-white/10"} ${isScrolled ? "" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="flex flex-col py-4">
              <button
                onClick={() => scrollToSection("home")}
                className="px-6 py-3 text-left text-sm hover:bg-muted transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-6 py-3 text-left text-sm hover:bg-muted transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="px-6 py-3 text-left text-sm hover:bg-muted transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-6 py-3 text-left text-sm hover:bg-muted transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 text-left text-sm hover:bg-muted transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      <button
        onClick={() => scrollToSection(currentSection.toLowerCase())}
        className="fixed top-24 right-6 z-40 bg-card/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-border hover:scale-105 active:scale-95 transition-transform cursor-pointer"
      >
        <p className="text-xs font-medium text-foreground">{currentSection}</p>
      </button>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NUHERO%284%29-2MDVgIK7cLO5QXnYNLyVp4lUGGTy7t.mp4"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-6 py-[60px]"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Websites and
            <br />
            Social Media Content
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-xl mx-auto tracking-wide leading-relaxed">
            Helping businesses get seen, trusted, and contacted.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button className="bg-[#C9A227] hover:bg-[#B89120] text-black rounded-full px-8 py-6 font-semibold shadow-[0_4px_20px_rgba(201,162,39,0.3)]">
              Book a call
            </Button>
            <Button className="rounded-full px-8 py-6 bg-white text-black hover:bg-white/90 font-semibold shadow-[0_4px_20px_rgba(255,255,255,0.2)]">
              Portfolio
            </Button>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <PinnedServicesSection />
        <MobileServicesSection />
      </section>

      {/* WORK */}
      <AnimatedSection id="work" className="py-20 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Work</h2>
            <p className="text-muted-foreground mb-4 text-lg leading-[1.7]">
              Portfolio examples across social, web, and design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Social Media Content - Mobile Phone with Modal */}
            <motion.div
              initial={{ opacity: 1, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] bg-card flex flex-col min-h-[580px] md:hover:-translate-y-2 md:hover:shadow-2xl transition-all duration-300"
            >
              <a
                href="https://www.youtube.com/@bearmedia70"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-[406px] bg-muted flex items-center justify-center group cursor-pointer min-h-[44px]"
              >
                <img src="/mobilephone.png" alt="Social Media Content" className="h-full w-auto object-cover" />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-24 h-24 md:w-20 md:h-20 rounded-full bg-[#C9A227] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <svg className="w-10 h-10 md:w-8 md:h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold mb-1 text-foreground text-lg">Social Media Content</h3>
                  <p className="text-base text-muted-foreground leading-[1.7]">
                    Scroll-stopping video and graphics for social feeds.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Business Websites - Carousel */}
            <motion.div
              initial={{ opacity: 1, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] bg-card flex flex-col min-h-[580px] md:hover:-translate-y-2 md:hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full h-[406px] bg-muted overflow-hidden">
                <img
                  src={["/website-1.png", "/website-2.png", "/website-3.png"][websiteIndex] || "/placeholder.svg"}
                  alt="Business Website"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setWebsiteIndex((websiteIndex - 1 + 3) % 3)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors z-10 shadow-lg"
                  aria-label="Previous website"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setWebsiteIndex((websiteIndex + 1) % 3)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors z-10 shadow-lg"
                  aria-label="Next website"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-5 z-10">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      onClick={() => setWebsiteIndex(i)}
                      className={`h-3 w-3 rounded-full transition-all shadow-md ${
                        i === websiteIndex ? "bg-[#C9A227] scale-125" : "bg-white/50"
                      }`}
                      aria-label={`View website ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold mb-1 text-foreground text-lg">Business Websites</h3>
                  <p className="text-base text-muted-foreground leading-[1.7]">
                    Clean, fast websites built to convert.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Brand Assets - Static Poster */}
            <motion.div
              initial={{ opacity: 1, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] bg-card flex flex-col min-h-[580px] md:hover:-translate-y-2 md:hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-full h-[406px] bg-muted overflow-hidden flex items-center justify-center">
                <img src="/branding.png" alt="Brand Assets" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold mb-1 text-foreground text-lg">Brand Assets</h3>
                  <p className="text-base text-muted-foreground leading-[1.7]">
                    Logos, graphics and visual identity systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* REVIEWS */}
      <AnimatedSection id="reviews" className="py-20 md:py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">What clients say</h2>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block max-w-3xl mx-auto"
          >
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:hover:-translate-y-1 md:hover:shadow-xl transition-all duration-300">
              <p className="text-base text-[#C9A227] font-medium mb-6">★★★★★ 5.0 from 18 Google reviews</p>
              <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-[1.7]">
                "Garry created a simple, powerful website that sells our Manager Training Programme and clearly sets us
                apart. Delivered within days, with zero fuss. Exactly what we needed."
              </blockquote>
              <div className="text-base font-medium text-muted-foreground">
                <p>Managing What Matters</p>
                <p className="text-sm mt-1">Leadership & Management Training</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden max-w-3xl mx-auto"
          >
            <div className="bg-card p-6 rounded-2xl shadow-xl">
              <p className="text-base text-[#C9A227] font-medium mb-4">★★★★★ 5.0 from 18 Google reviews</p>
              <blockquote className="text-base text-foreground mb-4 leading-[1.7]">
                "Garry created a simple, powerful website that sells our Manager Training Programme and clearly sets us
                apart. Delivered within days, with zero fuss. Exactly what we needed."
              </blockquote>
              <div className="text-base font-medium text-muted-foreground">
                <p>Managing What Matters</p>
                <p className="text-sm mt-1">Leadership & Management Training</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/gasearch?q=Bear%20Media&source=sh/x/gs/m2/5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors hover:underline min-h-[44px] px-2"
            >
              Read all reviews on Google →
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* ABOUT */}
      <AnimatedSection id="about" className="py-20 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About</h2>
            <p className="text-muted-foreground mb-4 text-lg leading-[1.7]">
              Hi, I'm Garry founder of Bear Media. I help businesses get seen, build trust, and get contacted through
              clean websites and consistent social media content.
            </p>
            <p className="text-muted-foreground text-lg leading-[1.7]">
              <br />
            </p>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            src="/garry-lynch-portrait.png"
            alt="Garry Lynch, founder of Bear Media"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </AnimatedSection>

      {/* CONTACT */}
      <section id="contact" className="relative py-20 md:py-20 overflow-hidden mb-8 md:mb-12">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NUHERO%284%29-2MDVgIK7cLO5QXnYNLyVp4lUGGTy7t.mp4"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 max-w-2xl mx-auto px-6"
        >
          <div className="bg-card/95 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-center text-foreground">Get in touch</h2>
            <p className="text-muted-foreground text-center mb-8 text-lg leading-[1.7]">
              Send a message and I'll get back to you within 24 hours.
            </p>

            <form
  onSubmit={async (e) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        projectType: formData.get("projectType"),
        message: formData.get("message"),
      }),
    })

    const data = await res.json()
    alert(data.message)
    form.reset()
  }}
>
              <div>
                <label htmlFor="name" className="block text-base font-medium mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#C9A227] transition-all text-base min-h-[44px]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#C9A227] transition-all text-base min-h-[44px]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#C9A227] resize-none transition-all text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#C9A227] hover:bg-[#B89120] text-black py-7 rounded-xl text-lg font-bold shadow-[0_4px_20px_rgba(201,162,39,0.3)] transition-all hover:shadow-[0_8px_30px_rgba(201,162,39,0.4)] min-h-[44px]"
              >
                Send Message
              </Button>
          
            </form>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative pb-[env(safe-area-inset-bottom)] pt-[60px]">
        <div className="h-6 md:h-8" />
        <ExpandableFooter />
      </footer>

      {/* Floating Section Nav */}
      <FloatingSectionNav />
    </div>
  )
}

function AnimatedSection({
  children,
  className = "",
  id,
}: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
