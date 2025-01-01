import { NextPage } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

interface listbox {
  params: {
    listid: string;
  };
}
const Listidpage: NextPage<listbox> = ({ params }) => {
  if (Number(params.listid) > 100){
    notFound()
  }
    return (
      <div>
        <main className="flex items-center justify-center h-screen">
          <h1 className="text-xl font-bold text-slate-900 ">
            this is list page id = {params.listid}
          </h1>
        </main>
      </div>
    );
};

export default Listidpage;
