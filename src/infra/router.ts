import routes from "../client/routes";
import NotFound from "../client/pages/NotFound";

export interface FunctionComponent<T = any> extends JSX.FunctionComponent<T> {
    ssp?: string;
    defaultProps?: T;
}

export function getPageComponent(path: string): FunctionComponent<any> {
    return routes[path] || NotFound; // partial match logic can be added here
}