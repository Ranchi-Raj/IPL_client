import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:5000', // Backend server URL
        target: 'https://ipl-server-dxtv.onrender.com',
        changeOrigin: true, // Updates the `Origin` of the request to match the target
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
