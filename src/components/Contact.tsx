import { about, profile } from '../data';
import { A } from './ExternalLink';
import { Inline } from './Inline';
import { MailIcon } from './Icons';
import { Section } from './Section';
import { Todos } from './Todo';

export function Contact() {
  const { email, links } = profile;
  return (
    <Section id="contact" tone="dark">
      <div className="contact">
        <div className="about" data-reveal>
          {about.paragraphs.map((p) => (
            <p key={p}>
              <Inline text={p} />
            </p>
          ))}
          <Todos items={about.todos} />
        </div>
        <div className="contact__card" data-reveal>
          <a className="contact__email" href={`mailto:${email}`}>
            <MailIcon /> {email}
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
      </div>
    </Section>
  );
}
