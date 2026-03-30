'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Packages() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      console.log('Package request from:', email)
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <section id="packages" className="bg-dark py-48 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-xs mb-8"
        >
          PACKAGES
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl leading-tight mb-10 font-black text-white italic"
        >
          Flexible packages<br />
          built around your business
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-16 italic font-medium"
        >
          Every business is different — so every package is different.
          Get in touch and I'll put something together that fits your goals and budget.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-lg"
        >
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 h-full"
          >
            <input 
              required
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white/5 border border-white/10 px-8 py-5 text-white font-bold text-lg rounded-full focus:border-brand-yellow outline-none transition-all placeholder:text-white/20"
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="px-10 py-5 bg-brand-yellow text-dark font-bold text-xl uppercase tracking-widest rounded-full flex items-center justify-center gap-3 whitespace-nowrap disabled:opacity-50 hover:scale-105 hover:shadow-2xl transition-all"
            >
              Request <Send size={24} />
            </button>
          </form>
          
          {status === 'success' && (
            <p className="mt-8 text-brand-yellow font-bold uppercase tracking-widest text-xs">
              Thanks — I'll be in touch within 24 hours 🐻
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
