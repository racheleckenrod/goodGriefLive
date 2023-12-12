import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true, credentials: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3030',
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/socket.io': {
        target: 'http://localhost:3030',
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
        ws: true,
        headers: {
          'Origin': 'http://localhost:5173',
          // Add other headers if needed
        },

        // rewrite: (path) => path.replace(/^\/api/, ''),
        
      },
    },
  },
});
