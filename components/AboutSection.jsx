import Link from "next/link";
import { doctor } from "@/data/doctor";

export function AboutSection({ linkToAbout = true }) {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img src={doctor.portraitImage} className="about-img" alt={doctor.name} />
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <span className="sub-heading">{doctor.jobTitle}</span>
                <h2 className="mb-3">رعاية متخصصة للحفاظ على صحة الشبكية وجودة الإبصار</h2>
                <p className="mb-3">{doctor.shortBio}</p>
                <ul className="team-feature">
                  {doctor.qualifications.map((q, i) => (
                    <li key={i}>
                      <i className="ph ph-check-circle" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
                {linkToAbout && (
                  <Link href="/about-us" className="primary-btn playFairFont">
                    تعرف على الدكتور <i className="ph ph-arrow-left" />
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

export function DoctorChiefSection() {
  return (
    <section className="tp-doctor__area mt-5">
      <div className="container-fluid">
        <div className="row section-title">
          <div className="col-12 text-center">
            <span className="sub-heading">نبذة عن الدكتور</span>
            <h2 className="mb-3">خبرة متخصصة في تشخيص وعلاج أمراض الشبكية</h2>
          </div>
        </div>
        <div className="tp-doctor__chief">
          <div className="tp-doctor__chief-info">
            <h2 className="tp-doctor__chief-name">{doctor.name}</h2>
            <h5 className="mb-3">
              {doctor.jobTitle} - {doctor.affiliation}
            </h5>
            <p>{doctor.longBio}</p>
          </div>
          <div className="tp-doctor__chief-img">
            <img src={doctor.secondaryImage} alt={doctor.name} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  const { whyChooseUs } = doctor;
  return (
    <section className="whychoose">
      <div className="container">
        <div className="whychoose-card">
          <span className="sub-heading">{whyChooseUs.subHeading}</span>
          <h2 className="pb-1">{whyChooseUs.heading}</h2>
          <p className="mb-4">{whyChooseUs.description}</p>
          <ul className="why-list">
            {whyChooseUs.points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
          <Link href="/contact-us" className="primary-btn">
            احجز موعدك الآن <i className="ph ph-arrow-left" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function MissionVisionSection() {
  const { mission, vision } = doctor;
  return (
    <>
      <section className="whychoose mt-4">
        <div className="container">
          <div className="whychoose-card">
            <h4 className="sub-heading">رسالتنا</h4>
            <h2 className="mb-3">{mission.heading}</h2>
            <p className="mb-0">{mission.description}</p>
          </div>
        </div>
      </section>
      <section className="whychoose mt-5">
        <div className="container">
          <div className="whychoose-card">
            <h4 className="sub-heading">رؤيتنا</h4>
            <h2 className="mb-3">{vision.heading}</h2>
            <p className="mb-0">{vision.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
