'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SalesHero from '@/components/sections/SalesHero'
import ProblemSection from '@/components/sections/ProblemSection'
import VisibilityLeadsSystem from '@/components/sections/VisibilityLeadsSystem'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import Process from '@/components/sections/Process'
import About from '@/components/sections/About'
import LeadForm from '@/components/sections/LeadForm'
import { TrustedBySection } from '@/components/sections/TrustedBySection'

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <SalesHero />
      
      {/* Trusted By Section (Social Proof Ticker) */}
      <TrustedBySection />

      {/* 2. PROBLEM SECTION */}
      <ProblemSection />

      {/* 3. SOLUTION (CORE OFFER) */}
      <VisibilityLeadsSystem />

      {/* 4. CASE STUDIES */}
      <CaseStudiesSection />
      
      {/* 5. HOW IT WORKS */}
      <Process />
      
      {/* 6. ABOUT GARRY */}
      <About />
      
      {/* 7. STRONG CTA & 8. CONTACT FORM */}
      <LeadForm />
      
      <Footer />
    </main>
  )
}
