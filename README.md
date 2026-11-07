# Vinay Kumar Chopra — portfolio

Single-page portfolio. Vite + React + TypeScript, plain CSS, no runtime dependencies besides React. Static output, deploys on Vercel with no configuration.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to dist/
npm run preview    # serve the production build locally
```

Needs Node 20.19+ or 22.12+ (Vite 8).

## Edit content

All text lives in `src/data/`. Components contain no copy, so you never touch them to change wording.

| File | What it controls |
|---|---|
| `profile.ts` | Name, positioning line, status line, links, rotating headline words, floating hero cards, optional availability line |
| `experience.ts` | Experience entries |
| `openSource.ts` | GRASS GIS intro and each PR (number, title, milestone, summary, link) |
| `projects.ts` | Case studies (problem, approach, stats, results, what failed, stack, links) and compact projects |
| `achievement.ts` | Finalist entry |
| `skills.ts` | Grouped skills |
| `about.ts` | About paragraphs |
| `sections.ts` | Section titles, italic lead lines and nav labels |
| `types.ts` | The shapes above. TypeScript tells you if you leave a field out |

Wrap code in `` `backticks` `` inside any string to render it as inline code.

### Open items

Anything still unknown is written as `TODO(vinay): ...` in a `todos` array. It renders on the page as a dashed box so it can't be missed. List them all with:

```bash
npm run todos
```

Delete the string from the data file when you've dealt with it. Don't deploy with any left.

## Deploy (Vercel)

Import the repo. `vercel.json` pins the framework (Vite), build command and output directory (`dist`), and `package.json` pins Node 22, so old dashboard settings (e.g. the previous Create React App preset with output `build`) can't break the build.

Open Graph and canonical tags need absolute URLs. The build reads, in order, `SITE_URL`, `VERCEL_PROJECT_PRODUCTION_URL`, `VERCEL_URL`. If none is set it omits the canonical and `og:url` tags. Set `SITE_URL` in Vercel if you use a custom domain.

## Design notes

- **Look:** light sky-blue bands, an electric-blue accent with orange and violet as secondary colours, big Bricolage Grotesque headings with Instrument Serif italic for accent words, and rounded cards. Each project gets its own colour tone (`tone` in `projects.ts`).
- **Hero:** the headline word rotates (`tagline.words` in `profile.ts`); the four floating cards are `heroCards`. They float and tilt from 1408px up and sit in a grid below that.
- **Wide screens:** a decorative scroll-progress rail on the right; the header nav highlights the current section.
- **Theme:** light by default, follows `prefers-color-scheme`, with a manual toggle remembered in `localStorage`. An inline script in `index.html` sets it before first paint to avoid a flash.
- **Motion:** rotating word, floating cards, scroll reveals, hover lifts. Everything stops or is fully visible under `prefers-reduced-motion`, and without JS.
- **Accessibility:** all text colour pairs are WCAG AA or better in both themes. Skip link, landmarks, visible focus, 44px+ tap targets. The progress rail is `aria-hidden`.
- **Fonts:** Bricolage Grotesque, Instrument Serif, Geist, Geist Mono, Latin subsets only, self-hosted in `src/assets/fonts` (SIL OFL licences alongside). No third-party requests.
- **Images:** `public/portrait.webp` (cropped, 480px). `public/og.png` is rendered from `scripts/og.html` at 1200×630 (open it in a browser at that viewport and screenshot, or use Playwright).

## Layout

```
src/data/        all content
src/components/  one file per section
src/styles/      tokens.css (colours, type, fonts), base.css, components.css
src/hooks/       useTheme, useReveal
public/          resume PDF, portrait, OG image, favicon, robots.txt
scripts/         list-todos.mjs, og.html
docs/            PLAN.md, screenshots/, lighthouse.md
```
