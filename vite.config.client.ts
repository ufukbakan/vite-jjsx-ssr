import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  publicDir: path.resolve(__dirname, 'public'),
  root: path.resolve(__dirname, 'src/client'),
  base: '/', // Change this if you serve from a sub-path like /app/
  build: {
    outDir: path.resolve(__dirname, 'dist/client'),
    emptyOutDir: true,
    manifest: true,
    minify: true,
    rollupOptions: {
      treeshake: true
    }
  }
})