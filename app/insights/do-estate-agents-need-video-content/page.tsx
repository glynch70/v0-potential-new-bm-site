import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Video, TrendingUp, Users, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Do Estate Agents Need Video Content? | Bear Media',
  description: 'Why cinematic video tours and social media authority are the competitive edge for independent estate agents in Edinburgh and West Lothian.',
};

export default function EstateAgentsArticle() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* HERO */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <Link href="/insights" className="text-brand-yellow font-black uppercase tracking-widest text-[10px] mb-8 inline-block hover:underline italic">← Back to Insights</Link>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas">
              Do Estate Agents <br />
              <span className="text-brand-yellow text-stroke-sm">Need Video Content?</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed italic max-w-2xl">
              The short answer is yes. The long answer is: without it, you're losing listings to agents who look more professional than you.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <article className="py-24 px-6 max-w-4xl mx-auto border-t border-white/5">
           <div className="prose prose-invert prose-brand max-w-none">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-wide text-white mb-8">The Competitive Edge</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-12">
                 In Edinburgh and West Lothian, the property market is crowded. Independent agents are constantly fighting against national corporate chains with huge marketing budgets. Video is the great equalizer. It allows you to build trust, showcase properties cinematically, and prove your local expertise in a way that static photos never will.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                 <div className="p-8 rounded-[2rem] bg-neutral-900 border border-white/5 text-center">
                    <Video size={32} className="mx-auto mb-4 text-brand-yellow" />
                    <h4 className="text-white font-black uppercase italic font-bebas tracking-widest text-sm mb-2">Cinematic Tours</h4>
                    <p className="text-white/40 text-xs">Premium visuals that win listings.</p>
                 </div>
                 <div className="p-8 rounded-[2rem] bg-neutral-900 border border-white/5 text-center">
                    <Users size={32} className="mx-auto mb-4 text-brand-yellow" />
                    <h4 className="text-white font-black uppercase italic font-bebas tracking-widest text-sm mb-2">Agent Authority</h4>
                    <p className="text-white/40 text-xs">Be the face of your area.</p>
                 </div>
                 <div className="p-8 rounded-[2rem] bg-neutral-900 border border-white/5 text-center">
                    <TrendingUp size={32} className="mx-auto mb-4 text-brand-yellow" />
                    <h4 className="text-white font-black uppercase italic font-bebas tracking-widest text-sm mb-2">Lead Gen</h4>
                    <p className="text-white/40 text-xs">Turn views into valuation calls.</p>
                 </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-wide text-white mb-8">Why Static Photos Aren't Enough</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                 Sellers aren't just looking for someone to list their home on Rightmove. They are looking for the agent who will provide the <span className="text-brand-yellow font-bold italic">best exposure</span>. When you walk into a valuation and show them a cinematic drone tour or a high-performance social media reel of your last sale, you instantly become the premium choice.
              </p>

              <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5 mb-16">
                 <h3 className="text-white font-black uppercase italic font-bebas tracking-widest text-xl mb-6 italic">The Results?</h3>
                 <ul className="space-y-4">
                    <li className="flex gap-3 items-center text-white/70">
                       <CheckCircle2 className="text-brand-yellow" size={18} /> Higher engagement on social channels.
                    </li>
                    <li className="flex gap-3 items-center text-white/70">
                       <CheckCircle2 className="text-brand-yellow" size={18} /> Increased trust with potential sellers.
                    </li>
                    <li className="flex gap-3 items-center text-white/70">
                       <CheckCircle2 className="text-brand-yellow" size={18} /> Faster sales through better presentation.
                    </li>
                    <li className="flex gap-3 items-center text-white/70">
                       <CheckCircle2 className="text-brand-yellow" size={18} /> More high-value listings won against competitors.
                    </li>
                 </ul>
              </div>

              <h2 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-wide text-white mb-8">Your Local Edinburgh & West Lothian Partner</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-12">
                 At Bear Media, we specialize in supporting independent estate agents. We don't just "film houses"—we build your authority as a local expert. Our fast-turnaround editing ensures your listings go live with momentum.
              </p>

              <Link href="/industries/estate-agents" className="inline-flex items-center gap-4 px-12 py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(245,166,35,0.3)] group">
                 Our Agent's Competitive Edge <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
