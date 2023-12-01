import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true, credentials: true,
  //   proxy: {
  //     '/': {
  //       target: 'http://localhost:3030',
  //       changeOrigin: true
  //     }
  //   }
  } 
});
