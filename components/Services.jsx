import React from 'react';
import Link from 'next/link';
import { psychServices } from '@/lib/mock';

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#fdfdfd] border-t border-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">
            WHAT WE OFFER
          </p>
          <h2 className="font-serif-display text-[42px] sm:text-[54px] lg:text-[64px] leading-tight text-[#1c1a1f]">
            Specialised Services
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-[#4b4753]">
            Each service is tailored to the person in front of me &mdash; not a template, not a checklist. This is healing that respects your story.
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
                <h3 className="font-serif-display text-[24px] text-[#1c1a1f] mb-3 font-semibold transition-colors duration-300">
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
  );
};

export default Services;
