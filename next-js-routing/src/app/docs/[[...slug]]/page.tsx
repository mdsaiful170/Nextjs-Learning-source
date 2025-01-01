import React from 'react';

interface catchallsegments {
  params: {
    slug: string[];
  };
}
const Documnetpage = ({ params }: catchallsegments) => {
  const { slug } = params || {};
  console.log('cath all secment system ,' + params);
  if (slug?.length === 1) {
    return <div>this doucment feature1 :{slug[0]}</div>;
  }
  if (slug?.length === 2) {
    return <div>this doucment conecpt1 :{slug[1]}</div>;
  }
  if (slug?.length === 3) {
    return <div>this doucment example1 :{slug[2]}</div>;
  }
  if (slug?.length === 4) {
    return <div>this doucment details1 :{slug[3]}</div>;
  }
  return <div>Documnetpage page</div>;
};

export default Documnetpage;

// **************************** CATHC ALL SEGMENT SYSTEM ( NEXT JS)**********************************
