import Link from "next/link";

export default function PageBanner({ title, crumb, bg = "/images/breadcramb.png" }) {
  return (
    <section
      className="page-banner space-header"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container position-relative">
        <div className="row">
          <div className="col-12 banner-content">
            <h2 className="display-4 mb-3">{title}</h2>
            <ul>
              <li><Link href="/">الرئيسية</Link></li>
              <i className="ph ph-caret-left" />
              <li>{crumb || title}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
