import { achievement } from '../data';
import { LinkPill } from './ExternalLink';
import { Section } from './Section';
import { Todos } from './Todo';

export function Achievement() {
  const a = achievement;
  return (
    <Section id="achievement" tone="plain">
      <article className="banner" data-reveal>
        <p className="banner__big">{a.title}</p>
        <div className="banner__text">
          <h3>{a.event}</h3>
          {a.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {a.links.length ? (
            <div className="pills">
              {a.links.map((l) => (
                <LinkPill key={l.href} link={l} />
              ))}
            </div>
          ) : null}
          <Todos items={a.todos} />
        </div>
      </article>
    </Section>
  );
}
