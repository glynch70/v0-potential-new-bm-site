import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export default function AnswerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a professional content creator actually do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional content creator acts as a growth partner, capturing authentic business value through video and photo to build trust and authority online."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema-creator"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-gold font-black uppercase tracking-[0.3em] mb-4 text-[13px] md:text-sm md:text-sm animate-pulse italic">The Growth Partner Guide.</p>
            <h1 className="mb-8 text-white">
              What Does a <span className="text-gold">Creator Do?</span>
            </h1>
            <div className="glass-card p-10 border-gold/10 text-left bg-neutral-900/50">
              <h2 className="text-xl font-black mb-4 text-gold italic uppercase font-bebas tracking-widest">The Definition:</h2>
              <p className="text-base md:text-lg text-white leading-relaxed italic">
                A professional content creator doesn't just "take photos." They act as a strategic growth partner who captures your business's value and translates it into digital assets designed to attract, engage, and convert your ideal customers.
              </p>
            </div>
          </div>
        </section>

        {/* 2. THE CORE ROLES */}
        <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center mb-12">
             <h2 className="text-white uppercase italic font-bebas tracking-tight">Beyond the <span className="text-gold">Camera.</span></h2>
             <p className="text-white text-sm mt-4 max-w-2xl mx-auto italic">At Bear Media, our role involves four core pillars of business growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Strategy", desc: "Mapping out exactly what content will move the needle for your business." },
              { title: "Capture", desc: "Professional on-site filming and photography to showcase your real work." },
              { title: "Edit & Master", desc: "Turning raw footage into high-impact assets and website visuals." },
              { title: "Distribution", desc: "Ensuring the right people in Edinburgh and West Lothian see your content." }
            ].map((role, i) => (
              <div key={i} className="glass-card p-8 border-white/5 flex flex-col items-center text-center hover:border-gold/20 transition-all group">
                 <div className="text-gold text-4xl mb-4 font-black font-bebas italic opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                 <h4 className="text-lg font-black mb-4 italic uppercase font-bebas tracking-widest text-white">{role.title}</h4>
                 <p className="text-white text-[13px] md:text-sm leading-relaxed italic">"{role.desc}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. THE OUTCOME */}
        <section className="py-12 md:py-20 px-6 bg-neutral-900/30 border-y border-white/5">
           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-left">
              <div>
                 <h2 className="text-white uppercase italic font-bebas tracking-tight mb-6">The Goal: Lead-Gen <span className="text-gold">Automation.</span></h2>
                 <p className="text-white text-sm mb-8 leading-relaxed italic">
                   When you hire a content creator, you're buying back your time. Instead of struggling to find things to post, you get a consistent stream of professional content that builds your authority while you focus on running your business.
                 </p>
                 <ul className="space-y-4">
                    {[
                      "Consistent brand presence 24/7",
                      "Higher conversion on enquiries",
                      "Dominance in local search results"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white font-bold uppercase italic tracking-widest text-[13px] md:text-sm">
                        <span className="text-gold text-lg leading-none">⚡</span> {item}
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="glass-card p-12 border-gold/10 bg-neutral-900/50 flex flex-col items-center justify-center text-center">
                 <p className="text-white italic text-xl leading-relaxed">
                   "We act as your outsourced creative department, dedicated to your local growth."
                 </p>
                 <div className="w-12 h-1 bg-gold/20 mt-8" />
              </div>
           </div>
        </section>

        {/* 4. FINAL CTA */}
        <section className="py-20 px-6 text-center relative overflow-hidden bg-gold text-neutral-950">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="mb-8 text-neutral-950 leading-tight">
                Ready for a <br /><span className="underline decoration-neutral-950/20 underline-offset-8 italic">growth partner?</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all shadow-2xl group"
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
