"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function ExpandableFooter() {
  const [isExpanded, setIsExpanded] = useState(false)

  const springConfig = { type: "spring", damping: 25, stiffness: 200 }

  return (
    <>
      {/* Overlay backdrop when expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Footer Container */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={springConfig}
              className="bg-[#1C1C1C] text-white rounded-t-3xl shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              <div className="p-8 md:p-12">
                {/* Brand & Location */}
                <div className="mb-10 pb-8 border-b border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-10 h-10">
                      <Image src="/bear-media-logo.png" alt="Bear Media Logo" fill className="object-contain" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold">Bear</span>
                      <span className="text-2xl font-bold text-[#C9A227]">Media</span>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mb-2">Broxburn, West Lothian, EH52 6PH</p>
                  <p className="text-white/60 text-sm">
                    Serving Edinburgh, West Lothian, Fife, Glasgow, Falkirk & Central Scotland
                  </p>
                </div>

                {/* Grid Layout for Sections */}
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  {/* Quick Links */}
                  <div>
                    <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="#about"
                          className="text-white/70 hover:text-[#C9A227] hover:translate-x-1 inline-block transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#services"
                          className="text-white/70 hover:text-[#C9A227] hover:translate-x-1 inline-block transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#work"
                          className="text-white/70 hover:text-[#C9A227] hover:translate-x-1 inline-block transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        >
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          href="#reviews"
                          className="text-white/70 hover:text-[#C9A227] hover:translate-x-1 inline-block transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        >
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a
                          href="#contact"
                          className="text-white/70 hover:text-[#C9A227] hover:translate-x-1 inline-block transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="font-semibold mb-4 text-white">Services</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="text-white/70">Websites</li>
                      <li className="text-white/70">Social Media Content</li>
                    </ul>
                  </div>

                  {/* Service Areas */}
                  <div>
                    <h3 className="font-semibold mb-4 text-white">Service Areas</h3>
                    <ul className="space-y-2 text-sm text-white/70">
                      <li>Edinburgh</li>
                      <li>West Lothian</li>
                      <li>Fife</li>
                      <li>Glasgow</li>
                      <li>Falkirk</li>
                      <li>Central Scotland</li>
                    </ul>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="mb-10 pb-8 border-b border-white/10">
                  <h3 className="font-semibold mb-4 text-white">Contact Details</h3>
                  <div className="space-y-3 text-sm">
                    <a
                      href="mailto:info@bear-media.com"
                      className="flex items-center gap-3 text-white/70 hover:text-[#C9A227] transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    >
                      <Mail className="w-4 h-4" />
                      <span>info@bear-media.com</span>
                    </a>
                    <a
                      href="tel:+447879011860"
                      className="flex items-center gap-3 text-white/70 hover:text-[#C9A227] transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+44 7879 011860</span>
                    </a>
                    <div className="flex items-center gap-3 text-white/70">
                      <MapPin className="w-4 h-4" />
                      <span>Broxburn, West Lothian, Scotland</span>
                    </div>
                  </div>
                </div>

                {/* Memberships & Affiliations */}
                <div className="mb-10 pb-8 border-b border-white/10">
                  <h3 className="font-semibold mb-4 text-white">Memberships & Affiliations</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: "Edinburgh City of Commerce", url: "#" },
                      { name: "West Lothian Chamber of Commerce", url: "#" },
                      { name: "BNI", url: "#" },
                      { name: "Andy's Man's Club", url: "#" },
                    ].map((org) => (
                      <a
                        key={org.name}
                        href={org.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/5 rounded-xl p-4 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center h-20"
                      >
                        <span className="text-xs text-center text-white/60">{org.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Follow Us */}
                <div>
                  <h3 className="font-semibold mb-4 text-white">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.tiktok.com/@bearmedia70"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C9A227] hover:scale-110 flex items-center justify-center transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      aria-label="TikTok"
                    >
                      <span className="text-sm">TT</span>
                    </a>
                    <a
                      href="https://www.instagram.com/bearmedia70"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C9A227] hover:scale-110 flex items-center justify-center transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      aria-label="Instagram"
                    >
                      <span className="text-sm">IG</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/bear-media"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C9A227] hover:scale-110 flex items-center justify-center transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      aria-label="LinkedIn"
                    >
                      <span className="text-sm">LI</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@bearmedia70"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C9A227] hover:scale-110 flex items-center justify-center transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      aria-label="YouTube"
                    >
                      <span className="text-sm">YT</span>
                    </a>
                    <a
                      href="https://www.facebook.com/bearmedia70"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C9A227] hover:scale-110 flex items-center justify-center transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      aria-label="Facebook"
                    >
                      <span className="text-sm">FB</span>
                    </a>
                  </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 pt-8 border-t border-white/10 text-center text-sm text-white/40">
                  <p>© 2025 Bear Media. All rights reserved.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Bar (Always Visible) */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-[#1C1C1C] text-white py-4 pb-[calc(1rem+env(safe-area-inset-bottom))] flex items-center justify-center gap-3 hover:bg-[#252525] transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
          whileHover={{ scale: 1.005 }}
          whileTap={{ scale: 0.995 }}
          transition={springConfig}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ChevronUp className="w-5 h-5 text-[#C9A227]" />
          </motion.div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Bear</span>
            <span className="font-semibold text-[#C9A227]">Media</span>
          </div>
          <span className="text-sm text-white/60">•</span>
          <span className="text-sm text-white/60">Websites & Social Media Content</span>
        </motion.button>
      </div>
    </>
  )
}
