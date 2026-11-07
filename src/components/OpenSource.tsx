import { openSource } from '../data';
import { A } from './ExternalLink';
import { ArrowIcon } from './Icons';
import { Inline } from './Inline';
import { Section } from './Section';
import { Todos } from './Todo';

export function OpenSource() {
  const o = openSource;
  return (
    <Section id="open-source" tone="plain">
      <div className="oss__top" data-reveal>
        <p className="bigstat">
          <span className="bigstat__value">{o.headlineStat.value}</span>
          <span className="bigstat__label">
            <Inline text={o.headlineStat.label} />
          </span>
        </p>
        <div>
          <p className="oss__proj">
            {o.project} <span>({o.org})</span>
          </p>
          <ul className="chips" aria-label="Stack">
            {o.stack.map((s) => (
              <li key={s} className="chip--warm">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ol className="prs">
        {o.pullRequests.map((pr, n) => (
          <li key={pr.number} className={n === 0 ? 'pr pr--wide' : 'pr'} data-reveal>
            <div className="pr__meta">
              <A href={pr.href} className="pr__num">
                #{pr.number} <ArrowIcon />
              </A>
              <span className="pr__milestone">{pr.milestone}</span>
            </div>
            <h3 className="pr__title">
              <Inline text={pr.title} />
            </h3>
            <p>
              <Inline text={pr.summary} />
            </p>
          </li>
        ))}
      </ol>
      <Todos items={o.todos} />
    </Section>
  );
}
