import { createClient } from '@supabase/supabase-js';

let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('[YOUR-PROJECT-ID]')) {
  console.warn("Supabase URL or Key is missing or invalid. Check your environment variables.");
}

// Fallback for Next.js build time to prevent "Provided URL is malformed" error
try {
  new URL(supabaseUrl);
} catch (error) {
  supabaseUrl = 'https://dummy-project.supabase.co';
}

export const supabase = createClient(supabaseUrl, supabaseKey || 'dummy-key');
