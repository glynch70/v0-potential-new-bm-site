import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoProof from '@/components/VideoProof';
import { TrendingUp, Users, Star, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LocationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        {/* 1. Local Hero */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 px-6 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <p className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic">
               On-Site Content Across the Central Belt
            </p>
            <h1 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas">
              Get Seen. Build Trust. <br />
              <span className="text-brand-yellow">Get Enquiries.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed italic">
              High-impact media for businesses in Edinburgh, Fife, and West Lothian.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 md:px-12 md:py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(245,166,35,0.2)]"
            >
              Book Your Local Strategy Call
            </Link>

            {/* TRUST BAR UNDER HERO */}
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16">
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex gap-1 text-brand-yellow mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-white text-[10px] font-black uppercase tracking-widest">5.0 Google Rating</p>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">100% LOCAL</p>
                  <p className="text-white text-[9px] font-bold uppercase tracking-widest">On-Site Filming Guarantee</p>
               </div>
            </div>
          </div>
        </section>

        {/* 1.1 VIDEO PROOF SECTION */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="Central Belt Coverage"
          stats={[
             { label: "Consistent Enquiries", value: "Daily", icon: <TrendingUp size={24} /> },
             { label: "Active Clients", value: "50+", icon: <Users size={24} /> },
             { label: "Client Rating", value: "5.0★", icon: <Star size={24} /> },
             { label: "Central Belt Focus", value: "100%", icon: <MapPin size={24} /> }
          ]}
        />

        {/* 2. The 30-Mile Promise */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto glass-card p-12 text-center border-brand-yellow/10">
            <h2 className="text-3xl font-bold mb-6 text-brand-yellow uppercase italic font-bebas tracking-wide">The 30-Mile Promise</h2>
            <p className="text-white0 text-lg max-w-3xl mx-auto leading-relaxed">
              Based in West Lothian, we're perfectly positioned to serve the heart of Scotland. We aren't a remote agency that hides behind a screen. We visit your site, capture the real story of your business, and build your digital systems on the ground.
            </p>
          </div>
        </section>

        {/* 3. Regional Spotlights */}
        <section className="py-20 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto space-y-24">
            
            {/* West Lothian */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div>
                 <h3 className="text-3xl font-bold mb-6 text-brand-yellow italic uppercase font-bebas tracking-wide">West Lothian (Livingston, Bathgate, Broxburn)</h3>
                 <p className="text-white0 text-lg mb-6">Our home base. We specialize in helping local West Lothian trades and small businesses build professional authority through on-site video and fast lead-gen websites.</p>
                 <ul className="space-y-4 text-white">
                   <li>📍 On-site shoots in under 24 hours notice.</li>
                   <li>📍 Deep understanding of the local competitive landscape.</li>
                   <li>📍 Preferred partner for Livingston-based firms.</li>
                 </ul>
               </div>
               <div className="aspect-video bg-neutral-900 rounded-2xl border border-white/5 flex items-center justify-center text-white0">Cinematic On-Site Capture for a Livingston-based Trade Business</div>
            </div>

            {/* Edinburgh */}
            <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
               <div className="md:order-2">
                 <h3 className="text-3xl font-bold mb-6 text-brand-yellow italic uppercase font-bebas tracking-wide">Edinburgh & Lothians</h3>
                 <p className="text-white0 text-lg mb-6">Premium property content and social media systems for the capital. We help Edinburgh-based estate agents and professional coaches win the attention their work deserves.</p>
                 <ul className="space-y-4 text-white">
                   <li>📍 High-end cinematic property tours.</li>
                   <li>📍 Authority content for professional coaches.</li>
                   <li>📍 Modern social media retainers for the city.</li>
                 </ul>
               </div>
               <div className="aspect-video bg-neutral-900 rounded-2xl border border-white/5 flex items-center justify-center text-white0 md:order-1">Premium Property Walkthrough for an Edinburgh Estate Agent</div>
            </div>

            {/* Fife */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div>
                 <h3 className="text-3xl font-bold mb-6 text-brand-yellow italic uppercase font-bebas tracking-wide">Fife & Surrounding Areas</h3>
                 <p className="text-white0 text-lg mb-6">Supporting the diverse business landscape of Fife. From construction firms in Dunfermline to independent brands across the coast, we provide the digital tools for growth.</p>
                 <ul className="space-y-4 text-white">
                   <li>📍 Industrial and construction showcases.</li>
                   <li>📍 Lead systems for local service providers.</li>
                   <li>📍 Cinematic drone work for Fife businesses.</li>
                 </ul>
               </div>
               <div className="aspect-video bg-neutral-900 rounded-2xl border border-white/5 flex items-center justify-center text-white0">Drone Inspection and Project Showcase for a Fife Contractor</div>
            </div>

          </div>
        </section>

        {/* 4. Service Map Scaffolding */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="glass-card p-12 text-center border-brand-yellow/30">
            <h2 className="text-3xl font-bold mb-6">Where We Work</h2>
            <p className="text-white0 text-lg mb-10">We regularly serve clients within a 30-mile radius of West Lothian.</p>
            <div className="aspect-[21/9] bg-neutral-900 rounded-xl relative border border-white/10 flex items-center justify-center">
               <div className="text-white0 italic">Coverage: Serving Broxburn, Livingston, Edinburgh, Fife & The Central Belt</div>
            </div>
          </div>
        </section>

        {/* 5. Local CTA */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.1)_0%,transparent_60%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Ready to dominate your <br />
                 <span className="text-brand-yellow underline decoration-brand-yellow/30 underline-offset-8">local market?</span>
              </h2>
              <p className="text-white text-xl mb-12 max-w-2xl mx-auto italic font-medium leading-relaxed">
                 Let's build a system that makes your business the obvious choice in West Lothian, Edinburgh, or Fife.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(245,166,35,0.3)] group"
              >
                Book Your Discovery Call
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
