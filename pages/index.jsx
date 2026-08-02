import Link from "next/link";
import SEO from "@/components/SEO";
import { AboutSection, DoctorChiefSection, WhyChooseSection } from "@/components/AboutSection";
import ServicesGrid from "@/components/ServiceCard";
import VideoGrid from "@/components/VideoSection";
import GalleryGrid from "@/components/GalleryGrid";
import { BlogCard } from "@/components/BlogCard";
import { doctor } from "@/data/doctor";
import { services } from "@/data/services";
import { posts } from "@/data/blog";
import { galleryImages } from "@/data/gallery";
import { clinicVideos, testimonialVideos } from "@/data/videos";

export default function HomePage() {
  return (
    <>
      <SEO
        title="الرئيسية"
        description="دكتور عمرو يزيد - استشاري أمراض وجراحات الشبكية والجسم الزجاجي والليزر. احجز موعدك الآن في معهد بحوث أمراض العيون."
        path="/"
      />

      {/* Hero Banner */}
      <section id="banner" className="banner space-header">
        <div className="banner-img">
          <img src={doctor.heroImage} alt={doctor.name} />
        </div>
        <div className="container">
          <div className="row banner-content">
            <div className="col-12">
              <h2 className="hero-text mb-3">{doctor.name}</h2>
              <h3 className="text-white fw-normal">{doctor.jobTitle}</h3>
              <p className="text-white-50 mt-3">{doctor.affiliation}</p>
              <div className="d-flex justify-content-center">
                <Link href="/contact-us" className="theme-btn primary-btn mt-4">
                احجز موعدك الآن
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <ServicesGrid
        services={services}
        subHeading="خدماتنا الطبية"
        title="خدمات متخصصة لعلاج أمراض الشبكية وجراحات العيون"
      />

      <DoctorChiefSection />
      <WhyChooseSection />

      <VideoGrid videos={clinicVideos} subHeading="ما نقوله" title="فيديوهاتنا" cols="col-lg-2" />

      <section className="gallery pt-120 pb-120">
        <div className="container">
          <div className="section-title">
            <span className="sub-heading">معرض الصور</span>
            <h2 className="mb-3">جولة داخل العيادة وبعض آراء عملائنا</h2>
          </div>
          <GalleryGrid images={galleryImages} />
          <div className="d-flex justify-content-center mt-4">
            <Link href="/gallery" className="outline-btn secondary playFairFont">
              عرض جميع الصور <i className="ph ph-arrow-left" />
            </Link>
          </div>
        </div>
      </section>

      <VideoGrid videos={testimonialVideos} subHeading="آراء العملاء" title="آراء عملاءنا" />

      <section className="recent-news pt-120 pb-120">
        <div className="container">
          <div className="section-title">
            <h4 className="sub-heading">أحدث المقالات</h4>
            <h2 className="mb-3">معلومات طبية تساعدك على الحفاظ على صحة عينيك</h2>
          </div>
          <div className="row g-4">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Link href="/blog" className="outline-btn secondary playFairFont">
              عرض جميع المقالات <i className="ph ph-arrow-left" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
