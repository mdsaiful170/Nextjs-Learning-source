import { usersDatabox } from '@api/user/user';

export const GET = async () => {
  const result = usersDatabox;
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
