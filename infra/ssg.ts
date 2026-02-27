import { mkdirSync, writeFileSync } from "fs";
import { dirname, join, resolve } from "path";
import { serverOrigin } from "../server";
import { routes } from "./router";

const targetDir = resolve(import.meta.dirname, '../dist/client');

for (const path in routes) {
    const origin = await serverOrigin;
    console.log('Building page:', path);
    const response = await fetch(`${origin}${path}`);
    const html = await response.text();
    const targetBuildPath = join(targetDir, path, 'index.html');
    mkdirSync(dirname(targetBuildPath), { recursive: true });
    writeFileSync(targetBuildPath, html);
}

process.exit(0);