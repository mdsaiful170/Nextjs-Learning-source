import { Metadata } from 'next';
import React from 'react';

interface userType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const getUserById = async (id: number): Promise<userType> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) {
    throw new Error('User data not found');
  }
  return response.json();
};
const getAllusers = async (): Promise<userType[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('User data not available');
  }
  return response.json();
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const id = parseInt(params.id, 10);
  const user = await getUserById(id);
  return {
    title: user.name,
    description: user.username,
  };
};

const Idpage = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id, 10); // Convert ID to number
  const userbox = getUserById(id); // Fetch user data by ID
  const user: userType = await userbox;
  return (
    <div>
      <h1>User ID Page</h1>
      <ul>
        <li>
          <strong>Name:</strong> {user.name}
        </li>
        <li>
          <strong>Email:</strong> {user.email}
        </li>
        <li>
          <strong>Phone:</strong> {user.phone}
        </li>
        <li>
          <strong>Website:</strong> {user.website}
        </li>
      </ul>
    </div>
  );
};

export default Idpage;

export const generateStaticParams = async () => {
  const users = await getAllusers();
  return users.map(({ id }) => ({ params: { id: id.toString() } }));
};
