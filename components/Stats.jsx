"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Heart, CheckCircle2, Radio } from 'lucide-react';
import { stats } from '@/lib/mock';

const icons = [Award, Users, Heart, CheckCircle2];

// Hook to check if component is scrolled into view
const useInView = (ref) => {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const o = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSeen(true)),
      { threshold: 0.2 }
    );
    o.observe(ref.current);
    return () => o.disconnect();
  }, [ref]);
  return seen;
};

// LED segments helper: returns the color class based on height (0 = top/red, 9 = bottom/green)
const getLedColor = (idx) => {
  if (idx < 2) return 'active-red';     // Top 2 segments: Red (Clipping)
  if (idx < 5) return 'active-amber';   // Middle 3 segments: Amber
  return 'active-green';                // Bottom 5 segments: Green
};

const StatsCard = ({ stat, index }) => {
  const Icon = icons[index];
  const ref = useRef(null);
  const inView = useInView(ref);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const startTs = performance.now();
    const step = (ts) => {
      const p = Math.min((ts - startTs) / duration, 1);
      setN(Math.floor(start + (stat.value - start) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, stat.value]);

  // Proportional active segments (max 10)
  // Happy Clients (95%) reaches 10. Others reach proportional maximums
  const maxActiveSegments = index === 2 || index === 3 ? 10 : index === 1 ? 8 : 6;
  const activeSegmentsCount = inView 
    ? Math.min(10, Math.ceil((n / stat.value) * maxActiveSegments))
    : 0;

  return (
    <div 
      ref={ref} 
      className="bg-[#0d0b0f] border border-[#c5a880]/15 rounded-3xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex items-center justify-between group transition-all duration-300 hover:border-[#c5a880]/40 select-none"
    >
      {/* Stat Text Details */}
      <div className="flex-1 pr-4">
        <div className="flex items-center gap-2 text-[#c5a880]/60 mb-2">
          <Icon size={18} strokeWidth={1.5} className="group-hover:text-[#ffaa00] transition-colors" />
          <span className="text-[8px] font-mono tracking-widest uppercase">CHANNEL 0{index + 1}</span>
        </div>
        
        {/* Glowing Counter */}
        <div className="font-serif-display text-[44px] sm:text-[52px] font-extrabold leading-none text-[#e5dcd3] drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)]">
          {n}
          <span className="text-[#c5a880] text-2xl font-light ml-0.5">{stat.suffix}</span>
        </div>
        
        <p className="mt-3.5 text-[10px] uppercase tracking-[0.25em] text-[#e5dcd3]/50 leading-relaxed">
          {stat.label}
        </p>
      </div>

      {/* 10-Segment Vertical LED VU Meter (Equalizer style) */}
      <div className="flex flex-col gap-1 w-5 bg-[#080709] border border-white/5 rounded-lg p-1 shadow-inner relative justify-between h-32 items-center">
        {/* Active connection wire dot */}
        <div className="absolute -top-1 w-1 h-1 rounded-full bg-[#c5a880]/30" />
        
        {/* Render 10 vertical LED segments from Top (Red) to Bottom (Green) */}
        {Array.from({ length: 10 }).map((_, segmentIdx) => {
          // Invert index so 0 is top (red) and 9 is bottom (green)
          const ledIndexFromBottom = 9 - segmentIdx;
          const isActive = ledIndexFromBottom < activeSegmentsCount;
          const activeColorClass = getLedColor(segmentIdx);

          return (
            <div
              key={segmentIdx}
              className={`w-3.5 h-1.5 rounded-sm transition-all duration-150 ${
                isActive 
                  ? activeColorClass + ' opacity-100'
                  : 'bg-stone-900 border border-black opacity-30'
              }`}
            />
          );
        })}

        {/* Active connection wire dot */}
        <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#c5a880]/30" />
      </div>

    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-speaker-mesh border-b border-[#c5a880]/15 relative overflow-hidden select-none">
      {/* Decorative center grid soundwave */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(197,168,128,0.03)_1px,transparent_0)] bg-[size:16px_16px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Console Header */}
        <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2 text-white/55 font-mono text-[9px] tracking-widest uppercase">
            <Radio size={12} className="text-[#ffaa00] animate-pulse" />
            <span>SOUND LEVEL EQUALIZER DECK // METRIC INDICATORS</span>
          </div>
          <span className="text-[8px] font-mono text-white/20">DB RESIDENCE: AUTO</span>
        </div>

        {/* Level board grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <StatsCard key={i} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
