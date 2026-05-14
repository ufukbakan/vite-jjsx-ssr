import { afterMount } from "@carats/hooks";
import SearchInput from "../../components/SearchInput";
import './_layout.sass';

export default function Layout(props: JSX.ComponentProps) {
    afterMount(() => {
        const toggle = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('mobile-overlay');
        if (!toggle || !menu || !overlay) return;

        const openMenu = () => {
            menu.classList.add('open');
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        };
        const closeMenu = () => {
            menu.classList.remove('open');
            overlay.classList.remove('open');
            document.body.style.overflow = '';
        };

        toggle.addEventListener('click', openMenu);
        overlay.addEventListener('click', closeMenu);

        menu.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        return () => {
            toggle.removeEventListener('click', openMenu);
            overlay.removeEventListener('click', closeMenu);
        };
    });

    return (
        <>
            <header class="app-header">
                <div class="header-inner">
                    <a href="/" class="brand">
                        <span class="brand-icon">◆</span>
                        <span class="brand-name">the Vault</span>
                    </a>
                    <nav class="nav-links">
                        <a href="/" class="nav-link">Dashboard</a>
                        <a href="/profile" class="nav-link">Portfolio</a>
                        <a href="/market" class="nav-link">Market</a>
                    </nav>
                    <SearchInput />
                    <button id="mobile-menu-toggle" class="mobile-menu-toggle" type="button" aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
            <div id="mobile-overlay" class="mobile-overlay"></div>
            <div id="mobile-menu" class="mobile-menu">
                <nav class="mobile-nav">
                    <a href="/" class="nav-link">Dashboard</a>
                    <a href="/profile" class="nav-link">Portfolio</a>
                    <a href="/market" class="nav-link">Market</a>
                </nav>
                <div class="mobile-search">
                    <SearchInput />
                </div>
            </div>
            <main class="main-content">
                {props.children}
            </main>
            <footer class="app-footer">
                <div class="footer-inner">
                    <span class="footer-brand">◆ the Vault</span>
                    <span class="footer-copy">Elite Digital Asset Management</span>
                </div>
            </footer>
        </>
    )
}
