'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FC, ReactNode } from 'react';
const Settinglayout: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <div className="mt-10 mb-2">
        <nav>
          <ul>
            <li>
              <Link href={'/'}>home</Link>
            </li>
            <li>
              <Link href={'/about'}>about</Link>
            </li>
            <li>
              <Link onMouseOver={() => router.prefetch('/blog')} href="/blog">
                blog
              </Link>
            </li>
            <li>
              <Link href={'/setting'}>setting</Link>
            </li>
          </ul>
          <hr />
          <ul className=" flex items-center  gap-6">
            <button
              onClick={() => {
                router.push('/');
              }}
              className="px-5 py-1 bg-blue-500 text-wrap"
            >
              home
            </button>
            <button
              onClick={() => {
                router.replace('/blog');
              }}
              className="px-5 py-1 bg-blue-500 text-wrap"
            >
              blog
            </button>
            <button
              onClick={() => {
                router.replace('/about');
              }}
              className="px-5 py-1 bg-blue-500 text-wrap"
            >
              about
            </button>

            <hr />
            <button
              onClick={() => {
                router.back();
              }}
              className="px-5 py-1 bg-blue-500 text-wrap"
            >
              back
            </button>
            <button
              onClick={() => {
                router.push('/user');
              }}
              className="px-5 py-1 bg-blue-500 text-wrap"
            >
              user
            </button>
            <button
              onClick={() => {
                router.forward();
              }}
              className="px-5 py-1 bg-blue-500 text-wrap"
            >
              forward
            </button>
          </ul>
        </nav>
      </div>

      {children}
    </div>
  );
};

export default Settinglayout;
