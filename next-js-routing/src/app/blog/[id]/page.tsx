import { NextPage } from 'next';
import React from 'react';

interface bolgsbox {
  params: {
    id: string;
  };
}
const Blogspage: NextPage<bolgsbox> = ({ params }) => {
  console.log('page numerb is:' + { id: params.id });
  return (
    <div>
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-900">
          {' '}
          this is blogs page Numer: {params.id}
        </h1>
      </main>
    </div>
  );
};

export default Blogspage;
