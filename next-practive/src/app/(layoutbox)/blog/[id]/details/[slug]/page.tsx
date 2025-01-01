import React from 'react';

const Slugpage = ({ params }: { params: { id: string; slug: string[] } }) => {
  const { id, slug } = params || {};
  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-bold text-slate-900 ">
          this is Home page id = {id} + page path name = {slug}{' '}
        </h1>
      </main>
    </>
  );
};

export default Slugpage;
