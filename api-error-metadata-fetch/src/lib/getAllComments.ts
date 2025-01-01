interface userType {
  postId: number;
  id: number;
  name: number;
  email: string;
  body: string;
}

export default async function getALLCommnets(id: number): Promise<userType[]> {
  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  if (!comments.ok) {
    throw new Error(`HTTP error! status: ${comments.status}`);
  }
  return comments.json();
}
