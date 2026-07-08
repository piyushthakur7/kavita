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
    <section className="py-24 lg:py-32 bg-[#f5f4ef] border-y border-gray-200 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h2 className="font-serif-display text-center text-[44px] sm:text-[56px] lg:text-[68px] text-gray-900 leading-tight font-bold">
          Client <span className="italic font-normal text-kavita-tan">Reviews</span>
        </h2>

        <div className="mt-14 relative max-w-5xl mx-auto">
          <Quote
            className="absolute -left-2 -top-4 text-kavita-tan/20"
            size={70}
            strokeWidth={1}
          />
          <div className="flex items-start gap-4 relative">
            <button
              onClick={() => setIdx((i) => (i - 1 + total) % total)}
              className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-300 items-center justify-center hover:bg-white hover:border-kavita-tan transition shadow-sm text-gray-500 hover:text-kavita-tan"
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </button>
            <p
              key={current.id}
              className="text-center mx-auto text-[19px] lg:text-[22px] leading-[1.6] font-serif-display italic text-gray-700 max-w-4xl animate-[fadeIn_.6s_ease]"
            >
              “{current.quote}”
            </p>
            <button
              onClick={() => setIdx((i) => (i + 1) % total)}
              className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-300 items-center justify-center hover:bg-white hover:border-kavita-tan transition shadow-sm text-gray-500 hover:text-kavita-tan"
              aria-label="Next"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-10 text-center">
            <h4 className="font-serif-display text-2xl font-bold text-gray-900">{current.name}</h4>
          </div>

          <div className="mt-10 flex justify-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setIdx(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === idx ? 'bg-kavita-tan w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity:0; transform: translateY(8px);} to { opacity:1; transform: translateY(0);} }`}</style>
    </section>
  );
};

export default Testimonials;
