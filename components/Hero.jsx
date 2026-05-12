import React from 'react';
import Link from 'next/link';
import { heroImages } from '@/lib/mock';

const Hero = () => {
  return (
    <section id="home" className="relative hero-gradient overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute -top-4 left-8 w-32 h-32 dots-bg opacity-60 rounded-full" />
      <div className="absolute bottom-10 left-1/3 w-40 h-40 dots-bg opacity-50 rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center relative">
        <div className="relative z-10">
          <h1 className="font-serif-display text-[#1c1a1f] leading-[1.02] text-[58px] sm:text-[72px] lg:text-[96px] tracking-tight">
            Transform Your
            <br />
            <span className="italic font-light">Mental Health.</span>
          </h1>
          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-[#3a3740]/85">
            Compassionate, evidence-based psychotherapy & wellness coaching in Gurgaon, Delhi &
            online. Begin your journey to clarity, peace and lasting balance.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-dark">Get Free Consultation</Link>
            <Link href="/services" className="btn-outline-dark">Explore Services</Link>
          </div>
        </div>

        <div className="relative h-[440px] sm:h-[520px] lg:h-[620px]">
          <div className="absolute right-10 top-6 w-[80%] h-full rounded-[400px] bg-[#cfcce6] blur-2xl opacity-70" />
          <img
            src={heroImages.primary}
            alt="Therapist"
            className="absolute right-0 top-0 w-[78%] h-full object-cover rounded-[300px] grayscale-[20%] shadow-xl"
          />
          <img
            src={heroImages.secondary}
            alt="Therapist secondary"
            className="absolute left-0 bottom-0 w-[55%] h-[78%] object-cover rounded-[260px] grayscale shadow-2xl ring-4 ring-white/60"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
