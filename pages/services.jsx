import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import ServicesGrid from "@/components/ServiceCard";
import { services } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/lib/i18n";

export default function ServicesPage() {
  const { locale } = useLocale();

  return (
    <>
      <SEO
        title={t("ourServicesPage", locale)}
        description={t("seoServicesDesc", locale)}
        path="/services"
      />
      <PageBanner title={t("ourServicesPage", locale)} crumb={t("ourServicesPage", locale)} />
      <ServicesGrid services={services} showAllLink={false} />
    </>
  );
}
