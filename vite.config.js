import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',            // Vercel ile uyumlu klasör
    emptyOutDir: true,         // Önceki build dosyalarını temizler
    sourcemap: false,          // Prod build için sadeleştirme
    rollupOptions: {
      external: [],            // Gerekirse dışa alınacak modüller buraya
    }
  },
  server: {
    port: 3000,
    open: true
  }
})