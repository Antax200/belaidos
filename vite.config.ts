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
        assetFileNames: 'assets/[name].[ext]'
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
