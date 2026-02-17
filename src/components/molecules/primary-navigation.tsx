import {NavLink} from 'react-router-dom';

const BASE_LINK_CLASS_NAME =
  'text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-400';

const ACTIVE_LINK_CLASS_NAME = 'text-sm font-semibold text-primary';

function toLinkClassName(isActive: boolean) {
  return isActive ? ACTIVE_LINK_CLASS_NAME : BASE_LINK_CLASS_NAME;
}

export function PrimaryNavigation() {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
      <NavLink end className={({isActive}) => toLinkClassName(isActive)} to="/">
        Home
      </NavLink>
      <NavLink className={({isActive}) => toLinkClassName(isActive)} to="/notes">
        Notes
      </NavLink>
      <a className={BASE_LINK_CLASS_NAME} href="https://luke-blog.vercel.app/" target="_blank" rel="noreferrer">
        Blog
      </a>
    </nav>
  );
}
