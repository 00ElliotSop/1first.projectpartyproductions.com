Fix The 502 Error Recieved Using Nginx with CloudPanel & Bolt
Use the vite.config.ts file and replace with one in your repository

Replace the below with contents of original vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Minimal Vite config with preview.allowedHosts
// Docs: https://vite.dev/config/preview-options
export default defineConfig({
 plugins: [react()],
 server: {
   host: true,
   cors: true,
 },
 preview: {
   host: true,
   cors: true,
   allowedHosts: ['example.com', 'example.com'],
 },
});
