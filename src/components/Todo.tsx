import { Inline } from './Inline';

/** Visible marker for anything Vinay still has to supply. Listed by `npm run todos`. */
export function Todos({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <ul className="todos">
      {items.map((t) => (
        <li key={t} className="todo">
          <Inline text={t} />
        </li>
      ))}
    </ul>
  );
}
