import Link from "next/link";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

export default function MobileMenu({ open, onClose }) {
  return (
    <>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/" onClick={onClose}>
            <img src={siteConfig.logo} alt={siteConfig.name} style={{ width: 90 }} />
          </Link>
          <i className="ph ph-x text-white fs-2 close-menu" onClick={onClose} />
        </div>
        <ul className="menu">
          {siteConfig.nav.map((item, idx) => {
            if (item.children === "services") {
              return (
                <li key={idx} className="submenu">
                  <Link href={item.href} onClick={onClose}>
                    {item.label}
                  </Link>
                  <ul className="submenu-dropdown">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} onClick={onClose}>
                          {s.title}
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
                  <span>{item.label}</span>
                  <ul className="submenu-dropdown">
                    {item.children.map((c, i) => (
                      <li key={i}>
                        <Link href={c.href} onClick={onClose}>
                          {c.label}
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
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <a href="#" className="primary-btn w-100">
          EN
        </a>
      </div>
      <div className={`mobile-menu-overlay ${open ? "show" : ""}`} onClick={onClose} />
    </>
  );
}
