"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import GoldChevronStrip from "@/components/GoldChevronStrip";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen">
      <GoldChevronStrip />
      <div className="maroon-floral-bg py-14 md:py-20 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#2DB34A]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2DB34A]/40" />
        <p className="text-[#2DB34A] text-xs tracking-[0.3em] uppercase font-medium mb-2">Reach Out</p>
        <h1 className="text-white font-serif text-4xl sm:text-5xl font-bold">
          Contact <span className="text-[#2DB34A] italic">Us</span>
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#2DB34A]/60" />
          <span className="text-[#2DB34A]">✦</span>
          <div className="h-px w-12 bg-[#2DB34A]/60" />
        </div>
      </div>
      <GoldChevronStrip />

      <section className="floral-bg py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white border border-[#0099D4]/25 p-8 md:p-10">
            <h2 className="text-[#0A2733] font-serif text-2xl font-bold mb-6">Get a Free Quote</h2>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-[#0A2733] font-semibold mb-2">Thank you!</h3>
                <p className="text-[#2A5566] text-sm">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="text-[#0A2733] text-xs font-semibold uppercase tracking-wider block mb-1.5">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      className="w-full border border-[#0099D4]/30 focus:border-[#0099D4] outline-none px-4 py-2.5 text-sm bg-[#F3FAFD] text-[#0A2733] placeholder-[#6B9BB0]"
                      required={f.id === "name" || f.id === "phone"}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-[#0A2733] text-xs font-semibold uppercase tracking-wider block mb-1.5">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-[#0099D4]/30 focus:border-[#0099D4] outline-none px-4 py-2.5 text-sm bg-[#F3FAFD] text-[#0A2733]"
                  >
                    <option value="">Select a service</option>
                    <option>Custom Banners</option>
                    <option>Stands & Displays</option>
                    <option>Table Covers</option>
                    <option>Custom Flags</option>
                    <option>Signs & Decals</option>
                    <option>Marketing Materials</option>
                    <option>Bulk Corporate Orders</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#0A2733] text-xs font-semibold uppercase tracking-wider block mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[#0099D4]/30 focus:border-[#0099D4] outline-none px-4 py-2.5 text-sm bg-[#F3FAFD] text-[#0A2733] placeholder-[#6B9BB0] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0099D4] text-white py-3 text-xs tracking-widest uppercase font-bold hover:bg-[#0077A8] transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="maroon-floral-bg p-8 text-white">
              <h3 className="text-[#2DB34A] font-serif text-2xl font-bold mb-5">Our Location</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-sm text-white/80">
                  <MapPin size={16} className="text-[#2DB34A] shrink-0 mt-0.5" />
                  <span>Ground Floor Darshan Apartment, Katargam Main Rd,<br />Opposite Katargam Bus Stop, Crystal Nagar,<br />Surat, Gujarat 395004, India</span>
                </li>
                <li className="flex items-center gap-4 text-sm text-white/80">
                  <Phone size={16} className="text-[#2DB34A] shrink-0" />
                  <a href="tel:+919310011931" className="hover:text-[#2DB34A] transition-colors">+91 93100 11931</a>
                </li>
                <li className="flex items-center gap-4 text-sm text-white/80">
                  <Mail size={16} className="text-[#2DB34A] shrink-0" />
                  <a href="mailto:hello@mediaconcept.in" className="hover:text-[#2DB34A] transition-colors">hello@mediaconcept.in</a>
                </li>
                <li className="flex items-center gap-4 text-sm text-white/80">
                  <Clock size={16} className="text-[#2DB34A] shrink-0" />
                  <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#0099D4]/25 p-6">
              <h4 className="text-[#0A2733] font-semibold text-sm mb-3">Our Expertise</h4>
              <ul className="space-y-2">
                {["Customized solutions for business shops", "High-quality banner & signage printing", "Professional display stand manufacturing", "Fast turnaround & pan-India shipping", "Dedicated design support"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-[#2A5566]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DB34A] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}