import React from 'react';
import fs from 'fs';
import path from 'path';
import PageBanner from '@/components/PageBanner';

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  let images = [];
  try {
    const files = fs.readdirSync(imagesDir);
    images = files
      .filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file))
      .map(file => `/images/${file}`);
  } catch (error) {
    console.error('Failed to load images', error);
  }

  return (
    <>
      <PageBanner
        title={<><span>Masonry</span> <span className="italic font-light">Gallery</span></>}
        subtitle="Moments and Memories from Kavita Kabira Wellness Clinic"
        crumbs={[{ label: 'Gallery' }]}
      />
      
      <section className="py-20 lg:py-28 bg-[#f8f7fc] min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {images.map((src, index) => (
              <div key={index} className="break-inside-avoid overflow-hidden rounded-2xl group cursor-pointer relative shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 bg-gray-100">
                <img 
                  src={src} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
