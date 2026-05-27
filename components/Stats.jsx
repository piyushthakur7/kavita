"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Heart, CheckCircle2 } from 'lucide-react';
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

  return (
    <div 
      ref={ref} 
      className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-full bg-[#f5f4ef] flex items-center justify-center mb-5 group-hover:bg-kavita-tan transition-colors duration-300">
        <Icon size={24} strokeWidth={1.5} className="text-kavita-tan group-hover:text-white transition-colors duration-300" />
      </div>
      
      {/* Counter */}
      <div className="font-serif-display text-[44px] sm:text-[52px] font-bold leading-none text-gray-900">
        {n}
        <span className="text-kavita-tan text-2xl font-light ml-0.5">{stat.suffix}</span>
      </div>
      
      <p className="mt-3 font-medium text-[13px] uppercase tracking-wider text-gray-500">
        {stat.label}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-[#fcfbf9] border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
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
