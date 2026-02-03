"use client"
import { BearMediaHero } from "@/components/BearMediaHero"
import FloatingSectionNav from "@/components/FloatingSectionNav"
import type React from "react"
import ExpandableFooter from "@/components/ExpandableFooter"
import InteractiveServiceCards from "@/components/InteractiveServiceCards"
import WorkSectionCards from "@/components/WorkSectionCards"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

/* --------------------------------
   MAIN PAGE
-------------------------------- */

export default function BearMediaWebsite() {
  const [currentSection, setCurrentSection] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      
      // Check if we're at the top (home section)
      if (scrollPosition < 300) {
        setCurrentSection("Home")
        return
      }

      const sections = ["services", "work", "reviews", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const bottom = top + element.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            setCurrentSection(section.charAt(0).toUpperCase() + section.slice(1))
            return
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
  }

  return (
   <div>
      {/* WebGL Shader Hero */}
      <BearMediaHero />

      <button
        onClick={() => scrollToSection(currentSection.toLowerCase())}
        className="fixed top-24 right-6 z-40 bg-card/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-border hover:scale-105 active:scale-95 transition-transform cursor-pointer"
      >
        <p className="text-xs font-medium text-foreground">{currentSection}</p>
      </button>

      {/* SERVICES */}
      <section id="services">
        <InteractiveServiceCards />
      </section>

      {/* WORK */}
      <WorkSectionCards />

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
      <footer className="relative pb-[120px] md:pb-[140px] pt-[60px]">
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
