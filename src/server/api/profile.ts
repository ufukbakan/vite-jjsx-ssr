import { User } from "../../dto/user";
import { ApiRequest } from "../entrypoint";

export default async function getUserProfile(req: ApiRequest): Promise<User> {
  const id = req.params.id;
  if (!id) {
    throw new Error('User ID is required');
  }
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return await response.json();
}