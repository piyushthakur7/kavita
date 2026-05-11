import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { pageBannerImage } from '@/lib/mock';

const PageBanner = ({ title, subtitle, crumbs = [], image }) => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image || pageBannerImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#efeefb]/85 via-[#e4e2f6]/90 to-[#d8d6ee]/95" />
      </div>
      <div className="absolute -top-4 left-8 w-32 h-32 dots-bg opacity-40 rounded-full" />
      <div className="absolute bottom-6 right-10 w-40 h-40 dots-bg opacity-40 rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {subtitle && (
          <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#5b5670] mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="font-serif-display text-[#1c1a1f] leading-[1.05] text-[48px] sm:text-[64px] lg:text-[80px]">
          {title}
        </h1>
        <nav className="mt-7 flex items-center gap-2 text-[13px] text-[#5b5670] flex-wrap">
          <Link href="/" className="hover:text-[#1c1a1f]">Home</Link>
          {crumbs.map((c, i) => (
            <React.Fragment key={i}>
              <ChevronRight size={14} className="opacity-60" />
              {c.to ? (
                <Link href={c.to} className="hover:text-[#1c1a1f]">{c.label}</Link>
              ) : (
                <span className="text-[#1c1a1f] font-medium">{c.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default PageBanner;
