import { experience } from '../data';
import { CalendarIcon, PinIcon } from './Icons';
import { Inline } from './Inline';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" tone="sky">
      <div className="stack-y">
        {experience.map((e) => (
          <article key={e.company + e.period} className="xp" data-reveal>
            <div className="xp__main">
              <div className="xp__who">
                <span className="xp__tile" aria-hidden="true">
                  {e.company[0]}
                </span>
                <div>
                  <h3>{e.company}</h3>
                  <p className="xp__role">{e.role}</p>
                </div>
              </div>
              <ul className="xp__meta">
                <li>
                  <CalendarIcon /> {e.period}
                </li>
                <li>
                  <PinIcon /> {e.location}
                </li>
              </ul>
              <p className="xp__summary">{e.summary}</p>
            </div>
            <div className="xp__card">
              <h4>Key achievements</h4>
              <ul className="bullets">
                {e.bullets.map((b) => (
                  <li key={b}>
                    <Inline text={b} />
                  </li>
                ))}
              </ul>
              <h4>Topics</h4>
              <ul className="chips">
                {e.tags.map((t) => (
                  <li key={t} className="chip--blue">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
