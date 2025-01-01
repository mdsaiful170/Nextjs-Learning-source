import { NextPage } from 'next';
import React from 'react';

//multiple cathc all segmnet system sibgle page and multiple page create  [ [...slug]]
interface docs {
  params: {
    slug: string[];
  };
}
const page: NextPage<docs> = ({ params }) => {
  const { slug } = params || {};

  if (slug?.length === 1) {
    return (
      <main className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-4xl font-bold text-gray-800 capitalize">
          Documnets Page / {slug[0]}
        </h1>
      </main>
    );
  }
  if (slug?.length === 2) {
    return (
      <main className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-4xl font-bold text-gray-800 capitalize">
          Documnets Page / {slug[0]} /{slug[1]}
        </h1>
      </main>
    );
  }
  if (slug?.length === 3) {
    return (
      <main className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-4xl font-bold text-gray-800 capitalize">
          Documnets Page / {slug[0]} /{slug[1]} / {slug[2]}
        </h1>
      </main>
    );
  }
  if (slug?.length === 4) {
    return (
      <main className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-4xl font-bold text-gray-800 capitalize">
          Documnets Page / {slug[0]} /{slug[1]} / {slug[2]} / {slug[3]}
        </h1>
      </main>
    );
  }
  return (
    <div>
      <main className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-4xl font-bold text-gray-800 capitalize">
          Documnets Page
        </h1>
      </main>
    </div>
  );
};

export default page;
