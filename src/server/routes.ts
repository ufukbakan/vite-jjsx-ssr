import getUserProfile from "./api/Profile.cara";
import { ApiRequest } from "./entrypoint";

type MaybePromise<T> = T | Promise<T>;
type APIRoute<T = MaybePromise<any>> = (req: ApiRequest) => T

const APIRoutes: Record<string, APIRoute> = {
  '/api/profile/:id': getUserProfile
};

export default APIRoutes;