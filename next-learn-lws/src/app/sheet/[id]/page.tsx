import { notFound } from 'next/navigation';
import React from 'react';

const Blogspage = ({ params }) => {
  const { id } = params;
  if (Number(id) > 2) {
    notFound();
  }
  return (
    <div>
      <h1>this blogpage id = {id}</h1>
    </div>
  );
};

export default Blogspage;
