import React, { FC, ReactNode } from 'react';

const Settingayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>about layout top header</header>
      {children}
      <footer>setting layout bottom footer</footer>
    </div>
  );
};

export default Settingayout;
