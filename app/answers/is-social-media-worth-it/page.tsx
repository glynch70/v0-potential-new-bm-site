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
        "name": "Is social media worth it for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. When treated as a strategic system rather than just posting, social media is a cost-effective way to build trust and generate consistent leads for local businesses."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema-worth-it"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-gold selection:text-neutral-950">
        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-gold font-black uppercase tracking-[0.3em] mb-4 text-[13px] md:text-sm md:text-sm animate-pulse italic">Real Talk. No Fluff.</p>
            <h1 className="mb-8 text-white">
              Is Social Media <span className="text-gold">Worth It?</span>
            </h1>
            <div className="glass-card p-10 border-gold/10 text-left bg-neutral-900/50">
              <h2 className="text-xl font-black mb-4 text-gold italic uppercase font-bebas tracking-widest">The Short Answer:</h2>
              <p className="text-base md:text-lg text-white leading-relaxed italic">
                Yes—if it's built on strategy, not just "posting." For small businesses in Scotland, consistent high-quality content is the most cost-effective way to build trust, stay top-of-mind, and generate leads without a massive ad spend.
              </p>
            </div>
          </div>
        </section>

        {/* 2. ROI BREAKDOWN */}
        <section className="py-12 md:py-20 px-6 border-y border-white/5 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
               <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase italic font-bebas tracking-tight">The ROI of <span className="text-gold">Consistency.</span></h2>
               <p className="text-white text-sm mb-8 leading-relaxed italic">
                 Most businesses fail at social media because they treat it like a hobby. When treated like a system, content provides three core returns:
               </p>
               <div className="space-y-4">
                  {[
                    { id: "01", title: "Compound Trust", desc: "Customers buy from businesses they recognize. Content builds that familiarity 24/7." },
                    { id: "02", title: "Organic Lead Gen", desc: "High-value video can reach thousands of local people without paying for clicks." },
                    { id: "03", title: "Time Recovery", desc: "Educational content answers FAQs before they're asked, saving you hours." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-6 glass-card border-white/5 group hover:border-gold/20 transition-all">
                       <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center rounded-lg font-black italic font-bebas text-lg shrink-0">{item.id}</div>
                       <div>
                          <h4 className="font-black text-white mb-1 uppercase italic font-bebas tracking-widest text-xs">{item.title}</h4>
                          <p className="text-white text-[13px] md:text-sm italic">"{item.desc}"</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="glass-card p-10 border-white/5 bg-neutral-900/50">
               <h3 className="text-xl font-black mb-6 uppercase italic font-bebas tracking-widest text-white">Reach vs. Paid Ads</h3>
               <p className="text-white mb-6 italic leading-relaxed text-sm">
                 "Ads are a tap you have to keep paying for. Content is a well you dig once that keeps providing value."
               </p>
               <p className="text-white text-xs leading-relaxed italic">
                 Small businesses in West Lothian and Edinburgh often find that localized, authentic video content outperforms generic paid ads because it feels real and relevant to the community.
               </p>
            </div>
          </div>
        </section>

        {/* 3. LOCAL EVIDENCE */}
        <section className="py-12 md:py-20 px-6 text-center">
           <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-white">
                Real Evidence in <span className="text-gold">Scotland.</span>
              </h2>
              <p className="text-white text-sm mb-12 italic leading-relaxed">
                We've seen local trades and property agencies transform their enquiry rate simply by showing the face behind the business and the quality of their work through vertical video.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="p-10 glass-card border-gold/10">
                    <p className="text-gold font-black text-6xl mb-2 font-bebas italic leading-none">400%</p>
                    <p className="text-white text-[13px] md:text-sm uppercase tracking-widest font-black italic">Increase in local enquiries</p>
                 </div>
                 <div className="p-10 glass-card border-gold/10">
                    <p className="text-gold font-black text-6xl mb-2 font-bebas italic leading-none">10+ Hrs</p>
                    <p className="text-white text-[13px] md:text-sm uppercase tracking-widest font-black italic">Saved per week on FAQs</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. FINAL CTA */}
        <section className="py-20 px-6 text-center relative overflow-hidden bg-gold text-neutral-950">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="mb-8 text-neutral-950">
                Stop Posting. <br /><span className="underline decoration-neutral-950/20 underline-offset-8 italic">Start Growing.</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white font-black uppercase tracking-widest text-[13px] md:text-sm rounded-xl hover:scale-105 transition-all shadow-2xl group"
              >
                Book Your Discovery Call
              </Link>
              <p className="mt-8 text-neutral-950/50 text-[12px] md:text-[13px] font-black uppercase tracking-widest italic">
                No pressure. No jargon. Just results.
              </p>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
