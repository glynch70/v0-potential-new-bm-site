'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin, Star, ExternalLink } from 'lucide-react'
import { ServiceCardsSection } from '@/components/sections/ServiceCardsSection'
import { BrandStorySection } from '@/components/sections/BrandStorySection'
import { WhoIWorkWithSection } from '@/components/sections/WhoIWorkWithSection'
import { PartnerLogosSection } from '@/components/sections/PartnerLogosSection'
import { MinimalFooter } from '@/components/sections/MinimalFooter'
import AnimatedButton from '@/components/ui/button-with-icon'

// ─── NAV ───────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false)
  
  const hashLinks = ['Services', 'Work', 'About', 'Contact']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/bear-media-logo.png" alt="Bear Media" width={40} height={40} />
          <span className="font-bold text-white text-lg">Bear<span className="text-[#C9A227]">Media</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {hashLinks.map(l => (
            <a key={l} href={`/#${l.toLowerCase()}`} className="text-zinc-300 hover:text-[#C9A227] transition-colors text-sm font-medium">{l}</a>
          ))}
          <Link href="/training" className="text-zinc-300 hover:text-[#C9A227] transition-colors text-sm font-medium">Training</Link>
          <Link href="/testimonials" className="text-zinc-300 hover:text-[#C9A227] transition-colors text-sm font-medium">Testimonials</Link>
          <a href="https://portfolio.bear-media.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-[#C9A227] transition-colors text-sm font-medium">Portfolio</a>
          <a href="/#contact" className="bg-[#C9A227] hover:bg-[#FF6B35] text-[#0f172a] font-bold px-5 py-2 rounded-full text-sm transition-colors">Book a Service</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {hashLinks.map(l => (
            <a key={l} href={`/#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-zinc-300 text-lg font-medium">{l}</a>
          ))}
          <Link href="/training" onClick={() => setOpen(false)} className="text-zinc-300 text-lg font-medium">Training</Link>
          <Link href="/testimonials" onClick={() => setOpen(false)} className="text-zinc-300 text-lg font-medium">Testimonials</Link>
          <a href="https://portfolio.bear-media.com/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="text-zinc-300 text-lg font-medium">Portfolio</a>
          <a href="/#contact" onClick={() => setOpen(false)} className="bg-[#C9A227] hover:bg-[#FF6B35] text-[#0f172a] font-bold px-5 py-3 rounded-full text-center">Book a Service</a>
        </div>
      )}
    </nav>
  )
}

// ─── HERO ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/work/websites-desktop.jpg"
      >
        <source src="/media/NEW BM DRONE HERO.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">West Lothian · Scotland</p>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Websites &<br /><span className="text-amber-400">Social Media.</span>
        </h1>
        <p className="text-zinc-300 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Helping businesses get seen, trusted, and contacted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AnimatedButton label="Book a Service" href="#contact" />
          <a href="https://portfolio.bear-media.com/" target="_blank" rel="noopener noreferrer" className="border-2 border-white/50 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-colors">View Portfolio</a>
        </div>
      </div>
    </section>
  )
}

// ─── WORK ─────────────────────────────────────────────────────────────────
function Work() {
  const [activeTab, setActiveTab] = useState<'websites' | 'social'>('websites')
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  const websites = [
    { img: '/work/website-5-lewis-joinery.jpg', name: 'K Lewis Joinery', desc: 'Expert equestrian construction & bespoke joinery', url: 'https://www.klewisjoineryltd.co.uk/' },
    { img: '/work/robertsons-transport.png', name: 'Robertson Transport', desc: 'Transport solutions you can trust', url: 'https://rt-ltd.uk/' },
    { img: '/work/website-3-herb-soul.jpg', name: 'Herb & Soul', desc: 'Natural wellness & herbal remedies', url: 'https://www.herbandsoul.uk/' },
    { img: '/work/website-4-almond-vet.jpg', name: 'Almond Vet Care', desc: 'Professional veterinary care', url: 'https://almondvetcare.co.uk/' },
    { img: '/work/website-managing.jpg', name: 'Managing What Matters', desc: 'Lead people, not just tasks', url: 'https://managingwhatmatters.co.uk/' },
  ]

  const social = [
    { img: '/work/content-creation.png', name: 'Content Creation', desc: 'Social media posts and graphics for Scottish businesses' },
    { img: '/work/youtube-management.png', name: 'YouTube Management', desc: 'Channel setup, shorts, thumbnails, and content strategy' },
    { img: '/work/social-media-management.png', name: 'Social Media Management', desc: 'Monthly content creation and posting for Scottish businesses' },
  ]

  const tabs = [
    { id: 'websites' as const, label: 'Websites', items: websites },
    { id: 'social' as const, label: 'Social Media', items: social },
  ]

  const current = tabs.find(t => t.id === activeTab)!

  const handleCardClick = (item: { img: string; name: string; desc: string; url?: string | null }) => {
    if (item.url) return
    setLightboxImage({ src: item.img, alt: item.name })
  }

  const closeLightbox = () => setLightboxImage(null)

  return (
    <section id="work" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Work</h2>
          <p className="text-zinc-400 text-lg">Real results for real businesses across Scotland.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${activeTab === t.id ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.items.map((item: {img: string, name: string, desc: string, url?: string | null}, i: number) => (
            <div
              key={i}
              className={`group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-all ${!item.url ? 'cursor-pointer' : ''}`}
              onClick={() => handleCardClick(item)}
              role={!item.url ? 'button' : undefined}
              tabIndex={!item.url ? 0 : undefined}
              onKeyDown={!item.url ? (e) => e.key === 'Enter' && handleCardClick(item) : undefined}
            >
              <div className="relative h-48">
                <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                {item.url && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-amber-500 hover:bg-amber-400 text-black font-bold px-5 py-2.5 rounded-full text-sm">
                      View live site →
                    </a>
                  </div>
                )}
              </div>
              <div className="p-4 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-white font-bold">{item.name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{item.desc}</p>
                </div>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                    className="flex-shrink-0 bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 text-xs font-semibold px-3 py-1.5 rounded-full transition-all mt-1">
                    Visit ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://portfolio.bear-media.com/" target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors border border-white/10">
            View full portfolio gallery <ExternalLink size={20} className="text-amber-500" />
          </a>
        </div>
      </div>

      {/* Lightbox modal for Social Media cards */}
      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={closeLightbox} />
      )}
    </section>
  )
}

// ─── LIGHTBOX ──────────────────────────────────────────────────────────────
function Lightbox({ image, onClose }: { image: { src: string; alt: string }; onClose: () => void }) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="relative w-[90vw] max-w-5xl h-[85vh] p-4">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="90vw"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}

// ─── SOCIAL VIDEO REEL ────────────────────────────────────────────────────
function VideoReel() {
  return (
    <section className="py-14 px-4 bg-black">
      <a
        href="https://www.youtube.com/@bearmedia70"
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-3xl mx-auto text-center group cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
      >
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Content creation</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-3">See it in action</h2>
        <p className="text-zinc-400 text-lg mb-6">Scroll-stopping content that gets your business noticed.</p>
        <div className="relative w-full max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-lg">
          <Image
            src="/work/content-creation-showcase.png"
            alt="Bear Media video content — Forth Bridges tiny planet drone footage"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 36rem"
          />
        </div>
        <p className="text-center text-sm text-amber-400/90 mt-3 flex items-center justify-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          View Channel
        </p>
      </a>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    {
      name: "Gary Young",
      business: "WeBuyAnyHome Edinburgh",
      quote: "Garry built our website fast and it looks brilliant. Clean, professional and exactly what we needed. Highly recommend.",
    },
    {
      name: "Leanne Murphy",
      business: "Managing What Matters",
      quote: "Really impressed with the whole process. The site came together quickly and the social content has been consistent and on-brand from day one.",
    },
    {
      name: "Seamus Corry",
      business: "The Potentially You Project",
      quote: "Garry just gets it. No faff, no jargon — just great content that actually connects with people.",
    },
    {
      name: "Stephen Johnstone",
      business: "M&M Compliance Training",
      quote: "Professional, reliable and quick to turnaround. The video content has made a real difference to our online presence.",
    },
    {
      name: "Steven Summon",
      business: "Voice2Lead",
      quote: "Working with Bear Media has been seamless. The content quality is consistently high and Garry is great to work with.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Reviews</p>
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-black text-white">What clients say</h2>
            <a href="https://g.page/r/bear-media" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-[#C9A227]/30 rounded-full hover:bg-zinc-800 transition-colors">
              <span className="text-zinc-300 text-sm font-medium">25 reviews · <span className="text-[#C9A227] font-bold">5.0 ★</span> on Google</span>
            </a>
          </div>
        </div>
        
        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:px-0 scrollbar-hide snap-x md:snap-none">
          {reviews.map((review, i) => (
            <div key={i} className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center bg-zinc-900 rounded-3xl p-8 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {Array(5).fill(0).map((_, idx) => (
                    <span key={idx} className="text-[#C9A227] text-lg">★</span>
                  ))}
                </div>
                <p className="text-zinc-200 text-lg leading-relaxed mb-8">"{review.quote}"</p>
              </div>
              <div>
                <p className="text-white font-bold">{review.name}</p>
                <p className="text-zinc-400 text-sm">{review.business}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white text-xl md:text-2xl font-bold mb-6">Ready to get results like this?</p>
          <a href="#contact"
             className="inline-block bg-[#C9A227] hover:bg-[#FF6B35] text-[#0f172a] font-bold px-8 py-4 rounded-full text-lg transition-colors">
            Book a call
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT ────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative max-w-sm mx-auto w-full">
            <div className="rounded-3xl overflow-hidden aspect-[3/4] relative border border-zinc-800">
              <Image src="/garry-lynch-portrait.png" alt="Garry Lynch - Bear Media" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-black font-black text-sm px-4 py-2 rounded-2xl shadow-xl">
              Bear Media · Broxburn
            </div>
          </div>
          <div>
            <p className="text-zinc-500 font-semibold uppercase tracking-widest mb-3 text-sm">About the Founder</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#C9A227] mb-8">Hi, I'm Garry.</h2>
            
            <div className="space-y-5 mb-10 text-zinc-300 text-lg leading-relaxed">
              <p>
                I started Bear Media because I got fed up watching good local businesses get ignored online — not because they weren't good at what they do, but because nobody could find them.
              </p>
              <p>
                I've spent <span className="text-[#C9A227] font-bold">25 years in communications</span>. Drone footage, websites that actually convert, social media management, and helping businesses get their heads around AI before it became a buzzword.
              </p>
              <p>
                No office. No account managers. No waffle. Just me, my kit, and 25 years of knowing what works.
              </p>
              <p>
                Based in <span className="text-[#C9A227] font-bold">Broxburn, West Lothian</span> — working with businesses across Edinburgh, Fife, Glasgow, and Central Scotland.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-zinc-800 mb-8">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-black text-white">25+</p>
                <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-wide mt-1">Years Experience</p>
              </div>
              <div className="text-center border-x border-zinc-800">
                <p className="text-2xl md:text-3xl font-black text-white">25+</p>
                <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-wide mt-1">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-black text-white flex items-center justify-center gap-1">
                  5<Star className="w-5 h-5 fill-[#C9A227] text-[#C9A227]" />
                </p>
                <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-wide mt-1">Google Rating</p>
              </div>
            </div>

            <a href="#contact" className="bg-[#C9A227] hover:bg-[#FF6B35] text-[#0f172a] hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-colors inline-block">
              Book a Service
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ──────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Get in touch</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Let's talk</h2>
        <p className="text-zinc-400 text-lg mb-10">Tell me about your business and I'll get back to you within 24 hours.</p>
        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 text-left">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3 text-zinc-300">
              <Phone size={18} className="text-amber-400 flex-shrink-0" />
              <a href="tel:+447879011860" className="hover:text-amber-400 transition-colors">+44 7879 011860</a>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <Mail size={18} className="text-amber-400 flex-shrink-0" />
              <a href="mailto:info@bear-media.com" className="hover:text-amber-400 transition-colors">info@bear-media.com</a>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <MapPin size={18} className="text-amber-400 flex-shrink-0" />
              <span>Broxburn, West Lothian — serving clients across Scotland</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') return (
    <div className="text-center py-8">
      <p className="text-amber-400 text-2xl font-bold mb-2">Message sent! ✓</p>
      <p className="text-zinc-400">I'll get back to you within 24 hours.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-zinc-400 text-sm mb-1 block">Your name</label>
          <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
            placeholder="John Smith" />
        </div>
        <div>
          <label className="text-zinc-400 text-sm mb-1 block">Email address</label>
          <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
            placeholder="john@example.com" />
        </div>
      </div>
      <div>
        <label className="text-zinc-400 text-sm mb-1 block">Tell me about your project</label>
        <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 resize-none"
          placeholder="What do you need help with?" />
      </div>
      <button type="submit" disabled={status === 'sending'}
        className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-bold px-8 py-4 rounded-xl text-lg transition-colors">
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>
      {status === 'error' && <p className="text-red-400 text-sm text-center">Something went wrong. Try emailing directly.</p>}
    </form>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <BrandStorySection />
      <ServiceCardsSection />
      <Work />
      <VideoReel />
      <Testimonials />
      <WhoIWorkWithSection />
      <PartnerLogosSection />
      <About />
      <Contact />
      <MinimalFooter />
    </main>
  )
}
