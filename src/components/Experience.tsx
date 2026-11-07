import { experience } from '../data';
import { Inline } from './Inline';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" index="01" title="Experience">
      {experience.map((e) => (
        <article key={e.company + e.period} className="entry" data-reveal>
          <header className="entry__head">
            <div>
              <h3>{e.role}</h3>
              <p className="entry__org">
                {e.company} <span aria-hidden="true">·</span> {e.location}
              </p>
            </div>
            <p className="entry__period">{e.period}</p>
          </header>
          <ul className="bullets">
            {e.bullets.map((b) => (
              <li key={b}>
                <Inline text={b} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  );
}
