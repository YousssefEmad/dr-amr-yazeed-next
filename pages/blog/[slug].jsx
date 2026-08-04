import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import { RichText } from "@/components/BlogCard";
import { posts, getPostBySlug } from "@/data/blog";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { pick, pickBlocks, t } from "@/lib/i18n";

export default function BlogDetailsPage({ post }) {
  const { locale } = useLocale();
  if (!post) return null;

  const title = pick(post, "title", locale);
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 4);
  const blocks = pickBlocks(post.content, post.contentEn, locale);

  return (
    <>
      <SEO
        title={title}
        description={pick(post, "excerpt", locale)}
        image={post.image}
        path={`/blog/${post.slug}`}
        type="article"
      />

      <PageBanner title={title} crumb={t("articleDetails", locale)} />

      <section className="blog-details pt-80 pb-80">
        <div className="container">
          <div className="row g-4 position-relative">
            <div className="col-lg-8">
              <div className="details-left mb-4">
                <img src={post.image} alt={title} className="img-fluid w-100" />
                <div className="details-content pt-3">
                  <ul className="list-unstyled d-flex align-items-center gap-2 mt-3">
                    <li className="d-flex align-items-center gap-2">
                      <i className="ph ph-calendar" /> {post.date}
                    </li>
                  </ul>
                  <h2 className="mb-3">{title}</h2>
                  <RichText blocks={blocks} />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg4-box">
                <h4 className="mb-3">{t("relatedArticles", locale)}</h4>
                <ul className="more-news">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}`}>
                        <img src={r.image} alt={pick(r, "title", locale)} />
                        <div>
                          <span className="fw-medium d-block mb-2">{pick(r, "title", locale)}</span>
                          <span className="text-secondary d-flex align-items-center gap-1">
                            {t("readFullArticle", locale)} <i className="ph ph-arrow-left" />
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug) || null;
  return { props: { post } };
}
