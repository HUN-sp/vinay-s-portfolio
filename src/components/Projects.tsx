import type { ReactNode } from 'react';
import { caseStudies, compactProjects } from '../data';
import type { CaseStudy, CompactProject } from '../data';
import { LinkPill } from './ExternalLink';
import { Inline } from './Inline';
import { Section } from './Section';
import { Todos } from './Todo';

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="chips" aria-label="Stack">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="cs__row">
      <h4 className="cs__label">{label}</h4>
      <div className="cs__content">{children}</div>
    </div>
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

function CaseStudyCard({ p }: { p: CaseStudy }) {
  return (
    <article id={p.id} className="cs" data-reveal aria-labelledby={`${p.id}-h`}>
      <header className="cs__head">
        <h3 id={`${p.id}-h`}>{p.title}</h3>
        <p className="cs__tagline">{p.tagline}</p>
        <div className="pills">
          {p.links.map((l) => (
            <LinkPill key={l.href} link={l} />
          ))}
        </div>
      </header>

      {p.stats ? (
        <dl className="stats">
          {p.stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <Row label="Problem">
        <p>
          <Inline text={p.problem} />
        </p>
      </Row>
      <Row label="Approach">
        <List items={p.approach} />
      </Row>
      <Row label="Results">
        <List items={p.results} />
      </Row>
      <Row label="What failed, and what I’d change">
        <List items={p.limits} />
      </Row>
      <Row label="Stack">
        <Stack items={p.stack} />
      </Row>
      <Todos items={p.todos} />
    </article>
  );
}

function CompactCard({ p }: { p: CompactProject }) {
  return (
    <article id={p.id} className="cs cs--compact" data-reveal aria-labelledby={`${p.id}-h`}>
      <header className="cs__head">
        <h3 id={`${p.id}-h`}>{p.title}</h3>
        <p className="cs__tagline">{p.tagline}</p>
        <div className="pills">
          {p.links.map((l) => (
            <LinkPill key={l.href} link={l} />
          ))}
        </div>
      </header>
      <Row label="What it is">
        <p>
          <Inline text={p.body} />
        </p>
      </Row>
      <Row label="Limits">
        <p>
          <Inline text={p.limits} />
        </p>
      </Row>
      <Row label="Stack">
        <Stack items={p.stack} />
      </Row>
      <Todos items={p.todos} />
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      lead="Each one shows what I measured, what failed and what I’d change. Every claim links to the repo or write-up it comes from."
    >
      <div className="stack-y">
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
