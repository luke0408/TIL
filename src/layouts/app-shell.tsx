import {NavLink, Outlet} from 'react-router-dom';

const NAV_ITEMS = [
  {to: '/', label: 'Home'},
  {to: '/notes', label: 'Notes'},
  {to: '/notes/sample', label: 'Detail'},
] as const;

export function AppShell() {
  return (
    <div className="app-root">
      <header className="topbar">
        <div className="topbar__inner">
          <div className="brand">
            <span className="material-symbols-outlined">terminal</span>
            <strong>TIL Notes</strong>
          </div>
          <nav className="topnav">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                className={({isActive}) =>
                  isActive ? 'topnav__link topnav__link--active' : 'topnav__link'
                }
                to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="page-wrap">
        <Outlet />
      </main>
    </div>
  );
}
