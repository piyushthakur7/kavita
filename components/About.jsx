"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, CalendarCheck, Sliders, Radio, Award } from 'lucide-react';
import { aboutImage, drImage, drAltImage, contact, aboutInfo } from '@/lib/mock';
import { useModal } from '@/context/ModalContext';

const About = () => {
  const { openModal } = useModal();
  
  // Mixer Channel state: 0 = Foundations, 1 = Transitions, 2 = Expertise, 3 = Leadership (active by default)
  const [activeChannel, setActiveChannel] = useState(3);

  const activeTimeline = aboutInfo.timeline[activeChannel];

  return (
    <section id="about" className="py-24 lg:py-32 bg-speaker-mesh text-white border-b border-[#c5a880]/15 relative overflow-hidden select-none">
      {/* Decorative radial glows */}
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-950/20 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-950/20 blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Portrait with Concentric Soundwave Rings */}
        <div className="relative flex justify-center lg:justify-start">
          
          {/* Concentric soundwave copper lines (Ramon Llamba inspired) */}
          <div className="absolute inset-0 m-auto w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] border border-[#c5a880]/10 rounded-full animate-[ping_4s_infinite_linear] pointer-events-none opacity-40" />
          <div className="absolute inset-0 m-auto w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] border border-[#c5a880]/15 rounded-full pointer-events-none opacity-60" />
          <div className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] border-2 border-dashed border-[#c5a880]/20 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
          
          {/* Center circular portrait */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-[#c5a880]/50 shadow-[0_15px_40px_rgba(0,0,0,0.8)] z-10 bg-[#16141a]">
            <img 
              src={activeChannel % 2 === 0 ? drAltImage : drImage} 
              alt="Dr. Kavita Kabira" 
              className="w-full h-full object-cover grayscale-[15%] transition-all duration-700 hover:scale-105" 
            />
          </div>

          {/* Floating gold-accented contact card (Tactile spec sheet) */}
          <div className="absolute -bottom-10 right-2 sm:right-10 bg-[#0d0b0f] border border-[#c5a880]/35 p-5 rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.8)] w-[230px] z-20 transition-all duration-300 hover:border-[#c5a880]">
            {/* Vintage LED indicators on the spec sheet */}
            <div className="flex gap-1.5 mb-3.5 border-b border-white/5 pb-2.5">
              <span className="w-1.5 h-1.5 rounded-full led-indicator active-green animate-pulse" />
              <span className="text-[7.5px] font-mono tracking-widest text-[#e5dcd3]/55 uppercase">SPECIFICATIONS: OK</span>
            </div>
            
            <h4 className="font-serif-display text-[18px] text-[#e5dcd3] leading-tight font-bold">
              Dr. Kavita Kabira
            </h4>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#c5a880] mt-1 font-bold">
              Therapist & Mindset Coach
            </p>
            
            <div className="mt-4 space-y-2 border-t border-white/5 pt-3">
              <a 
                href={`tel:${contact.phoneRaw}`} 
                className="flex items-center gap-2.5 text-[11.5px] text-[#e5dcd3]/80 hover:text-[#c5a880] transition-colors"
              >
                <Phone size={12} className="text-[#c5a880]" /> 
                <span>{contact.phone.replace('+91-', '')}</span>
              </a>
              <button 
                onClick={openModal} 
                className="flex items-center gap-2.5 text-[11.5px] text-[#e5dcd3]/80 hover:text-[#c5a880] transition-colors w-full text-left"
              >
                <CalendarCheck size={12} className="text-[#c5a880]" /> 
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Console & Mixer */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-900 border border-[#c5a880]/20 text-[#c5a880] text-[9.5px] font-mono uppercase tracking-widest mb-4">
            <Sliders size={11} />
            <span>Master Console Overview</span>
          </div>

          <h2 className="font-serif-display text-[42px] sm:text-[52px] leading-[1.05] text-[#e5dcd3]">
            Leading Voice in
            <br />
            <span className="italic font-light text-[#c5a880]">Psychological Resonance</span>
          </h2>

          <p className="mt-5 text-[14.5px] leading-relaxed text-[#e5dcd3]/70">
            With over two decades of transformative practice, Dr. Kavita Kabira leverages sound clinical research alongside trauma-informed, holistic therapies to guide clients from distress into absolute alignment.
          </p>

          {/* THE MIXING CONSOLE Timeline Panel */}
          <div className="mt-8 bg-[#0d0b0f] border border-[#c5a880]/15 rounded-3xl p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center text-[8.5px] font-mono tracking-widest text-white/35 uppercase border-b border-white/5 pb-3.5 mb-5">
              <span>TIMELINE EQUALIZER (CHANNELS 1-4)</span>
              <span className="flex items-center gap-1.5 text-[#ffaa00]">
                <Radio size={11} className="animate-pulse" />
                <span>ACTIVE WAVE</span>
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center border-b border-white/5 pb-6">
              {aboutInfo.timeline.map((t, idx) => {
                const isActive = activeChannel === idx;
                // Years for each channel
                const yearLabel = t.period.split(' – ')[0];
                
                return (
                  <div 
                    key={t.period} 
                    onClick={() => setActiveChannel(idx)}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    {/* Channel Label */}
                    <span className={`text-[8px] font-mono tracking-wider mb-2 transition-colors ${
                      isActive ? 'text-[#c5a880]' : 'text-white/40 group-hover:text-white/60'
                    }`}>
                      CH 0{idx + 1}
                    </span>

                    {/* Vertical Mixer Fader Track */}
                    <div className="h-28 w-4 rounded-full fader-slot relative flex items-center justify-center cursor-pointer border border-[#c5a880]/10 select-none">
                      {/* Active green signal track line */}
                      {isActive && (
                        <div className="absolute top-0 bottom-0 w-0.5 bg-[#10b981]/30" />
                      )}
                      
                      {/* Fader Handle (Mixer Slide knob) */}
                      <div 
                        style={{ bottom: isActive ? '60px' : '10px' }}
                        className="absolute w-7 h-5 rounded fader-handle transition-all duration-500 ease-out" 
                      />
                    </div>

                    {/* Era/Year */}
                    <span className={`text-[9px] font-mono mt-2.5 transition-colors ${
                      isActive ? 'text-[#ffaa00] font-bold' : 'text-white/40 group-hover:text-white/70'
                    }`}>
                      {yearLabel}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Simulated Digital LED Display Screen (Esther Perel details in glowing retro box) */}
            <div className="mt-5 bg-[#16141a]/95 border border-[#c5a880]/20 rounded-2xl p-5 shadow-inner min-h-[140px] transition-all duration-300">
              <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-3">
                <span className="text-[8px] font-mono tracking-widest text-[#ffaa00]/70 uppercase">
                  DISPLAY // RESONANCE DECK 0{activeChannel + 1}
                </span>
                <span className="text-[8px] font-mono text-white/30">{activeTimeline.period}</span>
              </div>
              
              <h4 className="font-serif-display text-lg text-[#c5a880] leading-tight font-bold mb-1.5">
                {activeTimeline.title}
              </h4>
              <p className="text-[12.5px] leading-relaxed text-white/70">
                {activeTimeline.desc}
              </p>
            </div>

          </div>

          <div className="mt-8 flex items-center gap-4">
            <Link 
              href="/about" 
              className="px-6 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-[#0d0b0f] bg-[#c5a880] hover:bg-[#a78b63] transition-all"
            >
              Full Profile Specs
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
