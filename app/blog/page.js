import React from 'react';
import Blog from '@/components/Blog';
import PageBanner from '@/components/PageBanner';
import ContactCTA from '@/components/Contact';
import { blogBanner } from '@/lib/mock';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  let blogs = [];
  try {
    // Fetch published blogs from Supabase
    const { data, error } = await supabase
      .from('Blog')
      .select('*')
      .eq('published', true)
      .order('createdAt', { ascending: false });
      
    if (error) throw error;
    if (data) blogs = data;
  } catch (error) {
    console.error("Failed to fetch blogs from database, falling back to mock data:", error.message);
  }

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
