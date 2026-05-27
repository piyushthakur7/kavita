"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import { drImage, contact } from '@/lib/mock';
import { useModal } from '@/context/ModalContext';

const About = () => {
  const { openModal } = useModal();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-gray-900 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Image */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="w-full max-w-[560px] h-[500px] lg:h-[620px] overflow-hidden">
            <img 
              src={drImage} 
              alt="Dr. Kavita Kabira" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div>
          <p className="text-[12px] uppercase tracking-[0.25em] text-gray-500 font-medium mb-4">
            Welcome to <span className="text-kavita-tan">Kavita Kabira Wellness Clinic</span>
          </p>

          <h2 className="font-serif-display text-[38px] sm:text-[48px] leading-[1.1] text-gray-900 mb-6">
            The Leading Psychology &amp;
            <br />
            Wellness Clinic
          </h2>

          {/* Dark divider */}
          <div className="w-full max-w-[400px] h-[3px] bg-[#1e2235] mb-8"></div>

          <p className="text-[15px] leading-[1.8] text-gray-600 mb-6">
            In today&apos;s rapidly evolving society, many people face complex mental health challenges that can be overwhelming. Recognizing that mental well-being is a significant concern, it&apos;s crucial to seek support from professionals like the <b className="text-gray-900">Best Psychologist in Gurgaon</b> to navigate these issues.
          </p>

          <p className="text-[15px] leading-[1.8] text-gray-600 mb-4">
            Acknowledging this essential need, we have established a dedicated psychological practice. As the <b className="text-gray-900">Top Psychotherapist in Gurgaon and Delhi</b>, we offer comprehensive counseling and therapy services to support your mental health. Committed to accessibility, we strive to be an <b className="text-gray-900">Affordable Psychologist</b> for everyone seeking guidance.
          </p>

          <p className="text-[14px] text-gray-400 italic mb-8">
            Call us 24/7. We can answer for all your questions.
          </p>

          <Link
            href="/about"
            className="inline-block px-8 py-3.5 bg-[#1f1f1f] text-white text-[14px] font-medium rounded-[4px] hover:bg-black transition-colors"
          >
            Read More
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;
