"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import ContactCTA from '@/components/Contact';
import { psychServices } from '@/lib/mock';
import { useModal } from '@/context/ModalContext';

export default function ServicesPage() {
  const { openModal } = useModal();

  return (
    <>
      <PageBanner
        title={<><span>Our</span> <span className="italic font-light">Services</span></>}
        subtitle="WE PROVIDE WHAT"
        crumbs={[{ label: 'Our Services' }]}
      />

      {/* Psychological Services Grid Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">
              WE PROVIDE WHAT
            </p>
            <h2 className="font-serif-display text-[42px] sm:text-[54px] lg:text-[64px] leading-tight text-[#1c1a1f]">
              Psychological <span className="italic font-light">Services</span>
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#4b4753]">
              Each service is tailored to the person in front of me—not a template, not a checklist. This is healing that respects your story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {psychServices.map((s) => (
              <article 
                key={s.id} 
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                {/* Image container */}
                <div className="h-[260px] overflow-hidden relative">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  />
                </div>
                {/* Card body */}
                <div className="p-8 flex-1 flex flex-col items-center text-center">
                  <h3 className="font-serif-display text-[24px] text-[#1c1a1f] mb-3 font-semibold group-hover:text-fuchsia-800 transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] text-[#5b5670] leading-relaxed mb-6 flex-1">
                    {s.excerpt}
                  </p>
                  <a 
                    href="https://wa.me/919971880693" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-[#050302] hover:bg-[#c5a48e] text-white text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[2px]"
                  >
                    CONTACT US
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#f8f7fc] border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">
              INVESTMENT
            </p>
            <h2 className="font-serif-display text-[38px] sm:text-[46px] leading-tight text-[#1c1a1f]">
              Care <span className="italic font-light">Packages</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Silver Package */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col text-center hover:-translate-y-1 transition-transform">
              <h3 className="text-[20px] font-serif-display text-gray-900 mb-1">Silver</h3>
              <p className="text-kavita-tan text-[28px] font-semibold mb-6">₹4,200</p>
              <ul className="text-[14px] text-gray-600 space-y-3 mb-8 flex-1">
                <li>One-on-one session</li>
                <li>Initial Psychological Assessment</li>
                <li>Basic Treatment Roadmap</li>
                <li className="italic text-gray-500 mt-4">*Split-payment option available</li>
              </ul>
            </div>

            {/* Golden Package */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl flex flex-col text-center hover:-translate-y-1 transition-transform relative transform md:scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-kavita-tan text-white text-[10px] uppercase tracking-wider px-4 py-1 rounded-full font-bold">
                Most Popular
              </div>
              <h3 className="text-[20px] font-serif-display text-white mb-1">Golden</h3>
              <p className="text-kavita-tan text-[32px] font-semibold mb-6">₹4,500</p>
              <ul className="text-[14px] text-gray-300 space-y-3 mb-8 flex-1">
                <li>Comprehensive Consultation</li>
                <li>Personalised Treatment Plan</li>
                <li>Inner Child & Somatic Assessment</li>
                <li>Follow-up Roadmap</li>
                <li className="italic text-gray-400 mt-4">*Split-payment option available</li>
              </ul>
            </div>

            {/* Diamond Package */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col text-center hover:-translate-y-1 transition-transform">
              <h3 className="text-[20px] font-serif-display text-gray-900 mb-1">Diamond</h3>
              <p className="text-kavita-tan text-[28px] font-semibold mb-6">₹4,800</p>
              <ul className="text-[14px] text-gray-600 space-y-3 mb-8 flex-1">
                <li>In-depth therapeutic session</li>
                <li>Priority scheduling</li>
                <li>Extensive emotional evaluation</li>
                <li>Tailored trauma-informed interventions</li>
                <li className="italic text-gray-500 mt-4">*Split-payment option available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner Section with Lavender to White Gradient */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#DAE0FF] to-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <h2 className="font-serif-display text-[36px] sm:text-[44px] lg:text-[48px] leading-tight text-[#0A0606] font-medium">
            Book a session today and <span className="italic font-light text-black/80">start changing your life!</span>
          </h2>
          <div className="mt-8">
            <button 
              onClick={openModal} 
              className="inline-block px-8 py-3.5 bg-white border border-gray-200 shadow-sm hover:bg-gray-50 text-[#000000] text-[13px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-full cursor-pointer hover:shadow-md hover:-translate-y-0.5 transform"
            >
              GET STARTED TODAY
            </button>
          </div>
        </div>
      </section>



      <ContactCTA />
    </>
  );
}
