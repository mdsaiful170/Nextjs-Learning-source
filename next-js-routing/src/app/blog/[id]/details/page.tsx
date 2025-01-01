import { NextPage } from 'next';
import React from 'react';

// next auto path id collect bolog details page 
//     main /many id / id details / any path
// // blog/   id    /detailspage/produtct-anu page

interface bolgsbox {
  params: {
    id: string;
  };
}
const Detailspage: NextPage<bolgsbox> = ({ params }) => {
  return (
    <div>
      <main className="flex items-center flex-col justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-900">
          {' '}
          this is Details page
        </h1>
        <br />
        <h1 className="text-5xl font-bold  text-gray-900">{params.id}</h1>
      </main>
    </div>
  );
};

export default Detailspage;