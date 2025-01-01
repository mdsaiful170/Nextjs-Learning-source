import { Metadata } from 'next';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';


export const metadata: Metadata = {
  title: 'user login/singup',
  description: 'login/singup by create next app',
};


const layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <Link href={'/setting'}>setting</Link>
            </li>
            <li>
              <Link href={'/profile'}>profile</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main>{children}</main>
      
      <footer>Footer</footer>
    </div>
  );
};

export default layout;
