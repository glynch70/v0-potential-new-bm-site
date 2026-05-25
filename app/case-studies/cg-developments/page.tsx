import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export const metadata: Metadata = {
  title: 'C&G Developments Case Study | Bear Media',
  description: 'How we helped C&G Developments, a local construction company, generate 129K+ views and consistent enquiries through strategic video content.',
};

export default function CGDevelopmentsCaseStudy() {
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
                  Construction
                </span>
                <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-full mb-4">
                  West Lothian
                </span>
                <h1 className="text-4xl md:text-7xl font-black italic uppercase font-bebas leading-[0.9] text-white">
                  C&G <span className="text-gold">Developments</span>
                </h1>
              </div>
              <div className="flex flex-col gap-2 bg-neutral-900 border border-white/10 p-4 rounded-xl">
                 <p className="text-white/85 text-[13px] md:text-sm font-black uppercase tracking-widest">Key Result</p>
                 <p className="text-gold text-3xl font-black font-bebas">129,000+ Views</p>
              </div>
            </div>
          </header>

          <section className="aspect-video relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl mb-16 bg-neutral-900">
            <Image 
              src="/work/C&G Work In Progress-Cover.jpg" 
              alt="C&G Developments Work In Progress" 
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
                  C&G Developments is a highly skilled local construction company doing incredible work, but they had absolutely no visible brand online. No faces, no professional content, and no digital presence. They were relying entirely on word-of-mouth and struggling to showcase the true quality of their extensions and builds to potential high-value clients.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-4">The Process</h2>
                <p className="text-white/90 italic leading-relaxed text-lg mb-4">
                  We stepped in as their dedicated content partner. We didn't just want to post pretty pictures; we wanted to build trust. 
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/80 italic text-lg mb-4">
                  <li>We implemented a consistent on-site filming schedule, capturing the real, gritty progress of their builds.</li>
                  <li>We put the team on camera, showcasing their expertise and approachability.</li>
                  <li>We utilized drone footage to give potential clients a massive, impressive perspective on their roofing and extension projects.</li>
                </ul>
              </section>
              
              <section className="bg-gold/10 border border-gold/20 rounded-3xl p-8">
                <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-gold mb-6">The Results</h2>
                <div className="grid grid-cols-2 gap-6 mb-6">
                   <div>
                      <p className="text-white/85 font-bold uppercase text-[13px] md:text-sm tracking-widest mb-1">Generated In 90 Days</p>
                      <p className="text-4xl font-black font-bebas text-white">129,000+ Views</p>
                   </div>
                   <div>
                      <p className="text-white/85 font-bold uppercase text-[13px] md:text-sm tracking-widest mb-1">Local Engagements</p>
                      <p className="text-4xl font-black font-bebas text-white">9,900+</p>
                   </div>
                </div>
                <p className="text-white/80 italic leading-relaxed text-lg font-medium">
                  By building a powerful local presence, their social channels became active hubs of engagement. They are now highly visible, entirely trusted, and generating a massive spike in real enquiries for high-value extensions and builds.
                </p>
              </section>

              <section>
                 <h2 className="text-2xl md:text-3xl font-black italic uppercase font-bebas text-white mb-6">Featured Content</h2>
                 <div className="rounded-3xl overflow-hidden border border-white/10">
                    <YouTubeEmbed videoId="TVxtsn0IP6U" title="Extension Build" label="Construction" />
                 </div>
              </section>

              <section className="bg-neutral-900 border border-white/5 rounded-3xl p-8 italic relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none" />
                 <p className="text-white/90 text-xl font-medium leading-relaxed mb-6">
                   "Bear Media completely changed how we look online. The videos are top class and the phone hasn't stopped ringing since we started putting them out. Best investment we've made."
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center font-black font-bebas text-xl">C&G</div>
                    <div>
                       <p className="font-bold text-white uppercase text-sm tracking-widest">Director</p>
                       <p className="text-gold text-xs">C&G Developments</p>
                    </div>
                 </div>
              </section>

            </div>

            <div className="space-y-8">
               <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
                 <h3 className="text-xl font-black italic uppercase font-bebas text-gold mb-6">Services Delivered</h3>
                 <ul className="space-y-4">
                   {["Video Production", "Social Media Management", "Drone Videography", "Lead Generation"].map((service, i) => (
                     <li key={i} className="flex items-center gap-3">
                       <CheckCircle2 size={16} className="text-gold" />
                       <span className="text-white/80 font-bold text-sm tracking-wide">{service}</span>
                     </li>
                   ))}
                 </ul>
                 <div className="mt-8 pt-8 border-t border-white/5">
                    <Link href="/social-media-for-construction" className="text-white hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                       View Construction Services <ArrowRight size={14} />
                    </Link>
                 </div>
               </div>
               
               <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
                 <h3 className="text-xl font-black italic uppercase font-bebas text-white mb-6">Ready for similar results?</h3>
                 <p className="text-white/90 text-sm italic mb-6">We help construction firms across Scotland dominate their local area.</p>
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
