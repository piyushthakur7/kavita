"use client";
import React from 'react';
import Link from 'next/link';
import { useModal } from '@/context/ModalContext';

const Hero = () => {
  const { openModal } = useModal();

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#e8e6f8] via-[#f2f1fb] to-[#ffffff] text-gray-900 overflow-hidden" style={{ minHeight: '100vh' }}>
      
      {/* Hero image — absolutely positioned on the right, full height */}
      <img 
        src="/images/image copy.png" 
        alt="Dr. Kavita Kabira" 
        className="absolute top-0 bottom-0 right-[2%] h-full w-auto object-contain object-bottom drop-shadow-[0px_0px_60px_rgba(200,190,250,0.7)] hidden lg:block z-10 pointer-events-none animate-slide-left-fade animation-delay-400" 
      />

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-10 pt-40 pb-32 min-h-screen flex items-center">
        <div>
          <h1 className="font-serif-display leading-[1.05] text-[56px] sm:text-[72px] lg:text-[80px] xl:text-[90px] tracking-tight animate-slide-up-fade">
            You've been carrying
            <br />
            <span className="font-bold">it long enough.</span>
          </h1>
          
          <p className="mt-6 text-[18px] sm:text-[20px] text-gray-700 max-w-lg leading-relaxed animate-slide-up-fade animation-delay-200">
            Inner child healing. Nervous system work. Therapy built for the Human Heart.
          </p>

          {/* Actions panel */}
          <div className="mt-10 flex flex-wrap items-center gap-5 animate-slide-up-fade animation-delay-200">
            <button 
              onClick={openModal}
              className="px-8 py-3.5 bg-[#1f1f1f] text-white text-[15px] font-medium rounded-[30px] hover:bg-black transition-all hover:scale-105 duration-300"
            >
              Begin Your Healing &rarr;
            </button>
            <a href="https://wa.me/919971880693" target="_blank" rel="noreferrer" className="px-8 py-3.5 bg-white text-gray-900 border border-gray-300 text-[15px] font-medium rounded-[30px] hover:bg-gray-50 transition-all hover:scale-105 duration-300">
              Book a Free Clarity Call
            </a>
          </div>
        </div>
      </div>

      {/* Mobile image — shown below text on small screens */}
      <div className="lg:hidden flex justify-center -mt-20 pb-0 animate-slide-up-fade animation-delay-400">
        <img 
          src="/images/image copy.png" 
          alt="Dr. Kavita Kabira" 
          className="w-auto h-[400px] object-contain object-bottom drop-shadow-[0px_0px_40px_rgba(200,190,250,0.7)]" 
        />
      </div>
    </section>
  );
};

export default Hero;
