'use client'

import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  description?: string;
  result?: string;
  label?: string;
}

export default function YouTubeEmbed({ videoId, title, description, result, label }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full space-y-4">
      <div 
        className="relative aspect-video bg-neutral-900 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <img 
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.includes('maxresdefault')) {
                  target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }
              }}
              alt={title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle overlay gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-neutral-950/40 pointer-events-none" />
            
            {label && (
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1 bg-gold text-neutral-950 font-black uppercase tracking-widest text-[13px] md:text-sm rounded-full shadow-lg">
                  {label}
                </span>
              </div>
            )}

            <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold text-neutral-950 flex items-center justify-center shadow-[0_0_30px_rgba(245,166,35,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Play size={24} className="fill-current ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 pointer-events-none">
               <p className="text-white font-black uppercase italic font-bebas tracking-widest text-lg md:text-xl drop-shadow-md">{title}</p>
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      
      {(description || result) && (
        <div className="px-2">
          {description && <p className="text-white text-sm italic mb-2 leading-relaxed">{description}</p>}
          {result && (
            <p className="text-gold font-black uppercase italic font-bebas tracking-widest text-lg">
              Result: {result}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
