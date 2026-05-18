import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export const metadata: Metadata = {
  title: 'Social Media Content For Construction Companies | Bear Media',
  description: 'Professional social media management and video content creation designed specifically for construction companies across Scotland.',
};

export default function SocialMediaForConstruction() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* AEO SUMMARY BLOCK */}
        <div className="pt-24 pb-8 bg-neutral-950 border-b border-white/5">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed italic">
                 Bear Media provides done-for-you social media management and on-site video content creation specifically for construction companies across Edinburgh, West Lothian and Scotland, turning project visibility into high-value enquiries.
              </p>
           </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-20 pb-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.03)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black italic uppercase font-bebas leading-[0.9] tracking-tight">
              Social Media Content For <span className="text-brand-yellow">Construction</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-medium italic">
              Stop posting blurry photos. We build and manage high-performance content systems that make your construction firm the most trusted choice in your local area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact" className="px-10 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all">
                 Book a Discovery Call
               </Link>
               <Link href="/case-studies/cg-developments" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-white/10 transition-all">
                 See Our Results
               </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM & WHO IT'S FOR */}
        <section className="py-24 px-6 bg-neutral-900/30 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
             <div>
                <h2 className="text-3xl font-black italic uppercase font-bebas text-white mb-6">Why Your Content Isn't Working</h2>
                <ul className="space-y-4">
                  {[
                    "You're too busy on-site to remember to film.",
                    "Your team hates being on camera.",
                    "You're posting generic photos that don't show the true scale of the builds.",
                    "You're getting likes from other builders, but no real customer enquiries.",
                    "You have no consistent strategy, so trust isn't being built."
                  ].map((problem, i) => (
                    <li key={i} className="flex gap-3 text-white/70 italic text-lg">
                      <span className="text-brand-yellow font-black mt-1">✕</span> {problem}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="bg-neutral-950 border border-white/10 p-10 rounded-[2rem]">
                <h2 className="text-3xl font-black italic uppercase font-bebas text-brand-yellow mb-6">Who This Is For</h2>
                <p className="text-white/80 italic text-lg mb-6 leading-relaxed">
                   We partner exclusively with serious construction businesses that want to dominate their local market:
                </p>
                <ul className="space-y-3">
                  {["Home Extension & Renovation Specialists", "New Build Developers", "Commercial Construction Firms", "High-End Joinery & Fit-Out Contractors", "Firms operating in Central Scotland"].map((audience, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-brand-yellow" />
                      <span className="text-white font-bold text-sm tracking-wide">{audience}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </section>

        {/* SERVICES INCLUDED */}
        <section className="py-24 px-6">
           <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-black uppercase italic font-bebas tracking-tight text-white mb-4">A Done-For-You System</h2>
                 <p className="text-white/60 italic">You build the houses. We build the brand.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { title: "On-Site Filming", desc: "We visit your active sites regularly to capture high-quality progress footage and completed builds." },
                   { title: "Drone Videography", desc: "Massive scale demands massive perspective. We use drones to show the true extent of your work." },
                   { title: "Professional Editing", desc: "Fast-paced, engaging reels designed specifically for Instagram, TikTok, and Facebook." },
                   { title: "Account Management", desc: "We handle the posting, the captions, and the scheduling so you don't have to think about it." },
                   { title: "Team Profiling", desc: "We help your team get comfortable on camera to build immense local trust." },
                   { title: "Enquiry Focus", desc: "Everything we post is engineered to drive high-value leads to your inbox or website." }
                 ].map((service, i) => (
                    <div key={i} className="bg-neutral-900/50 border border-white/5 p-8 rounded-3xl hover:border-brand-yellow/30 transition-colors">
                       <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                       <p className="text-white/60 text-sm italic leading-relaxed">{service.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* PROOF / RESULTS */}
        <section className="py-24 px-6 bg-brand-yellow/10 border-y border-brand-yellow/20">
           <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black uppercase italic font-bebas tracking-tight text-brand-yellow mb-6">Real Results for Real Trades</h2>
                <p className="text-white/80 italic text-lg mb-8 max-w-2xl mx-auto">
                   We helped C&G Developments generate <strong className="text-white">129,000+ views</strong> and <strong className="text-white">9,900+ engagements</strong> in just 90 days.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <YouTubeEmbed videoId="TVxtsn0IP6U" title="Extension Build Content" label="Construction Proof" />
                 </div>
                 <div className="bg-neutral-950 p-8 rounded-3xl border border-white/10">
                    <h3 className="text-xl font-black uppercase italic font-bebas text-white mb-4">"The phone hasn't stopped ringing"</h3>
                    <p className="text-white/70 italic leading-relaxed mb-6">
                      "Bear Media completely changed how we look online. The videos are top class and the phone hasn't stopped ringing since we started putting them out. Best investment we've made."
                    </p>
                    <Link href="/case-studies/cg-developments" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase tracking-widest text-[11px] hover:translate-x-1 transition-transform">
                       Read Full Case Study <ArrowRight size={14} />
                    </Link>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <h2 className="text-3xl font-black uppercase italic font-bebas tracking-tight text-white mb-10 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
             {[
               { q: "How much does social media management cost for a construction firm?", a: "Packages typically start from £1,200/mo, which includes regular on-site filming, drone work, editing, and full account management." },
               { q: "Do you travel to our sites?", a: "Yes. We regularly travel to active sites across Edinburgh, West Lothian, Fife, and the Central Belt to capture authentic progress footage." },
               { q: "Does my team have to be on camera?", a: "It helps build trust immensely, but we won't force anyone. We can focus on the work, drone footage, and voiceovers if preferred." },
               { q: "How quickly will we see results?", a: "While content is a long-term trust-building strategy, our clients often see a significant spike in local visibility and engagement within the first 30-60 days." }
             ].map((faq, i) => (
               <div key={i} className="bg-neutral-900 border border-white/5 p-6 rounded-2xl">
                 <h3 className="font-bold text-white mb-2 text-lg">{faq.q}</h3>
                 <p className="text-white/60 italic text-sm leading-relaxed">{faq.a}</p>
               </div>
             ))}
           </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center bg-brand-yellow text-neutral-950">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase font-bebas mb-6">Ready to dominate your local market?</h2>
              <p className="font-bold italic mb-10">Let's build a content strategy that actually generates high-value construction enquiries.</p>
              <Link href="/contact" className="px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl inline-block">
                Book a Discovery Call
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
