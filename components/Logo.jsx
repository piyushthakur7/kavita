import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center select-none">
      <img src="/images/image.png" alt="Kavita Kabira Logo" className="h-12 w-auto object-contain" />
    </Link>
  );
};

export default Logo;
