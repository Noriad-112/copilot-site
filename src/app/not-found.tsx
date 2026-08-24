import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-start justify-center gap-6 px-6 py-16">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-[color:var(--foreground)]">
          Page not found
        </h1>
      </div>
      <Link
        href="/"
        className="text-sm text-[color:var(--accent)] transition hover:text-[color:var(--foreground)]"
      >
        Back to home
      </Link>
    </main>
  );
}
