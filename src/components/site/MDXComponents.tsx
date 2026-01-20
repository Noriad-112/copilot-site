import type React from "react";

export const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className="mt-8 text-2xl font-semibold tracking-tight text-[color:var(--foreground)]"
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      className="mt-6 text-xl font-semibold tracking-tight text-[color:var(--foreground)]"
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="text-base leading-relaxed text-[color:var(--ink-soft)]" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="list-disc space-y-2 pl-5 text-[color:var(--ink-soft)]" />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className="leading-relaxed" />
  ),
};
