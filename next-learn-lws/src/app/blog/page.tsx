import Image from 'next/image';
import React from 'react';
import Glassimg from '@public/images/glass.jpg';

const Blogpage = () => {
  throw new Error('you have a error in blogpage')
  return (
    <>
      <div>
        <main className="flex flex-col items-center h-screen justify-center ">
          <h1 className="text-xl font-bold text-white">Blog page</h1>
          <div className="w-1/3  ">
            <Image src={Glassimg} alt="my-img" />
          </div>
        </main>
      </div>
    </>
  );
};

export default Blogpage;
