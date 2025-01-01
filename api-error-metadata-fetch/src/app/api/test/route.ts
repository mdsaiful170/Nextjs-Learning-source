import { userData } from '@/app/api/test/data';

export const GET = async () => {
  const data = userData;
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const POST = async () => {
  const newUser = [
    {
      id: 7,
      name: 'Mrs. Saiful Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      address: {
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: '23505-1337',
        geo: {
          lat: '-71.4197',
          lng: '71.7478',
        },
      },
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
      company: {
        name: 'Considine-Lockman',
        catchPhrase: 'Synchronised bottom-line interface',
        bs: 'e-enable innovative applications',
      },
    },
    {
      id: 8,
      name: 'Mrs. Roket Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      address: {
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: '23505-1337',
        geo: {
          lat: '-71.4197',
          lng: '71.7478',
        },
      },
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
      company: {
        name: 'Considine-Lockman',
        catchPhrase: 'Synchronised bottom-line interface',
        bs: 'e-enable innovative applications',
      },
    },
  ];

  userData.push(...newUser);

  return new Response(JSON.stringify(userData), {
    ...newUser,
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const DELETE = async () => {
  delete userData[0];
  return new Response(JSON.stringify(userData), {
    status: 203,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const PUT = async () => {
  // Update the name of the second user
  userData[1].name = 'Md Saiful Islam';

  return new Response(JSON.stringify(userData), {
    status: 200, // Use 200 to indicate a successful modification with content
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
