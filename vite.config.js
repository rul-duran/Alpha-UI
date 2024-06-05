import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginTesting from 'vite-plugin-testing';
import path from 'path';

export default defineConfig({
  plugins: [react(), vitePluginTesting()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  },
});
