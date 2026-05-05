import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, Clock, Tag, Play } from 'lucide-react';
import Link from 'next/link';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export const metadata: Metadata = {
  title: 'Insights & Growth Blog | Bear Media',
  description: 'Expert advice on content creation, social media strategy, and lead generation for local businesses in Scotland. Read our latest insights and growth guides.',
};

const articles = [
  {
    title: "How Much Does Social Media Content Cost in Scotland?",
    desc: "A transparent guide to content pricing, budget expectations, and the ROI of professional videography.",
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
    title: "Is Social Media Worth It for Small Businesses?",
    desc: "The hard truth about organic reach and why strategy beats 'posting' every single time.",
    link: "/answers/is-social-media-worth-it",
    tag: "ROI",
    readTime: "6 min"
  },
  {
    title: "What Does a Content Creator Actually Do?",
    desc: "It's more than just taking photos. How a growth partner transforms your business authority.",
    link: "/answers/what-does-a-content-creator-do",
    tag: "Guide",
    readTime: "5 min"
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
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic">Real Talk. No Fluff.</p>
            <h1 className="mb-6 md:mb-8">
                Bear <span className="text-brand-yellow">Insights.</span>
            </h1>
            <p className="text-white max-w-xl mx-auto font-medium italic text-sm">
                Helping local businesses in Scotland dominate their market through better content and smarter strategy.
            </p>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, i) => (
                 <Link key={i} href={article.link} className="group">
                    <div className="p-8 rounded-[2rem] bg-neutral-900 border border-white/5 group-hover:border-brand-yellow/30 transition-all duration-500 h-full flex flex-col">
                       <div className="flex justify-between items-center mb-6">
                          <span className="px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-[8px] font-black uppercase tracking-widest border border-brand-yellow/20">
                             {article.tag}
                          </span>
                          <div className="flex items-center gap-2 text-white text-[9px] font-bold uppercase tracking-widest">
                             <Clock size={10} /> {article.readTime}
                          </div>
                       </div>
                       <h3 className="text-xl font-black mb-4 uppercase italic font-bebas tracking-wide text-white group-hover:text-brand-yellow transition-colors leading-tight">
                          {article.title}
                       </h3>
                       <p className="text-white text-xs leading-relaxed mb-8 flex-grow italic">
                          "{article.desc}"
                       </p>
                       <div className="flex items-center gap-2 text-white font-black uppercase italic font-bebas tracking-widest text-[10px] group-hover:gap-3 transition-all">
                          Read Article <ArrowRight size={12} className="text-brand-yellow" />
                       </div>
                    </div>
                 </Link>
              ))}
           </div>
        </section>

        {/* WATCH INSTEAD SECTION */}
        <section className="py-12 md:py-20 px-6 bg-white/[0.01] border-y border-white/5">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center md:text-left">
                 <div>
                    <span className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-3 text-[10px] block italic">Prefer Video?</span>
                    <h2 className="text-white uppercase italic font-bebas tracking-tight">
                       Watch the <span className="text-brand-yellow">Breakdowns.</span>
                    </h2>
                 </div>
                 <div className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[8px]">
                    <Play size={14} className="text-brand-yellow" />
                    Real project walkthroughs
                 </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                 <YouTubeEmbed 
                    videoId="VlyX1CueJCc" 
                    title="Marketing a Restaurant Refurb"
                    description="Cinematic hype for a high-end St Andrews restaurant."
                    result="Full bookings for opening week."
                 />
                 <YouTubeEmbed 
                    videoId="qrQK-maE3sA" 
                    title="Real Proof vs Stock Imagery"
                    description="Why this builder stopped using stock photos."
                    result="15+ qualified leads in week one."
                 />
              </div>
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-6 bg-brand-yellow text-neutral-950 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="mb-8 text-neutral-950 leading-tight">
                 Ready to <br /><span className="underline decoration-neutral-950/20 underline-offset-8 italic">scale your authority?</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-105 transition-all shadow-2xl group"
              >
                Book Your Discovery Call
              </Link>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
