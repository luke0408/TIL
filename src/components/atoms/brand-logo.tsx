type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({className}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ''}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
        <span className="material-symbols-outlined !text-[20px]">terminal</span>
      </div>
      <span
        className="whitespace-nowrap font-extrabold tracking-tight text-background-dark dark:text-white"
        style={{fontSize: '20px', lineHeight: '20px'}}>
        TIL Notes
      </span>
    </div>
  );
}
