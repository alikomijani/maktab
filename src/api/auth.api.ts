export type User = {
  username: string;
  first_name: string;
  last_name: string;
};

export async function getUserData() {
  const res = await fetch("http://localhost:3000/user");
  return (await res.json()) as User;
}
