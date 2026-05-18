"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import Logo from '@/components/Logo';
import TiptapEditor from '@/components/admin/TiptapEditor';

export default function CreateBlogPage() {
  const router = useRouter();
  
  // Fields state
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Wellness');
  const [coverImage, setCoverImage] = useState('');
  const [published, setPublished] = useState(true);

  // Status state
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Auto-slug builder
  const buildSlug = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  // Image Upload trigger
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');

      setCoverImage(data.url);
    } catch (err) {
      setError(`Image Upload Error: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  // Submit Blog Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !excerpt || !content || !coverImage) {
      setError('Please populate all required fields, including drafting content and uploading a cover image.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          excerpt,
          content,
          coverImage,
          category,
          published,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Create post failed');

      router.push('/blog/admin/dashboard');
      router.refresh();
    } catch (err) {
      setError(err.message);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#070608] text-[#e5dcd3] pb-24 select-none relative">
      <div className="absolute inset-0 bg-speaker-mesh opacity-20 pointer-events-none" />

      {/* Control Strip */}
      <header className="border-b border-[#c5a880]/15 bg-[#0c0a0e]/95 backdrop-blur sticky top-0 z-30 px-6 lg:px-10 py-4 shadow-xl">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/blog/admin/dashboard"
              className="p-2 text-white/40 hover:text-[#c5a880] transition"
              title="Return to Dashboard"
            >
              <ArrowLeft size={16} />
            </Link>
            <h1 className="font-serif-display text-xl text-white">NEW BROADCAST CHANNEL</h1>
          </div>
          <Logo light />
        </div>
      </header>

      {/* Editor Body Area */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 mt-12 relative z-10">
        
        {error && (
          <div className="mb-8 p-4 rounded-xl bg-red-950/40 border border-red-500/20 text-red-400 font-mono text-xs flex items-center gap-3">
            <AlertCircle size={16} className="shrink-0" />
            <span>ERROR: {error.toUpperCase()}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Rich text Editor Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Title Block */}
            <div className="bg-[#0c0a0e] border border-white/5 p-6 rounded-2xl shadow-inner">
              <label className="block font-mono text-[9px] uppercase tracking-widest text-[#c5a880] mb-2">
                BROADCAST HEADER (TITLE) *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter compelling title..."
                className="w-full bg-[#121015] border border-white/5 focus:border-[#c5a880]/40 rounded-xl px-4 py-3 text-xs text-white placeholder:text-white/20 focus:outline-none transition shadow-inner font-semibold"
              />
              {title && (
                <p className="mt-2.5 font-mono text-[9px] text-white/40 tracking-wider">
                  PREVIEW PATH: <span className="text-[#ffaa00]">/blog/{buildSlug(title)}</span>
                </p>
              )}
            </div>

            {/* Content rich Tiptap editor */}
            <div className="bg-[#0c0a0e] border border-white/5 p-6 rounded-2xl shadow-inner">
              <label className="block font-mono text-[9px] uppercase tracking-widest text-[#c5a880] mb-3">
                FREQUENCY MODULATION (RICH BODY CONTENT) *
              </label>
              <TiptapEditor value={content} onChange={setContent} />
            </div>

          </div>

          {/* Settings Sidebar Column (1 col) */}
          <div className="lg:col-span-1 space-y-6 sticky top-24">
            
            {/* Action panel */}
            <div className="bg-[#0c0a0e] border border-white/5 p-6 rounded-2xl shadow-inner">
              <button
                type="submit"
                disabled={loading || uploading}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#c5a880] hover:bg-[#a78b63] active:scale-[0.98] text-[#0d0b0f] font-bold text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-40"
              >
                <Save size={14} />
                <span>{loading ? 'COMMIT TRANSMITTING...' : 'START BROADCAST'}</span>
              </button>

              <Link
                href="/blog/admin/dashboard"
                className="w-full flex items-center justify-center py-3.5 mt-3 border border-white/10 hover:border-white/20 rounded-xl font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white transition"
              >
                Abort & Eject
              </Link>
            </div>

            {/* Media Cover Image Block */}
            <div className="bg-[#0c0a0e] border border-white/5 p-6 rounded-2xl shadow-inner">
              <label className="block font-mono text-[9px] uppercase tracking-widest text-[#c5a880] mb-3">
                COVER IMAGE SIGNAL *
              </label>
              
              {coverImage ? (
                <div className="rounded-xl overflow-hidden border border-white/5 bg-[#121015] p-2">
                  <div className="h-36 rounded-lg overflow-hidden relative">
                    <img src={coverImage} alt="" className="w-full h-full object-cover" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setCoverImage('')}
                    className="w-full py-2 mt-2 text-center text-[10px] font-mono uppercase tracking-widest text-red-400 hover:bg-red-500/10 rounded transition"
                  >
                    Clear Image
                  </button>
                </div>
              ) : (
                <label className="border-2 border-dashed border-white/10 hover:border-[#c5a880]/30 rounded-2xl h-44 flex flex-col items-center justify-center bg-[#121015] hover:bg-[#121015]/80 cursor-pointer transition select-none">
                  {uploading ? (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-6 h-6 border-2 border-t-transparent border-[#c5a880] rounded-full animate-spin" />
                      <span className="font-mono text-[9px] text-[#c5a880] uppercase tracking-widest animate-pulse">
                        UPLOADING CELL...
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60">
                      <Upload size={24} />
                      <span className="font-mono text-[9px] uppercase tracking-widest">
                        UPLOAD IMAGE
                      </span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* Metadata Settings */}
            <div className="bg-[#0c0a0e] border border-white/5 p-6 rounded-2xl shadow-inner space-y-5">
              <div>
                <label className="block font-mono text-[9px] uppercase tracking-widest text-[#c5a880] mb-2">
                  CATEGORY CHIP
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#121015] border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition shadow-inner font-mono uppercase tracking-widest"
                >
                  <option value="Wellness">Wellness</option>
                  <option value="Mindset">Mindset</option>
                  <option value="Anxiety">Anxiety</option>
                  <option value="Speaker Series">Speaker Series</option>
                  <option value="Clinical">Clinical</option>
                </select>
              </div>

              {/* Standby toggle */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <span className="block font-mono text-[9.5px] uppercase tracking-widest text-[#c5a880]">
                    BROADCAST STATUS
                  </span>
                  <span className="block font-mono text-[8px] text-white/30 uppercase mt-0.5">
                    {published ? 'ACTIVE SIGNAL OUTPUT' : 'STANDBY MODE'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPublished(!published)}
                  className={`w-11 h-6 rounded-full p-1 transition-all duration-300 ${
                    published ? 'bg-green-600' : 'bg-stone-800'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-all duration-300 ${
                    published ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            </div>

          </div>

        </form>
      </section>
    </main>
  );
}
