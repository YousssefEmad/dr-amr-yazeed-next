import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import { AboutSection, MissionVisionSection } from "@/components/AboutSection";
import { doctor } from "@/data/doctor";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="نبذة عن الدكتور"
        description={`${doctor.name} - ${doctor.jobTitle} - ${doctor.affiliation}. تعرف على المؤهلات العلمية والخبرات الطبية.`}
        path="/about-us"
      />

      <PageBanner title="من نحن" crumb="من نحن" />
      <AboutSection linkToAbout={false} />
      <MissionVisionSection />
    </>
  );
}
