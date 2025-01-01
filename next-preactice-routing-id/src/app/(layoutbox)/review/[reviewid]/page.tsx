import { notFound } from 'next/navigation';
import React from 'react';

// [reviewid] = smae to interface obj { reviewid: string  hote hobe}

const Reviewpage = ({ params }: { params: { reviewid: string } }) => {
  // numbre corrsed his number of comments
  if (Number(params.reviewid) > 100) {
    notFound();
  }
  // minimum string length
  if (String(params.reviewid).length > 5) {
    notFound();
  }
  return (
    <div>
      <main className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-4xl font-bold text-gray-800 capitalize">
          Review Page + {params.reviewid}
        </h1>
      </main>
    </div>
  );
};

export default Reviewpage;

//  page not found coustom error made
