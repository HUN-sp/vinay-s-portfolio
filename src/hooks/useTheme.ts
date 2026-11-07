import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

function read(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  // Sync with what the inline script in index.html already applied.
  useEffect(() => setTheme(read()), []);

  const toggle = useCallback(() => {
    const next: Theme = read() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage can be blocked; the toggle still works for this visit */
    }
    setTheme(next);
  }, []);

  return { theme, toggle };
}
