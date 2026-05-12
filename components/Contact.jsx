"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { contact } from '@/lib/mock';

const ContactCTA = () => {
  return (
    <section id="contact" className="section-darker py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-serif-display text-[40px] sm:text-[52px] lg:text-[60px] leading-tight text-white">
            Contact Us <span className="italic font-light text-white/80">Immediately</span>
          </h2>
          <p className="mt-5 text-white/65 text-[15px] max-w-xl">
            If you are having problems needing help from us, do not hesitate to contact us
            whenever you need. We are here to help.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 lg:justify-end">
          <a href={`tel:${contact.phoneRaw}`} className="btn-dark bg-white text-[#1c1a1f] hover:bg-white/90">
            <Phone size={16} /> {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="btn-outline-dark border-white text-white hover:bg-white hover:text-[#1c1a1f]">
            <Mail size={16} /> Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

export const AppointmentModal = ({ open, onClose }) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast({ title: 'Please fill required fields', description: 'Name, email & phone are required.' });
      return;
    }
    // Save locally as mock
    const saved = JSON.parse(localStorage.getItem('kk_appointments') || '[]');
    saved.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem('kk_appointments', JSON.stringify(saved));
    toast({ title: 'Appointment Requested', description: 'We will reach out to you shortly.' });
    setForm({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_.2s_ease]">
      <div className="relative bg-[#e7e5fa] rounded-2xl shadow-2xl w-full max-w-md p-8">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/40 flex items-center justify-center text-[#1c1a1f] hover:bg-white"
          aria-label="Close"
        >
          ×
        </button>
        <h3 className="font-serif-display text-2xl text-[#1c1a1f] text-center tracking-wide">
          BOOK YOUR APPOINTMENT NOW!
        </h3>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-[12px] font-medium text-[#1c1a1f]">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 px-3 py-2 bg-white rounded border border-[#cfcce6] focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-sm"
            />
          </div>
          <div>
            <label className="text-[12px] font-medium text-[#1c1a1f]">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-1 px-3 py-2 bg-white rounded border border-[#cfcce6] focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-sm"
            />
          </div>
          <div>
            <label className="text-[12px] font-medium text-[#1c1a1f]">Phone No.</label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full mt-1 px-3 py-2 bg-white rounded border border-[#cfcce6] focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-sm"
            />
          </div>
          <div>
            <label className="text-[12px] font-medium text-[#1c1a1f]">Message</label>
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-1 px-3 py-2 bg-white rounded border border-[#cfcce6] focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-sm"
            />
          </div>
          <button type="submit" className="btn-dark w-full justify-center">Send</button>
        </form>
      </div>
    </div>
  );
};

export const ContactInfo = () => (
  <div className="grid sm:grid-cols-2 gap-4 text-sm">
    <div className="flex items-start gap-3 text-white/80">
      <MapPin size={18} className="mt-0.5 text-white/60" />
      <span>{contact.address}</span>
    </div>
    <div className="flex items-start gap-3 text-white/80">
      <Phone size={18} className="mt-0.5 text-white/60" />
      <a href={`tel:${contact.phoneRaw}`} className="hover:text-white">{contact.phone}</a>
    </div>
    <div className="flex items-start gap-3 text-white/80">
      <Mail size={18} className="mt-0.5 text-white/60" />
      <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
    </div>
    <div className="flex items-start gap-3 text-white/80">
      <Clock size={18} className="mt-0.5 text-white/60" />
      <span>{contact.hours}</span>
    </div>
  </div>
);

export default ContactCTA;
