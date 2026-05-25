'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Star, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const cinematicEase = [0.16, 1, 0.3, 1]

const testimonials = [
  {
    name: "Gary Young",
    business: "K Lewis Joinery",
    quote: "Garry stripped away all the usual agency nonsense. Our new site is fast, looks exactly how we wanted, and we started getting quote requests within the first week. The drone footage of our recent extension build made all the difference.",
  },
  {
    name: "Leanne Murphy",
    business: "Robertson Transport",
    quote: "We needed a website that showed we handle serious logistics, not just local van runs. Bear Media delivered exactly that. Our new site ranks better locally and makes us look like the professional outfit we are.",
  },
  {
    name: "Seamus Corry",
    business: "Herb & Soul",
    quote: "The ecommerce site looks stunning and the social media growth has been mental. We've seen a massive jump in both online orders and footfall to the shop since Garry took over our content.",
  },
  {
    name: "Stephen Johnstone",
    business: "Almond Vet Care",
    quote: "Our old site was impossible to update and didn't reflect our modern practice. The new website is clean, easy for pet owners to navigate, and the whole process was completely painless. Highly recommend Garry.",
  },
  {
    name: "Steven Summon",
    business: "Glens Pharmacies",
    quote: "Garry understands how local businesses actually work. He didn't just build a website; he helped us clarify our messaging and services. We've seen a noticeable increase in community engagement as a result.",
  }
];

const metrics = [
  {
    icon: TrendingUp,
    value: "50%+",
    label: "More Website Visits",
    timeframe: "In the first 3 months"
  },
  {
    icon: Users,
    value: "3x",
    label: "Social Engagement",
    timeframe: "Average client growth"
  },
  {
    icon: Clock,
    value: "14 Days",
    label: "Launch Time",
    timeframe: "From brief to live website"
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0e0c] text-[#E8E0D5] font-inter-tight selection:bg-[#F1B92D] selection:text-[#0f0e0c] overflow-hidden">
        
        {/* 1. HERO SECTION (DARK CINEMATIC) */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden py-32 border-b border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F1B92D]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="w-full px-6 text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
              className="text-[#F1B92D] font-bold uppercase tracking-[0.4em] text-[12px] md:text-[13px] mb-8"
            >
              Real Client Outcomes
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.2, ease: cinematicEase }}
              className="font-bebas text-white tracking-wide mb-12 leading-[0.95] uppercase"
            >
              TRUSTED BY <br/>
              <span className="text-white/20">LOCAL LEADERS.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="max-w-2xl mx-auto text-[#E8E0D5]/60 font-light text-lg md:text-xl leading-relaxed tracking-wide"
            >
              We don't do corporate waffle or vanity metrics. We build fast websites and create scroll-stopping content that actually brings in enquiries. Here's what happens when local businesses choose Bear Media.
            </motion.p>
          </div>
        </section>

        {/* 2. METRICS (DARK CINEMATIC) */}
        <section className="py-24 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {metrics.map((metric, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#171513]/40 border border-white/5 flex items-center justify-center mb-6">
                    <metric.icon className="w-8 h-8 text-[#F1B92D]" />
                  </div>
                  <h3 className="text-6xl font-bebas text-white mb-2">{metric.value}</h3>
                  <p className="text-lg font-bold text-[#E8E0D5] mb-1">{metric.label}</p>
                  <p className="text-sm text-[#E8E0D5]/60 font-medium">{metric.timeframe}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TESTIMONIALS GRID (DARK CINEMATIC) */}
        <section className="py-40 px-6 bg-[#0f0e0c] relative z-10 border-b border-white/5">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/5 pointer-events-none z-0" />

          <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
            <div className="text-center mb-24">
              <p className="text-[#F1B92D] font-bold uppercase tracking-[0.3em] text-[12px] md:text-[13px] mb-4">Direct Feedback</p>
              <h2 className="font-bebas text-white tracking-wide leading-[0.9] uppercase">WHAT OUR CLIENTS SAY.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.15, ease: cinematicEase }}
                  className="bg-[#171513]/40 backdrop-blur-xl p-12 border border-white/5 shadow-sm rounded-sm hover:border-[#F1B92D]/20 transition-all group flex flex-col justify-between"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F1B92D] text-[#F1B92D]" />
                    ))}
                  </div>

                  <blockquote className="text-sm text-[#E8E0D5]/90 leading-relaxed font-light mb-12 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="pt-6 border-t border-white/5">
                    <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">{testimonial.name}</h4>
                    <p className="text-[12px] md:text-[13px] font-bold text-[#F1B92D] uppercase tracking-widest">{testimonial.business}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CALL TO ACTION (DARK CINEMATIC) */}
        <section className="py-48 px-6 bg-[#0a0908] text-[#E8E0D5] relative z-10 border-t border-white/5 text-center flex items-center justify-center overflow-hidden">
          <div className="absolute inset-y-0 left-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />
          <div className="absolute inset-y-0 right-[10%] w-[1px] bg-white/[0.02] pointer-events-none z-0" />

          <div className="w-full px-6 relative z-10 flex flex-col items-center">
            <p className="text-[#F1B92D] font-bold uppercase tracking-[0.4em] text-[12px] md:text-[13px] mb-8 font-inter-tight">Scale Your Inbound Leads</p>
            <h2 className="font-bebas text-[#E8E0D5] leading-[0.9] mb-12">
              READY TO BE OUR <br/><span className="text-[#E8E0D5]/25">NEXT SUCCESS STORY?</span>
            </h2>
            <Link
              href="/contact"
              className="relative px-12 py-6 bg-transparent border border-[#E8E0D5]/15 text-[#E8E0D5] font-bold uppercase tracking-[0.25em] text-[12px] md:text-[13px] rounded-sm overflow-hidden group/btn hover:border-[#F1B92D] transition-colors duration-500 inline-block font-inter-tight"
            >
              <div className="absolute inset-0 bg-[#F1B92D] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover/btn:text-[#0f0e0c] transition-colors duration-500">Book Your Discovery Call</span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
