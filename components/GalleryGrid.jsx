import { useState } from "react";

export default function GalleryGrid({ images }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="row g-3">
        {images.map((img) => (
          <div className="col-4" key={img.id}>
            <button
              className="project-card"
              style={{ width: "100%", padding: 0, border: 0, background: "none", cursor: "pointer" }}
              onClick={() => setActive(img)}
              aria-label={img.alt}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="info">
                <span className="plus-icon">
                  <i className="ph ph-plus" />
                </span>
              </span>
            </button>
          </div>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.9)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
          }}
        >
          <img src={active.src} alt={active.alt} style={{ maxWidth: "92%", maxHeight: "92%", borderRadius: 8 }} />
        </div>
      )}
    </>
  );
}
