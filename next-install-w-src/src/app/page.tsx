import About from '@/components/about';
import { Testpage } from '@compo/test';

import React from 'react';
const page = () => {
  return (
    <div className="flex  flex-col items-center justify-center h-screen">
      <h1 className="text-4xl  font-bold  text-gray-700 capitalize ">
        this is home page
      </h1>
      <br />
      <Testpage />
      <About />
    </div>
  );
};

export default page;
