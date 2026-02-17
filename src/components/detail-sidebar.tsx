import {useEffect, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';

import {DIRECTORY_LOGOS, type DirectoryLogoItem} from '../constants/directory-logo';
import {type DirectoryTreeNode, getDocDirectoryTree, getReadmeSlugByDirectory} from '../lib/docs';
import {BrandLogo} from './atoms/brand-logo';

type DetailSidebarProps = {
  currentSlug: string;
};

const DIRECTORY_TREE = getDocDirectoryTree();

function getDirectoryVisual(name: string): DirectoryLogoItem['visual'] {
  const key = name.toLowerCase();
  const found = DIRECTORY_LOGOS.find((item) => item.matcher(key));

  return found?.visual ?? {kind: 'symbol', icon: 'folder'};
}

function DirectoryIcon({name}: {name: string}) {
  const visual = getDirectoryVisual(name);

  if (visual.kind === 'brand') {
    return <img alt={visual.alt} className="h-4 w-4 object-contain" src={visual.src} />;
  }

  return (
    <span aria-hidden="true" className="material-symbols-outlined text-sm text-slate-400">
      {visual.icon}
    </span>
  );
}

function collectOpenedDirectoryPaths(nodes: DirectoryTreeNode[], currentSlug: string, acc: string[] = []) {
  for (const node of nodes) {
    if (node.type === 'file' && node.slug === currentSlug) {
      return acc;
    }

    if (node.type === 'directory' && node.children) {
      const result = collectOpenedDirectoryPaths(node.children, currentSlug, [...acc, node.path]);
      if (result.length > 0) {
        return result;
      }
    }
  }

  return [];
}

function DirectoryNode({
  node,
  depth,
  opened,
  onToggle,
  currentSlug,
}: {
  node: DirectoryTreeNode;
  depth: number;
  opened: Record<string, boolean>;
  onToggle: (path: string) => void;
  currentSlug: string;
}) {
  if (node.type === 'file') {
    const isActive = node.slug === currentSlug;
    return (
      <Link
        className={
          isActive
            ? 'flex items-center gap-1 truncate rounded-md bg-primary/10 px-2 py-1.5 text-xs font-medium text-primary'
            : 'flex items-center gap-1 truncate rounded-md px-2 py-1.5 text-xs text-slate-500 hover:bg-slate-50 hover:text-slate-700'
        }
        style={{marginLeft: `${depth * 12}px`}}
        to={`/notes/${node.slug}`}>
        <span aria-hidden="true" className="material-symbols-outlined text-sm text-slate-400">description</span>
        <span className="truncate">{node.name}</span>
      </Link>
    );
  }

  const isOpen = opened[node.path] ?? false;

  const readmeSlug = getReadmeSlugByDirectory(node.path);
  const isReadmeActive = readmeSlug === currentSlug;

  return (
    <div>
      <div
        className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
        style={{marginLeft: `${depth * 12}px`}}>
        {readmeSlug ? (
          <Link
            className={
              isReadmeActive
                ? 'flex min-w-0 items-center gap-1 truncate text-primary'
                : 'flex min-w-0 items-center gap-1 truncate hover:text-primary'
            }
            to={`/notes/${readmeSlug}`}>
            <DirectoryIcon name={node.name} />
            <span className="truncate">{node.name}</span>
          </Link>
        ) : (
          <span className="flex min-w-0 items-center gap-1 truncate">
            <DirectoryIcon name={node.name} />
            <span className="truncate">{node.name}</span>
          </span>
        )}

        <button
          className="ml-2 rounded p-0.5 text-slate-400 hover:bg-slate-100"
          type="button"
          onClick={() => onToggle(node.path)}>
          <span className="material-symbols-outlined text-sm">
            {isOpen ? 'expand_more' : 'chevron_right'}
          </span>
        </button>
      </div>

      {isOpen && node.children && (
        <div className="mt-0.5 space-y-0.5">
          {node.children.map((child) => (
            <DirectoryNode
              key={child.path}
              node={child}
              depth={depth + 1}
              opened={opened}
              onToggle={onToggle}
              currentSlug={currentSlug}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function DetailSidebar({currentSlug}: DetailSidebarProps) {
  const defaultOpened = useMemo(() => {
    const paths = collectOpenedDirectoryPaths(DIRECTORY_TREE, currentSlug);
    return Object.fromEntries(paths.map((path) => [path, true]));
  }, [currentSlug]);

  const [openedDirectories, setOpenedDirectories] = useState<Record<string, boolean>>(defaultOpened);

  useEffect(() => {
    setOpenedDirectories((prev) => ({
      ...prev,
      ...defaultOpened,
    }));
  }, [defaultOpened]);

  const toggleDirectory = (path: string) => {
    setOpenedDirectories((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  return (
    <aside className="sticky top-0 hidden h-screen w-72 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:flex">
      <div className="border-b border-slate-100 p-6 dark:border-slate-800">
        <Link to="/">
          <BrandLogo />
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto p-4" aria-label="Technical Categories">
        <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Technical Categories
        </h3>
        <div className="space-y-0.5">
          {DIRECTORY_TREE.map((node) => (
            <DirectoryNode
              key={node.path}
              node={node}
              depth={0}
              opened={openedDirectories}
              onToggle={toggleDirectory}
              currentSlug={currentSlug}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
}
