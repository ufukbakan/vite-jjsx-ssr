import fs from 'node:fs/promises'
import type { Server } from 'node:http'
import express from 'express'
import { ViteDevServer } from 'vite'

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''

// Create http server
export const app = express()

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite: ViteDevServer
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
}

app.use('/api*splat', async (req, res) => {
  try {
    const serverEntry = isProduction
      ? (await import('./dist/server/entry-server.js'))
      : (await vite.ssrLoadModule('/src/entry-server.ts'));
    const getApiData = serverEntry.getApiData;
    const data = await getApiData(req.originalUrl, req);
    res.status(data._status || 200).json(
      Object.fromEntries(Object.keys(data)
        .filter(key => key !== '_status')
        .map(key => [key, data[key]]))
    );
  } catch (e: any) {
    console.error(e.message)
    console.error(e.stack)
    res.status(500).end(e.stack)
  }
})

// Serve HTML
app.use('*all', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '/');

    /** @type {string} */
    let template
    /** @type {import('./src/entry-server.ts').render} */
    let render
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.ts')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    const rendered = await render(url, req);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e: any) {
    vite?.ssrFixStacktrace(e)
    console.error(e.stack)
    res.status(500).end(e.stack)
  }
})

export let server: Server;

export const serverOrigin: Promise<string> = new Promise((resolve, reject) => {
  server = app.listen(port, (error: any) => {
    if (error) {
      console.error(error)
      reject(error)
    } else {
      const origin = `http://localhost:${port}`;
      console.log(`Server started at ${origin}`)
      resolve(origin)
    }
  })
})