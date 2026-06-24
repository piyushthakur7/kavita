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
            A Different Kind of
            <br />
            Healing Clinic
          </h2>

          {/* Dark divider */}
          <div className="w-full max-w-[400px] h-[3px] bg-[#1e2235] mb-8"></div>

          <p className="text-[15px] leading-[1.8] text-gray-600 mb-6">
            In India, we are experts at surviving. We push through grief, swallow our needs, and call it strength. But survival is not the same as healing.
          </p>

          <p className="text-[15px] leading-[1.8] text-gray-600 mb-6">
            At Kavita Kabira Wellness Clinic, I work with what most therapy skips &mdash; the inner child, the nervous system, the story your body is still holding. My approach is not borrowed wholesale from the West. It is informed by global clinical frameworks and rooted in the Indian emotional landscape &mdash; the weight of family expectations, the silence around desire, the loneliness inside a full house.
          </p>

          <p className="text-[14px] text-gray-600 italic mb-8 font-medium">
            If you have ever felt like something is quietly wrong even when everything looks fine &mdash; you are exactly who I work with.
          </p>

          <Link
            href="/about"
            className="inline-block px-8 py-3.5 bg-[#1f1f1f] text-white text-[14px] font-medium rounded-[4px] hover:bg-black transition-colors"
          >
            Read More &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;
