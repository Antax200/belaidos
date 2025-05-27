import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'lucide-react': ['lucide-react']
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name].[ext]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name].[ext]`;
          }
          return `assets/[name].[ext]`;
        }
      }
    }
  },
  optimizeDeps: {
    include: ['lucide-react']
  },
  server: {
    port: 3000,
    host: true
  },
  publicDir: 'public'
});
