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
  const { lang } = await params;
  if (!isValidLanguage(lang)) {
    notFound();
  }

  const currentLang = lang as Language;
  const dict = getDictionary(lang);

  return (
    <div lang={currentLang} className="min-h-screen bg-[color:var(--background)]">
      <SiteHeader lang={currentLang} labels={dict.nav} />
      <main className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16">
        {children}
      </main>
      <SiteFooter lang={currentLang} labels={dict.nav} />
    </div>
  );
}
