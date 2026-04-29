'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SalesHero from '@/components/sections/SalesHero'
import GrowthSection from '@/components/sections/GrowthSection'
import ProblemSection from '@/components/sections/ProblemSection'
import VisibilityLeadsSystem from '@/components/sections/VisibilityLeadsSystem'
import VideoGrid from '@/components/sections/VideoGrid'
import ServiceFeatures from '@/components/sections/ServiceFeatures'
import { FeaturedWorkSection } from '@/components/sections/FeaturedWorkSection'
import Process from '@/components/sections/Process'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import About from '@/components/sections/About'
import FAQSection from '@/components/sections/FAQSection'
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


      {/* 3. PROBLEM SECTION */}
      <ProblemSection />

      {/* 4. SOLUTION (CORE OFFER) */}
      <VisibilityLeadsSystem />

      {/* 5. VIDEO GRID (PROOF IN ACTION) */}
      <VideoGrid />

      {/* 6. SERVICE FEATURES (BULLET POINTS) */}
      <ServiceFeatures />

      {/* 6. GROWTH SECTION */}
      <GrowthSection />
 
      {/* 7. WEBSITES SECTION (GALLERY) */}
      <FeaturedWorkSection />
      
      {/* 8. HOW IT WORKS */}
      <Process />

      {/* 9. TESTIMONIALS */}
      <TestimonialsSection />
      
      {/* 10. ABOUT GARRY */}
      <About />

      {/* 11. FAQ SECTION */}
      <FAQSection />
      
      {/* 12. STRONG CTA & CONTACT FORM */}
      <LeadForm />
      
      <Footer />
    </main>
  )
}
