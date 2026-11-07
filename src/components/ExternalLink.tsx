import type { ReactNode } from 'react';
import type { Link } from '../data';
import { ArrowIcon } from './Icons';

const isExternal = (href: string) => /^https?:\/\//.test(href);

export function A({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  if (!isExternal(href)) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function LinkPill({ link }: { link: Link }) {
  return (
    <A href={link.href} className="pill">
      {link.label}
      <ArrowIcon />
    </A>
  );
}
