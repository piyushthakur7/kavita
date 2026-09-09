import { NextResponse } from 'next/server';
import { supabasePublic } from '@/lib/supabase';
import { signJWT } from '@/lib/auth';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const { data, error } = await supabasePublic.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    if (error) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    const user = data.user;

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Sign the secure JWT session token
    const token = await signJWT({ 
      userId: user.id, 
      email: user.email, 
      name: user.user_metadata?.name || 'Administrator'
    });

    const response = NextResponse.json({ 
      success: true, 
      user: { email: user.email, name: user.user_metadata?.name || 'Administrator' } 
    });
    
    // Set secure HTTP-only cookie
    response.cookies.set('admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 Days expiry
      path: '/'
    });

    return response;
  } catch (err) {
    console.error('Login API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
