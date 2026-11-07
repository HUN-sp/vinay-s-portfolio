# Lighthouse

Lighthouse 12, headless Chromium, against `vite preview` of the production build (local, so no CDN compression; Vercel serves gzip/brotli, which only helps).
Mobile uses Lighthouse's default simulated throttling; desktop uses its desktop preset.

| Form factor | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| mobile | 97 | 100 | 100 | 100 | 2.5 s | 0 | 50 ms |
| desktop | 100 | 100 | 100 | 100 | 0.6 s | 0 | 0 ms |

Rerun against the Vercel preview once deployed: the numbers here are from a local server, not the real deployment.

Production bundle: 170 kB JS (56 kB gzip), 23 kB CSS (5.6 kB gzip), five Latin-subset fonts (about 137 kB on disk, and only the ones used are fetched), 23 kB portrait.
