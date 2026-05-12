import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import ContactCTA from '@/components/Contact';
import Stats from '@/components/Stats';
import { aboutInfo, drFullImage, drAltImage } from '@/lib/mock';

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title={<><span>About</span> <span className="italic font-light">Dr. Kavita Kabira</span></>}
        subtitle="Introducing Dr. Kavita Kabira Bhutani"
        crumbs={[{ label: 'About' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[260px] overflow-hidden h-[560px] bg-[#efeefb] grayscale-[10%]">
              <img src={drFullImage} alt="Dr. Kavita Kabira" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 w-44 h-44 rounded-3xl overflow-hidden ring-8 ring-white shadow-2xl hidden lg:block">
              <img src={drAltImage} alt="Dr. Kavita" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-5">
              Renowned Psychologist, Mindset Coach & Expert in Emotional Healing
            </p>
            <h3 className="font-serif-display text-[32px] lg:text-[42px] leading-[1.1] text-[#1c1a1f]">
              {aboutInfo.intro}
            </h3>
            <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-[#4b4753]">
              {aboutInfo.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-light py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">Biography</p>
            <h2 className="font-serif-display text-[42px] sm:text-[54px] lg:text-[64px] leading-tight text-[#1c1a1f]">
              Experience <span className="italic font-light">Timeline</span>
            </h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#cfcce6] hidden md:block" />
            {aboutInfo.timeline.map((t, i) => (
              <div key={i} className={`relative md:grid md:grid-cols-2 md:gap-12 mb-10 ${i % 2 === 0 ? '' : 'md:[direction:rtl]'}`}>
                <div className={`bg-white rounded-2xl p-7 shadow-[0_20px_50px_-30px_rgba(40,30,80,0.25)] border border-gray-100 md:[direction:ltr] ${i % 2 === 0 ? '' : 'md:col-start-2'}`}>
                  <p className="text-[12px] uppercase tracking-[0.22em] font-semibold text-fuchsia-700 mb-2">{t.period}</p>
                  <h4 className="font-serif-display text-[24px] text-[#1c1a1f] mb-3">{t.title}</h4>
                  <p className="text-[14.5px] text-[#4b4753] leading-relaxed">{t.desc}</p>
                </div>
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-fuchsia-600 ring-4 ring-[#f5f4ef] z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
          <div>
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">Awards & Honours</p>
            <h2 className="font-serif-display text-[40px] lg:text-[52px] leading-tight text-[#1c1a1f]">
              Recognized <span className="italic font-light">Excellence</span>
            </h2>
            <ul className="mt-8 space-y-5">
              {aboutInfo.awards.map((a, i) => (
                <li key={i} className="flex gap-4 group">
                  <Award className="text-fuchsia-700 mt-1 shrink-0" size={22} strokeWidth={1.5} />
                  <div>
                    <p className="font-medium text-[#1c1a1f] text-[16px]">
                      <span className="text-fuchsia-700 font-semibold">{a.year}:</span> {a.title}
                    </p>
                    <p className="text-[13.5px] text-[#7e7a86] mt-0.5">{a.org}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">Therapeutic Specializations</p>
            <h2 className="font-serif-display text-[40px] lg:text-[52px] leading-tight text-[#1c1a1f]">
              Areas of <span className="italic font-light">Expertise</span>
            </h2>
            <ul className="mt-8 space-y-5">
              {aboutInfo.specializations.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="text-fuchsia-700 mt-1 shrink-0" size={22} strokeWidth={1.5} />
                  <div>
                    <p className="font-medium text-[#1c1a1f] text-[16px]">{s.title}</p>
                    <p className="text-[13.5px] text-[#7e7a86] mt-0.5">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Stats />
      <ContactCTA />
    </>
  );
}
