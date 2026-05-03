'use client'

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoCardProps {
  src: string;
  title: string;
  caption: string;
}

const VideoCard = ({ src, title, caption }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay blocked", e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="relative flex-shrink-0 w-[300px] md:w-[400px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-white/10 group transition-all duration-500 hover:border-brand-yellow/50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlays */}
      <div className={`absolute inset-0 bg-neutral-950/40 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 shadow-[inset_0_0_100px_rgba(245,166,35,0.1)] transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Content */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <p className="text-brand-yellow font-black uppercase italic font-bebas tracking-widest text-xs mb-1">{title}</p>
        <p className="text-white font-bold text-lg leading-tight uppercase font-bebas italic">{caption}</p>
      </div>

      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-brand-yellow/10 backdrop-blur-md flex items-center justify-center text-brand-yellow border border-brand-yellow/20">
            <Play size={24} className="fill-current ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export default function HorizontalVideoScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const videos = [
    { src: "/media/NEW BM DRONE HERO.mp4", title: "Drone Authority", caption: "Property Showcase" },
    { src: "/media/hero-drone.mp4", title: "Social Impact", caption: "Social Content" },
    { src: "/work/promo-video.mp4", title: "Business Growth", caption: "Local Business Promo" },
    { src: "/work/feedback-video.mp4", title: "Client Trust", caption: "Video Testimonial" },
    { src: "/bm-drone-hero.mp4", title: "Site Mastery", caption: "On-Site Coverage" }
  ];

  return (
    <section className="py-24 px-6 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic font-bebas tracking-tight text-white leading-none">
          See the work. <br />
          <span className="text-brand-yellow text-stroke-sm">See the results.</span>
        </h2>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-12 no-scrollbar px-4 md:px-0 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video, i) => (
          <VideoCard key={i} {...video} />
        ))}
      </div>
    </section>
  );
}
