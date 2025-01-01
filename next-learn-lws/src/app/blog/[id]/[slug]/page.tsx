import { NextPage } from 'next';
import React from 'react';
interface blogbox {
  params: {
    id: string;
    slug: string[];
  };
}
const Slugpage: NextPage<blogbox> = ({ params }) => {
  return (
    <div>
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-bold text-white">
          Slug page id = {params.id} + slug = {params.slug}
        </h1>
      </main>
    </div>
  );
};

export default Slugpage;
