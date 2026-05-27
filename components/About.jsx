"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, CalendarCheck } from 'lucide-react';
import { drImage, contact, aboutInfo } from '@/lib/mock';
import { useModal } from '@/context/ModalContext';

const About = () => {
  const { openModal } = useModal();

  return (
    <section id="about" className="py-24 lg:py-32 bg-white text-gray-900 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Portrait */}
        <div className="relative flex justify-center lg:justify-start">
          
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-kavita-tan/20 shadow-xl z-10 bg-white">
            <img 
              src={drImage} 
              alt="Dr. Kavita Kabira" 
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
            />
          </div>

          {/* Floating Contact Card */}
          <div className="absolute -bottom-6 right-2 sm:right-10 bg-white border border-gray-100 p-6 rounded-xl shadow-2xl w-[250px] z-20">
            <h4 className="font-serif-display text-xl text-gray-900 font-bold mb-1">
              Dr. Kavita Kabira
            </h4>
            <p className="text-[11px] uppercase tracking-wider text-kavita-tan font-bold mb-4">
              Therapist & Mindset Coach
            </p>
            
            <div className="space-y-3 pt-3 border-t border-gray-100">
              <a 
                href={`tel:${contact.phoneRaw}`} 
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-kavita-tan transition-colors font-medium"
              >
                <Phone size={16} className="text-kavita-tan" /> 
                <span>{contact.phone.replace('+91-', '')}</span>
              </a>
              <button 
                onClick={openModal} 
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-kavita-tan transition-colors font-medium w-full text-left"
              >
                <CalendarCheck size={16} className="text-kavita-tan" /> 
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kavita-tan/10 text-kavita-tan text-xs font-semibold uppercase tracking-wider mb-5">
            <span>About The Founder</span>
          </div>

          <h2 className="font-serif-display text-[42px] sm:text-[52px] leading-[1.1] text-gray-900 font-bold mb-6">
            Leading Voice in
            <br />
            <span className="italic font-normal text-kavita-tan">Psychological Wellness</span>
          </h2>

          <p className="text-[16px] leading-relaxed text-gray-600 mb-8">
            With over two decades of transformative practice, Dr. Kavita Kabira leverages sound clinical research alongside trauma-informed, holistic therapies to guide clients from distress into absolute alignment.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {aboutInfo.timeline.slice(2, 4).map((t, idx) => (
              <div key={idx} className="bg-[#fcfbf9] border border-gray-100 p-5 rounded-lg shadow-sm">
                <h4 className="font-serif-display text-lg text-gray-900 font-bold mb-2">
                  {t.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/about" 
              className="btn-primary"
            >
              Read Full Profile
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
