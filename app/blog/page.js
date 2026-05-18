import React from 'react';
import Blog from '@/components/Blog';
import PageBanner from '@/components/PageBanner';
import ContactCTA from '@/components/Contact';
import { blogBanner } from '@/lib/mock';
import prisma from '@/lib/prisma';

export default async function BlogPage() {
  // Fetch published blogs from SQLite database in real-time
  const blogs = await prisma.blog.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <>
      <PageBanner
        title={<><span>Blog &</span> <span className="italic font-light">Resources</span></>}
        subtitle="What's Going On In Our Blog?"
        image={blogBanner}
        crumbs={[{ label: 'Blog' }]}
      />
      <Blog blogs={blogs} />
      <ContactCTA />
    </>
  );
}
