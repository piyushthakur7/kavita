import React from 'react';
import { featureCards } from '@/lib/mock';

const icons = {
  online: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </svg>
  ),
  group: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  corporate: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
};

const FeatureCards = () => {
  return (
    <section className="bg-[#f0eff5] py-16 lg:py-20 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {featureCards.map((c) => {
          return (
            <article 
              key={c.id} 
              className="flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-full max-w-[320px] h-[220px] rounded-lg overflow-hidden border-2 border-gray-300 shadow-md mb-8">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gray-800">
                  {icons[c.id]}
                </span>
                <h3 className="font-serif-display text-[22px] lg:text-[26px] font-bold text-gray-900">
                  {c.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="w-16 h-[2px] bg-gray-400 mb-5"></div>
              
              {/* Description */}
              <p className="text-[14px] leading-relaxed text-gray-600 max-w-[380px]"
                dangerouslySetInnerHTML={{ __html: c.desc }}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCards;
