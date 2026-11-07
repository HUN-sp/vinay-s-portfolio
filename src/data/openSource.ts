import type { OpenSource } from './types';

const PR = (n: number) => `https://github.com/OSGeo/grass/pull/${n}`;

export const openSource: OpenSource = {
  project: 'GRASS GIS',
  org: 'OSGeo',
  intro:
    'Five merged pull requests into the GRASS GIS C and Python codebase, in milestones 8.5.0 and 8.6.0. Each one links to the PR, so the review history is public.',
  stack: ['C', 'Python', 'pytest', 'OpenMP', 'gprof', 'GCC / Clang'],
  headlineStat: { value: '~4.7×', label: 'up to, on the parallelised `r.resamp.stats`' },

  // Order: biggest first.
  pullRequests: [
    {
      number: 7044,
      title: '`r.resamp.stats`: OpenMP parallelisation with memory chunking',
      milestone: '8.6.0',
      summary:
        'Parallelised the resampler with OpenMP and per-thread buffers, with a benchmark script and a pytest suite that checks the results. The first draft was a proof of concept (about 3× on a 30k × 30k raster with 12 threads, only the `average` and `median` methods tested); the merged version adds the benchmark and the tests.',
      href: PR(7044),
    },
    {
      number: 7299,
      title: '`r.category`: preserve raster title when using `rules=`',
      milestone: '8.6.0',
      summary:
        'Fixed a maintainer-reported bug where `rules=` overwrote the raster title with an empty one. Added pytest regression tests.',
      href: PR(7299),
    },
    {
      number: 7791,
      title: '`r.resamp.stats`: fix `quantile` option truncated to an integer',
      milestone: '8.6.0',
      summary:
        'Found while working on the PR above: `quantile` was parsed with `atoi()`, so any value below 1.0 became 0 and `method=quantile` silently behaved like `method=minimum`. One-line fix (`atof()`), submitted separately, as requested in review.',
      href: PR(7791),
    },
    {
      number: 7005,
      title: '`r.surf.fractal`: optimise memory initialisation',
      milestone: '8.5.0',
      summary:
        'Profiling with `gprof` pointed at the array-reset routine. Replaced the manual initialisation loop with `G_zero()`.',
      href: PR(7005),
    },
    {
      number: 7097,
      title: '`lib`: replace deprecated `gets()` with `fgets()` in test files',
      milestone: '8.6.0',
      summary:
        'Modernised the `btree` and `linkm` test programs: replaced the unsafe `gets()` with `fgets()` and fixed incompatible pointer types and implicit function declarations.',
      href: PR(7097),
    },
  ],

  todos: [
    'TODO(vinay): confirm which benchmark run produced “up to ~4.7×” for `r.resamp.stats` (threads, raster size, method). It is not in the public text of PR #7044, whose first draft reports ~3×.',
    'TODO(vinay): your resume says “4 merged PRs”; GitHub shows 5 merged (this page lists all 5). Update one or the other.',
  ],
};
