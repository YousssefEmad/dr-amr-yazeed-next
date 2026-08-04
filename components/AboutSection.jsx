import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { pick, pickList, t } from "@/lib/i18n";
import { doctor } from "@/data/doctor";

export function AboutSection({ linkToAbout = true }) {
  const { locale } = useLocale();
  const qualifications = pickList(doctor, "qualifications", locale);

  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="container">
          <div className="row align-items-center g-4 about-row">
            <div className="col-lg-6 about-media-col">
              <img
                src={doctor.portraitImage}
                className="about-img"
                alt={pick(doctor, "name", locale)}
              />
            </div>
            <div className="col-lg-6 about-content-col">
              <div className="about-content">
                <span className="sub-heading">{pick(doctor, "jobTitle", locale)}</span>
                <h2 className="mb-3">{pick(doctor, "aboutHeading", locale)}</h2>
                <p className="mb-3">{pick(doctor, "shortBio", locale)}</p>
                <ul className="team-feature">
                  {qualifications.map((q, i) => (
                    <li key={i}>
                      <i className="ph ph-check-circle" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
                <p className="mb-4 text-n500">{pick(doctor, "tagline", locale)}</p>
                {linkToAbout && (
                  <Link href="/about-us" className="primary-btn playFairFont">
                    {pick(doctor, "learnMore", locale)} <i className="ph ph-arrow-left" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Side-by-side doctor profile — bio, qualifications, fellowships */
export function DoctorChiefSection() {
  const { locale } = useLocale();
  const qualifications = pickList(doctor, "qualifications", locale);

  return (
    <section className="tp-doctor__area doctor-chief-section">
      <div className="container">
        <div className="tp-doctor__chief">
          <div className="tp-doctor__chief-info">
            <h2 className="tp-doctor__chief-name">{pick(doctor, "name", locale)}</h2>
            <h5 className="mb-3 doctor-chief-role">
              {pick(doctor, "jobTitle", locale)} — {pick(doctor, "affiliation", locale)}
            </h5>
            <p>{pick(doctor, "shortBio", locale)}</p>
            <p>{pick(doctor, "longBio", locale)}</p>
            <ul className="team-feature doctor-chief-quals">
              {qualifications.map((q, i) => (
                <li key={i}>
                  <i className="ph ph-check-circle" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <p className="mb-4">{pick(doctor, "tagline", locale)}</p>
            <Link href="/contact-us" className="primary-btn">
              {t("bookNow", locale)} <i className="ph ph-arrow-left" />
            </Link>
          </div>
          <div className="tp-doctor__chief-img">
            <img src={doctor.secondaryImage} alt={pick(doctor, "name", locale)} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Parallax specialty banner with centered copy */
export function SpecialtyHeroSection() {
  const { locale } = useLocale();

  return (
    <section className="specialty-hero">
      <div
        className="specialty-hero__bg"
        style={{ backgroundImage: `url(${doctor.specialtyImage})` }}
        aria-hidden="true"
      />
      <div className="specialty-hero__overlay" />
      <div className="container specialty-hero__content">
        <h2>{pick(doctor, "specialtyHeadline", locale)}</h2>
        <p>{pick(doctor, "specialtyText", locale)}</p>
        <Link href="/contact-us" className="primary-btn">
          {t("bookNow", locale)} <i className="ph ph-arrow-left" />
        </Link>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  const { locale } = useLocale();
  const { whyChooseUs } = doctor;
  const points = pickList(whyChooseUs, "points", locale);

  return (
    <section className="whychoose">
      <div className="container">
        <div className="whychoose-card">
          <span className="sub-heading">{pick(whyChooseUs, "subHeading", locale)}</span>
          <h2 className="pb-1">{pick(whyChooseUs, "heading", locale)}</h2>
          <p className="mb-4">{pick(whyChooseUs, "description", locale)}</p>
          <ul className="why-list">
            {points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
          <Link href="/contact-us" className="primary-btn">
            {t("bookNow", locale)} <i className="ph ph-arrow-left" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function MissionVisionSection() {
  const { locale } = useLocale();
  const { mission, vision } = doctor;

  return (
    <>
      <section className="whychoose mt-4">
        <div className="container">
          <div className="whychoose-card">
            <h4 className="sub-heading">{t("mission", locale)}</h4>
            <h2 className="mb-3">{pick(mission, "heading", locale)}</h2>
            <p className="mb-0">{pick(mission, "description", locale)}</p>
          </div>
        </div>
      </section>
      <section className="whychoose mt-5">
        <div className="container">
          <div className="whychoose-card">
            <h4 className="sub-heading">{t("vision", locale)}</h4>
            <h2 className="mb-3">{pick(vision, "heading", locale)}</h2>
            <p className="mb-0">{pick(vision, "description", locale)}</p>
          </div>
        </div>
      </section>
    </>
  );
}
