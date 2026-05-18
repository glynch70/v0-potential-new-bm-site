import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Almond Vet Care | Healthcare Website Design | Bear Media',
  description: 'A premium website design, SEO, and branding project for Almond Vet Care, a professional veterinary practice in Scotland.',
};

export default function AlmondVetCareCaseStudy() {
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
                  Healthcare / Veterinary
                </span>
                <h1 className="text-4xl md:text-7xl font-black italic uppercase font-bebas leading-[0.9] text-white">
                  Almond Vet <span className="text-brand-yellow">Care</span>
                </h1>
              </div>
              <a 
                href="https://almondvetcare.co.uk/" 
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
              src="/work/almond_vet_care.jpg" 
              alt="Almond Vet Care Website Mockup" 
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
                  Almond Vet Care required a modern, professional, and compassionate digital presence. We designed and developed a bespoke <Link href="/web-design" className="text-brand-yellow hover:underline">website design</Link> tailored to the veterinary industry, ensuring pet owners could easily find critical information and book appointments.
                </p>
                <p className="text-white/70 italic leading-relaxed text-lg">
                  Beyond just web design, we built their foundational SEO structure and developed a branding identity that communicates trust, care, and local authority.
                </p>
              </section>
              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Outcome</h2>
                <p className="text-white/70 italic leading-relaxed text-lg">
                  A high-performance, SEO-optimized website that ranks well locally and provides a seamless user experience. Coupled with strong branding and tailored content creation, Almond Vet Care stands out as a premium choice for pet owners across the region.
                </p>
              </section>
            </div>

            <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
              <h3 className="text-xl font-black italic uppercase font-bebas text-brand-yellow mb-6">Services Provided</h3>
              <ul className="space-y-4">
                {["Website Design", "SEO", "Content Creation", "Branding"].map((service, i) => (
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
