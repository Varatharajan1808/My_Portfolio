import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  server: {
    hmr: true,
    host: true,
    watch: {
      usePolling: true,
    },
  },
})
