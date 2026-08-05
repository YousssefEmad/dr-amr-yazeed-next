import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import VideoGrid from "@/components/VideoSection";
import { testimonialVideos } from "@/data/videos";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/lib/i18n";

export default function TestimonialsPage() {
  const { locale } = useLocale();

  return (
    <>
      <SEO
        title={t("testimonialsPage", locale)}
        description={t("seoTestimonialsDesc", locale)}
        path="/testimonials"
      />
      <PageBanner
        title={t("testimonialsPage", locale)}
        crumb={t("testimonialsPage", locale)}
      />

      <VideoGrid
        videos={testimonialVideos}
        cols="col-lg-3"
        variant="wide"
      />
    </>
  );
}
