"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import { useToast } from '@/hooks/use-toast';
import { contact } from '@/lib/mock';

export default function ContactPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', agree: false });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: 'Please complete required fields' });
      return;
    }
    if (!form.agree) {
      toast({ title: 'Please accept the privacy policy' });
      return;
    }
    // Local storage still works in the browser
    const all = JSON.parse(localStorage.getItem('kk_contact') || '[]');
    all.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem('kk_contact', JSON.stringify(all));
    toast({ title: 'Message sent', description: 'We will get back to you within 24 hours.' });
    setForm({ name: '', email: '', subject: '', message: '', agree: false });
  };

  return (
    <>
      <PageBanner
        title={<><span>Contact Us Today,</span> <span className="italic font-light">Change Your Life</span></>}
        subtitle="Get In Touch"
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">Drop A Line</p>
            <h2 className="font-serif-display text-[40px] lg:text-[52px] leading-[1.1] text-[#1c1a1f]">
              Send us a <span className="italic font-light">message</span>
            </h2>
            <p className="mt-5 text-[15.5px] text-[#4b4753] leading-relaxed">
              We will respond via email within 24 hours. Thank you for trusting and contacting us.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-fuchsia-50 flex items-center justify-center shrink-0">
                  <MapPin className="text-fuchsia-700" size={18} />
                </div>
                <div>
                  <p className="font-medium text-[#1c1a1f] text-[15px]">Our Clinic</p>
                  <p className="text-[14px] text-[#4b4753]">{contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-fuchsia-50 flex items-center justify-center shrink-0">
                  <Phone className="text-fuchsia-700" size={18} />
                </div>
                <div>
                  <p className="font-medium text-[#1c1a1f] text-[15px]">Phone</p>
                  <a href={`tel:${contact.phoneRaw}`} className="text-[14px] text-[#4b4753] hover:text-fuchsia-700">{contact.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-fuchsia-50 flex items-center justify-center shrink-0">
                  <Mail className="text-fuchsia-700" size={18} />
                </div>
                <div>
                  <p className="font-medium text-[#1c1a1f] text-[15px]">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-[14px] text-[#4b4753] hover:text-fuchsia-700">{contact.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-fuchsia-50 flex items-center justify-center shrink-0">
                  <Clock className="text-fuchsia-700" size={18} />
                </div>
                <div>
                  <p className="font-medium text-[#1c1a1f] text-[15px]">Work Time</p>
                  <p className="text-[14px] text-[#4b4753]">{contact.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[12px] uppercase tracking-[0.25em] font-semibold text-[#7e7a86] mb-3">Social Network</p>
              <div className="flex items-center gap-3">
                <a href="#fb" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1c1a1f] hover:text-white transition">
                  <Facebook size={15} />
                </a>
                <a href="#yt" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1c1a1f] hover:text-white transition">
                  <Youtube size={15} />
                </a>
                <a href="#ig" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1c1a1f] hover:text-white transition">
                  <Instagram size={15} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={submit} className="bg-[#f5f4ef] rounded-3xl p-8 lg:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[12.5px] uppercase tracking-[0.22em] font-semibold text-[#7e7a86]">Your Name *</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mt-2 px-4 py-3 bg-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-[15px]" />
                </div>
                <div>
                  <label className="text-[12.5px] uppercase tracking-[0.22em] font-semibold text-[#7e7a86]">Your Email *</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full mt-2 px-4 py-3 bg-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-[15px]" />
                </div>
              </div>
              <div>
                <label className="text-[12.5px] uppercase tracking-[0.22em] font-semibold text-[#7e7a86]">Subject</label>
                <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full mt-2 px-4 py-3 bg-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-[15px]" />
              </div>
              <div>
                <label className="text-[12.5px] uppercase tracking-[0.22em] font-semibold text-[#7e7a86]">Message *</label>
                <textarea rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full mt-2 px-4 py-3 bg-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-[15px]" />
              </div>
              <label className="flex items-start gap-2 text-[12.5px] text-[#4b4753]">
                <input type="checkbox" className="mt-1 accent-fuchsia-600" checked={form.agree}
                  onChange={(e) => setForm({ ...form, agree: e.target.checked })} />
                <span>I agree that my submitted data is being collected and stored.</span>
              </label>
              <button type="submit" className="btn-dark w-full justify-center">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-light py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3 text-center">Find Us</p>
          <h2 className="font-serif-display text-center text-[36px] sm:text-[48px] leading-tight text-[#1c1a1f] mb-10">
            Our <span className="italic font-light">Location</span>
          </h2>
          <div className="rounded-3xl overflow-hidden h-[420px] border border-gray-200">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps?q=Sector%2057%20Gurgaon&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
