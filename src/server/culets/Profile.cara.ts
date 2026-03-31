import { Culet } from "@carats/core";
import { User } from "../../dto/user";

const getUserProfile: Culet<Promise<User>> = async (req) => {
  const id = req.params.id;
  if (!id) {
    throw new Error('User ID is required');
  }
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return await response.json();
}

export default getUserProfile;