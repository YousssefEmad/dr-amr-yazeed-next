import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/lib/i18n";

export default function GalleryPage() {
  const { locale } = useLocale();

  return (
    <>
      <SEO
        title={t("gallery", locale)}
        description={t("seoGalleryDesc", locale)}
        path="/gallery"
      />
      <PageBanner title={t("gallery", locale)} crumb={t("gallery", locale)} />

      <section className="gallery pt-120 pb-120">
        <div className="container">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
