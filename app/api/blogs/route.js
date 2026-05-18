import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { verifyJWT } from '@/lib/auth';

// Helper to generate a URL-safe slug from a title string
function createSlug(title) {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start
    .replace(/-+$/, '');            // Trim - from end
}

// GET all blogs
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const publishedOnly = searchParams.get('publishedOnly') === 'true';

    const where = {};
    if (publishedOnly) {
      where.published = true;
    }

    const blogs = await prisma.blog.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ success: true, blogs });
  } catch (err) {
    console.error('GET blogs API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST new blog (Protected)
export async function POST(request) {
  try {
    // Authenticate session
    const sessionCookie = request.cookies.get('admin_session')?.value;
    const verified = await verifyJWT(sessionCookie);
    
    if (!verified) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, excerpt, content, coverImage, category, published } = body;

    if (!title || !excerpt || !content || !coverImage) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Auto-generate safe slug
    let slug = createSlug(title);
    
    // Check if slug is unique, if not append random suffix
    const existing = await prisma.blog.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Math.floor(1000 + Math.random() * 9000)}`;
    }

    const newBlog = await prisma.blog.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        coverImage,
        category: category || 'General',
        published: published !== undefined ? published : true,
      },
    });

    return NextResponse.json({ success: true, blog: newBlog });
  } catch (err) {
    console.error('POST blog API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
