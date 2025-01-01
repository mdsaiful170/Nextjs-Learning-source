import { NextPage } from 'next';
import React from 'react';

// slug it work any search you text - it convet to path url and show id related pages
interface bolgsbox {
  params: {
    id: string;
    slug: string;
  };
}
const Slugdetailspage: NextPage<bolgsbox> = ({ params }) => {
  const { slug, id } = params || {};
  return (
    <div>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-900">
          {' '}
          this is details slug page page
        </h1>

        <h1 className="text-4xl font-bold text-gray-900">page id id :{id}</h1>

        <h1 className="text-4xl font-bold text-gray-900">
          page url is :{slug}
        </h1>
      </main>
    </div>
  );
};

export default Slugdetailspage;
