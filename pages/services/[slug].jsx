import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import { services, getServiceBySlug } from "@/data/services";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { pick, pickList, t } from "@/lib/i18n";

export default function ServiceDetailsPage({ service }) {
  const { locale } = useLocale();
  if (!service) return null;

  const title = pick(service, "title", locale);
  const detailsHeading = pick(service.details, "heading", locale);
  const detailItems = pickList(service.details, "items", locale);
  const features = pickList(service, "features", locale);

  return (
    <>
      <SEO
        title={title}
        description={pick(service, "shortDescription", locale)}
        image={service.image}
        path={`/services/${service.slug}`}
      />

      <PageBanner title={title} crumb={t("serviceDetails", locale)} />

      <section className="service-details pt-80 pb-80">
        <div className="container">
          <div className="row g-4 position-relative">
            <div className="col-lg-8">
              <div className="details-left">
                <img src={service.image} alt={title} />
                <div className="details-content pt-3">
                  <h2>{title}</h2>
                  <p>{pick(service, "intro", locale)}</p>

                  <h3>{detailsHeading}</h3>
                  <ul>
                    {detailItems.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>

                  <h5 className="mt-3">{pick(service, "extraInfoHeading", locale)}</h5>
                  <p>{pick(service, "extraInfo", locale)}</p>

                  <h6>{pick(service, "featuresHeading", locale)}</h6>
                  <p className="mb-4">
                    {features.map((f, i) => (
                      <span key={i} style={{ display: "block" }}>
                        ✔ {f}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg4-box">
                <h4 className="mb-3">{t("medicalServices", locale)}</h4>
                <ul className="category-list">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className={s.slug === service.slug ? "active" : ""}>
                        <span>{pick(s, "title", locale)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg4-box text-center">
                <h5 className="mb-3">{t("bookNow", locale)}</h5>
                <Link href="/contact-us" className="primary-btn w-100 justify-content-center">
                  {t("contact", locale)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: services.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = getServiceBySlug(params.slug) || null;
  return { props: { service } };
}
