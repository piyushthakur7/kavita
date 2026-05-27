"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import ContactCTA from '@/components/Contact';
import { psychServices, pricingPlans } from '@/lib/mock';
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
              Our goal is to provide customers with the best service, for us to help customers
              overcome their barriers is a noble task
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
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

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">
              OUR PRICES
            </p>
            <h2 className="font-serif-display text-[42px] sm:text-[54px] lg:text-[64px] leading-tight text-[#1c1a1f]">
              Pricing <span className="italic font-light">Table</span>
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#4b4753]">
              We have a reasonable price to assure you, we work according to the principle that the
              customer is the first, not the money
            </p>
            {/* Divider line */}
            <div className="w-14 h-[3px] bg-black mx-auto mt-6 mb-12"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-12">
            {pricingPlans.map((p) => (
              <div 
                key={p.id} 
                className="group relative bg-white border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-[32px] overflow-hidden transition-all duration-500 flex flex-col hover:-translate-y-1 transform"
              >
                {/* Header */}
                <div className="bg-[#090909] text-white p-8 text-center flex flex-col justify-center items-center relative">
                  {p.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#c5a48e] text-white rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-serif-display text-[26px] uppercase tracking-wider font-semibold">
                    {p.name}
                  </h3>
                  <p className="text-[12.5px] mt-1 text-white/60 font-sans italic font-light">
                    {p.subtitle}
                  </p>
                </div>

                {/* Body */}
                <div className="p-8 flex-1 flex flex-col items-center">
                  <div className="my-6 flex items-baseline justify-center text-[#1c1a1f]">
                    <span className="text-[20px] font-sans font-medium text-gray-400 self-start mt-2 mr-0.5">$</span>
                    <span className="font-serif-display text-[64px] font-light leading-none">{p.price}</span>
                  </div>

                  <ul className="w-full border-t border-gray-100 pt-6 space-y-4 flex-1">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14.5px] text-[#4b4753]">
                        <Check size={18} className="text-[#c5a48e] mt-0.5 shrink-0" />
                        <span className="leading-normal">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={openModal}
                    className="w-full mt-8 py-3.5 bg-[#060303] hover:bg-[#c5a48e] text-white text-[13px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[2px]"
                  >
                    STARTED NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
