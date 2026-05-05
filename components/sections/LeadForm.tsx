'use client';

import { motion } from 'framer-motion';
import { Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     const formData = new FormData(e.target as HTMLFormElement);
     const data = {
       name: formData.get('name'),
       company: formData.get('company'),
       email: formData.get('email'),
       size: 'Homepage Form',
       message: 'Enquiry from main landing page.'
     };
 
     try {
       const response = await fetch('/api/enquiry', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
       });
 
       if (response.ok) {
         setSubmitted(true);
       }
     } catch (error) {
       console.error('Submission failed:', error);
     } finally {
       setIsSubmitting(false);
     }
   };

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
       {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-6">Take Action</p>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase leading-tight font-bebas italic mb-8">
              If you're not visible, <br />
              <span className="text-brand-yellow">you're losing business.</span>
            </h2>
            <p className="text-lg text-white mb-12 max-w-lg leading-relaxed">
              We handle your content so your business stays seen. Stop letting your competitors take your leads.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://calendly.com/bearmedia/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-brand-yellow rounded-xl text-neutral-950 group-hover:scale-110 transition-transform">
                  <Send size={20} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Book a Strategy Call</div>
                  <div className="text-white text-[10px] uppercase tracking-widest mt-0.5">Free 30-min strategy</div>
                </div>
              </a>

              <a
                href="https://wa.me/447879011860"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-[#25D366] rounded-xl text-white group-hover:scale-110 transition-transform">
                  <MessageSquare size={20} className="fill-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">WhatsApp</div>
                  <div className="text-white text-[10px] uppercase tracking-widest mt-0.5">Fastest response</div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-6">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-neutral-950 bg-neutral-800 overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               <p className="text-white text-sm font-medium">Joined by <span className="text-white font-bold italic">25+ local businesses</span> this month.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900 p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 shadow-2xl relative"
          >
            {submitted ? (
              <div className="py-20 text-center">
                 <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="text-brand-yellow" size={40} />
                 </div>
                 <h3 className="text-3xl font-black text-white uppercase font-bebas italic mb-4">Message Sent</h3>
                 <p className="text-white leading-relaxed">Garry will get back to you personally within 2 hours.</p>
                 <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-yellow font-bold uppercase tracking-widest text-xs hover:underline"
                 >
                   Send another message
                 </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-[10px] uppercase tracking-[0.2em] mb-3 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-neutral-950 border border-white/5 rounded-2xl text-white placeholder:text-white focus:outline-none focus:border-brand-yellow/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-[10px] uppercase tracking-[0.2em] mb-3 ml-1">Business Name</label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Acme Trades Ltd"
                    className="w-full px-6 py-4 bg-neutral-950 border border-white/5 rounded-2xl text-white placeholder:text-white focus:outline-none focus:border-brand-yellow/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-[10px] uppercase tracking-[0.2em] mb-3 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-neutral-950 border border-white/5 rounded-2xl text-white placeholder:text-white focus:outline-none focus:border-brand-yellow/50 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Get Your Free Strategy Call'}
                </button>
                <p className="text-center text-white text-[10px] uppercase tracking-widest">No obligation. 100% confidential.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
