import React, { FC, Suspense } from 'react';
import getComments from '@/lib/getComment';
import { Metadata } from 'next';
import getALLCommnets from '@/lib/getAllComments';
import CommomentBox from '@/components/Comment';
import getPost from '@/lib/getPost';

interface IdPageProps {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: IdPageProps): Promise<Metadata> => {
  const id = parseInt(params.id);
  const post = await getComments(id);

  return {
    title: post.title,
    description: post.body,
  };
};

const Commentpage: FC<IdPageProps> = async ({ params }) => {
  const { id } = params || {};
  // posepromise id,title path fetch
  const postPromise = getComments(parseInt(id, 10));
  // comments path all comment fetch all
  const commentsPromise = getALLCommnets(parseInt(id, 10));

  const post = await postPromise;
  // parallal call all promises api
  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <div>
      <div className="bg-white/5 p-5 mt-10">
        <h1 className="text-center text-2xl font-bold">Post Page ID: {id}</h1>
        <div className="mt-5 space-y-4">
          <div key={post.id} className="space-y-2 p-4  rounded-md">
            <h2 className="text-yellow-200 text-lg font-semibold">
              post ID: {post.id}
            </h2>
            <h3 className="text-yellow-50 text-xl font-bold">{post.title}</h3>
            <p className="text-yellow-50 text-xl font-bold">{post.body}</p>
            <br />
            <br />
            supance
            <Suspense fallback="<h1>loadding commnet data....</h1>">
              <CommomentBox promise={commentsPromise} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commentpage;


// dinamilcl bole dila [id] ke o jane tar kase kiki paramitter ase ba id page ase
export const generateStaticParams = async()=>{
  const post = await getPost()
  return post.map(post => ({params: { id: post.id.toString() }}))
}