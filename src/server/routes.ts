import getAboutData from "./api/about";
import getUserProfile from "./api/profile";
import { ApiRequest } from "./entrypoint";

type MaybePromise<T> = T | Promise<T>;
type APIRoute<T= MaybePromise<any>> = (req: ApiRequest) => T

const APIRoutes: Record<string, APIRoute> = {
  '/api/about': getAboutData,
  '/api/profile/:id': getUserProfile
};

export default APIRoutes;