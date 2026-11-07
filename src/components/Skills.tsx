import { skills } from '../data';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills" index="05" title="Skills">
      <dl className="skills" data-reveal>
        {skills.map((g) => (
          <div key={g.label} className="skills__row">
            <dt>{g.label}</dt>
            <dd>{g.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
