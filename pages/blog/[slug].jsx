import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import { RichText } from "@/components/BlogCard";
import { posts, getPostBySlug } from "@/data/blog";
import Link from "next/link";

export default function BlogDetailsPage({ post }) {
  if (!post) return null;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <>
      <SEO title={post.title} description={post.excerpt} image={post.image} path={`/blog/${post.slug}`} type="article" />

      <PageBanner title={post.title} crumb="تفاصيل المقال" />

      <section className="blog-details pt-80 pb-80">
        <div className="container">
          <div className="row g-4 position-relative">
            <div className="col-lg-8">
              <div className="details-left mb-4">
                <img src={post.image} alt={post.title} className="img-fluid w-100" />
                <div className="details-content pt-3">
                  <ul className="list-unstyled d-flex align-items-center gap-2 mt-3">
                    <li className="d-flex align-items-center gap-2">
                      <i className="ph ph-calendar" /> {post.date}
                    </li>
                  </ul>
                  <h2 className="mb-3">{post.title}</h2>
                  <RichText blocks={post.content} />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg4-box">
                <h4 className="mb-3">مقالات ذات صلة</h4>
                <ul className="more-news">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}`}>
                        <img src={r.image} alt={r.title} />
                        <div>
                          <span className="fw-medium d-block mb-2">{r.title}</span>
                          <span className="text-secondary d-flex align-items-center gap-1">
                            اقرأ المقال <i className="ph ph-arrow-left" />
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
