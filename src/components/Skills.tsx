import { skills } from '../data';
import { Section } from './Section';

const TONES = ['blue', 'warm', 'violet', 'blue'];

export function Skills() {
  return (
    <Section id="skills" tone="sky">
      <div className="skills" data-reveal>
        {skills.map((g, n) => (
          <section key={g.label} className="skills__card">
            <h3>{g.label}</h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s} className={`chip--${TONES[n % TONES.length]}`}>
                  {s}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
