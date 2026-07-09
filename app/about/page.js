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
              <img src={drFullImage} alt="Dr. Kavita Kabira" className="w-full h-full object-contain" />
            </div>
            <div className="absolute -bottom-6 -right-4 w-40 h-40 rounded-2xl overflow-hidden ring-8 ring-white shadow-2xl hidden lg:block">
              <img src={drAltImage} alt="Dr. Kavita" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-kavita-tan mb-5">
              Renowned Psychologist, Mindset Coach &amp; Expert in Emotional Healing
            </p>

            <h2 className="font-serif-display text-[28px] lg:text-[36px] leading-[1.3] text-gray-900 mb-8 whitespace-pre-wrap">
              {aboutInfo.intro}
            </h2>

            {/* Credentials Strip */}
            <div className="bg-[#f5f4ef] rounded-lg p-5 mb-8 border border-gray-200 shadow-sm">
              <p className="text-[14px] lg:text-[15px] font-medium text-gray-800 text-center leading-relaxed">
                NCAHP Registered | Ph.D. Social Psychology | M.A. Clinical Psychology | Trained Art & Psychodrama Therapist
              </p>
            </div>

            <div className="space-y-6 text-[15px] leading-[1.85] text-gray-600">
              {aboutInfo.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
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
                Dr. Kavita Kabira is a leading expert in mental health therapy, emotional healing, and trauma recovery. Blending modern psychology with holistic practices, she focuses on inner child trauma, corporate wellness, and mindfulness for emotional resilience.
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
