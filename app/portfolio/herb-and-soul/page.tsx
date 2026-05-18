import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Herb & Soul | Wellness Website Design | Bear Media',
  description: 'An upcoming wellness website design and brand identity project for Herb & Soul.',
};

export default function HerbAndSoulCaseStudy() {
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
                <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-[10px] rounded-full mb-4 mr-3">
                  Coming Soon
                </span>
                <span className="inline-block px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow font-black uppercase tracking-widest text-[10px] rounded-full mb-4">
                  Wellness / Lifestyle
                </span>
                <h1 className="text-4xl md:text-7xl font-black italic uppercase font-bebas leading-[0.9] text-white">
                  Herb <span className="text-brand-yellow">& Soul</span>
                </h1>
              </div>
              <a 
                href="https://v0-herb-and-soul-website-main.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-transform shadow-xl"
              >
                View Preview <ExternalLink size={14} />
              </a>
            </div>
          </header>

          <section className="aspect-video relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl mb-16 bg-neutral-900 group">
            <Image 
              src="/work/website-3-herb-soul-v2.jpg" 
              alt="Herb & Soul Website Mockup" 
              fill 
              className="object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-80 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="px-8 py-4 bg-neutral-950/80 backdrop-blur-md rounded-2xl border border-white/10">
                  <h2 className="text-3xl font-black italic uppercase font-bebas text-brand-yellow tracking-widest">Project In Progress</h2>
               </div>
            </div>
          </section>

          <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Project</h2>
                <p className="text-white/70 italic leading-relaxed text-lg mb-4">
                  Herb & Soul is a premium wellness and lifestyle brand. We are currently developing a beautiful, immersive <Link href="/web-design" className="text-brand-yellow hover:underline">e-commerce and booking platform</Link> that perfectly aligns with their natural and holistic creative direction.
                </p>
                <p className="text-white/70 italic leading-relaxed text-lg">
                  Full case study details and performance metrics will be published once the site goes live.
                </p>
              </section>
            </div>

            <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
              <h3 className="text-xl font-black italic uppercase font-bebas text-brand-yellow mb-6">Services Provided</h3>
              <ul className="space-y-4">
                {["Website Design", "Brand Identity", "Creative Direction"].map((service, i) => (
                  <li key={i} className="flex items-center gap-3 opacity-60">
                    <CheckCircle2 size={16} className="text-brand-yellow" />
                    <span className="text-white/80 font-bold text-sm tracking-wide">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
