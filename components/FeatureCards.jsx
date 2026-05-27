import React from 'react';
import Link from 'next/link';
import { featureCards } from '@/lib/mock';

const FeatureCards = () => {
  return (
    <section className="relative -mt-16 lg:-mt-20 z-20 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureCards.map((c) => {
          return (
            <article 
              key={c.id} 
              className="bg-white rounded-lg overflow-hidden flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image banner with scale hover */}
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              
              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-display text-2xl font-bold text-gray-900 mb-4 hover:text-kavita-tan transition-colors duration-300">
                    {c.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-gray-600 mb-6">
                    {c.desc}
                  </p>
                </div>
                
                <Link 
                  href={c.id === 'corporate' ? '/corporate-wellness' : '/services'} 
                  className="inline-flex items-center text-sm font-semibold text-kavita-tan hover:text-gray-900 transition-colors"
                >
                  <span className="border-b-2 border-kavita-tan hover:border-gray-900 pb-0.5">
                    READ MORE
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCards;
