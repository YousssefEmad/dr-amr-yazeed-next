import Link from "next/link";
import SEO from "@/components/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="الصفحة غير موجودة" noIndex path="/404" />
      <section className="error">
        <div className="container text-center">
          <h2 className="mb-3">404</h2>
          <p className="mb-4">عذرًا، الصفحة اللي بتدور عليها مش موجودة.</p>
          <Link href="/" className="primary-btn">
            الرجوع للرئيسية
          </Link>
        </div>
      </section>
    </>
  );
}
