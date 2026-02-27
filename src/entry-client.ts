import { init } from 'jjsx';
import { clientRender } from '../infra/render';
import './style.css';
init();

declare global {
    interface HTMLAnchorElement {
        _isHandled: boolean;
    }
}

window.addEventListener("load", () => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>("a");
    anchors.forEach((anchor) => {
        if (anchor._isHandled) return;
        anchor.addEventListener("click", (event) => {
            const targetUrl = new URL(anchor.href);
            if(targetUrl.origin !== location.origin || anchor.download) return;
            event.preventDefault();
            clientRender(targetUrl.pathname);
        });
        anchor._isHandled = true;
    });
})
clientRender(location.pathname);