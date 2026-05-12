import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/mock';

const ServicesPreview = () => {
  return (
    <section id="services" className="py-24 lg:py-32 section-light">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-4">
            Our Services
          </p>
          <h2 className="font-serif-display text-[46px] sm:text-[58px] lg:text-[72px] leading-[1.05] text-[#1c1a1f]">
            Your <span className="italic font-light">Right Choice</span>
          </h2>
          <p className="mt-6 text-[15.5px] leading-relaxed text-[#4b4753] max-w-2xl">
            At <strong className="text-[#1c1a1f]">Kavita Kabira Wellness Clinic</strong>, we are
            dedicated to providing holistic and compassionate mental health care. Dr. Kavita
            Kabira is here to guide you through life’s challenges with empathy and expertise.
          </p>
          <div className="mt-8">
            <Link href="/services" className="btn-outline-dark">View all services</Link>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s) => (
            <article key={s.id} className="svc-card group bg-white rounded-3xl overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <h3 className="font-serif-display text-[28px] text-[#1c1a1f] mb-2">{s.title}</h3>
                <p className="text-[12px] uppercase tracking-[0.22em] text-[#9b97a4] mb-3">{s.tag}</p>
                <p className="text-[14.5px] text-[#4b4753] mb-5">{s.excerpt}</p>
                <Link href={`/services/${s.id}`} className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#1c1a1f] group/btn">
                  Read more
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
