import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      hooks: `${path.resolve(__dirname, './src/hooks/')}`,
      layout: `${path.resolve(__dirname, './src/layout/')}`,
      context: `${path.resolve(__dirname, './src/context/')}`,
      helpers: `${path.resolve(__dirname, './src/helpers/')}`,
      scss: `${path.resolve(__dirname, './src/scss/')}`,
      utilities: `${path.resolve(__dirname, './src/scss/utilities/')}`,
      public: `${path.resolve(__dirname, './public/')}`,
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/scss/variables";` },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.js'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
});
