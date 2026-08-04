import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { pick, t } from "@/lib/i18n";

export function BlogCard({ post }) {
  const { locale } = useLocale();

  return (
    <div className="col-xl-6">
      <div className="blog-list">
        <div className="blog-img">
          <img src={post.image} alt={pick(post, "title", locale)} loading="lazy" />
        </div>
        <div className="blog-content">
          <h4 className="mb-2">{pick(post, "title", locale)}</h4>
          <p className="mb-4">{pick(post, "excerpt", locale)}</p>
          <Link href={`/blog/${post.slug}`} className="d-flex gap-1 align-items-center">
            {t("readArticle", locale)} <i className="ph ph-arrow-left" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function RichText({ blocks }) {
  if (!blocks?.length) return null;

  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "paragraph") return <p key={i}>{block.text}</p>;
        if (block.type === "heading") {
          const Tag = `h${block.level || 3}`;
          return <Tag key={i}>{block.text}</Tag>;
        }
        if (block.type === "list") {
          return (
            <ul key={i}>
              {block.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </>
  );
}
