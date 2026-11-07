import { openSource } from '../data';
import { A } from './ExternalLink';
import { Inline } from './Inline';
import { Section } from './Section';
import { Todos } from './Todo';

export function OpenSource() {
  const o = openSource;
  return (
    <Section id="open-source" index="02" title="Open source" lead={<Inline text={o.intro} />}>
      <article className="entry" data-reveal>
        <header className="entry__head">
          <div>
            <h3>
              {o.project} <span className="entry__org">({o.org})</span>
            </h3>
            <ul className="chips" aria-label="Stack">
              {o.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <p className="bigstat">
            <span className="bigstat__value">{o.headlineStat.value}</span>
            <span className="bigstat__label">
              <Inline text={o.headlineStat.label} />
            </span>
          </p>
        </header>
        <ol className="prs">
          {o.pullRequests.map((pr) => (
            <li key={pr.number} className="pr">
              <div className="pr__meta">
                <A href={pr.href} className="pr__num">
                  #{pr.number}
                </A>
                <span className="pr__milestone">{pr.milestone}</span>
              </div>
              <div>
                <h4 className="pr__title">
                  <Inline text={pr.title} />
                </h4>
                <p>
                  <Inline text={pr.summary} />
                </p>
              </div>
            </li>
          ))}
        </ol>
        <Todos items={o.todos} />
      </article>
    </Section>
  );
}
