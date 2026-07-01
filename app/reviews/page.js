"use client";
import React from 'react';
import PageBanner from '@/components/PageBanner';
import Testimonials from '@/components/Testimonials';
import VideoTestimonials from '@/components/VideoTestimonials';
import ContactCTA from '@/components/Contact';

export default function ReviewsPage() {
  return (
    <>
      <PageBanner
        title={<><span>Client</span> <span className="italic font-light">Reviews</span></>}
        subtitle="Stories of healing, growth, and transformation"
        crumbs={[{ label: 'Reviews' }]}
      />
      <Testimonials />
      <VideoTestimonials />
      <ContactCTA />
    </>
  );
}
