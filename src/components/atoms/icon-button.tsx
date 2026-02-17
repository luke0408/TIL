type IconButtonProps = {
  icon: string;
  label: string;
  onClick?: () => void;
  className?: string;
};

export function IconButton({icon, label, onClick, className}: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={
        className ??
        'flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-all hover:bg-primary/10 hover:text-primary'
      }
      type="button"
      onClick={onClick}>
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
}
