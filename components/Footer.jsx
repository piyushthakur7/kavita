"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Facebook, Youtube, Instagram, ArrowUp } from 'lucide-react';
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
    <footer className="bg-black text-white">
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-2 gap-8 items-center">
          <h3 className="font-serif-display text-[36px] lg:text-[44px] leading-tight">
            Subscribe for the <span className="italic font-light text-white/80">updates!</span>
          </h3>
          <form onSubmit={subscribe} className="flex flex-col gap-3">
            <div className="flex bg-white/5 border border-white/15 rounded-full overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent px-6 py-3 text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button type="submit" className="px-7 py-3 bg-white text-black font-medium text-sm hover:bg-white/90">
                Subscribe
              </button>
            </div>
            <label className="flex items-center gap-2 text-[12px] text-white/55">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="accent-fuchsia-500"
              />
              I agree to the <a href="#privacy" className="underline">Privacy Policy</a>.
            </label>
          </form>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <Logo light />
          <p className="mt-5 text-[14px] text-white/60 leading-relaxed">
            At Kavita Kabira Wellness Clinic, we provide compassionate, personalized mental health
            care to individuals, families and organizations.
          </p>
        </div>
        <div>
          <h4 className="font-serif-display text-xl mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.to} className="text-[14px] text-white/70 hover:text-white transition">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif-display text-xl mb-5">Contact</h4>
          <ContactInfo />
        </div>
        <div>
          <h4 className="font-serif-display text-xl mb-5">Follow Us</h4>
          <p className="text-[14px] text-white/60 mb-5">Stay connected on social media for daily inspiration and wellness tips.</p>
          <div className="flex items-center gap-3">
            <a href="#fb" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition">
              <Facebook size={16} />
            </a>
            <a href="#yt" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition">
              <Youtube size={16} />
            </a>
            <a href="#ig" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <p className="text-[12px] text-white/45">
            © {new Date().getFullYear()} Kavita Kabira Wellness Clinic. All Rights Reserved.
          </p>
          <button
            onClick={scrollTop}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
