"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '@/lib/mock';
import { useModal } from '@/context/ModalContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setActiveDropdown(null); }, [pathname]);

  const headerBg = scrolled || !isHome
    ? 'bg-white border-b border-gray-100 shadow-sm'
    : 'bg-transparent border-b border-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        
        <Logo light={scrolled || !isHome || mobileOpen} />
        
        <nav className="hidden lg:flex items-center gap-9 select-none">
          {navLinks.map((l) => {
            const isActive = pathname === l.to || (l.subLinks && l.subLinks.some(s => pathname === s.to));
            
            if (l.subLinks) {
              return (
                <div 
                  key={l.label} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(l.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 text-[15px] font-semibold transition-all duration-300 py-1 ${
                      isActive 
                        ? 'text-kavita-tan' 
                        : 'text-gray-800 hover:text-kavita-darkblue'
                    }`}
                  >
                    {l.label}
                    <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  
                  {activeDropdown === l.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-2 flex flex-col animate-[fadeIn_.2s_ease]">
                      {l.subLinks.map(sub => (
                        <Link 
                          key={sub.label} 
                          href={sub.to}
                          className="px-4 py-2 text-sm text-gray-700 hover:text-kavita-tan hover:bg-gray-50 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={l.label}
                href={l.to}
                className={`relative text-[15px] font-semibold transition-all duration-300 py-1 ${
                  isActive 
                    ? 'text-kavita-tan' 
                    : 'text-gray-800 hover:text-kavita-darkblue'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        
        <div className="hidden lg:flex items-center gap-5">
          <button 
            onClick={openModal} 
            className="btn-primary"
          >
            Book Appointment
          </button>
        </div>

        <button
          className="lg:hidden p-2 text-gray-800 hover:text-kavita-tan"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4 shadow-lg">
          {navLinks.map((l) => {
            const isActive = pathname === l.to;
            
            if (l.subLinks) {
              return (
                <div key={l.label} className="border-b border-gray-100 pb-2">
                  <div className="text-[15px] font-semibold text-gray-900 py-2">{l.label}</div>
                  <div className="pl-4 flex flex-col gap-2 mt-1">
                    {l.subLinks.map(sub => (
                      <Link 
                        key={sub.label} 
                        href={sub.to}
                        className={`text-sm py-1 transition-colors ${
                          pathname === sub.to ? 'text-kavita-tan' : 'text-gray-600 hover:text-kavita-darkblue'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={l.label}
                href={l.to}
                className={`block text-[15px] font-semibold py-2 transition-colors duration-300 ${
                  isActive ? 'text-kavita-tan' : 'text-gray-800 hover:text-kavita-darkblue'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={() => { setMobileOpen(false); openModal(); }}
              className="w-full justify-center btn-primary"
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
