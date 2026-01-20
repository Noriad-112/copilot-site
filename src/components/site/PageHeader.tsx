import type React from "react";

export function PageHeader({
  title,
  subtitle,
  intro,
}: {
  title: string;
  subtitle?: string;
  intro?: string;
}) {
  return (
    <header className="space-y-4 pb-10">
      {subtitle ? (
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
          {subtitle}
        </p>
      ) : null}
      <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
        {title}
      </h1>
      {intro ? (
        <p className="max-w-2xl text-base leading-relaxed text-[color:var(--ink-soft)] sm:text-lg">
          {intro}
        </p>
      ) : null}
    </header>
  );
}
