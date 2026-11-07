import { useEffect, useLayoutEffect, useRef, useState } from 'react';

/**
 * Cycles through words in place. The container animates to the width of the
 * current word, so the sentence around it always reads naturally. Under
 * prefers-reduced-motion it stays on the first word; screen readers get the
 * full list either way.
 */
export function Rotator({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [width, setWidth] = useState<number>();
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => window.clearInterval(t);
  }, [words.length]);

  useLayoutEffect(() => {
    const measure = () => {
      const el = refs.current[i];
      if (el) setWidth(el.getBoundingClientRect().width);
    };
    measure();
    // Re-measure once web fonts have loaded, since they change the word widths.
    document.fonts?.ready.then(measure);
  }, [i]);

  return (
    <>
      <span className="sr-only">{words.join(', ')}</span>
      <span className="rot" aria-hidden="true" style={width ? { width } : undefined}>
        {words.map((w, n) => (
          <span
            key={w}
            ref={(el) => {
              refs.current[n] = el;
            }}
            className={n === i ? 'rot__word is-active' : 'rot__word'}
          >
            {w}
          </span>
        ))}
      </span>
    </>
  );
}
