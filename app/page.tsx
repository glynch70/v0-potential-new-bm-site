"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X, Video, Monitor, Plus } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

function ServiceCardAnimated({
  service,
  index,
  scrollYProgress,
}: {
  service: {
    id: number
    title: string
    subtext: string
    bullets: string[]
    bg: string
    textColor: string
    subtextColor: string
    bulletColor: string
    bulletDot: string
    image: string | null
    stopY: number
    scrollRange: [number, number]
    isStatic?: boolean
  }
  index: number
  scrollYProgress: any
}) {
  const icons = [Video, Monitor, Plus]
  const Icon = icons[index]

  const startY = 800 // Fixed starting position below viewport

  const y = useTransform(
    scrollYProgress,
    service.isStatic
      ? [0, 1]
      : [service.scrollRange[0], service.scrollRange[0] + 0.01, service.scrollRange[1] - 0.03, service.scrollRange[1]],
    service.isStatic
      ? [service.stopY, service.stopY]
      : [
          startY, // Start below viewport
          startY, // Hold position until scroll range begins
          service.stopY + 15, // Ease toward final position
          service.stopY, // Final resting position
        ],
  )

  return (
    <motion.div
      className="absolute top-0 left-1/2 w-full max-w-4xl"
      style={{
        x: "-50%",
        y: service.isStatic ? service.stopY : y,
        zIndex: 10 + index,
      }}
    >
      <div
        className="rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-2xl"
        style={{
          backgroundColor: service.bg,
          minHeight: "480px",
        }}
      >
        <div className={`${service.image ? "grid md:grid-cols-2 gap-6 md:gap-10" : ""} h-full`}>
          <div className="flex flex-col justify-between">
            {/* Heading container - fixed height for consistent stacking */}
            <div className="h-[72px] flex items-start">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${service.id === 1 ? "bg-black/10" : "bg-white/10"}`}
                >
                  <Icon className={`w-5 h-5 ${service.textColor}`} />
                </div>
                <h3 className={`text-2xl md:text-3xl font-semibold ${service.textColor}`}>{service.title}</h3>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <p className={`${service.subtextColor} text-base md:text-lg mb-6 leading-relaxed`}>{service.subtext}</p>

              <ul className="space-y-2">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full ${service.bulletDot} mt-2 flex-shrink-0`} />
                    <span className={`${service.bulletColor} text-sm md:text-base`}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {service.image && (
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[280px] aspect-[280/360] rounded-2xl overflow-hidden shadow-xl">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function MobileServicesSection() {
  const icons = [Video, Monitor, Plus]

  const services = [
    {
      id: 1,
      title: "Social Media Content",
      subtext: "Consistent, on-brand content that builds trust and keeps your business visible.",
      bullets: ["Reels, TikToks, Shorts", "Promo clips and stories", "Monthly content packages", "Platform management"],
      bg: "#C9A227",
      textColor: "text-black",
      subtextColor: "text-black/70",
      bulletColor: "text-black/80",
      bulletDot: "bg-black",
      image: "/services-social-media.jpg",
    },
    {
      id: 2,
      title: "Websites",
      subtext: "Fast, clean websites and landing pages that convert visitors into customers.",
      bullets: [
        "Landing pages",
        "Business websites",
        "Portfolio sites",
        "E-commerce setups",
        "Hosting and maintenance",
      ],
      bg: "#1C1C1C",
      textColor: "text-white",
      subtextColor: "text-white/70",
      bulletColor: "text-white/80",
      bulletDot: "bg-[#C9A227]",
      image: "/services-websites.jpg",
    },
    {
      id: 3,
      title: "Extras & Add-ons",
      subtext: "Additional services available to support your brand and visibility.",
      bullets: [
        "Drone footage",
        "Photography and video",
        "Logo and brand assets",
        "Merchandise design",
        "SEO and website enhancements",
        "Google Business Profile management",
        "SEO ranking improvement",
        "AI-powered content tools",
      ],
      bg: "#2D4A3E",
      textColor: "text-white",
      subtextColor: "text-white/80",
      bulletColor: "text-white/80",
      bulletDot: "bg-[#C9A227]",
      image: "/services-extras.jpg",
    },
  ]

  return (
    <section id="services" className="bg-[#F5F4F0] dark:bg-[#1a1a1a] py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-black dark:text-white mb-3">Services</h2>
        <p className="text-black/60 dark:text-white/60 text-base max-w-md mx-auto">
          Clear, practical services that help businesses get seen and contacted.
        </p>
      </div>

      <div className="space-y-6 max-w-lg mx-auto">
        {services.map((service, index) => {
          const Icon = icons[index]
          return (
            <div key={service.id} className="rounded-[20px] p-5 shadow-lg" style={{ backgroundColor: service.bg }}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${service.id === 1 ? "bg-black/10" : "bg-white/10"}`}
                >
                  <Icon className={`w-4 h-4 ${service.textColor}`} />
                </div>
                <h3 className={`text-xl font-semibold ${service.textColor}`}>{service.title}</h3>
              </div>

              <p className={`${service.subtextColor} text-sm mb-4 leading-relaxed`}>{service.subtext}</p>

              {service.image && (
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md mb-4">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              )}

              <ul className="space-y-1.5">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${service.bulletDot} mt-1.5 flex-shrink-0`} />
                    <span className={`${service.bulletColor} text-sm`}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function PinnedServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const CARD_STOP_OFFSET = 80

  const services = [
    {
      id: 1,
      title: "Social Media Content",
      subtext: "Consistent, on-brand content that builds trust and keeps your business visible.",
      bullets: ["Reels, TikToks, Shorts", "Promo clips and stories", "Monthly content packages", "Platform management"],
      bg: "#C9A227",
      textColor: "text-black",
      subtextColor: "text-black/70",
      bulletColor: "text-black/80",
      bulletDot: "bg-black",
      image: "/services-social-media.jpg",
      stopY: 0,
      scrollRange: [0, 0] as [number, number],
      isStatic: true,
    },
    {
      id: 2,
      title: "Websites",
      subtext: "Fast, clean websites and landing pages that convert visitors into customers.",
      bullets: [
        "Landing pages",
        "Business websites",
        "Portfolio sites",
        "E-commerce setups",
        "Hosting and maintenance",
      ],
      bg: "#1C1C1C",
      textColor: "text-white",
      subtextColor: "text-white/70",
      bulletColor: "text-white/80",
      bulletDot: "bg-[#C9A227]",
      image: "/services-websites.jpg",
      stopY: CARD_STOP_OFFSET,
      scrollRange: [0.3, 0.55] as [number, number],
      isStatic: false,
    },
    {
      id: 3,
      title: "Extras & Add-ons",
      subtext: "Additional services available to support your brand and visibility.",
      bullets: [
        "Drone footage",
        "Photography and video",
        "Logo and brand assets",
        "Merchandise design",
        "SEO and website enhancements",
        "Google Business Profile management",
        "SEO ranking improvement",
        "AI-powered content tools",
      ],
      bg: "#2D4A3E",
      textColor: "text-white",
      subtextColor: "text-white/80",
      bulletColor: "text-white/80",
      bulletDot: "bg-[#C9A227]",
      image: "/services-extras.jpg",
      stopY: CARD_STOP_OFFSET * 2,
      scrollRange: [0.6, 0.85] as [number, number],
      isStatic: false,
    },
  ]

  if (isMobile) {
    return <MobileServicesSection />
  }

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-[#F5F4F0] dark:bg-[#1a1a1a]"
      style={{ height: "300vh" }}
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section header */}
        <div className="pt-12 pb-8 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-black dark:text-white mb-4">Services</h2>
          <p className="text-black/60 dark:text-white/60 text-lg max-w-xl mx-auto">
            Clear, practical services that help businesses get seen and contacted.
          </p>
        </div>

        {/* Cards container */}
        <div className="relative px-4 md:px-6 h-[calc(100vh-160px)]">
          <div className="relative max-w-4xl mx-auto h-full">
            {services.map((service, index) => (
              <ServiceCardAnimated key={service.id} service={service} index={index} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkCard({
  project,
  index,
}: { project: { title: string; description: string; tag: string; image: string; link: string }; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30])

  return (
    <motion.a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ y }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="group bg-white dark:bg-[#252525] rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 cursor-pointer block"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-[#C9A227] transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs font-medium text-[#C9A227] bg-[#C9A227]/10 px-2.5 py-1 rounded-full">
            {project.tag}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
      </div>
    </motion.a>
  )
}

export default function BearMediaWebsite() {
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [isDarkMode, setIsDarkMode] = useState(false)
  const stackingSectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const video = heroVideoRef.current
    if (!video) return

    // Start playback
    video.play().catch(() => {})

    // Seamless loop: reset currentTime slightly before end to avoid decode hitch
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.1) {
        video.currentTime = 0
      }
    }

    // Fallback: ensure video never pauses at end
    const handleEnded = () => {
      video.currentTime = 0
      video.play().catch(() => {})
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  useEffect(() => {
    const sections = ["home", "services", "work", "about"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" },
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const cards = document.querySelectorAll(".stack-card")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleCards((prev) => (prev.includes(index) ? prev : [...prev, index]))
          }
        })
      },
      { threshold: 0.5 },
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem("bear-media-theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("bear-media-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("bear-media-theme", "light")
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMenuOpen(false)
  }

  const shortFormVideos = [
    { id: 1, thumbnail: "/restaurant-food-reel.jpg", videoUrl: "https://www.youtube.com/shorts/52e3c9nf" },
    { id: 2, thumbnail: "/coffee-shop-promo.jpg" },
    { id: 3, thumbnail: "/fitness-studio-content.jpg" },
    { id: 4, thumbnail: "/retail-store-video.jpg" },
  ]

  const bentoServices = [
    { title: "Short-form Video", description: "Reels, TikTok & Shorts that actually get views", size: "large" },
    { title: "Websites", description: "Fast, clean builds for small businesses", size: "medium" },
    { title: "Drone & Aerial", description: "Licensed aerial photography & video", size: "small" },
    { title: "Photography", description: "Products, venues, headshots", size: "small" },
    { title: "AI & Automation", description: "Smart workflows that save time", size: "medium" },
    { title: "Strategy", description: "Content planning that makes sense", size: "small" },
  ]

  const portfolioItems = [
    {
      title: "Local Pharmacy Rebrand",
      outcome: "2x increase in foot traffic",
      image: "/pharmacy-storefront-modern.jpg",
    },
    {
      title: "Trades Company Website",
      outcome: "First page Google in 3 weeks",
      image: "/tradesman-website-laptop.jpg",
    },
    {
      title: "Restaurant Content Package",
      outcome: "50k+ views in first month",
      image: "/restaurant-food-photography.png",
    },
  ]

  const reviews = [
    {
      quote:
        "It's been a great experience working with Garry and Bear Media. Slick process, reliable, good communication and happy with the end results on my project. Overall a top quality service.",
      name: "Gary Young",
    },
    {
      quote:
        "Garry of Bear Media has been a great asset to my business. He knows his business and has been a great help in improving our marketing.",
      name: "Lesley Cade",
    },
    {
      quote: "Great experience and will use again.",
      name: "David Logan",
    },
    {
      quote:
        "Garry helped massively with offering advice and showing me how to improve social media posts. Would highly recommend.",
      name: "Rebecca Young",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "dark bg-[#1a1a1a]" : "bg-[#FAF9F6]"}`}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isDarkMode
              ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.2)]"
              : "bg-[#FAF9F6]/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="flex items-center relative">
            <div className="absolute inset-0 -m-4 rounded-full bg-gradient-radial from-white/20 via-white/5 to-transparent blur-xl animate-logo-pulse" />
            <img src="/bear-media-logo.png" alt="Bear Media" className="h-14 md:h-20 w-auto relative z-10" />
            <span
              className={`hidden md:block ml-4 text-sm font-normal tracking-wide transition-colors duration-300 ${
                isScrolled
                  ? isDarkMode
                    ? "text-white/50"
                    : "text-black/40"
                  : "text-white/60 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
              }`}
            >
              Websites & Social Media Content
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {["Services", "Work", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? isDarkMode
                      ? "text-white/70 hover:text-white"
                      : "text-black/60 hover:text-black"
                    : "text-white hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? isDarkMode
                    ? "text-white/70 hover:text-white"
                    : "text-black/60 hover:text-black"
                  : "text-white hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
              }`}
            >
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? isDarkMode
                    ? "text-white/60 hover:text-white hover:bg-white/10"
                    : "text-black/60 hover:text-black hover:bg-black/5"
                  : "text-white hover:text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
              }`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? isDarkMode
                    ? "text-white/70 hover:text-white"
                    : "text-black/70 hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className={`p-2 transition-colors ${
                isScrolled
                  ? isDarkMode
                    ? "text-white/70 hover:text-white"
                    : "text-black/70 hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className={`absolute inset-0 ${isDarkMode ? "bg-[#1a1a1a]" : "bg-[#FAF9F6]"}`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-5">
              <img src="/bear-media-logo.png" alt="Bear Media" className="h-10 md:h-14 w-auto" />
              <button
                onClick={() => setMenuOpen(false)}
                className={`p-2 ${isDarkMode ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"}`}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-8">
              {["Home", "Services", "Work", "About"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className={`text-4xl font-light transition-colors ${
                    isDarkMode ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black"
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className={`text-4xl font-light transition-colors ${
                  isDarkMode ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black"
                }`}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NUHERO%284%29-2MDVgIK7cLO5QXnYNLyVp4lUGGTy7t.mp4"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(201,162,39,0.8) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["200% 0%", "-200% 0%"],
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              Websites and
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            >
              Social Media Content
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          >
            I help businesses and individuals get seen, trusted, and contacted through clean websites and consistent
            social media content.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <Button
                size="lg"
                className="bg-[#C9A227] hover:bg-[#B8921F] text-black rounded-full px-10 py-6 text-base font-medium shadow-[0_4px_20px_rgba(201,162,39,0.3)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,162,39,0.4)]"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a call
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-6 text-base font-medium border-white/30 bg-transparent"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PinnedServicesSection />
    </div>
  )
}
