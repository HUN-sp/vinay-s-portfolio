import type { ReactNode } from 'react';
import { sectionById } from '../data';

interface Props {
  id: string;
  /** Background band: sky gradient, plain, or dark. */
  tone?: 'sky' | 'plain' | 'dark';
  children: ReactNode;
}

export function Section({ id, tone = 'plain', children }: Props) {
  const { title, lead } = sectionById(id);
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={`${id}-title`}>
      {tone === 'dark' ? (
        <svg className="section__wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 90V38C180 8 340 0 520 22c200 24 330 52 560 40 150-8 250-34 360-52v80z" />
        </svg>
      ) : null}
      <div className="container">
        <header className="section__head" data-reveal>
          <h2 id={`${id}-title`}>{title}</h2>
          <p className="section__lead">{lead}</p>
        </header>
        {children}
      </div>
    </section>
  );
}
