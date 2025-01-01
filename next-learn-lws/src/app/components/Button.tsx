'use client'
import React from 'react';
const Button = () => {
  return (
    <div>
      <button
        onClick={() => console.log('hello world')}
        className="text-xl font-bold bg-green-500 rounded-full px-3 py-1 "
      >
        setting
      </button>
    </div>
  );
};

export default Button;
