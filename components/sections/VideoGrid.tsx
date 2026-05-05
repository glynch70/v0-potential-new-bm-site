'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Play, X, CheckCircle2 } from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';

const videos = [
  {
    id: 1,
    title: "Shed Company Content",
    youtubeId: "CQNytl9SPb4",
    type: "The Shed Company",
    action: "On-site video production",
    outcome: "Consistent daily visibility",
    poster: "https://img.youtube.com/vi/CQNytl9SPb4/maxresdefault.jpg",
    caseStudy: {
      problem: "No consistent online presence. Relying on outdated marketing and not getting enough enquiries.",
      done: "Filmed and created consistent content on-site, focused on showing real work and building trust.",
      result: "Improved visibility online, leading to direct enquiries and sales."
    }
  },
  {
    id: 2,
    title: "Work in Progress",
    youtubeId: "Ll1AUE9Gxrg",
    type: "Active Site Proof",
    action: "Behind the scenes",
    outcome: "Building client trust",
    poster: "https://img.youtube.com/vi/Ll1AUE9Gxrg/maxresdefault.jpg",
    caseStudy: {
      problem: "Clients were unaware of the quality and scale of active projects.",
      done: "Weekly progress filming and 'behind the scenes' content.",
      result: "Built a library of proof that closed high-ticket contracts."
    }
  },
  {
    id: 3,
    title: "Bear Media Showreel",
    youtubeId: "fIVELaRnAPg",
    type: "Brand Authority",
    action: "Cinematic drone & visuals",
    outcome: "Premium brand image",
    poster: "https://img.youtube.com/vi/fIVELaRnAPg/maxresdefault.jpg",
    caseStudy: {
      problem: "Missing the opportunity to capture event scale and brand authority.",
      done: "Licensed drone coverage and high-energy event editing.",
      result: "Became a staple visual for event promotion, reaching 100k+ views."
    }
  },
  {
    id: 4,
    title: "Engagement Content",
    youtubeId: "iEp_s1NSNlg",
    type: "Social Growth",
    action: "Viral reel strategy",
    outcome: "Increased reach & attention",
    poster: "https://img.youtube.com/vi/iEp_s1NSNlg/maxresdefault.jpg",
    caseStudy: {
      problem: "Social media was inconsistent and not generating attention.",
      done: "Created regular short-form content designed to be seen and shared.",
      result: "Increased visibility, stronger engagement, and consistent daily reach."
    }
  },
  {
    id: 5,
    title: "Property Drone Tour",
    youtubeId: "Sx438Fh9FWw",
    type: "Real Estate",
    action: "Cinematic aerial coverage",
    outcome: "Premium listing attraction",
    poster: "https://img.youtube.com/vi/Sx438Fh9FWw/maxresdefault.jpg",
    caseStudy: {
      problem: "Static images failing to convey the scale of premium properties.",
      done: "High-end drone cinematography and vertical video tours.",
      result: "Immediate engagement boost and faster property sales."
    }
  },
  {
    id: 6,
    title: "Business Promo",
    youtubeId: "kGIPg1Rel6Q",
    type: "Local Business",
    action: "Brand story production",
    outcome: "Increased local awareness",
    poster: "https://img.youtube.com/vi/kGIPg1Rel6Q/maxresdefault.jpg",
    caseStudy: {
      problem: "Invisible in a crowded local market.",
      done: "Professional brand story video and high-impact social clips.",
      result: "10k+ local views and measurable increase in walk-in traffic."
    }
  }
];

export default function VideoGrid() {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  return (
    <section id="work" className="py-24 bg-neutral-950">
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
            <TiltCard
              key={video.id}
              className="group relative aspect-[9/16] md:aspect-square bg-neutral-900 rounded-3xl overflow-hidden cursor-pointer border border-white/5"
            >
              <div 
                className="w-full h-full"
                onClick={() => setSelectedVideo(video)}
              >
                <img
                  src={video.poster}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/90 transition-all duration-300" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center mb-6 shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play size={20} className="text-neutral-950 fill-neutral-950 ml-1" />
                   </div>
                   <h3 className="text-2xl font-black text-white uppercase font-bebas italic mb-2 tracking-wide">{video.type}</h3>
                   <p className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-1">{video.action}</p>
                   <p className="text-white text-xs uppercase tracking-widest">{video.outcome}</p>
                </div>

                {/* Subtle Glow Hover Effect */}
                <div className="absolute -inset-1 bg-brand-yellow opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-3xl" />
              </div>
            </TiltCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-white font-bold text-xl md:text-2xl mb-8 italic max-w-2xl mx-auto leading-relaxed">
            "If your business isn’t showing up like this, you’re missing opportunities."
          </p>
          <a
            href="/contact"
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
                    className="absolute top-6 right-6 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-yellow hover:text-neutral-950 transition-colors z-10"
                   >
                     <X size={20} />
                   </button>
                </div>
                <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                   <div>
                      <h3 className="text-3xl md:text-4xl font-black text-white uppercase font-bebas italic mb-4 md:mb-6 tracking-tight">{selectedVideo.title}</h3>
                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <p className="text-brand-yellow font-black uppercase tracking-widest text-[10px] mb-2">The Problem</p>
                          <p className="text-white text-sm leading-relaxed">{selectedVideo.caseStudy.problem}</p>
                        </div>
                        <div>
                          <p className="text-brand-yellow font-black uppercase tracking-widest text-[10px] mb-2">What Was Done</p>
                          <p className="text-white text-sm leading-relaxed">{selectedVideo.caseStudy.done}</p>
                        </div>
                      </div>
                   </div>
                   <div className="bg-neutral-950 p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3 md:mb-4">
                         <CheckCircle2 className="text-brand-yellow" size={20} />
                         <p className="text-brand-yellow font-black uppercase tracking-widest text-[10px]">The Result</p>
                      </div>
                      <p className="text-xl md:text-2xl font-black text-white uppercase font-bebas italic tracking-wide">{selectedVideo.caseStudy.result}</p>
                   </div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
