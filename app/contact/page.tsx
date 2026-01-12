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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-black/60 hover:text-black min-h-[44px]">
            <ArrowLeft size={20} />
            <span className="text-base font-medium">Back to home</span>
          </Link>
          <img src="/bear-media-logo.png" alt="Bear Media" className="h-10" />
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-5">Ready to start?</h1>
        <p className="text-black/50 text-lg max-w-xl mx-auto">
          No pressure. No hard sell. Just a conversation.
        </p>
      </section>

      {/* Content */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20">
          {/* Copy */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Let’s have a chat</h2>
            <p className="text-black/60 leading-[1.7] text-lg mb-6">
              Every message comes directly to me. No bots. No sales scripts.
            </p>
            <a
              href="mailto:info@bear-media.com"
              className="text-black/40 hover:text-black min-h-[44px] inline-block"
            >
              info@bear-media.com
            </a>
          </div>

          {/* Form */}
          <div>
            {submitStatus === "success" ? (
              <div className="bg-[#FAF9F6] p-10 rounded-2xl text-center shadow">
                <h3 className="text-2xl font-bold mb-2">Message sent</h3>
                <p className="text-black/50">I’ll reply within 24 hours.</p>
              </div>
            ) : (
              <>
                {submitStatus === "error" && (
                  <div className="mb-6 bg-red-50 border border-red-200 p-4 rounded-xl">
                    <p className="text-red-800">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot (bots only) */}
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-[#FAF9F6]"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-[#FAF9F6]"
                  />

                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-[#FAF9F6]"
                  >
                    <option value="">Project type (optional)</option>
                    <option value="website">Website</option>
                    <option value="social">Social content</option>
                    <option value="branding">Branding</option>
                    <option value="other">Other</option>
                  </select>

                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-[#FAF9F6]"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C9A227] text-black py-7 rounded-xl font-bold"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
