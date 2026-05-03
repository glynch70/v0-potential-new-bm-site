import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Process from '@/components/sections/Process';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        {/* Hero / Header Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">Our Services</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            High-impact media and digital systems designed to drive real results for your business.
          </p>
        </section>

        {/* Core Solutions Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            
            {/* 1. Social Media Content Creation */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-yellow">Social Media Content Creation</h2>
                <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                  Stop the scroll and stay top-of-mind. We create high-impact vertical video (Reels/TikToks) designed specifically for local Scottish engagement.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white/80 font-medium"><span>⚡</span> Viral-style Vertical Video</li>
                  <li className="flex items-center gap-3 text-white/80 font-medium"><span>⚡</span> Engagement-focused Strategy</li>
                  <li className="flex items-center gap-3 text-white/80 font-medium"><span>⚡</span> Weekly Content Retainers</li>
                </ul>
              </div>
              <div className="aspect-video bg-neutral-900 rounded-2xl border border-white/10 flex items-center justify-center text-neutral-600">High-Impact Local Content in West Lothian</div>
            </div>

            {/* 2. Videography & Photography */}
            <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
              <div className="md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-yellow">Videography & Photography</h2>
                <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                  Look like the market leader. From cinematic property tours to professional on-site brand stills, we capture the premium side of your business.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white/80 font-medium"><span>📸</span> Cinematic Drone Tours</li>
                  <li className="flex items-center gap-3 text-white/80 font-medium"><span>📸</span> Professional Brand Stills</li>
                  <li className="flex items-center gap-3 text-white/80 font-medium"><span>📸</span> Project & Site Photography</li>
                </ul>
              </div>
              <div className="aspect-video bg-neutral-900 rounded-2xl border border-white/10 flex items-center justify-center text-neutral-600 md:order-1">High-Impact Local Content in West Lothian</div>
            </div>

            {/* 3. Website Design */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-yellow">Website Design</h2>
                <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                  Your 24/7 lead-generation system. We build fast, premium, and high-converting websites that turn local interest into paying customers.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white/80 font-medium"><span>💻</span> Conversion-Optimised Layouts</li>
                  <li className="flex items-center gap-3 text-white/80 font-medium"><span>💻</span> Fast, Mobile-First Build</li>
                  <li className="flex items-center gap-3 text-white/80 font-medium"><span>💻</span> Local SEO Integration</li>
                </ul>
              </div>
              <div className="aspect-video bg-neutral-900 rounded-2xl border border-white/10 flex items-center justify-center text-neutral-600">High-Impact Local Content in West Lothian</div>
            </div>

            {/* 4. AI Automation */}
            <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
              <div className="md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-yellow">AI Automation</h2>
                <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                  Recover 10+ hours a week. We implement smart systems to handle your enquiries and email sorting so you can focus on the work.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white/80 font-medium"><span>🤖</span> Automated Enquiry Sorting</li>
                  <li className="flex items-center gap-3 text-white/80 font-medium"><span>🤖</span> CRM & Lead Management</li>
                  <li className="flex items-center gap-3 text-white/80 font-medium"><span>🤖</span> Time-Recovery Workflows</li>
                </ul>
              </div>
              <div className="aspect-video bg-neutral-900 rounded-2xl border border-white/10 flex items-center justify-center text-neutral-600 md:order-1">High-Impact Local Content in West Lothian</div>
            </div>

          </div>
        </section>

        <section className="py-20">
          <Process />
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 text-center">
          <Link href="/contact" className="bg-brand-yellow text-neutral-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
            Book a Discovery Call
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
