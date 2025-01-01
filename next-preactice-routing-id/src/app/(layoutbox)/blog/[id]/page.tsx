import { NextPage } from 'next';
import React from 'react';



interface blogbox {
  params: {
    id: string;
  };
}
const Blogsidspage: NextPage<blogbox> = ({ params }) => {
  console.log(`this won blog page` + params.id);
  return (
    <div>
      <main className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-4xl font-bold text-gray-800 capitalize">
          blogsid page + {params.id}
        </h1>
      </main>
    </div>
  );
};

export default Blogsidspage;
