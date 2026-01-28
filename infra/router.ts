
import { transpile } from "jjsx";
import NotFound from "../src/pages/NotFound";
import { clearHydrations } from "./hydration";
import Home from "../src/pages/Home";
import About from "../src/pages/about";

const routes = {
    '/': Home,
    '/about': About,
} as const;

export type Routes = typeof routes;

interface FunctionComponent<T = any> extends JSX.FunctionComponent<T> {
    isSspRequired?: boolean;
}

export function getPageComponent(path: keyof typeof routes): FunctionComponent<any> {
    return routes[path] || NotFound;
}

export async function clientRender(pathName: string) {
    await clearHydrations();
    // clean import module cache
    // const domParser = new DOMParser();
    const PageComponent = getPageComponent(pathName as keyof Routes);
    const props = PageComponent.isSspRequired
        ? await fetch(`/ssp${pathName}`).then(res => res.json())
        : { url: pathName };
    // const props = {};
    const html = transpile(PageComponent(props));
    // const doc = domParser.parseFromString(html, "text/html");
    document.getElementById("app")!.innerHTML = html;
    // document.head.innerHTML = doc.head.innerHTML;
    history.pushState(null, "", pathName);
    document.dispatchEvent(new Event("load"));
}