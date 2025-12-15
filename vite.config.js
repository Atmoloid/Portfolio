import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 1. IMPORTA il modulo 'path' di Node.js
import path from 'path' 

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  // 2. AGGIUNGI la configurazione 'resolve'
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
