import type { SectionCopy } from './types';

export const sections: SectionCopy[] = [
  {
    id: 'experience',
    nav: 'Experience',
    title: 'Experience',
    lead: 'Built the evaluation for an AI research agent, then fixed the defects it found.',
  },
  {
    id: 'open-source',
    nav: 'Open source',
    title: 'Open source',
    lead: 'Five merged pull requests into GRASS GIS, in milestones 8.5.0 and 8.6.0. Each one links to its review history.',
  },
  {
    id: 'projects',
    nav: 'Projects',
    title: 'Projects',
    lead: 'What I measured, what failed, and what I’d change. Every claim links to where you can check it.',
  },
  { id: 'achievement', nav: 'Achievement', title: 'Achievement', lead: 'A team result, described as it was.' },
  { id: 'skills', nav: 'Skills', title: 'Skills', lead: 'Grouped, with no ratings.' },
  {
    id: 'contact',
    nav: 'Contact',
    title: 'About and contact',
    lead: 'Email is the fastest way to reach me.',
  },
];

export const sectionById = (id: string): SectionCopy => {
  const s = sections.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown section: ${id}`);
  return s;
};
