"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Star, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import YouTubeEmbed from '@/components/YouTubeEmbed'

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

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cal = (window as any).Calendly
      if (cal) {
        cal.initInlineWidget({
          url: "https://calendly.com/bearmedia/discovery-call?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=f5a623",
          parentElement: document.getElementById("calendly-embed"),
          resize: true,
        })
      }
    }
    document.head.appendChild(script)
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script)
    }
  }, [])

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
          <Link href="/" className="flex items-center gap-3 text-white hover:text-white min-h-[44px] group">
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
      <section className="pt-32 pb-8 px-6 text-center">
        <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic">Stop being the best kept secret.</p>
        <h1 className="mb-6 md:mb-8">
          Let's Fix Your Visibility & <br />
          <span className="text-brand-yellow">Generate Enquiries.</span>
        </h1>
        
        {/* PERSONAL VIDEO MESSAGE */}
        <div className="max-w-3xl mx-auto mb-12 px-6">
           <YouTubeEmbed 
              videoId="jC2_w7PSiGI" 
              title="A Message From Garry"
              description="How we help local businesses grow through authentic content."
           />
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 border-y border-white/5 py-6">
           {[
             { label: "Google Rating", value: "5.0 ★" },
             { label: "Local Clients", value: "50+" },
             { label: "Enquiries", value: "Daily" }
           ].map((stat, i) => (
             <div key={i} className="flex flex-col items-center">
                <span className="text-xl font-black text-white font-bebas italic leading-none mb-1">{stat.value}</span>
                <span className="text-[8px] font-bold text-white uppercase tracking-widest">{stat.label}</span>
             </div>
           ))}
        </div>
        <p className="text-white max-w-xl mx-auto font-medium italic">
          Book a 15-minute Discovery Call below. We'll look at your current content, find the gaps, and map out a plan to get you more enquiries.
        </p>
      </section>

      {/* Content Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          
          {/* 2. Primary Action: Embedded Calendar */}
          <div className="glass-card overflow-hidden min-h-[600px] border-white/10 bg-neutral-900/30">
             <div 
                id="calendly-embed" 
                className="w-full h-full min-h-[600px]"
                style={{ minWidth: "320px" }}
             />
          </div>

          {/* 3. Secondary Action: Simple Form */}
          <div className="flex flex-col">
            <div className="mb-10">
              <h2 className="text-xl font-black mb-4 uppercase italic font-bebas tracking-widest text-white">Prefer to message first?</h2>
              <p className="text-white text-xs mb-8 italic leading-relaxed">
                Send a quick enquiry and I'll get back to you within 24 hours.
              </p>
              
              {submitStatus === "success" ? (
                <div className="glass-card p-10 text-center border-brand-yellow/30 bg-brand-yellow/5">
                  <h3 className="text-xl font-black mb-2 text-brand-yellow uppercase italic font-bebas tracking-widest">Message sent</h3>
                  <p className="text-white text-sm italic">I’ll reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                   <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white text-sm focus:border-brand-yellow outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white text-sm focus:border-brand-yellow outline-none transition-colors"
                  />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your business..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white text-sm leading-relaxed focus:border-brand-yellow outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-yellow text-neutral-950 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-xl"
                  >
                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              )}
            </div>

            {/* 4. Direct Contact Details & Map */}
            <div className="mt-auto pt-8 border-t border-white/5 space-y-10">
               <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-white mb-4 italic">Direct Contact</h3>
                  <div className="grid grid-cols-2 gap-6">
                     <div>
                        <p className="text-[8px] text-white uppercase tracking-[0.2em] mb-1 font-bold">Email</p>
                        <a href="mailto:info@bear-media.com" className="text-sm text-white hover:text-brand-yellow transition-colors italic font-medium">info@bear-media.com</a>
                     </div>
                     <div>
                        <p className="text-[8px] text-white uppercase tracking-[0.2em] mb-1 font-bold">Location</p>
                        <p className="text-sm text-white italic font-medium">Broxburn, West Lothian</p>
                     </div>
                  </div>
               </div>

               {/* Google Map Embed */}
               <div className="rounded-2xl overflow-hidden border border-white/10 h-64 relative group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35808.64125868846!2d-3.48347895!3d55.9332214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c10b788647cf%3A0x8848417937a06c8b!2sBroxburn!5e0!3m2!1sen!2suk!4v1714432134567!5m2!1sen!2suk" 
                    className="w-full h-full opacity-80"
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-40" />
               </div>

               <div className="text-center">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-black italic">
                    Serving West Lothian, Livingston, Edinburgh & Surroundings
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
