import { Metadata } from 'next';
import Link from 'next/link';

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

const getUserdata = async (): Promise<userType[]> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users', {next:{revalidate:10,}});
  if (!result.ok) {
    throw new Error('you data not available');
  }
  return result.json();
};

export const metadata: Metadata = {
  title: 'User page',
  description: 'This is a list of users fetched from JSONPlaceholder API',
};

const Userpage = async () => {
  const usersResult = getUserdata();
  const users:userType[] = await usersResult;
  return (
    <div>
      <h1>User Data Page</h1>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/user/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Userpage;

