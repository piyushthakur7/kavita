"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Radio, ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Redirect immediately to dashboard
      router.push('/blog/admin/dashboard');
      router.refresh();
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#070608] text-[#e5dcd3] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      
      {/* Dynamic speaker background grid */}
      <div className="absolute inset-0 bg-speaker-mesh opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#c5a880]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#ffaa00]/5 blur-[120px] pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center">
          <Logo light />
        </div>
        <h2 className="mt-6 text-center font-serif-display text-[32px] lg:text-[38px] text-white">
          ADMIN <span className="italic font-light text-[#c5a880]">CONSOLE</span>
        </h2>
        <p className="mt-2 text-center text-xs font-mono tracking-widest text-white/40 uppercase">
          KAVITA WELLNESS CABINETS // ACCESS CODE REQUIRED
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4 sm:px-0">
        {/* Physical 3D metal audio box layout */}
        <div className="bg-[#0c0a0e] border border-white/5 shadow-2xl rounded-3xl p-8 relative">
          {/* Top warning LED indicator */}
          <div className="absolute top-4 right-6 flex items-center gap-2">
            <span className="text-[7.5px] font-mono text-white/30 uppercase tracking-widest">
              SECURE
            </span>
            <div className={`w-2 h-2 rounded-full shadow-[0_0_8px] transition-colors duration-500 ${
              loading ? 'bg-red-500 shadow-red-500 animate-ping' : 'bg-[#ffaa00] shadow-[#ffaa00]'
            }`} />
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/20 text-red-400 font-mono text-xs text-center leading-relaxed">
                ERROR: {error.toUpperCase()}
              </div>
            )}

            <div>
              <label className="block font-mono text-[9px] uppercase tracking-widest text-[#c5a880] mb-2">
                INPUT CHANNEL: EMAIL
              </label>
              <div className="relative rounded-xl bg-[#121015] border border-white/5 focus-within:border-[#c5a880]/40 transition shadow-inner">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/30">
                  <Mail size={14} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@clinic.com"
                  className="block w-full pl-10 pr-4 py-3 bg-transparent text-xs text-white placeholder:text-white/20 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[9px] uppercase tracking-widest text-[#c5a880] mb-2">
                AUTHENTICATION CODE: PASSWORD
              </label>
              <div className="relative rounded-xl bg-[#121015] border border-white/5 focus-within:border-[#c5a880]/40 transition shadow-inner">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/30">
                  <Lock size={14} />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="block w-full pl-10 pr-4 py-3 bg-transparent text-xs text-white placeholder:text-white/20 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#c5a880] hover:bg-[#a78b63] active:scale-[0.98] text-[#0d0b0f] font-bold text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-40"
            >
              <span>{loading ? 'TUNING COGNITIVE FEED...' : 'INITIATE FREQUENCY'}</span>
              {!loading && <ArrowRight size={14} />}
            </button>
          </form>

          {/* Decorative hardware details */}
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[8px] text-white/30 tracking-wider">
            <span>MODEL: KB-ACCESS-MKII</span>
            <span>VOLTAGE: 220V INNER SOUL</span>
          </div>
        </div>
      </div>
    </main>
  );
}
