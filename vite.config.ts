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
    transformIndexHtml: (html) =>
      // Without a known origin, drop the tags that must be absolute rather than emit relative ones.
      url
        ? html.replaceAll('%SITE_URL%', url)
        : html
            .replace(/\s*<link rel="canonical"[^>]*>/, '')
            .replace(/\s*<meta property="og:url"[^>]*>/, '')
            .replaceAll('%SITE_URL%', ''),
  };
}

export default defineConfig({
  plugins: [react(), siteUrl()],
  build: { target: 'es2022', sourcemap: false },
});
