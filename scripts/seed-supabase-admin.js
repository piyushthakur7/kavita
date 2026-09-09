require('dotenv').config({ path: '.env' });
require('dotenv').config({ path: '.env.local', override: true });
const { createClient } = require('@supabase/supabase-js');

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

if (!url || !serviceRoleKey || !email || !password) {
  throw new Error(
    'Set NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, ADMIN_EMAIL, and ADMIN_PASSWORD before running this script.',
  );
}

if (password.length < 12) {
  throw new Error('ADMIN_PASSWORD must be at least 12 characters long.');
}

const supabase = createClient(url, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function seedAdmin() {
  const normalizedEmail = email.trim().toLowerCase();
  const { data: users, error: listError } = await supabase.auth.admin.listUsers({
    page: 1,
    perPage: 1000,
  });
  if (listError) throw listError;

  const existing = users.users.find((user) => user.email === normalizedEmail);
  const result = existing
    ? await supabase.auth.admin.updateUserById(existing.id, {
        password,
        email_confirm: true,
        user_metadata: { name: 'Administrator' },
      })
    : await supabase.auth.admin.createUser({
        email: normalizedEmail,
        password,
        email_confirm: true,
        user_metadata: { name: 'Administrator' },
      });

  if (result.error) throw result.error;
  console.log(`Admin account is ready for ${normalizedEmail}.`);
}

seedAdmin().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
