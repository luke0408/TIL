import {useEffect, useMemo, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';

import {ListFooter} from '../components/list-footer';
import {MobileBottomNav} from '../components/mobile-bottom-nav';
import {TopHeader} from '../components/top-header';
import {docs, getPopularTags} from '../lib/docs';

const popularTags = getPopularTags(6).map((tag) => `#${tag}`);

export function ListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromUrl = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(queryFromUrl);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    setQuery(queryFromUrl);
  }, [queryFromUrl]);

  const filteredDocs = useMemo(() => {
    return docs.filter((note) => {
      const hasTag = selectedTag ? `#${note.tag}` === selectedTag : true;
      const normalizedQuery = query.trim().toLowerCase();
      const hasQuery = normalizedQuery
        ? `${note.title} ${note.description} ${note.tag} ${note.tags.join(' ')} ${note.category} ${note.subcategory ?? ''}`
            .toLowerCase()
            .includes(normalizedQuery)
        : true;

      return hasTag && hasQuery;
    });
  }, [query, selectedTag]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background-light pb-24 font-display text-slate-900 dark:bg-background-dark dark:text-slate-100 lg:pb-0">
      <TopHeader maxWidthClassName="h-16 max-w-5xl px-6" />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-12" aria-labelledby="list-hero-heading">
          <h1
            className="text-4xl font-extrabold tracking-tight text-background-dark dark:text-white sm:text-5xl"
            id="list-hero-heading">
            Today I Learned
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A personal archive of micro-knowledge, coding snippets, and technical discoveries.
          </p>
        </section>

        <section className="mb-12 space-y-6" aria-labelledby="list-filter-heading">
          <h2 className="sr-only" id="list-filter-heading">
            Filter notes
          </h2>
          <label className="group relative block" htmlFor="note-search-input">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <span className="material-symbols-outlined text-gray-400">search</span>
            </span>
            <input
              className="block w-full rounded-xl border-0 py-4 pl-12 pr-4 text-background-dark ring-1 ring-inset ring-gray-200"
              id="note-search-input"
              placeholder={`Search through ${docs.length} notes...`}
              type="text"
              value={query}
              onChange={(event) => {
                const nextQuery = event.target.value;
                setQuery(nextQuery);

                if (nextQuery.trim()) {
                  setSearchParams({q: nextQuery});
                } else {
                  setSearchParams({});
                }
              }}
            />
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-bold uppercase tracking-wider text-gray-500">
              Popular Tags:
            </span>
            {popularTags.map((tag, index) => (
              <button
                className={
                  selectedTag === tag || (!selectedTag && index === 0)
                    ? 'rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white whitespace-nowrap'
                    : 'rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary whitespace-nowrap'
                }
                key={tag}
                type="button"
                onClick={() => setSelectedTag((prev) => (prev === tag ? null : tag))}>
                {tag}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-6" aria-label="Note list">
          {filteredDocs.map((note) => (
            <Link
              key={note.id}
              className="group relative flex flex-col items-start rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md active:scale-[0.995] active:opacity-95 dark:border-gray-800 dark:bg-background-dark"
              to={`/notes/${note.slug}`}>
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500 dark:text-gray-400">{note.dateLabel}</time>
                <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                  #{note.tag}
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold leading-6 text-background-dark transition-colors group-hover:text-primary dark:text-white">
                {note.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                {note.description}
              </p>
              <span className="mt-6 flex items-center gap-4 text-sm font-medium text-primary">Read more</span>
            </Link>
          ))}

          {filteredDocs.length === 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
              No notes matched your filters.
            </div>
          )}
        </section>
      </main>

      <ListFooter />
      <MobileBottomNav />
    </div>
  );
}
