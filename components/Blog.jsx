import React from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, ThumbsUp } from 'lucide-react';
import { blogPosts } from '@/lib/mock';

const Blog = ({ limit, blogs }) => {
  const formatDate = (dateVal) => {
    try {
      return new Date(dateVal).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch (e) {
      return String(dateVal);
    }
  };

  const rawItems = blogs && blogs.length > 0 ? blogs : blogPosts;
  const items = limit ? rawItems.slice(0, limit) : rawItems;

  return (
    <section id="blog" className="py-24 lg:py-32 bg-white select-none border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="uppercase tracking-[0.2em] text-[12px] font-semibold text-kavita-tan mb-3">
              What’s Going On In Our Blog?
            </p>
            <h2 className="font-serif-display text-[44px] sm:text-[56px] lg:text-[68px] leading-tight text-gray-900 font-bold">
              Resources
            </h2>
            <p className="mt-5 max-w-xl text-[16px] text-gray-600">
              Contact Dr. Kavita Kabira Wellness Clinic for more details! It is always good to have
              someone guide you along the way.
            </p>
          </div>
          <Link href="/blog" className="btn-primary self-start lg:self-end">View all posts</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((p) => {
            const coverImage = p.coverImage || p.image;
            const targetLink = `/blog/${p.slug || p.id}`;
            const displayDate = p.createdAt ? formatDate(p.createdAt) : p.date;

            return (
              <article key={p.id} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
                <Link href={targetLink} className="block h-60 overflow-hidden relative">
                  <img src={coverImage} alt={p.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                </Link>
                <div className="p-7">
                  <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold text-kavita-tan bg-kavita-tan/10 px-3 py-1 rounded-full mb-4">
                    {p.category}
                  </span>
                  <h3 className="font-serif-display text-[22px] font-bold leading-snug text-gray-900 mb-3">
                    <Link href={targetLink} className="hover:text-kavita-tan transition-colors">{p.title}</Link>
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed mb-5">{p.excerpt}</p>
                  <div className="flex items-center gap-4 text-[12px] text-gray-400 mb-5 flex-wrap">
                    <span>Published: {displayDate}</span>
                    <span className="flex items-center gap-1"><Eye size={14} /> {p.views}</span>
                    <span className="flex items-center gap-1"><ThumbsUp size={14} /> {p.likes}</span>
                  </div>
                  <Link href={targetLink} className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-gray-900 hover:text-kavita-tan transition-colors group/btn">
                    Read more
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
