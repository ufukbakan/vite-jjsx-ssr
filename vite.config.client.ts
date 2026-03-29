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