interface postType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default async function getPost(): Promise<postType[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 },
  });
  if (!response.ok) {
    throw new Error('you have error');
  }
  return response.json();
}
