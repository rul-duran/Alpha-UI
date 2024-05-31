import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginTesting from 'vite-plugin-testing';

export default defineConfig({
  plugins: [react(), vitePluginTesting()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  },
});
