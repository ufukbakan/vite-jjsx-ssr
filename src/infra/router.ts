import routes from "../client/routes";
import NotFound from "../client/pages/NotFound";
import { matchRoute } from "./url";

export interface FunctionComponent<T = any> extends JSX.FunctionComponent<T> {
    ssp?: string;
    defaultProps?: T;
}

interface PageComponentResult {
    component: FunctionComponent<any>;
    params: Record<string, string>;
}

export function getPageComponent(path: string): PageComponentResult {
    for (const [routePath, component] of Object.entries(routes)) {
        const matchedParams = matchRoute(routePath, path);
        if (matchedParams) {
            return { component, params: matchedParams };
        }
    }
    return { component: NotFound, params: {} };
}