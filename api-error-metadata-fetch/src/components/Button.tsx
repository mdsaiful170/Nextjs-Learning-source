'use client';
import React from 'react';

type ButtonProps = {
    click: React.MouseEventHandler<HTMLButtonElement>;
  };
const Button:Fc<ButtonProps> = ({ click }) => {
  return (
    <div>
      <button onClick={click} className="bg-blue-400 text-white px-5 py-2">
        Reset
      </button>
    </div>
  );
};

export default Button;
