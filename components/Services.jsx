import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/mock';

const ServicesPreview = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f0eff5]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

          {/* Left Column: Text */}
          <div>
            <h2 className="font-serif-display text-[32px] text-gray-800 mb-1">
              Our Services
            </h2>
            <h3 className="font-serif-display text-[42px] sm:text-[48px] leading-[1.1] text-gray-900 font-bold mb-6">
              Your Right Choice
            </h3>

            {/* Dark divider */}
            <div className="w-full max-w-[400px] h-[3px] bg-[#1e2235] mb-8"></div>

            <p className="text-[15px] leading-[1.8] text-gray-600 mb-8">
              At <b className="text-gray-900">Kavita Kabira Wellness Clinic</b>, we are dedicated to providing holistic and compassionate mental health care. As the <b className="text-gray-900">Best Psychologist in Gurgaon</b>, Dr. Kavita Kabira is here to guide you through life&apos;s challenges with empathy and expertise. We believe in empowering our clients, offering personalized care that goes beyond mere problem-solving to help you achieve lasting mental well-being. Our goal is to support you as you transform your life and find peace, balance, and clarity.
            </p>

            <Link 
              href="/services" 
              className="inline-block px-8 py-3.5 bg-[#1f1f1f] text-white text-[14px] font-medium rounded-[4px] hover:bg-black transition-colors"
            >
              View all services
            </Link>
          </div>

          {/* Right Column: Service Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.id} className="flex flex-col items-center text-center">
                {/* Image peeking above */}
                <div className="w-full h-[160px] rounded-t-lg overflow-hidden mb-0">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Card body */}
                <div className="bg-white rounded-b-lg p-6 w-full flex-1 flex flex-col items-center shadow-sm">
                  <h4 className="font-serif-display text-[22px] text-gray-900 mb-2 mt-2">
                    {s.title}
                  </h4>
                  <p className="text-[12px] uppercase tracking-[0.15em] text-kavita-tan font-semibold mb-3">
                    {s.tag}
                  </p>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-5 flex-1">
                    {s.excerpt}
                  </p>
                  <Link 
                    href={`/services/${s.id}`} 
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
