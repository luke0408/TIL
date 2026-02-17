import mermaid from 'mermaid';
import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import {DetailSidebar} from '../components/detail-sidebar';
import {DetailToc} from '../components/detail-toc';
import {MobileBottomNav} from '../components/mobile-bottom-nav';
import {getAdjacentDocs, getDocBySlug} from '../lib/docs';

type GithubProfile = {
  name: string;
  login: string;
  avatarUrl: string;
  htmlUrl: string;
};

const GITHUB_USERNAME = 'luke0408';

export function DetailPage() {
  const {slug} = useParams();
  const note = slug ? getDocBySlug(slug) : undefined;
  const [profile, setProfile] = useState<GithubProfile>({
    name: 'SunKyu Choi',
    login: GITHUB_USERNAME,
    avatarUrl: '',
    htmlUrl: `https://github.com/${GITHUB_USERNAME}`,
  });

  const adjacent = slug ? getAdjacentDocs(slug) : {previous: undefined, next: undefined};

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral',
      look: 'handDrawn',
      securityLevel: 'loose',
      themeVariables: {
        fontFamily: 'Patrick Hand, Comic Sans MS, cursive',
      },
    });

    mermaid.run({querySelector: '.markdown-body .mermaid'}).catch(() => {
      // no-op
    });
  }, [slug]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!data) return;

        setProfile({
          name: data.name || data.login || 'SunKyu Choi',
          login: data.login || GITHUB_USERNAME,
          avatarUrl: data.avatar_url || '',
          htmlUrl: data.html_url || `https://github.com/${GITHUB_USERNAME}`,
        });
      })
      .catch(() => {
        // no-op
      });
  }, []);

  if (!note) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light p-8">
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Note not found</h1>
          <Link className="mt-4 inline-flex text-primary" to="/notes">
            Back to notes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex min-h-screen overflow-x-hidden bg-background-light pb-24 font-display text-slate-900 dark:bg-background-dark dark:text-slate-100 lg:pb-0">
        <DetailSidebar currentSlug={note.slug} />

        <main className="flex-1 overflow-y-auto bg-white dark:bg-background-dark">
          <div className="mx-auto max-w-4xl px-6 py-6 lg:px-12">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 overflow-hidden whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
              <Link className="flex items-center gap-1 transition-colors hover:text-primary" to="/">
                <span className="material-symbols-outlined text-base">home</span>
                Home
              </Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <Link className="transition-colors hover:text-primary" to={`/notes?q=${encodeURIComponent(note.category)}`}>
                {note.category}
              </Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="truncate font-medium text-slate-900 dark:text-white">{note.title}</span>
            </nav>

            <header className="mb-10">
              <div className="mb-4 flex flex-wrap gap-2">
                {note.tags.map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className={
                      index === 0
                        ? 'inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary'
                        : 'inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600'
                    }>
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="mb-6 text-4xl font-black leading-tight text-slate-900 dark:text-white lg:text-5xl">
                {note.title}
              </h1>
              <div className="flex items-center border-b border-slate-100 pb-6 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <a className="block" href={profile.htmlUrl} target="_blank" rel="noreferrer">
                    {profile.avatarUrl ? (
                      <img
                        alt={profile.name}
                        className="h-10 w-10 rounded-full border border-slate-200 object-cover"
                        src={profile.avatarUrl}
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
                        <span className="material-symbols-outlined text-slate-500">person</span>
                      </div>
                    )}
                  </a>
                  <div>
                    <a
                      className="text-sm font-semibold text-slate-900 hover:text-primary dark:text-white"
                      href={profile.htmlUrl}
                      target="_blank"
                      rel="noreferrer">
                      {profile.name}
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Published {note.dateLabel} • {note.readTimeLabel}
                    </p>
                  </div>
                </div>
                {null}
              </div>
            </header>

            <article className="markdown-body" dangerouslySetInnerHTML={{__html: note.html}} />

            <footer className="mt-16 border-t border-slate-100 pt-8 dark:border-slate-800">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Link
                  className="group flex min-h-[92px] items-center gap-4 rounded-xl border border-slate-100 p-4 transition-all hover:border-primary/50 dark:border-slate-800"
                  to={adjacent.previous ? `/notes/${adjacent.previous.slug}` : '/notes'}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors group-hover:text-primary dark:bg-slate-800">
                    <span className="material-symbols-outlined">arrow_back</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Previous Note</p>
                    <p className="truncate font-semibold text-slate-900 dark:text-white">
                      {adjacent.previous?.title ?? 'Back to notes'}
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex min-h-[92px] items-center gap-4 rounded-xl border border-slate-100 p-4 text-right transition-all hover:border-primary/50 dark:border-slate-800"
                  to={adjacent.next ? `/notes/${adjacent.next.slug}` : '/notes'}>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Next Note</p>
                    <p className="truncate font-semibold text-slate-900 dark:text-white">
                      {adjacent.next?.title ?? 'Back to notes'}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors group-hover:text-primary dark:bg-slate-800">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </Link>
              </div>
            </footer>
          </div>
        </main>

        <DetailToc currentSlug={note.slug} />
      </div>

      <MobileBottomNav />
    </>
  );
}
