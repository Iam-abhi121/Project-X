import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,   // robust file watching
      interval: 100,      // check every 100ms
    },
    hmr: {
      overlay: true,      // show overlay on errors
    },
  },
})
