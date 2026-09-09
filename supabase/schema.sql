-- Run this in Supabase Dashboard > SQL Editor before using the blog admin.
-- The quoted names match the table and column names used by this application.

create table if not exists public."Blog" (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  "coverImage" text not null,
  category text not null default 'General',
  views integer not null default 0,
  likes integer not null default 0,
  published boolean not null default true,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new."updatedAt" = now();
  return new;
end;
$$;

drop trigger if exists set_blog_updated_at on public."Blog";
create trigger set_blog_updated_at
  before update on public."Blog"
  for each row execute function public.set_updated_at();

alter table public."Blog" enable row level security;

grant usage on schema public to anon, authenticated;
grant select on table public."Blog" to anon, authenticated;
grant select, insert, update, delete on table public."Blog" to service_role;

create index if not exists blog_published_created_at_idx
  on public."Blog" ("createdAt" desc)
  where published;

-- Visitors can only read published posts. Server requests authenticated with the
-- service-role key bypass RLS for the protected blog-admin API.
drop policy if exists "published blogs are public" on public."Blog";
create policy "published blogs are public"
  on public."Blog"
  for select
  to anon, authenticated
  using (published = true);

insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do update set public = true;
