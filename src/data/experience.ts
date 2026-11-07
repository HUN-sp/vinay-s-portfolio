import type { Experience } from './types';

// Kept at the level of detail on the resume. Do not add internal or confidential details.
export const experience: Experience[] = [
  {
    company: 'Thriftstone',
    role: 'AI Engineering Intern',
    location: 'Remote',
    period: 'Jul 2026 – Oct 2026',
    bullets: [
      'Built a three-tier evaluation framework (extraction, retrieval, agent) for an AI research agent over financial documents: 1,925 golden cases across 16 issuers, with zero-tolerance gates for abstention and verification.',
      'Diagnosed and fixed verifier, ratio-tool and router defects, including unit-conversion rounding that misgraded exact figures, ratios mishandling missing prior-year balances, and amounts missing units. Documented the audit findings in evaluation docs.',
      'Created and extended deterministic agent tools in a 62-tool registry, including cash-flow ratios and a multi-period cash-flow bridge.',
      'Worked across AI research, data pipelines, retrieval and deployment, including an AWS ECS feature flag and per-user CloudWatch dashboards.',
    ],
  },
];
