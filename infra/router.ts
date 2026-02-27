
import NotFound from "../src/pages/NotFound";
import Home from "../src/pages/Home";
import About from "../src/pages/about";

export const routes : Record<string, FunctionComponent<any>> = {
    '/': Home,
    '/about': About,
};

interface FunctionComponent<T = any> extends JSX.FunctionComponent<T> {
    ssp?: string;
    defaultProps?: T;
}

export function getPageComponent(path: string): FunctionComponent<any> {
    return routes[path] || NotFound; // partial match logic can be added here
}