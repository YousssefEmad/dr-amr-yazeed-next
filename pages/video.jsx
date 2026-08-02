import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import VideoGrid from "@/components/VideoSection";
import { clinicVideos } from "@/data/videos";

export default function VideoPage() {
  return (
    <>
      <SEO
        title="فيديوهاتنا"
        description="شاهد فيديوهات من داخل عيادة دكتور عمرو يزيد وحالات حقيقية ونتائج العلاج."
        path="/video"
      />
      <PageBanner title="فيديوهاتنا" crumb="معرض الفيديوهات" />

      <VideoGrid videos={clinicVideos} cols="col-lg-2" />
    </>
  );
}
