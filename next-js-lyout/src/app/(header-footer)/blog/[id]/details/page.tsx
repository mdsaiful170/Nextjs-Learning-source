
import React from 'react'

interface blogbox{
    params:{
        id:string
    }
}
const Blogdetailspage = ({params}:blogbox) => {
    const {id} = params || {}
  return (
    <div>
        <main className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-4xl font-bold text-gray-800 capitalize">
        Blogdetailspage page{' '} + blogs id = { id}
        </h1>
      </main>
    </div>
  )
}

export default Blogdetailspage
