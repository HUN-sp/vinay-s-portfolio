import { useTheme } from '../hooks/useTheme';
import { profile } from '../data';

const NAV = [
  { href: '#experience', label: 'Experience' },
  { href: '#open-source', label: 'Open source' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="brand">
          <span className="brand__mark" aria-hidden="true">
            VC
          </span>
          <span className="brand__name">{profile.name}</span>
        </a>
        <nav aria-label="Sections" className="nav">
          <ul>
            {NAV.map((n) => (
              <li key={n.href} className={n.href === '#contact' ? 'nav__keep' : undefined}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className="icon-btn" onClick={toggle} aria-label={`Switch to ${next} theme`}>
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
