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
            What Does a Content Creator Do for a Business?
          </h1>
          <div className="glass-card p-10 border-brand-yellow/30 text-left">
            <h2 className="text-2xl font-bold mb-4 text-brand-yellow italic uppercase font-bebas tracking-wide">The Definition:</h2>
            <p className="text-xl text-white leading-relaxed">
              A professional content creator doesn't just "take photos." They act as a strategic growth partner who captures your business's value and translates it into digital assets (video, photos, copy) designed to attract, engage, and convert your ideal customers.
            </p>
          </div>
        </section>

        {/* 2. The Core Roles */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold italic uppercase font-bebas tracking-wide">Beyond the Camera</h2>
             <p className="text-neutral-400 text-lg mt-4 max-w-2xl mx-auto">At Bear Media, our role involves four core pillars of business growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Strategy", desc: "Mapping out exactly what content will move the needle for your specific business." },
              { title: "Capture", desc: "Professional on-site filming and photography to showcase your real work." },
              { title: "Edit & Master", desc: "Turning raw footage into high-impact social media assets and website visuals." },
              { title: "Distribution", desc: "Ensuring the right people in Edinburgh, Fife, and West Lothian see your content." }
            ].map((role, i) => (
              <div key={i} className="glass-card p-8 border-white/5 flex flex-col items-center text-center">
                 <div className="text-brand-yellow text-xl mb-4 font-black">0{i+1}</div>
                 <h4 className="text-xl font-bold mb-4 italic uppercase font-bebas tracking-wide">{role.title}</h4>
                 <p className="text-neutral-500 text-sm leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. The Outcome */}
        <section className="py-20 px-6 bg-white/5">
           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-bold mb-6 text-brand-yellow italic uppercase font-bebas tracking-wide">The Goal: Lead-Gen Automation</h2>
                 <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                   When you hire a content creator, you're buying back your time. Instead of struggling to find things to post, you get a consistent stream of professional content that builds your brand authority while you focus on running your business.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-white/80 font-medium"><span>⚡</span> Consistent brand presence</li>
                    <li className="flex items-center gap-3 text-white/80 font-medium"><span>⚡</span> Higher conversion on enquiries</li>
                    <li className="flex items-center gap-3 text-white/80 font-medium"><span>⚡</span> Dominance in local search results</li>
                 </ul>
              </div>
              <div className="glass-card p-12 border-brand-yellow/10 flex items-center justify-center">
                 <p className="text-white/60 italic text-xl text-center">
                   "We act as your outsourced creative department, dedicated to your local growth."
                 </p>
              </div>
           </div>
        </section>

        {/* 4. Final CTA */}
        <section className="py-24 px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-bold mb-8 italic uppercase font-bebas tracking-wide">Ready for a growth partner?</h2>
           <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto italic italic">Let's map out how a professional content system can transform your business.</p>
           <button className="bg-brand-yellow text-neutral-950 px-12 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:scale-105 transition-transform">
             Book Your Discovery Call
           </button>
        </section>

        <Footer />
      </main>
    </>
  );
}
