import React from 'react';

const Logo = ({ light = false }) => {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-fuchsia-500 via-purple-500 to-orange-400 flex items-center justify-center">
        <span className="font-serif-display text-white text-lg font-bold">K</span>
      </div>
      <div className="leading-tight">
        <div
          className={`font-serif-display tracking-[0.18em] font-semibold text-[15px] ${
            light ? 'text-white' : 'text-[#1c1a1f]'
          }`}
        >
          KAVITA KABIRA
        </div>
        <div
          className={`text-[9px] tracking-[0.45em] font-medium ${
            light ? 'text-white/70' : 'text-[#1c1a1f]/60'
          }`}
        >
          WELLNESS CLINIC
        </div>
      </div>
    </a>
  );
};

export default Logo;
