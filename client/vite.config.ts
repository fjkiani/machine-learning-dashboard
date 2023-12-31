import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Checker from 'vite-plugin-checker';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    Checker({ typescript: true }) // Include Checker plugin here
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
