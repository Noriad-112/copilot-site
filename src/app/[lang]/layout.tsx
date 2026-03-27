import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getDictionary, isValidLanguage, type Language } from "@/lib/i18n";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;

  if (!isValidLanguage(langParam)) {
    notFound();
  }

  const lang = langParam as Language;
  const dict = getDictionary(lang);

  return (
    <div lang={lang} className="min-h-screen bg-[color:var(--background)]">
      <SiteHeader lang={lang} labels={dict.nav} />
      <main className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16">
        {children}
      </main>
      <SiteFooter lang={lang} labels={dict.nav} />
    </div>
  );
}
