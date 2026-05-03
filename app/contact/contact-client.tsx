"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    company: "", // honeypot
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
          company: "",
        })
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.message || "Something went wrong.")
      }
    } catch {
      setSubmitStatus("error")
      setErrorMessage("Something went wrong. Please email info@bear-media.com directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-white/10 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-white/40 hover:text-white min-h-[44px] group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-base font-bold uppercase italic font-bebas tracking-widest">Back to home</span>
          </Link>
          <div className="flex flex-col text-right">
            <span className="text-white font-black text-lg leading-tight uppercase italic font-bebas tracking-wider">Bear Media</span>
            <span className="text-brand-yellow/60 text-[9px] font-black uppercase tracking-[0.2em]">Visibility & Leads</span>
          </div>
        </div>
      </header>

      {/* 1. Header */}
      <section className="pt-48 pb-20 px-6 text-center">
        <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-sm animate-pulse italic">Stop being the best kept secret.</p>
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas">
          Let's Fix Your Visibility & <br />
          <span className="text-brand-yellow underline decoration-brand-yellow/20 underline-offset-8 text-stroke-sm">Generate Enquiries.</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mb-12 border-y border-white/5 py-8">
           <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-white font-bebas italic">5.0 ★</span>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Google Rating</span>
           </div>
           <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
           <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-white font-bebas italic">50+</span>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Local Clients</span>
           </div>
           <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
           <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-white font-bebas italic">1M+</span>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Local Reach</span>
           </div>
        </div>
        <p className="text-xl text-white/50 max-w-xl mx-auto font-medium leading-relaxed italic">
          Book a 15-minute Discovery Call below. We'll look at your current content, find the gaps, and map out a plan to get you more enquiries.
        </p>
      </section>

      {/* Content Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* 2. Primary Action: Embedded Calendar */}
          <div className="glass-card p-1 overflow-hidden min-h-[600px] border-brand-yellow/20">
             <div className="w-full h-full bg-neutral-900/50 flex items-center justify-center text-neutral-600 italic">
                Calendly / Booking System Integration
             </div>
          </div>

          {/* 3. Secondary Action: Simple Form */}
          <div className="flex flex-col">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-yellow">Prefer to message first?</h2>
              <p className="text-white/60 mb-8">
                Send a quick enquiry and I'll get back to you within 24 hours.
              </p>
              
              {submitStatus === "success" ? (
                <div className="glass-card p-10 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-brand-yellow">Message sent</h3>
                  <p className="text-white/50">I’ll reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                   <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-base focus:border-brand-yellow outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-base focus:border-brand-yellow outline-none transition-colors"
                  />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your business..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-base leading-relaxed focus:border-brand-yellow outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-yellow text-neutral-950 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send enquiry"}
                  </button>
                </form>
              )}
            </div>

            {/* 4. Direct Contact Details */}
            <div className="mt-auto pt-12 border-t border-white/5">
               <h3 className="text-sm font-black uppercase tracking-widest text-white/30 mb-6">Direct Contact</h3>
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs text-white/40 uppercase mb-2">Email</p>
                    <a href="mailto:info@bear-media.com" className="text-white hover:text-brand-yellow transition-colors">info@bear-media.com</a>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase mb-2">Location</p>
                    <p className="text-white">Broxburn, West Lothian</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
