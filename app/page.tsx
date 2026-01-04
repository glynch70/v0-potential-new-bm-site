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
  }
  index: number
  scrollYProgress: any
}) {
  const icons = [Video, Monitor, Plus]
  const Icon = icons[index]

  const y = useTransform(
    scrollYProgress,
    [0, service.scrollRange[0], service.scrollRange[1], 1],
    ["100%", "100%", `${service.stopY}px`, `${service.stopY}px`],
  )

  const blur = useTransform(
    scrollYProgress,
    [service.scrollRange[0], service.scrollRange[0] + 0.1, service.scrollRange[1]],
    [8, 4, 0],
  )

  const opacity = useTransform(
    scrollYProgress,
    [service.scrollRange[0], service.scrollRange[0] + 0.1, service.scrollRange[1]],
    [0.5, 0.8, 1],
  )

  const filterBlur = useTransform(blur, (v) => `blur(${v}px)`)

  return (
    <motion.div
      className="absolute top-0 left-1/2 w-full max-w-4xl"
      style={{
        x: "-50%",
        y,
        zIndex: 10 + index,
        filter: filterBlur,
        opacity,
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

function PinnedServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress through the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const CARD_STOP_OFFSET = 88 // Spacing between card stops (heading height + padding)

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
      image: "/services-social-media.jpg", // Updated to real image
      stopY: 0,
      scrollRange: [0, 0.33] as [number, number],
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
      image: "/services-websites.jpg", // Updated to real image
      stopY: CARD_STOP_OFFSET,
      scrollRange: [0.33, 0.66] as [number, number],
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
      image: "/services-extras.jpg", // Now has image instead of null
      stopY: CARD_STOP_OFFSET * 2,
      scrollRange: [0.66, 1.0] as [number, number],
    },
  ]

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-[#F5F4F0] dark:bg-[#1a1a1a]"
      style={{ height: "300vh" }} // Creates scroll distance for card animations
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

        {/* Cards container - relative for absolute children */}
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

export default function BearMediaWebsite() {
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [isDarkMode, setIsDarkMode] = useState(false)
  const stackingSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const video = heroVideoRef.current
    if (video) {
      video.play().catch(() => {})
    }
  }, [])

  useEffect(() => {
    const sections = ["home", "services", "work", "about", "contact"]
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
    { quote: "Professional, reliable, and genuinely easy to work with.", name: "Sarah M.", business: "Local Venue" },
    { quote: "The content we got back was exactly what we needed.", name: "James T.", business: "Trades Company" },
    { quote: "Finally, someone who just gets it done without the fuss.", name: "Emma R.", business: "Retail Shop" },
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
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {["Services", "Work", "About", "Contact"].map((item) => (
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
              {["Home", "Services", "Work", "About", "Contact"].map((item) => (
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
            loop
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
                Start a project
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
                className="rounded-full px-10 py-6 text-base font-medium border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm bg-transparent"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                View services
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent dark:from-[#1a1a1a] dark:via-[#1a1a1a]/80" />
          <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_30%,transparent_100%)]" />
        </div>
      </section>

      <PinnedServicesSection />

      <section id="work" className="py-24 md:py-32 px-6 bg-[#FAF9F6] dark:bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Work</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A selection of recent websites, content, and visual projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Short-Form Content",
                description: "Scroll-stopping short-form video designed for social feeds.",
                tag: "Video",
                image: "/work-short-form.jpg",
              },
              {
                title: "Local Business Website",
                description: "Modern, conversion-focused website for local services",
                tag: "Website",
                image: "/placeholder.svg?height=500&width=400",
              },
              {
                title: "Brand & Visual Assets",
                description: "Complete visual identity and marketing materials",
                tag: "Content",
                image: "/placeholder.svg?height=500&width=400",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-[#252525] rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 cursor-pointer"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center mb-10">
          <p className="text-sm text-black/40 uppercase tracking-widest">Trusted by local businesses</p>
        </div>

        <div className="relative">
          <div className="flex items-center gap-16 animate-scroll-logos">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-32 h-12 bg-black/5 rounded-lg" />
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={`dup-${i}`} className="flex-shrink-0 w-32 h-12 bg-black/5 rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-12 text-center">What clients say</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(201,162,39,0.03)]">
                <blockquote className="text-black/80 text-lg leading-relaxed mb-6">"{review.quote}"</blockquote>
                <div>
                  <p className="font-medium text-black">{review.name}</p>
                  <p className="text-sm text-black/40">{review.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">About</h2>
          <p className="text-xl md:text-2xl text-black/80 leading-relaxed mb-6">
            I'm not an agency. I'm a one-person creative partner who shows up, works properly, and delivers what
            businesses actually need.
          </p>
          <p className="text-black/50 text-lg">
            Based in Broxburn. Working with businesses across Edinburgh, West Lothian and Fife.
          </p>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32 px-6 bg-white mb-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">Ready to start?</h2>
          <p className="text-black/50 text-lg mb-10">
            No pressure, no hard sell. Just a conversation about what you need.
          </p>
          <Button
            size="lg"
            className="bg-[#C9A227] hover:bg-[#B8921F] text-black rounded-full px-10 py-6 text-base font-medium shadow-[0_4px_20px_rgba(201,162,39,0.3)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,162,39,0.4)]"
          >
            Get in touch
          </Button>
        </div>
      </section>

      <footer className="bg-[#1A1A1A] text-white px-6 py-16 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="flex items-center gap-5">
              <img src="/bear-media-logo.png" alt="Bear Media" className="h-10 md:h-14 w-auto" />
              <div>
                <p className="text-white/50 text-sm">Based in Broxburn</p>
                <p className="text-white/50 text-sm">Serving Edinburgh & surrounds</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 text-sm text-white/50">
              {["Services", "Work", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className={`hover:text-[#C9A227] transition-colors duration-300`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-10 text-center text-sm text-white/30">
            © {new Date().getFullYear()} Bear Media. All rights reserved.
          </div>
        </div>
      </footer>

      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-4">
        <div className="flex gap-1.5 items-center bg-white/90 backdrop-blur-md rounded-full p-1.5 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
          {[
            { id: "home", label: "Home" },
            { id: "services", label: "Services" },
            { id: "work", label: "Work" },
            { id: "about", label: "About" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`
                px-4 py-2.5 rounded-full text-sm font-medium
                transition-all duration-300 whitespace-nowrap
                ${
                  activeSection === item.id
                    ? "bg-[#C9A227] text-black shadow-[0_2px_12px_rgba(201,162,39,0.35)]"
                    : "text-black/60 hover:text-black hover:bg-black/[0.03]"
                }
              `}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}
