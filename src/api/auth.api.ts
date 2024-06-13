import { baseURL } from "./api.config";

export type User = {
  username: string;
  first_name: string;
  last_name: string;
};

export async function getUserData() {
  const res = await fetch(baseURL + "/user");
  return (await res.json()) as User;
}
