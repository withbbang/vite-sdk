import pkg from './package.json';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [],
  build: {
    minify: 'terser', // 'terser' or 'esbuild'
    lib: {
      name: pkg.name,
      fileName: (format) => {
        if (format === 'umd') {
          return 'index.js';
        } else if (format === 'es') {
          return 'index.esm.js';
        } else {
          return 'index.js';
        }
      },
      entry: 'src/index.ts',
      formats: ['umd', 'es'],
    },
    sourcemap: false,
  },
  server: {
    port: 5173,
  },
});
