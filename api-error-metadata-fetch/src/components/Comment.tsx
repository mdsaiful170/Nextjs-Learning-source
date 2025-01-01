interface userType{
    postId:number
    id: number;
    name: number;
    email: string;
    body: string;
}
interface CommnetPromise{
    promise:Promise<userType[]>
}
export default async function CommomentBox({ promise }:CommnetPromise) {
  const comments = await promise;

  return (
    <>
      <div className="grid grid-cols-3 gap-5 place-items-start items-start">
        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="border p-2 border-1 rounded-md">
              <span className="text-sm font-medium text-slate-600">
                {comment.id}
              </span>
              <h2 className="text-xl font-bold text-cyan-950">
                {comment.name}
              </h2>
              <p className="text-xl font-normal pt-1 text-gray-700">
                {comment.email}
              </p>
              <p className="text-xl font-normal pt-1 text-gray-400">
                {comment.body}
              </p>
            </div>
          ))
        ) : (
          <p>No comments found.</p>
        )}
      </div>
    </>
  );
}




// another option

// import React from 'react';

// interface CommentType {
//   id: number;
//   name: string;
//   email: string;
//   body: string;
// }

// interface CommentBoxProps {
//   promise: Promise<CommentType[]>; // Promise that resolves to an array of comments
// }

// const CommentBox: React.FC<CommentBoxProps> = async ({ promise }) => {
//   const comments = await promise;

//   return (
//     <>
//       <div className="grid grid-cols-3 gap-5 place-items-start items-start">
//         {comments && comments.length > 0 ? (
//           comments.map((comment) => (
//             <div key={comment.id} className="border p-2 border-1 rounded-md">
//               <span className="text-sm font-medium text-slate-600">
//                 {comment.id}
//               </span>
//               <h2 className="text-xl font-bold text-cyan-950">
//                 {comment.name}
//               </h2>
//               <p className="text-xl font-normal pt-1 text-gray-700">
//                 {comment.email}
//               </p>
//               <p className="text-xl font-normal pt-1 text-gray-400">
//                 {comment.body}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No comments found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default CommentBox;
