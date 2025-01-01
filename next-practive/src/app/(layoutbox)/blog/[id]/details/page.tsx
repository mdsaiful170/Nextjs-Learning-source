import React from 'react';

interface blogbox {
    params:{
        id:string;
    }
}
const Detailspage = ({params}:blogbox) => {
  return (
    <div>
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-bold text-slate-900 ">this is Details page id = {params.id}</h1>
      </main>
    </div>
  );
};

export default Detailspage;
