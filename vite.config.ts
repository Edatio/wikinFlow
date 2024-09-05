import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  // Define multiple entry points for background, popup, and options
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/background/background.ts'),
        content: resolve(__dirname, 'src/content/content.ts'),
        popup: resolve(__dirname, 'src/popup/popup.tsx'),
        options: resolve(__dirname, 'src/options/options.tsx'),
      },
      output: {
        entryFileNames: '[name]/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
    outDir: 'dist',  // Output directory for the built files
  },
  plugins: [
    react(),  // Enable React fast refresh
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),  // Set up alias for `src/` directory
    },
  },
  server: {
    port: 3000,  // Vite development server port
    open: false,  // Don't open the browser automatically
    hmr: { overlay: true },  // Enable Hot Module Replacement
  },
});
