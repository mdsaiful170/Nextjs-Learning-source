import React from 'react';

const Aboutpage = () => {
  const num = (count: number): number => {
    return Math.floor(Math.random() * count);
  };
  const databox = num(2) === 1;
  if (databox) {
    throw new Error('page not found you have error');
  }

  return (
    <div>
      <main>
        <h1 className="text-xl font-bold text-white">my about page</h1>
      </main>
    </div>
  );
};

export default Aboutpage;
