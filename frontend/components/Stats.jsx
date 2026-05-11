import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Heart, CheckCircle2 } from 'lucide-react';
import { stats } from '@/lib/mock';

const icons = [Award, Users, Heart, CheckCircle2];

const useInView = (ref) => {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const o = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSeen(true)),
      { threshold: 0.3 }
    );
    o.observe(ref.current);
    return () => o.disconnect();
  }, [ref]);
  return seen;
};

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const startTs = performance.now();
    const step = (ts) => {
      const p = Math.min((ts - startTs) / duration, 1);
      setN(Math.floor(start + (value - start) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-20 section-darker border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <div key={i} className="text-center">
              <Icon className="mx-auto text-white/80" size={34} strokeWidth={1.4} />
              <div className="mt-5 font-serif-display text-[60px] lg:text-[80px] leading-none text-white">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-[12px] uppercase tracking-[0.28em] text-white/55">
                {s.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
