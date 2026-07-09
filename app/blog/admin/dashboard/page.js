"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plus, Edit, Trash2, Eye, LogOut, Radio, FileText, CheckCircle, HelpCircle } from 'lucide-react';
import Logo from '@/components/Logo';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoadingId, setActionLoadingId] = useState(null);

  // Fetch blogs list on load
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/blogs');
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch blogs');
      setBlogs(data.blogs || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      if (res.ok) {
        router.push('/blog/admin/login');
        router.refresh();
      }
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  // Handle Delete Blog
  const handleDelete = async (id, title) => {
    if (!confirm(`Are you absolutely sure you want to delete "${title}"? This cannot be undone.`)) {
      return;
    }

    setActionLoadingId(id);
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Delete failed');

      // Remove from list locally
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      alert(`Delete Error: ${err.message}`);
    } finally {
      setActionLoadingId(null);
    }
  };

  const totalBlogs = blogs.length;
  const publishedBlogs = blogs.filter((b) => b.published).length;
  const draftBlogs = totalBlogs - publishedBlogs;

  return (
    <main className="min-h-screen bg-[#070608] text-[#e5dcd3] pb-24 select-none relative">
      <div className="absolute inset-0 bg-speaker-mesh opacity-20 pointer-events-none" />

      {/* Titanium top control strip */}
      <header className="border-b border-[#c5a880]/15 bg-[#0c0a0e]/95 backdrop-blur sticky top-0 z-30 px-6 lg:px-10 py-4 shadow-xl">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo light />
            <div className="hidden md:flex items-center gap-2 border-l border-white/10 pl-6 font-mono text-[10px] tracking-widest text-[#ffaa00]">
              <Radio size={12} className="animate-pulse" />
              <span>CMS CONTROLLER STATUS: LINKED</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/blog/admin/new"
              className="flex items-center gap-2 bg-[#c5a880] text-[#0d0b0f] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-[#a78b63] transition shadow-[0_0_15px_rgba(197,168,128,0.2)]"
            >
              <Plus size={14} />
              <span>New Channel</span>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 border border-white/10 bg-[#121015] hover:border-red-500/30 hover:text-red-400 font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl transition"
            >
              <LogOut size={13} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard body */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 mt-12 relative z-10">
        
        {/* Equalizer Stats Panel */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {/* Total Blogs VU Box */}
          <div className="bg-[#0c0a0e] border border-white/5 p-6 rounded-2xl shadow-inner relative flex items-center justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-1">TOTAL CHANNELS</p>
              <h3 className="font-serif-display text-[32px] text-white leading-none">{totalBlogs}</h3>
            </div>
            <FileText size={32} className="text-[#c5a880]/30" />
            <div className="absolute right-0 bottom-0 top-0 w-1 bg-gradient-to-b from-[#c5a880] to-transparent rounded-r-2xl" />
          </div>

          {/* Published Blogs VU Box */}
          <div className="bg-[#0c0a0e] border border-white/5 p-6 rounded-2xl shadow-inner relative flex items-center justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-1">ACTIVE TRANSFERS</p>
              <h3 className="font-serif-display text-[32px] text-white leading-none">{publishedBlogs}</h3>
            </div>
            <CheckCircle size={32} className="text-green-500/25" />
            <div className="absolute right-0 bottom-0 top-0 w-1 bg-gradient-to-b from-green-500 to-transparent rounded-r-2xl" />
          </div>

          {/* Draft Blogs VU Box */}
          <div className="bg-[#0c0a0e] border border-white/5 p-6 rounded-2xl shadow-inner relative flex items-center justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-1">STANDBY DRAFTS</p>
              <h3 className="font-serif-display text-[32px] text-white leading-none">{draftBlogs}</h3>
            </div>
            <HelpCircle size={32} className="text-[#ffaa00]/25" />
            <div className="absolute right-0 bottom-0 top-0 w-1 bg-gradient-to-b from-[#ffaa00] to-transparent rounded-r-2xl" />
          </div>
        </div>

        {/* Console backplate list */}
        <div className="bg-[#0c0a0e] border border-white/5 shadow-2xl rounded-3xl overflow-hidden">
          <div className="px-8 py-6 border-b border-white/5 bg-[#121015]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif-display text-[22px] text-white">RESONANT BROADCASTS</h2>
              <p className="font-mono text-[8px] uppercase tracking-widest text-white/40 mt-1">
                INDEX CHANNELS // STORED IN ROWS
              </p>
            </div>
            <button onClick={fetchBlogs} className="text-xs font-mono uppercase tracking-widest text-[#c5a880] hover:underline self-start sm:self-center">
              Re-Scan Database
            </button>
          </div>

          {loading ? (
            <div className="py-24 text-center">
              <div className="w-8 h-8 rounded-full border-2 border-t-transparent border-[#c5a880] animate-spin mx-auto mb-4" />
              <p className="font-mono text-xs text-white/40 uppercase tracking-widest">SCANNING COGNITIVE CELLS...</p>
            </div>
          ) : error ? (
            <div className="py-24 text-center px-4">
              <p className="font-mono text-xs text-red-400 uppercase tracking-widest mb-2">SCANNING ERROR DETECTED</p>
              <p className="text-sm text-white/70 max-w-md mx-auto">{error}</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="py-24 text-center px-4">
              <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">NO BROADCAST FILES FOUND</p>
              <Link
                href="/blog/admin/new"
                className="btn-outline-dark uppercase tracking-widest text-xs inline-flex items-center gap-2 border border-white/10 hover:border-[#c5a880] hover:text-[#c5a880] px-6 py-2.5 rounded-xl transition"
              >
                Create First Channel
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 font-mono text-[8.5px] text-white/40 uppercase tracking-widest select-none bg-[#121015]/30">
                    <th className="py-4.5 px-8">Cover</th>
                    <th className="py-4.5 px-4">Broadcast Title</th>
                    <th className="py-4.5 px-4">Category</th>
                    <th className="py-4.5 px-4">Frequencies</th>
                    <th className="py-4.5 px-4">Transfer Status</th>
                    <th className="py-4.5 px-8 text-right">Channel Tuning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono text-xs">
                  {blogs.map((b) => (
                    <tr key={b.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-5 px-8 shrink-0">
                        <div className="w-14 h-10 rounded-lg overflow-hidden border border-white/5 bg-stone-900 shadow-inner">
                          <img src={b.coverImage} alt="" className="w-full h-full object-contain" />
                        </div>
                      </td>
                      <td className="py-5 px-4 max-w-[300px]">
                        <p className="font-serif-display text-sm text-white font-bold leading-snug truncate">
                          {b.title}
                        </p>
                        <span className="text-[10px] text-white/30 truncate block max-w-[280px] mt-1">
                          slug: {b.slug}
                        </span>
                      </td>
                      <td className="py-5 px-4">
                        <span className="inline-block text-[9.5px] uppercase tracking-wider text-[#c5a880] bg-[#c5a880]/5 border border-[#c5a880]/15 px-2.5 py-0.5 rounded-full">
                          {b.category}
                        </span>
                      </td>
                      <td className="py-5 px-4 text-white/50 text-[10.5px]">
                        views: {b.views} // likes: {b.likes}
                      </td>
                      <td className="py-5 px-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            b.published ? 'bg-green-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.5)]' : 'bg-[#ffaa00]'
                          }`} />
                          <span className={b.published ? 'text-green-500 font-semibold' : 'text-[#ffaa00]'}>
                            {b.published ? 'PUBLISHED' : 'STANDBY'}
                          </span>
                        </div>
                      </td>
                      <td className="py-5 px-8 text-right">
                        <div className="flex items-center justify-end gap-3.5">
                          {/* View public */}
                          <Link
                            href={`/blog/${b.slug}`}
                            target="_blank"
                            className="p-2 text-white/40 hover:text-[#c5a880] hover:bg-white/5 rounded-lg transition"
                            title="Preview Public Broadcaster"
                          >
                            <Eye size={14} />
                          </Link>

                          {/* Edit */}
                          <Link
                            href={`/blog/admin/edit/${b.id}`}
                            className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition"
                            title="Edit Core Frequencies"
                          >
                            <Edit size={14} />
                          </Link>

                          {/* Delete */}
                          <button
                            onClick={() => handleDelete(b.id, b.title)}
                            disabled={actionLoadingId === b.id}
                            className="p-2 text-white/40 hover:text-red-400 hover:bg-white/5 rounded-lg transition disabled:opacity-30"
                            title="Erase Post Grid"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
