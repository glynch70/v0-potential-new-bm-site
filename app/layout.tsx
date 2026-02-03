import { TubelightNavbar } from "@/components/ui/tubelight-navbar"

import Script from "next/script"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { LenisScrollProvider } from "@/components/LenisScrollProvider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bear Media",
  description: "Websites & Social Media Content",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RG6BZ50XZY"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RG6BZ50XZY', {
            anonymize_ip: true
          });
        `}
      </Script>
      <body className="font-sans antialiased">
        {/* Desktop Navbar */}
        <nav className="hidden sm:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-8 bg-white/10 border border-white/20 backdrop-blur-xl py-3 px-8 rounded-full shadow-2xl">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-lg">Bear</span>
              <span className="text-[#C9A227] font-bold text-lg">Media</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <a href="#home" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Home
              </a>
              <a href="#services" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Services
              </a>
              <a href="#work" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Work
              </a>
              <a href="#about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl">
            <a href="#home" className="relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-white/70 hover:text-white">
              <span>🏠</span>
            </a>
            <a href="#services" className="relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-white/70 hover:text-white">
              <span>⚡</span>
            </a>
            <a href="#work" className="relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-white/70 hover:text-white">
              <span>💼</span>
            </a>
            <a href="#about" className="relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-white/70 hover:text-white">
              <span>👥</span>
            </a>
            <a href="#contact" className="relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-white/70 hover:text-white">
              <span>✉️</span>
            </a>
          </div>
        </nav>

        <LenisScrollProvider>
          {children}
          <Analytics />
        </LenisScrollProvider>
      </body>
    </html>
  )
}
