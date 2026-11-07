import type { ReactNode } from 'react';
import { caseStudies, compactProjects } from '../data';
import type { CaseStudy, CompactProject } from '../data';
import { LinkPill } from './ExternalLink';
import { Inline } from './Inline';
import { Section } from './Section';
import { Todos } from './Todo';

function Note({ label, tone, children }: { label: string; tone?: 'warm'; children: ReactNode }) {
  return (
    <section className={tone === 'warm' ? 'note note--warm' : 'note'}>
      <h4>{label}</h4>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="bullets">
      {items.map((t) => (
        <li key={t}>
          <Inline text={t} />
        </li>
      ))}
    </ul>
  );
}

function Stack({ items, tone }: { items: string[]; tone: string }) {
  return (
    <ul className="chips" aria-label="Stack">
      {items.map((s) => (
        <li key={s} className={`chip--${tone}`}>
          {s}
        </li>
      ))}
    </ul>
  );
}

function CaseStudyCard({ p }: { p: CaseStudy }) {
  return (
    <article id={p.id} className={`cs cs--${p.tone}`} data-reveal aria-labelledby={`${p.id}-h`}>
      <header className="cs__hero">
        <div>
          <h3 id={`${p.id}-h`}>{p.title}</h3>
          <p className="cs__tagline">{p.tagline}</p>
          <div className="pills">
            {p.links.map((l) => (
              <LinkPill key={l.href} link={l} />
            ))}
          </div>
        </div>
        {p.stats ? (
          <dl className="stats">
            {p.stats.map((s) => (
              <div key={s.label} className="stat">
                <dd>{s.value}</dd>
                <dt>{s.label}</dt>
              </div>
            ))}
          </dl>
        ) : null}
      </header>

      <div className="cs__grid cs__grid--4">
        <Note label="Problem">
          <p>
            <Inline text={p.problem} />
          </p>
        </Note>
        <Note label="Approach">
          <List items={p.approach} />
        </Note>
        <Note label="Results">
          <List items={p.results} />
        </Note>
        <Note label="What failed, and what I’d change" tone="warm">
          <List items={p.limits} />
        </Note>
      </div>
      <Stack items={p.stack} tone={p.tone} />
      <Todos items={p.todos} />
    </article>
  );
}

function CompactCard({ p }: { p: CompactProject }) {
  return (
    <article id={p.id} className="cs cs--compact" data-reveal aria-labelledby={`${p.id}-h`}>
      <header className="cs__hero cs__hero--compact">
        <div>
          <h3 id={`${p.id}-h`}>{p.title}</h3>
          <p className="cs__tagline">{p.tagline}</p>
          <div className="pills">
            {p.links.map((l) => (
              <LinkPill key={l.href} link={l} />
            ))}
          </div>
        </div>
      </header>
      <div className="cs__grid">
        <Note label="What it is">
          <p>
            <Inline text={p.body} />
          </p>
        </Note>
        <Note label="Limits" tone="warm">
          <p>
            <Inline text={p.limits} />
          </p>
        </Note>
      </div>
      <Stack items={p.stack} tone="blue" />
      <Todos items={p.todos} />
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" tone="sky">
      <div className="stack-y stack-y--lg">
        {caseStudies.map((p) => (
          <CaseStudyCard key={p.id} p={p} />
        ))}
        {compactProjects.map((p) => (
          <CompactCard key={p.id} p={p} />
        ))}
      </div>
    </Section>
  );
}
