import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Replaces %SITE_URL% in index.html so Open Graph tags get absolute URLs.
 * Order of precedence: SITE_URL env var, then Vercel's production/preview URL,
 * then empty (relative URLs, which still work in the browser).
 */
function siteUrl(): Plugin {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const url = (process.env.SITE_URL || (host ? `https://${host}` : '')).replace(/\/$/, '');
  return {
    name: 'site-url',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', url),
  };
}

export default defineConfig({
  plugins: [react(), siteUrl()],
  build: { target: 'es2022', sourcemap: false },
});
