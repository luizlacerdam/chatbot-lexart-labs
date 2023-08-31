import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const PORT = process.env.PORT || 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: './build' },
  server: { port: PORT },
});
