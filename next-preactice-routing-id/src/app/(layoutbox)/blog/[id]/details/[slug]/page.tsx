import React from 'react'

interface blogbox{
  params:{ id:string, slug:string[]}
}
const Slugpage = ({params}:blogbox) => {
  const {id, slug} = params || {}
  return (
    <div>
        <main className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-4xl font-bold text-gray-800 capitalize">
          Slug blog page{' '} + id = {id} + slug = {slug}
        </h1>
      </main>
    </div>
  )
}

export default Slugpage
