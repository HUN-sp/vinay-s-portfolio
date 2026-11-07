import { useEffect, useState } from 'react';

/**
 * Tracks which section is "current" and overall scroll progress (0–100).
 * One passive scroll listener, throttled with requestAnimationFrame.
 */
export function useScrollSpy(ids: string[]) {
  const [state, setState] = useState({ active: ids[0], progress: 0 });

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(100, Math.max(0, Math.round((window.scrollY / max) * 100))) : 0;
      const line = window.innerHeight * 0.35;
      let active = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) active = id;
      }
      // At the very bottom the last section is current even if it is short.
      if (max > 0 && window.scrollY >= max - 4) active = ids[ids.length - 1];
      setState((s) => (s.active === active && s.progress === progress ? s : { active, progress }));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ids]);

  return state;
}
