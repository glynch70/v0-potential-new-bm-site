'use client'

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

import YouTubeEmbed from '@/components/YouTubeEmbed';

const VideoCard = ({ videoId, title, caption }: { videoId: string, title: string, caption: string }) => {
  return (
    <div className="flex-shrink-0 w-[300px] md:w-[400px] snap-center">
       <div className="mb-4">
          <YouTubeEmbed videoId={videoId} title={title} />
       </div>
       <div className="px-2">
         <p className="text-gold font-black uppercase italic font-bebas tracking-widest text-xs mb-1">{title}</p>
         <p className="text-white font-bold text-lg leading-tight uppercase font-bebas italic">{caption}</p>
       </div>
    </div>
  );
};

export default function HorizontalVideoScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const videos = [
    { videoId: "Ll1AUE9Gxrg", title: "Service Video – Veterinary Practice", caption: "Builds trust and explains your service clearly" },
    { videoId: "CQNytl9SPb4", title: "Promo Video – Trade Business", caption: "Designed to attract higher-value enquiries" },
    { videoId: "9EMz1OjGuZo", title: "Event Coverage – Local Business", caption: "Drives engagement and shows your business in action" }
  ];

  return (
    <section className="py-24 px-6 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic font-bebas tracking-tight text-white leading-none mb-4">
          See the work. <br />
          <span className="text-gold">See the results.</span>
        </h2>
        <p className="text-white italic text-lg font-medium">Real content created for real local businesses.</p>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-12 no-scrollbar px-4 md:px-0 scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video, i) => (
          <VideoCard key={i} {...video} />
        ))}
      </div>
    </section>
  );
}
