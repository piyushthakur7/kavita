import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || publishableKey;

if (!supabaseUrl || !publishableKey || !supabaseKey) {
  throw new Error('Supabase environment variables are not configured.');
}

// The publishable key is intentionally used here. Do not expose a service-role
// key through NEXT_PUBLIC_* environment variables.
export const supabase = createClient(supabaseUrl, supabaseKey);

// Authentication is performed with the publishable key. The service-role key
// remains reserved for server-only database and storage operations.
export const supabasePublic = createClient(supabaseUrl, publishableKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});
