import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Eye, ThumbsUp, ArrowLeft, User, MessageSquare } from 'lucide-react';
import prisma from '@/lib/prisma';
import PageBanner from '@/components/PageBanner';
import ContactCTA from '@/components/Contact';
import sanitizeHtml from 'sanitize-html';

// Dynamic SEO Metadata Generator (Extremely Important!)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  const post = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!post) {
    return {
      title: 'Post Not Found // Dr. Kavita Kabira',
      description: 'Wellness articles and resources.',
    };
  }

  return {
    title: `${post.title} // Dr. Kavita Kabira`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function PublicBlogDetailPage({ params }) {
  const { slug } = await params;

  // Retrieve post from SQLite database
  const post = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!post || !post.published) {
    notFound();
  }

  // Increment view counter dynamically in background
  try {
    await prisma.blog.update({
      where: { id: post.id },
      data: { views: { increment: 1 } },
    });
  } catch (err) {
    console.error("Failed to increment views:", err);
  }

  // Fetch other recent published posts for sidebar recommendations
  const others = await prisma.blog.findMany({
    where: {
      published: true,
      NOT: { id: post.id },
    },
    take: 3,
    orderBy: { createdAt: 'desc' },
  });

  // Clean and sanitize Tiptap rich HTML content to prevent XSS
  const cleanHTML = sanitizeHtml(post.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'h1', 'h2', 'h3', 'blockquote', 'code', 'pre', 'span'
    ]),
    allowedAttributes: {
      '*': ['class', 'style'],
    }
  });

  // Format date nicely
  const formatDate = (dateVal) => {
    return new Date(dateVal).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <PageBanner
        title={post.title}
        subtitle={post.category}
        image={post.coverImage}
        crumbs={[{ label: 'Blog', to: '/blog' }, { label: post.title }]}
      />

      <section className="py-20 lg:py-24 bg-white text-[#4b4753] select-none">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12">
          
          {/* Main article */}
          <article className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden mb-10 h-[460px] shadow-lg border border-gray-100">
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center gap-5 text-[12px] text-[#7e7a86] flex-wrap mb-6 font-semibold">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(post.createdAt)}</span>
              <span className="flex items-center gap-1.5"><User size={14} /> Dr. Kavita Kabira</span>
              <span className="flex items-center gap-1.5"><Eye size={14} /> {post.views + 1} Views</span>
              <span className="flex items-center gap-1.5"><ThumbsUp size={14} /> {post.likes} Likes</span>
            </div>

            <h2 className="font-serif-display text-[36px] lg:text-[48px] leading-[1.1] text-[#1c1a1f] mb-8">
              {post.title}
            </h2>

            {/* Render sanitized Rich Tiptap HTML content */}
            <div 
              className="rich-content prose prose-stone lg:prose-lg max-w-none text-base leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: cleanHTML }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between flex-wrap gap-4 font-semibold">
              <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.25em] text-[#1c1a1f] hover:text-fuchsia-700 transition-colors">
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

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-[#f5f4ef] rounded-3xl p-7 sticky top-28 border border-stone-200/40">
              <h3 className="font-serif-display text-[24px] text-[#1c1a1f] mb-5">Recent Articles</h3>
              {others.length === 0 ? (
                <p className="text-xs font-mono text-stone-400">No other broadcast channels active.</p>
              ) : (
                <ul className="space-y-5">
                  {others.map((o) => (
                    <li key={o.id}>
                      <Link href={`/blog/${o.slug}`} className="flex gap-4 group">
                        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow border border-stone-200">
                          <img src={o.coverImage} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div>
                          <p className="text-[10.5px] uppercase tracking-[0.22em] text-fuchsia-700 font-semibold mb-1">{o.category}</p>
                          <p className="font-serif-display text-[15px] leading-tight text-[#1c1a1f] group-hover:text-fuchsia-700 transition-colors">{o.title}</p>
                          <p className="text-[11px] text-[#9b97a4] mt-1">{formatDate(o.createdAt)}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>

        </div>
      </section>

      <ContactCTA />
    </>
  );
}
