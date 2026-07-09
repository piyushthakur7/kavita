import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');
  
  if (!file) return new NextResponse('No file provided', { status: 400 });

  const brainDir = 'C:\\Users\\tpiyu\\.gemini\\antigravity-ide\\brain\\91ef4a39-efa4-4284-becf-178cc58d878d';
  // Secure against path traversal out of brainDir
  const safeFile = path.basename(file);
  const filePath = path.join(brainDir, safeFile);

  try {
    const buffer = fs.readFileSync(filePath);
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (err) {
    return new NextResponse('Image not found', { status: 404 });
  }
}
