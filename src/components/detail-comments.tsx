const COMMENTS = [
  {
    name: 'Sarah Chen',
    time: '2 hours ago',
    text: 'This cleared up so much confusion I had about event bubbling. Great explanation!',
  },
  {
    name: 'Alex Rivera',
    time: '5 hours ago',
    text: "The pro tip about element.closest() is a game changer. I've been struggling with icons inside buttons for a while.",
  },
  {
    name: 'Jordan Smith',
    time: 'Yesterday',
    text: 'Is there any performance downside if the parent element has thousands of children?',
  },
] as const;

export function DetailComments() {
  return (
    <section className="mt-16 border-t border-slate-100 pt-8 dark:border-slate-800">
      <h3 className="mb-8 text-xl font-bold text-slate-900 dark:text-white">Comments (3)</h3>
      <div className="mb-10 space-y-8">
        {COMMENTS.map((comment) => (
          <div key={comment.name} className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
              <span className="material-symbols-outlined text-slate-500">person</span>
            </div>
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="text-sm font-bold text-slate-900 dark:text-white">{comment.name}</span>
                <span className="text-xs text-slate-400">{comment.time}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
        <h4 className="mb-4 text-sm font-bold text-slate-900 dark:text-white">Add a comment</h4>
        <textarea
          className="w-full rounded-lg border border-slate-200 bg-white p-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          placeholder="What are your thoughts?"
          rows={3}
        />
        <div className="mt-4 flex justify-end">
          <button className="rounded-lg bg-primary px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-primary/90" type="button">
            Post Comment
          </button>
        </div>
      </div>
    </section>
  );
}
