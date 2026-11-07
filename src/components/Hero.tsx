import { profile } from '../data';
import { A } from './ExternalLink';
import { Inline } from './Inline';
import { MailIcon } from './Icons';
import { Rotator } from './Rotator';

export function Hero() {
  const { name, positioning, status, links, email, heroCards, tagline, education, availability } = profile;
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <figure className="hero__portrait">
        <img
          src="/portrait.webp"
          width="480"
          height="480"
          alt={`Portrait of ${name}`}
          fetchPriority="high"
          decoding="async"
        />
      </figure>

      <div className="hero__center">
        {status ? (
          <p className="status" data-reveal>
            <span className="status__dot" aria-hidden="true" />
            {status}
          </p>
        ) : null}
        <h1 id="hero-title" data-reveal>
          {name}
        </h1>
        <p className="hero__tagline" data-reveal>
          {tagline.prefix} <Rotator words={tagline.words} /> {tagline.suffix}
        </p>
        <p className="hero__positioning" data-reveal>
          <Inline text={positioning} />
        </p>
        <div className="hero__actions" data-reveal>
          <A href={links.resume} className="btn btn--primary">
            Resume (PDF)
          </A>
          <A href={links.github} className="btn btn--outline">
            GitHub
          </A>
          <A href={links.linkedin} className="btn btn--outline">
            LinkedIn
          </A>
          <a href={`mailto:${email}`} className="btn btn--warm">
            <MailIcon /> Email me
          </a>
        </div>
        <p className="hero__edu" data-reveal>
          {education.degree}, {education.school}, {education.years}. CGPA {education.cgpa}.
          {availability ? ` ${availability}` : ''}
        </p>
      </div>

      <ul className="hero__cards" aria-label="Highlights">
        {heroCards.map((c, n) => (
          <li key={c.value} className={`fc fc--${n + 1}`}>
            <a href={c.href} className={`fc__card fc__card--${c.tone}`}>
              <span className="fc__value">{c.value}</span>
              <span className="fc__label">{c.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
