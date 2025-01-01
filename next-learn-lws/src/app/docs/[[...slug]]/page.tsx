import React from 'react';

const Docspage = ({ params }: { params: { id: string; slug: string[] } }) => {
  const { slug } = params || {};

  if (slug?.length === 1) {
    return (
      <div>
        <div>
          <main className="flex items-center justify-center h-screen">
            <h1 className="text-xl font-bold text-white">
              Docs page / {slug[0]}
            </h1>
          </main>
        </div>
      </div>
    );
  }

  if (slug?.length === 2) {
    return (
      <div>
        <div>
          <main className="flex items-center justify-center h-screen">
            <h1 className="text-xl font-bold text-white">
              Docs page / {slug[1]}
            </h1>
          </main>
        </div>
      </div>
    );
  }

  if (slug?.length === 3) {
    return (
      <div>
        <div>
          <main className="flex items-center justify-center h-screen">
            <h1 className="text-xl font-bold text-white">
              Docs page / {slug[2]}
            </h1>
          </main>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <main className="flex items-center justify-center h-screen">
          <h1 className="text-xl font-bold text-white">Docs page</h1>
        </main>
      </div>
    </div>
  );
};

export default Docspage;
