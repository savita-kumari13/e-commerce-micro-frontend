// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';
import packageJson from './package.json'


export default defineConfig({
  mode: 'development',
  plugins: [
    react(),
    federation({
      name: 'containerApp',
      remotes: {
        dashboardApp: 'http://localhost:5001/assets/remoteEntry.js',
      },
       shared: packageJson.dependencies,
    }),
  ],
});
