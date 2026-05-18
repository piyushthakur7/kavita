import React from 'react';
import Link from 'next/link';
import { featureCards } from '@/lib/mock';

// Audio channel labels matching each card
const CHANNEL_METADATA = {
  online: { ch: '01', freq: 'HIGH RESONANCE', color: '#ffaa00' },
  group: { ch: '02', freq: 'CALM WAVE', color: '#10b981' },
  corporate: { ch: '03', freq: 'BALANCED FREQ', color: '#3b82f6' }
};

const FeatureCards = () => {
  return (
    <section className="relative -mt-16 lg:-mt-24 z-20 px-6 lg:px-10 select-none">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureCards.map((c) => {
          const meta = CHANNEL_METADATA[c.id] || { ch: '00', freq: 'GENERAL', color: '#999' };
          return (
            <article 
              key={c.id} 
              className="card-sandy-editorial group rounded-[28px] overflow-hidden flex flex-col"
            >
              {/* Image banner with scale hover */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[10%]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Vintage metallic overlay tag */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded bg-[#0d0b0f]/80 border border-[#c5a880]/30 backdrop-blur-sm flex items-center gap-2">
                  <span 
                    style={{ backgroundColor: meta.color, boxShadow: `0 0 6px ${meta.color}` }}
                    className="w-1.5 h-1.5 rounded-full" 
                  />
                  <span className="text-[8.5px] font-mono tracking-widest text-[#c5a880] uppercase">
                    CH: {meta.ch} // {meta.freq}
                  </span>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-display text-[26px] leading-tight text-[#1c1a1f] mb-3 group-hover:text-[#c5a880] transition-colors duration-300">
                    {c.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#4b4753]/90 mb-6">
                    {c.desc}
                  </p>
                </div>
                
                <Link 
                  href={c.id === 'corporate' ? '/corporate-wellness' : '/services'} 
                  className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#c5a880] hover:text-[#0d0b0f] transition-colors flex items-center gap-1.5"
                >
                  <span>Learn more</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">→</span>
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
