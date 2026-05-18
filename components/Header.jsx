"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Radio } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '@/lib/mock';
import { useModal } from '@/context/ModalContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Premium Dark Audio Console Strip Background
  const headerBg = scrolled || !isHome
    ? 'bg-[#0d0b0f]/95 border-b border-[#c5a880]/15 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
    : 'bg-transparent border-b border-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        
        {/* Sleek metallic badge logo */}
        <Logo light={scrolled || !isHome || mobileOpen} />
        
        {/* Navigation Console */}
        <nav className="hidden lg:flex items-center gap-9 select-none">
          {navLinks.map((l) => {
            const isActive = pathname === l.to;
            return (
              <Link
                key={l.label}
                href={l.to}
                className={`relative text-[14px] font-semibold tracking-wider transition-all duration-300 uppercase py-1 ${
                  isActive 
                    ? 'text-[#c5a880]' 
                    : 'text-[#e5dcd3]/70 hover:text-[#e5dcd3]'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {/* Micro amber LED indicator on active tab */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffaa00] shadow-[0_0_6px_#ffaa00]" />
                  )}
                  {l.label}
                </span>
              </Link>
            );
          })}
        </nav>
        
        {/* Controls Panel */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Signal Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#18151c] border border-[#c5a880]/10">
            <Radio size={13} className="text-[#ffaa00] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#e5dcd3]/60 uppercase">SIGNAL: ON</span>
          </div>

          {/* Tactile gold button */}
          <button 
            onClick={openModal} 
            className="px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase text-[#0d0b0f] bg-gradient-to-r from-[#e5ca9c] to-[#c5a880] border border-[#d6b789] hover:from-[#c5a880] hover:to-[#a78b63] shadow-[0_4px_15px_rgba(197,168,128,0.25)] active:translate-y-0.5 active:shadow-[0_2px_5px_rgba(197,168,128,0.15)] transition-all"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="lg:hidden p-2 text-[#e5dcd3]/90 hover:text-[#c5a880]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer (Styled as high-fidelity console foldout) */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d0b0f] border-t border-[#c5a880]/15 px-6 py-6 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          {navLinks.map((l) => {
            const isActive = pathname === l.to;
            return (
              <Link
                key={l.label}
                href={l.to}
                className={`flex items-center gap-3 text-[14px] font-bold tracking-widest uppercase py-2 transition-colors duration-300 ${
                  isActive ? 'text-[#c5a880]' : 'text-[#e5dcd3]/70 hover:text-[#e5dcd3]'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#ffaa00] shadow-[0_0_6px_#ffaa00]" />}
                {l.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/5 space-y-4">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#e5dcd3]/40">
              <span>FREQUENCY: CALM</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                STATUS: ACTIVE
              </span>
            </div>
            <button
              onClick={() => { setMobileOpen(false); openModal(); }}
              className="w-full justify-center px-5 py-3 rounded-full text-xs font-bold tracking-widest uppercase text-[#0d0b0f] bg-gradient-to-r from-[#e5ca9c] to-[#c5a880] border border-[#d6b789] hover:from-[#c5a880] hover:to-[#a78b63]"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
