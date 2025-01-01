import Link from 'next/link';
import React, { ReactNode } from 'react';

const Postidlayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <br />
      <div className="flex items-center gap-x-4 pb-5">
        <Link href={'/'}>🏠Home</Link>
        <Link href={'/post/'}>🚩Post</Link>
      </div>

      {children}
    </div>
  );
};

export default Postidlayout;
