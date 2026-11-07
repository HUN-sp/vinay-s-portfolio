import type { ReactNode } from 'react';

interface Props {
  id: string;
  index: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
}

export function Section({ id, index, title, lead, children }: Props) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container section__grid">
        <header className="section__head" data-reveal>
          <p className="eyebrow" aria-hidden="true">
            {index}
          </p>
          <h2 id={`${id}-title`}>{title}</h2>
          {lead ? <p className="section__lead">{lead}</p> : null}
        </header>
        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}
