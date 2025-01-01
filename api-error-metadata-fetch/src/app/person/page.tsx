import React from 'react';

interface userType {
  id: number;
  name: string;
  email: string;
  address: string;
  age: number;
  married: boolean;
}

const getPerson = async (): Promise<userType[]> => {
  const response = await fetch('http://localhost:3000/user.json');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

const Personpage = async () => {
  const person: userType[] = await getPerson();

  return (
    <div>
      <div>
        {person.map((res) => (
          <li key={res.id} className="border-b  mt-20">
            <h2>{res.name}</h2>
            <p>Email: {res.email}</p>
            <p>Address: {res.address}</p>
            <p>Age: {res.age}</p>
            <p>Married: {res.married.toString()}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Personpage;
