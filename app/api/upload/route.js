import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { verifyJWT } from '@/lib/auth';

export async function POST(request) {
  try {
    // Authenticate session
    const sessionCookie = request.cookies.get('admin_session')?.value;
    const verified = await verifyJWT(sessionCookie);
    
    if (!verified) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabaseBucket = process.env.SUPABASE_STORAGE_BUCKET || 'blog-images';

    if (supabaseUrl && supabaseKey) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const ext = path.extname(file.name) || '.jpg';
      const filename = `${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}${ext}`;
      const uploadUrl = `${supabaseUrl}/storage/v1/object/${supabaseBucket}/${filename}`;

      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseKey}`,
          'apiKey': supabaseKey,
          'Content-Type': file.type || 'image/jpeg',
        },
        body: buffer,
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.message || 'Supabase storage upload failed');
      }

      const publicUrl = `${supabaseUrl}/storage/v1/object/public/${supabaseBucket}/${filename}`;
      return NextResponse.json({ success: true, url: publicUrl });
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    // Check if Cloudinary is configured in environment variables
    if (cloudName && apiKey && apiSecret) {
      const cloudinary = require('cloudinary').v2;
      cloudinary.config({
        cloud_name: cloudName,
        api_key: apiKey,
        api_secret: apiSecret,
      });

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'kavita-blog' },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });

      return NextResponse.json({ success: true, url: uploadResult.secure_url });
    } else {
      // Local Server Folder Fallback Mode
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Path: /public/uploads
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      
      // Ensure the uploads directory exists
      await fs.mkdir(uploadDir, { recursive: true });

      // Generate a unique safe filename
      const ext = path.extname(file.name) || '.jpg';
      const filename = `${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}${ext}`;
      const filePath = path.join(uploadDir, filename);

      // Write file locally
      await fs.writeFile(filePath, buffer);

      // Next.js serves files in /public from root url
      const localUrl = `/uploads/${filename}`;
      return NextResponse.json({ success: true, url: localUrl });
    }
  } catch (err) {
    console.error('File upload route error:', err);
    return NextResponse.json({ error: 'Upload process failed: ' + err.message }, { status: 500 });
  }
}
