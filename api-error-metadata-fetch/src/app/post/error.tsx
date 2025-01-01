'use client'
import Button from '@/components/Button'
import React, { FC } from 'react'
interface Errorhanlder{
    error:Error,
    reset: () => void
}
const error:FC<Errorhanlder> = ({error,reset}) => {
  return (
    <div>
      <div>
          <h1 className='text-center text-xl font-bold text-red-200'>Error msg : {error.message}</h1>
          <Button click={reset} />
      </div>
    </div>
  )
}

export default error
