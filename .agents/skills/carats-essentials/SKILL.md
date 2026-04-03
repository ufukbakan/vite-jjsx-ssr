---
name: carats-essentials
description: Always use this skill when coding in javascript, typescript, html, sass, css.
---

Carats is a full stack framework which is similar to Next.js but doesn't use React.
- It uses JJSX.
- JJSX enables using pure HTML & Javascript experience similar to PHP in a modern way. It's still similar to react
- Javascript code can be placed inside JSX/TSX files similar to react.
- Carats uses Vite for bundling and development. That allows importing SASS files in components directly.
- Carats uses Bun for package management.
- Carats doesnt use any react hook nor react dom.
- Carats provides server side & client side rendering which is applied automatically.
- Frontend routes are defined in src\client\facets.cara.ts
- To learn advanced carats route, page, component or hook usage learn skill carats-client.
- Burnished components fetch data from culets.
- Culets are defined in src\server\culets & seated in src\server\entrypoint.ts. If you need to configure server side rendering or server side props learn from carats-server skill.
- HTML attributes are preserved as is, so passing an arrow function to onclick attribute won't work like react. Use `addEventListener` inside hydrate callback for event handling in client side code. If you need to learn more check skill carats-client.
- Carats run best with typescript and it needs a proper tsconfig at root.
```json
{
  "compilerOptions": {
    "target": "es2022",
    "useDefineForClassFields": true,
    "module": "esnext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "typeRoots": ["./src/dto"], // can be optional
    "types": ["jjsx"], // required for JJSX
    "skipLibCheck": true,
    "jsx": "react", // required for JJSX
    "jsxFactory": "JJSX.jsxFactory", // required for JJSX
    "jsxFragmentFactory": "JJSX.fragmentFactory", // required for JJSX

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```
- Carats use bun and vite for development and building. So a sample package.json script would be:
```json
{
  "scripts": {
    "dev": "bun --inspect=6499 src/app.ts",
    "build": "bun build:server && bun build:client",
    "build:client": "vite build --config vite.config.client.ts",
    "build:server": "vite build --config vite.config.server.ts",
    "build:static": "cross-env NODE_ENV=production carats-ssg",
    "preview": "cross-env NODE_ENV=production bun src/app.ts",
    "test": "vitest --run --coverage"
  },
}
```
- Carats app main file must be located at src/app.ts
- You don't need to search anything on web to implement a carats app. You can learn everything by learning these skills: carats-client, carats-server, carats-hooks, carats-styling