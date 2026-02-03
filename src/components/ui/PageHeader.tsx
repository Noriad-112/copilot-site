type PageHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  titleClassName?: string;
};

export function PageHeader({
  title,
  description,
  eyebrow,
  titleClassName,
}: PageHeaderProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={[
          "font-serif text-4xl text-slate-900 sm:text-5xl",
          titleClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {title}
      </h1>
      {description ? (
        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
