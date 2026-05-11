import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

export default function NotFound() {
  return (
    <>
      <PageBanner
        title={<><span>404</span> <span className="italic font-light">Not Found</span></>}
        crumbs={[{ label: '404' }]}
      />
      <section className="py-24 text-center">
        <p className="text-[#4b4753] mb-6">The page you are looking for doesn&apos;t exist.</p>
        <Link href="/" className="btn-dark">Back to Home</Link>
      </section>
    </>
  );
}
