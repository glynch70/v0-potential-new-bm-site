/* global Calendly */
/**
 * Bear Media — Sales Funnel Landing Page
 * Design: Dark Authority — cinematic black/charcoal base, amber (#F1B92D) CTA, white text
 * Typography: Bebas Neue (headlines), Inter (body)
 * Target: Businesses across the Scottish Central Belt serious about their brand online
 * Goal: Book a free 30-minute discovery call
 */

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle, Star, Play, ChevronDown, Phone, Mail, MapPin, X } from "lucide-react";
import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/107232073/eK9eiRqotQAadHPqx4yCFA/bear-media-hero-AvMTP7XyG5S8DvhpwqvRmg.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function BearMedia() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    size: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormState({ name: "", email: "", company: "", size: "", message: "" });
          setSubmitted(false);
        }, 3000);
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Failed to send. Please call +44 7879 011860 instead.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cal = (window as any).Calendly;
      if (cal) {
        cal.initInlineWidget({
          url: "https://calendly.com/bearmedia/discovery-call",
          parentElement: document.getElementById("calendly-embed"),
          resize: true,
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image 
                src="/logos/bear media logo white on black.png" 
                alt="Bear Media Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
            href="#book"
            className="bg-[#F1B92D] text-black text-sm font-bold px-5 py-2 rounded hover:bg-[#e09510] transition-colors"
          >
            Book a Call
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Drone video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/bm-drone-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_IMAGE}
        />
        {/* 50% dark overlay — lighter than before */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="text-[#F1B92D] text-sm font-bold uppercase tracking-[0.2em] mb-4">
              On-Site Content Creation Across the Scottish Central Belt
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-[2.2rem] sm:text-[2.5rem] md:text-[3.5rem] xl:text-[4.2rem] font-bold leading-[1.1] tracking-tight mb-8 font-inter-tight max-w-2xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              We come to you.<br />
              We film it.<br />
              We edit it.<br />
              <span className="text-[#F1B92D]">Your Channels Stay Full</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white mb-8 leading-relaxed max-w-xl">
              Bear Media visits your business, films everything you need — video, photography, and drone — then handles all the editing and channel management. You get professional content without touching a camera or spending a day briefing a team.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
              
                href="#book"
                className="bg-[#F1B92D] text-black font-bold px-8 py-4 rounded text-base hover:bg-[#e09510] transition-colors"
              >
                Let's Grow Your Business
              </a>
              
                href="#work"
                className="border border-white/30 text-white font-semibold px-8 py-4 rounded text-base hover:border-white/60 transition-colors flex items-center gap-2"
              >
                <Play size={16} />
                See Our Work
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-8">
              {[
                { stat: "25+", label: "Years Experience" },
                { stat: "5.0★", label: "Google Rating" },
                { stat: "25+", label: "Happy Clients" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-black text-[#F1B92D]">{item.stat}</div>
                  <div className="text-white text-sm">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <a href="#growth" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={28} className="text-white" />
        </a>
      </section>

      {/* GROWTH SECTION */}
      <section id="growth" className="py-20 bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-[#F1B92D] mb-4 tracking-tighter leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              +661% Growth
            </h2>
            <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-widest mb-4">
              123,000+ views generated
            </p>
            <p className="text-[#F1B92D] font-bold uppercase tracking-widest text-xs">
              Recent client progress since Feb 26
            </p>
          </motion.div>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section id="pain" className="py-24 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-[#F1B92D] text-sm font-bold uppercase tracking-[0.2em] mb-3 text-center">
              Sound Familiar?
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black uppercase text-center mb-16 leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Why Most Businesses Struggle With Content
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  number: "01",
                  title: "You don't have time to film it",
                  body: "Someone needs to plan it, shoot it, edit it, write the captions, and post it. That's a part-time job. It never gets done properly.",
                },
                {
                  number: "02",
                  title: "Inconsistency kills credibility",
                  body: "A burst of posts followed by weeks of silence tells your audience you're not serious. Consistent, high-quality content builds trust.",
                },
                {
                  number: "03",
                  title: "Hiring in-house costs more than you think",
                  body: "A full-time content creator runs £30k+ per year before equipment, software, and management time. And you still need to tell them what to film.",
                },
              ].map((item) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8 hover:border-[#F1B92D]/40 transition-colors h-full"
                >
                  <div className="text-[#F1B92D]/30 text-5xl font-black mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {item.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-white leading-relaxed text-sm">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section id="work" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Shed Company",
                  youtubeId: "CQNytl9SPb4",
                  result: "From zero views to 45k on a single reel",
                  poster: "https://img.youtube.com/vi/CQNytl9SPb4/maxresdefault.jpg"
                },
                {
                  title: "Work in Progress",
                  youtubeId: "Ll1AUE9Gxrg",
                  result: "Building client trust with active site proof",
                  poster: "https://img.youtube.com/vi/Ll1AUE9Gxrg/maxresdefault.jpg"
                },
                {
                  title: "Bear Media Showreel",
                  youtubeId: "fIVELaRnAPg",
                  result: "Cinematic brand authority & drone visuals",
                  poster: "https://img.youtube.com/vi/fIVELaRnAPg/maxresdefault.jpg"
                }
              ].map((video, i) => (
                <TiltCard 
                  key={i} 
                  className="group cursor-pointer rounded-2xl overflow-hidden"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="aspect-[9/16] bg-[#1a1a1a] rounded-2xl overflow-hidden mb-0 border border-white/10 relative">
                    <img src={video.poster} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={video.title} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                      <div className="w-16 h-16 bg-[#F1B92D] rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform shadow-xl">
                        <Play size={24} className="text-black fill-black ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">{video.title}</h3>
                    <p className="text-[#F1B92D] text-sm font-bold uppercase tracking-widest">{video.result}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedVideo(null)}
            >
               <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-neutral-900 w-full max-w-4xl rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
               >
                  <div className="relative aspect-video bg-black flex items-center justify-center">
                     <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                      title={selectedVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                     ></iframe>
                     <button 
                      onClick={() => setSelectedVideo(null)}
                      className="absolute top-6 right-6 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#F1B92D] hover:text-black transition-colors z-10"
                     >
                       <X size={20} />
                     </button>
                  </div>
                  <div className="p-8 md:p-12">
                      <h3 className="text-4xl font-black text-white uppercase mb-6 tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{selectedVideo.title}</h3>
                      <p className="text-[#F1B92D] text-xl font-bold uppercase tracking-widest">{selectedVideo.result}</p>
                  </div>
               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* WHAT YOU GET */}
      <section id="services" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-[#F1B92D] text-sm font-bold uppercase tracking-[0.2em] mb-3">
              The Service
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black uppercase mb-4 leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              We Do It All.<br />
              <span className="text-[#F1B92D]">On-Site and Online.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white text-base mb-12">
              We show up, we create, you get results.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp}>
                <div className="space-y-4 mb-10">
                  {[
                    "We visit your business and film everything you need",
                    "Video reels and short-form content, filmed and edited to platform spec",
                    "Photography for social posts, websites, and ads",
                    "Drone footage for aerial coverage and standout visuals",
                    "Professional editing focused on social media growth",
                    "Monthly content calendar planned and approved in advance",
                    "Captions, scheduling, and posting — fully managed",
                    "Monthly performance report so you can see what's working",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#F1B92D] mt-0.5 shrink-0" />
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                  href="#book"
                  className="inline-block bg-[#F1B92D] text-black font-bold px-8 py-4 rounded hover:bg-[#e09510] transition-colors"
                >
                  Book a Free Call
                </a>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-2 text-white">Who This Is For</h3>
                <p className="text-white text-sm mb-6">Bear Media works with businesses across the Scottish Central Belt who are serious about their brand online.</p>
                <div className="space-y-3">
                  {[
                    "Businesses that want a real person on-site, not a brief sent to a stranger",
                    "Founders and MDs who know their brand deserves better content",
                    "Marketing teams that need consistent output without the overhead",
                    "Companies that have tried DIY video and know it's not working",
                    "Businesses ready for professional video, photography, and drone",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F1B92D] mt-2 shrink-0" />
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white text-xs uppercase tracking-widest mb-1">Starting from</p>
                  <p className="text-white text-xs mb-2">Full-service content creation, on-site and managed. No hidden fees.</p>
                  <p className="text-3xl font-black text-white">£750 <span className="text-white text-base font-normal">/ month</span></p>
                  <p className="text-white text-xs mt-1">Minimum 3-month engagement</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section id="work" className="py-24 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-[#F1B92D] text-sm font-bold uppercase tracking-[0.2em] mb-3 text-center">
              Client Results
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black uppercase text-center mb-16 leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              What Clients Say
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "It's been a great experience working with Garry and Bear Media. Slick process, reliable, good communication and happy with the end results. Top quality service. Highly recommend.",
                  name: "Gary Young",
                  company: "Therapist | Mindfulness Tutor | Coach",
                  stars: 5,
                },
                {
                  quote: "Bear Media created an amazing social media campaign for my coaching business. Garry took the time to understand my business and created posts that expertly promoted my new programme. 5-star service!",
                  name: "Leanne Murphy",
                  company: "Coaching Business",
                  stars: 5,
                },
                {
                  quote: "An amazing service. Garry has been a great support in developing my digital media footprint and nothing has been too much trouble. He sees my needs and creates amazing products. Highly recommend him.",
                  name: "Seamus Corry",
                  company: "Trainer",
                  stars: 5,
                },
              ].map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  className="bg-[#1a1a1a] border-l-4 border-[#F1B92D] rounded-lg p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} size={14} className="text-[#F1B92D] fill-[#F1B92D]" />
                    ))}
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-white text-xs">{t.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-8 text-center">
              <p className="text-white text-sm">25 reviews · 5.0 ★ on Google</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-[#F1B92D] text-sm font-bold uppercase tracking-[0.2em] mb-3 text-center">
              Got Questions?
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black uppercase text-center mb-12 leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Frequently Asked
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-3">
              {[
                {
                  q: "Do I need to be involved in the filming?",
                  a: "Minimal involvement is needed from you. We handle the planning, show up on the day, direct the shoot, and manage everything from capture to published post. Most clients are surprised how little of their time it takes — typically 1–2 hours per visit.",
                },
                {
                  q: "How often do you come to our premises?",
                  a: "That depends on your package. Most clients see us once or twice a month. We batch-film enough content in each visit to keep your channels active for weeks, so there's no constant disruption to your team.",
                },
                {
                  q: "What areas do you cover?",
                  a: "We work across the Scottish Central Belt — Glasgow, Edinburgh, Stirling, Falkirk, Lanarkshire, and everywhere in between. If you're not sure whether we cover your location, just ask.",
                },
                {
                  q: "What equipment do you use?",
                  a: "We shoot with cinema-grade cameras, professional audio, and licensed drone equipment. Everything is selected for the specific environment — whether that's a busy shop floor, an outdoor site, or a corporate office.",
                },
                {
                  q: "How long does it take before content goes live?",
                  a: "Typically 5–7 working days from the shoot date. We edit, caption, and schedule everything — you just review and approve before it publishes.",
                },
                {
                  q: "Will the content be branded to my business?",
                  a: "Yes. Every piece of content — video, photography, and graphics — is produced to reflect your brand identity, colours, and tone. We onboard you at the start to make sure we understand your brand before we ever turn up with a camera.",
                },
                {
                  q: "What's the minimum commitment?",
                  a: "We ask for a 3-month minimum engagement. Content marketing builds over time — you won't see the full results in week one. Three months gives us enough runway to build a consistent library and start seeing measurable growth in engagement and reach.",
                },
                {
                  q: "How much does it cost?",
                  a: "Packages start from £750 per month, which covers regular on-site visits, video production, photography, editing, and channel management. Pricing is transparent — no hidden extras. We'll put together a clear proposal on your discovery call.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-white/10 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#F1B92D] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-white leading-relaxed border-t border-white/10 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="book" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Top row: info + Calendly */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-[#F1B92D] text-sm font-bold uppercase tracking-[0.2em] mb-3">
                Book a Call
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Let's Come<br />
                <span className="text-[#F1B92D]">To You.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white leading-relaxed mb-8">
                A free 30-minute call. No pitch, no pressure. We'll find out what your business needs, show you what we've created for similar companies, and tell you exactly what we'd do for you.
              </motion.p>
              <motion.div variants={fadeUp} className="space-y-4">
                {[
                  { icon: <Phone size={16} />, text: "+44 7879 011860" },
                  { icon: <Mail size={16} />, text: "info@bear-media.com" },
                  { icon: <MapPin size={16} />, text: "Broxburn, West Lothian — filming across the Scottish Central Belt" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 text-white text-sm">
                    <span className="text-[#F1B92D] mt-0.5">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-lg overflow-hidden border border-white/10"
            >
              <div
                id="calendly-embed"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center gap-6 mb-12"
          >
            <div className="flex-1 h-px bg-white/10" />
            <p className="text-white text-sm uppercase tracking-widest whitespace-nowrap">Or send us a message</p>
            <div className="flex-1 h-px bg-white/10" />
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <p className="text-[#F1B92D] text-sm font-bold uppercase tracking-[0.3em] italic">
                Real content. Real results. No fluff.
              </p>
            </div>
            {submitted ? (
              <div className="bg-[#1a1a1a] border border-[#F1B92D]/40 rounded-lg p-10 text-center">
                <CheckCircle size={48} className="text-[#F1B92D] mx-auto mb-4" />
                <h3 className="text-2xl font-black uppercase mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  Message Sent
                </h3>
                <p className="text-white text-sm">Garry will be in touch within 2 hours during business hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 md:p-8 space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-xs uppercase tracking-widest mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/20 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F1B92D] transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-xs uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/20 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F1B92D] transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-xs uppercase tracking-widest mb-2">Company Name</label>
                  <input
                    type="text"
                    required
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/20 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F1B92D] transition-colors"
                    placeholder="Acme Ltd"
                  />
                </div>
                <div>
                  <label className="block text-white text-xs uppercase tracking-widest mb-2">Company Size</label>
                  <select
                    required
                    value={formState.size}
                    onChange={(e) => setFormState({ ...formState, size: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/20 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F1B92D] transition-colors"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1 to 10 employees</option>
                    <option value="10-50">10 to 50 employees</option>
                    <option value="50-150">50 to 150 employees</option>
                    <option value="150-500">150 to 500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-xs uppercase tracking-widest mb-2">Tell Us About Your Business</label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/20 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F1B92D] transition-colors resize-none"
                    placeholder="What do you need content for? What platforms are you on? What's not working right now?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F1B92D] text-black font-bold py-4 rounded text-base hover:bg-[#e09510] transition-colors"
                >
                  Send My Enquiry
                </button>
                <p className="text-white text-xs text-center">No obligation. Garry responds within 2 hours during business hours.</p>
              </form>
            )}
          </motion.div>

        </div>
      </section>
      <section className="py-20 bg-black overflow-hidden px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-white/10 h-80 relative group shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35808.64125868846!2d-3.48347895!3d55.9332214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c10b788647cf%3A0x8848417937a06c8b!2sBroxburn!5e0!3m2!1sen!2suk!4v1714432134567!5m2!1sen!2suk" 
              className="w-full h-full transition-opacity duration-700"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F1B92D] flex items-center justify-center text-black">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[13px] md:text-sm font-bold uppercase tracking-widest text-white">Our Location</p>
                  <p className="text-sm font-bold text-white">Broxburn, West Lothian</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#050505] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-32">
              <Image 
                src="/bear-media-logo-horizontal-white.png" 
                alt="Bear Media" 
                fill 
                className="object-contain object-left"
              />
            </div>
            <span className="text-white text-sm">Bear Media · Broxburn, West Lothian</span>
          </div>
          <p className="text-white text-xs">© 2026 Bear Media. All rights reserved.</p>
          <a href="#book" className="text-[#F1B92D] text-sm font-semibold hover:underline">
            Book a Call
          </a>
        </div>
      </footer>
    </div>
  );
}