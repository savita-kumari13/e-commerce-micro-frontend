// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';
import packageJson from './package.json'

export default defineConfig({
  mode: 'production',
  plugins: [
    react(),
    federation({
      name: 'dashboardApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/App.tsx',
      },
      shared: packageJson.dependencies,
    }),
  ],

  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      external: ['dashboardApp/Dashboard'],
    },
  },
});
