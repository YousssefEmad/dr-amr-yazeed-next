import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { pick, t } from "@/lib/i18n";

export function VideoCard({ video, variant = "reel" }) {
  const { locale } = useLocale();
  const title = pick(video, "title", locale);

  return (
    <div className={`video-card video-card--${variant}`}>
      <div className="video-card__frame">
        <iframe
          src={video.embedUrl}
          title={title}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function VideoGrid({
  videos,
  title,
  subHeading,
  cols = "col-lg-3",
  variant = "reel",
  moreHref,
  moreLabel,
}) {
  const { locale } = useLocale();

  return (
    <section className="testimonial video-section">
      <div className="container-fluid">
        <div className="testimonial-inner">
          {title && (
            <div className="section-title">
              {subHeading && <span className="sub-heading">{subHeading}</span>}
              <h2>{title}</h2>
            </div>
          )}
          <div className="row g-4">
            {videos.map((v) => (
              <div className={`${cols} col-6`} key={v.id}>
                <VideoCard video={v} variant={variant} />
              </div>
            ))}
          </div>
          {moreHref && (
            <div className="d-flex justify-content-center mt-4 pt-2">
              <Link href={moreHref} className="outline-btn secondary playFairFont">
                {moreLabel || t("moreVideos", locale)} <i className="ph ph-arrow-left" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
