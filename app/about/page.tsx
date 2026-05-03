import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        {/* 1. The Story */}
        <section className="py-24 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">Why Bear Media?</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Founded in Scotland to help local businesses look as good as they work.
          </p>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-neutral-900 rounded-2xl border border-white/10 flex items-center justify-center text-neutral-600">Cinematic Drone Shot of West Lothian Landscape</div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-yellow">Rooted in the Central Belt</h2>
              <p className="text-neutral-400 mb-6 text-lg leading-relaxed">
                We started Bear Media with a simple mission: to give local Scottish businesses access to the same high-end content and automation tools used by big national brands, without the corporate fluff and overhead.
              </p>
              <p className="text-neutral-400 mb-6 text-lg leading-relaxed">
                Based in West Lothian, we're your local partner. We don't hide behind a screen—we visit your site, capture your story, and build your systems properly.
              </p>
            </div>
          </div>
        </section>

        {/* 2. The No-Nonsense Manifesto */}
        <section className="py-20 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">The No-Nonsense Manifesto</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="glass-card p-10">
                <h3 className="text-xl font-bold mb-4 text-brand-yellow">Straight Talking</h3>
                <p className="text-neutral-400 text-sm">No marketing jargon. No vanity metrics. We speak plain English and focus entirely on your business growth.</p>
              </div>
              <div className="glass-card p-10">
                <h3 className="text-xl font-bold mb-4 text-brand-yellow">Local Partners</h3>
                <p className="text-neutral-400 text-sm">We aren't a faceless remote agency. We're on the ground in Edinburgh, Fife, and West Lothian, visiting your business to capture the real story.</p>
              </div>
              <div className="glass-card p-10">
                <h3 className="text-xl font-bold mb-4 text-brand-yellow">Results Only</h3>
                <p className="text-neutral-400 text-sm">If it doesn't bring in a lead or build your brand authority, we don't do it. Everything we build has a clear purpose.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Service Area Map */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Serving the Central Belt</h2>
            <p className="text-neutral-400 text-lg mb-8">
              Based in West Lothian, we regularly serve clients across a 30-mile radius.
            </p>
            <div className="aspect-[21/9] bg-neutral-900 rounded-xl relative border border-white/10 flex items-center justify-center">
               <div className="text-neutral-600 italic">Coverage: Serving Broxburn, Livingston, Edinburgh, Fife & The Central Belt</div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 text-center">
          <button className="bg-gradient-brand text-neutral-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
            Work With Us
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
