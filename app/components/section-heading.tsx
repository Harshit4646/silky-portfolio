type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-700 shadow-sm dark:border-emerald-800/70 dark:bg-emerald-950/40 dark:text-emerald-300">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        {eyebrow}
      </div>
      <h2 className="bg-gradient-to-r from-slate-950 via-slate-700 to-emerald-700 bg-clip-text text-3xl font-semibold tracking-tight text-transparent dark:from-white dark:via-slate-200 dark:to-emerald-300 sm:text-4xl lg:text-[2.3rem]">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}
