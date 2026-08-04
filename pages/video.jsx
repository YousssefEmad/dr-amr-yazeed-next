import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import VideoGrid from "@/components/VideoSection";
import { clinicVideos } from "@/data/videos";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/lib/i18n";

export default function VideoPage() {
  const { locale } = useLocale();

  return (
    <>
      <SEO
        title={t("ourVideos", locale)}
        description={t("seoVideosDesc", locale)}
        path="/video"
      />
      <PageBanner title={t("ourVideos", locale)} crumb={t("videos", locale)} />

      <VideoGrid videos={clinicVideos} cols="col-lg-2" />
    </>
  );
}
