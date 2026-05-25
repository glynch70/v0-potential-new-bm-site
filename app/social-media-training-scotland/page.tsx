import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Social Media Training For Businesses Scotland | Bear Media',
  description: 'Practical, results-driven social media training for teams and businesses across Edinburgh, Glasgow, and Central Scotland.',
};

export default function SocialMediaTrainingScotland() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        
        {/* AEO SUMMARY BLOCK */}
        <div className="pt-24 pb-8 bg-neutral-950 border-b border-white/5">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed italic">
                 Bear Media provides practical, hands-on social media training for in-house teams and business owners across Edinburgh, Glasgow and Scotland, teaching them how to create content that actually generates enquiries.
              </p>
           </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-20 pb-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.03)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black italic uppercase font-bebas leading-[0.9] tracking-tight">
              Social Media Training <br className="hidden md:block"/> <span className="text-gold">For Businesses</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-medium italic">
              Stop guessing what to post. We train your in-house team on the exact strategies we use to generate millions of views and consistent leads for our agency clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact" className="px-10 py-5 bg-gold text-neutral-950 font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all">
                 Enquire About Training
               </Link>
               <Link href="/ai-chatgpt-training" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:bg-white/10 transition-all">
                 View AI Training
               </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM & WHO IT'S FOR */}
        <section className="py-24 px-6 bg-neutral-900/30 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
             <div>
                <h2 className="text-3xl font-black italic uppercase font-bebas text-white mb-6">The Problem With In-House Content</h2>
                <ul className="space-y-4">
                  {[
                    "Your team spends hours staring at a blank screen wondering what to post.",
                    "You're paying a marketing assistant, but they lack a cohesive strategy.",
                    "Your content gets a few likes from staff, but zero actual leads.",
                    "You're intimidated by filming and editing video content.",
                    "You don't know how to track if social media is actually working."
                  ].map((problem, i) => (
                    <li key={i} className="flex gap-3 text-white/90 italic text-lg">
                      <span className="text-gold font-black mt-1">✕</span> {problem}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="bg-neutral-950 border border-white/10 p-10 rounded-[2rem]">
                <h2 className="text-3xl font-black italic uppercase font-bebas text-gold mb-6">Who This Is For</h2>
                <p className="text-white/80 italic text-lg mb-6 leading-relaxed">
                   Our training is designed for businesses that want to keep content creation in-house, but need expert guidance to make it profitable:
                </p>
                <ul className="space-y-3">
                  {["In-House Marketing Teams & Assistants", "Business Owners running their own socials", "Sales Teams looking to build Personal Brands", "B2B Companies on LinkedIn", "Businesses located across Central Scotland"].map((audience, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-gold" />
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
                 <h2 className="text-4xl font-black uppercase italic font-bebas tracking-tight text-white mb-4">What You Will Learn</h2>
                 <p className="text-white/90 italic">Practical skills you can implement the very next day.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { title: "Content Strategy", desc: "How to build a 30-day content calendar in under an hour that actually aligns with your sales goals." },
                   { title: "Smartphone Videography", desc: "How to shoot high-quality, professional-looking video using just the phone in your pocket." },
                   { title: "Platform Algorithms", desc: "Understanding exactly what Instagram, TikTok, and LinkedIn want from your content right now." },
                   { title: "CapCut Editing", desc: "A masterclass in editing fast-paced, engaging short-form reels that hold attention." },
                   { title: "Copywriting", desc: "How to write captions and hooks that stop the scroll and drive people to take action." },
                   { title: "Lead Generation", desc: "How to transition from 'getting views' to 'getting booked calls and enquiries'." }
                 ].map((service, i) => (
                    <div key={i} className="bg-neutral-900/50 border border-white/5 p-8 rounded-3xl hover:border-gold/30 transition-colors">
                       <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                       <p className="text-white/90 text-sm italic leading-relaxed">{service.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <h2 className="text-3xl font-black uppercase italic font-bebas tracking-tight text-white mb-10 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
             {[
               { q: "Do you deliver training at our office?", a: "Yes, we regularly travel to offices across Edinburgh, Glasgow, Fife, and West Lothian to deliver on-site training for teams." },
               { q: "Is the training tailored to our industry?", a: "Absolutely. We don't do generic presentations. We research your specific business beforehand and build the strategy examples around your actual services." },
               { q: "Do we need expensive camera equipment?", a: "No. The entire training is designed around leveraging modern smartphones (iPhone/Android) and affordable lighting/audio setups." },
               { q: "Can we combine this with AI training?", a: "Yes. Many of our clients book a full-day workshop that covers both Social Media Strategy and AI/ChatGPT implementation." }
             ].map((faq, i) => (
               <div key={i} className="bg-neutral-900 border border-white/5 p-6 rounded-2xl">
                 <h3 className="font-bold text-white mb-2 text-lg">{faq.q}</h3>
                 <p className="text-white/90 italic text-sm leading-relaxed">{faq.a}</p>
               </div>
             ))}
           </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center bg-gold text-neutral-950">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase font-bebas mb-6">Empower your team</h2>
              <p className="font-bold italic mb-10">Stop wasting time on content that doesn't convert. Let's get your team trained.</p>
              <Link href="/contact" className="px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all shadow-xl inline-block">
                Book a Training Discovery Call
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
