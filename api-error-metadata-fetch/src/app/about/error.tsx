"use client"
import React, { FC } from 'react';
import { Button } from '@components/Button';

interface errorbox {
  error: Error;
  reset: () => void;
}
const Abouterror: FC<errorbox> = ({ error, reset }) => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl font-bold text-yellow-100">you have error</h1>
        <h1 className="text-xl font-bold text-yellow-100">
          Error message:{error.message}
        </h1>
        <Button click={reset} style={'bg-red-200 text-black px-5'} />
      </main>
    </div>
  );
};

export default Abouterror;
