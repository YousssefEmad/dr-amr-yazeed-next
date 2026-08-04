import Link from "next/link";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import { pick, t } from "@/lib/i18n";

export default function Footer() {
  const year = new Date().getFullYear();
  const { locale } = useLocale();

  return (
    <footer className="footer footer-two">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <div className="footer-card">
              <Link href="/" aria-label={t("home", locale)}>
                <img
                  src={siteConfig.logo}
                  className="img-fluid mb-4"
                  alt={pick(siteConfig, "name", locale)}
                  style={{ width: 110 }}
                />
              </Link>
              <p>{pick(siteConfig, "description", locale)}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <h4 className="mb-4 text-n500">{t("quickLinks", locale)}</h4>
            <ul className="navigation-links">
              <li><Link href="/">{t("home", locale)}</Link></li>
              <li><Link href="/about-us">{t("about", locale)}</Link></li>
              <li><Link href="/services">{t("services", locale)}</Link></li>
              <li><Link href="/blog">{t("blog", locale)}</Link></li>
              <li><Link href="/contact-us">{t("contact", locale)}</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <h4 className="mb-4 text-n500">{t("medicalServices", locale)}</h4>
            <ul className="navigation-links">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{pick(s, "title", locale)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h4 className="pb-3 text-n500">{t("contactInfo", locale)}</h4>
            <ul className="contact-two mb-3">
              {siteConfig.phones.map((p, i) => (
                <li className="contact-item" key={i}>
                  <div className="contact-icon"><i className="ph ph-phone-call" /></div>
                  <a href={p.href}>{p.value}</a>
                </li>
              ))}
              <li className="contact-item">
                <div className="contact-icon"><i className="ph ph-envelope-open" /></div>
                <a href={`mailto:${siteConfig.emails[0]}`}>{siteConfig.emails[0]}</a>
              </li>
              <li className="contact-item">
                <div className="contact-icon"><i className="ph ph-map-pin" /></div>
                <p>
                  {siteConfig.clinics.map((c) => pick(c, "name", locale)).join(" · ")}
                </p>
              </li>
            </ul>

            <ul className="social-link two">
              {siteConfig.socials.map((s, i) => (
                <li key={i}>
                  <a href={s.href} aria-label={s.name} target="_blank" rel="noreferrer">
                    <i className={`ph ${s.icon}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="copyright-two">
          <p>
            © {year} {pick(siteConfig, "name", locale)}. {t("allRightsReserved", locale)} |{" "}
            {t("designedBy", locale)}
          </p>
        </div>
      </div>
    </footer>
  );
}
