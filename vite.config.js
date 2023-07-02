import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

module.exports = {
  build: {
    chunkSizeWarningLimit: 512000, // Set your desired chunk size warning limit in kilobytes
  },
};
