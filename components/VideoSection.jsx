import { useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { pick, t } from "@/lib/i18n";

const PIN_DURATION = 1500;

/**
 * Facebook's player takes focus when a video starts, and the browser then
 * scrolls that iframe into view — which drags the whole page. Cross-origin
 * frames give us no events from the inside, so we detect focus leaving the
 * document while the pointer sits over this section and hold the page still.
 */
function useKeepScrollOnPlay(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const root = document.documentElement;
    let lastY = window.scrollY;
    let pointerInside = false;
    let pinning = false;
    let pinUntil = 0;

    const currentY = () => window.scrollY || root.scrollTop || 0;

    const setY = (y) => {
      root.scrollTop = y;
      window.scrollTo(0, y);
    };

    const onScroll = () => {
      if (!pinning) lastY = currentY();
    };

    const pin = () => {
      const targetY = lastY;
      pinUntil = Date.now() + PIN_DURATION;

      if (pinning) return;
      pinning = true;

      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";

      const hold = () => {
        if (Math.abs(currentY() - targetY) > 1) setY(targetY);

        if (Date.now() < pinUntil) {
          requestAnimationFrame(hold);
        } else {
          pinning = false;
          root.style.scrollBehavior = previousBehavior;
          lastY = currentY();
        }
      };

      requestAnimationFrame(hold);
    };

    const onPointerEnter = () => {
      pointerInside = true;
    };

    const onPointerLeave = () => {
      pointerInside = false;
    };

    const onPointerDown = () => {
      pointerInside = true;
      lastY = currentY();
    };

    const onFocusIn = (event) => {
      if (section.contains(event.target)) pin();
    };

    const onWindowBlur = () => {
      const active = document.activeElement;
      const focusMovedIntoFrame = active && section.contains(active);
      if (focusMovedIntoFrame || pointerInside) pin();
    };

    section.addEventListener("mouseenter", onPointerEnter);
    section.addEventListener("mouseleave", onPointerLeave);
    section.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("focusin", onFocusIn, true);
    window.addEventListener("blur", onWindowBlur);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      section.removeEventListener("mouseenter", onPointerEnter);
      section.removeEventListener("mouseleave", onPointerLeave);
      section.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("focusin", onFocusIn, true);
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("scroll", onScroll);
      root.style.scrollBehavior = "";
    };
  }, [sectionRef]);
}

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
  const sectionRef = useRef(null);
  useKeepScrollOnPlay(sectionRef);

  return (
    <section className="testimonial video-section" ref={sectionRef}>
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
