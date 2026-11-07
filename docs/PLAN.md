# Portfolio v2 — plan

Goal: a recruiter knows who Vinay is in 10 seconds, can verify any claim in one click, and sees from his own evals that he measures things and reports failures honestly.

## What I checked before writing anything

| Source | What I did | What I found |
|---|---|---|
| Old site (`master`) | Read every file | CRA template, Bootstrap + tachyons + tsParticles, emailjs form, says "first-year at Scaler", five toy projects (Snake game, quiz app, etc.), ~600 KB of base64 images inside `data.json`, `gh-pages` deploy. Nothing worth keeping except the portrait photo. |
| Resume PDF | Extracted text | Source of truth for facts. |
| `OSGeo/grass` | `git log --author` on `main`, `gh api search/issues` | **5** merged PRs by Vinay, not 4 (see "Discrepancies"). |
| `HUN-sp/SourceMind` | Cloned, read README, DECISIONS.md, EVALUATION.md | Eval numbers match the resume. The repo has moved on since (see "Discrepancies"). |
| `HUN-sp/ai-persona-chat` | Cloned, read README + EVALS_REPORT.md | Numbers match the resume. Failure write-up is good material. |
| `HUN-sp/Aadhar-_Seva-_Radar` | Cloned, read README and the notebook outputs | 31,777 / 3,801 / 20.7x / Thane confirmed in notebook output; 3 datasets sum to ~4.9M rows. |
| `HUN-sp/Market_Data_Publisher` | Cloned, read all source | No README. ~190 lines, one commit. Described from the code only, no performance claims. |

Visibility: the four project repos were cloned anonymously through a proxy that only serves public repositories, so they are public. Private repos are not linked or mentioned anywhere.

## Discrepancies between the brief/resume and the public record

1. **GRASS PR count.** Resume says 4. Git history on `main` and the PR search show 5 merged PRs: #7005, #7097, #7299, #7044, #7791. The site lists all 5 with links and says 5.
2. **`gets()` → `fgets()`** is not part of the `r.surf.fractal` PR. It is PR #7097 (`lib/btree`, `lib/linkm` test programs). The site lists it separately. The "C11 / security issues" wording in the resume is not stated in either PR, so the site says only what the PRs say.
3. **~4.7x speedup** is not in the public text of PR #7044 (its first-draft description reports ~3x on a 30k×30k raster with 12 threads, two methods only). The merged version adds a benchmark script and a 470-line pytest suite. I kept "up to ~4.7x" because it is Vinay's number, and flagged it `TODO(vinay)` to confirm which benchmark configuration produced it.
4. **SourceMind has newer results than the resume.** The 10-question eval (6/2/1/1) and the reranker A/B (10/17 either way) are accurate for the earlier system. After table-aware retrieval work, DECISIONS.md §3b reports the same harness at 15/17 and a live 15-question run with 14 correct. The default LLM is now `openai/gpt-oss-120b` because Groq retired Llama 3.3 70B. The site tells the story in order (first eval → reranker did nothing → what actually fixed it) and links DECISIONS.md. Flagged in the PR so Vinay can cut it.
5. **Resume header** still lists Codeforces and CodeChef. The site drops them as instructed. The PDF is untouched.
6. **Status line.** The Thriftstone internship ended Oct 2026 (today is Nov 2026). The status line is worded as a fact, not "currently". `TODO(vinay)`: availability line.

## Site structure (single page)

1. Hero: name, one-line positioning, status line, Resume / GitHub / LinkedIn / Email, portrait.
2. Experience: Thriftstone.
3. Open source: GRASS GIS, 5 PRs, each linked.
4. Projects: SourceMind, AI Persona Chat, Aadhaar Seva Radar as case studies; Market_Data_Publisher as a compact entry.
5. Achievement: Meta PyTorch × OpenEnv finalist.
6. Skills: grouped text.
7. About + Contact: short first-person text, mailto, links.

Cut: the contact form (and emailjs), particles, Bootstrap, animate.css, toy projects, skill bars, testimonials, blog.

## Technical approach

- Vite + React 18 + TypeScript, plain CSS with design tokens (no UI framework). Static output in `dist/`, Vercel auto-detects it.
- Content lives in `src/data/*.ts` with types in `src/data/types.ts`. Components contain no copy.
- Fonts: self-hosted via `@fontsource` (Instrument Serif for display, Geist for text, Geist Mono for labels), Latin subset only, no third-party requests.
- Theme: dark by default, follows `prefers-color-scheme`, manual toggle stored in `localStorage`, applied by an inline script before first paint to avoid a flash.
- Motion: IntersectionObserver reveals and hover states, disabled under `prefers-reduced-motion`; content is visible without JS.
- Accent: one colour (amber), tuned separately for dark and light to keep WCAG AA.
- Images: portrait as cropped WebP; OG image 1200×630 PNG; SVG favicon.
- `TODO(vinay)` items render as visible dashed chips on the page and are listed by `npm run todos`.

## Commits

1. Plan
2. Remove CRA app, scaffold Vite + TS
3. Content data files
4. Layout, theme, hero
5. Sections
6. Polish: a11y, meta, OG image, favicon
7. README, screenshots, final checks
