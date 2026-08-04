import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import { pick, t } from "@/lib/i18n";

export default function ContactPage() {
  const { locale } = useLocale();

  return (
    <>
      <SEO
        title={t("contact", locale)}
        description={t("seoContactDesc", locale)}
        path="/contact-us"
      />
      <PageBanner title={t("contact", locale)} crumb={t("contact", locale)} />

      <section className="contact-page pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="contact-form">
                <div className="contact-title text-center">
                  <h4 className="sub-heading">{t("contactFormSub", locale)}</h4>
                  <h2>{t("contactFormTitle", locale)}</h2>
                  <p className="mb-3">{t("contactFormText", locale)}</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="more-help">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-xl-6">
              <h4 className="sub-heading">{t("contactHelpSub", locale)}</h4>
              <h2>{t("contactHelpTitle", locale)}</h2>
              <p>{t("contactHelpText", locale)}</p>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-md-5 col-lg-5">
              <div className="d-flex flex-column gap-3">
                <div className="help-card">
                  <i className="ph ph-phone-call" />
                  <h4 className="mb-3">{t("callUs", locale)}</h4>
                  <div className="d-flex flex-column gap-1">
                    {siteConfig.phones.map((p, i) => (
                      <a href={p.href} key={i}>{p.value}</a>
                    ))}
                  </div>
                </div>

                <div className="help-card">
                  <i className="ph ph-envelope-open" />
                  <h4 className="mb-3">{t("email", locale)}</h4>
                  <div className="d-flex flex-column gap-1">
                    {siteConfig.emails.map((e, i) => (
                      <a href={`mailto:${e}`} key={i}>{e}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-lg-7">
              <div className="help-card h-100">
                <i className="ph ph-map-pin" />
                <h4 className="mb-3">{t("clinicAddresses", locale)}</h4>
                <div className="adress d-flex flex-column gap-2">
                  {siteConfig.clinics.map((c) => (
                    <span key={c.id}>{pick(c, "name", locale)}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
