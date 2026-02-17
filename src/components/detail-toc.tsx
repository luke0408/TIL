import {Link} from 'react-router-dom';

import {getDocsByCategoryOrder} from '../lib/docs';

type DetailTocProps = {
  currentSlug: string;
};

const orderedDocs = getDocsByCategoryOrder();

export function DetailToc({currentSlug}: DetailTocProps) {
  let previousCategory = '';

  return (
    <aside className="sticky top-0 hidden h-screen w-64 flex-col border-l border-slate-200 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/50 xl:flex">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
        Notes order
      </h3>
      <ul className="space-y-2 overflow-y-auto pr-1 text-sm">
        {orderedDocs.map((doc) => {
          const showCategory = previousCategory !== doc.category;
          previousCategory = doc.category;

          return (
            <li key={doc.slug}>
              {showCategory && (
                <p className="mb-1 mt-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {doc.category}
                </p>
              )}
              <Link
                className={
                  doc.slug === currentSlug
                    ? 'block truncate rounded-md bg-primary/10 px-2 py-1.5 font-medium text-primary'
                    : 'block truncate rounded-md px-2 py-1.5 text-slate-500 transition-colors hover:text-primary dark:text-slate-400'
                }
                to={`/notes/${doc.slug}`}>
                {doc.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
