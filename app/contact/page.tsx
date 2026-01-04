"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Simple header with back link */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-black/60 hover:text-black transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to home</span>
          </Link>
          <Link href="/">
            <img src="/bear-media-logo.png" alt="Bear Media" className="h-10 w-auto" />
          </Link>
        </div>
      </header>

      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-5 tracking-tight">Ready to start?</h1>
          <p className="text-black/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            No pressure, no hard sell. Just a conversation about what you need.
          </p>
        </div>
      </section>

      {/* Main content - two columns */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Left column - reassurance copy */}
            <div className="order-2 md:order-1">
              <h2 className="text-xl font-medium text-black mb-6">Let's have a chat</h2>
              <div className="space-y-5 text-black/60 leading-relaxed">
                <p>
                  Every message lands directly with me — no contact forms disappearing into the void, no automated
                  replies.
                </p>
                <p>
                  Whether you've got a clear project in mind or you're just exploring options, I'm happy to talk through
                  what might work for you.
                </p>
                <p>
                  Most conversations start with a quick email or a 15-minute call. No obligation, no awkward sales
                  pitch.
                </p>
              </div>

              {/* Secondary details */}
              <div className="mt-12 pt-8 border-t border-black/10">
                <div className="space-y-3 text-sm text-black/40">
                  <p>
                    <a href="mailto:hello@bearmedia.co.uk" className="hover:text-black/60 transition-colors">
                      hello@bearmedia.co.uk
                    </a>
                  </p>
                  <p>Based in Broxburn. Working across Edinburgh, West Lothian and Fife.</p>
                </div>
              </div>
            </div>

            {/* Right column - contact form */}
            <div className="order-1 md:order-2">
              {isSubmitted ? (
                <div className="bg-[#FAF9F6] rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-[#C9A227]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#C9A227]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-black mb-3">Message sent</h3>
                  <p className="text-black/50">Thanks for getting in touch. I'll reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border-0 rounded-xl text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border-0 rounded-xl text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/30 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-black/70 mb-2">
                      Project type <span className="text-black/30">(optional)</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border-0 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#C9A227]/30 transition-all appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23999'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        backgroundSize: "1.25rem",
                      }}
                    >
                      <option value="">Select a type...</option>
                      <option value="website">Website</option>
                      <option value="social-content">Social media content</option>
                      <option value="branding">Branding & visual assets</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border-0 rounded-xl text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/30 transition-all resize-none"
                      placeholder="Tell me a bit about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C9A227] hover:bg-[#B8921F] text-black rounded-xl px-8 py-6 text-base font-medium shadow-[0_4px_20px_rgba(201,162,39,0.25)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,162,39,0.35)] disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/">
            <img src="/bear-media-logo.png" alt="Bear Media" className="h-10 w-auto" />
          </Link>
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} Bear Media. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
