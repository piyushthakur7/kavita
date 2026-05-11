"use client";
import React, { useState, useEffect } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '@/lib/mock';

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 7000);
    return () => clearInterval(t);
  }, [total]);

  const current = testimonials[idx];

  return (
    <section className="py-24 lg:py-32 section-darker relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h2 className="font-serif-display text-center text-[44px] sm:text-[56px] lg:text-[68px] text-white leading-tight">
          Client <span className="italic font-light text-white/80">Reviews</span>
        </h2>

        <div className="mt-14 relative max-w-5xl mx-auto">
          <Quote
            className="absolute -left-2 -top-4 text-white/15"
            size={70}
            strokeWidth={1}
          />
          <div className="flex items-start gap-4 relative">
            <button
              onClick={() => setIdx((i) => (i - 1 + total) % total)}
              className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 items-center justify-center hover:bg-white/10 transition"
              aria-label="Previous"
            >
              <ArrowLeft size={18} className="text-white" />
            </button>
            <p
              key={current.id}
              className="text-center mx-auto text-[19px] lg:text-[22px] leading-[1.6] font-serif-display italic text-white/85 max-w-4xl animate-[fadeIn_.6s_ease]"
            >
              “{current.quote}”
            </p>
            <button
              onClick={() => setIdx((i) => (i + 1) % total)}
              className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 items-center justify-center hover:bg-white/10 transition"
              aria-label="Next"
            >
              <ArrowRight size={18} className="text-white" />
            </button>
          </div>

          <div className="mt-10 text-center">
            <h4 className="font-serif-display text-2xl text-white">{current.name}</h4>
            <p className="text-[12px] uppercase tracking-[0.28em] text-white/55 mt-1">
              {current.role}
            </p>
          </div>

          <div className="mt-10 flex justify-center gap-5">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setIdx(i)}
                className={`w-16 h-16 rounded-full overflow-hidden border-2 transition ${
                  i === idx ? 'border-white scale-110' : 'border-white/20 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity:0; transform: translateY(8px);} to { opacity:1; transform: translateY(0);} }`}</style>
    </section>
  );
};

export default Testimonials;
