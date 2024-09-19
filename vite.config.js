import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      util: 'util/', // Adjust this based on your needs
      buffer: 'buffer/',
    },
  },
});
