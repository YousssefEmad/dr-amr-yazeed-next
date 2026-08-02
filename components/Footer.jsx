import Link from "next/link";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-two">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <div className="footer-card">
              <Link href="/" aria-label="الصفحة الرئيسية">
                <img src={siteConfig.logo} className="img-fluid mb-4" alt={siteConfig.name} style={{ width: 110 }} />
              </Link>
              <p>{siteConfig.descriptionEn ? siteConfig.description : siteConfig.description}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <h4 className="mb-4 text-n500">روابط سريعة</h4>
            <ul className="navigation-links">
              <li><Link href="/">الرئيسية</Link></li>
              <li><Link href="/about-us">نبذة عن الدكتور</Link></li>
              <li><Link href="/services">الخدمات</Link></li>
              <li><Link href="/blog">المقالات</Link></li>
              <li><Link href="/contact-us">تواصل معنا</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <h4 className="mb-4 text-n500">الخدمات الطبية</h4>
            <ul className="navigation-links">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h4 className="pb-3 text-n500">بيانات التواصل</h4>
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
                <p>{siteConfig.clinics[0].address}</p>
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
            © 2026 دكتور عمرو يزيد. جميع الحقوق محفوظة | تصميم وتطوير Blue
          </p>
        </div>
      </div>
    </footer>
  );
}
