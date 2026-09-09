"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Edit, Eye, FileText, LogOut, Plus, RefreshCw, Trash2 } from 'lucide-react';
import Logo from '@/components/Logo';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('/api/blogs');
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not load blog posts.');
      setBlogs(data.blogs || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchBlogs(); }, [fetchBlogs]);

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/blog/admin/login');
    router.refresh();
  }

  async function handleDelete(id, title) {
    if (!confirm(`Delete “${title}”? This cannot be undone.`)) return;
    try {
      setDeletingId(id);
      const response = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not delete the post.');
      setBlogs((current) => current.filter((blog) => blog.id !== id));
    } catch (err) {
      alert(err.message);
    } finally {
      setDeletingId(null);
    }
  }

  const published = blogs.filter((blog) => blog.published).length;
  const drafts = blogs.length - published;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      <header className="border-b border-slate-200 bg-white px-5 py-4 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex items-center gap-5"><Logo /><span className="hidden border-l border-slate-200 pl-5 text-sm font-medium text-slate-600 sm:block">Blog manager</span></div>
          <div className="flex items-center gap-3">
            <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"><LogOut size={16} /><span className="hidden sm:inline">Log out</span></button>
            <Link href="/blog/admin/new" className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-800"><Plus size={17} />New blog post</Link>
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="text-sm font-medium text-fuchsia-700">Content</p><h1 className="mt-1 font-serif-display text-4xl text-slate-900">Your blog posts</h1><p className="mt-2 text-sm text-slate-600">Create, edit, publish, or remove posts from one place.</p></div>
          <button onClick={fetchBlogs} disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-60"><RefreshCw size={16} className={loading ? 'animate-spin' : ''} />Refresh</button>
        </div>
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[['All posts', blogs.length, 'text-slate-900'], ['Published', published, 'text-emerald-700'], ['Drafts', drafts, 'text-amber-700']].map(([label, value, color]) => <div key={label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">{label}</p><p className={`mt-1 text-3xl font-semibold ${color}`}>{value}</p></div>)}
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {loading ? <div className="py-16 text-center text-sm text-slate-500">Loading posts…</div> : error ? <div className="m-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"><strong>Could not load posts.</strong> {error}</div> : blogs.length === 0 ? <div className="px-6 py-16 text-center"><FileText className="mx-auto mb-4 text-slate-300" size={42} /><h2 className="text-lg font-semibold">No blog posts yet</h2><p className="mt-1 text-sm text-slate-600">Start with a title, summary, image, and article.</p><Link href="/blog/admin/new" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-fuchsia-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-fuchsia-800"><Plus size={16} />Create your first post</Link></div> : <div className="divide-y divide-slate-100">{blogs.map((blog) => <article key={blog.id} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center"><div className="h-16 w-full shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:w-24"><img src={blog.coverImage} alt="" className="h-full w-full object-cover" /></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h2 className="truncate text-base font-semibold text-slate-900">{blog.title}</h2><span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${blog.published ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{blog.published ? 'Published' : 'Draft'}</span></div><p className="mt-1 truncate text-sm text-slate-500">{blog.category} · {blog.views || 0} views</p></div><div className="flex items-center gap-2"><Link href={`/blog/${blog.slug}`} target="_blank" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900" title="View post"><Eye size={17} /></Link><Link href={`/blog/admin/edit/${blog.id}`} className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"><Edit size={15} />Edit</Link><button onClick={() => handleDelete(blog.id, blog.title)} disabled={deletingId === blog.id} className="rounded-lg p-2 text-red-600 hover:bg-red-50 disabled:opacity-50" title="Delete post"><Trash2 size={17} /></button></div></article>)}</div>}
        </div>
      </section>
    </main>
  );
}
