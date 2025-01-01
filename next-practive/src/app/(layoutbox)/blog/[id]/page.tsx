import { NextPage } from 'next';
import React from 'react';

interface blogbox{
    params:{
        id:string
    }
}
const Blogpageid:NextPage<blogbox> = ({params}) => {
  const {id} = params || {}
  return (
    <div>
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-bold text-slate-900 ">this is blog  page id  = {id}</h1>
      </main>
    </div>
  );
};

export default Blogpageid;
