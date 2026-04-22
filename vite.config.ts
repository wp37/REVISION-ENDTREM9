import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-og-base-url',
      transformIndexHtml(html) {
        // Vercel provides these env vars at build time
        const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
          ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
          : process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : '';
        return html.replace(/__OG_BASE_URL__/g, baseUrl);
      }
    }
  ],
  base: '/',
});