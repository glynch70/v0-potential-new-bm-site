import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Voice2Lead | Leadership Coaching Website | Bear Media',
  description: 'A premium website design and professional branding project for Voice2Lead, a top-tier leadership coaching platform.',
};

export default function Voice2LeadCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950 pt-24 md:pt-32">
        <article className="max-w-5xl mx-auto px-6 pb-24">
          
          <header className="mb-12">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-yellow transition-colors text-sm font-bold uppercase tracking-widest mb-8">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="inline-block px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow font-black uppercase tracking-widest text-[10px] rounded-full mb-4">
                  Leadership / Coaching
                </span>
                <h1 className="text-4xl md:text-7xl font-black italic uppercase font-bebas leading-[0.9] text-white">
                  Voice2<span className="text-brand-yellow">Lead</span>
                </h1>
              </div>
              <a 
                href="https://www.voice2lead.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-transform shadow-xl"
              >
                Visit Live Website <ExternalLink size={14} />
              </a>
            </div>
          </header>

          <section className="aspect-video relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl mb-16 bg-neutral-900 group">
            <Image 
              src="/work/mwm.jpg" 
              alt="Voice2Lead Website Mockup" 
              fill 
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-60 pointer-events-none" />
          </section>

          <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Project</h2>
                <p className="text-white/70 italic leading-relaxed text-lg mb-4">
                  Voice2Lead empowers professionals through high-level leadership and communication coaching. They needed a clean, authoritative <Link href="/web-design" className="text-brand-yellow hover:underline">website design</Link> that could immediately capture trust from corporate clients and executives.
                </p>
                <p className="text-white/70 italic leading-relaxed text-lg">
                  We focused heavily on professional branding and digital presence to ensure their platform matched the caliber of their coaching services.
                </p>
              </section>
              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Outcome</h2>
                <p className="text-white/70 italic leading-relaxed text-lg">
                  The final result is a streamlined, conversion-focused website that makes it simple for potential clients to understand the value proposition and seamlessly book consultations. The site establishes Voice2Lead as an unquestionable industry authority.
                </p>
              </section>
            </div>

            <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
              <h3 className="text-xl font-black italic uppercase font-bebas text-brand-yellow mb-6">Services Provided</h3>
              <ul className="space-y-4">
                {["Website Design", "Professional Branding", "Digital Presence"].map((service, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-yellow" />
                    <span className="text-white/80 font-bold text-sm tracking-wide">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </article>

        <section className="py-20 px-6 text-center relative overflow-hidden bg-brand-yellow text-neutral-950 mt-12">
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="mb-6 text-neutral-950 text-4xl md:text-5xl font-black italic uppercase font-bebas leading-tight">
                 Want A Similar Result For Your Business?
              </h2>
              <p className="text-neutral-950/70 font-bold italic mb-10 max-w-lg mx-auto">
                 Let’s discuss how we can elevate your digital presence and drive more enquiries.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-2xl"
              >
                Start Your Project <ArrowRight size={14} />
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
