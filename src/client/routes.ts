import Home from "../client/pages/Home";
import Profile from "./pages/profile";
import { FunctionComponent } from '../infra/router';

const routes: Record<string, FunctionComponent<any>> = {
    '/': Home,
    '/profile': Profile,
};

export default routes;