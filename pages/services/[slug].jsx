import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import { services, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export default function ServiceDetailsPage({ service }) {
  if (!service) return null;

  return (
    <>
      <SEO
        title={service.title}
        description={service.shortDescription}
        image={service.image}
        path={`/services/${service.slug}`}
      />

      <PageBanner title={service.title} crumb="تفاصيل الخدمة" />

      <section className="service-details pt-80 pb-80">
        <div className="container">
          <div className="row g-4 position-relative">
            <div className="col-lg-8">
              <div className="details-left">
                <img src={service.image} alt={service.title} />
                <div className="details-content pt-3">
                  <h2>{service.title}</h2>
                  <p>{service.intro}</p>

                  <h3>{service.details.heading}</h3>
                  <ul>
                    {service.details.items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>

                  <h5 className="mt-3">{service.extraInfoHeading}</h5>
                  <p>{service.extraInfo}</p>

                  <h6>{service.featuresHeading}</h6>
                  <p className="mb-4">
                    {service.features.map((f, i) => (
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
                <h4 className="mb-3">الخدمات الطبية</h4>
                <ul className="category-list">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className={s.slug === service.slug ? "active" : ""}>
                        <span>{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg4-box">
                <iframe
                  src={siteConfig.clinics[0].mapEmbed}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="موقع العيادة"
                />
              </div>

              <div className="bg4-box text-center">
                <h5 className="mb-3">احجز موعدك الآن</h5>
                <Link href="/contact-us" className="primary-btn w-100 justify-content-center">
                  تواصل معنا
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
