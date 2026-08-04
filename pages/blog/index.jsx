import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import { BlogCard } from "@/components/BlogCard";
import { posts } from "@/data/blog";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/lib/i18n";

export default function BlogListPage() {
  const { locale } = useLocale();

  return (
    <>
      <SEO
        title={t("medicalArticles", locale)}
        description={t("seoBlogDesc", locale)}
        path="/blog"
      />
      <PageBanner title={t("blog", locale)} crumb={t("blog", locale)} />

      <section className="pt-120 pb-120 recent-news">
        <div className="container">
          <div className="row g-4">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
