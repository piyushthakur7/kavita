"use client";
import React, { useState } from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import ContactCTA from '@/components/Contact';
import Stats from '@/components/Stats';
import { aboutInfo, drFullImage, drAltImage } from '@/lib/mock';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('biography');

  return (
    <>
      <PageBanner
        title={<><span>About</span> <span className="italic font-light">Me</span></>}
        subtitle="Introducing Dr. Kavita Kabira Bhutani"
        crumbs={[{ label: 'About Me' }]}
      />

      {/* Hero Intro Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden h-[520px] lg:h-[600px]">
              <img src={drFullImage} alt="Dr. Kavita Kabira" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 w-40 h-40 rounded-2xl overflow-hidden ring-8 ring-white shadow-2xl hidden lg:block">
              <img src={drAltImage} alt="Dr. Kavita" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-kavita-tan mb-5">
              Renowned Psychologist, Mindset Coach &amp; Expert in Emotional Healing
            </p>

            <h2 className="font-serif-display text-[28px] lg:text-[36px] leading-[1.3] text-gray-900 mb-8">
              I am a psychologist and Mindset Coach with extensive experience in mental health therapy and emotional healing. I help individuals rebuild their lives, while also empowering corporations to enhance productivity and well-being.
            </h2>

            <div className="space-y-6 text-[15px] leading-[1.85] text-gray-600">
              <p>
                With over 20 years of experience as a psychologist, <b className="text-gray-900">Dr. Kavita Kabira</b> specializes in providing expert <b className="text-gray-900">mental health therapy</b> and <b className="text-gray-900">emotional healing</b>. She is here to support you through your psychological challenges.
              </p>
              <p>
                In today&apos;s fast-paced world, individuals face various modern-day stressors and complex mental health concerns. Mental health issues, such as <b className="text-gray-900">inner child trauma</b>, anxiety, and emotional stress, have become significant yet often overlooked challenges in society. At <b className="text-gray-900">Kavita Kabira Wellness Clinic</b>, we address these concerns with a holistic approach, utilizing diverse techniques to tap into your natural healing potential. We help you restore balance, fostering mental resilience and emotional well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section: Biography & Awards */}
      <section className="py-20 lg:py-28 bg-[#f8f7fc]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          
          {/* Tab Buttons */}
          <div className="flex gap-0 mb-12 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('biography')}
              className={`px-8 py-4 text-[16px] font-semibold transition-all border-b-3 ${
                activeTab === 'biography'
                  ? 'text-gray-900 border-b-[3px] border-[#1e2235]'
                  : 'text-gray-400 border-b-[3px] border-transparent hover:text-gray-600'
              }`}
            >
              Biography and Experience
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`px-8 py-4 text-[16px] font-semibold transition-all ${
                activeTab === 'awards'
                  ? 'text-gray-900 border-b-[3px] border-[#1e2235]'
                  : 'text-gray-400 border-b-[3px] border-transparent hover:text-gray-600'
              }`}
            >
              Awards &amp; Honours
            </button>
          </div>

          {/* Biography Tab */}
          {activeTab === 'biography' && (
            <div className="animate-[fadeIn_.3s_ease]">
              {/* Intro paragraph */}
              <p className="text-[15px] leading-[1.85] text-gray-600 mb-10 max-w-4xl">
                Dr. Kavita Kabira, an <b className="text-gray-900">AAHP registered psychologist</b> with years of experience, is a leading expert in mental health therapy, emotional healing, and trauma recovery. As a sought-after <b className="text-gray-900">Mindset Coach</b> and <b className="text-gray-900">top psychologist in Gurgaon</b>, she blends modern psychology with holistic practices, focusing on inner child trauma, corporate wellness, and mindfulness for emotional resilience. Dr. Kavita helps individuals and organizations achieve mental clarity and emotional well-being, making her a recognized leader in her field.
              </p>

              {/* Timeline */}
              <div className="space-y-10">
                {aboutInfo.timeline.map((t, i) => (
                  <div key={i} className="relative pl-8 border-l-[3px] border-[#1e2235]">
                    <div className="absolute left-[-8px] top-1 w-[13px] h-[13px] rounded-full bg-[#1e2235] ring-4 ring-[#f8f7fc]"></div>
                    <h4 className="text-[13px] uppercase tracking-[0.2em] font-bold text-kavita-tan mb-2">
                      {t.period}
                    </h4>
                    <h3 className="font-serif-display text-[24px] text-gray-900 mb-3">
                      {t.title}
                    </h3>
                    <p className="text-[15px] leading-[1.85] text-gray-600">
                      {t.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards Tab */}
          {activeTab === 'awards' && (
            <div className="animate-[fadeIn_.3s_ease]">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Awards */}
                <div>
                  <h3 className="font-serif-display text-[28px] text-gray-900 mb-6">
                    Awards &amp; Honours
                  </h3>
                  <ul className="space-y-6">
                    {aboutInfo.awards.map((a, i) => (
                      <li key={i} className="flex gap-4 group">
                        <Award className="text-kavita-tan mt-1 shrink-0" size={22} strokeWidth={1.5} />
                        <div>
                          <p className="font-medium text-gray-900 text-[16px]">
                            <span className="text-kavita-tan font-semibold">{a.year}:</span> {a.title}
                          </p>
                          <p className="text-[13.5px] text-gray-500 mt-0.5">{a.org}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specializations */}
                <div>
                  <h3 className="font-serif-display text-[28px] text-gray-900 mb-6">
                    Areas of Expertise
                  </h3>
                  <ul className="space-y-6">
                    {aboutInfo.specializations.map((s, i) => (
                      <li key={i} className="flex gap-4">
                        <CheckCircle2 className="text-kavita-tan mt-1 shrink-0" size={22} strokeWidth={1.5} />
                        <div>
                          <p className="font-medium text-gray-900 text-[16px]">{s.title}</p>
                          <p className="text-[13.5px] text-gray-500 mt-0.5">{s.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      <Stats />
      <ContactCTA />
    </>
  );
}
