import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="تواصل معنا"
        description="احجز موعدك الآن مع دكتور عمرو يزيد، أو تواصل معنا لمعرفة عناوين العيادات وأرقام الهواتف."
        path="/contact-us"
      />
      <PageBanner title="تواصل معنا" crumb="تواصل معنا" />

      <section className="contact-page pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="contact-form">
                <div className="contact-title text-center">
                  <h4 className="sub-heading">تواصل معنا</h4>
                  <h2>احجز موعدك الآن</h2>
                  <p className="mb-3">
                    املأ النموذج التالي وسيقوم فريقنا بالتواصل معك في أقرب وقت لتأكيد موعد الحجز والإجابة عن جميع
                    استفساراتك.
                  </p>
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
              <h4 className="sub-heading">تواصل معنا</h4>
              <h2>نحن هنا للإجابة عن استفساراتك</h2>
              <p>
                إذا كنت ترغب في حجز موعد أو لديك أي استفسار بخصوص أمراض الشبكية أو المياه البيضاء أو خدمات العيادة،
                يسعدنا التواصل معك.
              </p>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-md-5 col-lg-5">
              <div className="d-flex flex-column gap-3">
                <div className="help-card">
                  <i className="ph ph-phone-call" />
                  <h4 className="mb-3">اتصل بنا</h4>
                  <div className="d-flex flex-column gap-1">
                    {siteConfig.phones.map((p, i) => (
                      <a href={p.href} key={i}>{p.value}</a>
                    ))}
                  </div>
                </div>

                <div className="help-card">
                  <i className="ph ph-envelope-open" />
                  <h4 className="mb-3">البريد الإلكتروني</h4>
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
                <h4 className="mb-3">عناوين العيادات</h4>
                <div className="adress d-flex flex-column gap-2">
                  {siteConfig.clinics.map((c) => (
                    <span key={c.id}>{c.name}</span>
                  ))}
                </div>
              </div>
            </div>

            {siteConfig.clinics
              .filter((c) => c.mapEmbed)
              .map((c) => (
                <div className="col-lg-4 col-md-6" key={c.id}>
                  <div className="maps-contact">
                    <iframe src={c.mapEmbed} loading="lazy" title={c.name} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
