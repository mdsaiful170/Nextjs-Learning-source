import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `setting page`,
};

const Settingpage = () => {
  return (
    <div>
      <main className="flex items-center h-screen flex-col justify-center">
        <h1 className="text-xl">settig page</h1>
      </main>
    </div>
  );
};

export default Settingpage;
