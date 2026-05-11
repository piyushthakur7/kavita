import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Eye, ThumbsUp, MessageSquare, ArrowLeft, User } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/Contact';
import { blogPosts } from '../mock';

const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <>
        <PageBanner title="Post Not Found" crumbs={[{ label: 'Blog', to: '/blog' }, { label: 'Not Found' }]} />
        <section className="py-24 text-center">
          <Link to="/blog" className="btn-outline-dark">Back to Blog</Link>
        </section>
      </>
    );
  }

  const others = blogPosts.filter((p) => p.id !== id);

  return (
    <>
      <PageBanner
        title={post.title}
        subtitle={post.category}
        image={post.image}
        crumbs={[{ label: 'Blog', to: '/blog' }, { label: post.title }]}
      />

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden mb-10 h-[460px]">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-5 text-[12.5px] text-[#7e7a86] flex-wrap mb-6">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Eye size={14} /> {post.views} Views</span>
              <span className="flex items-center gap-1.5"><ThumbsUp size={14} /> {post.likes} Likes</span>
              <span className="flex items-center gap-1.5"><MessageSquare size={14} /> {post.comments} Comments</span>
            </div>
            <h2 className="font-serif-display text-[36px] lg:text-[48px] leading-[1.1] text-[#1c1a1f] mb-6">{post.title}</h2>
            <div className="space-y-5 text-[16px] text-[#4b4753] leading-[1.8]">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between flex-wrap gap-4">
              <Link to="/blog" className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#1c1a1f] hover:text-fuchsia-700">
                <ArrowLeft size={14} /> All Posts
              </Link>
              <div className="flex items-center gap-2 text-[12px] text-[#7e7a86]">
                <span className="uppercase tracking-[0.22em] font-semibold">Share:</span>
                <span className="px-3 py-1 rounded-full bg-[#f5f4ef] hover:bg-fuchsia-100 cursor-pointer transition">Twitter</span>
                <span className="px-3 py-1 rounded-full bg-[#f5f4ef] hover:bg-fuchsia-100 cursor-pointer transition">Facebook</span>
                <span className="px-3 py-1 rounded-full bg-[#f5f4ef] hover:bg-fuchsia-100 cursor-pointer transition">Email</span>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="bg-[#f5f4ef] rounded-3xl p-7 sticky top-28">
              <h3 className="font-serif-display text-[24px] text-[#1c1a1f] mb-5">Recent Articles</h3>
              <ul className="space-y-5">
                {others.map((o) => (
                  <li key={o.id}>
                    <Link to={`/blog/${o.id}`} className="flex gap-4 group">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <img src={o.image} alt={o.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <p className="text-[10.5px] uppercase tracking-[0.22em] text-fuchsia-700 font-semibold mb-1">{o.category}</p>
                        <p className="font-serif-display text-[15px] leading-tight text-[#1c1a1f] group-hover:text-fuchsia-700 transition-colors">{o.title}</p>
                        <p className="text-[11px] text-[#9b97a4] mt-1">{o.date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default BlogDetailPage;
