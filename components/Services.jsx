import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/mock';

const ServicesPreview = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#fdfdfb]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.2em] text-[12px] font-semibold text-kavita-tan mb-4">
            Our Services
          </p>
          <h2 className="font-serif-display text-[46px] sm:text-[58px] lg:text-[72px] leading-[1.05] text-gray-900">
            Your <span className="italic font-normal">Right Choice</span>
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-gray-600 max-w-2xl">
            At <strong className="text-gray-900 font-bold">Kavita Kabira Wellness Clinic</strong>, we are
            dedicated to providing holistic and compassionate mental health care. Dr. Kavita
            Kabira is here to guide you through life’s challenges with empathy and expertise.
          </p>
          <div className="mt-8">
            <Link href="/services" className="btn-primary">View all services</Link>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s) => (
            <article key={s.id} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <h3 className="font-serif-display text-[26px] font-bold text-gray-900 mb-2 group-hover:text-kavita-tan transition-colors">{s.title}</h3>
                <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-kavita-tan mb-3">{s.tag}</p>
                <p className="text-[15px] text-gray-600 mb-5 leading-relaxed">{s.excerpt}</p>
                <Link href={`/services/${s.id}`} className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-gray-900 hover:text-kavita-tan transition-colors group/btn">
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
