import {useEffect, useMemo, useRef} from 'react';
import {Link} from 'react-router-dom';

import {HomeContactFooter} from '../components/home-contact-footer';
import {MobileBottomNav} from '../components/mobile-bottom-nav';
import {TopHeader} from '../components/top-header';
import {docs} from '../lib/docs';

function intensityToneClassName(index: number) {
  if (index % 4 === 0) return 'bg-primary font-semibold text-white';
  if (index % 4 === 1) return 'bg-primary/60 font-medium text-white';
  if (index % 4 === 2) return 'bg-primary/20 font-medium text-primary';

  return 'bg-primary/10 font-medium text-primary/80';
}

function createIntensityRows() {
  const tagSet = new Set<string>();
  for (const doc of docs) {
    if (doc.tag) {
      tagSet.add(doc.tag);
    }
  }

  const tags = Array.from(tagSet);
  const rowCount = 3;
  const minimumTagsPerRow = 10;
  const rows = Array.from({length: rowCount}, () => [] as string[]);

  tags.forEach((tag, index) => {
    rows[index % rowCount]!.push(tag);
  });

  return rows.map((row) => {
    if (row.length === 0) {
      return row;
    }

    const repeated = [...row];
    let pointer = 0;
    while (repeated.length < minimumTagsPerRow) {
      repeated.push(row[pointer % row.length]!);
      pointer += 1;
    }

    return repeated;
  });
}

const recentDocs = docs.slice(0, 6);
const intensityRows = createIntensityRows();

function IntensityScrollableRow({row, rowIndex}: {row: string[]; rowIndex: number}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const repeatedRow = useMemo(() => [...row, ...row, ...row], [row]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    const loopWidth = node.scrollWidth / 3;
    node.scrollLeft = loopWidth;
  }, [repeatedRow]);

  const handleScroll = () => {
    const node = scrollRef.current;
    if (!node) return;

    const loopWidth = node.scrollWidth / 3;
    if (loopWidth <= 0) return;

    if (node.scrollLeft <= loopWidth * 0.3) {
      node.scrollLeft += loopWidth;
    }

    if (node.scrollLeft >= loopWidth * 1.7) {
      node.scrollLeft -= loopWidth;
    }
  };

  return (
    <div
      ref={scrollRef}
      className="hide-scrollbar overflow-x-auto pb-1"
      onScroll={handleScroll}>
      <div className={`intensity-row intensity-row--${rowIndex} flex w-max gap-2 ${rowIndex === 1 ? 'md:ml-4' : ''}`}>
        {repeatedRow.map((tag, tagIndex) => (
          <button
            aria-label={`Open tag ${tag}`}
            className={`intensity-chip inline-flex items-center whitespace-nowrap rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 ${intensityToneClassName(tagIndex)}`}
            key={`${tag}-${tagIndex}`}
            type="button">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-light pb-24 font-display text-slate-900 dark:bg-background-dark dark:text-slate-100 lg:pb-0">
      <TopHeader maxWidthClassName="h-16 max-w-5xl px-6" />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
          <section className="mb-20 max-w-2xl">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Documenting the daily journey of a developer.
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Welcome to my technical diary. This site is a minimalist collection of small wins,
              architectural deep-dives, and snippets gathered while building software.
            </p>
          </section>

          <section className="mb-20" aria-labelledby="recent-notes-heading">
            <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white" id="recent-notes-heading">
              Recent Today I Learneds
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {recentDocs.map((note) => (
                <article
                  key={note.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-primary/10 bg-white transition-all hover:shadow-lg hover:shadow-primary/5 dark:bg-slate-900/50">
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-3 inline-flex w-fit items-center self-start whitespace-nowrap rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {note.tag}
                    </span>
                    <h3 className="mb-2 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-primary dark:text-white">
                      <Link to={`/notes/${note.slug}`}>{note.title}</Link>
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-slate-600 dark:text-slate-400">
                      {note.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-800">
                      <span>{note.dateLabel}</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined !text-[14px]">schedule</span>
                        {note.readTimeLabel}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-20" aria-labelledby="intensity-heading">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white" id="intensity-heading">
              Learning Intensity
            </h2>
            <p className="mb-8 mt-1 text-sm text-slate-500">
              Visualization of tag frequency over the last month.
            </p>
            <div className="overflow-hidden pb-4 md:mx-auto md:max-w-[860px]">
              <div className="intensity-marquee flex flex-col gap-3">
                {intensityRows.map((row, rowIndex) => (
                  <IntensityScrollableRow key={`row-${rowIndex}`} row={row} rowIndex={rowIndex} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <HomeContactFooter />
      <MobileBottomNav />
    </div>
  );
}
