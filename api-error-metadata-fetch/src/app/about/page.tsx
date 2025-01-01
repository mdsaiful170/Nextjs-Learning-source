import React from 'react';

const page = () => {
  const fixture = (count: number): number => {
    return Math.floor(Math.random() * count);
  };
  const e = fixture(2) === 1;
  if (e) {
    throw new Error('you havbe error');
  }
  return (
    <>
      <div className="py-2 space-y-3">
        <h1 className="text-xl font-bold text-yellow-100">about page</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          voluptas debitis tenetur maiores fugiat distinctio? Modi, repudiandae
          eius? Praesentium, fuga aperiam. Quisquam sed cum fuga velit corrupti
          nostrum ipsam nihil.
        </p>
      </div>
    </>
  );
};

export default page;
