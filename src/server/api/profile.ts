import { Request } from "express";

export default async function getUserProfile(_path: string, req: Request) {
  const id = req.params.id || '1';
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return await response.json();
}