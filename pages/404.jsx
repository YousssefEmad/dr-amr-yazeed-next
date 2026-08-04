import Link from "next/link";
import SEO from "@/components/SEO";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/lib/i18n";

export default function NotFoundPage() {
  const { locale } = useLocale();

  return (
    <>
      <SEO title={t("notFoundTitle", locale)} noIndex path="/404" />
      <section className="error">
        <div className="container text-center">
          <h2 className="mb-3">404</h2>
          <p className="mb-4">{t("notFoundText", locale)}</p>
          <Link href="/" className="primary-btn">
            {t("backHome", locale)}
          </Link>
        </div>
      </section>
    </>
  );
}
