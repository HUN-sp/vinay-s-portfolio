import type { OpenSource } from './types';

const PR = (n: number) => `https://github.com/OSGeo/grass/pull/${n}`;

export const openSource: OpenSource = {
  project: 'GRASS GIS',
  org: 'OSGeo',
  stack: ['C', 'Python', 'pytest', 'OpenMP', 'gprof', 'GCC / Clang'],
  headlineStat: { value: '~4.7×', label: 'up to, on the parallelized `r.resamp.stats`' },

  // Order: biggest first.
  pullRequests: [
    {
      number: 7044,
      title: '`r.resamp.stats`: OpenMP parallelization with memory chunking',
      milestone: '8.6.0',
      summary:
        'Parallelized the resampler with OpenMP and per-thread buffers, with a benchmark script and a pytest suite that checks the results. The first draft was a proof of concept (about 3× on a 30k × 30k raster with 12 threads, only the `average` and `median` methods tested); the merged version adds the benchmark and the tests. The “up to ~4.7×” figure comes from the benchmark I posted in the PR thread: 1.86 s serial vs 0.39 s with 10 threads on a 50M-cell raster (4.74×; 4.12× at 100M cells, 4.51× at 200M), on an AMD Ryzen 5600H.',
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
      title: '`r.surf.fractal`: optimize memory initialization',
      milestone: '8.5.0',
      summary:
        'Profiling with `gprof` pointed at the array-reset routine. Replaced the manual initialization loop with `G_zero()`.',
      href: PR(7005),
    },
    {
      number: 7097,
      title: '`lib`: replace deprecated `gets()` with `fgets()` in test files',
      milestone: '8.6.0',
      summary:
        'Modernized the `btree` and `linkm` test programs: replaced the unsafe `gets()` with `fgets()` and fixed incompatible pointer types and implicit function declarations.',
      href: PR(7097),
    },
  ],
};
