'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      console.log('Contact form submission:', form)
      setStatus('success')
      setForm({ name: '', email: '', project: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-dark">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-xs mb-10"
        >
          GET IN TOUCH
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-[14vw] md:text-[16vw] leading-[0.7] font-black tracking-tighter mb-24 text-center select-none text-brand-yellow italic drop-shadow-2xl"
        >
          LET'S TALK
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">
          {/* Left: Info */}
          <div className="flex flex-col gap-12">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl max-w-sm font-black leading-tight text-white uppercase italic"
            >
              Tell me about your business
            </motion.p>

            <div className="flex flex-col gap-8">
              <a 
                href="tel:+447879011860" 
                className="flex items-center gap-5 text-2xl md:text-4xl font-black hover:text-brand-yellow transition-colors group text-white italic"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-yellow shadow-xl flex items-center justify-center text-dark group-hover:scale-110 transition-transform">
                   <Phone size={28} />
                </div>
                <span>+44 7879 011860</span>
              </a>
              <a 
                href="mailto:info@bear-media.com" 
                className="flex items-center gap-5 text-2xl md:text-4xl font-black hover:text-brand-yellow transition-colors group text-white italic"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-yellow shadow-xl flex items-center justify-center text-dark group-hover:scale-110 transition-transform">
                   <Mail size={28} />
                </div>
                <span>info@bear-media.com</span>
              </a>
              <div className="flex items-start gap-4 text-white/40 font-bold uppercase tracking-widest mt-8 text-xs max-w-xs">
                <MapPin size={24} className="mt-1 text-brand-yellow shrink-0" />
                <span>Broxburn, West Lothian — serving Scotland</span>
              </div>
            </div>

            <a 
              href="tel:+447879011860" 
              className="mt-8 bg-brand-yellow text-dark text-xl font-black py-6 px-12 rounded-full flex items-center justify-center gap-4 shadow-xl transition-all hover:scale-105 uppercase tracking-widest italic"
            >
              <Phone size={24} /> Call Garry directly
            </a>
          </div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-10 md:p-14 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] pl-2">
                  Your name
                </label>
                <input 
                  required
                  type="text" 
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-xl text-white focus:border-brand-yellow outline-none transition-all placeholder:text-white/10 font-bold text-lg" 
                  placeholder="Enter Name"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] pl-2">
                  Email address
                </label>
                <input 
                  required
                  type="email" 
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-xl text-white focus:border-brand-yellow outline-none transition-all placeholder:text-white/10 font-bold text-lg" 
                  placeholder="Enter Email"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] pl-2">
                  Tell me about your project
                </label>
                <textarea 
                  required
                  rows={4}
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-xl text-white focus:border-brand-yellow outline-none transition-all placeholder:text-white/10 font-bold text-lg resize-none" 
                  placeholder="Tell me more"
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="mt-6 bg-brand-yellow text-dark font-black py-6 px-12 rounded-full flex items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 text-xl uppercase tracking-widest italic"
              >
                Send Message <Send size={24} />
              </button>
            </form>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 text-center text-brand-yellow font-black uppercase tracking-[0.2em] text-xs"
                >
                  Thanks — I'll be in touch within 24 hours 🐻
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 🗺️ MAP SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full mt-24 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative grayscale invert contrast-[1.2] opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17911.33230894065!2d-3.4862215103681534!3d55.93883391768875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887db80840dc73d%3A0x67341db03d1db767!2sBroxburn!5e0!3m2!1sen!2suk!4v1711823154821!5m2!1sen!2suk" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="filter brightness-75 hover:brightness-100 transition-all duration-1000"
          />
          <div className="absolute inset-0 pointer-events-none border-[12px] border-dark rounded-[24px]" />
        </motion.div>
      </div>
    </section>
  )
}
