/** Decorative scroll indicator on wide screens. The header nav is the accessible navigation. */
export function ProgressRail({ ids, active, progress }: { ids: string[]; active: string; progress: number }) {
  return (
    <div className="rail" aria-hidden="true">
      <div className="rail__track">
        <div className="rail__fill" style={{ height: `${progress}%` }} />
      </div>
      <ul className="rail__dots">
        {ids.map((id) => (
          <li key={id} className={id === active ? 'is-active' : undefined} />
        ))}
      </ul>
      <p className="rail__pct">{progress}%</p>
    </div>
  );
}
