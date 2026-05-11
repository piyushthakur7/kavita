import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '../mock';

const Header = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const headerBg = scrolled || !isHome
    ? 'bg-white/90 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(0,0,0,0.15)]'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-[15px] font-medium anchor-line ${
                  isActive ? 'text-fuchsia-700' : 'text-[#1c1a1f]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <button onClick={onBookClick} className="btn-dark text-sm">
            Book Appointment
          </button>
        </div>
        <button
          className="lg:hidden p-2 text-[#1c1a1f]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `block text-[15px] font-medium ${isActive ? 'text-fuchsia-700' : 'text-[#1c1a1f]'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onBookClick && onBookClick(); }}
            className="btn-dark text-sm w-full justify-center"
          >
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
