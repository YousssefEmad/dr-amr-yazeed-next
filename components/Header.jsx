import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import { pick } from "@/lib/i18n";

export default function Header({ onOpenMobileMenu }) {
  const [fixed, setFixed] = useState(false);
  const router = useRouter();
  const { locale, toggleLocale } = useLocale();

  useEffect(() => {
    const onScroll = () => setFixed(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => router.pathname === href;

  return (
    <header id="header" className={`header index-2 w-100 ${fixed ? "fixed" : ""}`}>
      <div className="container g-0">
        <nav className="d-flex justify-content-between align-items-center">
          <Link href="/" className="d-lg-none logo-header" aria-label={pick(siteConfig, "name", locale)}>
            <img src={siteConfig.logo} alt={pick(siteConfig, "name", locale)} />
          </Link>

          <a
            className="d-none d-xl-flex align-items-center gap-2 outline-btn primary"
            href={siteConfig.phones[0].href}
          >
            <i className="ph ph-phone-call" /> {siteConfig.phones[0].value}
          </a>

          <ul className="menu">
            <li className="d-none d-lg-block px-3">
              <Link href="/">
                <img src={siteConfig.logo} alt={pick(siteConfig, "name", locale)} style={{ width: 90 }} />
              </Link>
            </li>
            {siteConfig.nav.map((item, idx) => {
              const label = locale === "en" ? item.labelEn ?? item.label : item.label;

              if (item.href === "#") {
                return (
                  <li key={idx} className="submenu">
                    <span>{label}</span>
                    <ul className="submenu-dropdown">
                      {item.children.map((c, i) => (
                        <li key={i}>
                          <Link href={c.href}>{locale === "en" ? c.labelEn ?? c.label : c.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              if (item.children === "services") {
                return (
                  <li key={idx} className="submenu">
                    <Link href={item.href} className={isActive(item.href) ? "active" : ""}>
                      {label}
                    </Link>
                    <ul className="submenu-dropdown">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`}>{pick(s, "title", locale)}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={idx} className={idx === 2 ? "d-none d-lg-block" : ""}>
                  <Link href={item.href} className={isActive(item.href) ? "active" : ""}>
                    {label}
                  </Link>
                </li>
              );
            })}
            
          </ul>

          <div className="d-flex align-items-center gap-3">
            <button
              type="button"
              className="primary-btn d-none d-lg-flex"
              onClick={toggleLocale}
              aria-label="تبديل اللغة / Switch language"
            >
              {locale === "ar" ? "EN" : "AR"}
            </button>
            <div className="toggle-menu" onClick={onOpenMobileMenu}>
              <i className="ph ph-list" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}