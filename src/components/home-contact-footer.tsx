export function HomeContactFooter() {
  return (
    <>
      <section className="mb-20 mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-slate-900 px-8 py-16 text-center dark:bg-slate-800/50">
          <h2 className="mb-4 text-3xl font-bold text-white">Get in Touch</h2>
          <p className="mx-auto mb-8 max-w-md text-slate-400">
            Have a question or a project in mind? Send me an email and let's start a
            conversation.
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              className="flex-1 rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary"
              placeholder="Your email address"
              type="email"
            />
            <button
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              type="button">
              Contact Me
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-primary/10 bg-white py-16 dark:bg-background-dark">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                  <span className="material-symbols-outlined !text-[20px]">terminal</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  TIL Notes
                </span>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                A minimalist documentation hub for continuous learning and daily knowledge sharing.
              </p>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Resources
              </h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li>Docs</li>
                <li>Blog</li>
                <li>Style Guide</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Community
              </h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li>Discord</li>
                <li>GitHub Issues</li>
                <li>Stack Overflow</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Legal
              </h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
