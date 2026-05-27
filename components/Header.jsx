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
        
        <nav className="hidden lg:flex items-center gap-10 select-none">
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
                    className={`text-[15px] font-medium transition-all duration-300 py-1 border-b-2 ${
                      isActive 
                        ? 'text-gray-900 border-gray-900' 
                        : 'text-gray-700 border-transparent hover:text-gray-900 hover:border-gray-900'
                    }`}
                  >
                    {l.label}
                  </button>
                  
                  {activeDropdown === l.label && (
                    <div className="absolute top-full left-0 pt-3 min-w-[200px]">
                      <div className="bg-[#1e2235] rounded-md shadow-2xl py-3 flex flex-col animate-[fadeIn_.2s_ease]">
                        {l.subLinks.map(sub => (
                          <Link 
                            key={sub.label} 
                            href={sub.to}
                            className="px-5 py-2.5 text-[14px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={l.label}
                href={l.to}
                className={`relative text-[15px] font-medium transition-all duration-300 py-1 border-b-2 ${
                  isActive 
                    ? 'text-gray-900 border-gray-900' 
                    : 'text-gray-700 border-transparent hover:text-gray-900 hover:border-gray-900'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

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
                          pathname === sub.to ? 'text-kavita-tan' : 'text-gray-600 hover:text-gray-900'
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
                  isActive ? 'text-kavita-tan' : 'text-gray-800 hover:text-gray-900'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
