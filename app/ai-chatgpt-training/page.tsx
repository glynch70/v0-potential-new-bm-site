import Script from 'next/script';
import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI & ChatGPT Training for Businesses | Bear Media',
  description: 'Practical, hands-on training to help your business leverage ChatGPT and AI tools to save time and automate workflows.',
  alternates: {
    canonical: 'https://bear-media.com/ai-chatgpt-training',
  },
  openGraph: {
    url: 'https://bear-media.com/ai-chatgpt-training',
    title: 'AI & ChatGPT Training for Businesses | Bear Media',
    description: 'Practical, hands-on training to help your business leverage ChatGPT and AI tools to save time and automate workflows.',
    type: 'website',
    siteName: 'Bear Media',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bear Media — Web Design & Video Scotland',
      },
    ],
  }
};


const breadcrumbSchema_ai_chatgpt_training = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://bear-media.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "AI & ChatGPT Training for Businesses",
      "item": "https://bear-media.com/ai-chatgpt-training"
    }
  ]
};

export default function AIChatGPTTraining() {
  return (
    <>
      <Script
        id="breadcrumb-schema-ai-chatgpt-training"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_ai_chatgpt_training) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        
        {/* AEO SUMMARY BLOCK */}
        <div className="pt-24 pb-8 bg-neutral-950 border-b border-white/5">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed italic">
                 Bear Media provides practical AI and ChatGPT training workshops for business teams across Edinburgh and Central Scotland, teaching them how to automate repetitive tasks, improve marketing output, and save hours every single week.
              </p>
           </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-20 pb-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.03)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black italic uppercase font-bebas leading-[0.9] tracking-tight">
              AI & ChatGPT Training <br className="hidden md:block"/> <span className="text-gold">For Teams</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-medium italic">
              AI isn't coming to take your job, but a team using AI will. We provide zero-fluff, hands-on workshops that show your staff exactly how to use ChatGPT to become 10x more efficient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact" className="px-10 py-5 bg-gold text-neutral-950 font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                 <Zap size={14} className="fill-neutral-950" /> Book a Workshop
               </Link>
               <Link href="/social-media-training-scotland" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                 View Social Media Training
               </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM & WHO IT'S FOR */}
        <section className="py-24 px-6 bg-neutral-900/30 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
             <div>
                <h2 className="text-3xl font-black italic uppercase font-bebas text-white mb-6">The Problem With Adopting AI</h2>
                <ul className="space-y-4">
                  {[
                    "Your team logs into ChatGPT, stares at the prompt box, and doesn't know what to ask.",
                    "You get generic, robotic-sounding text back that you can't actually publish.",
                    "You're worried about data privacy and confidentiality.",
                    "There are too many 'AI gurus' selling hype instead of practical workflows.",
                    "Your team is wasting hours on tasks that could be automated in seconds."
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
                   Our workshops are built for teams that handle communication, administration, or marketing:
                </p>
                <ul className="space-y-3">
                  {["Marketing & PR Departments", "Sales Teams & Account Managers", "HR & Administrative Staff", "Business Owners & Founders", "Agencies & Consultancies in Edinburgh & Scotland"].map((audience, i) => (
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
                 <h2 className="text-4xl font-black uppercase italic font-bebas tracking-tight text-white mb-4">What the Workshop Covers</h2>
                 <p className="text-white/90 italic">We cut the theory and focus purely on practical implementation.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { title: "Prompt Engineering", desc: "Learn the exact frameworks to write prompts that generate high-quality, specific outputs on the first try." },
                   { title: "Tone & Voice Cloning", desc: "How to train ChatGPT to write exactly like your brand, so you never get that generic 'AI sound' again." },
                   { title: "Content Automation", desc: "Turn one blog post into a month's worth of LinkedIn posts, newsletters, and video scripts in 5 minutes." },
                   { title: "Data & Admin Efficiency", desc: "How to use Advanced Data Analysis to summarize massive spreadsheets, PDFs, and meeting notes instantly." },
                   { title: "Custom GPTs", desc: "We'll build custom, dedicated AI assistants specifically for your business processes during the session." },
                   { title: "Ethics & Privacy", desc: "Clear guidelines on what company data is safe to use and how to protect your intellectual property." }
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
               { q: "Is this training for beginners or advanced users?", a: "We tailor the workshop to your team's current level. Whether they've never logged in, or they use it daily but want better results, we adjust the curriculum accordingly." },
               { q: "Do you come to our office?", a: "Yes. We deliver these workshops on-site at your offices across Edinburgh, Glasgow, and Central Scotland to ensure maximum engagement." },
               { q: "Do we need the paid version of ChatGPT?", a: "We highly recommend ChatGPT Plus for the workshop, as we cover Advanced Data Analysis and Custom GPTs, which are essential for business workflows." },
               { q: "How long is the session?", a: "Most businesses opt for our intense Half-Day Workshop (3.5 hours), which provides enough time for theory, live demonstrations, and hands-on building." }
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
              <h2 className="text-4xl md:text-6xl font-black italic uppercase font-bebas mb-6">Future-Proof Your Team</h2>
              <p className="font-bold italic mb-10">Give your staff the tools to do their best work, faster.</p>
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
