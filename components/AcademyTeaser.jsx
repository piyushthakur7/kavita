"use client";
import React from 'react';
import { useModal } from '@/context/ModalContext';

export default function AcademyTeaser() {
  const { openModal } = useModal();

  return (
    <section id="academy" className="py-20 lg:py-28 bg-[#f5f4ef] border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-gray-500 mb-3">
          For Therapists, Healers, and Cycle-Breakers
        </p>
        <h2 className="font-serif-display text-[38px] sm:text-[48px] lg:text-[56px] leading-tight text-gray-900 mb-6 font-medium">
          Kavita Kabira Wellness Academy
        </h2>
        <p className="mt-4 text-[15.5px] leading-relaxed text-gray-600 max-w-3xl mx-auto">
          Healing is not just an outcome; it is a discipline. Coming in late 2026, the Academy will offer practitioner-level training in trauma-informed care, somatic release, and culturally grounded psychology.
        </p>
        <div className="mt-10">
          <button 
            onClick={openModal}
            className="inline-block px-8 py-3.5 bg-[#050302] hover:bg-[#c5a48e] text-white text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[2px]"
          >
            Get Notified
          </button>
        </div>
      </div>
    </section>
  );
}
