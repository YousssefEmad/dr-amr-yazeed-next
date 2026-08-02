import Link from "next/link";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import { pick } from "@/lib/i18n";

export default function MobileMenu({ open, onClose }) {
  const { locale, toggleLocale } = useLocale();

  return (
    <>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/" onClick={onClose}>
            <img src={siteConfig.logo} alt={pick(siteConfig, "name", locale)} style={{ width: 90 }} />
          </Link>
          <i className="ph ph-x text-white fs-2 close-menu" onClick={onClose} />
        </div>
        <ul className="menu">
          {siteConfig.nav.map((item, idx) => {
            const label = locale === "en" ? item.labelEn ?? item.label : item.label;

            if (item.children === "services") {
              return (
                <li key={idx} className="submenu">
                  <Link href={item.href} onClick={onClose}>
                    {label}
                  </Link>
                  <ul className="submenu-dropdown">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} onClick={onClose}>
                          {pick(s, "title", locale)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            if (item.href === "#") {
              return (
                <li key={idx} className="submenu">
                  <span>{label}</span>
                  <ul className="submenu-dropdown">
                    {item.children.map((c, i) => (
                      <li key={i}>
                        <Link href={c.href} onClick={onClose}>
                          {locale === "en" ? c.labelEn ?? c.label : c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={idx}>
                <Link href={item.href} onClick={onClose}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button type="button" className="primary-btn w-100 justify-content-center" onClick={toggleLocale}>
          {locale === "ar" ? "EN" : "AR"}
        </button>
      </div>
      <div className={`mobile-menu-overlay ${open ? "show" : ""}`} onClick={onClose} />
    </>
  );
}