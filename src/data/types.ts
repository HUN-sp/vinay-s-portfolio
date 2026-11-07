/**
 * Content types. Every string below may contain `backticks` for inline code.
 * Anything not yet known is written as "TODO(vinay): ..." — it renders as a
 * visible chip on the page and is listed by `npm run todos`.
 */

export type Tone = 'blue' | 'warm' | 'violet';

export type LinkKind = 'repo' | 'live' | 'doc' | 'pr' | 'external';

export interface Link {
  label: string;
  href: string;
  kind?: LinkKind;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  /** One-line positioning shown under the name. */
  positioning: string;
  /** Optional short status line shown above the name. Leave undefined to hide. */
  status?: string;
  education: { school: string; degree: string; years: string; cgpa: string };
  email: string;
  links: {
    resume: string;
    github: string;
    linkedin: string;
    leetcode: string;
  };
  /** Hero headline: "{prefix} <rotating word> {suffix}". */
  tagline: { prefix: string; words: string[]; suffix: string };
  /** Floating proof-point cards around the hero. Each links to the section that backs it up. */
  heroCards: { value: string; label: string; href: string; tone: Tone }[];
  /** Optional availability line. Leave undefined to hide. */
  availability?: string;
  todos?: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  /** One line under the role. */
  summary: string;
  bullets: string[];
  /** Short skill/topic chips. Only terms that appear in the bullets. */
  tags: string[];
}

export interface PullRequest {
  number: number;
  title: string;
  milestone: string;
  summary: string;
  href: string;
}

export interface OpenSource {
  project: string;
  org: string;
  stack: string[];
  headlineStat: Stat;
  pullRequests: PullRequest[];
  todos?: string[];
}

export interface CaseStudy {
  id: string;
  tone: Tone;
  title: string;
  tagline: string;
  problem: string;
  approach: string[];
  stats?: Stat[];
  results: string[];
  /** What failed, what was learned, what I'd change. */
  limits: string[];
  stack: string[];
  links: Link[];
  todos?: string[];
}

export interface CompactProject {
  id: string;
  title: string;
  tagline: string;
  body: string;
  limits: string;
  stack: string[];
  links: Link[];
  todos?: string[];
}

export interface Achievement {
  title: string;
  event: string;
  body: string[];
  links: Link[];
  todos?: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface About {
  paragraphs: string[];
  todos?: string[];
}

export interface SectionCopy {
  id: string;
  /** Label in the header navigation. */
  nav: string;
  title: string;
  /** Italic line under the title. */
  lead: string;
}
