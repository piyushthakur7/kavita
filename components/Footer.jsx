"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Facebook, Youtube, Instagram, ArrowUp, Radio, Wrench, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { ContactInfo } from './Contact';
import { useToast } from '@/hooks/use-toast';
import { navLinks } from '@/lib/mock';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email || !agree) {
      toast({ title: 'Please enter email & accept policy' });
      return;
    }
    const subs = JSON.parse(localStorage.getItem('kk_subs') || '[]');
    subs.push({ email, at: new Date().toISOString() });
    localStorage.setItem('kk_subs', JSON.stringify(subs));
    toast({ title: 'Subscribed!', description: 'Thanks for subscribing.' });
    setEmail('');
    setAgree(false);
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0b090d] text-[#e5dcd3] border-t-4 border-[#c5a880]/30 select-none relative overflow-hidden">
      
      {/* Speaker Back Plate Overlay Header */}
      <div className="border-b border-[#c5a880]/15 bg-[#121015]/60 py-6 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[9.5px] tracking-widest text-[#c5a880]">
          <div className="flex items-center gap-2">
            <Wrench size={12} />
            <span>CAUTION: DISCONNECT POWER BEFORE REMOVING SPEAKER CABINET BACKPLATE</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={13} />
            <span>DESIGNED BY KAVITA AUDIO LABS // PATENTS PENDING</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Column 1: Technical Specs Plate (Model & Branding) */}
        <div className="lg:col-span-1 bg-[#070608] border border-white/5 p-6 rounded-2xl shadow-inner relative flex flex-col justify-between">
          <div>
            <Logo light />
            <p className="mt-4 text-[13px] text-white/50 leading-relaxed">
              Resonant mental wellness clinic and coaching practices configured for ultimate life alignment.
            </p>
          </div>

          {/* Vintage Specifications Plate */}
          <div className="mt-8 pt-6 border-t border-white/5 font-mono text-[9px] tracking-wide text-white/40 space-y-2">
            <div className="flex justify-between">
              <span>SYSTEM MODEL:</span>
              <span className="text-[#c5a880] font-bold">RESONANCE TOWER MK-II</span>
            </div>
            <div className="flex justify-between">
              <span>IMPEDANCE:</span>
              <span className="text-white/70">8 OHMS (CALMING)</span>
            </div>
            <div className="flex justify-between">
              <span>POWER RATING:</span>
              <span className="text-white/70">220V SOUL CAPACITY</span>
            </div>
            <div className="flex justify-between">
              <span>FREQ RESPONSE:</span>
              <span className="text-[#ffaa00]">20HZ – 20,000HZ</span>
            </div>
            <div className="flex justify-between">
              <span>SERIAL NO:</span>
              <span className="text-[#c5a880]">KK-8287045427</span>
            </div>
          </div>
        </div>

        {/* Column 2: Speaker Connection Terminals (Binding Posts) & Newsletter */}
        <div className="lg:col-span-1 flex flex-col justify-between">
          <div>
            <h4 className="font-mono text-[9px] tracking-[0.25em] text-[#c5a880] uppercase mb-5 border-b border-white/5 pb-2">
              INPUT RCA: NEWSLETTER
            </h4>
            
            {/* Newsletter form styled like input jacks */}
            <form onSubmit={subscribe} className="flex flex-col gap-3">
              <div className="flex bg-[#121015] border border-[#c5a880]/15 rounded-xl overflow-hidden shadow-inner">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email input"
                  className="flex-1 bg-transparent px-4 py-3 text-xs placeholder:text-white/30 text-white focus:outline-none"
                />
                <button type="submit" className="px-5 py-3 bg-[#c5a880] text-[#0d0b0f] font-bold text-xs hover:bg-[#a78b63] transition-colors uppercase tracking-wider">
                  SUB
                </button>
              </div>
              <label className="flex items-center gap-2 text-[10px] text-white/40">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="accent-[#c5a880] bg-stone-900 border-white/5 rounded"
                />
                <span>Agree to Privacy policy.</span>
              </label>
            </form>
          </div>

          {/* Physical Gold Binding Posts Terminal Panel (Stunning 3D Detail) */}
          <div className="mt-8 bg-[#070608] border border-white/5 p-4 rounded-2xl flex items-center justify-around relative">
            {/* Post 1: POSITIVE (Red Ring) */}
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-[8px] font-mono text-red-500 font-bold">POS (+)</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-800 border-2 border-stone-800 shadow-lg flex items-center justify-center relative">
                {/* Gold central binding bolt */}
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#e5ca9c] to-[#c5a880] border border-[#d6b789] shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                </div>
              </div>
              <span className="text-[7.5px] font-mono text-white/30">RED PORT</span>
            </div>

            {/* Impendance Connector Text */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-gradient-to-b from-[#c5a880]/30 to-transparent" />
              <span className="text-[8px] font-mono text-[#c5a880]/60 uppercase tracking-widest text-center mt-1">
                SPEAKER IN
              </span>
            </div>

            {/* Post 2: NEGATIVE (Black Ring) */}
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-[8px] font-mono text-stone-400 font-bold">NEG (-)</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-900 to-black border-2 border-stone-800 shadow-lg flex items-center justify-center relative">
                {/* Gold central binding bolt */}
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#e5ca9c] to-[#c5a880] border border-[#d6b789] shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                </div>
              </div>
              <span className="text-[7.5px] font-mono text-white/30">BLACK PORT</span>
            </div>
          </div>
        </div>

        {/* Column 3: Output Quick Links */}
        <div>
          <h4 className="font-mono text-[9px] tracking-[0.25em] text-[#c5a880] uppercase mb-5 border-b border-white/5 pb-2">
            OUTPUT CHANNEL: LINKS
          </h4>
          <ul className="space-y-3 font-semibold text-sm">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.to} className="text-[#e5dcd3]/60 hover:text-[#c5a880] transition flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#c5a880]/40" />
                  <span>{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Input XLR: Social Feed & Contact */}
        <div className="space-y-6">
          <div>
            <h4 className="font-mono text-[9px] tracking-[0.25em] text-[#c5a880] uppercase mb-4 border-b border-white/5 pb-2">
              INPUT XLR: SOCIAL FEED
            </h4>
            <p className="text-[13px] text-white/50 mb-4">Connect and tune in via our social active frequencies.</p>
            
            {/* Social jack pins */}
            <div className="flex items-center gap-3">
              <a href="#fb" className="w-9 h-9 rounded-full bg-[#121015] border border-white/5 flex items-center justify-center hover:bg-[#c5a880] hover:text-[#0d0b0f] transition shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
                <Facebook size={14} />
              </a>
              <a href="#yt" className="w-9 h-9 rounded-full bg-[#121015] border border-white/5 flex items-center justify-center hover:bg-[#c5a880] hover:text-[#0d0b0f] transition shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
                <Youtube size={14} />
              </a>
              <a href="#ig" className="w-9 h-9 rounded-full bg-[#121015] border border-white/5 flex items-center justify-center hover:bg-[#c5a880] hover:text-[#0d0b0f] transition shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
                <Instagram size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[9px] tracking-[0.25em] text-[#c5a880] uppercase mb-3 border-b border-white/5 pb-2">
              RESONANCE FEEDBACK: CONTACT
            </h4>
            <ContactInfo />
          </div>
        </div>

      </div>

      {/* Copyright footer strip */}
      <div className="border-t border-[#c5a880]/15 bg-[#070608]/80 py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between text-[11px] font-mono text-white/40">
          <p>
            © {new Date().getFullYear()} KAVITA KABIRA WELLNESS CLINIC. ALL SPECIFICATIONS COMPLETED.
          </p>
          <button
            onClick={scrollTop}
            className="w-9 h-9 rounded-full bg-[#121015] border border-[#c5a880]/20 flex items-center justify-center hover:bg-[#c5a880] hover:text-[#0d0b0f] transition"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
