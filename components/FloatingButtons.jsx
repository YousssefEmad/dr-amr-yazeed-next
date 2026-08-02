import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        className={`back-to-top ${show ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="الرجوع لأعلى الصفحة"
      >
        <i className="ph ph-arrow-up" />
      </button>

      <ul className="wrapper">
        <li className="icon call">
          <a href={siteConfig.phones[0].href} aria-label="اتصل بنا">
            <i className="ph ph-phone-call" />
          </a>
        </li>
        <li className="icon">
          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noreferrer"
            aria-label="تواصل عبر واتساب"
          >
            <i className="ph ph-whatsapp-logo" />
          </a>
        </li>
      </ul>
    </>
  );
}
