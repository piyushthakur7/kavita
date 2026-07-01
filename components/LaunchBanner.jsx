"use client";
import React from 'react';
import Link from 'next/link';

export default function LaunchBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-rose-50 to-[#fdfbf7] border-y border-rose-100/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-rose-600 mb-3">
            Introducing: The Inner Child Healing Journey
          </p>
          <h2 className="font-serif-display text-[32px] sm:text-[40px] leading-tight text-gray-900 mb-4">
            An 8-Week Group Program <span className="italic font-light">for Women</span>
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600">
            It is one thing to know your patterns. It is another to heal them. Join a closed, intimate group of women as we journey back to rescue the parts of you that were left behind. Weekly live sessions, somatic exercises, and deep, lasting rewiring.
          </p>
        </div>
        <div className="shrink-0">
          <Link 
            href="/programs" 
            className="inline-block px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white text-[13px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[2px] shadow-sm"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
