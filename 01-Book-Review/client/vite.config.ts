import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:9000",
        secure: false,
      }
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
