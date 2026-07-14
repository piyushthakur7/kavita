"use client";
import React from 'react';
import Link from 'next/link';
import { useModal } from '@/context/ModalContext';

const Hero = () => {
  const { openModal } = useModal();

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#e8e6f8] via-[#f2f1fb] to-[#ffffff] text-gray-900 overflow-hidden flex flex-col lg:block min-h-[100dvh] lg:min-h-screen">
      
      {/* Hero image — absolutely positioned on the right, full height */}
      <img 
        src="/images/image copy.png" 
        alt="Dr. Kavita Kabira" 
        className="absolute top-0 bottom-0 right-[2%] h-full w-auto object-contain object-bottom drop-shadow-[0px_0px_60px_rgba(200,190,250,0.7)] hidden lg:block z-10 pointer-events-none animate-slide-left-fade animation-delay-400" 
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 pt-28 sm:pt-32 md:pt-40 lg:pt-40 pb-8 sm:pb-10 lg:pb-32 flex-1 lg:min-h-screen flex items-start lg:items-center">
        <div className="w-full mt-4 sm:mt-8 lg:mt-0">
          <h1 className="font-serif-display leading-[1.1] sm:leading-[1.05] text-[42px] min-[400px]:text-[48px] sm:text-[72px] lg:text-[80px] xl:text-[90px] tracking-tight animate-slide-up-fade">
            You've been carrying
            <br />
            <span className="font-bold">it long enough.</span>
          </h1>
          
          <p className="mt-4 sm:mt-6 text-[17px] sm:text-[20px] text-gray-700 max-w-lg leading-relaxed animate-slide-up-fade animation-delay-200">
            Inner child healing. Nervous system work. Therapy built for the Human Heart.
          </p>

          {/* Actions panel */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-5 animate-slide-up-fade animation-delay-200">
            <button 
              onClick={openModal}
              className="px-8 py-3.5 bg-[#1f1f1f] text-white text-[15px] font-medium rounded-[30px] hover:bg-black transition-all hover:scale-105 duration-300 w-full sm:w-auto text-center"
            >
              Begin Your Healing &rarr;
            </button>
            <a href="https://wa.me/919971880693" target="_blank" rel="noreferrer" className="px-8 py-3.5 bg-white text-gray-900 border border-gray-300 text-[15px] font-medium rounded-[30px] hover:bg-gray-50 transition-all hover:scale-105 duration-300 w-full sm:w-auto text-center">
              Book a Free Clarity Call
            </a>
          </div>
        </div>
      </div>

      {/* Mobile image — shown below text on small screens */}
      <div className="lg:hidden flex justify-center mt-auto w-full animate-slide-up-fade animation-delay-400 pointer-events-none px-4 pt-6 sm:pt-8 pb-4">
        <img 
          src="/images/image copy.png" 
          alt="Dr. Kavita Kabira" 
          className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain object-bottom drop-shadow-[0px_0px_40px_rgba(200,190,250,0.7)]" 
        />
      </div>
    </section>
  );
};

export default Hero;
