"use client";
import React from 'react';
import Link from 'next/link';
import { useModal } from '@/context/ModalContext';

const Hero = () => {
  const { openModal } = useModal();

  return (
    <section id="home" className="relative bg-[#fdfdfb] text-gray-900 pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center relative z-10">
        
        {/* Left Column */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kavita-tan/10 text-kavita-tan text-sm font-semibold tracking-wider uppercase mb-6">
            <span>Online Therapy & Counseling</span>
          </div>

          <h1 className="font-serif-display leading-[1.1] text-[48px] sm:text-[64px] lg:text-[80px] tracking-tight">
            Heal Your
            <br />
            <span className="italic font-normal text-kavita-tan">Inner Self.</span>
          </h1>

          <p className="mt-8 max-w-xl text-[16px] sm:text-[18px] leading-relaxed text-gray-600">
            Dr. Kavita Kabira fuses clinical psychological expertise with dynamic coaching. Experience compassionate, evidence-based therapy that amplifies your voice and restores psychological harmony.
          </p>

          {/* Actions panel */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button 
              onClick={openModal}
              className="btn-primary"
            >
              Get Free Consultation
            </button>
            <Link 
              href="/services" 
              className="px-7 py-3.5 text-sm font-semibold text-gray-700 hover:text-kavita-tan transition-all"
            >
              Explore Services →
            </Link>
          </div>
        </div>

        {/* Right Column: Clean Hero Image */}
        <div className="flex justify-center select-none relative">
          <div className="w-full max-w-[500px] h-[600px] rounded-[20px] overflow-hidden relative shadow-2xl">
            <img 
              src="/images/DSC_0146.jpeg" 
              alt="Dr. Kavita Kabira" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[280px]">
            <h4 className="font-serif-display text-xl font-bold text-gray-900">Dr. Kavita Kabira</h4>
            <p className="text-gray-500 text-sm mt-2">Leading Voice in Psychological Wellness & Coaching</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
