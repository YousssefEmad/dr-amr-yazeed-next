export function VideoCard({ video, height = 420 }) {
  return (
    <div className="testimonial-card">
      <iframe
        src={video.embedUrl}
        style={{ border: "none", overflow: "hidden", height }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title={video.title}
        loading="lazy"
      />
    </div>
  );
}

export default function VideoGrid({ videos, title, subHeading, cols = "col-lg-3" }) {
  return (
    <section className="testimonial">
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
                <VideoCard video={v} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
