import React from 'react';
import Blog from '@/components/Blog';
import PageBanner from '@/components/PageBanner';
import ContactCTA from '@/components/Contact';
import { blogBanner } from '@/lib/mock';

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title={<><span>Blog &</span> <span className="italic font-light">Resources</span></>}
        subtitle="What's Going On In Our Blog?"
        image={blogBanner}
        crumbs={[{ label: 'Blog' }]}
      />
      <Blog />
      <ContactCTA />
    </>
  );
}
