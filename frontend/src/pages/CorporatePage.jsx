import React from 'react';
import { Briefcase, Users, Brain, ShieldCheck, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/Contact';
import Stats from '../components/Stats';
import { corporatePrograms, corporateImage } from '../mock';

const icons = [Briefcase, Users, Brain, ShieldCheck];

const CorporatePage = ({ onBookClick }) => (
  <>
    <PageBanner
      title={<><span>Corporate</span> <span className="italic font-light">Wellness</span></>}
      subtitle="For Leaders & Organisations"
      image={corporateImage}
      crumbs={[{ label: 'Corporate Wellness' }]}
    />

    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="rounded-3xl overflow-hidden h-[500px]">
          <img src={corporateImage} alt="Corporate Wellness" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">Why It Matters</p>
          <h2 className="font-serif-display text-[42px] lg:text-[56px] leading-[1.05] text-[#1c1a1f]">
            Invest in your team's <span className="italic font-light">mental wealth</span>
          </h2>
          <p className="mt-6 text-[15.5px] text-[#4b4753] leading-relaxed">
            High-performing organizations are built on emotionally resilient people. Our corporate
            wellness programs help leaders, managers and entire teams build the psychological
            strength to navigate ambiguity, sustain focus and lead with empathy.
          </p>
          <p className="mt-4 text-[15.5px] text-[#4b4753] leading-relaxed">
            We combine clinical psychology with executive coaching to deliver measurable shifts in
            productivity, retention and employee wellbeing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onBookClick} className="btn-dark">Request a Proposal <ArrowRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>

    <section className="section-light py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">Our Programs</p>
          <h2 className="font-serif-display text-[42px] sm:text-[54px] lg:text-[64px] leading-tight text-[#1c1a1f]">
            Tailored <span className="italic font-light">Programs</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-7">
          {corporatePrograms.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="svc-card bg-white rounded-3xl p-9 border border-gray-100 flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-fuchsia-50 flex items-center justify-center shrink-0">
                  <Icon className="text-fuchsia-700" size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif-display text-[26px] text-[#1c1a1f] mb-3">{p.title}</h3>
                  <p className="text-[14.5px] text-[#4b4753] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="section-darker py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-serif-display text-[36px] sm:text-[48px] lg:text-[56px] leading-tight text-white">
          Ready to elevate your <span className="italic font-light text-white/85">workplace wellbeing?</span>
        </h2>
        <p className="mt-5 text-white/65 max-w-2xl mx-auto">
          Let's design a custom wellness program for your organization. From discovery to delivery,
          we partner with you at every step.
        </p>
        <div className="mt-9">
          <button onClick={onBookClick} className="btn-dark bg-white text-[#1c1a1f] hover:bg-white/90">
            Schedule a Discovery Call
          </button>
        </div>
      </div>
    </section>

    <Stats />
    <ContactCTA />
  </>
);

export default CorporatePage;
