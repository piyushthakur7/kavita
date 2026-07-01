import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { verifyJWT } from '@/lib/auth';

// Helper to generate slug for updates
function createSlug(title) {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// GET single blog (by ID or Slug)
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // Search by ID first
    let { data: blog, error } = await supabase.from('Blog').select('*').eq('id', id).single();

    // Fallback to search by Slug if not found by ID or an error occurs (like uuid parse error)
    if (!blog) {
      const { data: slugBlog } = await supabase.from('Blog').select('*').eq('slug', id).single();
      blog = slugBlog;
    }

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog });
  } catch (err) {
    console.error('GET single blog API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT update blog (Protected)
export async function PUT(request, { params }) {
  try {
    const sessionCookie = request.cookies.get('admin_session')?.value;
    const verified = await verifyJWT(sessionCookie);
    
    if (!verified) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { title, excerpt, content, coverImage, category, published } = body;

    const { data: existing } = await supabase.from('Blog').select('id, title').eq('id', id).single();

    if (!existing) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    const updateData = {};
    if (title !== undefined) {
      updateData.title = title;
      // Re-generate slug if title changed and doesn't match
      if (title !== existing.title) {
        let newSlug = createSlug(title);
        const { data: slugCollision } = await supabase.from('Blog').select('id').eq('slug', newSlug).neq('id', id).single();
        if (slugCollision) {
          newSlug = `${newSlug}-${Math.floor(1000 + Math.random() * 9000)}`;
        }
        updateData.slug = newSlug;
      }
    }
    if (excerpt !== undefined) updateData.excerpt = excerpt;
    if (content !== undefined) updateData.content = content;
    if (coverImage !== undefined) updateData.coverImage = coverImage;
    if (category !== undefined) updateData.category = category;
    if (published !== undefined) updateData.published = published;

    const { data: updatedBlog, error } = await supabase.from('Blog').update(updateData).eq('id', id).select().single();
    if (error) throw error;

    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (err) {
    console.error('PUT blog API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE blog (Protected)
export async function DELETE(request, { params }) {
  try {
    const sessionCookie = request.cookies.get('admin_session')?.value;
    const verified = await verifyJWT(sessionCookie);
    
    if (!verified) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    const { data: existing } = await supabase.from('Blog').select('id').eq('id', id).single();

    if (!existing) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    const { error } = await supabase.from('Blog').delete().eq('id', id);
    if (error) throw error;

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('DELETE blog API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
