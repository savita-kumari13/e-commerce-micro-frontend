// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';
import packageJson from './package.json'

const domain = process.env.PRODUCTION_DOMAIN

export default defineConfig({
  mode: 'production',
  plugins: [
    react(),
    federation({
      name: 'hostApp',
      remotes: {
        dashboard: `${domain}/assets/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
  build: {
    rollupOptions: {
      external: ['dashboardApp/Dashboard'],
    },
  }
});
