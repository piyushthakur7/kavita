import { NextResponse } from 'next/server';

const programImages = new Map([
  ['inner_child_healing_1783612150293.png', 'inner-child-healing.jpg'],
  ['couples_therapy_1783612162319.png', 'desire-reclaimed.jpg'],
  ['corporate_wellness_1783612173727.png', 'healing-workplace.jpg'],
  ['self_paced_course_1783612183234.png', 'listening-self.jpg'],
  ['rewiring_retreat_1783612195185.png', 'rewiring-retreat.jpg'],
  ['programs_hero_1783613550176.png', 'programs-hero.jpg'],
]);

export function GET(request) {
  const file = request.nextUrl.searchParams.get('file');
  const image = programImages.get(file);
  if (!image) return new NextResponse('Image not found', { status: 404 });

  return NextResponse.redirect(new URL('/images/programs/' + image, request.url), 308);
}
