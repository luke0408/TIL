import type {RefObject} from 'react';
import {Link} from 'react-router-dom';

import type {DocItem} from '../../lib/docs';

type HeaderSearchPanelProps = {
  docsCount: number;
  query: string;
  onQueryChange: (value: string) => void;
  items: DocItem[];
  onSelect: () => void;
  onSubmitQuery: () => void;
  panelRef?: RefObject<HTMLDivElement | null>;
};

export function HeaderSearchPanel({
  docsCount,
  query,
  onQueryChange,
  items,
  onSelect,
  onSubmitQuery,
  panelRef,
}: HeaderSearchPanelProps) {
  return (
    <div
      ref={panelRef}
      className="absolute right-0 top-12 w-[min(92vw,26rem)] rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
      <label className="group relative block" htmlFor="header-search-input">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="material-symbols-outlined text-gray-400">search</span>
        </span>
        <input
          autoFocus
          className="block w-full rounded-xl border-0 bg-slate-50 py-3 pl-10 pr-3 text-sm text-background-dark ring-1 ring-inset ring-gray-200"
          id="header-search-input"
          placeholder={`Search through ${docsCount} notes...`}
          type="text"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              onSubmitQuery();
            }
          }}
        />
      </label>
      <div className="mt-2 max-h-72 overflow-auto">
        {items.length === 0 && (
          <div className="px-3 py-2 text-sm text-slate-500">No notes found.</div>
        )}
        {items.map((note) => (
          <Link
            key={note.id}
            className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary"
            to={`/notes/${note.slug}`}
            onClick={onSelect}>
            {note.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
