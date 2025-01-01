interface postType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default async function getComments(id: number): Promise<postType> {
  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: 'no-store' }
  );
  if (!comments.ok) {
    throw new Error(`HTTP error! status: ${comments.status}`);
  }
  return comments.json();
}
// default vhiviare fource-catch
//not-store it all time show update data
//no=catch data cathc kobe na
