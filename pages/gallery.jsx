import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="معرض الصور"
        description="جولة مصورة داخل عيادة دكتور عمرو يزيد وبعض آراء العملاء."
        path="/gallery"
      />
      <PageBanner title="معرض الصور" crumb="معرض الصور" />

      <section className="gallery pt-120 pb-120">
        <div className="container">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
