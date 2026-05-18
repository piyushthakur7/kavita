import React from 'react';
import Link from 'next/link';

const Logo = ({ light = false }) => {
  return (
    <Link href="/" className="flex items-center gap-3 group select-none">
      {/* Speaker Emblem Badge */}
      <div className="relative w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 bg-gradient-to-br from-[#2b2732] to-[#121016] border-2 border-[#c5a880]/50 shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.05)]">
        {/* Speaker surround circle */}
        <div className="absolute inset-1 rounded-full border border-[#c5a880]/20 bg-radial-gradient flex items-center justify-center">
          {/* Active LED micro indicator on the badge */}
          <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#ffaa00] shadow-[0_0_6px_#ffaa00] animate-pulse" />
          
          {/* Shiny speaker dust cap with K */}
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-b from-[#443e4c] to-[#1c1a20] shadow-[0_2px_5px_rgba(0,0,0,0.6)]">
            <span className="font-serif-display text-[#c5a880] text-sm font-bold tracking-tight">K</span>
          </div>
        </div>
      </div>
      
      {/* Brand Text */}
      <div className="leading-tight">
        <div className={`font-serif-display tracking-[0.2em] font-bold text-[14px] transition-colors duration-300 ${
          light ? 'text-[#e5dcd3]' : 'text-[#1c1a1f] group-hover:text-[#c5a880]'
        }`}>
          KAVITA KABIRA
        </div>
        <div className={`text-[8.5px] tracking-[0.4em] font-semibold transition-colors duration-300 ${
          light ? 'text-[#c5a880]/80' : 'text-[#5d5668] group-hover:text-[#8b8098]'
        }`}>
          WELLNESS CLINIC
        </div>
      </div>
    </Link>
  );
};

export default Logo;
