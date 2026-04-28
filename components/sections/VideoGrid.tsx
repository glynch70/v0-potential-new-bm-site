'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Play, X, CheckCircle2 } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Shed Company Content",
    action: "Filmed and edited on-site",
    outcome: "Helped generate enquiries",
    poster: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    caseStudy: {
      problem: "No online presence, relying on expensive and outdated marketing.",
      done: "Full on-site video production and social media management.",
      result: "45k views on a single reel and a consistent flow of leads."
    }
  },
  {
    id: 2,
    title: "Property Drone Tour",
    action: "Cinematic aerial coverage",
    outcome: "Premium listing attraction",
    poster: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    caseStudy: {
      problem: "Static images failing to convey the scale of premium properties.",
      done: "High-end drone cinematography and vertical video tours.",
      result: "Immediate engagement boost and faster property sales."
    }
  },
  {
    id: 3,
    title: "Construction Project",
    action: "Progress updates & team focus",
    outcome: "Instant professional trust",
    poster: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    caseStudy: {
      problem: "Clients were unaware of the quality and scale of active projects.",
      done: "Weekly progress filming and 'behind the scenes' content.",
      result: "Built a library of proof that closed high-ticket contracts."
    }
  },
  {
    id: 4,
    title: "Business Promo",
    action: "Brand story production",
    outcome: "Increased local awareness",
    poster: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    caseStudy: {
      problem: "Invisible in a crowded local market.",
      done: "Professional brand story video and high-impact social clips.",
      result: "10k+ local views and measurable increase in walk-in traffic."
    }
  },
  {
    id: 5,
    title: "Engagement Content",
    action: "Viral reel strategy",
    outcome: "Tripled social reach",
    poster: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    caseStudy: {
      problem: "Stagnant social media accounts with low engagement.",
      done: "Batch-filmed short-form content optimized for platform algorithms.",
      result: "Follower growth of 30% in 60 days and consistent daily views."
    }
  },
  {
    id: 6,
    title: "Cinematic Drone",
    action: "Fringe festival highlight",
    outcome: "Viral event coverage",
    poster: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    caseStudy: {
      problem: "Missing the opportunity to capture event scale.",
      done: "Licensed drone coverage and high-energy event editing.",
      result: "Became a staple visual for event promotion, reaching 100k+ views."
    }
  }
];

export default function VideoGrid() {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-4 italic"
          >
            This is the level your content should be at.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase font-bebas italic tracking-tight text-white"
          >
            Real Results in Action
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[9/16] md:aspect-square bg-neutral-900 rounded-3xl overflow-hidden cursor-pointer border border-white/5"
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.poster}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/80 transition-all duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center mb-6 shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play size={20} className="text-neutral-950 fill-neutral-950 ml-1" />
                 </div>
                 <h3 className="text-2xl font-black text-white uppercase font-bebas italic mb-2 tracking-wide">{video.title}</h3>
                 <p className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-1">{video.action}</p>
                 <p className="text-white/50 text-xs uppercase tracking-widest">{video.outcome}</p>
              </div>

              {/* Subtle Glow Hover Effect */}
              <div className="absolute -inset-1 bg-brand-yellow opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-3xl" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-white/50 text-lg mb-8 italic">
            "If your business isn’t showing up like this, you’re missing opportunities."
          </p>
          <a
            href="#contact"
            className="px-12 py-5 bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 transition-all shadow-2xl"
          >
            Get More Leads
          </a>
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
                   <div className="text-white/20 font-black uppercase font-bebas italic text-4xl">Video Player Placeholder</div>
                   <button 
                    onClick={() => setSelectedVideo(null)}
                    className="absolute top-6 right-6 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-yellow hover:text-neutral-950 transition-colors"
                   >
                     <X size={20} />
                   </button>
                </div>
                <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
                   <div>
                      <h3 className="text-4xl font-black text-white uppercase font-bebas italic mb-6 tracking-tight">{selectedVideo.title}</h3>
                      <div className="space-y-6">
                        <div>
                          <p className="text-brand-yellow font-black uppercase tracking-widest text-[10px] mb-2">The Problem</p>
                          <p className="text-white/60 text-sm leading-relaxed">{selectedVideo.caseStudy.problem}</p>
                        </div>
                        <div>
                          <p className="text-brand-yellow font-black uppercase tracking-widest text-[10px] mb-2">What Was Done</p>
                          <p className="text-white/60 text-sm leading-relaxed">{selectedVideo.caseStudy.done}</p>
                        </div>
                      </div>
                   </div>
                   <div className="bg-neutral-950 p-8 rounded-3xl border border-white/5 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                         <CheckCircle2 className="text-brand-yellow" size={24} />
                         <p className="text-brand-yellow font-black uppercase tracking-widest text-xs">The Result</p>
                      </div>
                      <p className="text-2xl font-black text-white uppercase font-bebas italic tracking-wide">{selectedVideo.caseStudy.result}</p>
                   </div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
