import getPost from '@/lib/getPost';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
interface postType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const metadata: Metadata = {
  title: 'post page',
  description: 'lorem ipsum dolor sit amet',
};
const Postpage = async () => {
  const postdata: postType[] = await getPost();

  return (
    <>
      <div className="mt-10">
        <div className="grid grid-cols-4 gap-5">
          {postdata.map((res) => (
            <Link key={res.id} href={`/post/${res.id}`} className='list-none border hover:bg-black hover:shadow-sm hover:shadow-white border-gray-800 rounded-md p-2'>
              <li className=" ">
                <h3 className="text-slate-600 capitalize  text-center">
                  {res.title}
                </h3>
              </li>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Postpage;
