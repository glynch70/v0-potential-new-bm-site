'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { TrustedBySection } from '@/components/sections/TrustedBySection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Services Section */}
      <ServicesGrid />

      {/* Latest Content Feed (Work) */}
      <Portfolio />
      
      {/* About Garry */}
      <About />
      
      {/* Contact Section */}
      <Contact />
      
      <Footer />
    </main>
  )
}
