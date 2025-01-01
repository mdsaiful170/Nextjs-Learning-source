"use client" 
import React from 'react'

export const Button = ({click,style}) => {
  return (
    <div>
         <button
          onClick={click}
          className={`text-lg px-3 py-1 rounded bg-yellow-200 ${style}`}
        >
          reset now
        </button>
    </div>
  )
}
