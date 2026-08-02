import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import { BlogCard } from "@/components/BlogCard";
import { posts } from "@/data/blog";

export default function BlogListPage() {
  return (
    <>
      <SEO
        title="المقالات الطبية"
        description="مقالات ومعلومات طبية موثوقة عن أمراض الشبكية والجسم الزجاجي والمياه البيضاء، بقلم دكتور عمرو يزيد."
        path="/blog"
      />
      <PageBanner title="المقالات" crumb="المقالات" />

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
