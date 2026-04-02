---
name: carats-coding
description: Always use this skill when coding in javascript, typescript, html, sass, css.
---

Carats is a full stack framework which is similar to Next.js but doesn't use React.
- It uses JJSX.
- JJSX enables using pure HTML & Javascript experience similar to PHP in a modern way. It's still similar to react:
```tsx
export default function Layout(props: JSX.ComponentProps) {
    return (
        <>
            <nav>
                <SearchInput />
            </nav>
            {props.children}
        </>
    )
}
```
- Javascript code can be placed inside JSX, TSX files similar to react.
- Carats prefers using pure HTML & scoped SASS over TailwindCSS.
- Carats uses Vite for bundling and development. That allows importing SASS files in components directly.
- Carats uses Bun for package management.
- Carats doesnt use any react hook nor react dom.
- Carats provides server side & client side rendering which is applied automatically.
- Frontend routes are defined in src\client\facets.cara.ts
- Every facet route is defined as a page component.
- Page components can be wrapped with Burnish function to add server side props.
- Burnished components fetch data from culets.
- Culets are defined in src\server\culets & seated in src\server\entrypoint.ts
- base.sass is the global stylesheet which should include top level design token variables. other pages should define their own SASS files while using `@use base as *` to access the design tokens.
- HTML attributes are preserved as is, so passing an arrow function to onclick attribute won't work like react. Use `addEventListener` for event handling in client side code.
- Every component code is executed both on client & server. So if a block is required to be executed only on client side, use hydrate or onMount function imported from '@carats/hooks'
- Hydrate function gets executed after DOM load event triggered. onMount function is triggered as soon as the component is placed
- Theres a use hook provided by carats which can be used like below:
```tsx
import { use, hydrate } from "@carats/hooks";

export default function Counter() {
    const count = use(0);
    hydrate(() => {
        const counterElement = document.getElementById("counter")!;
        const unsubscribeCounter = count.subscribe((newCount) => {
            counterElement.textContent = newCount.toString();
        });
        counterElement.addEventListener("click", () => {
            count.set((prev) => prev + 1);
        });
        return () => {
            // cleanups
            unsubscribeCounter();
        };
    });
    return (
        <div class="card">
            <button id="counter" type="button">{count.get()}</button>
        </div>
    )
}
```