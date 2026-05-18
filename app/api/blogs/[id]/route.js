import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
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
    let blog = await prisma.blog.findUnique({
      where: { id },
    });

    // Fallback to search by Slug if not found by ID
    if (!blog) {
      blog = await prisma.blog.findUnique({
        where: { slug: id },
      });
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

    const existing = await prisma.blog.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    const updateData = {};
    if (title !== undefined) {
      updateData.title = title;
      // Re-generate slug if title changed and doesn't match
      if (title !== existing.title) {
        let newSlug = createSlug(title);
        const slugCollision = await prisma.blog.findFirst({
          where: { slug: newSlug, NOT: { id } }
        });
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

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: updateData,
    });

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

    const existing = await prisma.blog.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    await prisma.blog.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('DELETE blog API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
