'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', businessName: '', contact: '', project: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      console.log('Contact form submission:', form)
      setStatus('success')
      setForm({ name: '', businessName: '', contact: '', project: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-6 pb-24 space-y-12 overflow-visible">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      {/* High-Contrast CTA Card */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gold rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative rounded-[2.5rem] p-12 md:p-20 bg-white text-black text-center shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-gold/10 to-transparent pointer-events-none" />
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-6">Need better <span className="text-gold drop-shadow-sm">content</span>?</h2>
          <p className="mt-4 text-black/70 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
            Book a free chat and we’ll map out what moves the needle fastest.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a 
              href="https://calendly.com/bearmedia/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-sm shadow-xl transition-all hover:scale-105"
            >
              Book Call
            </a>
            <a 
              href="https://wa.me/447879011860"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl border-2 border-black font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Grid below */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Info Card */}
        <div className="rounded-[2rem] p-10 md:p-14 bg-neutral-900/50 border border-white/5 flex flex-col justify-between group">
          <div>
            <h3 className="text-3xl font-black uppercase italic mb-6">Get In <span className="text-gold">Touch</span></h3>
            <p className="text-white leading-relaxed text-lg">
              Tell me about your business, your goals and where content is currently falling short.
            </p>
          </div>
          
          <div className="mt-16 space-y-6">
            <a href="mailto:hello@bear-media.com" className="flex items-center gap-4 text-white hover:text-gold transition-colors font-bold text-lg">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-colors">
                <Mail size={20} />
              </div>
              hello@bear-media.com
            </a>
            <a href="tel:07879011860" className="flex items-center gap-4 text-white hover:text-gold transition-colors font-bold text-lg">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-colors">
                <Phone size={20} />
              </div>
              07879 011860
            </a>
          </div>
        </div>

        {/* Enquiry Form Card */}
        <div className="rounded-[2rem] p-10 md:p-14 bg-neutral-900/50 border border-white/5 relative overflow-hidden">
          <h3 className="text-3xl font-black uppercase italic mb-8 text-white">Quick <span className="text-gold">Enquiry</span></h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              required
              className="w-full rounded-2xl bg-neutral-950 border border-white/5 px-6 py-5 outline-none focus:border-gold transition-colors font-medium" 
              placeholder="Your Name" 
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                className="w-full rounded-2xl bg-neutral-950 border border-white/5 px-6 py-5 outline-none focus:border-gold transition-colors font-medium" 
                placeholder="Business" 
                value={form.businessName}
                onChange={(e) => setForm({ ...form, businessName: e.target.value })}
              />
              <input 
                required
                className="w-full rounded-2xl bg-neutral-950 border border-white/5 px-6 py-5 outline-none focus:border-gold transition-colors font-medium" 
                placeholder="Email/Phone" 
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
              />
            </div>
            <textarea 
              required
              className="w-full rounded-2xl bg-neutral-950 border border-white/5 px-6 py-5 min-h-32 outline-none focus:border-gold transition-colors resize-none font-medium" 
              placeholder="How can I help?" 
              value={form.project}
              onChange={(e) => setForm({ ...form, project: e.target.value })}
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-5 rounded-2xl bg-gold text-black font-black uppercase tracking-widest text-sm shadow-xl transition-all hover:scale-[1.02] disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
            </button>
            
            <AnimatePresence>
              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-gold font-bold uppercase tracking-widest text-[13px] md:text-sm mt-4"
                >
                  Message sent! I'll be in touch soon.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  )
}
