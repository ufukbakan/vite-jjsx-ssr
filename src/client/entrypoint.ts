import { init, transpile } from 'jjsx';
import { clearHydrations } from '../infra/hydration';
import { renderPage } from '../infra/render';
import ErrorPage from './pages/ErrorPage';
import './style.css';
init();
declare global {
    interface HTMLAnchorElement {
        _isHandled: boolean;
    }
}

async function clientRender(url: string) {
    // Show loading indicator if only page takes more than 250ms to load
    const loaderTimer = setTimeout(() => {
        document.getElementById("loading-indicator")?.classList.remove("hide");
    }, 250);
    await clearHydrations();
    try {
        const html = await renderPage(url, async (sspUrl) => await fetch(sspUrl).then(r => r.json()));
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

window.addEventListener("load", () => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>("a");
    anchors.forEach((anchor) => {
        if (anchor._isHandled) return;
        anchor.addEventListener("click", (event) => {
            const targetUrl = new URL(anchor.href);
            if (targetUrl.origin !== location.origin || anchor.download) return;
            event.preventDefault();
            clientRender(targetUrl.pathname + targetUrl.search);
        });
        anchor._isHandled = true;
    });
})

clientRender(location.pathname + location.search);