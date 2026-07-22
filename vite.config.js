import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      'react-icons/fa': path.resolve(rootDir, 'node_modules/react-icons/fa/index.mjs'),
      'react-icons/si': path.resolve(rootDir, 'node_modules/react-icons/si/index.mjs'),
    },
  },
  optimizeDeps: {
    include: ['react-icons/fa', 'react-icons/si'],
  },
})
