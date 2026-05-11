"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-slate-100" 
          : "bg-white py-4 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 relative">
        
        {/* Left: Desktop Nav links */}
        <div className="flex items-center gap-6 md:w-1/3">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#0099D4] hover:bg-[#0099D4]/5 rounded-full transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[9px] tracking-[0.1em] uppercase font-serif font-bold transition-all hover:text-[#2DB34A] whitespace-nowrap ${
                  pathname === link.href ? "text-[#2DB34A]" : "text-[#0A2733]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center: Logo image + Brand name text */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 group shrink-0">
          <Image
            src="/nav_logo.png"
            alt="Brand Easy Logo"
            width={44}
            height={44}
            className="object-contain h-11 w-auto"
            priority
          />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold leading-none tracking-wide text-[#0A2733] group-hover:text-[#2DB34A] transition-colors">
              <span className="text-[#2DB34A]">Brand</span>
              <span className="text-blue-700">Easy</span>
            </span>
            <span className="text-[#2DB34A]/70 text-[9px] tracking-[0.25em] uppercase">
              Premium Printing & Branding
            </span>
          </div>
        </Link>

        {/* Right: Contact Button */}
        <div className="flex items-center justify-end md:w-1/3">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#2DB34A] text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#1F8A37] transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <Phone size={12} />
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <nav className="px-6 py-12 flex flex-col gap-8 text-center bg-slate-50">
              {[...navLinks, { label: "Contact Us", href: "/contact" }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg tracking-[0.1em] uppercase font-serif font-bold ${
                    pathname === link.href ? "text-[#2DB34A]" : "text-[#0A2733]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function postLabel(label: string) {
  return label;
}
