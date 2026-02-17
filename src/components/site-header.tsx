import {Link} from 'react-router-dom';

type SiteHeaderProps = {
  showNav?: boolean;
};

export function SiteHeader({showNav = true}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="brand">
          <div className="brand__icon">
            <span className="material-symbols-outlined">terminal</span>
          </div>
          <span className="brand__text">TIL Notes</span>
        </div>
        {showNav && (
          <nav className="site-nav">
            <Link className="site-nav__active" to="/">
              Home
            </Link>
            <Link to="/notes">Blog</Link>
            <a href="#">About</a>
          </nav>
        )}
        <button className="icon-button" type="button" aria-label="search">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </header>
  );
}
