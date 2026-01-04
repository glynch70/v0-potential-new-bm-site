"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Sun, Moon, Menu, X, Video, Monitor, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

/* --------------------------------
   SERVICE CARD (DESKTOP STACK)
-------------------------------- */

function ServiceCardAnimated({
  service,
  index,
  scrollYProgress,
}: any) {
  const icons = [Video, Monitor, Plus]
  const Icon = icons[index]

  const startY = 800

  const y = useTransform(
    scrollYProgress,
    service.isStatic
      ? [0, 1]
      : [
          service.scrollRange[0],
          service.scrollRange[0] + 0.02,
          service.scrollRange[1],
        ],
    service.isStatic
      ? [service.stopY, service.stopY]
      : [startY, startY, service.stopY]
  )

  return (
    <motion.div
      className="absolute left-1/2 w-full max-w-4xl"
      style={{ x: "-50%", y, zIndex: 10 + index }}
    >
      <div
        className="rounded-[28px] p-8 md:p-10 shadow-2xl"
        style={{ backgroundColor: service.bg }}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Icon className={`w-5 h-5 ${service.textColor}`} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-semibold ${service.textColor}`}>
                {service.title}
              </h3>
            </div>

            <p className={`${service.subtextColor} mb-6`}>
              {service.subtext}
            </p>

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
              <Image src={service.image} alt={service.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* --------------------------------
   MOBILE SERVICES (SIMPLE)
-------------------------------- */

function MobileServicesSection() {
  const services = [
    {
      title: "Social Media Content",
      text: "Reels, short-form video, visuals and content management.",
      image: "/services-social-media.jpg",
    },
    {
      title: "Websites",
      text: "Fast, clean websites built to convert. No monthly fees.",
      image: "/services-websites.jpg",
    },
    {
      title: "Extras & Add-ons",
      text: "Drone, branding, SEO, Google Business Profile and more.",
      image: "/services-extras.jpg",
    },
  ]

  return (
    <section className="py-12 px-4">
      <div className="max-w-xl mx-auto space-y-8">
        {services.map((s, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow-lg bg-card">
            <div className="aspect-[4/3] relative">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* --------------------------------
   PINNED SERVICES WRAPPER
-------------------------------- */

function PinnedServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  if (isMobile) return <MobileServicesSection />

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
      scrollRange: [0.3, 0.6],
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
      scrollRange: [0.6, 0.9],
    },
  ]

  return (
    <section
      ref={containerRef}
      id="services-desktop"
      className="relative bg-muted"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pt-10 pb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">Services</h2>
          <p className="text-muted-foreground mt-3">
            Clear, practical services that get results.
          </p>
        </div>

        <div className="relative h-[calc(100vh-160px)]">
          <div className="relative max-w-4xl mx-auto h-full">
            {services.map((s, i) => (
              <ServiceCardAnimated
                key={s.id}
                service={s}
                index={i}
                scrollYProgress={scrollYProgress}
              />
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

  useEffect(() => {
    window.addEventListener("scroll", () => setIsScrolled(window.scrollY > 50))
  }, [])

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={dark ? "dark" : ""}>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
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

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-semibold text-white">
            Websites and<br />Social Media Content
          </h1>
          <p className="mt-6 text-white/80 max-w-xl mx-auto">
            Helping businesses get seen, trusted, and contacted.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button className="bg-[#C9A227] text-black rounded-full px-8 py-6">
              Book a call
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-white">
              Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <PinnedServicesSection />

      {/* FOOTER */}
      <footer className="py-16 text-center text-sm text-muted-foreground">
        © 2025 Bear Media
      </footer>
    </div>
  )
}
