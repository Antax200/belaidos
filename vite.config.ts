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
        }
      }
    }
  },
  optimizeDeps: {
    include: ['lucide-react']
  },
  server: {
    host: true
  },
  publicDir: 'public'
});
