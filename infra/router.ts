
import { transpile } from "jjsx";
import NotFound from "../src/pages/NotFound";
import { clearHydrations } from "./hydration";
import Home from "../src/pages/Home";
import About from "../src/pages/about";

const routes : Record<string, FunctionComponent<any>> = {
    '/': Home,
    '/about': About,
};

interface FunctionComponent<T = any> extends JSX.FunctionComponent<T> {
    ssp?: string;
    defaultProps?: T;
}

export function getPageComponent(path: string): FunctionComponent<any> {
    return routes[path] || NotFound;
}

export async function clientRender(pathName: string) {
    await clearHydrations();
    const PageComponent = getPageComponent(pathName);
    const props = PageComponent.ssp
        ? await fetch(PageComponent.ssp).then(res => res.json())
        : PageComponent.defaultProps || { pathName };
    const html = transpile(PageComponent(props));
    document.getElementById("app")!.innerHTML = html;
    history.pushState(null, "", pathName);
    document.dispatchEvent(new Event("load"));
}