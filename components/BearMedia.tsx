/* global Calendly */
/**
 * Bear Media — Sales Funnel Landing Page
 * Design: Dark Authority — cinematic black/charcoal base, amber (#F5A623) CTA, white text
 * Typography: Bebas Neue (headlines), Inter (body)
 * Target: Businesses across the Scottish Central Belt serious about their brand online
 * Goal: Book a free 30-minute discovery call
 */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle, Star, Play, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

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
        // Reset form after 3 seconds
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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F5A623] rounded flex items-center justify-center">
              <span className="text-black font-black text-xs tracking-wider">BM</span>
            </div>
            <span className="font-bold text-white tracking-wide text-sm uppercase">Bear Media</span>
          </div>
          <a
            href="#book"
            className="bg-[#F5A623] text-black text-sm font-bold px-5 py-2 rounded hover:bg-[#e09510] transition-colors"
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
            <motion.p variants={fadeUp} className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] mb-4">
              On-Site Content Creation Across the Scottish Central Belt
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 tracking-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              We Come to You.<br />
              We Film It. We Edit It.<br />
              <span className="text-[#F5A623]">Your Channels Stay Full.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
              Bear Media visits your business, films everything you need — video, photography, and drone — then handles all the editing and channel management. You get professional content without touching a camera or spending a day briefing a team.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
              <a
                href="#book"
                className="bg-[#F5A623] text-black font-bold px-8 py-4 rounded text-base hover:bg-[#e09510] transition-colors"
              >
                Book a Free 30-Min Call
              </a>
              <a
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
                  <div className="text-2xl font-black text-[#F5A623]">{item.stat}</div>
                  <div className="text-white/50 text-sm">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <a href="#pain" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={28} className="text-white/40" />
        </a>
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
            <motion.p variants={fadeUp} className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] mb-3 text-center">
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
                  className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8 hover:border-[#F5A623]/40 transition-colors"
                >
                  <div className="text-[#F5A623]/30 text-5xl font-black mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {item.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
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
            <motion.p variants={fadeUp} className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] mb-3">
              The Service
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black uppercase mb-4 leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              We Do It All.<br />
              <span className="text-[#F5A623]">On-Site and Online.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-base mb-12">
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
                    "AI-enhanced editing using the latest production tools",
                    "Monthly content calendar planned and approved in advance",
                    "Captions, scheduling, and posting — fully managed",
                    "Monthly performance report so you can see what's working",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#F5A623] mt-0.5 shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#book"
                  className="inline-block bg-[#F5A623] text-black font-bold px-8 py-4 rounded hover:bg-[#e09510] transition-colors"
                >
                  Book a Free Call
                </a>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-2 text-white">Who This Is For</h3>
                <p className="text-white/50 text-sm mb-6">Bear Media works with businesses across the Scottish Central Belt who are serious about their brand online.</p>
                <div className="space-y-3">
                  {[
                    "Businesses that want a real person on-site, not a brief sent to a stranger",
                    "Founders and MDs who know their brand deserves better content",
                    "Marketing teams that need consistent output without the overhead",
                    "Companies that have tried DIY video and know it's not working",
                    "Businesses ready for professional video, photography, and drone",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-2 shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Starting from</p>
                  <p className="text-white/50 text-xs mb-2">Full-service content creation, on-site and managed. No hidden fees.</p>
                  <p className="text-3xl font-black text-white">£750 <span className="text-white/40 text-base font-normal">/ month</span></p>
                  <p className="text-white/40 text-xs mt-1">Minimum 3-month engagement</p>
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
            <motion.p variants={fadeUp} className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] mb-3 text-center">
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
                  quote: "Garry just gets it. No faff, no jargon — just great content that actually connects with people. Our engagement has tripled since we started working together.",
                  name: "Seamus Corry",
                  company: "The Potentially You Project",
                  stars: 5,
                },
                {
                  quote: "Professional, reliable and quick to turn around. The video content has made a real difference to our online presence. We look like a much bigger operation now.",
                  name: "Stephen Johnstone",
                  company: "M&M Compliance Training",
                  stars: 5,
                },
                {
                  quote: "Working with Bear Media has been seamless. The content quality is consistently high and Garry is great to work with. Exactly what a growing business needs.",
                  name: "Steven Summon",
                  company: "Voice2Lead",
                  stars: 5,
                },
              ].map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  className="bg-[#1a1a1a] border-l-4 border-[#F5A623] rounded-lg p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} size={14} className="text-[#F5A623] fill-[#F5A623]" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-8 text-center">
              <p className="text-white/40 text-sm">25 reviews · 5.0 ★ on Google</p>
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
            <motion.p variants={fadeUp} className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] mb-3 text-center">
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
                      className={`text-[#F5A623] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-white/60 leading-relaxed border-t border-white/10 pt-4">
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
              <motion.p variants={fadeUp} className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] mb-3">
                Book a Call
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Let's Come<br />
                <span className="text-[#F5A623]">To You.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-8">
                A free 30-minute call. No pitch, no pressure. We'll find out what your business needs, show you what we've created for similar companies, and tell you exactly what we'd do for you.
              </motion.p>
              <motion.div variants={fadeUp} className="space-y-4">
                {[
                  { icon: <Phone size={16} />, text: "+44 7879 011860" },
                  { icon: <Mail size={16} />, text: "info@bear-media.com" },
                  { icon: <MapPin size={16} />, text: "Broxburn, West Lothian — filming across the Scottish Central Belt" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 text-white/50 text-sm">
                    <span className="text-[#F5A623] mt-0.5">{item.icon}</span>
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
            <p className="text-white/30 text-sm uppercase tracking-widest whitespace-nowrap">Or send us a message</p>
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
            {submitted ? (
              <div className="bg-[#1a1a1a] border border-[#F5A623]/40 rounded-lg p-10 text-center">
                <CheckCircle size={48} className="text-[#F5A623] mx-auto mb-4" />
                <h3 className="text-2xl font-black uppercase mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  Message Sent
                </h3>
                <p className="text-white/60 text-sm">Garry will be in touch within 2 hours during business hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8 space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/20 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/20 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Company Name</label>
                  <input
                    type="text"
                    required
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/20 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
                    placeholder="Acme Ltd"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Company Size</label>
                  <select
                    required
                    value={formState.size}
                    onChange={(e) => setFormState({ ...formState, size: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/20 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
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
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Tell Us About Your Business</label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/20 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F5A623] transition-colors resize-none"
                    placeholder="What do you need content for? What platforms are you on? What's not working right now?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F5A623] text-black font-bold py-4 rounded text-base hover:bg-[#e09510] transition-colors"
                >
                  Send My Enquiry
                </button>
                <p className="text-white/30 text-xs text-center">No obligation. Garry responds within 2 hours during business hours.</p>
              </form>
            )}
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#050505] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#F5A623] rounded flex items-center justify-center">
              <span className="text-black font-black text-[10px]">BM</span>
            </div>
            <span className="text-white/40 text-sm">Bear Media · Broxburn, West Lothian</span>
          </div>
          <p className="text-white/30 text-xs">© 2026 Bear Media. All rights reserved.</p>
          <a href="#book" className="text-[#F5A623] text-sm font-semibold hover:underline">
            Book a Call
          </a>
        </div>
      </footer>
    </div>
  );
}
