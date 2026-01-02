"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Auto-play prevented by browser
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMenuOpen(false)
  }

  const workItems = [
    { title: "Local Pharmacy Rebrand", category: "Photography", image: "/pharmacy-storefront-modern-branding.jpg" },
    { title: "Trades Company Website", category: "Website", image: "/modern-tradesman-website-laptop-mockup.jpg" },
    { title: "Restaurant Social Campaign", category: "Social", image: "/restaurant-food-photography-instagram.jpg" },
    { title: "Venue Drone Footage", category: "Video", image: "/aerial-drone-view-scottish-venue.jpg" },
    { title: "Fitness Studio Launch", category: "Photography", image: "/fitness-gym-interior-photography.jpg" },
    { title: "Bakery Brand Content", category: "Social", image: "/artisan-bakery-pastries-photography.jpg" },
  ]

  return (
    <div className="min-h-screen bg-[#F7F3EB] scroll-smooth">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#F7F3EB]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="flex items-center">
            <img src="/bear-media-logo.png" alt="Bear Media" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Services", "Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-sm font-medium text-black/70 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 text-black hover:bg-black/5 rounded-full transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#F7F3EB] shadow-[-8px_0_32px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-12">
              <img src="/bear-media-logo.png" alt="Bear Media" className="h-10 w-auto" />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-black hover:bg-black/5 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {["Services", "Work", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="text-3xl font-bold text-black hover:text-[#D4A837] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HERO%202026-tgxQMBnKFM6llgL7RcLWjr49RCcXCg.mp4"
          >
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 text-balance">
            One creator. Real skills. Real results.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-4">
            No agency layers. No outsourcing. Just the work done properly.
          </p>
          <p className="text-lg text-white/70 mb-4">
            Websites and content for small businesses — built to last, not rushed.
          </p>
          <p className="text-base text-white/60 mb-10">
            Based in Broxburn. Working across Edinburgh, West Lothian & Fife.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button size="lg" className="bg-[#D4A837] hover:bg-[#C49A30] text-black rounded-full px-8 font-semibold">
              Book a call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 hover:bg-white/10 bg-transparent text-white rounded-full px-8 font-semibold"
            >
              Send WhatsApp
            </Button>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, "work")}
              className="text-white/70 hover:text-[#D4A837] transition-colors px-4 font-medium"
            >
              View work
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-16 text-center text-balance">
            How I help businesses move forward
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 - Websites */}
            <div className="bg-[#D4A837] rounded-[28px] p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
              <span className="text-xs font-mono text-black/50 uppercase tracking-wider mb-4 block">Primary</span>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">Websites</h3>
              <ul className="space-y-4 text-black/80">
                <li className="flex items-start gap-3">
                  <span className="text-black/50 mt-1">•</span>
                  <span>Fast, clean websites for small businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black/50 mt-1">•</span>
                  <span>Client owns the site outright</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black/50 mt-1">•</span>
                  <span>No ongoing hosting fees beyond your domain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black/50 mt-1">•</span>
                  <span>Easy for you to update yourself</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black/50 mt-1">•</span>
                  <span>Built to grow with your business, not sit idle</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 - Content */}
            <div className="bg-white border border-[#D8D4CC]/40 rounded-[28px] p-10 shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
              <span className="text-xs font-mono text-black/40 uppercase tracking-wider mb-4 block">
                Support & Growth
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">Content</h3>
              <ul className="space-y-4 text-black/70">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A837] mt-1">•</span>
                  <span>Ongoing photography, video and social content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A837] mt-1">•</span>
                  <span>Keeps websites active, relevant and visible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A837] mt-1">•</span>
                  <span>Supports Google Business Profile and social channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A837] mt-1">•</span>
                  <span>Delivered as an ongoing partnership, not ad-hoc jobs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Supporting line */}
          <p className="text-center text-black/60 mt-12 text-lg">
            Most clients start with a website and continue with ongoing content support.
          </p>
        </div>
      </section>

      <section id="work" className="px-6 py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-black/60 mb-6">A small selection of recent work across websites and content.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workItems.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-[20px] overflow-hidden bg-[#F7F3EB] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  {/* Category label */}
                  <span className="inline-block px-3 py-1 bg-[#D4A837]/15 rounded-full text-xs font-medium text-[#9A7B20] mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">About</h2>
          <p className="text-2xl md:text-3xl text-black/90 leading-relaxed mb-8 font-medium">
            I&apos;m not an agency. I&apos;m not pretending to be.
          </p>
          <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-6">
            I&apos;m a one-person creative partner who shows up, works properly, and delivers what businesses actually
            need — without fluff.
          </p>
          <p className="text-lg text-black/60 leading-relaxed">
            Based in Broxburn, I work with small businesses, local trades, venues and creators across Edinburgh, West
            Lothian and Fife.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Businesses we&apos;ve moved forward</h2>
          <p className="text-lg text-black/60 mb-12">Trusted by local businesses across Edinburgh & West Lothian</p>

          {/* Client type tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Pharmacies", "Trades", "Venues", "Clinics", "Local Shops", "Creators"].map((type) => (
              <span
                key={type}
                className="px-5 py-2.5 bg-[#F7F3EB] rounded-full text-sm font-medium text-black/70 border border-[#D8D4CC]/40"
              >
                {type}
              </span>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-[#F7F3EB] rounded-3xl p-8 md:p-10 max-w-2xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-black/80 leading-relaxed mb-6">
              &ldquo;Professional, reliable, and genuinely easy to work with. The content we got back was exactly what
              we needed — no fuss, no delays.&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-black">Local Business Owner</p>
              <p className="text-sm text-black/50">West Lothian</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 md:py-28 mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to work together?</h2>
          <p className="text-lg text-black/60 mb-10">Tell me what you need and I&apos;ll reply today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-[#D4A837] hover:bg-[#C49A30] text-black rounded-full px-8 font-semibold">
              Book a call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black/20 hover:bg-black/5 bg-transparent rounded-full px-8 font-semibold"
            >
              Send WhatsApp
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="hover:bg-black/5 rounded-full px-8 font-semibold text-black/70 hover:text-black"
            >
              Email form
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-12 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center gap-4">
              <img src="/bear-media-logo.png" alt="Bear Media" className="h-12 w-auto" />
              <div>
                <p className="text-white/60 text-sm">Based in Broxburn</p>
                <p className="text-white/60 text-sm">Serving Edinburgh, West Lothian & Fife</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              {["Services", "Work", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="hover:text-[#D4A837] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/40">
            © {new Date().getFullYear()} Bear Media. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4">
        <div className="flex gap-2 items-center bg-white/80 backdrop-blur-md rounded-full p-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
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
                    ? "bg-[#D4A837] text-black scale-105 shadow-[0_4px_16px_rgba(212,168,55,0.4)]"
                    : "bg-transparent text-black hover:bg-black/5"
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
