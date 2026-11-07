import { achievement } from '../data';
import { LinkPill } from './ExternalLink';
import { Section } from './Section';
import { Todos } from './Todo';

export function Achievement() {
  const a = achievement;
  return (
    <Section id="achievement" index="04" title="Achievement">
      <article className="entry" data-reveal>
        <header className="entry__head">
          <div>
            <h3>{a.title}</h3>
            <p className="entry__org">{a.event}</p>
          </div>
        </header>
        {a.body.map((p) => (
          <p key={p} className="entry__p">
            {p}
          </p>
        ))}
        {a.links.length ? (
          <div className="pills">
            {a.links.map((l) => (
              <LinkPill key={l.href} link={l} />
            ))}
          </div>
        ) : null}
        <Todos items={a.todos} />
      </article>
    </Section>
  );
}
