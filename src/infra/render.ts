import { transpile } from "jjsx";
import { clearHydrations } from "./hydration";
import { getPageComponent } from "./router";
import { parseUrl, qs, replaceParams } from "./utils";
import ErrorPage from "../client/pages/ErrorPage";

export async function clientRender(url: string) {
    const { path, query } = parseUrl(url);
    // Show loading indicator if only page takes more than 250ms to load
    const loaderTimer = setTimeout(() => {
        document.getElementById("loading-indicator")?.classList.remove("hide");
    }, 250);
    await clearHydrations();
    try {
        const { component, params } = getPageComponent(path);
        const sspUrl = component.ssp ? replaceParams(component.ssp + qs(query), params) : null;
        const props = sspUrl
            ? await fetch(sspUrl).then(res => res.json())
            : component.defaultProps || { url, params };
        const html = transpile(component(props));
        document.getElementById("app")!.innerHTML = html;
    } catch (error) {
        document.getElementById("app")!.innerHTML = transpile(
            ErrorPage({ error: error as Error })
        );
    } finally {
        clearTimeout(loaderTimer);
        history.pushState(null, "", url);
        window.dispatchEvent(new Event("load"));
        document.getElementById("loading-indicator")?.classList.add("hide");
    }
}