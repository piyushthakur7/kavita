import React from 'react';
import Blog from '../components/Blog';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/Contact';
import { blogBanner } from '../mock';

const BlogPage = () => (
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

export default BlogPage;
