import type React from "react";

const toneClasses = {
  neutral: "bg-[color:var(--surface-muted)] text-[color:var(--ink-soft)]",
  accent: "bg-[color:var(--accent-soft)] text-[color:var(--accent)]",
  outline:
    "border border-[color:var(--border-soft)] text-[color:var(--ink-soft)]",
};

export function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: keyof typeof toneClasses;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${
        toneClasses[tone]
      }`}
    >
      {children}
    </span>
  );
}
