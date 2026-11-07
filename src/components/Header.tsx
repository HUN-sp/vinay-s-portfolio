import { useTheme } from '../hooks/useTheme';
import { profile, sections } from '../data';
import { MoonIcon, SunIcon } from './Icons';

const NAV = sections.filter((s) => s.id !== 'achievement');

export function Header({ active }: { active: string }) {
  const { theme, toggle } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="brand">
          <span className="brand__mark" aria-hidden="true">
            V
          </span>
          <span className="brand__name">{profile.name}</span>
        </a>
        <nav aria-label="Sections" className="nav">
          <ul>
            {NAV.map((n) => (
              <li key={n.id} className={n.id === 'contact' ? 'nav__keep' : undefined}>
                <a href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}>
                  {n.nav}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className="icon-btn" onClick={toggle} aria-label={`Switch to ${next} theme`}>
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}
