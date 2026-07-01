import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const srcDir = 'C:\\Users\\tpiyu\\.gemini\\antigravity-ide\\brain\\2f8e05bd-c82c-432f-9184-ccb344ab2a81';
  const destDir = 'c:\\Users\\tpiyu\\kavita\\kavita\\public\\images';

  const filesToCopy = [
    { src: 'chronic_impulsivity_1782888020686.png', dest: 'chronic_impulsivity_ai.png' },
    { src: 'career_counseling_1782888039674.png', dest: 'career_counseling_ai.png' },
    { src: 'young_adult_intensive_1782888078887.png', dest: 'young_adult_intensive_ai.png' }
  ];

  const copied = [];
  try {
    for (const file of filesToCopy) {
      const srcPath = path.join(srcDir, file.src);
      const destPath = path.join(destDir, file.dest);
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        copied.push(file.dest);
      }
    }
    return NextResponse.json({ success: true, copied });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
