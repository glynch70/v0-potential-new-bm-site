import React from 'react'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Séamus Corry Rebrand | Luxury Coaching & Brand Identity | Bear Media',
  description: 'The finalized editorial brand redesign, high-converting digital showroom and core typography identity for Séamus Corry.',
}

export default function SeamusCorryCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0e0c] text-[#E8E0D5] font-inter-tight selection:bg-[#D2A214] selection:text-[#0f0e0c] pt-24 md:pt-32">
        <article className="max-w-5xl mx-auto px-6 pb-24">
          
          <header className="mb-12">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/50 hover:text-[#D2A214] transition-colors text-[10px] font-bold uppercase tracking-widest mb-8">
              <ArrowLeft size={12} /> Back to Portfolio
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="inline-block px-3 py-1 bg-[#D2A214]/15 border border-[#D2A214]/30 text-[#D2A214] font-bold uppercase tracking-widest text-[9px] rounded-sm mb-4 mr-3">
                  LIVE WORK
                </span>
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-white/60 font-bold uppercase tracking-widest text-[9px] rounded-sm mb-4">
                  Personal Brand / Luxury Coaching
                </span>
                <h1 className="text-4xl md:text-7xl font-bebas text-white tracking-wide leading-none uppercase">
                  Séamus <span className="text-[#D2A214]">Corry</span>
                </h1>
              </div>
              <a 
                href="https://seamus-corry-rebrand.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D2A214] text-[#0f0e0c] font-bold uppercase tracking-widest text-[9px] rounded-sm hover:scale-102 transition-transform shadow-md font-inter-tight"
              >
                Launch Showroom <ExternalLink size={12} />
              </a>
            </div>
          </header>

          <section className="aspect-video relative rounded-sm overflow-hidden border border-white/5 shadow-xl mb-16 bg-[#171513] group">
            <Image 
              src="/BEST FINAL CLIENT WORK/seamus rebrand.jpg" 
              alt="Séamus Corry Website Redesign" 
              fill 
              priority
              className="object-cover opacity-75 filter contrast-[1.05] group-hover:scale-[1.01] transition-transform duration-[2.5s] ease-out" 
            />
            <div className="absolute inset-0 bg-[#0f0e0c]/30 pointer-events-none" />
          </section>

          <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-bebas tracking-wide text-white mb-4 uppercase">The Scope</h2>
                <p className="text-[#E8E0D5]/70 font-light leading-relaxed text-base md:text-lg mb-4">
                  We engineered a comprehensive, responsive brand redesign and bespoke client capture platform for mental health and executive coach Séamus Corry. 
                </p>
                <p className="text-[#E8E0D5]/70 font-light leading-relaxed text-base md:text-lg">
                  Leveraging high-end editorial typography, smooth scrolling parallax animations, and absolute speed, the digital showroom is optimized to establish authority and gather direct booking queries.
                </p>
              </section>
            </div>

            <div className="bg-[#171513]/40 rounded-sm p-8 border border-white/5 h-fit">
              <h3 className="text-xl font-bebas tracking-wide text-[#D2A214] mb-6 uppercase">Executed Systems</h3>
              <ul className="space-y-4">
                {["Website Redesign", "Personal Branding", "Content Strategy", "Performance Optimization"].map((service, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-[#D2A214] shrink-0" />
                    <span className="text-white/80 font-light text-xs tracking-wide">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </article>
      </main>
      <Footer />
    </>
  )
}
