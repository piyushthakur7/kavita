"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const videos = [
  "Ienkw5Nr1uo",
  "pC73IuFW8Ro",
  "ceqk-SFpRZU",
  "amFLMjWx9hI",
  "mrAYlKoDm_g",
  "GjPac6kjLP8",
  "28D8e8QFrag",
  "U9XkSl1UhRQ",
  "KRfp3nVadrQ",
  "uGejtMCvQ0c",
  "RK2ygVe3y2o"
];

const VideoCard = ({ id }) => {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // We send postMessage commands to the YouTube iframe API
  const sendCommand = (func) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: func, args: [] }), 
        '*'
      );
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      sendCommand('pauseVideo');
    } else {
      sendCommand('playVideo');
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (isMuted) {
      sendCommand('unMute');
    } else {
      sendCommand('mute');
    }
    setIsMuted(!isMuted);
  };

  return (
    <div 
      className="shrink-0 snap-center w-[280px] h-[500px] sm:w-[320px] sm:h-[560px] relative rounded-2xl overflow-hidden group cursor-pointer bg-gray-900 shadow-xl border border-gray-100/10"
      onClick={togglePlay}
    >
      {/* 
        pointer-events-none prevents interaction.
        To hide the forced YouTube title (top) and logo (bottom), we scale the iframe up by 35% 
        and hide the overflow in the parent container. This is the only way to remove them 
        while using direct iframe links.
      */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <iframe
          ref={iframeRef}
          className="w-full h-full transform scale-[1.35]"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0&playsinline=1&modestbranding=1&enablejsapi=1&fs=0&disablekb=1`}
          title="Video Story"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Play/Pause Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'opacity-0 scale-110' : 'opacity-100 scale-100 bg-black/40'}`}>
        {!isPlaying && (
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/30">
            <Play size={28} className="ml-1" fill="currentColor" />
          </div>
        )}
      </div>

      {/* Custom Controls */}
      <div className="absolute bottom-4 right-4 z-10">
        <button 
          onClick={toggleMute}
          className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </div>
  );
};

const VideoTestimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif-display text-[44px] sm:text-[56px] text-gray-900 leading-tight font-bold">
              Video <span className="italic font-normal text-kavita-tan">Stories</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-xl">
              See real transformations and experiences from our clients, captured in these short moments.
            </p>
          </div>
          
          {/* Custom Navigation */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-kavita-tan hover:text-white hover:border-kavita-tan transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-kavita-tan hover:text-white hover:border-kavita-tan transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-6 lg:px-10 pb-12 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map((id, index) => (
            <VideoCard key={index} id={id} />
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default VideoTestimonials;
