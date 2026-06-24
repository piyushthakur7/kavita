import React from 'react';
import PageBanner from '@/components/PageBanner';
import ContactCTA from '@/components/Contact';
import { mediaPresence } from '@/lib/mock';
import { Video, BookOpen, User, PenTool, Link as LinkIcon, Stethoscope, Info } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Media & Press - Dr. Kavita Kabira',
  description: 'Public media, online presence, books, and press features of Dr. Kavita Kabira.',
};

export default function MediaPage() {
  return (
    <>
      <PageBanner
        title={<><span>Media &</span> <span className="italic font-light">Press</span></>}
        subtitle="Public Media & Online Presence"
        crumbs={[{ label: 'Media' }]}
      />

      <section className="py-20 lg:py-28 bg-[#f8f7fc]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-serif-display text-[32px] lg:text-[42px] text-gray-900 mb-4">
              Research & Compilation
            </h2>
            <p className="text-gray-600 text-[16px] max-w-2xl mx-auto">
              A curated collection of video appearances, authored books, clinical profiles, and social media hubs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Video & Podcast */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-kavita-tan/10 rounded-full flex items-center justify-center text-kavita-tan">
                  <Video size={24} />
                </div>
                <h3 className="font-serif-display text-[24px] text-gray-900">Video & Podcast</h3>
              </div>
              <ul className="space-y-6">
                {mediaPresence.videos.map((item, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[17px] font-semibold text-gray-900 hover:text-kavita-tan transition-colors flex items-center gap-2">
                      {item.title}
                      <LinkIcon size={14} className="text-gray-400" />
                    </a>
                    <p className="text-[14.5px] text-gray-600">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Books */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-kavita-tan/10 rounded-full flex items-center justify-center text-kavita-tan">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-serif-display text-[24px] text-gray-900">Books</h3>
              </div>
              <ul className="space-y-6">
                {mediaPresence.books.map((item, i) => (
                  <li key={i} className="flex flex-col gap-2">
                    <div>
                      <span className="text-[17px] font-semibold text-gray-900">{item.title}</span>
                      <span className="text-[14.5px] text-gray-500 ml-2">{item.desc}</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {item.links.map((l, j) => (
                        <a key={j} href={l.url} target="_blank" rel="noopener noreferrer" className="text-[13px] bg-gray-50 text-gray-700 hover:bg-kavita-tan hover:text-white px-3 py-1 rounded-full transition-colors border border-gray-200">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Author Pages */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-kavita-tan/10 rounded-full flex items-center justify-center text-kavita-tan">
                  <User size={24} />
                </div>
                <h3 className="font-serif-display text-[24px] text-gray-900">Author Pages</h3>
              </div>
              <ul className="space-y-4">
                {mediaPresence.authorPages.map((item, i) => (
                  <li key={i}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[16px] font-medium text-gray-700 hover:text-kavita-tan transition-colors flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-kavita-tan transition-colors"></span>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Writing & Press */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-kavita-tan/10 rounded-full flex items-center justify-center text-kavita-tan">
                  <PenTool size={24} />
                </div>
                <h3 className="font-serif-display text-[24px] text-gray-900">Writing & Press Features</h3>
              </div>
              <ul className="space-y-5">
                {mediaPresence.press.map((item, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[16px] font-semibold text-gray-900 hover:text-kavita-tan transition-colors flex items-center gap-2">
                      {item.title}
                      <LinkIcon size={14} className="text-gray-400" />
                    </a>
                    <p className="text-[14.5px] text-gray-600">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hubs & Social Profiles */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-kavita-tan/10 rounded-full flex items-center justify-center text-kavita-tan">
                  <LinkIcon size={24} />
                </div>
                <h3 className="font-serif-display text-[24px] text-gray-900">Official Hubs & Social Profiles</h3>
              </div>
              <ul className="grid grid-cols-2 gap-4">
                {mediaPresence.social.map((item, i) => (
                  <li key={i}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-gray-700 hover:text-kavita-tan transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-kavita-tan transition-colors"></span>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical & Appointments */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-kavita-tan/10 rounded-full flex items-center justify-center text-kavita-tan">
                  <Stethoscope size={24} />
                </div>
                <h3 className="font-serif-display text-[24px] text-gray-900">Clinical & Appointments</h3>
              </div>
              <ul className="space-y-4">
                {mediaPresence.clinical.map((item, i) => (
                  <li key={i}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[16px] font-medium text-gray-700 hover:text-kavita-tan transition-colors flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-kavita-tan transition-colors"></span>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>

          {/* Notes */}
          <div className="mt-12 bg-white/60 p-6 rounded-xl border border-gray-200 flex gap-4">
            <Info className="text-gray-400 shrink-0 mt-1" size={20} />
            <p className="text-[14px] leading-relaxed text-gray-600">
              <strong className="text-gray-800">Notes:</strong> {mediaPresence.notes}
            </p>
          </div>

        </div>
      </section>

      <ContactCTA />
    </>
  );
}
