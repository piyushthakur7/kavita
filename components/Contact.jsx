"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { contact } from '@/lib/mock';

const ContactCTA = () => {
  return (
    <section id="contact" className="bg-kavita-darkblue py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-serif-display text-[40px] sm:text-[52px] lg:text-[60px] leading-tight text-white font-bold">
            Contact Us <span className="italic font-normal text-white">Immediately</span>
          </h2>
          <p className="mt-5 text-white/80 text-[16px] max-w-xl">
            If you are having problems needing help from us, do not hesitate to contact us
            whenever you need. We are here to help.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 lg:justify-end">
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="px-7 py-4 rounded bg-white text-kavita-darkblue font-bold tracking-wider hover:bg-gray-100 transition-colors uppercase text-sm flex items-center gap-2">
            <Phone size={18} /> {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="px-7 py-4 rounded border-2 border-white text-white font-bold tracking-wider hover:bg-white hover:text-kavita-darkblue transition-colors uppercase text-sm flex items-center gap-2">
            <Mail size={18} /> Email Us
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
    
    // Trigger mailto email sending
    const subjectLine = `New Appointment Request from ${form.name}`;
    const bodyText = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message || 'None'}`;
    window.location.href = `mailto:kavitakabira1@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyText)}`;

    toast({ title: 'Email Client Opened', description: 'Redirecting to send your request to kavitakabira1@gmail.com.' });
    setForm({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_.2s_ease]">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
          aria-label="Close"
        >
          ×
        </button>
        <h3 className="font-serif-display text-3xl font-bold text-gray-900 text-center tracking-wide">
          Book Appointment
        </h3>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-[13px] font-semibold text-gray-700">Name *</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 px-4 py-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-kavita-tan text-sm"
              required
            />
          </div>
          <div>
            <label className="text-[13px] font-semibold text-gray-700">Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-1 px-4 py-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-kavita-tan text-sm"
              required
            />
          </div>
          <div>
            <label className="text-[13px] font-semibold text-gray-700">Phone No. *</label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full mt-1 px-4 py-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-kavita-tan text-sm"
              required
            />
          </div>
          <div>
            <label className="text-[13px] font-semibold text-gray-700">Message</label>
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-1 px-4 py-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-kavita-tan text-sm"
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center mt-2">Send Request</button>
        </form>
      </div>
    </div>
  );
};

export const ContactInfo = () => (
  <div className="grid sm:grid-cols-2 gap-4 text-sm">
    <div className="flex items-start gap-3 text-gray-600 font-medium">
      <MapPin size={18} className="mt-0.5 text-kavita-tan" />
      <span>{contact.address}</span>
    </div>
    <div className="flex items-start gap-3 text-gray-600 font-medium">
      <Phone size={18} className="mt-0.5 text-kavita-tan" />
      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-kavita-tan">{contact.phone}</a>
    </div>
    <div className="flex items-start gap-3 text-gray-600 font-medium">
      <Mail size={18} className="mt-0.5 text-kavita-tan" />
      <a href={`mailto:${contact.email}`} className="hover:text-kavita-tan">{contact.email}</a>
    </div>
    <div className="flex items-start gap-3 text-gray-600 font-medium">
      <Clock size={18} className="mt-0.5 text-kavita-tan" />
      <span>{contact.hours}</span>
    </div>
  </div>
);

export default ContactCTA;
