"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Youtube, Instagram, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { ContactInfo } from './Contact';
import { contact, navLinks, socialLinks } from '@/lib/mock';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#f5f4ef] text-gray-800 border-t border-gray-200 select-none relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Column 1: About */}
        <div className="lg:col-span-1 flex flex-col justify-between">
          <div>
            <Logo />
            <p className="mt-6 text-[14px] text-gray-600 leading-relaxed font-bold">
              Healing that respects your story.
            </p>
            <p className="mt-2 text-[14px] text-gray-600 leading-relaxed">
              Counseling Therapist and Psychologist offering support for trauma recovery and inner child healing in Gurgaon, Delhi, and online.
            </p>
          </div>
        </div>

        {/* Column 2: Clinic Updates */}
        <div className="lg:col-span-1 flex flex-col">
          <h4 className="font-serif-display text-lg font-semibold text-gray-900 mb-5">
            Clinic Updates
          </h4>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Email the clinic to ask about upcoming workshops and programs.
          </p>
          <a
            href={`mailto:${contact.email}?subject=Clinic%20updates`}
            className="btn-primary self-start"
          >
            Request updates
          </a>
        </div>

        {/* Column 3: Links */}
        <div>
          <h4 className="font-serif-display text-lg font-semibold text-gray-900 mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 font-medium text-sm">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.to} className="text-gray-600 hover:text-kavita-tan transition flex items-center gap-2">
                  <span>{l.label}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#academy" className="text-gray-600 hover:text-kavita-tan transition flex items-center gap-2">
                <span>Kavita Kabira Wellness Academy</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Social */}
        <div className="space-y-6">
          <div>
            <h4 className="font-serif-display text-lg font-semibold text-gray-900 mb-4">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-kavita-tan hover:text-white transition shadow-sm text-gray-600">
                <Facebook size={16} />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-kavita-tan hover:text-white transition shadow-sm text-gray-600">
                <Youtube size={16} />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-kavita-tan hover:text-white transition shadow-sm text-gray-600">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-serif-display text-lg font-semibold text-gray-900 mb-3">
              Contact
            </h4>
            <ContactInfo />
          </div>
        </div>

      </div>

      {/* Copyright footer strip */}
      <div className="border-t border-gray-200 bg-white py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Kavita Kabira Wellness Clinic. All rights reserved.
            </p>
            <p>
              Developed by <a href="https://www.webtotalsolution.com/" target="_blank" rel="noopener" className="hover:text-kavita-tan transition font-medium">Web Total Solution</a>
            </p>
          </div>
          <button
            onClick={scrollTop}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-kavita-tan hover:text-white transition shrink-0"
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
