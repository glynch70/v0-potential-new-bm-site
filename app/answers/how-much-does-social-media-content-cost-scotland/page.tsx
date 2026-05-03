import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, TrendingUp, Wallet, ShieldCheck, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much Does Social Media Content Cost in Scotland? | Bear Media',
  description: 'A transparent guide to social media content pricing in Scotland. Learn about costs for video, photography, and management in West Lothian, Edinburgh, and beyond.',
};

export default function PricingArticlePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden border-b border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-6 text-sm">Transparency First</p>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas">
               How Much Does <br />
              <span className="text-brand-yellow underline decoration-brand-yellow/20 underline-offset-8">Social Content Cost?</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-medium italic">
               An honest look at pricing for content creation and social media management in Scotland.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <div className="prose prose-invert prose-brand max-w-none">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic font-bebas tracking-tight text-white mb-8">The Short Answer.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                 In Scotland, professional social media content can range from **£500 to £3,000+ per month**. The massive gap depends on one thing: **Outcome.** Are you paying for someone to post generic pictures, or are you paying for a system that generates enquiries? 
              </p>

              {/* PRICING RANGES */}
              <div className="grid md:grid-cols-3 gap-6 my-16">
                 <div className="p-8 rounded-3xl bg-neutral-900 border border-white/5">
                    <h4 className="text-brand-yellow font-black uppercase italic font-bebas text-xl mb-2">The Basic</h4>
                    <p className="text-2xl font-black text-white mb-4">£500 - £800 <span className="text-[10px] uppercase text-white/30 tracking-widest">/mo</span></p>
                    <ul className="text-xs text-white/40 space-y-2">
                       <li>• 1-2 Posts Per Week</li>
                       <li>• Basic Photography</li>
                       <li>• Simple Captions</li>
                    </ul>
                 </div>
                 <div className="p-8 rounded-3xl bg-neutral-900 border border-brand-yellow/20 shadow-[0_0_30px_rgba(245,166,35,0.05)]">
                    <h4 className="text-brand-yellow font-black uppercase italic font-bebas text-xl mb-2">The Growth</h4>
                    <p className="text-2xl font-black text-white mb-4">£1,200 - £1,800 <span className="text-[10px] uppercase text-white/30 tracking-widest">/mo</span></p>
                    <ul className="text-xs text-white/40 space-y-2">
                       <li>• 3-4 Reels/Videos Per Week</li>
                       <li>• On-Site Filming Days</li>
                       <li>• High-End Editing</li>
                    </ul>
                 </div>
                 <div className="p-8 rounded-3xl bg-neutral-900 border border-white/5">
                    <h4 className="text-brand-yellow font-black uppercase italic font-bebas text-xl mb-2">The Dominant</h4>
                    <p className="text-2xl font-black text-white mb-4">£2,500+ <span className="text-[10px] uppercase text-white/30 tracking-widest">/mo</span></p>
                    <ul className="text-xs text-white/40 space-y-2">
                       <li>• Daily High-End Content</li>
                       <li>• Full Strategy & Ads</li>
                       <li>• Total Account Handling</li>
                    </ul>
                 </div>
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-tight text-white mt-16 mb-6">What actually affects the cost?</h3>
              <p className="text-white/50 leading-relaxed mb-8">
                 When you're looking for a videographer or content creator in **West Lothian** or **Edinburgh**, the quote you receive isn't pulled out of thin air. It's usually based on:
              </p>
              <div className="space-y-6 mb-16">
                 {[
                    { t: "Video Frequency", d: "High-quality video takes time to edit. More reels = more time, but also more reach." },
                    { t: "On-Site vs. Remote", d: "Agencies that come to your site (like we do in Broxburn/Livingston) cost more because of travel and equipment, but the content is 10x more authentic." },
                    { t: "Strategy & Directing", d: "Are you just paying for someone to hold a camera, or someone to tell you what to say to get enquiries?" }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                       <CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={20} />
                       <div>
                          <p className="font-bold text-white mb-1 uppercase italic font-bebas tracking-widest leading-none">{item.t}</p>
                          <p className="text-white/40 text-sm leading-relaxed">{item.d}</p>
                       </div>
                    </div>
                 ))}
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-tight text-white mt-16 mb-6">DIY vs. Professional: Is it worth it?</h3>
              <p className="text-white/50 leading-relaxed mb-8 text-lg">
                 You can post to social media for free. So why pay an agency?
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                 <div className="p-8 glass-card border-white/5">
                    <h4 className="text-white font-black uppercase italic font-bebas text-lg mb-4">The DIY Route</h4>
                    <p className="text-white/30 text-xs leading-relaxed italic">
                       "It's free, but it's inconsistent. You post when you have time, the quality is 'mobile-tier', and it rarely results in a high-value enquiry. It makes you look like a hobbyist, not a leader."
                    </p>
                 </div>
                 <div className="p-8 glass-card border-brand-yellow/10 bg-brand-yellow/[0.01]">
                    <h4 className="text-brand-yellow font-black uppercase italic font-bebas text-lg mb-4 text-stroke-sm">The Bear Media Route</h4>
                    <p className="text-white/60 text-xs leading-relaxed font-bold italic">
                       "Cinematic quality that builds instant trust. Consistency that keeps you top-of-mind. Strategy that focuses purely on getting your phone to ring in West Lothian and Edinburgh."
                    </p>
                 </div>
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase italic font-bebas tracking-tight text-white mt-16 mb-6">The Bottom Line.</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                 Social media content shouldn't be an expense; it should be an investment. If you spend **£1,000** but it wins you a **£5,000** contract in Livingston or a new listing in Edinburgh, it's the best money you'll ever spend.
              </p>
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 bg-brand-yellow text-neutral-950 text-center">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase italic font-bebas tracking-tight leading-none">
                 Get Your Own <br /><span className="underline decoration-neutral-950/20 underline-offset-8">Pricing Roadmap.</span>
              </h2>
              <p className="text-lg font-medium mb-12 text-neutral-950/70">
                 No sales pitch. Just an honest conversation about what your business needs to grow in West Lothian or Edinburgh.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-neutral-950 text-white font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300"
              >
                Book Your 15-Minute Strategy Call
                <ArrowRight size={16} />
              </Link>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
