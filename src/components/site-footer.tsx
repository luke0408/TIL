export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <section>
          <div className="brand">
            <div className="brand__icon">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <span className="brand__text">TIL Notes</span>
          </div>
          <p>A minimalist documentation hub for continuous learning and daily knowledge sharing.</p>
        </section>
        <section>
          <h4>Resources</h4>
          <ul>
            <li>Docs</li>
            <li>Blog</li>
            <li>Style Guide</li>
          </ul>
        </section>
        <section>
          <h4>Community</h4>
          <ul>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>GitHub Issues</li>
          </ul>
        </section>
      </div>
      <div className="container site-footer__bottom">© 2026 Today I Learned. Built with passion for continuous learning.</div>
    </footer>
  );
}
