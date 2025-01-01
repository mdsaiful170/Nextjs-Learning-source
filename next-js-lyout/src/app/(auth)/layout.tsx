import React, { FC, ReactNode } from 'react';

const Authlayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <header> auth layout top</header>
      {children}
      <footer>auth layout footer</footer>
    </div>
  );
};

export default Authlayout;
