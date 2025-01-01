import React, { FC, ReactNode } from 'react';

const Loginlayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>header section</h1>
      {children}
      <h1>footer section</h1>
    </div>
  );
};

export default Loginlayout;
