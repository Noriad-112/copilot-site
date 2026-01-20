import type React from "react";

import Link from "next/link";

export function Card({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const classes = `rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-elevated)] p-6 shadow-[0_12px_40px_-30px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)] ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
