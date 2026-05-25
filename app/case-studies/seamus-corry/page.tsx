import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export const metadata: Metadata = {
  title: 'Seamus Corry Case Study | Personal Branding | Bear Media',
  description: 'How we helped Seamus Corry build long-term authority through a consistent content strategy, generating over 11,000 views and 350+ shares.',
};

export default function SeamusCorryCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950 pt-24 md:pt-32">
        <article className="max-w-5xl mx-auto px-6 pb-24">
          
          <header className="mb-12">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-white/85 hover:text-gold transition-colors text-sm font-bold uppercase tracking-widest mb-8">
              <ArrowLeft size={16} /> Back to Proof Pages
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 text-gold font-black uppercase tracking-widest text-[13px] md:text-sm rounded-full mb-4 mr-3">
                  Personal Brand / Coaching
                </span>
                <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-full mb-4">
                  Edinburgh
                </span>
                <h1 className="text-4xl md:text-7xl font-black italic uppercase font-bebas leading-[0.9] text-white">
                  Seamus <span className="text-gold">Corry</span>
                </h1>
              </div>
              <div className="flex flex-col gap-2 bg-neutral-900 border border-white/10 p-4 rounded-xl">
                 <p className="text-white/85 text-[13px] md:text-sm font-black uppercase tracking-widest">Key Result</p>
                 <p className="text-gold text-3xl font-black font-bebas">117+ Videos Published</p>
              </div>
            </div>
          </header>

          <section className="aspect-video relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl mb-16 bg-neutral-900">
            <Image 
              src="/work/seamus_v5_final.jpg" 
              alt="Seamus Corry Video Content" 
              fill 
              className="object-cover opacity-80 hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-60 pointer-events-none" />
          </section>

          <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
            <div className="md:col-span-2 space-y-12">
              
              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Problem</h2>
                <p className="text-white/90 italic leading-relaxed text-lg">
                  Seamus Corry had the industry knowledge and a powerful personal message, but he needed a consistent, professional way to distribute that message at scale. Without a dedicated content system, it was difficult to build long-term authority and stay top-of-mind with his audience across Scotland.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Process</h2>
                <p className="text-white/90 italic leading-relaxed text-lg mb-4">
                  We designed a high-volume, high-quality content strategy specifically tailored for personal branding. 
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/80 italic text-lg mb-4">
                  <li>We implemented a structured batch-filming process to maximize his time.</li>
                  <li>We handled all post-production, adding professional captions, pacing, and branding.</li>
                  <li>We optimized the distribution strategy to ensure his content reached the right demographic consistently.</li>
                </ul>
              </section>
              
              <section className="bg-gold/10 border border-gold/20 rounded-3xl p-8">
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-gold mb-6">The Results</h2>
                <div className="grid grid-cols-3 gap-4 mb-6">
                   <div>
                      <p className="text-white/85 font-bold uppercase text-[13px] md:text-sm tracking-widest mb-1">Videos</p>
                      <p className="text-4xl font-black font-bebas text-white">117+</p>
                   </div>
                   <div>
                      <p className="text-white/85 font-bold uppercase text-[13px] md:text-sm tracking-widest mb-1">Views</p>
                      <p className="text-4xl font-black font-bebas text-white">11,000+</p>
                   </div>
                   <div>
                      <p className="text-white/85 font-bold uppercase text-[13px] md:text-sm tracking-widest mb-1">Shares</p>
                      <p className="text-4xl font-black font-bebas text-white">350+</p>
                   </div>
                </div>
                <p className="text-white/80 italic leading-relaxed text-lg font-medium">
                  Seamus has successfully cemented his authority online. The consistent output has not only grown his audience metrics but has fundamentally shifted how he is perceived by potential clients, leading to a stronger pipeline of premium coaching enquiries.
                </p>
              </section>

              <section className="bg-neutral-900 border border-white/5 rounded-3xl p-8 italic relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none" />
                 <p className="text-white/90 text-xl font-medium leading-relaxed mb-6">
                   "The consistency is what sets Bear Media apart. I turn up, we film, and they handle the rest. It's completely removed the stress of trying to run my own social media."
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center font-black font-bebas text-xl">SC</div>
                    <div>
                       <p className="font-bold text-white uppercase text-sm tracking-widest">Seamus Corry</p>
                       <p className="text-gold text-xs">Founder</p>
                    </div>
                 </div>
              </section>

            </div>

            <div className="space-y-8">
               <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
                 <h3 className="text-xl font-black italic uppercase font-bebas text-gold mb-6">Services Delivered</h3>
                 <ul className="space-y-4">
                   {["Personal Branding", "Content Strategy", "Video Production", "Social Media Management"].map((service, i) => (
                     <li key={i} className="flex items-center gap-3">
                       <CheckCircle2 size={16} className="text-gold" />
                       <span className="text-white/80 font-bold text-sm tracking-wide">{service}</span>
                     </li>
                   ))}
                 </ul>
                 <div className="mt-8 pt-8 border-t border-white/5">
                    <Link href="/social-media-for-construction" className="text-white hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                       View Content Services <ArrowRight size={14} />
                    </Link>
                 </div>
               </div>
               
               <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
                 <h3 className="text-xl font-black italic uppercase font-bebas text-white mb-6">Ready for similar results?</h3>
                 <p className="text-white/90 text-sm italic mb-6">We help professionals across Scotland dominate their local area.</p>
                 <Link href="/contact" className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-neutral-950 font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-transform">
                    Book a Discovery Call
                 </Link>
               </div>
            </div>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
