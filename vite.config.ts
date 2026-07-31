import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        teqo: fileURLToPath(new URL('./teqo.html', import.meta.url)),
        teqoSignal: fileURLToPath(new URL('./teqo-signal.html', import.meta.url)),
        teqoLedger: fileURLToPath(new URL('./teqo-ledger.html', import.meta.url)),
      },
    },
  },
})
