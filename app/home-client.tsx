'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { TrustedBySection } from '@/components/sections/TrustedBySection'
import StatementStrip from '@/components/sections/StatementStrip'
import ServicesGrid from '@/components/sections/ServicesGrid'
import Process from '@/components/sections/Process'
import Portfolio from '@/components/sections/Portfolio'
import YouTube from '@/components/sections/YouTube'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Packages from '@/components/sections/Packages'
import Contact from '@/components/sections/Contact'
import { WhoIWorkWithSection } from '@/components/sections/WhoIWorkWithSection'
import BTSSection from '@/components/sections/BTSSection'

export default function Home() {
  return (
    <main className="bg-dark min-h-screen text-white">
      <Navbar />
      
      {/* 🦸 SECTION 1 — Hero */}
      <HeroSection />
      
      {/* 📣 SECTION 2 — Statement Strip */}
      <StatementStrip />
      
      {/* 🛠️ SECTION 3 — What Bear Media Does */}
      <ServicesGrid />

      {/* 👥 SECTION 4 — Who I Work With Carousel */}
      <WhoIWorkWithSection />

      {/* 🤝 SECTION 5 — Trusted By */}
      <TrustedBySection />
      
      {/* ⚙️ SECTION 6 — How It Works */}
      <Process />
      
      {/* 👷 SECTION 6.5 — Meet Garry / BTS */}
      <BTSSection />
      
      {/* 🗂️ SECTION 7 — Portfolio */}
      <Portfolio />
      
      {/* 📺 SECTION 8 — YouTube */}
      <YouTube />
      
      {/* ⭐ SECTION 9 — Testimonials Flip Cards */}
      <Testimonials />
      
      {/* 👤 SECTION 10 — About Garry */}
      <About />
      
      {/* 📦 SECTION 11 — Packages */}
      <Packages />
      
      {/* 📬 SECTION 12 — Contact */}
      <Contact />
      
      <Footer />
    </main>
  )
}
