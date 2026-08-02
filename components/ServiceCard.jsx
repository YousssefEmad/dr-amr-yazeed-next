import Link from "next/link";

export function ServiceCard({ service }) {
  return (
    <div className="service-card col-sm-6 col-lg-3">
      <div className="service-card-inner">
        <img src={service.image} alt={service.title} loading="lazy" />
        <div className="service-overlay">
          <h4>{service.title}</h4>
          <p>{service.shortDescription}</p>
          <div className="readmore">
            <Link href={`/services/${service.slug}`} className="playFairFont">
              اعرف المزيد
            </Link>
            <i className="ph ph-arrow-left" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesGrid({ services, title, subHeading }) {
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
        <div className="service-card-area row">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
              <div className="container d-flex justify-content-center pb-5">
                <Link href="/services" className="outline-btn secondary playFairFont">
                  جميع الخدمات <i className="ph ph-arrow-left" />
                </Link>
              </div>
      </div>
    </section>
  );
}
