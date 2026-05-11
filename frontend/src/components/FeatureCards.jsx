import React from 'react';
import { Link } from 'react-router-dom';
import { featureCards } from '../mock';

const FeatureCards = () => {
  return (
    <section className="relative -mt-16 lg:-mt-24 z-20 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureCards.map((c) => (
          <article key={c.id} className="svc-card group bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-[0_30px_60px_-30px_rgba(40,30,80,0.25)]">
            <div className="h-56 overflow-hidden">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-7">
              <h3 className="font-serif-display text-[26px] leading-tight text-[#1c1a1f] mb-3">{c.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-[#4b4753] mb-4">{c.desc}</p>
              <Link to={c.id === 'corporate' ? '/corporate-wellness' : '/services'} className="text-[12.5px] uppercase tracking-[0.22em] font-semibold text-fuchsia-700 hover:text-fuchsia-900">
                Learn more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
