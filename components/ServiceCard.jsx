import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { pick, t } from "@/lib/i18n";

export function ServiceCard({ service, compact = false }) {
  const { locale } = useLocale();

  return (
    <div className="service-card">
      <div className="service-card-inner">
        <img src={service.image} alt={pick(service, "title", locale)} loading="lazy" />
        <div className="service-overlay">
          <h4>{pick(service, "title", locale)}</h4>
          {!compact && <p>{pick(service, "shortDescription", locale)}</p>}
          <div className="readmore">
            <Link href={`/services/${service.slug}`} className="playFairFont">
              {t("readMore", locale)}
            </Link>
            <i className="ph ph-arrow-left" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesGrid({
  services,
  title,
  subHeading,
  showAllLink = true,
  compact = false,
}) {
  const { locale } = useLocale();

  return (
    <section className="services" id="services">
      <div className="container">
        {title && (
          <div className="row section-title">
            <div className="col-12">
              {subHeading && <span className="sub-heading">{subHeading}</span>}
              <h2 className="mb-3">{title}</h2>
            </div>
          </div>
        )}
        <div className={`service-card-area${compact ? " service-card-area--home" : ""}`}>
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} compact={compact} />
          ))}
        </div>
        {showAllLink && (
          <div className="d-flex justify-content-center pb-5 mt-3">
            <Link href="/services" className="outline-btn secondary playFairFont">
              {t("allServices", locale)} <i className="ph ph-arrow-left" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
