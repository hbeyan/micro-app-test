import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
    },
  },
  plugins: [
    vue(),
  ],
  server: {
    open: true,
    port: 9090,
    hmr: true,
  },
});
