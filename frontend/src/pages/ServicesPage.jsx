import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/Contact';
import { services, psychServices, pricingPlans } from '../mock';

const ServicesPage = ({ onBookClick }) => {
  return (
    <>
      <PageBanner
        title={<><span>Our</span> <span className="italic font-light">Services</span></>}
        subtitle="We Provide What"
        crumbs={[{ label: 'Services' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">Featured</p>
            <h2 className="font-serif-display text-[42px] sm:text-[54px] lg:text-[64px] leading-tight text-[#1c1a1f]">
              Core <span className="italic font-light">Programs</span>
            </h2>
            <p className="mt-5 text-[15.5px] text-[#4b4753]">
              Targeted therapy programs designed to address the most common emotional and
              psychological challenges with compassion and clinical rigor.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s) => (
              <article key={s.id} className="svc-card group bg-white rounded-3xl overflow-hidden border border-gray-100">
                <Link to={`/services/${s.id}`} className="block h-64 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </Link>
                <div className="p-7">
                  <h3 className="font-serif-display text-[28px] text-[#1c1a1f] mb-2">{s.title}</h3>
                  <p className="text-[12px] uppercase tracking-[0.22em] text-[#9b97a4] mb-3">{s.tag}</p>
                  <p className="text-[14.5px] text-[#4b4753] mb-5">{s.excerpt}</p>
                  <Link to={`/services/${s.id}`} className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#1c1a1f] group/btn">
                    Read more
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">Psychological Services</p>
            <h2 className="font-serif-display text-[42px] sm:text-[54px] lg:text-[64px] leading-tight text-[#1c1a1f]">
              Comprehensive <span className="italic font-light">Care</span>
            </h2>
            <p className="mt-5 text-[15.5px] text-[#4b4753]">
              Our goal is to provide customers with the best service. For us, helping clients
              overcome their barriers is a noble task.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {psychServices.map((s) => (
              <article key={s.id} className="svc-card bg-white rounded-3xl overflow-hidden border border-gray-100 group">
                <div className="h-56 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif-display text-[24px] text-[#1c1a1f] mb-3">{s.title}</h3>
                  <p className="text-[14px] text-[#4b4753] mb-5 leading-relaxed">{s.excerpt}</p>
                  <Link to="/contact" className="text-[12px] uppercase tracking-[0.25em] font-semibold text-fuchsia-700 hover:text-fuchsia-900">
                    Contact Us →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-darker py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif-display text-[36px] sm:text-[48px] lg:text-[56px] leading-tight text-white">
            Book a session today and <span className="italic font-light text-white/85">start changing your life!</span>
          </h2>
          <div className="mt-9">
            <button onClick={onBookClick} className="btn-dark bg-white text-[#1c1a1f] hover:bg-white/90">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">Our Prices</p>
            <h2 className="font-serif-display text-[42px] sm:text-[54px] lg:text-[64px] leading-tight text-[#1c1a1f]">
              Pricing <span className="italic font-light">Table</span>
            </h2>
            <p className="mt-5 text-[15.5px] text-[#4b4753]">
              We have reasonable prices to assure you. We work on the principle that the
              customer comes first — not the money.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {pricingPlans.map((p) => (
              <div key={p.id} className={`relative rounded-3xl p-9 border ${p.featured ? 'bg-[#1c1a1f] text-white border-[#1c1a1f] shadow-[0_30px_60px_-30px_rgba(40,30,80,0.5)] scale-[1.03]' : 'bg-white border-gray-200'}`}>
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold bg-fuchsia-600 text-white rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif-display text-[28px] uppercase tracking-wide">{p.name}</h3>
                <p className={`text-[13px] mt-1 ${p.featured ? 'text-white/60' : 'text-[#7e7a86]'}`}>{p.subtitle}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className={`text-[14px] mt-2 ${p.featured ? 'text-white/70' : 'text-[#4b4753]'}`}>$</span>
                  <span className="font-serif-display text-[64px] leading-none">{p.price}</span>
                </div>
                <ul className="mt-7 space-y-3">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px]">
                      <Check size={16} className={p.featured ? 'text-fuchsia-400 mt-0.5 shrink-0' : 'text-fuchsia-700 mt-0.5 shrink-0'} />
                      <span className={p.featured ? 'text-white/85' : 'text-[#4b4753]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onBookClick}
                  className={`mt-9 w-full ${p.featured ? 'bg-white text-[#1c1a1f] hover:bg-white/90' : 'bg-[#1c1a1f] text-white hover:bg-[#3a3640]'} rounded-full py-3.5 text-[13px] uppercase tracking-[0.2em] font-semibold transition`}
                >
                  Started Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default ServicesPage;
