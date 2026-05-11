import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, ThumbsUp, MessageSquare } from 'lucide-react';
import { blogPosts } from '../mock';

const Blog = ({ limit }) => {
  const items = limit ? blogPosts.slice(0, limit) : blogPosts;
  return (
    <section id="blog" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#7e7a86] mb-3">
              What’s Going On In Our Blog?
            </p>
            <h2 className="font-serif-display text-[44px] sm:text-[56px] lg:text-[68px] leading-tight text-[#1c1a1f]">
              Resources
            </h2>
            <p className="mt-5 max-w-xl text-[15.5px] text-[#4b4753]">
              Contact Kavita Kabira Wellness Clinic for more details! It is always good to have
              someone guide you along the way.
            </p>
          </div>
          <Link to="/blog" className="btn-outline-dark self-start lg:self-end">View all posts</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((p) => (
            <article key={p.id} className="svc-card group bg-white border border-gray-100 rounded-3xl overflow-hidden">
              <Link to={`/blog/${p.id}`} className="block h-60 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </Link>
              <div className="p-7">
                <span className="inline-block text-[10.5px] uppercase tracking-[0.25em] font-semibold text-fuchsia-700 bg-fuchsia-50 px-3 py-1 rounded-full mb-4">
                  {p.category}
                </span>
                <h3 className="font-serif-display text-[22px] leading-snug text-[#1c1a1f] mb-3">
                  <Link to={`/blog/${p.id}`} className="hover:text-fuchsia-700 transition-colors">{p.title}</Link>
                </h3>
                <p className="text-[14px] text-[#4b4753] leading-relaxed mb-5">{p.excerpt}</p>
                <div className="flex items-center gap-4 text-[11.5px] text-[#9b97a4] mb-5 flex-wrap">
                  <span>Published: {p.date}</span>
                  <span className="flex items-center gap-1"><Eye size={13} /> {p.views}</span>
                  <span className="flex items-center gap-1"><ThumbsUp size={13} /> {p.likes}</span>
                  <span className="flex items-center gap-1"><MessageSquare size={13} /> {p.comments}</span>
                </div>
                <Link to={`/blog/${p.id}`} className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#1c1a1f] group/btn">
                  Read more
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
