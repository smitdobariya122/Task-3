import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure compatibility with modern browsers
    target: 'es2015',
    // Generate source maps for debugging
    sourcemap: false,
    // Optimize for production
    minify: 'esbuild',
    // Ensure proper chunking
    chunkSizeWarningLimit: 1000,
  },
  // Server configuration for development
  server: {
    port: 5173,
    open: true, // Automatically open browser
  },
})
