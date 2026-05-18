import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Design For Trades Businesses In Scotland | Bear Media',
  description: 'Conversion-focused web design for construction companies, joiners, and trades businesses across Scotland, Edinburgh, and West Lothian.',
};

export default function WebDesignForTrades() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* AEO SUMMARY BLOCK */}
        <div className="pt-24 pb-8 bg-neutral-950 border-b border-white/5">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed italic">
                 Bear Media provides conversion-focused web design specifically for construction firms and trades businesses across Edinburgh, West Lothian and Central Scotland, helping them generate higher-quality local enquiries.
              </p>
           </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-20 pb-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.03)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black italic uppercase font-bebas leading-[0.9] tracking-tight">
              Web Design For <span className="text-brand-yellow">Trades Businesses</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-medium italic">
              Stop relying solely on word of mouth. We build high-performance websites for construction companies and local trades that actually convert visitors into paying clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact" className="px-10 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all">
                 Book a Discovery Call
               </Link>
               <Link href="/case-studies" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-white/10 transition-all">
                 View Case Studies
               </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM & WHO IT'S FOR */}
        <section className="py-24 px-6 bg-neutral-900/30 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
             <div>
                <h2 className="text-3xl font-black italic uppercase font-bebas text-white mb-6">The Problem With Most Trade Websites</h2>
                <ul className="space-y-4">
                  {[
                    "They look outdated and don't reflect the true quality of your work.",
                    "They don't clearly state what areas you cover (e.g., Edinburgh, West Lothian).",
                    "They have no real proof—just generic stock images of hardhats.",
                    "They load slowly and look terrible on mobile phones.",
                    "They don't make it easy for a customer to request a quote."
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
                   We specialize in working with businesses that do hands-on, high-value work:
                </p>
                <ul className="space-y-3">
                  {["Construction Companies & Home Extensions", "Joinery & Carpentry Firms", "Roofing & Landscaping Specialists", "Plumbing & Heating Engineers", "Local SMEs across Central Scotland"].map((audience, i) => (
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
                 <h2 className="text-4xl font-black uppercase italic font-bebas tracking-tight text-white mb-4">What's Included in the Build?</h2>
                 <p className="text-white/60 italic">Everything you need to dominate your local market.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { title: "Conversion Design", desc: "Built specifically to turn local traffic into real phone calls and quote requests." },
                   { title: "Mobile Optimized", desc: "Over 70% of local searches happen on phones. Your site will be lightning fast." },
                   { title: "Local SEO Foundations", desc: "Optimised for location-based searches like 'builders in West Lothian'." },
                   { title: "Proof Integration", desc: "We build dedicated portfolio sections to show off your best projects." },
                   { title: "Trust Signals", desc: "Strategic placement of reviews, accreditations, and real team photos." },
                   { title: "Managed Hosting", desc: "We handle the tech, the security, and the updates so you don't have to." }
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
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-black uppercase italic font-bebas tracking-tight text-brand-yellow mb-6">Real Results for Real Trades</h2>
              <p className="text-white/80 italic text-lg mb-8">
                 We've helped companies like <Link href="/case-studies/cg-developments" className="text-white font-bold underline decoration-brand-yellow underline-offset-4">C&G Developments</Link> completely overhaul their digital presence, leading to massive spikes in local visibility and high-value enquiries.
              </p>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] hover:text-brand-yellow transition-colors">
                 See the Case Studies <ArrowRight size={14} />
               </Link>
           </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <h2 className="text-3xl font-black uppercase italic font-bebas tracking-tight text-white mb-10 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
             {[
               { q: "Do you only work with businesses in Edinburgh and West Lothian?", a: "While we are based in Central Scotland and work heavily with local trades, we build websites for construction firms across the entire UK." },
               { q: "Do I need to write all the content myself?", a: "No. We help structure and refine the copy based on what actually converts. If you need full copywriting services, we offer that too." },
               { q: "Can you use our own photos?", a: "Yes! Real photos of your team and your projects perform significantly better than stock images. We can also provide on-site photography and drone footage if needed." },
               { q: "How long does a website build take?", a: "Typically 4-6 weeks from our initial discovery call to launch, depending on how quickly we receive necessary assets from you." }
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
              <h2 className="text-4xl md:text-6xl font-black italic uppercase font-bebas mb-6">Ready to upgrade your digital presence?</h2>
              <p className="font-bold italic mb-10">Let's build a website that actually generates enquiries for your trades business.</p>
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
