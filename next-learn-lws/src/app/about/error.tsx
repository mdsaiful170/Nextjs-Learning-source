'use client';
import React from 'react';
interface errorbox{
    error: Error;
    reset: () => void;
  
}
const Abouterror = ({ reset, error }:errorbox) => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl font-bold text-red-400">About page not found</h1>
        <h1 className="text-xl font-bold text-red-400">
          error message : {error.message}
        </h1>
        <button className='bg-red-400 text-white px-5 py-1' onClick={reset}>Rest</button>
      </main>
    </div>
  );
};

export default Abouterror;
