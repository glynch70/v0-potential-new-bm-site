"use client"
import FloatingSectionNav from "@/components/FloatingSectionNav"
import type React from "react"

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
      <div className="rounded-[28px] p-8 md:p-10 shadow-2xl min-h-[560px]" style={{ backgroundColor: service.bg }}>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Icon className={`w-5 h-5 ${service.textColor}`} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-semibold ${service.textColor}`}>{service.title}</h3>
            </div>

            <p className={`${service.subtextColor} mb-6`}>{service.subtext}</p>

            <ul className="space-y-2">
              {service.bullets.map((b: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <span className={`w-2 h-2 mt-2 rounded-full ${service.bulletDot}`} />
                  <span className={service.bulletColor}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
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
   MOBILE SERVICES (ENHANCED STACKING MOTION)
-------------------------------- */

function MobileServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const services = [
    {
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const cardHeight = 560
  const spacing = 90
  const totalStackHeight = cardHeight + 100

  const y0 = useTransform(scrollYProgress, [0, 0], [0, 0])
  const y1 = useTransform(scrollYProgress, [0.25, 0.65], [800, 0])
  const y2 = useTransform(scrollYProgress, [0.55, 0.95], [800, 0])

  const transforms = [{ y: y0 }, { y: y1 }, { y: y2 }]

  return (
    <section ref={containerRef} className="relative bg-muted md:hidden" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen overflow-x-hidden overflow-y-visible pt-24 pb-8">
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl font-semibold">Services</h2>
          <p className="text-muted-foreground mt-2 text-sm">Clear, practical services that get results.</p>
        </div>

        <div className="relative px-4" style={{ height: `${totalStackHeight}px` }}>
          {services.map((s, i) => {
            const icons = [Video, Monitor, Plus]
            const Icon = icons[i]

            return (
              <motion.div
                key={i}
                className="absolute inset-x-0 mx-auto max-w-md"
                style={{
                  y: transforms[i].y,
                  zIndex: 10 + i,
                  opacity: 1,
                }}
                transition={{ type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 1.2 }}
              >
                <div className="rounded-[28px] p-6 shadow-2xl min-h-[560px]" style={{ backgroundColor: s.bg }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${s.textColor}`} />
                    </div>
                    <h3 className={`text-xl font-semibold ${s.textColor}`}>{s.title}</h3>
                  </div>

                  <p className={`${s.subtextColor} mb-4 text-sm`}>{s.subtext}</p>

                  <ul className="space-y-2 mb-6">
                    {s.bullets.map((b: string, idx: number) => (
                      <li key={idx} className="flex gap-3">
                        <span className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${s.bulletDot}`} />
                        <span className={`text-sm ${s.bulletColor}`}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[240px] aspect-[3/4] rounded-2xl overflow-hidden bg-white/5">
                      <img
                        src={s.image || "/placeholder.svg"}
                        alt={s.title}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
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
          <h2 className="text-4xl md:text-5xl font-semibold">Services</h2>
          <p className="text-muted-foreground mt-3">Clear, practical services that get results.</p>
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
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-semibold text-white">
            Websites and
            <br />
            Social Media Content
          </h1>
          <p className="mt-6 text-white/80 max-w-xl mx-auto">Helping businesses get seen, trusted, and contacted.</p>

          <div className="mt-10 flex justify-center gap-4">
            <Button className="bg-[#C9A227] text-black rounded-full px-8 py-6">Book a call</Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-white bg-transparent border-white hover:bg-white/10"
            >
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
      <AnimatedSection id="work" className="py-8 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Work</h2>
            <p className="text-muted-foreground mb-4">Portfolio examples across social, web, and design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Social Media Content - Mobile Phone with Modal */}
            <motion.div
              initial={{ opacity: 1, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl overflow-hidden shadow-lg bg-card flex flex-col min-h-[580px]"
            >
              <a
                href="https://www.youtube.com/@bearmedia70"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-[406px] bg-muted flex items-center justify-center group cursor-pointer"
              >
                <img src="/mobilephone.png" alt="Social Media Content" className="h-full w-auto object-cover" />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-[#C9A227] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Social Media Content</h3>
                  <p className="text-sm text-muted-foreground">Scroll-stopping video and graphics for social feeds.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Business Websites - Carousel (now works on mobile too) */}
            <motion.div
              initial={{ opacity: 1, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl overflow-hidden shadow-lg bg-card flex flex-col min-h-[580px]"
            >
              <div className="relative w-full h-[406px] bg-muted overflow-hidden">
                <img
                  src={["/website-1.png", "/website-2.png", "/website-3.png"][websiteIndex] || "/placeholder.svg"}
                  alt="Business Website"
                  className="w-full h-full object-cover"
                />
                {/* Navigation arrows */}
                <button
                  onClick={() => setWebsiteIndex((websiteIndex - 1 + 3) % 3)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10"
                  aria-label="Previous website"
                >
                  ←
                </button>
                <button
                  onClick={() => setWebsiteIndex((websiteIndex + 1) % 3)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10"
                  aria-label="Next website"
                >
                  →
                </button>
                {/* Navigation dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      onClick={() => setWebsiteIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === websiteIndex ? "bg-[#C9A227] w-6" : "bg-white/50 w-2"
                      }`}
                      aria-label={`View website ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Business Websites</h3>
                  <p className="text-sm text-muted-foreground">Clean, fast websites built to convert.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Brand Assets - Static Poster */}
            <motion.div
              initial={{ opacity: 1, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl overflow-hidden shadow-lg bg-card flex flex-col min-h-[580px]"
            >
              <div className="w-full h-[406px] bg-muted overflow-hidden flex items-center justify-center">
                <img src="/branding.png" alt="Brand Assets" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Brand Assets</h3>
                  <p className="text-sm text-muted-foreground">Logos, graphics and visual identity systems.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* REVIEWS */}
      <AnimatedSection id="reviews" className="py-8 md:py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">What clients say</h2>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block max-w-3xl mx-auto"
          >
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-md">
              <p className="text-sm text-[#C9A227] font-medium mb-6">★★★★★ 5.0 from 18 Google reviews</p>
              <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                "Garry created a simple, powerful website that sells our Manager Training Programme and clearly sets us
                apart. Delivered within days, with zero fuss. Exactly what we needed."
              </blockquote>
              <div className="text-sm font-medium text-muted-foreground">
                <p>Managing What Matters</p>
                <p className="text-xs mt-1">Leadership & Management Training</p>
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
            <div className="bg-card p-6 rounded-2xl shadow-md">
              <p className="text-sm text-[#C9A227] font-medium mb-4">★★★★★ 5.0 from 18 Google reviews</p>
              <blockquote className="text-base text-foreground mb-4 leading-relaxed">
                "Garry created a simple, powerful website that sells our Manager Training Programme and clearly sets us
                apart. Delivered within days, with zero fuss. Exactly what we needed."
              </blockquote>
              <div className="text-sm font-medium text-muted-foreground">
                <p>Managing What Matters</p>
                <p className="text-xs mt-1">Leadership & Management Training</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=Bear+Media+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline"
            >
              Read all reviews on Google →
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* ABOUT */}
      <AnimatedSection id="about" className="py-8 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">About</h2>
            <p className="text-muted-foreground mb-4">Hi, I'm Garry founder of Bear Media.</p>
            <p className="text-muted-foreground">
              I help businesses get seen, trusted, and contacted through clean websites and consistent social media
              content.
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
      <section id="contact" className="relative py-12 md:py-20 overflow-hidden">
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
          <div className="bg-card/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-center text-foreground">Get in touch</h2>
            <p className="text-muted-foreground text-center mb-8">
              Send a message and I'll get back to you within 24 hours.
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#C9A227] resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#C9A227] hover:bg-[#B89120] text-black py-6 rounded-xl text-base font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </section>
<>
  {<section id="home">...</section>
<section id="services">...</section>
<section id="work">...</section>
<section id="about">...</section>
<section id="contact">...</section>}

  <FloatingSectionNav />
</>
      {/* EXPANDABLE FOOTER SECTION */}
      <ExpandableFooterSection />

      {/* FOOTER */}
      <footer className="py-12 md:py-16 pb-24 md:pb-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-2xl font-bold text-foreground">Bear</span>
              <span className="text-2xl font-bold text-[#C9A227]">Media</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Websites & Social Media Content</p>
            <p className="text-sm text-muted-foreground">© 2025 Bear Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
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

function ExpandableFooterSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-6 flex items-center justify-between text-foreground hover:text-[#C9A227] transition-colors"
          aria-expanded={isExpanded}
        >
          <span className="text-sm font-medium">Quick Links & Info</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </motion.svg>
        </button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="pb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4 text-foreground">Sitemap</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-sm text-muted-foreground hover:text-[#C9A227] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-[#C9A227] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-sm text-muted-foreground hover:text-[#C9A227] transition-colors">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-[#C9A227] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-[#C9A227] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 text-foreground">Services</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">Social Media Content</li>
                <li className="text-sm text-muted-foreground">Websites</li>
                <li className="text-sm text-muted-foreground">Extras & Add-ons</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 text-foreground">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">Edinburgh, Scotland</li>
                <li>
                  <a
                    href="mailto:hello@bearmedia.co.uk"
                    className="text-sm text-muted-foreground hover:text-[#C9A227] transition-colors"
                  >
                    hello@bearmedia.co.uk
                  </a>
                </li>
              </ul>
              <div className="mt-4 w-full h-48 bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.5678!2d-3.188!3d55.953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDU3JzEwLjgiTiAzwrAxMScxNi44Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bear Media Location"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
