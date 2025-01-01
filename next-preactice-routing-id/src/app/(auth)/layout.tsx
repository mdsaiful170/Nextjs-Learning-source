import React, { FC, ReactNode } from 'react';

const Authlayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800">top header text</h1>
      {children}
      <h1 className="text-xl font-bold text-gray-800">bottom footer text</h1>
    </div>
  );
};

export default Authlayout;
