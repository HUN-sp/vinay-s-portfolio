# Lighthouse

Lighthouse 12, headless Chromium, against `vite preview` of the production build (local, so no CDN compression; Vercel serves gzip/brotli, which only helps).
Mobile uses Lighthouse's default simulated throttling; desktop uses its desktop preset.

| Form factor | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| mobile | 99 | 100 | 100 | 100 | 2.1 s | 0 | 0 ms |
| desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |

Rerun against the Vercel preview once deployed: the numbers here are from a local server, not the real deployment.

Production bundle: 166 kB JS (55 kB gzip), 14 kB CSS (3.6 kB gzip), four Latin-subset fonts (about 96 kB, only those used are fetched), 23 kB portrait.
