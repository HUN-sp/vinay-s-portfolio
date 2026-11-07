import { about, profile } from '../data';
import { A } from './ExternalLink';
import { Section } from './Section';
import { Inline } from './Inline';
import { Todos } from './Todo';

export function Contact() {
  const { email, links } = profile;
  return (
    <Section id="contact" index="06" title="About and contact">
      <div className="about" data-reveal>
        {about.paragraphs.map((p) => (
          <p key={p}>
            <Inline text={p} />
          </p>
        ))}
        <Todos items={about.todos} />
      </div>
      <div className="contact" data-reveal>
        <p className="contact__label">Email is the fastest way to reach me.</p>
        <a className="contact__email" href={`mailto:${email}`}>
          {email}
        </a>
        <ul className="contact__links">
          <li>
            <A href={links.resume}>Resume (PDF)</A>
          </li>
          <li>
            <A href={links.github}>GitHub</A>
          </li>
          <li>
            <A href={links.linkedin}>LinkedIn</A>
          </li>
          <li>
            <A href={links.leetcode}>LeetCode</A>
          </li>
        </ul>
      </div>
    </Section>
  );
}
