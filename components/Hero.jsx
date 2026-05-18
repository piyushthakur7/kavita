"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Radio, Volume2, VolumeX, ShieldAlert, Sparkles, Check } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

// Safe royalty-free ambient soundscapes that loop beautifully
const SOUND_PRESETS = [
  {
    id: 0,
    name: '432Hz Calm Solfeggio',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Soft ambient loop
    frequency: '432Hz',
    desc: 'Deep brainwave resonance for mental clarity and mindfulness.'
  },
  {
    id: 1,
    name: '528Hz Anxiety Release',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Tranquil stream loop
    frequency: '528Hz',
    desc: 'Healing wave frequency designed to release emotional tension.'
  },
  {
    id: 2,
    name: 'Inner Child Resonance',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', // Gentle forest pad
    frequency: 'Vocal',
    desc: 'Mindful coaching frequency to restore trust and trauma recovery.'
  }
];

const Hero = () => {
  const { openModal } = useModal();
  
  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);
  const [volume, setVolume] = useState(40); // 0 to 100
  const [activeTab, setActiveTab] = useState('clinical'); // clinical | coaching
  
  // Audio node references
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Initialize and handle play/pause, track change, volume change
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.crossOrigin = "anonymous";
    }

    audioRef.current.src = SOUND_PRESETS[activeTrack].url;
    audioRef.current.volume = volume / 100;

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Audio play blocked by browser policy. Interacting with UI first is required.", error);
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [activeTrack]);

  // Volume adjuster
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Handle play toggle
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = volume / 100;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.error("Audio failed", err);
        });
      }
    }
  };

  // Canvas visualizer loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set exact size
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 100;

    let phase = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw 3 layered sine waves
      const wavesCount = 3;
      const colors = [
        'rgba(197, 168, 128, 0.4)', // Copper
        'rgba(255, 170, 0, 0.25)',  // Amber
        'rgba(147, 51, 234, 0.15)'  // Indigo
      ];

      for (let w = 0; w < wavesCount; w++) {
        ctx.beginPath();
        ctx.strokeStyle = colors[w];
        ctx.lineWidth = w === 0 ? 2 : 1.2;
        
        const baseAmplitude = isPlaying ? (volume / 100) * 22 + 4 : 2;
        const waveFrequency = isPlaying ? 0.015 - (w * 0.003) : 0.005;
        const waveSpeed = isPlaying ? 0.06 - (w * 0.015) : 0.005;
        
        phase += waveSpeed / wavesCount;

        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + 
            Math.sin(x * waveFrequency + phase) * baseAmplitude * Math.sin(x / canvas.width * Math.PI);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, volume]);

  // Rotational degree of knurled volume knob
  // Maps 0-100 to -135deg to +135deg
  const knobRotation = (volume / 100) * 270 - 135;

  return (
    <section id="home" className="relative bg-speaker-mesh text-white pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden border-b border-[#c5a880]/15">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-indigo-900/25 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-purple-900/20 blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center relative z-10">
        
        {/* Left Column: Editorial Content (Esther Perel style text over Ramon Llamba dark base) */}
        <div>
          {/* Accent Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20 text-[#c5a880] text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles size={12} className="animate-spin" />
            <span>Resonance Therapy & Mindset Coaching</span>
          </div>

          <h1 className="font-serif-display leading-[0.98] text-[56px] sm:text-[76px] lg:text-[90px] xl:text-[98px] tracking-tight">
            Heal Your
            <br />
            <span className="italic font-light text-[#c5a880] drop-shadow-[0_2px_10px_rgba(197,168,128,0.2)]">Inner Frequency.</span>
          </h1>

          <p className="mt-8 max-w-xl text-[16px] sm:text-[18px] leading-relaxed text-[#e5dcd3]/80">
            Dr. Kavita Kabira fuses clinical psychological expertise with dynamic metaphysical alignment. Experience compassionate, evidence-based therapy that amplifies your voice and restores psychological harmony.
          </p>

          {/* Quick tab switcher (Esther Perel style tabs) */}
          <div className="mt-9 p-1.5 inline-flex bg-[#18151c] rounded-full border border-white/5 select-none">
            <button 
              onClick={() => setActiveTab('clinical')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'clinical' 
                  ? 'bg-[#c5a880] text-[#0d0b0f] shadow-lg' 
                  : 'text-[#e5dcd3]/70 hover:text-white'
              }`}
            >
              Clinical Practice
            </button>
            <button 
              onClick={() => setActiveTab('coaching')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'coaching' 
                  ? 'bg-[#c5a880] text-[#0d0b0f] shadow-lg' 
                  : 'text-[#e5dcd3]/70 hover:text-white'
              }`}
            >
              Mindset Coaching
            </button>
          </div>

          {/* Dynamic description depending on active tab */}
          <div className="mt-5 h-20 max-w-lg text-sm text-[#e5dcd3]/60 italic font-serif-display border-l-2 border-[#c5a880]/30 pl-4 flex items-center">
            {activeTab === 'clinical' 
              ? "Focusing on deep psychological recovery: inner child therapy, trauma resolution, obsessive thoughts, anxiety patterns, and cognitive behavioral therapy."
              : "Transformational leadership coaching: executive stress faders, building corporate resilience, verbal communication strategies, and personal alignment."
            }
          </div>

          {/* Actions panel */}
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <button 
              onClick={openModal}
              className="px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-[#0d0b0f] bg-gradient-to-r from-[#e5ca9c] to-[#c5a880] border border-[#d6b789] hover:from-[#c5a880] hover:to-[#a78b63] shadow-[0_4px_20px_rgba(197,168,128,0.3)] active:translate-y-0.5 transition-all"
            >
              Get Free Consultation
            </button>
            <Link 
              href="/services" 
              className="px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-[#e5dcd3] border border-[#e5dcd3]/20 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>

        {/* Right Column: The "Very Big Speaker" Cabinet (3D Enclosure) */}
        <div className="flex justify-center select-none">
          <div className="speaker-enclosure w-full max-w-[430px] rounded-[42px] p-8 flex flex-col items-center relative select-none">
            
            {/* Brass corner brackets */}
            <div className="absolute top-5 left-5 w-3 h-3 border-t-2 border-l-2 border-[#c5a880]/40 rounded-tl" />
            <div className="absolute top-5 right-5 w-3 h-3 border-t-2 border-r-2 border-[#c5a880]/40 rounded-tr" />
            <div className="absolute bottom-5 left-5 w-3 h-3 border-b-2 border-l-2 border-[#c5a880]/40 rounded-bl" />
            <div className="absolute bottom-5 right-5 w-3 h-3 border-b-2 border-r-2 border-[#c5a880]/40 rounded-br" />

            {/* Cabinet Brand Plate */}
            <div className="mb-8 px-4 py-1 border border-[#c5a880]/30 rounded bg-[#1c1a20] shadow-md flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_6px_#10b981] animate-pulse" />
              <span className="text-[9px] font-mono tracking-[0.3em] text-[#c5a880] uppercase">KAVITA AUDIO LABS</span>
            </div>

            {/* Tweeter Driver (Top) */}
            <div className="relative mb-10 w-28 h-28 rounded-full border-[3px] border-[#c5a880]/15 bg-radial flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              {/* Tweeter metal dome */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#4b4352] via-[#2a262e] to-[#121115] border border-white/5 flex items-center justify-center shadow-[inset_0_2px_5px_rgba(255,255,255,0.06),0_6px_10px_rgba(0,0,0,0.8)] ${
                isPlaying ? 'speaker-tweeter-active' : ''
              }`}>
                {/* Copper dust dome core */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#e5ca9c] to-[#c5a880] shadow-[0_0_8px_rgba(197,168,128,0.5)] border border-[#d6b789]/50" />
              </div>
            </div>

            {/* Subwoofer Driver (Centerpiece Woofer) */}
            <div className="relative mb-10">
              <div className="absolute inset-0 -m-3 rounded-full border border-dashed border-[#c5a880]/20 animate-[spin_20s_linear_infinite]" />
              
              <div 
                onClick={togglePlay}
                className={`w-60 h-60 rounded-full speaker-woofer-ring flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-[1.02] active:scale-[0.99] group ${
                  isPlaying ? 'speaker-cone-active' : ''
                }`}
              >
                {/* Woofer surround rubber */}
                <div className="w-48 h-48 rounded-full border-[10px] border-[#080709] bg-[#16141a] flex items-center justify-center shadow-inner relative">
                  
                  {/* Speaker Ribs */}
                  <div className="absolute inset-4 rounded-full border border-[#c5a880]/5 opacity-40" />
                  <div className="absolute inset-8 rounded-full border border-[#c5a880]/5 opacity-40" />
                  
                  {/* Dust cap */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#2e2936] to-[#0a090c] border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center">
                    {/* Play/Pause overlay */}
                    {isPlaying ? (
                      <div className="flex flex-col items-center gap-1">
                        <span className="w-2 h-2.5 bg-[#c5a880] rounded-sm inline-block" />
                        <span className="text-[7.5px] font-mono tracking-widest text-[#c5a880]/70 uppercase animate-pulse">RESONANT</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-1">
                        <span className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#c5a880] border-b-[6px] border-b-transparent ml-1" />
                        <span className="text-[7.5px] font-mono tracking-widest text-[#e5dcd3]/40 uppercase">SOUND ON</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Wave Visualizer Box */}
            <div className="w-full h-12 bg-[#09080c] border border-[#c5a880]/10 rounded-xl relative overflow-hidden mb-8 shadow-inner flex items-center justify-center">
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
              {!isPlaying && (
                <span className="text-[9px] font-mono tracking-[0.25em] text-[#e5dcd3]/30 uppercase select-none relative z-10">SYSTEM STANDBY</span>
              )}
            </div>

            {/* Lower Control Dashboard */}
            <div className="w-full grid grid-cols-3 gap-6 items-center border-t border-[#c5a880]/15 pt-6 bg-[#16141a]/60 px-4 py-4 rounded-2xl relative">
              
              {/* Fader Knob 1: VOLUME KNOB (Tactile Drag Rotary Knob) */}
              <div className="flex flex-col items-center select-none">
                <span className="text-[8px] font-mono tracking-wider text-[#e5dcd3]/40 uppercase mb-2">VOLUME</span>
                
                <div className="relative flex items-center justify-center group">
                  {/* Knob Dial */}
                  <div 
                    style={{ transform: `rotate(${knobRotation}deg)` }}
                    className="w-12 h-12 rounded-full knob-knurled flex items-center justify-center cursor-pointer transition-transform duration-100 relative"
                  >
                    {/* Tick indicator line on the knob */}
                    <div className="absolute top-1 w-0.5 h-3 knob-line rounded-full" />
                  </div>
                  
                  {/* Left-Right mini clickers for easy accessibility */}
                  <button 
                    onClick={() => setVolume(v => Math.max(0, v - 10))}
                    className="absolute -left-3 w-5 h-5 bg-[#25222c] border border-white/5 rounded-full text-[10px] font-bold flex items-center justify-center text-white/50 hover:text-[#c5a880] hover:bg-[#34303e]"
                  >
                    -
                  </button>
                  <button 
                    onClick={() => setVolume(v => Math.min(100, v + 10))}
                    className="absolute -right-3 w-5 h-5 bg-[#25222c] border border-white/5 rounded-full text-[10px] font-bold flex items-center justify-center text-white/50 hover:text-[#c5a880] hover:bg-[#34303e]"
                  >
                    +
                  </button>
                </div>
                
                <span className="text-[9px] font-mono text-[#c5a880] mt-2.5">{volume}%</span>
              </div>

              {/* Fader Knob 2: Analog Metal Toggle Switch */}
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-mono tracking-wider text-[#e5dcd3]/40 uppercase mb-2">POWER</span>
                
                {/* 3D toggle metal lever */}
                <div 
                  onClick={togglePlay}
                  className={`w-8 h-12 rounded-lg bg-[#0d0b0f] border border-white/5 p-1 flex flex-col justify-between items-center cursor-pointer shadow-inner relative transition-colors ${
                    isPlaying ? 'border-[#ffaa00]/30' : ''
                  }`}
                >
                  {/* Lever shaft */}
                  <div className={`w-2 rounded-full bg-gradient-to-b from-stone-400 to-stone-600 border border-stone-500 shadow-md transition-all duration-300 flex items-center justify-center ${
                    isPlaying 
                      ? 'h-6 transform translate-y-3 bg-[#c5a880]' 
                      : 'h-6 transform translate-y-0'
                  }`}>
                    {/* Metal cap knob */}
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-white to-stone-500 shadow-inner" />
                  </div>
                </div>

                <span className="text-[9px] font-mono tracking-wide text-white/70 mt-2.5">
                  {isPlaying ? 'ON' : 'OFF'}
                </span>
              </div>

              {/* Fader Knob 3: Retro VU Indicator Gauge */}
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-mono tracking-wider text-[#e5dcd3]/40 uppercase mb-2">VU METER</span>
                
                {/* Semicircle needle container */}
                <div className="w-16 h-10 rounded-t-full vu-meter-dial relative overflow-hidden flex items-end justify-center">
                  {/* Circular scale background grid */}
                  <div className="absolute inset-x-2 bottom-0 h-8 border border-white/5 rounded-t-full opacity-35" />
                  <div className="absolute inset-x-4 bottom-0 h-6 border border-white/5 rounded-t-full opacity-35" />
                  
                  {/* Needle line */}
                  <div 
                    style={{ transformOrigin: 'bottom center' }}
                    className={`w-0.5 h-8 bg-gradient-to-t from-[#c5a880] to-[#ffaa00] absolute bottom-0 transition-transform duration-300 ${
                      isPlaying ? 'vu-needle-active' : 'transform rotate-[-45deg]'
                    }`} 
                  />
                  
                  {/* Center bronze axle dot */}
                  <div className="w-3 h-1.5 bg-[#c5a880] rounded-t-full absolute bottom-0 z-10" />
                </div>
                
                <span className="text-[9px] font-mono tracking-wide text-white/50 mt-2.5">DB -6</span>
              </div>

            </div>

            {/* Presets Panel: Custom wooden preset buttons */}
            <div className="w-full mt-6 bg-[#0d0b0f] border border-white/5 rounded-2xl p-4 space-y-3 select-none">
              <div className="flex justify-between items-center text-[8px] font-mono tracking-widest text-[#e5dcd3]/30 uppercase">
                <span>SOUND PRESETS</span>
                <span className="flex items-center gap-1 text-[#ffaa00]">
                  <Radio size={10} className={isPlaying ? 'animate-ping' : ''} />
                  <span>CHANNEL SELECT</span>
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {SOUND_PRESETS.map((p) => {
                  const isActive = activeTrack === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActiveTrack(p.id);
                        if (!isPlaying) {
                          setIsPlaying(true);
                        }
                      }}
                      className={`py-2 px-1 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all duration-300 flex flex-col items-center justify-center border ${
                        isActive 
                          ? 'bg-[#c5a880] border-[#d6b789] text-[#0d0b0f] shadow-[0_2px_8px_rgba(197,168,128,0.4)] font-extrabold'
                          : 'bg-[#18151c] border-white/5 text-[#e5dcd3]/60 hover:text-white hover:bg-[#25222c]'
                      }`}
                    >
                      <span>CH {p.id + 1}</span>
                      <span className="text-[8px] opacity-80 mt-0.5">{p.frequency}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active preset details */}
              <div className="text-[10px] text-white/50 leading-relaxed bg-[#16141a]/50 p-2.5 rounded-lg border border-white/5">
                <span className="font-bold text-[#c5a880]">{SOUND_PRESETS[activeTrack].name}</span>: {SOUND_PRESETS[activeTrack].desc}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
