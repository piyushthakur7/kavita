"use client";
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { contact } from '@/lib/mock';

export default function WorkshopPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already closed the popup in this session
    const hasClosed = sessionStorage.getItem('kk_workshop_popup_closed');
    if (!hasClosed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('kk_workshop_popup_closed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_.3s_ease]">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-[slideUp_.4s_ease]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100/50 hover:bg-gray-200 text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X size={18} />
        </button>

        {/* Header Section */}
        <div className="bg-gradient-to-br from-[#f5f4ef] to-white p-8 pb-6 text-center border-b border-gray-100">
          <div className="text-4xl mb-3 animate-bounce">🌿</div>
          <h2 className="font-serif-display text-[26px] md:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
            Transform Your Mind.<br />
            <span className="text-kavita-tan">Transform Your Life.</span>
          </h2>
          <p className="mt-4 text-[15px] md:text-base font-semibold text-gray-700 leading-relaxed">
            Weekend Transformational Workshops<br />
            <span className="font-medium text-gray-500">with Dr. Kavita Kabira</span>
          </p>
          <div className="mt-4 inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
            <p className="text-xs md:text-sm font-semibold text-kavita-darkblue">
              Available in Offline & Live Online Formats
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 pt-6">
          <ul className="space-y-3.5 mb-7 text-[14px] md:text-[15px] text-gray-700 font-medium">
            {[
              "10-Hour Experiential Workshop",
              "Inner Child Healing",
              "Emotional Wellness & Mindset Reset",
              "Bring Back the Spark in Your Relationship",
              "Stress Management & Emotional Resilience",
              "Art Therapy • Journaling • Guided Practices"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#25D366] font-bold text-lg leading-none mt-0.5">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mb-7 p-4 bg-red-50/50 rounded-xl border border-red-100">
            <p className="text-xs md:text-sm font-bold text-red-600 tracking-wider uppercase">
              Limited Seats | Small Interactive Batches
            </p>
            <p className="mt-2 text-[13px] md:text-sm text-gray-600 italic">
              Want the next workshop dates, venue, fees & registration details?
            </p>
          </div>

          <div className="text-center">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center w-full gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20b958] text-white font-bold rounded-xl transition-all hover:shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:-translate-y-0.5"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative flex items-center gap-2">
                <span className="text-xl">🟢</span> WhatsApp Now
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
