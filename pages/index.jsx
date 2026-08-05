import Link from "next/link";
import SEO from "@/components/SEO";
import {
  AboutSection,
  SpecialtyHeroSection,
  WhyChooseSection,
} from "@/components/AboutSection";
import ServicesGrid from "@/components/ServiceCard";
import VideoGrid from "@/components/VideoSection";
import GalleryGrid from "@/components/GalleryGrid";
import { BlogCard } from "@/components/BlogCard";
import { doctor } from "@/data/doctor";
import { services } from "@/data/services";
import { posts } from "@/data/blog";
import { galleryImages } from "@/data/gallery";
import { clinicVideos, homeTestimonialVideos } from "@/data/videos";
import { useLocale } from "@/context/LocaleContext";
import { pick, t } from "@/lib/i18n";

export default function HomePage() {
  const { locale } = useLocale();
  const homeServices = services.slice(0, 4);

  return (
    <>
      <SEO
        title={t("home", locale)}
        description={t("seoHomeDesc", locale)}
        path="/"
      />

      <section id="banner" className="banner space-header">
        <div className="banner-img">
          <img
            src={doctor.heroImage}
            alt={pick(doctor, "name", locale)}
          />
        </div>
        <div className="container">
          <div className="row banner-content">
            <div className="col-12 col-lg-8 col-xl-7">
              <h1 className="hero-text mb-3">{pick(doctor, "name", locale)}</h1>
              <h2 className="hero-job text-white fw-normal">{pick(doctor, "jobTitle", locale)}</h2>
              <p className="hero-affiliation text-white-50 mt-3">{pick(doctor, "affiliation", locale)}</p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Link href="/contact-us" className="theme-btn primary-btn mt-4">
                  {t("bookNow", locale)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <ServicesGrid
        services={homeServices}
        subHeading={t("ourServices", locale)}
        title={t("servicesTitle", locale)}
        compact
      />

      <SpecialtyHeroSection />
      <WhyChooseSection />

      <VideoGrid
        videos={clinicVideos}
        subHeading={t("videosSub", locale)}
        title={t("videosTitle", locale)}
        cols="col-lg"
        variant="reel"
      />

      <section className="gallery pt-120 pb-120">
        <div className="container">
          <div className="section-title">
            <span className="sub-heading">{t("gallerySub", locale)}</span>
            <h2 className="mb-3">{t("galleryTitle", locale)}</h2>
          </div>
          <GalleryGrid images={galleryImages} />
          <div className="d-flex justify-content-center mt-4">
            <Link href="/gallery" className="outline-btn secondary playFairFont">
              {t("allPhotos", locale)} <i className="ph ph-arrow-left" />
            </Link>
          </div>
        </div>
      </section>

      <VideoGrid
        videos={homeTestimonialVideos}
        subHeading={t("testimonialsSub", locale)}
        title={t("testimonialsTitle", locale)}
        cols="col-lg-3"
        variant="wide"
        moreHref="/testimonials"
        moreLabel={t("moreTestimonials", locale)}
      />

      <section className="recent-news pt-120 pb-120">
        <div className="container">
          <div className="section-title">
            <h4 className="sub-heading">{t("latestArticles", locale)}</h4>
            <h2 className="mb-3">{t("articlesTitle", locale)}</h2>
          </div>
          <div className="row g-4">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Link href="/blog" className="outline-btn secondary playFairFont">
              {t("allArticles", locale)} <i className="ph ph-arrow-left" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
