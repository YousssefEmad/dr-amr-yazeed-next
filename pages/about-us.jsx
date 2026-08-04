import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import {
  AboutSection,
  DoctorChiefSection,
  MissionVisionSection,
} from "@/components/AboutSection";
import { doctor } from "@/data/doctor";
import { useLocale } from "@/context/LocaleContext";
import { pick, t } from "@/lib/i18n";

export default function AboutPage() {
  const { locale } = useLocale();

  return (
    <>
      <SEO
        title={t("about", locale)}
        description={`${pick(doctor, "name", locale)} - ${pick(doctor, "jobTitle", locale)} - ${pick(doctor, "affiliation", locale)}.`}
        path="/about-us"
      />

      <PageBanner title={t("aboutUs", locale)} crumb={t("aboutUs", locale)} />
      <AboutSection linkToAbout={false} />
      <DoctorChiefSection />
      <MissionVisionSection />
    </>
  );
}
