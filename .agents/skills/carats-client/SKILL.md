---
name: carats-client
description: Use this skill when coding client side logic, pages or components for carats framework
---

Prerequisites:
- carats-essentials skill
Dependencies:
- "@carats/hooks": to use hooks
- "@carats/render": to define facets
- "@carats/url": to handle urls (peer dependency)
- "@carats/core": to handle core functionality
- "@carats/csr": to handle client side rendering
- "jjsx": to handle jsx (peer dependency)
- "vite": to handle build & resolution (peer dependency)


Client coding is very crucial for carats.
- There must be a proper folder at exact location src/client
- There must be a facets.cara.ts file in src/client folder
- There must be a entrypoint.ts file in src/client folder
- There must be a index.html file in src/client folder which is compatible with vite html template
- HTML template must contain <!--app-head--> and <!--app-html--> comments placed properly
- There must be a vite-env.d.ts file in src/client folder with exact content: "/// <reference types="vite/client" />"

Facets are defined in facets.cara.ts file by defineFacets function from @carats/render and must be default exported.
Sample facet definition:
```typescript
import { defineFacets } from '@carats/render';
import ErrorPage from './pages/_error';
import NotFound from './pages/_not_found';
import Home from './pages/home';
import Profile from './pages/profile';

export default defineFacets({
    routes: {
        '/': Home,
        '/profile/:id': Profile
    },
    suspense: {
        loading: () => 'Loading...',
        error: ErrorPage,
        notFound: NotFound
    },
    inAppRouting: true
});
```

routes is a map of routes to carats page components. Each route can have parameters like :id.
suspense is a map of suspense states to carats components.
inAppRouting is a boolean value that indicates whether the app should use in-app routing or not. in app routing provides a navigation similar to SPA.
after defining facets, you must mount them in src/client/entrypoint.ts file. Sample entrypoint file:
```typescript
import { mount, clientRender } from '@carats/csr';
import facets from './facets.cara';

mount(facets);
clientRender(); // required when in-app routing is enabled
```

Carats components are simplified react components:
- Only pure html attributes are supported. That means you can not pass an arrow function to onclick attribute. or onsubmit or a similar attribute.
- Html attributes considered as strings generally
- Props, .defaultProps, children are supported
A sample carats component looks like this:
```tsx
import './_layout.sass';

export default function Layout(props: JSX.ComponentProps) {
    return (
        <>
            <header>Hello World</header>
            <main>{props.children}</main>
            <footer>Carats</footer>
        </>
    )
}
```
Carats components must be .tsx files.
Carats components can import other components and files supported by Vite (like sass, css, json, etc.)
Carats commponents can be burnished when wrapped by Burnish function from @carats/render.
Burnished means this component needs server side props. And carats framework will automatically fetch it from its culet. (Culets are defined by carat-server skill and they are matched with burnished components if their routes are equal)
Sample burnished component:
```typescript
import { Burnish } from '@carats/render';
export default Burnish<User>((user) => <h1>Hello {user.name}</h1>);
```
Carats framework automatically catches the recent culet. If a component needs to fetch fresh data on every render, Burnish function accepts a second argument BurnishOptions. Here is the full @carats/render interface for better understanding:
```typescript
interface CaratsComponent<T = any> extends JSX.FunctionComponent<T> {
    defaultProps?: T;
    head?: string;
    burnished?: boolean;
    recast?: boolean;
}
interface Facets {
    inAppRouting?: boolean;
    routes: Record<string, CaratsComponent>;
    suspense: {
        loading: () => JSX.Element;
        error: (error: Error) => JSX.Element;
        notFound: () => JSX.Element;
    };
}
interface PartialFacets {
    inAppRouting?: boolean;
    routes?: Record<string, CaratsComponent>;
    suspense?: Partial<Facets['suspense']>;
}
declare function defineFacets(facets: PartialFacets): Facets;
interface PageComponentResult {
    component: CaratsComponent<any>;
    params: Record<string, string>;
    route: string;
}
declare function getPageComponent(this: Facets, url: string): PageComponentResult;
declare function renderPage<T = any>(this: Facets, component: CaratsComponent<T>, props: T): Promise<string>;
interface BurnishOptions {
    recast?: boolean; // prevents props being cached
}
declare function Burnish<T = any>(component: CaratsComponent<T>, options?: BurnishOptions): CaratsComponent<T>;

export { Burnish, type CaratsComponent, type Facets, type PageComponentResult, defineFacets, getPageComponent, renderPage };
```

Facets are so crucial, they will be used on both client and server entrypoints.
There must be a vite.config.client.ts at root, sample vite config for client:
```typescript
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  publicDir: path.resolve(import.meta.dirname, 'public'),
  root: path.resolve(import.meta.dirname, 'src/client'),
  base: '/',
  appType: 'custom',
  server: {
    middlewareMode: true
  },
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/client'),
    emptyOutDir: true,
    manifest: true,
    minify: true,
    rollupOptions: {
      treeshake: true
    }
  }
})
```

- You can use version "latest" for all dependencies if no version is specified (e.g. you cant use latest if express 5 is required)