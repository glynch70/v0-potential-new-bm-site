import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AnswerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        {/* 1. Direct Answer Hero */}
        <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient italic">
            Is Social Media Content Worth It for Small Businesses?
          </h1>
          <div className="glass-card p-10 border-brand-yellow/30 text-left">
            <h2 className="text-2xl font-bold mb-4 text-brand-yellow italic uppercase font-bebas tracking-wide">The Short Answer:</h2>
            <p className="text-xl text-white leading-relaxed">
              Yes—if it's built on strategy, not just "posting." For small businesses in Scotland, consistent high-quality content is the most cost-effective way to build trust, stay top-of-mind, and generate leads without a massive ad spend.
            </p>
          </div>
        </section>

        {/* 2. ROI Breakdown */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-bold mb-6 text-brand-yellow italic uppercase font-bebas tracking-wide">The ROI of Consistency</h2>
               <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                 Most businesses fail at social media because they treat it like a hobby. When treated like a system, content provides three core returns:
               </p>
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-brand-yellow/10 text-brand-yellow flex items-center justify-center rounded-lg font-bold">01</div>
                     <div>
                        <h4 className="font-bold text-white mb-1">Compound Trust</h4>
                        <p className="text-neutral-500 text-sm">Customers buy from businesses they recognize and trust. Content builds that familiarity 24/7.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-brand-yellow/10 text-brand-yellow flex items-center justify-center rounded-lg font-bold">02</div>
                     <div>
                        <h4 className="font-bold text-white mb-1">Organic Lead Gen</h4>
                        <p className="text-neutral-500 text-sm">High-value video can reach thousands of local people without paying for clicks.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-brand-yellow/10 text-brand-yellow flex items-center justify-center rounded-lg font-bold">03</div>
                     <div>
                        <h4 className="font-bold text-white mb-1">Time Recovery</h4>
                        <p className="text-neutral-500 text-sm">Educational content answers FAQs before they're asked, saving you hours on the phone.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="glass-card p-10 border-white/5">
               <h3 className="text-2xl font-bold mb-6">Organic Reach vs. Paid Ads</h3>
               <p className="text-neutral-400 mb-6 italic leading-relaxed">
                 "Ads are a tap you have to keep paying for. Content is a well you dig once that keeps providing value."
               </p>
               <p className="text-neutral-400 leading-relaxed">
                 Small businesses in West Lothian and Edinburgh often find that localized, authentic video content outperforms generic paid ads because it feels real and relevant to the community.
               </p>
            </div>
          </div>
        </section>

        {/* 3. Local Evidence */}
        <section className="py-20 px-6 bg-white/5 text-center">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 italic uppercase font-bebas tracking-wide">Real Evidence in Scotland</h2>
              <p className="text-neutral-400 text-lg mb-12">
                We've seen local trades and property agencies transform their enquiry rate simply by showing the face behind the business and the quality of their work through vertical video.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="p-8 glass-card border-brand-yellow/10">
                    <p className="text-brand-yellow font-black text-4xl mb-2">400%</p>
                    <p className="text-white/60 text-sm uppercase tracking-widest font-bold">Increase in local enquiries</p>
                 </div>
                 <div className="p-8 glass-card border-brand-yellow/10">
                    <p className="text-brand-yellow font-black text-4xl mb-2">10+ Hrs</p>
                    <p className="text-white/60 text-sm uppercase tracking-widest font-bold">Saved per week on FAQs</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Final CTA */}
        <section className="py-24 px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-bold mb-8 italic uppercase font-bebas tracking-wide">Stop posting, start growing.</h2>
           <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto italic italic">Not sure where to start? Let's map out a strategy that actually works for your small business.</p>
           <button className="bg-brand-yellow text-neutral-950 px-12 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:scale-105 transition-transform">
             Book a Strategy Call
           </button>
        </section>

        <Footer />
      </main>
    </>
  );
}
