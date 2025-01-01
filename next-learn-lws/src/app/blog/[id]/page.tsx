import React from 'react'

interface blogbox {
    params:{
        id:string
    }
}
const Blogidpage = ({params}:blogbox) => {
  return (
    <div>
        <main className="flex items-center justify-center h-screen">
          <h1 className="text-xl font-bold text-white">Blog page id = {params.id}</h1>
        </main>
      </div>
  )
}

export default Blogidpage
