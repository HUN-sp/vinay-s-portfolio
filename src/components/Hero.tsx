import { profile } from '../data';
import { A } from './ExternalLink';
import { Inline } from './Inline';
import { Todos } from './Todo';

export function Hero() {
  const { name, positioning, status, links, email, highlights, education, availability, todos } = profile;
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="status" data-reveal>
            <span className="status__dot" aria-hidden="true" />
            {status}
          </p>
          <h1 id="hero-title" data-reveal>
            {name}
          </h1>
          <p className="hero__positioning" data-reveal>
            <Inline text={positioning} />
          </p>
          <p className="hero__edu" data-reveal>
            {education.degree}, {education.school}, {education.years}. CGPA {education.cgpa}.
            {availability ? ` ${availability}` : ''}
          </p>
          <div className="hero__actions" data-reveal>
            <A href={links.resume} className="btn btn--primary">
              Resume (PDF)
            </A>
            <A href={links.github} className="btn">
              GitHub
            </A>
            <A href={links.linkedin} className="btn">
              LinkedIn
            </A>
            <a href={`mailto:${email}`} className="btn">
              Email
            </a>
          </div>
          <Todos items={todos} />
        </div>
        <figure className="hero__portrait" data-reveal>
          <img
            src="/portrait.webp"
            width="480"
            height="480"
            alt={`Portrait of ${name}`}
            fetchPriority="high"
            decoding="async"
          />
        </figure>
      </div>

      <div className="container">
        <ul className="highlights" aria-label="Highlights">
          {highlights.map((h) => (
            <li key={h.href} data-reveal>
              <a href={h.href} className="highlight">
                <span className="highlight__value">{h.value}</span>
                <span className="highlight__label">{h.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
