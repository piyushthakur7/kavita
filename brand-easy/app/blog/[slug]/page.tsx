"use server";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import GoldChevronStrip from "@/components/GoldChevronStrip";
import { ChevronLeft } from "lucide-react";

// Mock data for the sake of working links
const blogPosts = [
  {
    title: "10 Luxury Wall Art Ideas to Elevate Your Living Room",
    slug: "luxury-wall-art-living-room",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200",
    category: "Interior Design",
    date: "April 20, 2026",
    content: "Content for luxury wall art ideas..."
  },
  {
    title: "Canvas vs Framed Prints: Which One Fits Your Home?",
    slug: "canvas-vs-framed-prints",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800",
    category: "Buying Guide",
    date: "April 18, 2026",
    content: "Content for canvas vs framed prints..."
  }
];

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <GoldChevronStrip />
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/blog" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0099D4] mb-8 hover:text-[#2DB34A] transition-colors">
          <ChevronLeft size={14} />
          Back to Blog
        </Link>

        <p className="text-[#2DB34A] text-[10px] tracking-[0.3em] uppercase font-black mb-4">{post.category}</p>
        <h1 className="text-[#0A2733] font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">{post.title}</h1>
        <p className="text-slate-400 text-xs mb-10">{post.date} • 5 min read</p>

        <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-light">
          <p className="text-xl text-[#0A2733] font-serif italic mb-8 border-l-4 border-[#2DB34A] pl-6">
            "Art is not just decoration; it is the soul of a room."
          </p>
          <p>
            {post.content}
          </p>
          <p className="mt-6">
            This is a placeholder for the full article content. In a real application, this would be fetched from a CMS or a markdown file.
          </p>
        </div>
      </article>
      
      <GoldChevronStrip />
    </div>
  );
}
