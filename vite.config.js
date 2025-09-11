import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite yapılandırması başlatılıyor
export default defineConfig({
  // React desteği için plugin tanımı
  plugins: [react()],

  // Build ayarları
  build: {
    outDir: 'dist',            // ✔ Vercel deploy için doğru klasör (Vercel varsayılanı 'dist')
    emptyOutDir: true,         // ✔ Her build öncesi klasörü temizler, bozuk dosya kalmaz
    sourcemap: false,          // ✔ Prod build için sadeleştirme, kaynak haritası oluşturmaz
    rollupOptions: {
      external: [],            // ✔ Harici modül tanımı (örneğin: 'react-router-dom' dışa alınabilir)
    }
  },

  // Lokal geliştirme sunucusu ayarları
  server: {
    port: 3000,                // ✔ Lokal geliştirme için sabit port, çakışma riski düşük
    open: true                 // ✔ Sunucu başlatıldığında tarayıcı otomatik açılır
  }
})