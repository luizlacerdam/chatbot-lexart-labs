import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const defaultPort = 3000;
const PORT = process.env.PORT || defaultPort;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: './build' },
  server: { port: PORT },
});
