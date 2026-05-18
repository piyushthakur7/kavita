import { NextResponse } from 'next/server';
import { verifyJWT } from './lib/auth';

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Define protected paths
  const isAdminPath = pathname.startsWith('/blog/admin');
  const isLoginPage = pathname === '/blog/admin/login';
  
  // Read session cookie
  const sessionCookie = request.cookies.get('admin_session')?.value;
  
  if (isAdminPath) {
    const verifiedPayload = await verifyJWT(sessionCookie);
    const isAuthenticated = !!verifiedPayload;

    // 1. If trying to access dashboard/new/edit and is NOT authenticated, redirect to login
    if (!isLoginPage && !isAuthenticated) {
      const loginUrl = new URL('/blog/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // 2. If trying to access login page and IS already authenticated, redirect to dashboard
    if (isLoginPage && isAuthenticated) {
      const dashboardUrl = new URL('/blog/admin/dashboard', request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}

// Configuration to optimize middleware matching and skip static asset intercepts
export const config = {
  matcher: ['/blog/admin/:path*'],
};
