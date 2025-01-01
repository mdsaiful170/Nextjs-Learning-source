import React from 'react';

const Dcospage = ({ params }: { params: { id: string; slug: string[] } }) => {
  const { slug } = params || {};

  if (slug?.length === 1) {
    return (
      <div>
        <main className="flex items-center justify-center h-screen">
          <h1 className="text-xl font-bold text-slate-900 ">
            this is docmunebt / {slug[0]}
          </h1>
        </main>
      </div>
    );
  }
  if (slug?.length === 2) {
    return (
      <div>
        <main className="flex items-center justify-center h-screen">
          <h1 className="text-xl font-bold text-slate-900 ">
            this is docmunebt / {slug[1]}
          </h1>
        </main>
      </div>
    );
  }
  if (slug?.length === 3) {
    return (
      <div>
        <main className="flex items-center justify-center h-screen">
          <h1 className="text-xl font-bold text-slate-900 ">
            this is docmunebt / {slug[2]}
          </h1>
        </main>
      </div>
    );
  }

  return (
    <div>
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-bold text-slate-900 ">
          this is document page
        </h1>
      </main>
    </div>
  );
};

export default Dcospage;
