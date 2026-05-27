import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col select-none">
      <div className="font-serif-display font-bold text-2xl tracking-wide text-gray-900">
        Kavita Kabira
      </div>
      <div className="text-[10px] tracking-[0.2em] font-medium text-kavita-tan uppercase mt-0.5">
        Wellness Clinic
      </div>
    </Link>
  );
};

export default Logo;
