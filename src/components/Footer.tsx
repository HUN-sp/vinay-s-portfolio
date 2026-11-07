import { profile } from '../data';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          <a href="#top">Back to top ↑</a>
        </p>
      </div>
    </footer>
  );
}
