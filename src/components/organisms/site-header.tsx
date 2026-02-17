import {useEffect, useMemo, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {docs} from '../../lib/docs';
import {BrandLogo} from '../atoms/brand-logo';
import {IconButton} from '../atoms/icon-button';
import {HeaderSearchPanel} from '../molecules/header-search-panel';
import {PrimaryNavigation} from '../molecules/primary-navigation';

type SiteHeaderProps = {
  maxWidthClassName: string;
};

export function SiteHeader({maxWidthClassName}: SiteHeaderProps) {
  const navigate = useNavigate();
  const searchPanelRef = useRef<HTMLDivElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [query, setQuery] = useState('');

  const searchedDocs = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return docs.slice(0, 5);
    }

    return docs
      .filter((doc) => `${doc.title} ${doc.description} ${doc.tag}`.toLowerCase().includes(normalized))
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    if (!isSearchOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      const panelNode = searchPanelRef.current;
      if (!panelNode) return;

      const targetNode = event.target as Node;
      if (!panelNode.contains(targetNode)) {
        setIsSearchOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchOpen]);

  const submitSearchQuery = () => {
    const normalizedQuery = query.trim();
    setIsSearchOpen(false);

    if (!normalizedQuery) {
      navigate('/notes');
      return;
    }

    navigate(`/notes?q=${encodeURIComponent(normalizedQuery)}`);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md dark:bg-background-dark/80">
        <div className={`mx-auto flex items-center justify-between ${maxWidthClassName}`}>
          <div className="flex items-center gap-3">
            <IconButton
              icon="menu"
              label="Open menu"
              className="text-slate-600 lg:hidden"
              onClick={() => setIsMobileNavOpen(true)}
            />
            <Link to="/">
              <BrandLogo />
            </Link>
          </div>

          <PrimaryNavigation />

          <div className="relative">
            <IconButton
              icon="search"
              label="Search notes"
              onClick={() => setIsSearchOpen((prev) => !prev)}
            />
            {isSearchOpen && (
              <HeaderSearchPanel
                docsCount={docs.length}
                query={query}
                items={searchedDocs}
                onQueryChange={setQuery}
                onSelect={() => setIsSearchOpen(false)}
                onSubmitQuery={submitSearchQuery}
                panelRef={searchPanelRef}
              />
            )}
          </div>
        </div>
      </header>

      {isMobileNavOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden" role="dialog" aria-modal="true">
          <button
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/45"
            type="button"
            onClick={() => setIsMobileNavOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-[78vw] max-w-[320px] overflow-y-auto bg-white p-5 shadow-2xl">
            <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
              <Link to="/" onClick={() => setIsMobileNavOpen(false)}>
                <BrandLogo />
              </Link>
              <IconButton icon="close" label="Close menu" onClick={() => setIsMobileNavOpen(false)} />
            </div>
            <nav className="grid gap-2" aria-label="Mobile primary">
              <Link
                className="rounded-lg px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100"
                to="/"
                onClick={() => setIsMobileNavOpen(false)}>
                Home
              </Link>
              <Link
                className="rounded-lg px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100"
                to="/notes"
                onClick={() => setIsMobileNavOpen(false)}>
                Notes
              </Link>
              <a
                className="rounded-lg px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100"
                href="https://luke-blog.vercel.app/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileNavOpen(false)}>
                Blog
              </a>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
