export function MobileBottomNav() {
  const icons = ['menu', 'search', 'add', 'bookmark', 'person'] as const;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-slate-200 bg-white px-6 py-3 dark:border-slate-800 dark:bg-slate-900 lg:hidden">
      {icons.map((icon) => (
        <button key={icon} className="p-2 text-slate-500 dark:text-slate-400" type="button">
          <span className="material-symbols-outlined">{icon}</span>
        </button>
      ))}
    </div>
  );
}
