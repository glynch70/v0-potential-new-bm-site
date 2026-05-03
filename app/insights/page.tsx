import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights & Growth Blog | Bear Media',
  description: 'Expert advice on content creation, social media strategy, and lead generation for local businesses in Scotland. Read our latest insights and growth guides.',
};

const articles = [
  {
    title: "How Much Does Social Media Content Cost in Scotland?",
    desc: "A transparent guide to content pricing, budget expectations, and the ROI of professional videography in the Central Belt.",
    link: "/answers/how-much-does-social-media-content-cost-scotland",
    tag: "Pricing",
    readTime: "5 min"
  },
  {
    title: "Why Your Business Isn’t Getting Enquiries Online",
    desc: "We break down the 3 most common reasons why local websites fail to convert visitors into paying customers.",
    link: "/answers/why-your-business-isnt-getting-enquiries",
    tag: "Strategy",
    readTime: "4 min"
  },
  {
    title: "Do Estate Agents Need Video Content?",
    desc: "How independent estate agents in Edinburgh and West Lothian are using cinematic video to win more listings.",
    link: "/answers/do-estate-agents-need-video",
    tag: "Real Estate",
    readTime: "6 min"
  }
];

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden border-b border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-6 text-sm">Real Talk. Real Strategy.</p>
            <h1 className="text-5xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas">
               Bear <span className="text-brand-yellow underline decoration-brand-yellow/20 underline-offset-8">Insights.</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed italic">
               Helping local businesses in Scotland dominate their market through better content and smarter strategy.
            </p>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
           <div className="grid md:grid-cols-3 gap-8">
              {articles.map((article, i) => (
                 <Link key={i} href={article.link} className="group">
                    <div className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5 group-hover:border-brand-yellow/30 transition-all duration-500 h-full flex flex-col">
                       <div className="flex justify-between items-center mb-8">
                          <span className="px-4 py-1.5 rounded-full bg-brand-yellow/10 text-brand-yellow text-[10px] font-black uppercase tracking-widest border border-brand-yellow/20">
                             {article.tag}
                          </span>
                          <div className="flex items-center gap-2 text-white/20 text-[10px] font-bold uppercase tracking-widest">
                             <Clock size={12} /> {article.readTime}
                          </div>
                       </div>
                       <h3 className="text-2xl font-black mb-6 uppercase italic font-bebas tracking-wide text-white group-hover:text-brand-yellow transition-colors leading-tight">
                          {article.title}
                       </h3>
                       <p className="text-white/40 text-sm leading-relaxed mb-12 flex-grow italic">
                          "{article.desc}"
                       </p>
                       <div className="flex items-center gap-2 text-white font-black uppercase italic font-bebas tracking-widest text-lg group-hover:gap-4 transition-all">
                          Read Article <ArrowRight size={20} className="text-brand-yellow" />
                       </div>
                    </div>
                 </Link>
              ))}
           </div>
        </section>

        {/* NEWSLETTER / CTA */}
        <section className="py-24 px-6 bg-brand-yellow text-neutral-950 text-center">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase italic font-bebas tracking-tight leading-none">
                 Get Growth <br /><span className="underline decoration-neutral-950/20 underline-offset-8">Sent to Your Inbox.</span>
              </h2>
              <p className="text-lg font-medium mb-12 text-neutral-950/70">
                 Join 200+ local business owners who get our no-fluff growth tips every month.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-neutral-950 text-white font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300"
              >
                Book Your Discovery Call
                <ArrowRight size={16} />
              </Link>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
