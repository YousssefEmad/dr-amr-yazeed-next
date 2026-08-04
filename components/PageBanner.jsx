import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/lib/i18n";

export default function PageBanner({ title, crumb, bg = "/images/breadcramb.png" }) {
  const { locale } = useLocale();

  return (
    <section
      className="page-banner space-header"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container position-relative">
        <div className="row">
          <div className="col-12 banner-content">
            <h2 className="display-4 mb-3">{title}</h2>
            <ul>
              <li><Link href="/">{t("home", locale)}</Link></li>
              <i className="ph ph-caret-left" />
              <li>{crumb || title}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
