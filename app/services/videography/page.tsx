import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Video, Camera, Play, Users, MapPin, BarChart3, HelpCircle, TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';
import VideoProof from '@/components/VideoProof';

export const metadata: Metadata = {
  title: 'Videography & Video Marketing West Lothian & Edinburgh | Bear Media',
  description: 'Professional videography and video marketing for local businesses in West Lothian, Edinburgh, and Fife. Cinematic property tours, brand films, and social content.',
};

export default function VideographyServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 px-6 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-sm animate-pulse italic"
            >
               Stop being the best kept secret.
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter italic uppercase font-bebas"
            >
              Get More Enquiries With <br />
              <span className="text-brand-yellow text-stroke-sm">Cinematic Authority.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed italic"
            >
              We visit your site, film your work, and turn it into a lead generation engine.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
            >
              <Link
                href="/contact"
                className="px-10 py-5 md:px-12 md:py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(245,166,35,0.2)]"
              >
                Book Your 15-Min Strategy Call
              </Link>
            </motion.div>

            {/* TRUST BAR UNDER HERO */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16"
            >
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex gap-1 text-brand-yellow mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">5.0 Google Rating</p>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-white font-black font-bebas italic text-xl leading-none mb-1">50+ LOCAL BUSINESSES</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Trusted Video Partner</p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* 1.1 VIDEO PROOF SECTION */}
        <VideoProof 
          videoSrc="/media/NEW BM DRONE HERO.mp4"
          title="On-Site Authority Proof"
          stats={[
             { label: "Reach Generated", value: "50k+", icon: <TrendingUp size={24} /> },
             { label: "New Enquiries", value: "15+", icon: <Users size={24} /> },
             { label: "Client Rating", value: "5.0★", icon: <Star size={24} /> },
             { label: "Local Impact", value: "100%", icon: <MapPin size={24} /> }
          ]}
        />

        {/* 2. SEE IT IN ACTION */}
        <section id="see-it-in-action" className="py-24 px-6 text-center max-w-7xl mx-auto">
           <h2 className="text-4xl md:text-7xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
              See it in <span className="text-brand-yellow">Action.</span>
           </h2>
           <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-16 glass-card border-brand-yellow/30 bg-brand-yellow/[0.03] text-left">
                 <h4 className="text-brand-yellow font-black text-9xl mb-4 font-bebas italic tracking-widest leading-none">50K+</h4>
                 <p className="text-3xl font-black uppercase italic font-bebas text-white mb-4">Targeted Local Views</p>
                 <p className="text-white/40 text-sm leading-relaxed max-w-md">Our property tours and brand stories don't just sit there—they get seen by the people who actually buy from you.</p>
              </div>
              <div className="grid gap-8">
                 <div className="p-12 glass-card border-white/5 bg-white/[0.01]">
                    <h4 className="text-brand-yellow font-black text-5xl mb-2 font-bebas italic tracking-widest">3X</h4>
                    <p className="text-white font-bold uppercase tracking-widest text-xs">Trust Growth (West Lothian Trades)</p>
                 </div>
                 <div className="p-12 glass-card border-white/5 bg-white/[0.01]">
                    <h4 className="text-brand-yellow font-black text-5xl mb-2 font-bebas italic tracking-widest">Sell Faster</h4>
                    <p className="text-white font-bold uppercase tracking-widest text-xs">Edinburgh Property Agents</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. WHAT RESULTS CAN YOU EXPECT? */}
        <section className="py-24 px-6 bg-neutral-900/50 border-y border-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight">
                 What Results Can You <span className="text-brand-yellow">Expect?</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                 <div className="p-10 glass-card border-white/5">
                    <TrendingUp className="text-brand-yellow mb-6" size={32} />
                    <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">Premium Authority</h4>
                    <p className="text-white/40 text-sm leading-relaxed">Instantly look like the local leader. High-end video content justifies premium pricing and builds undeniable trust.</p>
                 </div>
                 <div className="p-10 glass-card border-white/5">
                    <Star className="text-brand-yellow mb-6" size={32} />
                    <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">More Listings</h4>
                    <p className="text-white/40 text-sm leading-relaxed">For estate agents, cinematic tours are the competitive edge that wins more valuation calls and faster property sales.</p>
                 </div>
                 <div className="p-10 glass-card border-white/5">
                    <Users className="text-brand-yellow mb-6" size={32} />
                    <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">More Enquiries</h4>
                    <p className="text-white/40 text-sm leading-relaxed">We don't just film houses or vans—we build a lead-generation system that turns views into high-value enquiries.</p>
                 </div>
              </div>
           </div>
        </section>
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-20">Trusted by estate agents and trades across the Central Belt.</p>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                 <div className="p-8 glass-card border-white/5 bg-white/[0.01]">
                    <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">Example: The Agent's Win</h4>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">An Edinburgh agent used our cinematic tours to win 4 new listings in 30 days, outperforming national competitors.</p>
                    <p className="text-brand-yellow font-black text-xs uppercase tracking-widest italic">Result: 4 New Listings</p>
                 </div>
                 <div className="p-8 glass-card border-white/5 bg-white/[0.01]">
                    <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">Case Study: West Lothian Builder</h4>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">A West Lothian builder saw a 3x increase in high-value enquiries after showing the real work on video.</p>
                    <p className="text-brand-yellow font-black text-xs uppercase tracking-widest italic">Result: 3x High-Value Leads</p>
                 </div>
                 <div className="p-8 glass-card border-white/5 bg-white/[0.01]">
                    <h4 className="text-white font-bold text-lg mb-4 uppercase italic font-bebas tracking-widest">Case Study: Fife Service SME</h4>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">A Fife-based service business saved 12 hours a month on content creation while doubling local reach.</p>
                    <p className="text-brand-yellow font-black text-xs uppercase tracking-widest italic">Result: 2x Reach + Time Saved</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. WHAT WE DO */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
           <h2 className="text-3xl md:text-6xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
              Business-Focused <span className="text-brand-yellow">Video Services.</span>
           </h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Video size={32} />, title: "Dominate Social Discovery", desc: "Short, punchy Reels and TikToks designed to put your business in front of local customers on autopilot." },
                { icon: <Camera size={32} />, title: "Sell Listings Faster", desc: "Cinematic property tours for estate agents that win more listings and higher offers in Edinburgh and West Lothian." },
                { icon: <Play size={32} />, title: "Look Like The Authority", desc: "High-end brand films that tell your story, build undeniable trust, and justify premium pricing." },
                { icon: <CheckCircle2 size={32} />, title: "Win More Work", desc: "On-site project proof videos for trades that show the quality of your work and close the deal." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5 hover:border-brand-yellow/30 transition-all duration-500 group">
                   <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      {item.icon}
                   </div>
                   <h3 className="text-2xl font-black mb-4 uppercase italic font-bebas tracking-wide text-white group-hover:text-brand-yellow transition-colors">{item.title}</h3>
                   <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>
        {/* 4. CONTRAST SECTION */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
           <div className="grid md:grid-cols-2 gap-8 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-white/[0.02] uppercase italic font-bebas pointer-events-none hidden md:block">VS</div>
              
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/5">
                 <h3 className="text-xl md:text-2xl font-black mb-6 uppercase italic font-bebas tracking-wide text-white/40 text-center">DIY / Amateur Video</h3>
                 <ul className="space-y-4 text-white/30 text-xs md:text-sm text-center font-medium">
                    <li>❌ Shaky, poor quality audio</li>
                    <li>❌ Hard to build trust</li>
                    <li>❌ Lowers your perceived value</li>
                    <li>❌ No plan, no strategy</li>
                 </ul>
              </div>

              <div className="p-8 md:p-10 rounded-[2.5rem] bg-neutral-900 border border-brand-yellow/30 shadow-[0_0_50px_rgba(245,166,35,0.05)]">
                 <h3 className="text-xl md:text-2xl font-black mb-6 uppercase italic font-bebas tracking-wide text-brand-yellow text-center">Bear Media Authority</h3>
                 <ul className="space-y-4 text-white/80 text-xs md:text-sm font-medium text-center italic">
                    <li>✅ Cinematic & high-impact</li>
                    <li>✅ Instant professional trust</li>
                    <li>✅ Justifies premium pricing</li>
                    <li>✅ Strategy-led for leads</li>
                 </ul>
              </div>
           </div>

           {/* MID-PAGE CTA */}
           <div className="mt-16 text-center">
              <Link href="/contact" className="inline-flex items-center gap-4 text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-lg md:text-2xl hover:scale-105 transition-transform group">
                 Book Your Site Visit <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </section>

        {/* 5. WHY BEAR MEDIA */}
        <section className="py-24 px-6 bg-brand-yellow text-neutral-950">
           <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-12 text-center uppercase italic font-bebas tracking-tight leading-none">
                 Why <span className="underline decoration-neutral-950/20 underline-offset-8">Bear Media?</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <CheckCircle2 size={24} className="shrink-0" />
                       <div>
                          <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2">Local & Reliable</p>
                          <p className="font-medium text-neutral-950/70">We are based in West Lothian. We know the area, and we are there when you need us.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <CheckCircle2 size={24} className="shrink-0" />
                       <div>
                          <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2">On-Site Filming</p>
                          <p className="font-medium text-neutral-950/70">We come to you. No stock footage. Just the real proof of your business in action.</p>
                       </div>
                    </div>
                 </div>
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <CheckCircle2 size={24} className="shrink-0" />
                       <div>
                          <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2">No-Fluff Approach</p>
                          <p className="font-medium text-neutral-950/70">No complicated agency jargon. We focus on what brings you leads and growth.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <CheckCircle2 size={24} className="shrink-0" />
                       <div>
                          <p className="font-black text-xl uppercase italic font-bebas leading-none mb-2">Built for Results</p>
                          <p className="font-medium text-neutral-950/70">Our videos aren't just "nice to have." They are strategic tools to win you more work.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="py-24 px-6 max-w-7xl mx-auto text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic font-bebas tracking-tight text-white leading-none">
              How It <span className="text-brand-yellow">Works.</span>
           </h2>
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "We Come To You", desc: "We visit your business or project site in the Central Belt to capture high-quality raw footage." },
                { step: "02", title: "We Film Everything", desc: "From drone shots to detailed close-ups, we handle the entire production. No stress for you." },
                { step: "03", title: "You Get Results", desc: "We edit and deliver branded, ready-to-use content that starts winning you clients immediately." }
              ].map((item, i) => (
                <div key={i} className="p-10 glass-card border-white/5 relative overflow-hidden group text-left">
                   <div className="absolute -top-4 -right-4 text-8xl font-black text-white/[0.03] italic font-bebas group-hover:text-brand-yellow/[0.05] transition-colors">{item.step}</div>
                   <h3 className="text-2xl font-black mb-4 uppercase italic font-bebas tracking-wide text-brand-yellow">{item.title}</h3>
                   <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

         {/* 6. SEARCH-INTENT SECTIONS */}
         <section className="py-24 px-6 bg-neutral-900/50">
            <div className="max-w-7xl mx-auto">
               <div className="grid md:grid-cols-3 gap-12">
                  {/* WHO IS THIS FOR? */}
                  <div className="p-10 rounded-[2.5rem] bg-neutral-950 border border-white/5 h-full">
                     <h3 className="text-2xl font-black mb-6 uppercase italic font-bebas tracking-wide text-brand-yellow">Who is this for?</h3>
                     <ul className="space-y-4">
                        {[
                          { title: "High-End Trades", desc: "Showcasing premium craftsmanship and authority." },
                          { title: "Estate Agents", desc: "Cinematic property tours that win more listings." },
                          { title: "Growth Businesses", desc: "Scaling your brand story to reach new customers." }
                        ].map((item, i) => (
                          <li key={i} className="flex gap-3 items-start">
                             <CheckCircle2 size={18} className="text-brand-yellow shrink-0 mt-1" />
                             <div>
                                <p className="font-bold text-white text-sm leading-none mb-1">{item.title}</p>
                                <p className="text-white/40 text-xs">{item.desc}</p>
                             </div>
                          </li>
                        ))}
                     </ul>
                  </div>

                  {/* WHAT RESULTS? */}
                  <div className="p-10 rounded-[2.5rem] bg-neutral-950 border border-white/5 h-full">
                     <h3 className="text-2xl font-black mb-6 uppercase italic font-bebas tracking-wide text-brand-yellow">Expected Results?</h3>
                     <p className="text-white/60 text-sm leading-relaxed mb-6">Professional video changes how people see you:</p>
                     <ul className="space-y-4">
                        {[
                          "Instant authority and professional trust.",
                          "Higher perceived value (charge more).",
                          "Faster closing times for high-ticket services.",
                          "Content that works 24/7 on your website."
                        ].map((res, i) => (
                          <li key={i} className="flex gap-3 items-center text-white/50 font-bold uppercase italic font-bebas tracking-widest text-[10px]">
                             <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full" /> {res}
                          </li>
                        ))}
                     </ul>
                  </div>

                  {/* HOW MUCH? */}
                  <div className="p-10 rounded-[2.5rem] bg-neutral-950 border border-brand-yellow/20 shadow-[0_0_40px_rgba(245,166,35,0.05)] h-full flex flex-col">
                     <h3 className="text-2xl font-black mb-6 uppercase italic font-bebas tracking-wide text-brand-yellow">What does it cost?</h3>
                     <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                        One-off cinematic videos start from **£750+**. Monthly video marketing systems typically range from **£1,200 to £2,500/mo**.
                     </p>
                     <Link href="/pricing" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase italic font-bebas tracking-widest hover:underline">
                        View Our Pricing Packages <ArrowRight size={16} />
                     </Link>
                  </div>
               </div>
            </div>
         </section>

        {/* 7. LOCAL SEO SECTION */}
        <section className="py-24 px-6 text-center max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase italic font-bebas tracking-tight text-white leading-none">
              Videography Services in <br />
              <span className="text-brand-yellow underline decoration-brand-yellow/20 underline-offset-8">West Lothian & Edinburgh.</span>
           </h2>
           <p className="text-xl text-white/50 mb-12 leading-relaxed font-medium">
              We provide on-site filming and video marketing across the Scottish Central Belt, including:
           </p>
           <div className="flex flex-wrap justify-center gap-4 text-xs font-black uppercase tracking-widest text-white/30 italic">
              <span>Livingston</span>
              <span>•</span>
              <span>Bathgate</span>
              <span>•</span>
              <span>Dunfermline</span>
              <span>•</span>
              <span>Falkirk</span>
              <span>•</span>
              <span>Stirling</span>
              <span>•</span>
              <span>Haddington</span>
              <span>•</span>
              <span>Linlithgow</span>
           </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase italic font-bebas tracking-tight text-white leading-none">
              Common <span className="text-brand-yellow">Questions.</span>
           </h2>
           <div className="space-y-6">
              {[
                { q: "Do I need to be on camera?", a: "Not if you don't want to. We can focus purely on your work, your team in action, or cinematic shots of your property/projects." },
                { q: "How long does filming take?", a: "Most local shoots take between 2 to 4 hours. We aim for minimal disruption so you can stay focused on your work." },
                { q: "How quickly do I get the videos?", a: "Standard delivery is within 7 to 10 working days. We also offer express delivery for time-sensitive launches." },
                { q: "What does it cost?", a: "We have packages for one-off projects and monthly retainers for consistent growth. View our pricing page for details.", link: "/pricing" },
                { q: "What industries do you work with?", a: "We specialise in trades, estate agents, and local service businesses, but we've produced video for almost every sector in the Central Belt." }
              ].map((faq, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 group hover:border-brand-yellow/20 transition-all">
                   <div className="flex items-center gap-4 mb-3">
                      <HelpCircle size={20} className="text-brand-yellow opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="text-lg font-bold text-white">{faq.q}</h4>
                   </div>
                   <p className="text-white/50 text-sm leading-relaxed pl-9">
                      {faq.a} {faq.link && <Link href={faq.link} className="text-brand-yellow hover:underline ml-1">View Pricing.</Link>}
                   </p>
                </div>
              ))}
           </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.1)_0%,transparent_60%)] pointer-events-none" />
           <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase italic font-bebas tracking-tight text-white leading-none">
                 Ready to outshine <br />
                 <span className="text-brand-yellow underline decoration-brand-yellow/30 underline-offset-8">your competition?</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-brand-yellow text-neutral-950 font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(245,166,35,0.3)] group"
              >
                Get Your 15-Minute Visual Transformation Roadmap
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <p className="mt-8 text-white/30 text-xs font-bold uppercase tracking-widest">
                 No pressure, no sales pitch. Just a clear roadmap to better content.
              </p>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
