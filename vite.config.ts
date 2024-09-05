import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import copy from 'rollup-plugin-copy';

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  // Define multiple entry points for background, popup, and options
  build: {
    rollupOptions: {
      input: {
        // background: resolve(__dirname, 'src/background/background.ts'),
        // content: resolve(__dirname, 'src/content/content.ts'),
        // popup: resolve(__dirname, 'src/popup/popup.tsx'),
        // options: resolve(__dirname, 'src/options/options.tsx'),
      },
      output: {
        entryFileNames: '[name]/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
    outDir: 'dist',
  },
  plugins: [
    react(),
    copy({
        targets: [{ src : './src/manifest.json', dest: './dist'}],
        hook: 'writeBundle',
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: false,
    hmr: { overlay: true },
  },
});
