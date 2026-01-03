"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useScroll } from "framer-motion"
import { ScrollStackingCard } from "@/components/scroll-stacking-card"

export default function BearMediaHomepage() {
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const stackingContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: stackingContainerRef,
    offset: ["start end", "end start"],
  })
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

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
    const savedTheme = localStorage.getItem("bear-media-theme")
    if (savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
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
    setIsMenuOpen(false)
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

  const stackingServices = [
    {
      id: 1,
      title: "Social Media Content",
      subtext: "Social media packages designed to help businesses show up consistently and professionally.",
      bullets: [
        "Short-form videos and image content",
        "Reels, Shorts, and vertical video",
        "YouTube channel setup and content",
        "Organic or campaign-led posting",
        "HubSpot and GoHighLevel workflows",
      ],
    },
    {
      id: 2,
      title: "Websites",
      subtext: "Fast, clean websites built to convert. No monthly fees. You own the site outright.",
      bullets: [
        "Clean, modern design",
        "Built for speed and clarity",
        "Conversion-focused layouts",
        "Editor supplied for easy updates",
        "No lock-in or ongoing costs",
      ],
    },
    {
      id: 3,
      title: "Extras & Add-ons",
      subtext: "Additional services available to support your brand and content.",
      bullets: [
        "Drone footage",
        "Photography and video",
        "Logo and brand assets",
        "Merchandise design",
        "SEO and website enhancements",
        "AI-powered content tools",
      ],
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-[#1a1a1a]" : "bg-[#FAF9F6]"}`}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isDark
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
                    ? isDark
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
                  ? isDark
                    ? "text-white/60 hover:text-white hover:bg-white/10"
                    : "text-black/60 hover:text-black hover:bg-black/5"
                  : "text-white hover:text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
              }`}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? isDark
                    ? "text-white/70 hover:text-white"
                    : "text-black/70 hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`p-2 transition-colors ${
                isScrolled
                  ? isDark
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
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className={`absolute inset-0 ${isDark ? "bg-[#1a1a1a]" : "bg-[#FAF9F6]"}`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-5">
              <img src="/bear-media-logo.png" alt="Bear Media" className="h-10 w-auto" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className={`p-2 ${isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"}`}
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
                    isDark ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black"
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NUHERO%284%29-RiYbKLmrj229mpzK31Ag5IQIpM9LKb.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_30%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Websites and Social Media Content
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            I help businesses and individuals get seen, trusted, and contacted through clean websites and consistent
            social media content.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#C9A227] hover:bg-[#B8921F] text-black rounded-full px-10 py-6 text-base font-medium shadow-[0_4px_20px_rgba(201,162,39,0.3)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,162,39,0.4)]"
            >
              Start a project
            </Button>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, "work")}
              className="text-white/90 hover:text-white text-base font-medium transition-colors duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
            >
              View work
            </a>
          </div>
        </div>
      </section>

      <section ref={stackingContainerRef} className="py-24 md:py-32 px-6 bg-[#FAF9F6] dark:bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">How I Help</h2>
            <p className="text-black/50 dark:text-white/50 text-lg max-w-xl mx-auto">
              Clear, practical services that help businesses get seen and contacted.
            </p>
          </div>

          <div className="space-y-8">
            {stackingServices.map((service, index) => (
              <ScrollStackingCard
                key={service.id}
                index={index}
                title={service.title}
                subtext={service.subtext}
                bullets={service.bullets}
                totalCards={stackingServices.length}
              />
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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.03)]">
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

      <section id="work" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">Selected work</h2>
          <p className="text-black/50 mb-12">A few recent projects</p>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[3/2] rounded-2xl overflow-hidden mb-4 bg-black/5">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-medium text-black mb-1 group-hover:text-[#C9A227] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-black/50">{item.outcome}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="rounded-full px-8 py-5 border-black/10 hover:border-black/20 hover:bg-black/[0.02] transition-all duration-300 bg-transparent"
            >
              View full portfolio
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28 px-6 bg-[#FAF9F6]">
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
