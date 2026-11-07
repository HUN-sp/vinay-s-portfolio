import type { Profile } from './types';

export const profile: Profile = {
  name: 'Vinay Kumar Chopra',

  // Draft positioning line, written from the facts in the brief. Edit freely.
  positioning:
    'AI engineer building evaluation-first, grounded AI systems (RAG, agents, evals), with merged C and Python contributions to open-source GRASS GIS.',

  status: 'AI Engineering Intern at Thriftstone, Jul–Oct 2026',

  education: {
    school: 'BITS Pilani',
    degree: 'Bachelor’s in Computer Science',
    years: '2023–present',
    cgpa: '8.17',
  },

  email: 'chopravinaykumarchopra@gmail.com',

  links: {
    resume: '/Vinay_Kumar_Chopra_Resume.pdf',
    github: 'https://github.com/HUN-sp',
    linkedin: 'https://linkedin.com/in/vinay-kumar-chopra-307976286',
    leetcode: 'https://leetcode.com/u/Vinay_Chopra-2003/',
  },

  tagline: {
    prefix: 'I build',
    words: ['grounded', 'evaluation-first', 'measured'],
    suffix: 'AI systems.',
  },

  heroCards: [
    { value: '1,925', label: 'golden eval cases across 16 issuers, built at Thriftstone', href: '#experience', tone: 'blue' },
    { value: '5', label: 'merged PRs in GRASS GIS. Resampler up to ~4.7× speedup', href: '#open-source', tone: 'warm' },
    { value: '6 · 2 · 1 · 1', label: 'SourceMind eval: correct, correct refusals, wrong, false refusal', href: '#projects', tone: 'violet' },
    { value: '~1.4 s', label: 'to first spoken response in AI Persona Chat (manual test)', href: '#projects', tone: 'blue' },
  ],

  // The internship ended in Oct 2026, so the status line above is a fact, not "currently".
  availability: undefined,
  todos: [
    'TODO(vinay): add an availability line (e.g. looking for roles from …) or leave it out. Set `availability` in src/data/profile.ts.',
  ],
};
