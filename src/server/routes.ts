import { Request } from "express";
import getAboutData from "./api/about";
import getUserProfile from "./api/profile";

type MaybePromise<T> = T | Promise<T>;
type APIRoute<T= MaybePromise<any>> = (path: string, req: Request) => T

const APIRoutes: Record<string, APIRoute> = {
  '/api/about': getAboutData,
  '/api/users': getUserProfile
};

export default APIRoutes;