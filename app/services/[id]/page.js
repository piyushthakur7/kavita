"use client";
import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Phone, CalendarCheck } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import ContactCTA from '@/components/Contact';
import { services, contact } from '@/lib/mock';
import { useModal } from '@/context/ModalContext';

export default function ServiceDetailPage({ params }) {
  const { id } = use(params);
  const { openModal } = useModal();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <>
        <PageBanner title="Service Not Found" crumbs={[{ label: 'Services', to: '/services' }, { label: 'Not Found' }]} />
        <section className="py-24 text-center">
          <Link href="/services" className="btn-outline-dark">Back to Services</Link>
        </section>
      </>
    );
  }

  const others = services.filter((s) => s.id !== id);

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle="Service Detail"
        image={service.image}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden mb-10 h-[420px]">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-[12px] uppercase tracking-[0.22em] text-fuchsia-700 font-semibold mb-3">{service.tag}</p>
            <h2 className="font-serif-display text-[40px] lg:text-[52px] leading-[1.1] text-[#1c1a1f] mb-6">{service.title}</h2>
            <p className="text-[16px] text-[#4b4753] leading-relaxed mb-6">{service.body}</p>
            <p className="text-[16px] text-[#4b4753] leading-relaxed mb-6">
              At Kavita Kabira Wellness Clinic, every session is private, confidential and tailored to your
              unique journey. We blend modern therapeutic frameworks with deeply human listening to create
              an environment where healing feels natural.
            </p>
            <p className="text-[16px] text-[#4b4753] leading-relaxed">
              Whether you visit in person at our Gurgaon clinic or join us online, you will receive the same
              expert care, structured plan and ongoing support.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button onClick={openModal} className="btn-dark">
                <CalendarCheck size={16} /> Book a Session
              </button>
              <a href={`tel:${contact.phoneRaw}`} className="btn-outline-dark">
                <Phone size={16} /> {contact.phone}
              </a>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="bg-[#f5f4ef] rounded-3xl p-7">
              <h3 className="font-serif-display text-[24px] text-[#1c1a1f] mb-5">Other Services</h3>
              <ul className="space-y-4">
                {others.map((o) => (
                  <li key={o.id}>
                    <Link href={`/services/${o.id}`} className="flex items-center gap-4 group">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                        <img src={o.image} alt={o.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <p className="font-serif-display text-[18px] text-[#1c1a1f] group-hover:text-fuchsia-700 transition-colors">{o.title}</p>
                        <p className="text-[11.5px] uppercase tracking-[0.22em] text-[#9b97a4]">{o.tag}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-gray-200">
                <Link href="/services" className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#1c1a1f] hover:text-fuchsia-700">
                  <ArrowLeft size={14} /> All Services
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
