import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  publicDir: false,
  build: {
    ssr: true,
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      input: [
        path.resolve(__dirname, 'src/server/entrypoint.ts'),
        path.resolve(__dirname, 'src/app.ts')
      ],
      output: {
        entryFileNames: (chunkInfo) => {
          const prefix = /src[\\/]server/.test(chunkInfo.facadeModuleId!) ? 'server/' : '';
          return `${prefix}[name].js`
        },
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
      treeshake: true
    }
  },
  ssr: {
    noExternal: [/.*/] // disable this to use node_modules
  },
})